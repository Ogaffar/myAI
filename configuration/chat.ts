import { OWNER_NAME, AI_NAME } from "./identity";

export const INITIAL_MESSAGE: string = `Hello, I'm ${AI_NAME}, your AI sport guru. I'm your ultimate guide to American sports! Whether you're figuring out football penalties, understanding basketball fouls, or decoding baseball's infield fly rule, I've got you covered. I break down the rules, key terms, and game essentials—no stats, just pure sports knowledge!.`;
export const DEFAULT_RESPONSE_MESSAGE: string = `Sorry, I'm having trouble generating a response. Please try again later.`;
export const WORD_CUTOFF: number = 8000; // Number of words until bot says it needs a break
export const WORD_BREAK_MESSAGE: string = `[WORD BREAK MESSAGE]`;
export const HISTORY_CONTEXT_LENGTH: number = 7; // Number of messages to use for context when generating a response
