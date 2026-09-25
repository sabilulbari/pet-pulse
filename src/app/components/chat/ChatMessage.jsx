"use client";

import React from "react";
import { formatRelativeTime } from "./chatUtils";

/**
 * ChatMessage component rendering an individual message bubble with relative timestamp
 * and distinct alignment & colors for sender vs receiver.
 */
export default function ChatMessage({ message, currentUserId }) {
  const isMe = message.senderId === currentUserId;
  const relativeTime = formatRelativeTime(message.createdAt);

  return (
    <div
      className={`flex flex-col group transition-all duration-150 ${
        isMe ? "items-end" : "items-start"
      }`}
    >
      {/* Bubble Container */}
      <div
        className={`relative max-w-[85%] sm:max-w-[75%] px-4 py-2.5 rounded-2xl text-sm shadow-xs break-words whitespace-pre-wrap leading-relaxed transition-all ${
          isMe
            ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-br-xs shadow-emerald-900/10"
            : "bg-slate-100 text-slate-800 rounded-bl-xs border border-slate-200/70"
        }`}
      >
        <p className="select-text">{message.message}</p>
      </div>

      {/* Relative Timestamp */}
      <span
        className={`text-[10px] text-slate-400 mt-1 px-1 font-medium select-none ${
          isMe ? "text-right" : "text-left"
        }`}
      >
        {relativeTime}
      </span>
    </div>
  );
}
