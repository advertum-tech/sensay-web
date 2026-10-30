"use client";

import { useEffect, useState, type ReactNode, type Ref } from "react";

// True while the element is in view, false again once it has left the view
// completely, so an animation tied to it plays on every visit. "In view" means
// at least `enterRatio` of the element is visible above the bottom 10% of the
// window. The element is kept in state, so it can appear after the first render.
export function useReplayInView<T extends Element>(enterRatio = 1) {
  const [el, setEl] = useState<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= enterRatio - 0.01) setInView(true);
          else if (!entry.isIntersecting) setInView(false);
        }
      },
      { threshold: [0, enterRatio], rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [el, enterRatio]);
  return { ref: setEl, inView };
}

const SIZES = {
  header: "rounded-[6px] border-2 px-1.5 py-[3px] text-[10px] tracking-[.08em]",
  // Narrow tablets (768-1023) have narrow price cards, so the stamp is smaller there.
  card: "rounded-[10px] border-[3px] px-3 py-1.5 text-[17px] tracking-[.06em] md:max-lg:rounded-[8px] md:max-lg:border-2 md:max-lg:px-2 md:max-lg:py-1 md:max-lg:text-[12px]",
  // On a coloured button: white fill so it stays readable.
  sticker: "rounded-[8px] border-2 bg-white px-2 py-1 text-[11px] tracking-[.08em] md:px-2.5 md:py-1.5 md:text-[13px]",
};

export type StampSize = keyof typeof SIZES;

type StampProps = {
  size: StampSize;
  show: boolean;
  delayMs?: number;
  // Position and rotation (rotate-*), set where the stamp is used.
  className?: string;
  children: ReactNode;
  ref?: Ref<HTMLSpanElement>;
};

// A rubber stamp in the brand colour. It lands with a short "slam": from large
// and transparent down past its size and back. Hidden again without animation,
// so the next landing starts from the beginning.
export function Stamp({ size, show, delayMs = 0, className = "", children, ref }: StampProps) {
  return (
    <span
      ref={ref}
      className={`inline-block whitespace-nowrap text-center border-[#FF4122] font-['Inter',sans-serif] font-black uppercase leading-[1] text-[#FF4122] ${SIZES[size]} ${
        show
          ? "opacity-100 scale-100 transition-[opacity,scale] duration-[450ms] ease-[cubic-bezier(.2,1.6,.4,1)]"
          : "opacity-0 scale-[1.9] transition-none"
      } motion-reduce:transition-none ${className}`}
      style={{ transitionDelay: show ? `${delayMs}ms` : "0ms" }}
    >
      {children}
    </span>
  );
}

// A stamp that lands whenever it comes into view.
export default function BetaStamp(props: Omit<StampProps, "show" | "ref">) {
  const { ref, inView } = useReplayInView<HTMLSpanElement>(0.5);
  return <Stamp {...props} ref={ref} show={inView} />;
}
