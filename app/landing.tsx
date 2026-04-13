"use client";

import { useState } from "react";
import { useLang } from "@/app/context/LanguageContext";
import LangToggle from "@/app/context/LangToggle";
import { MicButton, VoiceDemo, StickyCta } from "./client";
import PricingAlert from "./components/PricingAlert";
import YmClientId from "./components/YmClientId";
import HeroDownload from "./components/HeroDownload";
import PlatformDebug from "./components/PlatformDebug";
import { reachGoal } from "./utils/reachGoal";

const WHITE  = "#ffffff";
const OFF    = "#faf8f6";
const TEXT   = "#111111";
const CORAL  = "#ff4422";
const CORAL2 = "#ff6644";
const MUTED  = "#888888";
const BORDER = "#e8e8e4";
const SANS   = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

export default function SensayLanding() {
  const lang = useLang();
  const [alertTier, setAlertTier] = useState<"free" | "pro" | null>(null);

  const howSteps = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
          <rect x="11" y="7" width="10" height="14" rx="5" fill={CORAL} opacity=".85"/>
          <path d="M7 17c0 4.97 4.03 9 9 9s9-4.03 9-9" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
          <line x1="16" y1="26" x2="16" y2="30" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
        </svg>
      ),
      n: "1",
      title:  lang === "ru" ? "Нажми и говори"            : "Tap and talk",
      body:   lang === "ru"
        ? "Открой Sensay, нажми на микрофон. Говори так, как говоришь с человеком рядом."
        : "Open Sensay, tap the mic. Speak the way you&rsquo;d say it to someone in the room.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
          <path d="M8 18 L12 22 L24 10" stroke={CORAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity=".85"/>
        </svg>
      ),
      n: "2",
      title:  lang === "ru" ? "Sensay приводит в порядок" : "Sensay cleans it",
      body:   lang === "ru"
        ? "Слова-паразиты, паузы и «эм» — исчезают. Грамматика исправлена. Стиль подобран под получателя."
        : "Filler words, pauses, and &ldquo;um&rdquo;s — gone. Grammar fixed. Register matched to where it&rsquo;s going.",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill={CORAL + "15"} />
          <path d="M8 10h16M8 16h12M8 22h8" stroke={CORAL} strokeWidth="2" strokeLinecap="round" opacity=".85"/>
        </svg>
      ),
      n: "3",
      title:  lang === "ru" ? "Текст появляется"          : "Text appears",
      body:   lang === "ru"
        ? "В вашем email, Slack, WhatsApp, Notion — где бы ни был курсор. Ничего не нужно вставлять. Готово."
        : "In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done.",
    },
  ];

  const useCases = [
    {
      emoji: "🚗",
      title: lang === "ru" ? "В машине"      : "In the car",
      body:  lang === "ru"
        ? "Отвечайте на сообщения, записывайте идеи. Руки на руле, слова в приложении."
        : "Reply to messages, jot down ideas. Hands on the wheel, words in the app.",
    },
    {
      emoji: "🛋️",
      title: lang === "ru" ? "На диване"     : "On the couch",
      body:  lang === "ru"
        ? "Длинный ответ, мало сил. Скажите, вместо того чтобы медленно тыкать в клавиши."
        : "Long reply, short energy. Say it instead of slowly hunting keys.",
    },
    {
      emoji: "🚶",
      title: lang === "ru" ? "На прогулке"  : "On a walk",
      body:  lang === "ru"
        ? "Идея, пришедшая на ходу. Скажите, пока не улетела."
        : "The idea that arrived while moving. Say it before it&rsquo;s gone.",
    },
    {
      emoji: "🍳",
      title: lang === "ru" ? "Руки заняты"  : "Hands full",
      body:  lang === "ru"
        ? "Готовите, делаете кофе, что угодно. Голос свободен, даже когда руки заняты."
        : "Cooking, coffee, whatever. Your voice is free even when your hands aren&rsquo;t.",
    },
  ];

  const testimonials = [
    {
      quote: lang === "ru"
        ? "За время поездки ответил на 12 сообщений в WhatsApp. Без Sensay я бы смотрел на них до вечера."
        : "I replied to like 12 WhatsApps during my commute. Without Sensay I would've just stared at them until evening.",
      name: "Marcus T.", role: lang === "ru" ? "Менеджер проектов" : "Project manager", color: "#ff9985",
    },
    {
      quote: lang === "ru"
        ? "Ответы ChatGPT стали заметно лучше. Оказывается, я просто ленился формулировать запросы — набирать их было лень."
        : "My ChatGPT answers got noticeably better. Turns out I was just being lazy with my prompts because typing them out felt like work.",
      name: "Daria S.", role: lang === "ru" ? "Дизайнер" : "Designer", color: "#ff7055",
    },
    {
      quote: lang === "ru"
        ? "Написал полный апдейт для клиента, пока шёл к кофемашине. Отправил до того, как сел обратно."
        : "I drafted a full client update email while walking to the coffee machine. Hit send before I even sat back down.",
      name: "James R.", role: lang === "ru" ? "Консультант" : "Consultant", color: "#ff4422",
    },
  ];

  const faqs = [
    {
      q: lang === "ru" ? "Насколько точно распознаёт?"         : "How accurate is it?",
      a: lang === "ru"
        ? "Очень точно. Хорошо справляется с разговорной речью — включая слова-паразиты, паузы и большинство акцентов. Не идеально в 100% случаев, но быстрее поправить одно слово, чем набирать всё заново."
        : "Very. It handles natural speech well — including filler words, mid-sentence corrections, and most accents. It won't be perfect 100% of the time, but it's faster to fix one word than to type the whole thing.",
    },
    {
      q: lang === "ru" ? "Какие языки поддерживаются?"          : "What languages does it support?",
      a: lang === "ru"
        ? "Более 50 языков, включая русский, английский, испанский, французский, немецкий, арабский, японский и другие. Бесплатный тариф покрывает все основные языки."
        : "50+ languages including English, Spanish, French, German, Portuguese, Russian, Arabic, Japanese, and more. The free tier covers all major languages.",
    },
    {
      q: lang === "ru" ? "Голос записывается или хранится?"     : "Is my voice recorded or stored?",
      a: lang === "ru"
        ? "Нет. Аудио обрабатывается в реальном времени и не сохраняется на наших серверах. То, что вы говорите, остаётся у вас."
        : "No. Audio is processed in real time and not stored on our servers. What you say stays with you.",
    },
    {
      q: lang === "ru" ? "Работает офлайн?"                    : "Does it work offline?",
      a: lang === "ru"
        ? "Пока нет — обработка происходит в облаке для максимальной точности. Нужно соединение, но оно достаточно быстрое, чтобы этого не замечать."
        : "Not yet — processing happens in the cloud for best accuracy. You need a connection, but it's fast enough that you won't notice.",
    },
    {
      q: lang === "ru" ? "В каких приложениях работает?"        : "Which apps does it work with?",
      a: lang === "ru"
        ? "В любом приложении, где можно набирать текст — Gmail, Slack, WhatsApp, Notion, ChatGPT, Outlook, Google Docs, Teams, любое поле ввода в браузере. Если есть текстовый курсор — Sensay работает."
        : "Any app where you can type — Gmail, Slack, WhatsApp, Notion, ChatGPT, Outlook, Google Docs, Teams, any browser input field. If there's a text cursor, Sensay works.",
    },
    {
      q: lang === "ru" ? "Что будет, когда закончится пробный период?" : "What happens when my free trial ends?",
      a: lang === "ru"
        ? "Ничего страшного. Вы переходите на бесплатный тариф — 30 минут в день, навсегда. Переходите на платный только если хотите больше."
        : "Nothing scary. You drop to the free tier — 30 minutes a day, forever. Upgrade only if you want more.",
    },
  ];

  const freeFeatures  = lang === "ru"
    ? ["30 минут / день", "Русский + основные языки", "Браузер + основные приложения"]
    : ["30 minutes / day", "English + major languages", "Browser + key apps"];

  const proFeatures   = lang === "ru"
    ? ["Неограниченная диктовка", "Все языки", "Любое приложение и поле ввода", "Умный контекстный стиль", "Приоритетная обработка"]
    : ["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"];

  const teamFeatures  = lang === "ru"
    ? ["Всё из Про", "Управление командой + SSO", "Журналы аудита", "Приоритетная поддержка"]
    : ["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        @keyframes s-wave { from{transform:scaleY(.4)} to{transform:scaleY(1)} }
        @keyframes s-fade  { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }

        .s a { color: inherit; text-decoration: none; }
        .s-cta {
          background: ${CORAL};
          color: #fff;
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 8px;
          display: inline-block;
          transition: all .15s;
          letter-spacing: .01em;
        }
        .s-cta:hover { background: ${CORAL2}; transform: translateY(-1px); box-shadow: 0 6px 24px ${CORAL}40; }
        .s-ghost {
          color: ${MUTED};
          font-family: ${SANS};
          font-size: .9rem;
          font-weight: 500;
          padding: 14px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color .15s;
        }
        .s-ghost:hover { color: ${TEXT}; }
        .s-card {
          background: ${WHITE};
          border: 1.5px solid ${BORDER};
          border-radius: 12px;
          padding: 1.75rem;
          transition: box-shadow .2s;
        }
        .s-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,.08); }

        @media (max-width: 900px) {
          .s-hero-grid  { flex-direction: column !important; gap: 3rem !important; }
          .s-three-col  { grid-template-columns: 1fr !important; }
          .s-four-col   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .s-four-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 700px) {
          .s-two-col { grid-template-columns: 1fr !important; }
        }
        .s-faq-item summary {
          list-style: none; cursor: pointer;
          font-family: ${SANS}; font-size: .95rem; font-weight: 600; color: ${TEXT};
          display: flex; justify-content: space-between; align-items: center;
          transition: color .15s;
        }
        .s-faq-item summary::-webkit-details-marker { display: none; }
        .s-faq-item summary::after { content: '+'; color: ${MUTED}; font-size: 1.3rem; font-weight: 300; line-height: 1; }
        .s-faq-item[open] > summary { color: ${CORAL}; }
        .s-faq-item[open] > summary::after { content: '−'; color: ${CORAL}; }
      `}</style>

      <div className="s" style={{ background: WHITE, minHeight: "100vh" }}>

        {/* ── Header ── */}
        <header style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          background: "rgba(255,255,255,.94)", backdropFilter: "blur(10px)",
          borderBottom: `1px solid ${BORDER}`,
          zIndex: 999, height: 60,
          display: "flex", alignItems: "center",
        }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 700, letterSpacing: "-.01em" }}>
              Sen<span style={{ color: CORAL }}>say</span>
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {/* <YmClientId /> */}
              <LangToggle />
              <a href="#pricing" className="s-cta" style={{ padding: "8px 20px", fontSize: "0.8rem", borderRadius: 6 }}>
                {lang === "ru" ? "Попробовать" : "Try free"}
              </a>
            </div>
          </div>
        </header>

        {/* ── HERO ── */}
        <section style={{ background: OFF, minHeight: "100vh", paddingTop: 60, display: "flex", alignItems: "center" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, padding: "80px 0" }}>
            <div className="s-hero-grid" style={{ display: "flex", alignItems: "center", gap: "5rem" }}>

              <div style={{ flex: "1 1 0", minWidth: 0 }}>
                <div style={{
                  display: "inline-block",
                  background: CORAL + "12",
                  color: CORAL,
                  fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600,
                  letterSpacing: "0.12em", textTransform: "uppercase",
                  padding: "5px 14px", borderRadius: 20,
                  marginBottom: "2rem",
                }}>
                  {lang === "ru" ? "Голосовой ввод · работает в любом приложении" : "Voice dictation · works in any app"}
                </div>
                <h1 style={{
                  color: TEXT, fontFamily: SANS,
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 700, lineHeight: 1.1,
                  margin: "0 0 1.5rem",
                  letterSpacing: "-.03em",
                }}>
                  {lang === "ru" ? (
                    <>Просто<br />скажи<br /><span style={{ color: CORAL }}>это.</span></>
                  ) : (
                    <>Just<br />say<br /><span style={{ color: CORAL }}>it.</span></>
                  )}
                </h1>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "clamp(.9rem,1.8vw,1.1rem)", lineHeight: 1.85, maxWidth: 440, margin: "0 0 2.5rem", fontWeight: 400 }}>
                  {lang === "ru"
                    ? "Говорите. Получайте чистый текст — в email, Slack, WhatsApp или где угодно ещё. Без набора. Без переключения приложений."
                    : "Speak. Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else. No typing. No switching apps."}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14, alignItems: "flex-start" }}>
                  <HeroDownload />
                  <a href="#how" className="s-ghost">
                    {lang === "ru" ? "Как это работает →" : "See how →"}
                  </a>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "2rem" }}>
                  <div style={{ display: "flex" }}>
                    {["#ff9985","#ff7055","#ff4422"].map((c, i) => (
                      <div key={i} style={{ width: 28, height: 28, borderRadius: "50%", background: c, border: `2px solid ${OFF}`, marginLeft: i ? -8 : 0 }} />
                    ))}
                  </div>
                  <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.8rem", fontWeight: 400 }}>
                    {lang === "ru"
                      ? <>Уже любят <strong style={{ color: TEXT }}>12 000+</strong> человек</>
                      : <>Loved by <strong style={{ color: TEXT }}>12,000+</strong> people already</>}
                  </span>
                </div>
              </div>

              <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
                <div style={{ position: "relative", width: 280, height: 320, borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,.10)" }}>
                  <img
                    src="/sensay/hero.jpg"
                    alt={lang === "ru" ? "Говорит в телефон" : "Speaking into phone"}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                  />
                  <div style={{
                    position: "absolute", bottom: 16, right: 16,
                    width: 48, height: 48, borderRadius: "50%",
                    background: CORAL, display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: `0 4px 16px ${CORAL}60`,
                  }}>
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none">
                      <rect x="4" y="0" width="10" height="15" rx="5" fill="white" opacity=".9"/>
                      <path d="M1 12c0 4.42 3.58 8 8 8s8-3.58 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                      <line x1="9" y1="20" x2="9" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".9"/>
                    </svg>
                  </div>
                </div>
                <VoiceDemo />
              </div>

            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section id="how" style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {lang === "ru" ? "Три секунды от начала до конца." : "Three seconds, start to finish."}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: 0, fontWeight: 400 }}>
                {lang === "ru"
                  ? "Никакого обучения. Никаких настроек. Вы уже умеете этим пользоваться."
                  : "No learning curve. No setup. You already know how to use it."}
              </p>
            </div>
            <div className="s-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {howSteps.map(({ icon, n, title, body }) => (
                <div key={n} className="s-card">
                  <div style={{ marginBottom: "1.2rem" }}>{icon}</div>
                  <h3 style={{ color: TEXT, fontFamily: SANS, fontSize: "1.1rem", fontWeight: 600, margin: "0 0 .6rem", letterSpacing: "-.01em" }}>{title}</h3>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.85rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INTEGRATION STRIP ── */}
        <section style={{ background: OFF, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "40px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500, whiteSpace: "nowrap" }}>
                {lang === "ru" ? "Работает в" : "Works in"}
              </span>
              {["Gmail", "Slack", "WhatsApp", "Notion", "Outlook", "Google Docs", "Teams", lang === "ru" ? "Любом браузере" : "Any browser"].map(app => (
                <div key={app} style={{
                  background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 6,
                  padding: "5px 14px",
                  color: TEXT, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500,
                  whiteSpace: "nowrap",
                }}>
                  {app}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY VOICE WINS ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {lang === "ru" ? (
                  <>Вы набираете 40 слов в минуту.<br />Вы говорите 130.</>
                ) : (
                  <>You type 40 words a minute.<br />You speak 130.</>
                )}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: "0 auto", maxWidth: 480 }}>
                {lang === "ru"
                  ? "Ваши мысли не замедляются под скорость пальцев. Ваши сообщения — тоже не должны."
                  : "Your thoughts don\u2019t slow down for your fingers. Neither should your messages."}
              </p>
            </div>
            <div className="s-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 820, margin: "0 auto" }}>
              <div style={{ background: OFF, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: MUTED, flexShrink: 0 }} />
                  <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {lang === "ru" ? "Набор текста" : "Typing"}
                  </span>
                </div>
                <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.9, margin: 0 }}>
                  {lang === "ru"
                    ? "Ищите нужные слова. Исправляете опечатки. Перечитываете. Редактируете снова. Отправляете что-то короче, чем хотели сказать."
                    : "Hunt for the right words. Fix the typo. Re-read. Edit again. Send something shorter than what you actually meant."}
                </p>
              </div>
              <div style={{ background: CORAL + "08", border: `1.5px solid ${CORAL}30`, borderRadius: 12, padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: "1.2rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: CORAL, flexShrink: 0 }} />
                  <span style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                    {lang === "ru" ? "Говорите с Sensay" : "Speaking with Sensay"}
                  </span>
                </div>
                <p style={{ color: TEXT, fontFamily: SANS, fontSize: "0.95rem", lineHeight: 1.9, margin: 0 }}>
                  {lang === "ru"
                    ? "Скажите именно то, что имеете в виду. Sensay приводит в порядок. Готово за то время, что уходит на разблокировку телефона."
                    : "Say exactly what you mean. Sensay cleans it up. Done in the time it took to unlock your phone."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── WHEN TO USE ── */}
        <section style={{ background: WHITE, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {lang === "ru" ? "Всякий раз, когда набирать текст — слишком долго." : "Whenever typing feels like too much."}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", margin: 0 }}>
                {lang === "ru" ? "А это, честно говоря, почти всегда." : "Which is, honestly, most of the time."}
              </p>
            </div>
            <div className="s-four-col" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1.5rem" }}>
              {useCases.map(({ emoji, title, body }) => (
                <div key={title} className="s-card" style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{emoji}</div>
                  <h4 style={{ color: TEXT, fontFamily: SANS, fontSize: "1rem", fontWeight: 600, margin: "0 0 .6rem" }}>{title}</h4>
                  <p style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", lineHeight: 1.85, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AI PROMPTS ── */}
        <section style={{ background: OFF, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div style={{
                display: "inline-block", background: CORAL + "12", color: CORAL,
                fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "5px 14px", borderRadius: 20, marginBottom: "1.5rem",
              }}>
                {lang === "ru" ? "Для тех, кто активно использует ИИ" : "For AI power users"}
              </div>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {lang === "ru" ? (
                  <>Ваш ИИ становится умнее, когда вы<br />перестаёте ему печатать.</>
                ) : (
                  <>Your AI gets smarter when you<br />stop typing to it.</>
                )}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", lineHeight: 1.8, margin: "0 auto", maxWidth: 520 }}>
                {lang === "ru"
                  ? "Когда печатаете запрос — срезаете углы. Когда говорите — объясняете. Лучше ввод — лучше результат. Каждый раз."
                  : "When you type a prompt, you cut corners. When you speak, you explain. Better input, better output — every time."}
              </p>
            </div>
            <div className="s-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem", maxWidth: 860, margin: "0 auto 2rem" }}>
              <div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {lang === "ru" ? "Напечатанный запрос" : "Typed prompt"}
                </div>
                <div style={{ background: WHITE, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem", fontFamily: "'Courier New', monospace", fontSize: "0.88rem", color: MUTED, lineHeight: 1.7, minHeight: 100, display: "flex", alignItems: "center" }}>
                  {lang === "ru" ? "сделай краткое содержание статьи" : "summarize this article"}
                </div>
              </div>
              <div>
                <div style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {lang === "ru" ? "Сказано → обработано Sensay" : "Spoken → cleaned by Sensay"}
                </div>
                <div style={{ background: WHITE, border: `1.5px solid ${CORAL}30`, borderRadius: 10, padding: "1.25rem 1.5rem", fontFamily: "'Courier New', monospace", fontSize: "0.88rem", color: TEXT, lineHeight: 1.7 }}>
                  {lang === "ru"
                    ? "Сделай краткое содержание этой статьи в 3 пунктах, акцентируя практическую пользу для нетехнической аудитории. Уложись в 100 слов."
                    : "Can you summarize this article in 3 bullet points, focusing on the practical implications for a non-technical audience? Keep it under 100 words."}
                </div>
              </div>
            </div>
            <p style={{ textAlign: "center", color: MUTED, fontFamily: SANS, fontSize: "0.85rem", margin: 0 }}>
              {lang === "ru"
                ? "Одна и та же мысль. Первый набрали за 3 секунды. Второй произнесли за 4 — и получили гораздо лучший ответ."
                : "Same thought. One took 3 seconds to type. The other took 4 seconds to say — and got a much better answer."}
            </p>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
                {lang === "ru" ? "Реальные люди. Реальные сообщения." : "Real people. Real messages."}
              </h2>
            </div>
            <div className="s-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }}>
              {testimonials.map(({ quote, name, role, color }) => (
                <div key={name} className="s-card" style={{ display: "flex", flexDirection: "column" }}>
                  <div style={{ color: CORAL, fontSize: "3rem", lineHeight: 1, marginBottom: ".75rem", opacity: 0.2, fontFamily: "Georgia, serif" }}>&ldquo;</div>
                  <p style={{ color: TEXT, fontFamily: SANS, fontSize: "0.92rem", lineHeight: 1.85, margin: "0 0 auto", flex: 1 }}>{quote}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: `1px solid ${BORDER}` }}>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: color, flexShrink: 0 }} />
                    <div>
                      <div style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", fontWeight: 600 }}>{name}</div>
                      <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.75rem" }}>{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: WHITE, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 720 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, letterSpacing: "-.02em", margin: 0 }}>
                {lang === "ru" ? "Простые ответы." : "Simple answers."}
              </h2>
            </div>
            <div style={{ border: `1.5px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              {faqs.map(({ q, a }, i, arr) => (
                <details key={q} className="s-faq-item" style={{ background: WHITE, borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : "none" }}>
                  <summary style={{ padding: "1.3rem 1.75rem" }}>{q}</summary>
                  <p style={{ padding: "0 1.75rem 1.3rem", color: MUTED, fontFamily: SANS, fontSize: "0.88rem", lineHeight: 1.85, margin: 0 }}>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section id="pricing" style={{ background: OFF, padding: "96px 0", borderTop: `1px solid ${BORDER}` }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h2 style={{ color: TEXT, fontFamily: SANS, fontSize: "clamp(1.8rem,3.5vw,2.4rem)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 .75rem" }}>
                {lang === "ru" ? "Простые цены." : "Simple pricing."}
              </h2>
              <p style={{ color: MUTED, fontFamily: SANS, fontSize: "1rem", margin: 0 }}>
                {lang === "ru" ? "Начните бесплатно. Переходите на платный, когда втянетесь." : "Start free. Upgrade when you\u2019re hooked."}
              </p>
            </div>
            <div className="s-three-col" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 880, margin: "0 auto" }}>

              <div className="s-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {lang === "ru" ? "Бесплатно" : "Free"}
                </div>
                <div style={{ color: TEXT, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>
                  {lang === "ru" ? "0 ₽" : "$0"}
                </div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>
                  {lang === "ru" ? "навсегда бесплатно" : "always free"}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {freeFeatures.map(item => (
                    <li key={item} style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { reachGoal("click_pricing_free"); setAlertTier("free"); }}
                  style={{ marginTop: "2rem", display: "block", width: "100%", textAlign: "center", border: `1.5px solid ${BORDER}`, color: TEXT, fontFamily: SANS, fontSize: "0.88rem", fontWeight: 600, padding: "12px", borderRadius: 8, background: WHITE, cursor: "pointer" }}
                >
                  {lang === "ru" ? "Начать" : "Get started"}
                </button>
              </div>

              <div style={{ background: TEXT, border: "none", borderRadius: 12, padding: "1.75rem", display: "flex", flexDirection: "column", position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: CORAL, color: "#fff", fontFamily: SANS, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", padding: "4px 14px", borderRadius: 20, textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  {lang === "ru" ? "Самый популярный" : "Most popular"}
                </div>
                <div style={{ color: CORAL, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {lang === "ru" ? "Про" : "Pro"}
                </div>
                <div style={{ color: WHITE, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>
                  {lang === "ru" ? "699 ₽" : "$9"}
                </div>
                <div style={{ color: "#888", fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>
                  {lang === "ru" ? "в месяц · отмена в любой момент" : "per month · cancel anytime"}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {proFeatures.map(item => (
                    <li key={item} style={{ color: "#ddd", fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: CORAL, fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => { reachGoal("click_pricing_pro"); setAlertTier("pro"); }}
                  className="s-cta"
                  style={{ marginTop: "2rem", display: "block", width: "100%", textAlign: "center", fontSize: "0.88rem", padding: "12px", borderRadius: 8, border: "none", cursor: "pointer" }}
                >
                  {lang === "ru" ? "14 дней бесплатно" : "14 days free"}
                </button>
              </div>

              <div className="s-card" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
                  {lang === "ru" ? "Команда" : "Team"}
                </div>
                <div style={{ color: TEXT, fontFamily: SANS, fontSize: "2.4rem", fontWeight: 700, marginBottom: ".2rem", letterSpacing: "-.02em" }}>
                  {lang === "ru" ? "По запросу" : "Custom"}
                </div>
                <div style={{ color: MUTED, fontFamily: SANS, fontSize: "0.82rem", marginBottom: "1.5rem" }}>
                  {lang === "ru" ? "для команд от 5 человек" : "for teams of 5+"}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 auto", flex: 1 }}>
                  {teamFeatures.map(item => (
                    <li key={item} style={{ color: TEXT, fontFamily: SANS, fontSize: "0.85rem", lineHeight: "2.2", paddingLeft: "1.4rem", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "#22c55e", fontWeight: 700 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <a href="mailto:hi@sensay.app" style={{ marginTop: "2rem", display: "block", textAlign: "center", border: `1.5px solid ${BORDER}`, color: TEXT, fontFamily: SANS, fontSize: "0.88rem", fontWeight: 600, padding: "12px", borderRadius: 8 }}>
                  {lang === "ru" ? "Связаться" : "Get in touch"}
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: CORAL, padding: "96px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 700, textAlign: "center" }}>
            <h2 style={{ color: WHITE, fontFamily: SANS, fontSize: "clamp(2rem,4.5vw,3.4rem)", fontWeight: 700, lineHeight: 1.15, margin: "0 0 1.2rem", letterSpacing: "-.02em" }}>
              {lang === "ru" ? "Вы знаете, что хотите сказать." : "You know what you want to say."}
            </h2>
            <p style={{ color: "rgba(255,255,255,.75)", fontFamily: SANS, fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2.5rem", fontWeight: 400 }}>
              {lang === "ru" ? "Так скажите." : "So say it."}
            </p>
            <a href="#pricing" style={{
              background: WHITE, color: CORAL,
              fontFamily: SANS, fontSize: "1rem", fontWeight: 700,
              padding: "16px 48px", borderRadius: 10,
              display: "inline-block",
              transition: "all .15s",
              boxShadow: "0 4px 20px rgba(0,0,0,.15)",
            }}>
              {lang === "ru" ? "Попробовать Sensay бесплатно" : "Try Sensay free"}
            </a>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ background: WHITE, borderTop: `1px solid ${BORDER}`, padding: "28px 0" }}>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem", fontWeight: 500 }}>
              Sen<span style={{ color: CORAL }}>say</span> — {lang === "ru" ? "голосовой ввод на ИИ" : "voice dictation AI"}
            </span>
            <span style={{ color: MUTED, fontFamily: SANS, fontSize: "0.78rem" }}>
              {lang === "ru" ? "Сделано командой " : "Made by "}
              <a href="https://advertum.com" style={{ color: TEXT, fontWeight: 500 }}>Advertum</a>
            </span>
          </div>
          <div style={{ margin: "0 auto", width: "90%", maxWidth: 1200 }}>
            <PlatformDebug />
          </div>
        </footer>

      </div>

      <StickyCta />
      {alertTier && <PricingAlert tier={alertTier} visible={true} onClose={() => setAlertTier(null)} />}
    </>
  );
}
