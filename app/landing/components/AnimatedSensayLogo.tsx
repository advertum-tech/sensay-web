"use client";
import { useEffect, useRef } from "react";

// All 7 bars have the same SVG geometry (y=0, h=40) so scaleY=1 means full SVG height
// for every bar. The visual waveform silhouette is produced entirely by the per-bar
// scaleY animation range (min ↔ max). Center bar oscillates 0.20↔1.00 (huge amplitude),
// edges 0.325↔0.425 (tiny). Web Animations API is used directly — no CSS-keyframes
// indirection that could fail to apply.

const BARS = [
  { x: 0,  dur: 0.82, delay: 0.10, min: 0.325, max: 0.425 },
  { x: 6,  dur: 1.14, delay: 0.45, min: 0.625, max: 0.875 },
  { x: 12, dur: 0.91, delay: 0.00, min: 0.35,  max: 0.75  },
  { x: 18, dur: 0.73, delay: 0.30, min: 0.20,  max: 1.00  },
  { x: 24, dur: 1.05, delay: 0.60, min: 0.35,  max: 0.75  },
  { x: 30, dur: 1.21, delay: 0.18, min: 0.625, max: 0.875 },
  { x: 36, dur: 0.88, delay: 0.52, min: 0.325, max: 0.425 },
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
          duration: b.dur * 1000,
          delay: -b.delay * 1000,
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
