'use client';

import { useEffect, useRef, useState } from 'react';

const IDLE_TIMEOUT = 60_000;

// --- Video framing (tune these 3 numbers) ---
// Video is 1920x1080 (16:9) with alpha, person centered in the frame.
// Box is square (like the old image), excess is clipped by overflow:hidden.
const MAN_SCALE = 1.8; // scale: larger number = bigger person
const MAN_X = '35px'; // horizontal offset (+ right, - left)
const MAN_Y = '2px'; // vertical offset (+ down, - up)
// Color: tones down the orange. Affects only the person's pixels, not the alpha background.
// saturate(<1) — less saturation, hue-rotate — tone shift. 'none' = disable.
const MAN_FILTER = 'saturate(0.85) hue-rotate(-3deg)';

export default function HeroPersonMobile({ src = '/video/last.webm' }: { src?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const lastPlayedAt = useRef(Date.now());

  function handleVideoClick() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  }

  function handlePlay() {
    lastPlayedAt.current = Date.now();
  }

  function handleEnded() {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setMuted(true);
  }

  function handleMicClick(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    const nowMuted = !v.muted;
    v.muted = nowMuted;
    setMuted(nowMuted);
    if (!nowMuted && (v.paused || v.ended)) {
      v.currentTime = 0;
      v.play();
    }
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const id = setInterval(() => {
      if (Date.now() - lastPlayedAt.current < IDLE_TIMEOUT) return;
      v.muted = true;
      setMuted(true);
      v.currentTime = 0;
      v.play();
    }, 2_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative mx-auto w-[359px] max-[359px]:w-[274px] min-[500px]:w-[375px]" style={{ marginTop: "-80px" }}>
      <div
        className="relative w-[343px] max-[359px]:w-[274px] aspect-square overflow-hidden ml-[16px] max-[359px]:ml-[13px]"
      >
        <video
          ref={videoRef}
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
          onClick={handleVideoClick}
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
      <img
        src="/hero-dashed-mobile.svg"
        alt=""
        className="absolute z-20 w-[204px] max-[359px]:w-[163px] top-[5px] max-[359px]:top-[4px] left-[100px] max-[359px]:left-[71px]"
      />
      <img
        src={muted ? "/hero-mic-btn.svg" : "/hero-mic-btn-on.svg"}
        alt={muted ? "Unmute" : "Mute"}
        className="absolute z-20 w-[30px] max-[359px]:w-[24px] top-[5px] max-[359px]:top-[4px] left-[4px] max-[359px]:left-[3px]"
        style={{ cursor: 'pointer' }}
        onClick={handleMicClick}
      />
    </div>
  );
}
