// Configuration for authorized chat users and deterministic conversation generation

export const CHAT_USERS = [
  {
    userId: "6ab6a433dc9e927412ca2c42",
    email: "naruto@naruto.com",
    name: "Naruto",
  },
  {
    userId: "6ab6a4b1dc9e927412ca2c46",
    email: "hinata@hinata.com",
    name: "Hinata",
  },
];


/**
 * Creates a deterministic conversation ID for two users by sorting their IDs.
 * Both users will always generate the exact same room identifier.
 */
export function createConversationId(userId1, userId2) {
  return [userId1, userId2].sort().join("_");
}

/**
 * Checks whether a given user session object matches one of the two authorized CHAT_USERS.
 * Verification is based on both userId and email.
 */
export function isAuthorizedChatUser(user) {
  if (!user || !user.id || !user.email) return false;
  return CHAT_USERS.some(
    (u) =>
      u.userId === user.id &&
      u.email.trim().toLowerCase() === user.email.trim().toLowerCase()
  );
}

/**
 * Returns the counterpart/other chat user in the authorized two-person chat.
 */
export function getOtherChatUser(currentUserId) {
  return CHAT_USERS.find((u) => u.userId !== currentUserId) || CHAT_USERS[0];
}
