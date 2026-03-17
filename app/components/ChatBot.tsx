"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const getDynamicGreeting = () => {
  const now = new Date();
  const hours = now.getHours();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' });

  let timeGreeting = "Good morning";
  if (hours >= 12 && hours < 17) timeGreeting = "Good afternoon";
  else if (hours >= 17) timeGreeting = "Good evening";

  return `${timeGreeting}. How's ${day} treating you?`;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    text: `${getDynamicGreeting()} Welcome to Flexi Wild Safari. How can I help you plan your dream adventure today? 🦁`,
    sender: "bot",
    timestamp: new Date(),
  },
];

const BOT_KNOWLEDGE = {
  tours: [
    { title: "7-Day Tanzania Safari", price: "$1,588", description: "Covers Serengeti & Ngorongoro Crater. Focuses on Big Five and Great Migration highlights." },
    { title: "9-Day Great Migration Safari", price: "$2,289", description: "Full Serengeti circuit focusing on migration tracking and river crossings." },
    { title: "11-Day Safari & Zanzibar Escape", price: "$2,126", description: "Combines wildlife adventure with tropical beach relaxation in Zanzibar." },
    { title: "15-Day Ultimate Tanzania Adventure", price: "$2,934", description: "A comprehensive tour including luxury camps, extended beach time, and full safari flexibility." }
  ],
  faq: [
    { q: "booking", a: "We recommend booking at least 2-3 months in advance for the best availability and pricing." },
    { q: "custom", a: "Absolutely! All our trips are 100% customizable to match your interests and budget." },
    { q: "cancel", a: "We offer flexible cancellation with a full refund if canceled 60+ days before travel." },
    { q: "visa", a: "Most travelers need a visa for Tanzania. We can provide guidance on requirements for your country." },
    { q: "best time", a: "June to October (dry season) is best for wildlife, but year-round safaris are possible!" }
  ],
  contact: {
    location: "Moshono Arusha, Tanzania, East Africa",
    phone: "+255 764 570 182 (Available 24/7)",
    email: "info@flexisafaris.com (We reply within 24 hours)"
  },
  general: "Flexi Safaris is a Tanzania-based operator dedicated to creating unforgettable East African experiences with local expertise and passion for wildlife and culture."
};

const getBotResponse = (input: string): string => {
  const lowInput = input.toLowerCase();

  if (lowInput.includes("hello") || lowInput.includes("hi") || lowInput.includes("hey")) {
    return `${getDynamicGreeting()} I'm your Safari Assistant. How can I help you plan your Tanzanian adventure today?`;
  }

  if (lowInput.includes("tour") || lowInput.includes("package") || lowInput.includes("day")) {
    const tourList = BOT_KNOWLEDGE.tours.map(t => `• ${t.title} (${t.price})`).join("\n");
    return `We offer several amazing packages:\n${tourList}\nWhich one would you like to know more about?`;
  }

  if (lowInput.includes("price") || lowInput.includes("cost") || lowInput.includes("how much")) {
    return "Our tours start from $1,588 for a 7-day safari. Prices vary by duration and luxury level. Would you like a custom quote?";
  }

  if (lowInput.includes("contact") || lowInput.includes("where") || lowInput.includes("location") || lowInput.includes("email") || lowInput.includes("phone")) {
    return `You can find us in ${BOT_KNOWLEDGE.contact.location}. Reach us at ${BOT_KNOWLEDGE.contact.phone} or ${BOT_KNOWLEDGE.contact.email}.`;
  }

  if (lowInput.includes("book")) {
    return `${BOT_KNOWLEDGE.faq[0].a} You can book directly or we can help you customize a trip!`;
  }

  if (lowInput.includes("zanzibar")) {
    return "Our 11-day Safari & Zanzibar Escape is very popular! It's the perfect way to relax after seeing the Big Five.";
  }

  if (lowInput.includes("serengeti") || lowInput.includes("crater") || lowInput.includes("wildlife")) {
    return "Most of our tours include the Serengeti and Ngorongoro Crater for the ultimate Big Five experience. Are you interested in the Great Migration?";
  }

  for (const item of BOT_KNOWLEDGE.faq) {
    if (lowInput.includes(item.q)) return item.a;
  }

  return "That sounds like a great question! I'm still learning some details, but I know we specialize in tailored Tanzanian safaris. Would you like to speak with one of our expert guides?";
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(inputValue);

      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-[#947846] p-4 flex items-center justify-between text-[#f7e6cc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f7e6cc] flex items-center justify-center text-[#947846]">
                  <Bot size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Safari Assistant</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs opacity-90 text-white">Online and ready to help</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 p-1 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={cn(
                    "flex max-w-[85%] flex-col",
                    msg.sender === "user" ? "ml-auto items-end" : "items-start"
                  )}
                >
                  <div
                    className={cn(
                      "px-4 py-2.5 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap",
                      msg.sender === "user"
                        ? "bg-[#947846] text-white rounded-tr-none"
                        : "bg-white text-gray-800 border border-gray-100 rounded-tl-none"
                    )}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-gray-400 mt-1 px-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-start gap-2">
                  <div className="bg-white px-4 py-2.5 rounded-2xl text-sm shadow-sm border border-gray-100 rounded-tl-none flex items-center gap-2 text-gray-400">
                    <Loader2 size={16} className="animate-spin" />
                    Safari Assistant is typing...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about safaris, pricing..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#947846]/50 transition-all text-gray-800"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="p-2 bg-[#947846] text-[#f7e6cc] rounded-full hover:bg-[#7e663a] disabled:opacity-50 disabled:hover:bg-[#947846] transition-all shadow-md"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300",
          isOpen ? "bg-white text-[#947846] rotate-90" : "bg-[#947846] text-[#f7e6cc]"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
