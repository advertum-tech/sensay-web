"use client";
import { useEffect, useRef } from "react";

const BARS = [
  { x: 13, cy: 46.5, hRest: 15, hMin: 5,  hMax: 22 },
  { x: 19, cy: 46,   hRest: 30, hMin: 10, hMax: 44 },
  { x: 25, cy: 46,   hRest: 22, hMin: 7,  hMax: 32 },
  { x: 31, cy: 46,   hRest: 40, hMin: 14, hMax: 52 },
  { x: 37, cy: 46,   hRest: 22, hMin: 7,  hMax: 32 },
  { x: 43, cy: 46,   hRest: 30, hMin: 10, hMax: 44 },
  { x: 49, cy: 46.5, hRest: 15, hMin: 5,  hMax: 22 },
];

const N = BARS.length;
const FREQ = 4.0;
const FADE_MS = 220;

export default function PricingMicProAnim({ className }: { className?: string }) {
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
      width={67}
      height={96}
      viewBox="0 0 67 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onMouseEnter={startAnim}
      onMouseLeave={stopAnim}
      aria-hidden="true"
      style={{ cursor: 'pointer' }}
    >
      <path d="M61.585 50.0488C63.1517 50.049 64.4216 51.3191 64.4219 52.8857V55.7236C64.4218 72.004 51.9558 85.3617 36.0488 86.7959V92.6094C36.0487 94.1763 34.7779 95.4463 33.2109 95.4463C31.6441 95.4462 30.3741 94.1762 30.374 92.6094L30.374 86.7959C14.4669 85.3619 2.00007 72.0041 2 55.7236L2 52.8857C2.00031 51.319 3.27105 50.0488 4.83789 50.0488C6.40458 50.049 7.6745 51.3191 7.6748 52.8857L7.6748 55.7236C7.67488 69.8268 19.1078 81.2597 33.2109 81.2598C47.3142 81.2598 58.747 69.8268 58.7471 55.7236V52.8857C58.7474 51.319 60.0181 50.0488 61.585 50.0488ZM33.2109 16C44.1801 16 53.0722 24.8932 53.0723 35.8623V55.7236C53.0722 66.6928 44.1801 75.585 33.2109 75.585C22.2419 75.5848 13.3497 66.6927 13.3496 55.7236L13.3496 35.8623C13.3497 24.8932 22.2419 16.0001 33.2109 16Z" fill="#BFB9AC" />
      {BARS.map((b, i) => (
        <rect
          key={i}
          className="mic-bar"
          x={b.x}
          y={b.cy - b.hRest / 2}
          width={5}
          height={b.hRest}
          rx={2.5}
          fill="#2F2F2F"
        />
      ))}
      <g clipPath="url(#clip-pro-anim)">
        <circle cx="2.5"   cy="28.77" r="2.5" fill="#BFB9AC" />
        <circle cx="6"     cy="18.55" r="2.5" fill="#BFB9AC" />
        <circle cx="12.79" cy="10.15" r="2.5" fill="#BFB9AC" />
        <circle cx="22.04" cy="4.58"  r="2.5" fill="#BFB9AC" />
        <circle cx="32.64" cy="2.5"   r="2.5" fill="#BFB9AC" />
        <circle cx="43.31" cy="4.18"  r="2.5" fill="#BFB9AC" />
        <circle cx="52.76" cy="9.4"   r="2.5" fill="#BFB9AC" />
        <circle cx="59.86" cy="17.54" r="2.5" fill="#BFB9AC" />
        <circle cx="63.75" cy="27.62" r="2.5" fill="#BFB9AC" />
      </g>
      <defs>
        <clipPath id="clip-pro-anim">
          <rect width="66.25" height="31.27" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
