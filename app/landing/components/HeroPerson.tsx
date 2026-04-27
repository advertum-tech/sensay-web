'use client';

import { useRef } from 'react';

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export default function HeroPerson({ className, style }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  function handleClick() {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0;
    v.play();
  }

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
    />
  );
}
