'use client';

import { useEffect, useRef } from 'react';

const IDLE_TIMEOUT = 60_000;

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroPerson({ className, style }: Props) {
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
    <video
      ref={ref}
      src="/vidos_dude2.mp4"
      autoPlay
      muted
      playsInline
      className={className}
      style={style}
      onClick={handleClick}
      onPlay={handlePlay}
      onEnded={handleEnded}
    />
  );
}
