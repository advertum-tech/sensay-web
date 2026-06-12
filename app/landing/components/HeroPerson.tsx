'use client';

import { useEffect, useRef } from 'react';

const IDLE_TIMEOUT = 60_000;

// --- Кадрирование видео (подгоняй эти 3 числа) ---
// Видео 1920x1080 (16:9) с альфой, человек в центре кадра.
// Бокс квадратный (как была картинка), лишнее обрезается overflow:hidden.
const MAN_SCALE = 1.8; // масштаб: больше число = крупнее человек
const MAN_X = '30px'; // сдвиг по горизонтали (+ вправо, - влево)
const MAN_Y = '2px'; // сдвиг по вертикали (+ вниз, - вверх)
// Цвет: гасит оранжевый. Действует только на пиксели человека, фон (альфа) не трогает.
// saturate(<1) — меньше насыщенность, hue-rotate — сдвиг тона. 'none' = выключить.
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
          onClick={handleClick}
          onPlay={handlePlay}
          onEnded={handleEnded}
        />
      </div>
    </div>
  );
}
