import type { CSSProperties } from "react";

export default function SensayWordmark({ style }: { style?: CSSProperties }) {
  return (
    <span style={style}>
      <span style={{ fontWeight: 400 }}>Sen</span>
      <span style={{ fontWeight: 600 }}>say</span>
    </span>
  );
}
