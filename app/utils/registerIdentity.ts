import { getYmId } from "./ymId";

const YM_ID = getYmId();//test deploy
const API_URL = "https://api.sensay.app/functions/v1/register-identity";

function getYmClientId(): Promise<string | null> {
  return new Promise((resolve) => {
    const w = window as unknown as { ym?: (id: number, method: string, cb: (cid: string) => void) => void };
    if (typeof w.ym === "function") {
      try {
        w.ym(YM_ID, "getClientID", (cid: string) => {
          resolve(cid || null);
        });
      } catch {
        resolve(null);
      }
    } else {
      resolve(null);
    }
  });
}

export async function registerIdentity(): Promise<void> {
  const ymClientId = await getYmClientId();
  if (!ymClientId) return;

  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ym_client_id: ymClientId }),
    });
  } catch {
    // silently fail — don't block the user
  }
}