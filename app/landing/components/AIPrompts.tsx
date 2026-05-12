import SensayDot from "./SensayDot";
import AnimatedSensayLogoHover from "./AnimatedSensayLogoHover";

const TYPED_CHIPS = ["summerize", "this", "article"];

const SPOKEN_CHIPS = [
  "Can", "you", "summerize", "this", "article",
  "in", "3", "bullet points,", "focusing", "on the",
  "practical", "implications", "for a", "non-technical",
  "audience", "?",
];

const SPOKEN_CHIPS_KEEP = ["Keep", "it", "under", "100", "words"];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] text-[16px] leading-[28px] font-normal font-['Inter',sans-serif] whitespace-nowrap bg-white text-black">
      {children}
    </span>
  );
}

export default function AIPrompts() {
  return (
    <section className="pt-6 pb-12 md:pt-24 md:pb-16 relative">

      {/* Mobile swirl 1 — right edge */}
      <img
        src="/landing-assets/swirl-aiprompts-mobile.svg"
        alt=""
        width={33}
        height={229}
        className="md:hidden absolute pointer-events-none max-[499px]:-top-[47px] min-[500px]:top-[-143px] max-[499px]:left-[265px] min-[500px]:left-[295px]"
        aria-hidden="true"
      />

      {/* Mobile swirl 2 — centre, with loop */}
      <img
        src="/landing-assets/swirl-aiprompts-mobile-2.svg"
        alt=""
        width={135}
        height={269}
        className="md:hidden absolute pointer-events-none max-[499px]:top-[410px] min-[500px]:top-[250px] max-[499px]:left-[204px] min-[500px]:left-[234px]"
        aria-hidden="true"
      />

      {/* TABLET — pixel-perfect 834px wrapper, figma 261:60 (badges + swirl + supplement) */}
      <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
        {/* For AI power badge — figma 261:526 */}
        <div className="absolute origin-top-left" style={{ left: 80, top: 31, transform: 'rotate(-5deg)' }}>
          <img src="/landing-assets/for-ai-power-bg-desktop.svg" alt="" width={135} height={41} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -6, top: -2 }} />
          <p className="relative font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#79736d] whitespace-nowrap">For AI power</p>
        </div>
        {/* users badge — figma 261:529 */}
        <div className="absolute origin-top-left" style={{ left: 173, top: 44, transform: 'rotate(-5deg)' }}>
          <img src="/landing-assets/users-bg-desktop.svg" alt="" width={68} height={41} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -3, top: -2 }} />
          <p className="relative font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#79736d] whitespace-nowrap">users</p>
        </div>
        {/* Section-local dotted swirl — figma 261:738 */}
        <img
          src="/landing-assets/aiprompts-swirl.svg"
          alt=""
          width={293}
          height={287}
          className="absolute pointer-events-none"
          style={{ left: 452, top: 51 }}
        />
        {/* Supplement in swirl loop — figma 261:523 */}
        <p
          className="absolute origin-top-left font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-black font-medium"
          style={{ left: 502, top: 110, width: 207, transform: 'rotate(-5deg)' }}
        >
          <span>When you type a prompt, you cut corners. When you speak, you explain. </span><span className="font-bold">Better input, better output — every time.</span>
        </p>
      </div>

      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading + paint-splash badges (xl only) */}
        <div className="mb-6 md:mb-16">

          {/* Mobile "For AI power users" badge */}
          <div className="md:hidden relative w-[170px] h-[55px] mb-4">
            <div className="absolute origin-top-left" style={{ left: 0, top: 0, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/for-ai-power-bg-desktop.svg" alt="" width={135} height={41} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -6, top: -2 }} />
              <p className="relative font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#79736d] whitespace-nowrap">For AI power</p>
            </div>
            <div className="absolute origin-top-left" style={{ left: 90, top: 13, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/users-bg-desktop.svg" alt="" width={68} height={41} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -3, top: -2 }} />
              <p className="relative font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#79736d] whitespace-nowrap">users</p>
            </div>
          </div>

          {/* "For AI power" / "users" paint-splash badges — figma 137:2896, 137:2899 (rotated +5°, paint mirrored) */}
          <div className="hidden xl:block xl:relative xl:w-[260px] xl:h-[80px] xl:mb-2">
            {/* For AI power */}
            <div className="absolute origin-top-left" style={{ left: 0, top: 0, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/for-ai-power-bg-desktop.svg" alt="" width={162} height={50} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -7, top: -2 }} />
              <p className="relative font-['Inter',sans-serif] font-bold text-[16px] xl:text-[20px] uppercase text-[#79736d] whitespace-nowrap">For AI power</p>
            </div>
            {/* users — slightly right and below */}
            <div className="absolute origin-top-left" style={{ left: 115, top: 13, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/users-bg-desktop.svg" alt="" width={85} height={50} className="absolute pointer-events-none max-w-none -scale-x-100" style={{ left: -4, top: -2 }} />
              <p className="relative font-['Inter',sans-serif] font-bold text-[16px] xl:text-[20px] uppercase text-[#79736d] whitespace-nowrap">users</p>
            </div>
          </div>
          <div className="xl:relative">
            {/* xl: section-local dotted swirl — figma 137:2960 */}
            <img
              src="/landing-assets/aiprompts-swirl.svg"
              alt=""
              width={343}
              height={335}
              className="hidden xl:block xl:absolute pointer-events-none xl:right-[150px] min-[1500px]:!right-[215px]"
              style={{ top: 0 }}
            />

            <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] max-[499px]:max-w-[282px] md:max-lg:ml-[calc(50%-336px)] lg:max-xl:ml-[calc(50%-423px)] md:max-w-[352px] xl:max-w-[776px]">
              <span className="font-normal">Your AI gets smarter </span>
              <span className="hidden min-[500px]:inline md:hidden"> </span>
              <span className="font-bold">when you{" "}<br className="max-[499px]:block hidden" />stop typing to it.</span>
            </h2>

            {/* Mobile-only supplement (tablet supplement lives in 834-wrapper above) */}
            <p className="mt-4 font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-black max-w-[193px] md:hidden">
              <span className="font-medium">When you type a prompt, you cut corners. When you speak, you explain. </span><span className="font-bold">Better input, better output — every time.</span>
            </p>

            {/* Desktop supplement — positioned per figma node 137:2893 */}
            <p
              className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase
               xl:text-black xl:font-medium xl:origin-top-left xl:right-[210px] xl:top-[96px] min-[1500px]:!right-[271px] min-[1500px]:!top-[96px]"
              style={{ width: 207, transform: 'rotate(-5deg)' }}
            >
              When you type a prompt, you cut corners. When you speak, you explain. <span className="font-bold">Better input, better output — every time.</span>
            </p>
          </div>
        </div>

        {/* Constrained block (figma 1180px) — centered horizontally */}
        <div className="md:max-w-[1180px] md:mx-auto">

        {/* Comparison boxes — different heights (Typed short, Speaking tall) per figma */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-start gap-5 mb-5">

          {/* Typed prompt box (BL square, tail at BL, beige) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8 md:min-h-[160px] max-[499px]:mr-[50px] min-[500px]:mr-[100px] md:mr-0">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <SensayDot cutoutColor="#bfb9ac" pulse={false} solid />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-white">Typed prompt</p>
            </div>
            <div className="flex flex-wrap gap-x-0 gap-y-[2px]">
              {TYPED_CHIPS.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
          </div>

          {/* Speaking with Sensay box (BR square, tail at BR, orange + white logo top-right) */}
          <div className="relative flex-1 bg-[#FF4122] rounded-[20px] p-6 md:p-8 md:min-h-[300px] max-[499px]:ml-[50px] min-[500px]:ml-[100px] md:ml-0">
            <img src="/landing-assets/card-tail-orange.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
            <AnimatedSensayLogoHover width={41} height={40} className="absolute top-5 right-5 md:top-6 md:right-6 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5 max-[499px]:pr-[44px]">
              <SensayDot cutoutColor="#FF4122" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-white">Spoken → cleaned by Sensay</p>
            </div>
            <div className="flex flex-wrap gap-y-[2px]">
              {SPOKEN_CHIPS.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
            <div className="flex flex-wrap gap-y-[2px] mt-4">
              {SPOKEN_CHIPS_KEEP.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
          </div>

        </div>

        {/* Mobile "same thought" — organic dashed circle with bell + text */}
        <div className="md:hidden relative mx-auto" style={{ width: 293, height: 287 }}>
          <img src="/landing-assets/samethought-circle.svg" alt="" width={293} height={287} className="absolute inset-0 pointer-events-none" aria-hidden="true" />
          <img src="/landing-assets/samethought-bell.svg" alt="" width={55} height={55} className="absolute" style={{ left: 119, top: 19 }} />
          <p className="absolute font-['Inter',sans-serif] text-[15px] leading-[25px] uppercase text-[#2f2f2f] font-medium" style={{ left: 49, top: 83, width: 195 }}>
            Same thought. One took 3 seconds to type. The other took 4 seconds to say — <span className="font-bold">and got a much better answer.</span>
          </p>
        </div>

        {/* Footer card — dark, all 4 rounded corners, tail at BL — tablet+ only */}
        <div className="hidden md:flex relative z-20 bg-[#2f2f2f] rounded-[20px] px-6 md:px-8 py-5 md:py-6 items-center gap-5">
          <img src="/landing-assets/card-tail-dark.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
          <img src="/landing-assets/icon-bell.svg" alt="" width={40} height={40} className="shrink-0 block" />
          <p className="font-['Inter',sans-serif] text-[15px] leading-[25px] uppercase text-[#E3DAD0] font-medium">
            Same thought. One took 3 seconds to type.<br />The other took 4 seconds to say — <span className="font-bold">and got a much better answer.</span>
          </p>
        </div>

        </div>

      </div>
    </section>
  );
}
