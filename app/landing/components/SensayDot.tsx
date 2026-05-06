type Props = {
  /** Background color the dot sits on — used for the inner cutout so it reads as a hollow ring */
  cutoutColor: string;
  /** Outer ring color (default white) */
  ringColor?: string;
  /** Total dot size in pixels */
  size?: number;
  /** Inner cutout size in pixels */
  innerSize?: number;
  /** Show the soft pulse halo behind the dot */
  pulse?: boolean;
  /** Solid filled dot (no inner cutout) */
  solid?: boolean;
};

// Recording indicator used in AIPrompts ("Speaking with Sensay" + "Typed prompt") and SpeedStat.
// Placeholder for future record-animation component — keeps API stable so when we wire animation
// it lights up everywhere the dot is used.
export default function SensayDot({
  cutoutColor,
  ringColor = "#ffffff",
  size = 14,
  innerSize = 6,
  pulse = true,
  solid = false,
}: Props) {
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      {pulse && (
        <span
          className="absolute inset-0 rounded-full animate-dot-pulse"
          style={{ backgroundColor: ringColor }}
        />
      )}
      <div
        className="relative rounded-full flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor: ringColor }}
      >
        {!solid && (
          <span
            className="rounded-full block"
            style={{ width: innerSize, height: innerSize, backgroundColor: cutoutColor }}
          />
        )}
      </div>
    </div>
  );
}
