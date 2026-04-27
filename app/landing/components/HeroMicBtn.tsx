'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroMicBtn({ className, style }: Props) {
  const [muted, setMuted] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    const container = (e.currentTarget as HTMLElement).closest('[data-hero-video-container]');
    const video = container?.querySelector('video') as HTMLVideoElement | null;
    if (!video) return;
    const nowMuted = !video.muted;
    video.muted = nowMuted;
    setMuted(nowMuted);
    if (!nowMuted && (video.paused || video.ended)) {
      video.currentTime = 0;
      video.play();
    }
  }

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    const container = el.closest('[data-hero-video-container]');
    if (!container) return;
    function onMuted() { setMuted(true); }
    container.addEventListener('hero-video-muted', onMuted);
    return () => container.removeEventListener('hero-video-muted', onMuted);
  }, []);

  return (
    <img
      ref={imgRef}
      src={muted ? '/hero-mic-btn.svg' : '/hero-mic-btn-on.svg'}
      alt={muted ? 'Unmute' : 'Mute'}
      className={className}
      style={{ ...style, cursor: 'pointer', transform: 'translateZ(0)' }}
      onClick={handleClick}
    />
  );
}
