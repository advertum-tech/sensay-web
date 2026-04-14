import { getYmId } from "./ymId";

const YM_ID = getYmId();

export function reachGoal(goal: string) {
  if (typeof window !== "undefined") {
    const w = window as unknown as { ym?: (id: number, method: string, goal: string) => void };
    if (typeof w.ym === "function") {
      w.ym(YM_ID, "reachGoal", goal);
    }
  }
}