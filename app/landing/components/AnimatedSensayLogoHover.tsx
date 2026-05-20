"use client";
import { useEffect, useRef } from "react";

const BARS = [
  { x: 0,  cy: 20, hRest: 14, hMin: 5,  hMax: 22 },
  { x: 6,  cy: 20, hRest: 22, hMin: 5,  hMax: 36 },
  { x: 12, cy: 20, hRest: 24, hMin: 5,  hMax: 40 },
  { x: 18, cy: 20, hRest: 24, hMin: 5,  hMax: 40 },
  { x: 24, cy: 20, hRest: 24, hMin: 5,  hMax: 40 },
  { x: 30, cy: 20, hRest: 22, hMin: 5,  hMax: 36 },
  { x: 36, cy: 20, hRest: 14, hMin: 5,  hMax: 22 },
];

const N = BARS.length;
const FREQ = 1.5;

type Props = {
  width?: number;
  height?: number;
  className?: string;
  fill?: string;
};

export default function AnimatedSensayLogoHover({ width = 41, height = 40, className, fill = "white" }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const rects = Array.from(svg.querySelectorAll<SVGRectElement>("rect"));
    let rafId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = (now - start) / 1000;
      rects.forEach((rect, i) => {
        const b = BARS[i];
        const phase = (i / (N - 1)) * Math.PI;
        const norm = (Math.sin(t * FREQ + phase) + 1) / 2;
        const h = b.hMin + (b.hMax - b.hMin) * norm;
        rect.setAttribute("height", h.toFixed(2));
        rect.setAttribute("y", (b.cy - h / 2).toFixed(2));
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
          y={b.cy - b.hRest / 2}
          width={5}
          height={b.hRest}
          rx={2.5}
          fill={fill}
        />
      ))}
    </svg>
  );
}
