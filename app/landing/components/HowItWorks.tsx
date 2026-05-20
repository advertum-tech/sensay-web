export default function HowItWorks() {
  return (
    <section className="pt-[21px] pb-10 md:pt-4 md:pb-12 xl:pt-24 relative">

      <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
        <p
          className="
          {/*bg-amber-400 */}
          absolute font-['Inter',sans-serif] text-[16px] leading-[28px]

          uppercase text-black font-medium origin-top-left

          md:right-[154px] lg:right-[73px] md:top-[45px] lg:top-[45px]"

          style={{ width: 220, transform: 'rotate(5deg)' }}
        >
          No learning curve.<br /><span className="font-bold">No setup.</span> You already know how to use it.
        </p>
      </div>

      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <div className="mb-6 md:mb-16 relative">
<h2 id="how-it-works" className="scroll-mt-[80px] md:scroll-mt-[120px] font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] max-w-[319px] md:text-[50px] md:leading-[50px] md:max-lg:ml-[calc(50%-336px)] md:max-lg:max-w-[673px] lg:max-xl:ml-[calc(50%-423px)] lg:max-xl:max-w-[847px] xl:text-[100px] xl:leading-[80px] xl:max-w-[778px]">
            <span className="font-normal">Three<br className="hidden md:inline xl:hidden" /> seconds,<br className="hidden md:inline xl:hidden" /> </span><span className="font-bold">start to<br className="hidden md:inline xl:hidden" /> finish.</span>
          </h2>
          {/* Mobile-only supplement (normal flow) */}
          <p className="mt-4 font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase font-medium text-black max-w-[193px] md:hidden">
            No learning curve. <span className="font-bold">No setup.</span> You already know how to use it.
          </p>
          {/* Desktop supplement */}
          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left"
            style={{ top: 66, right: 218, width: 250, transform: 'rotate(5deg)' }}
          >
            No learning curve.<br /><span className="font-bold">No setup.</span> You already know how to use it.
          </p>
        </div>

        {/* 3 step cards — equal heights via uniform min-h on mobile; md+ row-flex
            stretches them naturally to the tallest. */}
        <div className="relative z-20 flex flex-col gap-[10px] md:flex-row md:gap-5 md:max-w-[1180px] md:mx-auto">

          {/* Step 1 — Tap and talk */}
          <div className="max-[399px]:mr-[50px] min-[400px]:mr-[100px] md:flex-1 md:mr-0">
            <div className="relative bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[290px] md:min-h-[240px]">
              <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <div className="relative w-[55px] h-[55px] mb-5">
                <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '0s' }} />
                <img src="/landing-assets/step-icon-mic.svg" alt="" width={55} height={55} className="relative block" />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Tap and talk</p>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Open Sensay, tap the mic. Speak the way you'd say it to someone in the room.</p>
            </div>
          </div>

          {/* Step 2 — Sensay cleans it */}
          <div className="max-[399px]:ml-[50px] min-[400px]:ml-[100px] md:flex-1 md:ml-0">
            <div className="relative bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[290px] md:min-h-[240px]">
              <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
              <div className="relative w-[55px] h-[55px] mb-5">
                <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '1s' }} />
                <img src="/landing-assets/step-icon-check.svg" alt="" width={55} height={55} className="relative block" />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Sensay cleans it</p>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Filler words, pauses, and "um"s — gone. Grammar fixed. Register matched to where it's going.</p>
            </div>
          </div>

          {/* Step 3 — Text appears */}
          <div className="max-[399px]:mr-[50px] min-[400px]:mr-[100px] md:flex-1 md:mr-0">
            <div className="relative bg-[#bfb9ac] rounded-[20px] p-6 md:p-7 min-h-[290px] md:min-h-[240px]">
              <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <div className="relative w-[55px] h-[55px] mb-5">
                <span className="absolute inset-0 rounded-full bg-[#E3DAD0] animate-step-pulse" style={{ animationDelay: '2s' }} />
                <img src="/landing-assets/step-icon-text.svg" alt="" width={55} height={55} className="relative block" />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-[#E3DAD0] xl:text-[#F0ECE3] mb-3">Text appears</p>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
