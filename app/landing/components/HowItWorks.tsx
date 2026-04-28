export default function HowItWorks() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-black text-[52px] md:text-[72px] xl:text-[100px] xl:max-w-[778px]">
            <span className="font-normal">Three seconds, </span><span className="font-bold">start to finish.</span>
          </h2>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70 max-w-[520px]">
            No learning curve. No setup. You already know how to use it.
          </p>
        </div>

        {/* 3 step cards */}
        <div className="flex flex-col md:flex-row gap-5">

          {/* Step 1 — Tap and talk */}
          <div className="flex-1 bg-[#bfb9ac] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-7 min-h-[240px]">
            <div className="w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center mb-5">
              <img src="/landing-assets/icon-step-mic.svg" alt="" className="w-[32px] h-[32px] object-contain" />
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#f0ece3] mb-3">Tap and talk</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Open Sensay, tap the mic. Speak the way you'd say it to someone in the room.</p>
          </div>

          {/* Step 2 — Sensay cleans it */}
          <div className="flex-1 bg-[#bfb9ac] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-7 min-h-[240px]">
            <div className="w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#FF4122" strokeWidth="1.8"/>
                <path d="M7.5 12.5l3 3 6-7" stroke="#FF4122" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#f0ece3] mb-3">Sensay cleans it</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">Filler words, pauses, and "um"s — gone. Grammar fixed. Register matched to where it's going.</p>
          </div>

          {/* Step 3 — Text appears */}
          <div className="flex-1 bg-[#bfb9ac] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-7 min-h-[240px]">
            <div className="w-[55px] h-[55px] rounded-full bg-white flex items-center justify-center mb-5">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 10h10M4 14h13M4 18h8" stroke="#FF4122" strokeWidth="1.8" strokeLinecap="round"/>
                <rect x="2" y="3" width="20" height="18" rx="3" stroke="#FF4122" strokeWidth="1.8"/>
              </svg>
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#f0ece3] mb-3">Text appears</p>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#2f2f2f] leading-[28px]">In your email, Slack, WhatsApp, Notion — wherever your cursor is. Paste nothing. Done.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
