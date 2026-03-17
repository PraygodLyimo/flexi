"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { websiteChatSuggestions } from "@/lib/websiteKnowledge";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  sourceType?: "website" | "online" | "fallback";
  sourceTitle?: string;
  sourceUrl?: string;
  sourceRoute?: string;
}

function makeId() {
  return Math.random().toString(36).slice(2);
}

export default function WebsiteChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: makeId(),
      role: "assistant",
      text: "Hi! I am Flexi assistant. I answer from this website first, and when needed I can check online sources too.",
    },
  ]);

  const canSend = input.trim().length > 0;

  const quickSuggestions = useMemo(() => websiteChatSuggestions.slice(0, 4), []);

  const sendMessage = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = {
      id: makeId(),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsLoading(true);
    try {
      const response = await fetch("/api/chat/answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });

      const data = (await response.json()) as {
        answer: string;
        sourceType?: "website" | "online" | "fallback";
        sourceTitle?: string;
        sourceUrl?: string;
        sourceRoute?: string;
      };

      const assistantMessage: ChatMessage = {
        id: makeId(),
        role: "assistant",
        text: data.answer || "I could not find an answer at the moment.",
        sourceType: data.sourceType,
        sourceTitle: data.sourceTitle,
        sourceUrl: data.sourceUrl,
        sourceRoute: data.sourceRoute,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: makeId(),
          role: "assistant",
          sourceType: "fallback",
          text: "I could not reach online sources right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-[min(92vw,380px)] rounded-2xl border border-[#dbc7a6] bg-[#fffaf3] shadow-2xl">
          <div className="flex items-center justify-between rounded-t-2xl bg-[#947846] px-4 py-3 text-[#f7e6cc]">
            <div>
              <p className="text-sm font-semibold">Flexi Website Assistant</p>
              <p className="text-xs opacity-90">Website-first answers with optional online lookup</p>
            </div>
            <button
              aria-label="Close chat"
              className="rounded-md p-1 hover:bg-white/15"
              onClick={() => setOpen(false)}
              type="button"
            >
              <X size={18} />
            </button>
          </div>

          <div className="max-h-105 space-y-3 overflow-y-auto px-3 py-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-8 bg-[#947846] text-[#f7e6cc]"
                    : "mr-8 bg-white text-gray-800"
                }`}
              >
                <p>{message.text}</p>
                {message.role === "assistant" && message.sourceType ? (
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-wide text-[#8c6d3a]">
                    {message.sourceType === "website" ? "Source: Website" : message.sourceType === "online" ? "Source: Online" : "Source: Assistant"}
                  </p>
                ) : null}
                {message.role === "assistant" && message.sourceRoute && message.sourceTitle ? (
                  <Link
                    className="mt-2 inline-block text-xs font-medium text-[#7a6037] underline underline-offset-2"
                    href={message.sourceRoute}
                  >
                    Source: {message.sourceTitle}
                  </Link>
                ) : null}
                {message.role === "assistant" && message.sourceUrl && message.sourceTitle ? (
                  <a
                    className="mt-2 inline-block text-xs font-medium text-[#7a6037] underline underline-offset-2"
                    href={message.sourceUrl}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Source: {message.sourceTitle}
                  </a>
                ) : null}
              </div>
            ))}
            {isLoading ? (
              <div className="mr-8 rounded-xl bg-white px-3 py-2 text-sm text-gray-600">Checking sources...</div>
            ) : null}
          </div>

          <div className="border-t border-[#ecdcc1] px-3 py-3">
            <div className="mb-2 flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  className="rounded-full border border-[#d5bd95] bg-white px-3 py-1 text-xs text-[#6f5730] hover:bg-[#f9f0e2]"
                  onClick={() => sendMessage(suggestion)}
                  disabled={isLoading}
                  type="button"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            <form
              className="flex items-center gap-2"
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage(input);
              }}
            >
              <input
                className="h-10 flex-1 rounded-xl border border-[#d9c39e] bg-white px-3 text-sm text-gray-800 outline-none ring-[#b08a4a] placeholder:text-gray-500 focus:ring-2"
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about tours, contact, bookings..."
                value={input}
                disabled={isLoading}
              />
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#947846] text-[#f7e6cc] disabled:cursor-not-allowed disabled:opacity-50"
                disabled={!canSend || isLoading}
                type="submit"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <button
        aria-label="Open website assistant"
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#947846] text-[#f7e6cc] shadow-xl transition hover:scale-105"
        onClick={() => setOpen(true)}
        type="button"
      >
        <MessageCircle size={24} />
      </button>
    </div>
  );
}