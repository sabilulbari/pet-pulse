"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";

/**
 * ChatInput component providing keyboard-accessible input, validation,
 * character limit enforcement, and send action.
 */
export default function ChatInput({ onSendMessage, isConnected }) {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed || isSending || !isConnected) return;

    if (trimmed.length > 1000) {
      return;
    }

    setIsSending(true);
    onSendMessage(trimmed, (res) => {
      setIsSending(false);
      if (res?.success) {
        setText("");
      }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const isOverLimit = text.length > 1000;
  const isDisabled = !text.trim() || isSending || !isConnected || isOverLimit;

  return (
    <form
      onSubmit={handleSubmit}
      className="p-3 bg-white border-t border-slate-100 rounded-b-2xl flex flex-col gap-1.5"
    >
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={
            isConnected
              ? "Type your message here..."
              : "Reconnecting to chat..."
          }
          disabled={!isConnected || isSending}
          maxLength={1050}
          className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all disabled:opacity-60 disabled:bg-slate-100"
        />

        <button
          type="submit"
          disabled={isDisabled}
          title="Send message (Enter)"
          className="flex items-center justify-center p-2.5 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium text-sm shadow-sm hover:from-emerald-500 hover:to-teal-500 active:scale-95 transition-all duration-150 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline-block ml-1.5">Send</span>
        </button>
      </div>

      {/* Length warning if typing close to limit */}
      {text.length > 800 && (
        <div className="flex justify-end px-1">
          <span
            className={`text-[10px] ${
              isOverLimit ? "text-rose-500 font-bold" : "text-slate-400"
            }`}
          >
            {text.length} / 1000 characters
          </span>
        </div>
      )}
    </form>
  );
}
