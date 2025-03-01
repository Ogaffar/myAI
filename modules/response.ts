import {
  Chat,
  Chunk,
  Source,
  CoreMessage,
  AIProviders,
  ProviderName,
  Citation,
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

/**
 * ResponseModule is responsible for collecting data and building a response
 */
export class ResponseModule {
  /**
   * Creates a standard Response object with proper headers for streaming
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
   * Get the last N messages from chat history
   */
  private static getRecentMessages(chat: Chat, withoutCitations = true): CoreMessage[] {
    const recentMessages = chat.messages.slice(-HISTORY_CONTEXT_LENGTH);
    return withoutCitations ? stripMessagesOfCitations(recentMessages) : recentMessages;
  }

  /**
   * Common response generation logic
   */
  private static createResponseStream(
    providerName: ProviderName,
    modelName: string,
    systemPrompt: string,
    messages: any[],
    providers: AIProviders,
    temperature: number,
    citations: Citation[] = []
  ): ReadableStream {
    return new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Coming up with an answer",
          icon: "thinking",
        });
        
        queueAssistantResponse({
          controller,
          providers,
          providerName,
          messages,
          model_name: modelName,
          systemPrompt,
          citations,
          error_message: DEFAULT_RESPONSE_MESSAGE,
          temperature,
        });
      },
    });
  }

  /**
   * Respond to the user when they send a RANDOM message
   */
  static async respondToRandomMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    const mostRecentMessages = await convertToCoreMessages(
      this.getRecentMessages(chat)
    );
    
    const stream = this.createResponseStream(
      RANDOM_RESPONSE_PROVIDER,
      RANDOM_RESPONSE_MODEL,
      RESPOND_TO_RANDOM_MESSAGE_SYSTEM_PROMPT(),
      mostRecentMessages,
      providers,
      RANDOM_RESPONSE_TEMPERATURE
    );
    
    return this.createStreamResponse(stream);
  }

  /**
   * Respond to the user when they send a HOSTILE message
   */
  static async respondToHostileMessage(
    chat: Chat,
    providers: AIProviders
  ): Promise<Response> {
    const stream = this.createResponseStream(
      HOSTILE_RESPONSE_PROVIDER,
      HOSTILE_RESPONSE_MODEL,
      RESPOND_TO_HOSTILE_MESSAGE_SYSTEM_PROMPT(),
      [],
      providers,
      HOSTILE_RESPONSE_TEMPERATURE
    );
    
    return this.createStreamResponse(stream);
  }

  /**
   * Respond to the user when they send a QUESTION
   */
  static async respondToQuestion(
    chat: Chat,
    providers: AIProviders,
    index: any
  ): Promise<Response> {
    const stream = new ReadableStream({
      async start(controller) {
        queueIndicator({
          controller,
          status: "Figuring out what your answer looks like",
          icon: "thinking",
        });
        
        try {
          // Generate and embed hypothetical data
          const hypotheticalData = await generateHypotheticalData(
            chat,
            providers.openai
          );
          const { embedding } = await embedHypotheticalData(
            hypotheticalData, 
            providers.openai
          );
          
          // Search for relevant chunks and get sources
          queueIndicator({
            controller,
            status: "Reading through documents",
            icon: "searching",
          });
          
          const chunks = await searchForChunksUsingEmbedding(embedding, index);
          const sources = await getSourcesFromChunks(chunks);
          
          queueIndicator({
            controller,
            status: `Read over ${sources.length} documents`,
            icon: "documents",
          });
          
          // Get citations and context
          const citations = await getCitationsFromChunks(chunks);
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
            providerName: QUESTION_RESPONSE_PROVIDER,
            messages: ResponseModule.getRecentMessages(chat),
            model_name: QUESTION_RESPONSE_MODEL,
            systemPrompt,
            citations,
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: QUESTION_RESPONSE_TEMPERATURE,
          });
        } catch (error: any) {
          console.error("Error in respondToQuestion:", error);
          
          // Handle error and fall back to backup system prompt
          queueError({
            controller,
            error_message: error.message ?? DEFAULT_RESPONSE_MESSAGE,
          });
          
          queueAssistantResponse({
            controller,
            providers,
            providerName: QUESTION_RESPONSE_PROVIDER,
            messages: [],
            model_name: QUESTION_RESPONSE_MODEL,
            systemPrompt: RESPOND_TO_QUESTION_BACKUP_SYSTEM_PROMPT(),
            citations: [],
            error_message: DEFAULT_RESPONSE_MESSAGE,
            temperature: QUESTION_RESPONSE_TEMPERATURE,
          });
        }
      },
    });
    
    return this.createStreamResponse(stream);
  }
}
