"use client";
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import type { MicAnimHandle } from "./PricingMicFreeAnim";

const BARS = [
  { x: 13, cy: 53.5, hRest: 15, hMin: 5,  hMax: 22 },
  { x: 19, cy: 53,   hRest: 30, hMin: 10, hMax: 44 },
  { x: 25, cy: 53,   hRest: 22, hMin: 7,  hMax: 32 },
  { x: 31, cy: 53,   hRest: 40, hMin: 14, hMax: 52 },
  { x: 37, cy: 53,   hRest: 22, hMin: 7,  hMax: 32 },
  { x: 43, cy: 53,   hRest: 30, hMin: 10, hMax: 44 },
  { x: 49, cy: 53.5, hRest: 15, hMin: 5,  hMax: 22 },
];

const N = BARS.length;
const FREQ = 4.0;
const FADE_MS = 220;

const PricingMicMaxAnim = forwardRef<MicAnimHandle, { className?: string }>(
  ({ className }, ref) => {
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

    useImperativeHandle(ref, () => ({ start: startAnim, stop: stopAnim }));
    useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

    return (
      <svg
        ref={svgRef}
        width={67}
        height={103}
        viewBox="0 0 67 103"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onMouseEnter={startAnim}
        onMouseLeave={stopAnim}
        style={{ cursor: 'pointer' }}
        aria-hidden="true"
      >
        <path d="M42.2111 18H23.9196C23.2663 18 22.7437 17.6184 22.6131 16.9823L20 4.26148C20 3.75265 20.1307 3.24382 20.6533 2.86219C21.1759 2.60777 21.6985 2.60777 22.0905 2.86219L27.4472 7.06007L31.8894 0.572438C32.4121 -0.190813 33.5879 -0.190813 34.1106 0.572438L38.5528 7.06007L43.9095 2.86219C44.3015 2.48057 44.9548 2.48057 45.3467 2.86219C45.8693 3.11661 46 3.62544 46 4.26148L43.3869 16.9823C43.3869 17.6184 42.7337 18 42.0804 18H42.2111Z" fill="#2F2F2F" />
        <path d="M61.585 57.0488C63.1517 57.049 64.4216 58.3191 64.4219 59.8857V62.7236C64.4218 79.004 51.9558 92.3617 36.0488 93.7959V99.6094C36.0487 101.176 34.7779 102.446 33.2109 102.446C31.6441 102.446 30.3741 101.176 30.374 99.6094L30.374 93.7959C14.4669 92.3619 2.00007 79.0041 2 62.7236L2 59.8857C2.00031 58.319 3.27105 57.0488 4.83789 57.0488C6.40458 57.049 7.6745 58.3191 7.6748 59.8857L7.6748 62.7236C7.67488 76.8268 19.1078 88.2597 33.2109 88.2598C47.3142 88.2598 58.747 76.8268 58.7471 62.7236V59.8857C58.7474 58.319 60.0181 57.0488 61.585 57.0488ZM33.2109 23C44.1801 23 53.0722 31.8932 53.0723 42.8623V62.7236C53.0722 73.6928 44.1801 82.585 33.2109 82.585C22.2419 82.5848 13.3497 73.6927 13.3496 62.7236L13.3496 42.8623C13.3497 31.8932 22.2419 23.0001 33.2109 23Z" fill="#2F2F2F" />
        {BARS.map((b, i) => (
          <rect
            key={i}
            className="mic-bar"
            x={b.x}
            y={b.cy - b.hRest / 2}
            width={5}
            height={b.hRest}
            rx={2.5}
            fill="#BFB9AC"
          />
        ))}
        <g clipPath="url(#clip-max-anim)">
          <circle cx="2.5"   cy="39.77" r="2.5" fill="#2F2F2F" />
          <circle cx="6"     cy="29.55" r="2.5" fill="#2F2F2F" />
          <circle cx="12.79" cy="21.15" r="2.5" fill="#2F2F2F" />
          <circle cx="52.76" cy="20.4"  r="2.5" fill="#2F2F2F" />
          <circle cx="59.86" cy="28.54" r="2.5" fill="#2F2F2F" />
          <circle cx="63.75" cy="38.62" r="2.5" fill="#2F2F2F" />
        </g>
        <defs>
          <clipPath id="clip-max-anim">
            <rect width="66.25" height="31.27" fill="white" transform="translate(0 11)" />
          </clipPath>
        </defs>
      </svg>
    );
  }
);

PricingMicMaxAnim.displayName = "PricingMicMaxAnim";
export default PricingMicMaxAnim;
