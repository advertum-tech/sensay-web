import { getYmId } from "./ymId";

const YM_ID = getYmId();

declare global {
  function ym(counterId: number, method: string, ...args: unknown[]): void;
}

export function reachGoal(goal: string, params?: Record<string, unknown>): void {
  if (typeof window === "undefined" || typeof ym === "undefined") return;
  const userId = localStorage.getItem("sensay_user_id");
  const mergedParams = userId
    ? { users: { userId }, ...params }
    : params;
  ym(YM_ID, "reachGoal", goal, mergedParams);
}
