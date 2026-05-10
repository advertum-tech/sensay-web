"use client";
import { useEffect, useRef } from "react";

// All 7 bars share a single global animation cycle. Phase is offset progressively
// by bar index — adjacent bars are slightly out of sync, producing a smooth
// traveling sine-like wave across the logo (instead of each bar living its own life).
// Amplitude (min↔max scaleY) varies per bar — center has biggest, edges smallest.

const PERIOD_MS = 1100;       // one half-cycle (with `alternate`, full cycle = 2× this)
const PHASE_STEP_MS = 130;    // phase offset per bar — controls how much the wave "travels"

const BARS = [
  { x: 0,  min: 0.325, max: 0.425 },  // edge
  { x: 6,  min: 0.40,  max: 0.85  },  // bumped: was 0.625↔0.875, range 0.25 → 0.45
  { x: 12, min: 0.35,  max: 0.75  },
  { x: 18, min: 0.20,  max: 1.00  },  // center, biggest amplitude
  { x: 24, min: 0.35,  max: 0.75  },
  { x: 30, min: 0.40,  max: 0.85  },  // bumped: was 0.625↔0.875, range 0.25 → 0.45
  { x: 36, min: 0.325, max: 0.425 },  // edge
];

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

export default function AnimatedSensayLogo({ width = 41, height = 40, className, fill = "white" }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const rects = svg.querySelectorAll<SVGRectElement>("rect");
    const animations: Animation[] = [];
    rects.forEach((rect, i) => {
      const b = BARS[i];
      const anim = rect.animate(
        [
          { transform: `scaleY(${b.min})` },
          { transform: `scaleY(${b.max})` },
        ],
        {
          duration: PERIOD_MS,
          delay: -i * PHASE_STEP_MS, // progressive phase offset = traveling wave
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        },
      );
      animations.push(anim);
    });
    return () => animations.forEach((a) => a.cancel());
  }, []);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {BARS.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={0}
          width={5}
          height={40}
          rx={2.5}
          fill={fill}
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
            transform: `scaleY(${(b.min + b.max) / 2})`,
          }}
        />
      ))}
    </svg>
  );
}
