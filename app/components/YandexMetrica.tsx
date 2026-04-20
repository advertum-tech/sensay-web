"use client";

import Script from "next/script";
import { useEffect } from "react";
import { getYmId } from "../utils/ymId";
import { detectPlatformSlug } from "../utils/platformSlug";

const YM_ID = getYmId();
const API_BASE = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://api.sensay.app";

declare global {
  function ym(counterId: number, method: string, ...args: unknown[]): void;
}

export default function YandexMetrica() {
  useEffect(() => {
    function applyUser(userId: string) {
      ym(YM_ID, "userParams", { UserID: userId });
      ym(YM_ID, "reachGoal", "visit", { users: { userId } });
    }

    function handleInited() {
      // Always hit register-identity, even on repeat visits, so the server
      // refreshes ip_address, ip_expires_at (1-hour TTL), and updated_at.
      // Skipping this call lets IP/fingerprint go stale, which breaks
      // identify-session on subsequent app launches from the same browser.
      //
      // No localStorage fast-path: if the server row was deleted (testing or
      // expire-identities cron), the cached user_id is stale. Waiting ~300ms
      // for the server's fresh id is cheaper than emitting a visit goal bound
      // to a user that no longer exists.
      ym(YM_ID, "getClientID", async (clientId: string) => {
        if (!clientId) return;
        const platform = await detectPlatformSlug();
        fetch(`${API_BASE}/functions/v1/register-identity`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ym_client_id: clientId,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            locale: navigator.language,
            screen: `${screen.width}x${screen.height}`,
            platform,
          }),
        })
          .then((res) => (res.ok ? res.json() : null))
          .then((data: { user_id?: string } | null) => {
            if (!data?.user_id) return;
            localStorage.setItem("sensay_user_id", data.user_id);
            applyUser(data.user_id);
          })
          .catch(() => {});
      });
    }

    const counterReady = `yaCounter${YM_ID}` in window;
    if (counterReady) {
      handleInited();
    } else {
      document.addEventListener(`yacounter${YM_ID}inited`, handleInited, { once: true });
    }

    return () => {
      document.removeEventListener(`yacounter${YM_ID}inited`, handleInited);
    };
  }, []);

  return (
    <Script id="yandex-metrica-init" strategy="afterInteractive">
      {`
        (function(m,e,t,r,i,k,a){
          m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
        })(window,document,"script","https://mc.yandex.ru/metrika/tag.js?id=${YM_ID}","ym");

        ym(${YM_ID}, "init", {
          ssr: true,
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          referrer: document.referrer,
          url: location.href,
          triggerEvent: true,
        });
      `}
    </Script>
  );
}
