"use client";

import React from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";

/**
 * ChatHeader component displaying counterparty identity, online status, and connection state.
 */
export default function ChatHeader({ otherUser, isOnline, connectionStatus }) {
  const displayName = otherUser?.name || otherUser?.email?.split("@")[0] || "Chat Partner";
  const email = otherUser?.email || "";

  return (
    <div className="px-4 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-t-2xl shadow-sm flex items-center justify-between border-b border-emerald-500/30">
      <div className="flex items-center gap-3">
        {/* Counterpart Avatar */}
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white font-bold text-sm shadow-inner uppercase border border-white/30">
            {displayName.charAt(0)}
          </div>
          {/* Online status indicator dot */}
          <span
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white transition-colors duration-300 ${
              isOnline ? "bg-emerald-400" : "bg-slate-400"
            }`}
          >
            {isOnline && (
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
            )}
          </span>
        </div>

        {/* User details */}
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-sm leading-tight text-white tracking-wide">
              {displayName}
            </h3>
            <span
              title="Verified Chat User"
              className="text-emerald-200 hover:text-white transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
            </span>
          </div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-[11px] text-emerald-100/90 font-medium">
              {isOnline ? "Online" : "Offline"}
            </span>
            {email && (
              <>
                <span className="text-emerald-300/40 text-[10px]">•</span>
                <span className="text-[11px] text-emerald-200/80 truncate max-w-[140px] sm:max-w-[180px]">
                  {email}
                </span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Connection state badge */}
      <div className="flex items-center gap-1.5">
        {connectionStatus === "Connected" ? (
          <span className="text-[11px] bg-emerald-800/60 border border-emerald-400/30 text-emerald-100 px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Secure
          </span>
        ) : connectionStatus === "Reconnecting..." ? (
          <span className="text-[11px] bg-amber-500/40 border border-amber-300/50 text-amber-100 px-2 py-0.5 rounded-full font-medium animate-pulse flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Reconnecting...
          </span>
        ) : connectionStatus === "Connecting..." ? (
          <span className="text-[11px] bg-blue-500/40 border border-blue-300/50 text-blue-100 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
            Connecting...
          </span>
        ) : (
          <span className="text-[11px] bg-slate-700/60 text-slate-200 px-2 py-0.5 rounded-full font-medium">
            Offline
          </span>
        )}
      </div>
    </div>
  );
}
