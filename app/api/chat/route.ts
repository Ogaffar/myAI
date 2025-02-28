import { OpenAI } from "openai";
import { Pinecone } from "@pinecone-database/pinecone";
import Anthropic from "@anthropic-ai/sdk";
import { AIProviders, Chat, Intention, IntentionType } from "@/types";
import { IntentionModule } from "@/modules/intention";
import { ResponseModule } from "@/modules/response";
import { PINECONE_INDEX_NAME } from "@/configuration/pinecone";
import { NextResponse } from "next/server";
import { z } from "zod"; // For runtime validation

// ===== Configuration =====
export const maxDuration = 60;
export const runtime = "edge"; // Opt into Edge runtime

// ===== Environment validation =====
const requiredEnvVars = [
  { key: "PINECONE_API_KEY", name: "Pinecone" },
  { key: "OPENAI_API_KEY", name: "OpenAI" },
  { key: "ANTHROPIC_API_KEY", name: "Anthropic", optional: true },
  { key: "FIREWORKS_API_KEY", name: "Fireworks", optional: true },
] as const;

// ===== Type definitions =====
interface ServiceContainer {
  providers: AIProviders;
  vectorStore: {
    client: Pinecone;
    index: ReturnType<Pinecone['Index']>;
  };
  intentionDetector: typeof IntentionModule;
  responseHandler: typeof ResponseModule;
}

// Schema for request validation
const chatRequestSchema = z.object({
  chat: z.object({
    id: z.string(),
    messages: z.array(
      z.object({
        role: z.enum(["user", "assistant", "system"]),
        content: z.string(),
      })
    ),
    metadata: z.record(z.unknown()).optional(),
  }),
});

// ===== Service initialization =====
/**
 * Initialize all required services
 * @returns Initialized service container
 * @throws Error if required environment variables are missing
 */
function initializeServices(): ServiceContainer {
  // Validate environment variables
  for (const envVar of requiredEnvVars) {
    const value = process.env[envVar.key];
    if (!value && !envVar.optional) {
      throw new Error(`${envVar.name} API key (${envVar.key}) is not set`);
    }
  }

  // Initialize Pinecone
  const pineconeClient = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });
  const pineconeIndex = pineconeClient.Index(PINECONE_INDEX_NAME);

  // Initialize AI providers
  const providers: AIProviders = {
    openai: new OpenAI({
      apiKey: process.env.OPENAI_API_KEY!,
    }),
    anthropic: process.env.ANTHROPIC_API_KEY
      ? new Anthropic({
          apiKey: process.env.ANTHROPIC_API_KEY,
        })
      : null,
    fireworks: process.env.FIREWORKS_API_KEY
      ? new OpenAI({
          baseURL: "https://api.fireworks.ai/inference/v1",
          apiKey: process.env.FIREWORKS_API_KEY,
        })
      : null,
  };

  return {
    providers,
    vectorStore: {
      client: pineconeClient,
      index: pineconeIndex,
    },
    intentionDetector: IntentionModule,
    responseHandler: ResponseModule,
  };
}

// ===== Response handlers based on intention =====
/**
 * Response strategy map: maps intention types to handler functions
 */
const intentionHandlers: Record<
  IntentionType,
  (services: ServiceContainer, chat: Chat) => Promise<Response>
> = {
  question: async (services, chat) => {
    return services.responseHandler.respondToQuestion(
      chat,
      services.providers,
      services.vectorStore.index
    );
  },
  hostile_message: async (services, chat) => {
    return services.responseHandler.respondToHostileMessage(
      chat,
      services.providers
    );
  },
  random_message: async (services, chat) => {
    return services.responseHandler.respondToRandomMessage(
      chat,
      services.providers
    );
  },
  // Add additional intention handlers here
};

// ===== Request handler =====
/**
 * Main API handler function
 */
export async function POST(req: Request) {
  // Initialize tracing/logging for the request
  const requestId = crypto.randomUUID();
  const startTime = Date.now();
  console.log(`[${requestId}] Request received`);

  try {
    // Initialize services
    const services = initializeServices();
    
    // Parse and validate request
    const body = await req.json();
    const parseResult = chatRequestSchema.safeParse(body);
    
    if (!parseResult.success) {
      console.error(`[${requestId}] Invalid request format`, parseResult.error);
      return NextResponse.json(
        { error: "Invalid request format", details: parseResult.error.format() },
        { status: 400 }
      );
    }
    
    const { chat } = parseResult.data;
    
    // Detect intention
    console.log(`[${requestId}] Determining intention for chat ${chat.id}`);
    const intention: Intention = await services.intentionDetector.detectIntention({
      chat: chat,
      openai: services.providers.openai,
    });
    console.log(`[${requestId}] Detected intention: ${intention.type}`);
    
    // Get appropriate handler for the intention type
    const handler = intentionHandlers[intention.type] || intentionHandlers.random_message;
    
    // Execute handler and return response
    const response = await handler(services, chat);
    
    const duration = (Date.now() - startTime) / 1000;
    console.log(`[${requestId}] Request completed in ${duration.toFixed(2)}s`);
    
    return response;
    
  } catch (error) {
    const duration = (Date.now() - startTime) / 1000;
    console.error(`[${requestId}] Error handling request (${duration.toFixed(2)}s):`, error);
    
    // Determine if this is a known error type we can handle gracefully
    if (error instanceof Error) {
      // Check for specific API errors by examining the error message
      if (error.message.includes("rate limit") || error.message.includes("429")) {
        return NextResponse.json(
          { error: "Service is currently busy. Please try again shortly." },
          { status: 429 }
        );
      }
      
      if (error.message.includes("authorization") || error.message.includes("authentication") || error.message.includes("401")) {
        // Log but don't expose API key issues to clients
        console.error(`[${requestId}] API authorization error`);
        return NextResponse.json(
          { error: "Internal service configuration error" },
          { status: 500 }
        );
      }
    }
    
    // Generic error response
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}

// ===== Health check endpoint =====
export async function GET() {
  try {
    // Minimal initialization to check connections
    const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY! });
    
    // Return basic health information
    return NextResponse.json({
      status: "ok",
      version: process.env.APP_VERSION || "development",
      environment: process.env.NODE_ENV,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Health check failed:", error);
    return NextResponse.json(
      { status: "error", message: "Service dependencies unavailable" },
      { status: 503 }
    );
  }
}
