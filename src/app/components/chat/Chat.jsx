"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import {
  CHAT_USERS,
  createConversationId,
  isAuthorizedChatUser,
  getOtherChatUser,
} from "./chatConfig";
import { useChatSocket } from "./useChatSocket";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";
import toast from "react-hot-toast";

const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";

/**
 * Production-ready, secure, reusable real-time private Chat component.
 *
 * Enforces:
 * 1. Frontend session check against CHAT_USERS (returns null if unauthorized)
 * 2. Socket.IO connection created ONLY for authorized users
 * 3. Better Auth JWT token passed in handshake auth
 * 4. Message history retrieved on mount via protected REST endpoint
 * 5. Instant real-time updates for messages and online status
 */
export default function Chat() {
  const { data: session, isPending } = authClient.useSession();
  const [isLoadingHistory, setIsLoadingHistory] = useState(true);

  const currentUser = session?.user;
  const isAuthorized = isAuthorizedChatUser(currentUser);

  // Derive conversation ID deterministically
  const conversationId = isAuthorized
    ? createConversationId(CHAT_USERS[0].userId, CHAT_USERS[1].userId)
    : null;

  const otherUser = isAuthorized && currentUser
    ? getOtherChatUser(currentUser.id)
    : null;

  // Socket.IO lifecycle hook (will not connect if isAuthorized is false)
  const {
    isConnected,
    connectionStatus,
    messages,
    setMessages,
    onlineUserIds,
    sendMessage,
  } = useChatSocket({
    isAuthorized,
    currentUserId: currentUser?.id,
    conversationId,
  });

  // Fetch message history on initial load when authorized
  useEffect(() => {
    if (!isAuthorized || !conversationId) return;

    let isMounted = true;

    async function loadHistory() {
      try {
        setIsLoadingHistory(true);
        const { data: tokenData, error: tokenError } = await authClient.token();
        if (tokenError || !tokenData?.token) {
          console.error("Failed to get JWT for chat history", tokenError);
          if (isMounted) setIsLoadingHistory(false);
          return;
        }

        const res = await fetch(`${SERVER_URL}/chat/messages/${conversationId}`, {
          headers: {
            authorization: `Bearer ${tokenData.token}`,
          },
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch chat history: ${res.status}`);
        }

        const history = await res.json();
        if (isMounted && Array.isArray(history)) {
          setMessages(history);
        }
      } catch (err) {
        console.error("Error loading chat history:", err);
      } finally {
        if (isMounted) {
          setIsLoadingHistory(false);
        }
      }
    }

    loadHistory();

    return () => {
      isMounted = false;
    };
  }, [isAuthorized, conversationId, setMessages]);

  // If session is still loading from Better Auth
  if (isPending) {
    return (
      <div className="w-full max-w-md mx-auto my-4 h-[420px] bg-white rounded-2xl border border-slate-200/80 shadow-sm flex items-center justify-center p-6 animate-pulse">
        <div className="flex flex-col items-center gap-2 text-slate-400">
          <div className="w-8 h-8 rounded-full border-2 border-emerald-500 border-t-transparent animate-spin" />
          <span className="text-xs font-medium">Verifying chat credentials...</span>
        </div>
      </div>
    );
  }

  // Frontend authorization guard:
  // If user is not logged in or is not one of the two authorized CHAT_USERS, render nothing!
  if (!isAuthorized || !currentUser) {
    return null;
  }

  const isOtherUserOnline = otherUser?.userId
    ? onlineUserIds.has(otherUser.userId)
    : false;

  const handleSendMessage = (text, callback) => {
    sendMessage(text, (res) => {
      if (res && !res.success) {
        toast.error(res.error || "Failed to send message");
      }
      if (typeof callback === "function") {
        callback(res);
      }
    });
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg mx-auto my-4 bg-white rounded-2xl border border-slate-200/90 shadow-xl flex flex-col overflow-hidden transition-all duration-300">
      {/* Header */}
      <ChatHeader
        otherUser={otherUser}
        isOnline={isOtherUserOnline}
        connectionStatus={connectionStatus}
      />

      {/* Message List */}
      <ChatMessages
        messages={messages}
        currentUserId={currentUser.id}
        isLoadingHistory={isLoadingHistory}
      />

      {/* Input Form */}
      <ChatInput
        onSendMessage={handleSendMessage}
        isConnected={isConnected}
      />
    </div>
  );
}
