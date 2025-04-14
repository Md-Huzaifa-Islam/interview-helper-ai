import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
// import openai from "@ai-sdk/openai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
  You are an expert career and interview coach.
  
  The user has provided some information about a job they are targeting. It could be:
  - A job title (e.g., "Frontend Developer")
  - A job description
  - Or both

  Here is the user's input:
  "${messages.content}"

  Your job is to:
  1. Understand what role they’re targeting.
  2. Extract relevant skills and requirements.
  3. Help them prepare with personalized interview questions and feedback.
  4. If needed, ask the user follow-up questions to get more info.
`;
  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: systemPrompt,
    messages,
  });

  return result.toDataStreamResponse();
}
