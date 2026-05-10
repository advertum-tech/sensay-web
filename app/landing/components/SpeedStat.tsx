import SensayDot from "./SensayDot";
import AnimatedSensayLogo from "./AnimatedSensayLogo";

const TYPING_STEPS = [
  "Hunt for the right words",
  "Fix the typo",
  "Re-read",
  "Edit again",
  "Send 3 minutes later (something shorter than what you actually meant)",
];

const SPEAKING_STEPS = [
  "Say exactly what you mean",
  "Sensay cleans it up",
  "Done in the time it took to unlock your phone",
];

function StepFlow({ steps, arrowColor }: { steps: string[]; arrowColor: string }) {
  return (
    <span className="flex flex-col">
      {steps.map((step, i) => (
        <span key={i}>
          {i > 0 && (
            <span className="mr-2 font-bold" style={{ color: arrowColor }}>→</span>
          )}
          {step}
        </span>
      ))}
    </span>
  );
}

export default function SpeedStat() {
  return (
    <section className="pt-10 pb-20 md:pt-12 md:pb-28 xl:pt-[98px] relative">

      {/* TABLET supplement — pixel-perfect 834px wrapper trick (same as HowItWorks) */}
      <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
        <p
          className="absolute font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-black font-medium origin-top-left md:right-[107px] md:top-[145px] lg:right-[47px] lg:top-[155px]"
          style={{ width: 205, transform: 'rotate(5deg)' }}
        >
          <span className="font-bold">Your thoughts don&apos;t slow down for your fingers.</span> Neither should your messages.
        </p>
      </div>

      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16 xl:relative">
          <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] md:text-[50px] xl:text-[100px] leading-[50px] md:leading-[50px] xl:leading-[80px] md:max-lg:ml-[calc(50%-336px)] md:max-lg:max-w-[282px] lg:max-xl:ml-[calc(50%-423px)] lg:max-xl:max-w-[282px] xl:max-w-[778px]">
            <span className="font-normal">You type 40 words a minute.</span><br />
            <span className="font-bold">You speak 130.</span>
          </h2>
          {/* Mobile/tablet supplement */}
          <p className="mt-4 font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-black font-medium max-w-[600px] md:hidden">
            <span className="font-bold">Your thoughts don&apos;t slow down for your fingers.</span> Neither should your messages.
          </p>
          {/* Desktop supplement — positioned per figma node 131:2802 */}
          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left"
            style={{ top: 149, right: 215, width: 280, transform: 'rotate(-6deg)' }}
          >
            <span className="font-bold">Your thoughts<br />don&apos;t slow down<br />for your fingers.</span><br />Neither should your messages.
          </p>
        </div>

        {/* Comparison: 2 boxes side-by-side, no dark wrapper, constrained 1180px sub-grid centered */}
        <div className="relative z-20 flex flex-col md:flex-row gap-5 md:max-w-[1180px] md:mx-auto">

          {/* Typing box (tail at bottom-LEFT, beige) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <SensayDot cutoutColor="#bfb9ac" pulse={false} solid />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-none uppercase text-white">Typing</p>
            </div>
            <p className="font-['Inter',sans-serif] text-[16px] text-black leading-[28px]">
              <StepFlow steps={TYPING_STEPS} arrowColor="#FF4122" />
            </p>
          </div>

          {/* Speaking with Sensay box (mirrored: tail at bottom-RIGHT, orange + white logo top-right) */}
          <div className="relative flex-1 bg-[#FF4122] rounded-[20px] p-6 md:p-8">
            <img src="/landing-assets/card-tail-orange.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
            <AnimatedSensayLogo width={41} height={40} className="absolute top-5 right-5 md:top-6 md:right-6 pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <SensayDot cutoutColor="#FF4122" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-none uppercase text-white">Speaking with Sensay</p>
            </div>
            <p className="font-['Inter',sans-serif] text-[16px] text-white leading-[28px]">
              <StepFlow steps={SPEAKING_STEPS} arrowColor="#ffffff" />
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
