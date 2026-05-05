export default function SpeedStat() {
  return (
    <section className="bg-[#E3DED3] pt-10 pb-20 md:pt-12 md:pb-28">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16 xl:relative">
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-black text-[52px] md:text-[72px] xl:text-[100px] xl:max-w-[778px]">
            <span className="font-normal">You type 40 words a minute.</span><br />
            <span className="font-bold">You speak 130.</span>
          </h2>
          {/* Mobile/tablet supplement (will be redone per breakpoint later) */}
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70 max-w-[600px] xl:hidden">
            Your thoughts don't slow down for your fingers. Neither should your messages.
          </p>
          {/* Desktop supplement — positioned per figma node 131:2802 */}
          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left"
            style={{ top: 149, right: 215, width: 280, transform: 'rotate(-6deg)' }}
          >
            <span className="font-bold">Your thoughts<br />don't slow down<br />for your fingers.</span><br />Neither should your messages.
          </p>
        </div>

        {/* Comparison: 2 boxes side-by-side, no dark wrapper */}
        <div className="relative z-20 flex flex-col md:flex-row gap-5">

          {/* Typing box (tail at bottom-LEFT, beige) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[14px] h-[14px] rounded-full bg-[#E3DAD0]" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#817e73]">Typing</p>
            </div>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">
              Hunt for the right words. Fix the typo. Re-read. Edit again. Send — 3 minutes later.
            </p>
          </div>

          {/* Speaking with Sensay box (mirrored: tail at bottom-RIGHT, orange + white logo top-right) */}
          <div className="relative flex-1 bg-[#FF4122] rounded-[20px] p-6 md:p-8">
            <img src="/landing-assets/card-tail-orange.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
            <img src="/landing-assets/sensay-logo-white.svg" alt="" width={41} height={40} className="absolute top-5 right-5 md:top-6 md:right-6 pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-[14px] h-[14px]">
                <span className="absolute inset-0 rounded-full bg-white animate-step-pulse" />
                <div className="relative w-[14px] h-[14px] rounded-full border-[4px] border-white" />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white">Speaking with Sensay</p>
            </div>
            <p className="font-['Inter',sans-serif] text-[16px] text-white leading-[28px]">
              Say exactly what you mean. Sensay cleans it up. Done in the time it took to unlock your phone.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
