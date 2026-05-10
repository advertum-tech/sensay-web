"use client";
import { useEffect, useRef } from "react";

// Each bar's scaleY = weighted sum of 3 sine waves with incommensurable frequencies.
// All bars are computed from the same `t` and share the formulas — neighbor bars get
// similar phase-shifted values → visually they stay one fluid wave (still linked).
// But because the 3 sine frequencies don't share a rational ratio, the overall pattern
// across the whole logo doesn't repeat for a very long time (~minutes) — feels organic,
// not like a looping cassette.
// scaleY range is then mapped into each bar's own [min, max] so center still has the
// biggest amplitude and edges the smallest.

const BARS = [
  { x: 0,  min: 0.325, max: 0.425 },  // edge
  { x: 6,  min: 0.40,  max: 0.85  },
  { x: 12, min: 0.35,  max: 0.75  },
  { x: 18, min: 0.20,  max: 1.00  },  // center, biggest amplitude
  { x: 24, min: 0.35,  max: 0.75  },
  { x: 30, min: 0.40,  max: 0.85  },
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
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      rects.forEach((rect, i) => {
        const b = BARS[i];
        // 3 traveling waves at incommensurable frequencies (2.85, 1.69, 4.43 rad/s).
        // Each carries a per-bar phase offset (k·i) so adjacent bars are smoothly linked.
        // Frequencies match the previously-approved ~2.2s full cycle (ω = 2π/2.2).
        const w1 = Math.sin(t * 2.85 - i * 0.55);
        const w2 = Math.sin(t * 1.69 + i * 0.31 + 1.7);
        const w3 = Math.sin(t * 4.43 - i * 0.18 + 0.4);
        const combined = w1 * 0.55 + w2 * 0.30 + w3 * 0.15; // weighted sum ≈ [-1, 1]
        const norm = (combined + 1) / 2; // [0, 1]
        const scale = b.min + (b.max - b.min) * norm;
        rect.style.transform = `scaleY(${scale.toFixed(4)})`;
      });
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
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
