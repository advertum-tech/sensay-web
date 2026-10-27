import posthog from "posthog-js";

// Sends a landing event to PostHog. No-op on the server and when analytics is disabled.
export function reachGoal(goal: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (process.env.NEXT_PUBLIC_DISABLE_ANALYTICS === "true") return;
  posthog.capture(goal, params);
}
