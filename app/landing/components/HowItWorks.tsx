export default function HowItWorks() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-10 md:pt-24 md:pb-12">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16 xl:relative">
          <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] md:text-[50px] md:leading-[50px] xl:text-[100px] xl:leading-[80px] xl:max-w-[778px]">
            <span className="font-normal">Three seconds, </span><span className="font-bold">start to finish.</span>
          </h2>
          {/* Mobile/tablet supplement (will be redone per breakpoint later) */}
          <p className="mt-4 font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase font-medium text-black max-w-[520px] xl:hidden">
            <span className="font-bold">No learning curve. No setup.</span> You already know<br /> how to use it.
          </p>
          {/* Desktop supplement — positioned per figma node 121:2677 */}
          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left"
            style={{ top: 66, right: 258, width: 202, transform: 'rotate(5deg)' }}
          >
            <span className="font-bold">No learning curve. No setup.</span> You already know<br /> how to use it.
          </p>
        </div>

        {/* 3 step cards — constrained 1180px sub-grid, centered. relative + z-20 above the swirl */}
        <div className="relative z-20 flex flex-col md:flex-row gap-5 md:max-w-[1180px] md:mx-auto">

          {/* Step 1 — Tap and talk (tail at bottom-LEFT) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[240px]">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="relative w-[55px] h-[55px] mb-5">
              <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '0s' }} />
              <img src="/landing-assets/step-icon-mic.svg" alt="" width={55} height={55} className="relative block" />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Tap and talk</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Open Sensay, tap the mic. Speak the way you'd say it to someone in the room.</p>
          </div>

          {/* Step 2 — Sensay cleans it (tail at bottom-LEFT) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[240px]">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
            <div className="relative w-[55px] h-[55px] mb-5">
              <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '1s' }} />
              <img src="/landing-assets/step-icon-check.svg" alt="" width={55} height={55} className="relative block" />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Sensay cleans it</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Filler words, pauses, and "um"s — gone. Grammar fixed. Register matched to where it's going.</p>
          </div>

          {/* Step 3 — Text appears (tail mirrored, at bottom-RIGHT) */}
          <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[240px]">
            <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
            <div className="relative w-[55px] h-[55px] mb-5">
              <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '2s' }} />
              <img src="/landing-assets/step-icon-text.svg" alt="" width={55} height={55} className="relative block" />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Text appears</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
