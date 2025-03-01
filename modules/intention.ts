import { OpenAI } from "openai";
import { zodResponseFormat } from "openai/helpers/zod";
import { Chat, Intention, intentionSchema, IntentionType } from "@/types";
import { HISTORY_CONTEXT_LENGTH } from "@/configuration/chat";
import { INTENTION_PROMPT } from "@/configuration/prompts";
import { INTENTION_MODEL } from "@/configuration/models";

/**
 * IntentionModule is responsible for detecting user intentions from chat messages
 */
export class IntentionModule {
  /**
   * Analyzes chat history to determine the user's intention
   * 
   * @param chat - The chat containing message history
   * @param openai - OpenAI client instance
   * @returns A Promise resolving to an Intention object
   * @throws Error if the OpenAI API request fails
   */
  static async detectIntention({
    chat,
    openai,
  }: {
    chat: Chat;
    openai: OpenAI;
  }): Promise<Intention> {
    try {
      // Extract the most recent messages within the context window
      const mostRecentMessages = chat.messages
        .slice(-HISTORY_CONTEXT_LENGTH)
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      // Request intention analysis from OpenAI
      const response = await openai.beta.chat.completions.parse({
        model: INTENTION_MODEL,
        messages: [
          { role: "system", content: INTENTION_PROMPT() },
          ...mostRecentMessages,
        ],
        response_format: zodResponseFormat(intentionSchema, "intention"),
      });

      // Return the parsed intention or fall back to default
      return response.choices[0].message.parsed || { type: "random" as IntentionType };
    } catch (error) {
      console.error("Error detecting intention:", error);
      // Graceful fallback in case of API failure
      return { type: "random" as IntentionType };
    }
  }

  /**
   * Provides a safer way to check if an intention is of a specific type
   * 
   * @param intention - The intention to check
   * @param type - The intention type to compare against
   * @returns boolean indicating if the intention matches the specified type
   */
  static isIntentionType(intention: Intention, type: IntentionType): boolean {
    return intention.type === type;
  }
}
