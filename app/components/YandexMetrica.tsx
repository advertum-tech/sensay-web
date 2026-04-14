"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { getYmId } from "../utils/ymId";

const YM_ID = getYmId();
const API_BASE = "https://api.sensay.app";

export default function YandexMetrica() {
  const pathname = usePathname();

  return (
    <>
      <Script
        src="https://mc.yandex.ru/metrika/tag.js"
        strategy="afterInteractive"
      />
      <Script id="yandex-metrica-init" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0];
          k.async=1;k.src=r;a.parentNode.insertBefore(k,a)})
          (window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");

          // Если UserID закэширован с предыдущего визита — выставляем ДО init,
          // чтобы первый хит уже содержал UserID
          var _cachedUserId = localStorage.getItem("sensay_user_id");
          if (_cachedUserId) {
            ym(${YM_ID}, "setUserID", _cachedUserId);
          }

          ym(${YM_ID}, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            triggerEvent:true,
          });

          document.addEventListener("yacounter${YM_ID}inited", function() {
            ym(${YM_ID}, "getClientID", function(clientID) {
              if (!clientID) return;
              fetch("${API_BASE}/functions/v1/register-identity", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ym_client_id: clientID }),
              })
                .then(function(res) { return res.ok ? res.json() : null; })
                .then(function(data) {
                  if (data && data.user_id) {
                    localStorage.setItem("sensay_user_id", data.user_id);
                    ym(${YM_ID}, "setUserID", data.user_id);
                  }
                })
                .catch(function() { /* silently fail */ });
            });
          });
        `}
      </Script>
      <Script id="yandex-metrica-navigate" strategy="afterInteractive">
        {`
          (function(){
            var _path = window.location.pathname;
            var _origPush = history.pushState;
            var _origReplace = history.replaceState;

            function sendHit() {
              if (typeof ym === "function" && window.location.pathname !== _path) {
                _path = window.location.pathname;
                var lang = _path.startsWith("/ru") ? "ru" : "en";
                ym(${YM_ID}, "hit", _path, { params: { lang: lang } });
              }
            }

            history.pushState = function() {
              _origPush.apply(this, arguments);
              sendHit();
            };
            history.replaceState = function() {
              _origReplace.apply(this, arguments);
              sendHit();
            };
            window.addEventListener("popstate", sendHit);
          })();
        `}
      </Script>
      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${YM_ID}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}