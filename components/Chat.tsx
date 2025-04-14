"use client";
import React from "react";
import { useChat } from "@ai-sdk/react";
import { Input } from "./ui/input";
type Message = {
  role: "user" | "assistant" | "system" | "data";
  content: string;
  parts: object[];
};
export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto flex w-full max-w-md flex-col self-stretch py-24">
      {messages.map((m: Message, index) => (
        <div key={index} className="whitespace-pre-wrap">
          {m.role === "user" ? "User: " : "AI: "}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <Input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
          placeholder="Say something"
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
