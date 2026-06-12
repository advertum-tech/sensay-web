'use client';

import { useEffect, useRef, useState } from 'react';

const IDLE_TIMEOUT = 60_000;

// --- Кадрирование видео (подгоняй эти 3 числа) ---
// Видео 1920x1080 (16:9) с альфой, человек в центре кадра.
// Бокс квадратный (как была картинка), лишнее обрезается overflow:hidden.
const MAN_SCALE = 1.8; // масштаб: больше число = крупнее человек
const MAN_X = '0px'; // сдвиг по горизонтали (+ вправо, - влево)
const MAN_Y = '0px'; // сдвиг по вертикали (+ вниз, - вверх)
// Цвет: гасит оранжевый. Действует только на пиксели человека, фон (альфа) не трогает.
// saturate(<1) — меньше насыщенность, hue-rotate — сдвиг тона. 'none' = выключить.
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
          src={src}
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
        />
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
