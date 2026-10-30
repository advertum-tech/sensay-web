"use client";

import type { CSSProperties, ReactNode } from "react";
import { Stamp, useReplayInView } from "./BetaStamp";

// Private beta: every plan costs $0. Pro and Max play a short scene every time
// their price comes into view: the digit spins like a slot machine reel and
// stops on 0, the one-liner appears, then a "Free in beta" stamp lands.
export type Plan = "free" | "pro" | "max";
type Tone = "light" | "dark";

const QUIPS: Record<Plan, ReactNode> = {
  free: <>Free.<br />Of course.</>,
  pro: <>Also free.<br />Seriously.</>,
  max: <>Unlimited, for zero.<br />We checked twice.</>,
};

// Max spins longer than Pro, so it is the last one to stop.
const SPIN: Record<Exclude<Plan, "free">, { loops: number; ms: number }> = {
  pro: { loops: 2, ms: 1300 },
  max: { loops: 4, ms: 2300 },
};

// Two-line text next to the zero. The outer 20px span gives the price line the
// same height in all three cards, so the lists below start at the same height.
function Quip({
  tone,
  children,
  className = "",
  style,
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span className="text-[20px]">
      <span
        className={`inline-block font-semibold text-[15px] leading-[18px] ${tone === "dark" ? "text-white/60" : "text-black/60"} ${className}`}
        style={style}
      >
        {children}
      </span>
    </span>
  );
}

// One reel of digits, one line tall. It starts on 0, runs through `loops` full
// turns and stops on 0 again; the extra 9 after the last 0 is only seen during
// the overshoot of the stop. Out of view it jumps back to the start unseen.
function SlotDigit({ spin, loops, ms }: { spin: boolean; loops: number; ms: number }) {
  const stops = loops * 10 + 1;
  const digits = Array.from({ length: stops + 1 }, (_, i) => (stops - 1 - i + 100) % 10);
  return (
    <span className="inline-block h-[1lh] overflow-hidden align-top">
      <span
        className="block motion-reduce:transition-none"
        style={{
          transform: spin ? `translateY(calc(-1lh * ${stops - 1}))` : "translateY(0)",
          transitionProperty: "transform",
          transitionDuration: spin ? `${ms}ms` : "0ms",
          transitionTimingFunction: "cubic-bezier(.2,.75,.3,1.06)",
        }}
      >
        {digits.map((digit, i) => (
          <span key={i} className="block h-[1lh]">
            {digit}
          </span>
        ))}
      </span>
    </span>
  );
}

// Contents of a plan's price line. The line itself (font size, colour) stays
// in Pricing; it has to be `relative` for the stamp.
export function PlanPrice({ plan, tone }: { plan: Plan; tone: Tone }) {
  const { ref, inView } = useReplayInView<HTMLSpanElement>(1);

  if (plan === "free") {
    return (
      <>
        $0{" "}
        <Quip tone={tone}>{QUIPS.free}</Quip>
      </>
    );
  }

  const { loops, ms } = SPIN[plan];
  return (
    <>
      <span ref={ref}>
        $<SlotDigit spin={inView} loops={loops} ms={ms} />
      </span>{" "}
      <Quip
        tone={tone}
        className={`motion-reduce:opacity-100 motion-reduce:transition-none ${inView ? "opacity-100 transition-opacity duration-300" : "opacity-0 transition-none"}`}
        style={{ transitionDelay: inView ? `${ms}ms` : "0ms" }}
      >
        {QUIPS[plan]}
      </Quip>
      <Stamp size="card" show={inView} delayMs={ms + 150} className="absolute right-0 bottom-[calc(100%-4px)] -rotate-[10deg]">
        Free
        <br />
        in beta
      </Stamp>
    </>
  );
}
