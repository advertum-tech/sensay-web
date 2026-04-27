'use client';

import { useState } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroMicBtn({ className, style }: Props) {
  const [muted, setMuted] = useState(true);

  function handleClick(e: React.MouseEvent<HTMLImageElement>) {
    const container = (e.currentTarget as HTMLElement).closest('[data-hero-video-container]');
    const video = container?.querySelector('video') as HTMLVideoElement | null;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <img
      src={muted ? '/hero-mic-btn.svg' : '/hero-mic-btn-on.svg'}
      alt={muted ? 'Unmute' : 'Mute'}
      className={className}
      style={{ ...style, cursor: 'pointer', transform: 'translateZ(0)' }}
      onClick={handleClick}
    />
  );
}
