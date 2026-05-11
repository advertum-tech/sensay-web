"use client";
import { useEffect, useRef } from "react";

const BARS = [
  { x: 20, cy: 29.5, hRest: 15, hMin: 5,  hMax: 24 },
  { x: 26, cy: 30,   hRest: 30, hMin: 10, hMax: 40 },
  { x: 32, cy: 30,   hRest: 22, hMin: 7,  hMax: 32 },
  { x: 38, cy: 29.5, hRest: 15, hMin: 5,  hMax: 24 },
];

const N = BARS.length;
const FREQ = 4.0;    // rad/s — one wave per ~1.6s
const FADE_MS = 220;

export default function PricingMicFreeAnim({ className }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef(0);

  const startAnim = () => {
    cancelAnimationFrame(rafRef.current);
    const svg = svgRef.current;
    if (!svg) return;
    const rects = Array.from(svg.querySelectorAll<SVGRectElement>(".mic-bar"));
    const from = rects.map(r => parseFloat(r.getAttribute("height") ?? "0"));
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const blend = Math.min(1, elapsed / FADE_MS);
      const t = elapsed / 1000;
      rects.forEach((rect, i) => {
        const b = BARS[i];
        const phase = (i / (N - 1)) * Math.PI;
        const norm = (Math.sin(t * FREQ + phase) + 1) / 2;
        const hTarget = b.hMin + (b.hMax - b.hMin) * norm;
        const h = from[i] + (hTarget - from[i]) * blend;
        rect.setAttribute("height", h.toFixed(2));
        rect.setAttribute("y",      (b.cy - h / 2).toFixed(2));
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopAnim = () => {
    cancelAnimationFrame(rafRef.current);
    const svg = svgRef.current;
    if (!svg) return;
    const rects = Array.from(svg.querySelectorAll<SVGRectElement>(".mic-bar"));
    const from = rects.map(r => parseFloat(r.getAttribute("height") ?? "0"));
    const start = performance.now();
    const fade = (now: number) => {
      const blend = Math.min(1, (now - start) / FADE_MS);
      rects.forEach((rect, i) => {
        const b = BARS[i];
        const h = from[i] + (b.hRest - from[i]) * blend;
        rect.setAttribute("height", h.toFixed(2));
        rect.setAttribute("y",      (b.cy - h / 2).toFixed(2));
      });
      if (blend < 1) rafRef.current = requestAnimationFrame(fade);
    };
    rafRef.current = requestAnimationFrame(fade);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <svg
      ref={svgRef}
      width={63}
      height={80}
      viewBox="0 0 63 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={startAnim}
      onMouseLeave={stopAnim}
      aria-hidden="true"
      style={{ cursor: 'pointer' }}
    >
      <path d="M59.585 34.0488C61.1517 34.049 62.4216 35.3191 62.4219 36.8857V39.7236C62.4218 56.004 49.9558 69.3617 34.0488 70.7959V76.6094C34.0487 78.1763 32.7779 79.4463 31.2109 79.4463C29.6441 79.4462 28.3741 78.1762 28.374 76.6094L28.374 70.7959C12.4669 69.3619 7.15134e-05 56.0041 0 39.7236L0 36.8857C0.000306517 35.319 1.27105 34.0488 2.83789 34.0488C4.40458 34.049 5.6745 35.3191 5.6748 36.8857L5.6748 39.7236C5.67488 53.8268 17.1078 65.2597 31.2109 65.2598C45.3142 65.2598 56.747 53.8268 56.7471 39.7236V36.8857C56.7474 35.319 58.0181 34.0488 59.585 34.0488ZM31.2109 0C42.1801 7.31201e-07 51.0722 8.89318 51.0723 19.8623V39.7236C51.0722 50.6928 42.1801 59.585 31.2109 59.585C20.2419 59.5848 11.3497 50.6927 11.3496 39.7236L11.3496 19.8623C11.3497 8.89325 20.2419 0.00010914 31.2109 0Z" fill="#2F2F2F" />
      {BARS.map((b, i) => (
        <rect
          key={i}
          className="mic-bar"
          x={b.x}
          y={b.cy - b.hRest / 2}
          width={5}
          height={b.hRest}
          rx={2.5}
          fill="#FCFBFA"
        />
      ))}
    </svg>
  );
}
