'use client';

import { useRef, useState } from 'react';

export default function HeroPersonMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function handleVideoClick() {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  }

  function handleMicClick(e: React.MouseEvent) {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }

  return (
    <div className="relative mx-auto w-[359px] max-[359px]:w-[274px] min-[500px]:w-[375px]" style={{ marginTop: "-56px" }}>
      <video
        ref={videoRef}
        src="/vidos_dude2.mp4"
        autoPlay
        muted
        playsInline
        className="w-[343px] max-[359px]:w-[274px] ml-[16px] max-[359px]:ml-[13px]"
        style={{ cursor: 'pointer' }}
        onClick={handleVideoClick}
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
