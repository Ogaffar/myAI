import {
  Chat,
  Chunk,
  Source,
  CoreMessage,
  AIProviders,
  ProviderName,
  Citation,
  ResponseType,
} from "@/types";
import {
  convertToCoreMessages,
  embedHypotheticalData,
  generateHypotheticalData,
  getSourcesFromChunks,
  searchForChunksUsingEmbedding,
  getContextFromSources,
  getCitationsFromChunks,
  stripMessagesOfCitations,
} from "@/utilities/chat";
import {
  queueAssistantResponse,
  queueError,
  queueIndicator,
} from "@/actions/streaming";
import {
  HISTORY_CONTEXT_LENGTH,
  DEFAULT_RESPONSE_MESSAGE,
} from "@/configuration/chat";
import {
  RESPOND_TO_HOSTILE_MESSAGE_SYSTEM_PROMPT,
  RESPOND_TO_QUESTION_BACKUP_SYSTEM_PROMPT,
  RESPOND_TO_QUESTION_SYSTEM_PROMPT,
  RESPOND_TO_RANDOM_MESSAGE_SYSTEM_PROMPT,
} from "@/configuration/prompts";
import {
  RANDOM_RESPONSE_PROVIDER,
  RANDOM_RESPONSE_MODEL,
  HOSTILE_RESPONSE_PROVIDER,
  HOSTILE_RESPONSE_MODEL,
  QUESTION_RESPONSE_PROVIDER,
  QUESTION_RESPONSE_MODEL,
  HOSTILE_RESPONSE_TEMPERATURE,
  QUESTION_RESPONSE_TEMPERATURE,
  RANDOM_RESPONSE_TEMPERATURE,
} from "@/configuration/models";

// Define response configuration types
interface ResponseConfig {
  providerName: ProviderName;
  modelName: string;
  systemPromptFn: () => string;
  temperature: number;
  requiresHistory: boolean;
}

/**
 * ResponseModule is responsible for collecting data and building a response
 */
export class ResponseModule {
  // Response configuration map
  private static responseConfigs: Record<ResponseType, ResponseConfig> = {
    RANDOM: {
      providerName: RANDOM_RESPONSE_PROVIDER,
      modelName: RANDOM_RESPONSE_MODEL,
      systemPromptFn: RESPOND_TO_RANDOM_MESSAGE_SYSTEM_PROMPT,
      temperature: RANDOM_RESPONSE_TEMPERATURE,
      requiresHistory: true,
    },
    HOSTILE: {
      providerName: HOSTILE_RESPONSE_PROVIDER,
      modelName: HOSTILE_RESPONSE_MODEL,
      systemPromptFn: RESPOND_TO_HOSTILE_MESSAGE_SYSTEM_PROMPT,
      temperature: HOSTILE_RESPONSE_TEMPERATURE,
      requiresHistory: false,
    },
    QUESTION: {
      providerName: QUESTION_RESPONSE_PROVIDER,
      modelName: QUESTION_RESPONSE_MODEL,
      systemPromptFn: () => "", // Will be set dynamically based on context
      temperature: QUESTION_RESPONSE_TEMPERATURE,
      requiresHistory: true,
    }
  };

  /**
   * Create standard streaming response with proper headers
   */
  private static createStreamResponse(stream: ReadableStream): Response {
    return new Response(stream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  }

  /**
   * Get appropriate messages based on configuration
   */
  private static getMessages(chat: Chat, requiresHistory: boolean): CoreMessage[] {
    if (!requiresHistory) return [];
    
    const messageSlice = chat.messages.slice(-HISTORY_CONTEXT_LENGTH);
    const strippedMessages = stripMessagesOfCitations(messageSlice);
    return convertToCoreMessages(strippedMessages);
  }

  /**
   * Handle basic response generation for simple response types
   */
  private static async handleBasicResponse(
    responseType: ResponseType,
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    const config = this.responseConfigs[responseType];
    
    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        
        const systemPrompt = config.systemPromptFn();
        const messages = ResponseModule.getMessages(chat, config.requiresHistory);
        const citations: Citation[] = [];
        
        queueAssistantResponse({
          controller,
          providers,
          providerName: config.providerName,
          messages,
          model_name: config.modelName,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature: config.temperature,
        });
      },
    });
    
    return this.createStreamResponse(stream);
  }

  /**
   * Respond to a random message from the user
   */
  static async respondToRandomMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    return this.handleBasicResponse("RANDOM", chat, providers);
  }

  /**
   * Respond to a hostile message from the user
   */
  static async respondToHostileMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    return this.handleBasicResponse("HOSTILE", chat, providers);
  }

  /**
   * Respond to a question from the user
   */
  static async respondToQuestion(
    chat: Chat,
    providers: AIProviders,
    index: any
  ): Promise<Response> {
    const config = this.responseConfigs.QUESTION;
    
    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Figuring out what your answer looks like",
          icon: "thinking",
        });
        
        try {
          // Generate hypothetical data and get embedding
          const hypotheticalData: string = await generateHypotheticalData(
            chat,
            providers.openai
          );
          const { embedding }: { embedding: number[] } = await embedHypotheticalData(
            hypotheticalData, 
            providers.openai
          );
          
          // Search for relevant chunks
          queueIndicator({
            controller,
            status: "Reading through documents",
            icon: "searching",
          });
          
          const chunks: Chunk[] = await searchForChunksUsingEmbedding(
            embedding,
            index
          );
          
          // Process sources and get context
          const sources: Source[] = await getSourcesFromChunks(chunks);
          queueIndicator({
            controller,
            status: `Read over ${sources.length} documents`,
            icon: "documents",
          });
          
          const citations: Citation[] = await getCitationsFromChunks(chunks);
          const contextFromSources = await getContextFromSources(sources);
          const systemPrompt = RESPOND_TO_QUESTION_SYSTEM_PROMPT(contextFromSources);
          
          // Generate response
          queueIndicator({
            controller,
            status: "Coming up with an answer",
            icon: "thinking",
          });
          
          queueAssistantResponse({
            controller,
            providers,
            providerName: config.providerName,
            messages: stripMessagesOfCitations(
              chat.messages.slice(-HISTORY_CONTEXT_LENGTH)
            ),
            model_name: config.modelName,
            systemPrompt,
            citations,
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: config.temperature,
          });
        } catch (error: any) {
          console.error("Error in respondToQuestion:", error);
          
          // Handle error by using backup system prompt
          queueError({
            controller,
            error_message: error.message ?? DEFAULT_RESPONSE_MESSAGE,
          });
          
          queueAssistantResponse({
            controller,
            providers,
            providerName: config.providerName,
            messages: [],
            model_name: config.modelName,
            systemPrompt: RESPOND_TO_QUESTION_BACKUP_SYSTEM_PROMPT(),
            citations: [],
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: config.temperature,
          });
        }
      },
    });
    
    return this.createStreamResponse(stream);
  }
}
