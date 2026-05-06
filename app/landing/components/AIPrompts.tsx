import SensayDot from "./SensayDot";

const TYPED_CHIPS = ["summerize", "this", "article"];

const SPOKEN_CHIPS = [
  ["Can", "you", "summerize", "this", "article"],
  ["in", "3", "bullet points,", "focusing", "on the"],
  ["practical", "implications", "for a", "non-technical"],
  ["audience", "?"],
  ["Keep", "it", "under", "100", "words"],
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] text-[16px] leading-[28px] font-normal font-['Inter',sans-serif] whitespace-nowrap bg-white text-black">
      {children}
    </span>
  );
}

export default function AIPrompts() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-12 md:pt-24 md:pb-16">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading + paint-splash badges (xl only) */}
        <div className="mb-12 md:mb-16">
          {/* "For AI power" / "users" paint-splash badges — figma 137:2896, 137:2899 (rotated +5°, paint mirrored) */}
          <div className="hidden xl:block xl:relative xl:w-[260px] xl:h-[80px] xl:mb-2">
            {/* For AI power */}
            <div className="absolute origin-top-left" style={{ left: 0, top: 0, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/for-ai-power-bg-desktop.svg" alt="" width={147} height={45} className="absolute left-0 top-0 pointer-events-none max-w-none -scale-x-100" />
              <p className="relative font-['Inter',sans-serif] font-bold text-[16px] xl:text-[20px] uppercase text-[#79736d] whitespace-nowrap">For AI power</p>
            </div>
            {/* users — slightly right and below */}
            <div className="absolute origin-top-left" style={{ left: 115, top: 13, transform: 'rotate(-5deg)' }}>
              <img src="/landing-assets/users-bg-desktop.svg" alt="" width={77} height={45} className="absolute left-0 top-0 pointer-events-none max-w-none -scale-x-100" />
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

            <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] xl:max-w-[776px]">
              <span className="font-normal">Your AI gets smarter </span><span className="font-bold">when you<br />stop typing to it.</span>
            </h2>

            {/* Mobile/tablet supplement (will be redone per breakpoint later) */}
            <p className="mt-4 font-['Inter',sans-serif] text-[16px] leading-[28px] text-black max-w-[700px] xl:hidden">
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
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8 md:min-h-[160px]">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <SensayDot cutoutColor="#bfb9ac" pulse={false} solid />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-white">Typed prompt</p>
            </div>
            <div className="flex flex-wrap gap-x-[2px] gap-y-[2px]">
              {TYPED_CHIPS.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
          </div>

          {/* Speaking with Sensay box (BR square, tail at BR, orange + white logo top-right) */}
          <div className="relative flex-1 bg-[#FF4122] rounded-[20px] p-6 md:p-8 md:min-h-[300px]">
            <img src="/landing-assets/card-tail-orange.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
            <img src="/landing-assets/sensay-logo-white.svg" alt="" width={41} height={40} className="absolute top-5 right-5 md:top-6 md:right-6 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <SensayDot cutoutColor="#FF4122" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-white">Speaking with Sensay</p>
            </div>
            <div className="flex flex-col gap-y-[2px]">
              {SPOKEN_CHIPS.map((row, i) => (
                <div key={i} className="flex flex-wrap gap-x-[2px]">
                  {row.map((w) => (
                    <Chip key={w}>{w}</Chip>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer card — dark, all 4 rounded corners, tail at BL */}
        <div className="relative z-20 bg-[#2f2f2f] rounded-[20px] px-6 md:px-8 py-5 md:py-6 flex items-center gap-5">
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
