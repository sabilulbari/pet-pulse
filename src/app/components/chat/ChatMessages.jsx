"use client";

import React, { useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { isScrolledNearBottom } from "./chatUtils";
import { MessageSquareDashed } from "lucide-react";

/**
 * ChatMessages component displaying the scrollable list of messages
 * with intelligent auto-scroll behavior.
 */
export default function ChatMessages({ messages, currentUserId, isLoadingHistory }) {
  const containerRef = useRef(null);
  const bottomRef = useRef(null);
  const wasNearBottomRef = useRef(true);

  // Track if user was near bottom before new messages render
  const handleScroll = () => {
    if (containerRef.current) {
      wasNearBottomRef.current = isScrolledNearBottom(containerRef.current, 100);
    }
  };

  // Auto-scroll only if user was near bottom or on first load
  useEffect(() => {
    if (wasNearBottomRef.current && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Initial load scroll
  useEffect(() => {
    if (bottomRef.current && !isLoadingHistory) {
      bottomRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [isLoadingHistory]);

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-slate-50/50"
      style={{ minHeight: "320px", maxHeight: "460px" }}
    >
      {isLoadingHistory ? (
        <div className="h-full flex flex-col items-center justify-center py-12 text-slate-400 gap-2">
          <div className="w-6 h-6 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-medium text-slate-500">Loading conversation history...</span>
        </div>
      ) : messages.length === 0 ? (
        <div className="h-full flex flex-col items-center justify-center py-12 text-center text-slate-400 gap-2 select-none">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200/50">
            <MessageSquareDashed className="w-6 h-6 text-slate-400" />
          </div>
          <p className="text-sm font-semibold text-slate-600">No messages yet</p>
          <p className="text-xs text-slate-400 max-w-xs">
            Start the private conversation! Messages are encrypted & persisted in real-time.
          </p>
        </div>
      ) : (
        <>
          {messages.map((msg, index) => (
            <ChatMessage
              key={msg._id ? msg._id.toString() : `msg-${index}`}
              message={msg}
              currentUserId={currentUserId}
            />
          ))}
          <div ref={bottomRef} className="h-0" />
        </>
      )}
    </div>
  );
}
