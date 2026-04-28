export default function SpeedStat() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-black text-[52px] md:text-[72px] xl:text-[100px] xl:max-w-[778px]">
            <span className="font-normal">You type 40 words a minute.</span><br />
            <span className="font-bold">You speak 130.</span>
          </h2>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70 max-w-[600px]">
            Your thoughts don't slow down for your fingers. Neither should your words.
          </p>
        </div>

        {/* Dark comparison card */}
        <div className="bg-[#2f2f2f] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-5">

            {/* Typing box */}
            <div className="flex-1 border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8">
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#817e73] mb-4">Typing</p>
              <p className="font-['Inter',sans-serif] text-[16px] text-[#bfb9ac] leading-[28px]">
                Hunt for the right words. Fix the typo. Re-read. Edit again. Send — 3 minutes later.
              </p>
            </div>

            {/* Speaking with Sensay box */}
            <div className="flex-1 bg-[#FF4122] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-[14px] h-[14px] rounded-full border-2 border-white" />
                <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white">Speaking with Sensay</p>
                <img src="/landing-assets/sensay-wave-sm.svg" alt="" className="ml-auto h-[14px] object-contain opacity-80" />
              </div>
              <p className="font-['Inter',sans-serif] text-[16px] text-white leading-[28px]">
                Say exactly what you mean. Sensay cleans it up. Done in the time it took to unlock your phone.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
