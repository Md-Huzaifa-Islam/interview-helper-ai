"use client";
import { useChat } from "@ai-sdk/react";
import { FaRegCircleUser } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import { Input } from "./ui/input";

type Message = {
  role: "user" | "assistant" | "system" | "data";
  content: string;
  parts: object[];
};

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="flex h-screen flex-col justify-between">
      <div className="mx-auto mt-10 w-full max-w-4xl space-y-4 overflow-y-auto px-5">
        {messages.map((m: Message, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 ${
              m.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {m.role === "assistant" && (
              <RiRobot2Fill className="mt-1 text-xl text-white" />
            )}

            <div
              className={`max-w-sm rounded-lg px-4 py-2 text-white ${
                m.role === "user"
                  ? "rounded-br-none bg-blue-600"
                  : "rounded-bl-none bg-gray-700"
              }`}
            >
              {m.content}
            </div>

            {m.role === "user" && (
              <FaRegCircleUser className="mt-1 text-xl text-white" />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex w-full justify-center py-6">
        <Input
          className="w-11/12 max-w-xl rounded-lg focus:text-white focus:ring-2 focus:ring-white"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
