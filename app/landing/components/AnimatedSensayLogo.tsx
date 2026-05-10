"use client";
import { useEffect, useRef } from "react";

// 7 vertical bars matching sensay-logo-white.svg.
// Each bar's height = weighted sum of 3 sine waves with incommensurable frequencies.
// All bars are computed from the same `t` and share the formulas — neighbor bars get
// similar phase-shifted values → visually they stay one fluid wave (still linked).
// But because the 3 sine frequencies don't share a rational ratio, the overall pattern
// across the whole logo doesn't repeat for a very long time — feels organic.
// Per-bar amplitude (min↔max) varies: center has biggest swing, edges smallest.
// Animation drives `height` and `y` SVG attributes directly (not CSS scaleY) — this
// keeps `rx=2.5` an absolute SVG value, so pill ends stay perfectly circular at every
// height instead of flattening into ovals when the bar is short.

const BARS = [
  { x: 0,  min: 0.325, max: 0.425 },  // edge
  { x: 6,  min: 0.35,  max: 0.75  },  // swapped with prev idx 2
  { x: 12, min: 0.40,  max: 0.85  },  // swapped with prev idx 1
  { x: 18, min: 0.325, max: 1.00  },  // center, biggest amplitude (min raised to match edges — was 0.20)
  { x: 24, min: 0.40,  max: 0.85  },  // swapped with prev idx 5
  { x: 30, min: 0.35,  max: 0.75  },  // swapped with prev idx 4
  { x: 36, min: 0.325, max: 0.425 },  // edge
];

const VIEWBOX_H = 40;

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
        // Frequencies clustered closer (2.85 / 2.47 / 3.71 rad/s) and slow component
        // weight reduced — removes the low-end "drag" that produced perceived slowdowns.
        const w1 = Math.sin(t * 2.85 - i * 0.25);
        const w2 = Math.sin(t * 2.47 + i * 0.14 + 1.7);
        const w3 = Math.sin(t * 3.71 - i * 0.08 + 0.4);
        const combined = w1 * 0.55 + w2 * 0.20 + w3 * 0.25;
        const norm = (combined + 1) / 2; // [0, 1]
        const scale = b.min + (b.max - b.min) * norm;
        const h = scale * VIEWBOX_H;
        const y = (VIEWBOX_H - h) / 2;
        rect.setAttribute("height", h.toFixed(3));
        rect.setAttribute("y", y.toFixed(3));
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
      {BARS.map((b, i) => {
        // SSR initial state — midpoint of the bar's range
        const scale = (b.min + b.max) / 2;
        const h = scale * VIEWBOX_H;
        const y = (VIEWBOX_H - h) / 2;
        return (
          <rect
            key={i}
            x={b.x}
            y={y}
            width={5}
            height={h}
            rx={2.5}
            fill={fill}
          />
        );
      })}
    </svg>
  );
}
