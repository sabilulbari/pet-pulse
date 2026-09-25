"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { io } from "socket.io-client";
import { authClient } from "@/lib/auth-client";

const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL ||
  process.env.NEXT_PUBLIC_SERVER_URL ||
  "http://localhost:5000";

/**
 * Custom React hook managing the Socket.IO lifecycle for private authenticated chat.
 *
 * Ensures:
 * 1. Single socket connection per component mount
 * 2. Proper authentication with Better Auth JWT during handshake
 * 3. Proper cleanup of listeners and disconnect on unmount
 * 4. Online/offline tracking without duplicates
 * 5. Reconnection handling and state reflection
 */
export function useChatSocket({ isAuthorized, currentUserId, conversationId }) {
  const socketRef = useRef(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("Offline"); // 'Connecting...', 'Connected', 'Reconnecting...', 'Offline'
  const [onlineUserIds, setOnlineUserIds] = useState(new Set());

  // Safe message appending preventing duplicates by _id
  const appendMessage = useCallback((newMsg) => {
    if (!newMsg) return;
    setMessages((prevMessages) => {
      // Check if message with same _id already exists
      const exists = prevMessages.some(
        (m) =>
          (newMsg._id && m._id === newMsg._id) ||
          (newMsg.createdAt &&
            m.createdAt === newMsg.createdAt &&
            m.senderId === newMsg.senderId &&
            m.message === newMsg.message)
      );
      if (exists) return prevMessages;
      return [...prevMessages, newMsg];
    });
  }, []);

  useEffect(() => {
    // Only connect if the user is verified and authorized
    if (!isAuthorized || !conversationId) {
      return;
    }

    let isSubscribed = true;
    let socket = null;

    async function initializeSocket() {
      try {
        setConnectionStatus("Connecting...");

        // Retrieve cryptographic JWT from Better Auth client
        const { data: tokenData, error: tokenError } = await authClient.token();
        if (tokenError || !tokenData?.token) {
          console.error("Chat Socket: Failed to retrieve JWT token", tokenError);
          if (isSubscribed) setConnectionStatus("Offline");
          return;
        }

        if (!isSubscribed) return;

        // Create socket connection with JWT in handshake auth
        socket = io(SOCKET_URL, {
          auth: {
            token: tokenData.token,
          },
          transports: ["websocket", "polling"],
          reconnection: true,
          reconnectionAttempts: 10,
          reconnectionDelay: 1000,
        });

        socketRef.current = socket;

        // On successful connection
        socket.on("connect", () => {
          if (!isSubscribed) return;
          console.log("Chat Socket connected:", socket.id);
          setIsConnected(true);
          setConnectionStatus("Connected");

          // Join the authorized deterministic conversation room
          socket.emit("join_conversation", { conversationId });
        });

        // On connection error (e.g. invalid JWT, unauthorized user)
        socket.on("connect_error", (err) => {
          if (!isSubscribed) return;
          console.error("Chat Socket connect_error:", err.message);
          setIsConnected(false);
          setConnectionStatus("Offline");
        });

        // On reconnect attempt
        socket.io.on("reconnect_attempt", () => {
          if (!isSubscribed) return;
          setConnectionStatus("Reconnecting...");
        });

        // On successful reconnection
        socket.io.on("reconnect", () => {
          if (!isSubscribed) return;
          console.log("Chat Socket reconnected");
          setIsConnected(true);
          setConnectionStatus("Connected");
          // Re-join conversation room after reconnecting
          socket.emit("join_conversation", { conversationId });
        });

        // On disconnection
        socket.on("disconnect", (reason) => {
          if (!isSubscribed) return;
          console.log("Chat Socket disconnected:", reason);
          setIsConnected(false);
          setConnectionStatus("Offline");
        });

        // Live messages received from room
        socket.on("receive_message", (messageDoc) => {
          if (!isSubscribed) return;
          if (messageDoc.conversationId === conversationId) {
            appendMessage(messageDoc);
          }
        });

        // Initial online users list received from server
        socket.on("online_users", (userIds) => {
          if (!isSubscribed) return;
          setOnlineUserIds(new Set(userIds || []));
        });

        // User came online
        socket.on("user_online", ({ userId }) => {
          if (!isSubscribed || !userId) return;
          setOnlineUserIds((prev) => {
            const updated = new Set(prev);
            updated.add(userId);
            return updated;
          });
        });

        // User went offline
        socket.on("user_offline", ({ userId }) => {
          if (!isSubscribed || !userId) return;
          setOnlineUserIds((prev) => {
            const updated = new Set(prev);
            updated.delete(userId);
            return updated;
          });
        });
      } catch (err) {
        console.error("Failed to initialize socket connection:", err);
        if (isSubscribed) setConnectionStatus("Offline");
      }
    }

    initializeSocket();

    // Cleanup on unmount or conversation change
    return () => {
      isSubscribed = false;
      if (socketRef.current) {
        socketRef.current.off("connect");
        socketRef.current.off("connect_error");
        socketRef.current.off("disconnect");
        socketRef.current.off("receive_message");
        socketRef.current.off("online_users");
        socketRef.current.off("user_online");
        socketRef.current.off("user_offline");
        socketRef.current.disconnect();
        socketRef.current = null;
      }
    };
  }, [isAuthorized, conversationId, appendMessage]);

  // Send message function via socket.emit with acknowledgement callback
  const sendMessage = useCallback(
    (text, callback) => {
      if (!socketRef.current || !socketRef.current.connected) {
        if (typeof callback === "function") {
          callback({ success: false, error: "Socket is not connected" });
        }
        return;
      }

      if (!text || !text.trim()) {
        if (typeof callback === "function") {
          callback({ success: false, error: "Message cannot be empty" });
        }
        return;
      }

      socketRef.current.emit(
        "send_message",
        {
          conversationId,
          message: text.trim(),
        },
        (response) => {
          if (typeof callback === "function") {
            callback(response);
          }
        }
      );
    },
    [conversationId]
  );

  return {
    isConnected,
    connectionStatus,
    messages,
    setMessages,
    onlineUserIds,
    sendMessage,
  };
}

