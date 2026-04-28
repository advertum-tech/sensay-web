'use client';

import { useEffect, useRef, useState } from 'react';

const IDLE_TIMEOUT = 60_000;

export default function HeroPersonMobile({ src = '/vidos_dude2.mp4' }: { src?: string }) {
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
    <div className="relative mx-auto w-[359px] max-[359px]:w-[274px] min-[500px]:w-[375px]" style={{ marginTop: "-56px" }}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        playsInline
        className="w-[343px] max-[359px]:w-[274px] ml-[16px] max-[359px]:ml-[13px]"
        style={{ cursor: 'pointer' }}
        onClick={handleVideoClick}
        onPlay={handlePlay}
        onEnded={handleEnded}
      />
      <img
        src="/hero-dashed-mobile.svg"
        alt=""
        className="absolute z-20 w-[204px] max-[359px]:w-[163px] top-[5px] max-[359px]:top-[4px] left-[105px] max-[359px]:left-[76px]"
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
