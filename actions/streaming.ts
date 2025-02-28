import OpenAI from "openai";
import Anthropic from "@anthropic-ai/sdk";
import {
  CoreMessage,
  StreamedLoading,
  StreamedMessage,
  IndicatorIconType,
  StreamedDone,
  AIProviders,
  ProviderName,
  Citation,
  StreamedError,
} from "@/types";

// Configuration constants
const MAX_TOKENS = 4096;
const LOGGING_ENABLED = true;

export interface QueueAssistantResponseParams {
  controller: ReadableStreamDefaultController;
  providers: AIProviders;
  providerName: ProviderName;
  messages: CoreMessage[];
  model_name: string;
  systemPrompt: string;
  citations: Citation[];
  error_message?: string;
  temperature: number;
}

/**
 * Helper function to log messages when logging is enabled
 */
function logMessage(message: string, data?: any): void {
  if (LOGGING_ENABLED) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
}

/**
 * Helper function to time operations
 */
function startTimer(): () => number {
  const startTime = Date.now();
  return () => (Date.now() - startTime) / 1000;
}

/**
 * Helper function to encode and enqueue a message to the stream
 */
function enqueueMessage(controller: ReadableStreamDefaultController, message: any): void {
  controller.enqueue(new TextEncoder().encode(JSON.stringify(message) + "\n"));
}

/**
 * Handle streaming responses from OpenAI compatible providers
 */
export async function handleOpenAIStream({
  controller,
  providers,
  providerName,
  messages,
  model_name,
  systemPrompt,
  citations,
  temperature,
}: QueueAssistantResponseParams) {
  const client: OpenAI = providerName === "fireworks" ? providers.fireworks : providers.openai;
  
  logMessage(`Streaming ${providerName} response...`, {
    temperature,
    model_name,
    systemPrompt,
    messages: messages.length, // Log count instead of full messages for brevity
  });

  const getElapsedTime = startTimer();
  let responseBuffer = "";

  try {
    const streamedResponse = await client.chat.completions.create({
      model: model_name,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      stream: true,
      temperature,
    });

    if (!streamedResponse) {
      throw new Error("No stream response received");
    }

    for await (const chunk of streamedResponse) {
      const content = chunk.choices[0]?.delta.content ?? "";
      responseBuffer += content;
      
      const streamedMessage: StreamedMessage = {
        type: "message",
        message: {
          role: "assistant",
          content: responseBuffer,
          citations,
        },
      };
      
      enqueueMessage(controller, streamedMessage);
    }

    logMessage(`Done streaming ${providerName} response in ${getElapsedTime()}s`);
    
    const donePayload: StreamedDone = {
      type: "done",
      final_message: responseBuffer,
    };
    
    enqueueMessage(controller, donePayload);
  } catch (error) {
    logMessage(`Error in ${providerName} stream:`, error);
    await queueError({ 
      controller, 
      error_message: error instanceof Error ? error.message : "Unknown error occurred" 
    });
    return;
  }
  
  controller.close();
}

/**
 * Handle streaming responses from Anthropic
 */
export async function handleAnthropicStream({
  controller,
  providers,
  messages,
  model_name,
  systemPrompt,
  citations,
  temperature,
}: QueueAssistantResponseParams) {
  const anthropicClient: Anthropic = providers.anthropic;
  
  // Transform messages to Anthropic format
  const anthropicMessages: Anthropic.Messages.MessageParam[] = messages.map(msg => ({
    role: msg.role === "user" ? "user" : "assistant",
    content: msg.content,
  }));

  logMessage("Streaming Anthropic response...", {
    temperature,
    model_name,
    systemPrompt,
    messages: messages.length, // Log count instead of full messages for brevity
  });

  const getElapsedTime = startTimer();
  let responseBuffer = "";

  try {
    await anthropicClient.messages
      .stream({
        messages: anthropicMessages,
        model: model_name,
        system: systemPrompt,
        max_tokens: MAX_TOKENS,
        temperature,
      })
      .on("text", (textDelta) => {
        responseBuffer += textDelta;
        
        const streamedMessage: StreamedMessage = {
          type: "message",
          message: {
            role: "assistant",
            content: responseBuffer,
            citations,
          },
        };
        
        enqueueMessage(controller, streamedMessage);
      })
      .on("error", (error) => {
        logMessage("Error in Anthropic stream:", error);
        queueError({ 
          controller, 
          error_message: error.message || "Unknown error with Anthropic" 
        });
      })
      .on("end", () => {
        logMessage(`Done streaming Anthropic response in ${getElapsedTime()}s`);
        
        const donePayload: StreamedDone = {
          type: "done",
          final_message: responseBuffer,
        };
        
        enqueueMessage(controller, donePayload);
        controller.close();
      });
  } catch (error) {
    logMessage("Error setting up Anthropic stream:", error);
    await queueError({ 
      controller, 
      error_message: error instanceof Error ? error.message : "Unknown error occurred" 
    });
    controller.close();
  }
}

/**
 * Main function to route requests to the appropriate provider
 */
export async function queueAssistantResponse({
  controller,
  providers,
  providerName,
  messages,
  model_name,
  systemPrompt,
  citations,
  error_message,
  temperature,
}: QueueAssistantResponseParams) {
  try {
    if (providerName === "openai" || providerName === "fireworks") {
      await handleOpenAIStream({
        controller,
        providers,
        providerName,
        messages,
        model_name,
        systemPrompt,
        citations,
        error_message,
        temperature,
      });
    } else if (providerName === "anthropic") {
      await handleAnthropicStream({
        controller,
        providers,
        providerName,
        messages,
        model_name,
        systemPrompt,
        citations,
        error_message,
        temperature,
      });
    } else {
      throw new Error(`Unsupported provider: ${providerName}`);
    }
  } catch (error) {
    logMessage("Error in queueAssistantResponse:", error);
    await queueError({ 
      controller, 
      error_message: error instanceof Error ? error.message : "Unknown error occurred" 
    });
    controller.close();
  }
}

export interface QueueLoadingParams {
  controller: ReadableStreamDefaultController;
  status: string;
  icon: IndicatorIconType;
}

/**
 * Queue a loading indicator to the stream
 */
export async function queueIndicator({
  controller,
  status,
  icon,
}: QueueLoadingParams) {
  const loadingPayload: StreamedLoading = {
    type: "loading",
    indicator: {
      status,
      icon,
    },
  };
  
  enqueueMessage(controller, loadingPayload);
}

export interface QueueErrorParams {
  controller: ReadableStreamDefaultController;
  error_message: string;
}

/**
 * Queue an error message to the stream
 */
export async function queueError({
  controller,
  error_message,
}: QueueErrorParams) {
  const errorPayload: StreamedError = {
    type: "error",
    indicator: {
      status: error_message,
      icon: "error",
    },
  };
  
  enqueueMessage(controller, errorPayload);
}
