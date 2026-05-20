"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";

type Props = {
  className?: string;
  style?: CSSProperties;
};

// "See how" link under the Start-free CTA. Idle: underlined. Hover: underline gone.
// Click: smooth-scrolls to #how-it-works, then locks the arrow into a 90° clockwise
// rotation so it points down at the section that's now directly below.
export default function HeroSeeHow({ className, style }: Props) {
  const [pointingDown, setPointingDown] = useState(false);

  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    const target = document.getElementById("how-it-works");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setPointingDown(true);
  }

  return (
    <a
      href="#how-it-works"
      onClick={handleClick}
      className={`underline underline-offset-4 hover:no-underline ${className ?? ""}`}
      style={style}
    >
      See how to use{" "}
      <span
        className={`inline-block transition-transform duration-300 ${pointingDown ? "rotate-90" : ""}`}
        aria-hidden="true"
      >
        →
      </span>
    </a>
  );
}
