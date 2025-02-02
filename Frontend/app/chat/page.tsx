"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Mic, Send, User, Bot, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { getUser } from "@/utils/storage";
import { chat } from "@/utils/api";

export default function Chat() {
  const user = getUser();
  const userId = user?.id; 

  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Nexa, your mental health companion. How are you feeling today? I'm here to listen and support you. 💙",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVoiceMode, setIsVoiceMode] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !userId) return;
    
    const newMessage = { id: Date.now().toString(), role: "user", content: input };
    setMessages([...messages, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await chat(userId, input);
      console.log(response); 
      setMessages([...messages, newMessage, { id: Date.now().toString(), role: "assistant", content: response.response }]);
    } catch (error) {
      console.error("Chat API error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] relative">
      <div className="container mx-auto px-4 py-8 relative z-10">
        <Card className="max-w-4xl mx-auto bg-secondary-dark/80 backdrop-blur-md border-primary/20">
          <CardHeader className="border-b border-primary/20">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl text-gradient-nexabot">Chat with Nexa</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" asChild className="text-black border-none bg-primary hover:bg-primary/10">
                  <Link href="/profile">
                    <Settings className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 h-[600px] overflow-auto space-y-4 flex flex-col">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex items-start gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-secondary-dark" />
                    </div>
                  )}
                  <motion.div
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className={`rounded-lg p-3 max-w-[80%] ${
                      message.role === "user"
                        ? "bg-primary text-secondary-dark"
                        : "bg-secondary text-neutral border border-primary/20"
                    }`}
                  >
                    {message.content}
                  </motion.div>
                  {message.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                      <User className="w-5 h-5 text-secondary-dark" />
                    </div>
                  )}
                </motion.div>
              ))}
              {isLoading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center space-x-2 text-neutral">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
          <CardFooter className="border-t border-primary/20 p-4">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="shrink-0 text-black border-none bg-primary-dark hover:bg-primary/10"
                onClick={() => setIsVoiceMode(!isVoiceMode)}
              >
                <Mic className={`h-5 w-5 ${isVoiceMode ? "text-gold" : ""}`} />
              </Button>
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message here..."
                className="flex-1 bg-secondary border-primary/20 text-neutral focus-visible:ring-primary"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-primary to-primary-dark text-secondary-dark hover:opacity-90"
                disabled={isLoading}
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
