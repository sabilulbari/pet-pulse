/**
 * Formats a server timestamp into a friendly relative or absolute time.
 * Examples: "Just now", "2 minutes ago", "1 hour ago", "Yesterday at 10:30 AM", "Sep 25, 2026 at 2:15 PM"
 */
export function formatRelativeTime(dateInput) {
  if (!dateInput) return "";

  const date = new Date(dateInput);
  if (isNaN(date.getTime())) return "";

  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  // If time is negative or within 45 seconds
  if (diffInSeconds < 45) {
    return "Just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return diffInMinutes === 1 ? "1 minute ago" : `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    // Check if it's the same day
    const isSameDay =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isSameDay) {
      return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
    }
  }

  // Check if it was yesterday
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const isYesterday =
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear();

  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  if (isYesterday) {
    return `Yesterday at ${timeString}`;
  }

  // Older dates
  return `${date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: date.getFullYear() !== now.getFullYear() ? "numeric" : undefined,
  })} at ${timeString}`;
}

/**
 * Checks whether an element is scrolled near the bottom within a given pixel threshold.
 */
export function isScrolledNearBottom(element, threshold = 80) {
  if (!element) return false;
  return element.scrollHeight - element.scrollTop - element.clientHeight <= threshold;
}
