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
      <div className="mx-auto w-full space-y-4 overflow-y-auto px-5 pt-14 pb-36">
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
              className={`max-w-9/12 rounded-lg px-4 py-2 text-white ${
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
      <form
        onSubmit={handleSubmit}
        className="absolute bottom-0 left-1/2 flex w-full max-w-2xl -translate-x-1/2 justify-center rounded-2xl rounded-b-none bg-slate-800 py-6"
      >
        <Input
          className="max-w-xl rounded-lg bg-black focus:text-white focus:ring-2 focus:ring-white"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
