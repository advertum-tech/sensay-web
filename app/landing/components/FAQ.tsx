"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const ITEMS: Item[] = [
  {
    q: "How accurate is it?",
    a: "Extremely. Sensay uses state-of-the-art speech recognition that adapts to your accent and speaking style over time.",
  },
  {
    q: "What languages does it support?",
    a: "50+ languages including English, Spanish, French, German, Portuguese, Russian, Arabic, Japanese, and more. The free tier covers all major languages.",
  },
  {
    q: "Is my voice recorded or stored?",
    a: "No. Audio is processed in real time and never stored. Only the resulting text is handled.",
  },
  {
    q: "Does it work offline?",
    a: "Core transcription requires an internet connection. Offline mode for basic dictation is on our roadmap.",
  },
  {
    q: "Which apps does it work with?",
    a: "Any app with a text input — email, Slack, WhatsApp, Notion, browsers, coding editors, and more.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "You'll automatically continue on the Free plan (30 min/day). No charges, no card required unless you upgrade.",
  },
];

function PlusCross({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0 transition-transform duration-300 ease-out"
      style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
      aria-hidden="true"
    >
      <line x1="2" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <line x1="10" y1="2" x2="10" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export default function FAQ() {
  // Multi-open: opening one doesn't close the others. Default open: index 1 (matches figma).
  const [open, setOpen] = useState<Set<number>>(new Set([1]));

  function toggle(i: number) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section className="bg-[#E3DED3] pt-12 pb-20 md:pt-16 md:pb-28">

      {/* Dark wrapper — single element across breakpoints. Fits inside viewport on mobile/tablet via mx, capped at 1580 on xl. */}
      <div className="mx-5 md:mx-[50px] xl:mx-auto xl:max-w-[1580px] relative bg-[#2f2f2f] rounded-[20px]">

        {/* Tail at bottom-RIGHT */}
        <img
          src="/landing-assets/card-tail-dark.svg"
          alt=""
          width={25}
          height={16}
          className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100"
        />

        {/* Heading */}
        <div className="px-6 pt-10 md:px-12 md:pt-14 xl:px-[100px] xl:pt-[100px]">
          <h2 className="font-['Inter',sans-serif] uppercase text-[#E3DAD0] text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] mb-8 md:mb-12 xl:mb-16">
            <span className="font-bold">Simple</span><br />
            <span className="font-normal">answers.</span>
          </h2>
        </div>

        {/* Items list — divider lines run edge-to-edge of dark wrapper; content sits in narrower sub-grid (1180 on xl) */}
        <div>
          {ITEMS.map((item, i) => {
            const isOpen = open.has(i);
            const firstWord = item.q.split(" ")[0];
            const rest = item.q.slice(firstWord.length + 1);
            return (
              <div key={i} className="border-t border-white/20 last:pb-6 md:last:pb-10 xl:last:pb-16">
                <div className="max-w-[1180px] mx-auto px-6 md:px-12 xl:px-0">
                  <button
                    type="button"
                    onClick={() => toggle(i)}
                    className={`w-full text-left flex items-center gap-4 md:gap-6 py-4 md:py-5 xl:py-6 cursor-pointer transition-colors ${isOpen ? "text-[#FF4122]" : "text-[#E3DAD0]"}`}
                  >
                    <PlusCross open={isOpen} />
                    <span className="font-['Inter',sans-serif] uppercase leading-[28px] text-[16px] xl:text-[18px]">
                      <strong className="font-bold">{firstWord}</strong>{" "}
                      <span className="font-normal">{rest}</span>
                    </span>
                  </button>
                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="font-['Inter',sans-serif] font-normal text-[16px] xl:text-[18px] leading-[28px] xl:leading-[36px] text-[#E3DAD0] max-w-[880px] pl-9 md:pl-11 pb-5 md:pb-6 xl:pb-8">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
