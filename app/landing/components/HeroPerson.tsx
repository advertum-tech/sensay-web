'use client';

import { useEffect, useRef } from 'react';

const IDLE_TIMEOUT = 60_000;

// --- Video framing (tune these 3 numbers) ---
// Video is 1920x1080 (16:9) with alpha, person centered in the frame.
// Box is square (like the old image), excess is clipped by overflow:hidden.
const MAN_SCALE = 1.8; // scale: larger number = bigger person
const MAN_X = '30px'; // horizontal offset (+ right, - left)
const MAN_Y = '2px'; // vertical offset (+ down, - up)
// Color: tones down the orange. Affects only the person's pixels, not the alpha background.
// saturate(<1) — less saturation, hue-rotate — tone shift. 'none' = disable.
const MAN_FILTER = 'saturate(0.85) hue-rotate(-3deg)';

interface Props {
  src?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroPerson({ src = '/video/last.webm', className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const lastPlayedAt = useRef(Date.now());

  function handleClick() {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  }

  function handlePlay() {
    lastPlayedAt.current = Date.now();
  }

  function handleEnded() {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const container = v.closest('[data-hero-video-container]');
    container?.dispatchEvent(new CustomEvent('hero-video-muted', { bubbles: false }));
  }

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const id = setInterval(() => {
      if (Date.now() - lastPlayedAt.current < IDLE_TIMEOUT) return;
      v.muted = true;
      v.currentTime = 0;
      v.play();
      const container = v.closest('[data-hero-video-container]');
      container?.dispatchEvent(new CustomEvent('hero-video-muted', { bubbles: false }));
    }, 2_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={className} style={style}>
      <div className="relative w-full aspect-square overflow-hidden">
        <video
          ref={ref}
          autoPlay
          muted
          playsInline
          className="absolute left-1/2 top-1/2 max-w-none"
          style={{
            width: `calc(100% * ${MAN_SCALE})`,
            transform: `translate(calc(-50% + ${MAN_X}), calc(-50% + ${MAN_Y}))`,
            filter: MAN_FILTER,
            cursor: 'pointer',
          }}
          onClick={handleClick}
          onPlay={handlePlay}
          onEnded={handleEnded}
        >
          {/* Safari/iOS: HEVC with alpha channel (they don't render WebM alpha) */}
          {src.endsWith('.webm') && (
            <source src={src.replace(/\.webm$/, '.mov')} type='video/quicktime' />
          )}
          {/* Chrome/Firefox/Android */}
          <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
        </video>
      </div>
    </div>
  );
}
