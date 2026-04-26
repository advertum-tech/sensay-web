function LovedBadge({ size = 120 }: { size?: number }) {
  return (
    <div className="relative" style={{ width: size, aspectRatio: "232 / 192" }}>
      <img src="/loved-circle.svg" alt="" className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-[20%] -rotate-[5deg]">
        <div className="w-full flex flex-col items-center" style={{ transform: "translateY(-20px)" }}>
          <img src="/loved-avatars.svg" alt="" className="w-[27%] mb-1" />
          <p className="text-center uppercase whitespace-nowrap" style={{ fontSize: size * 0.062, lineHeight: "2" }}>
            Loved by <strong>12,000+</strong>
            <br />people already
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="bg-sand">

      {/* ═══ MOBILE (< sm) ═══ */}
      <div className="sm:hidden overflow-hidden">
        <div className="px-5 pt-8">
          <div className="mb-5">
            <div className="relative w-fit">
              <img src="/voice-dictation-bg-tablet-mobile.svg" alt="" width={155} height={56} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
              <p className="relative font-['Inter',_sans-serif] font-bold text-[17px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">Voice dictation</p>
            </div>
            <div className="relative w-fit ml-[100px]">
              <img src="/works-in-any-app-bg-tablet-mobile.svg" alt="" width={176} height={52} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
              <p className="relative font-['Inter',_sans-serif] font-bold text-[17px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">works in any app</p>
            </div>
          </div>

          <div className="font-['Inter',_sans-serif] font-bold uppercase mb-5">
            <div className="text-[70px] leading-[60px]">JUST</div>
            <div className="text-[70px] leading-[60px]">SAY</div>
            <div className="text-[70px] leading-[60px]"><span className="text-coral">IT.</span></div>
          </div>

          <p className="font-['Inter',_sans-serif] text-[14px] font-medium uppercase leading-[24px] text-black/80 text-center mb-6">
            <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere
            else.{" "}
            <strong className="font-bold">No typing. No switching apps.</strong>
          </p>

          <a
            href="#"
            className="block bg-coral text-white font-bold text-sm uppercase rounded-xl px-8 py-4 text-center mb-4"
          >
            Start free — no signup
          </a>
          <a
            href="#"
            className="block text-sm font-bold uppercase tracking-widest text-black text-center mb-6"
          >
            See how →
          </a>
        </div>

        {/* Bubble — full width, above person */}
        <img src="/hero-bubble-tablet-mobile.svg" alt="" className="relative w-full z-10" />

        {/* Person photo — full width, overlaps bubble slightly */}
        <div className="relative -mt-5">
          <img src="/hero-person.png" alt="" className="w-full" />
          <img
            src="/hero-record-btn.svg"
            alt=""
            className="absolute z-20 w-[22%]"
            style={{ top: "32%", left: "57%" }}
          />
          <img
            src="/hero-mic-btn.svg"
            alt=""
            className="absolute z-20 w-[10%]"
            style={{ top: "2%", left: "1%" }}
          />
        </div>

        {/* iPhone — full width below person */}
        <div className="relative -mt-3">
          <img src="/hero-iphone.png" alt="Sensay app" className="w-full" />
          <img
            src="/phone-text-and-white-logo.svg"
            alt=""
            className="absolute inset-0 w-full h-full"
          />
        </div>

        <div className="h-px bg-white mt-4 mx-5 mb-6" />

        <div className="flex justify-center pb-8">
          <LovedBadge size={120} />
        </div>
      </div>

      {/* ═══ TABLET (sm–xl) ═══ */}
      <div className="hidden sm:block xl:hidden relative overflow-hidden">
        {/* Bubble — large absolute background, right half, full section height */}
        <img
          src="/hero-bubble-tablet-mobile.svg"
          alt=""
          className="absolute w-[59%] z-20 pointer-events-none"
          style={{ right: "-5%", top: "100px" }}
        />

        <div className="px-8 relative z-10">
          {/* Top row: headline left, tagline right */}
          <div className="grid grid-cols-2 pt-12">
            <div>
              <div className="font-['Inter',_sans-serif] font-bold uppercase mb-8">
                <div className="text-[100px] leading-[80px]">JUST</div>
                <div className="text-[100px] leading-[80px]">SAY</div>
                <div className="text-[100px] leading-[80px] text-coral">IT.</div>
              </div>
              <p className="font-['Inter',_sans-serif] text-[16px] font-medium uppercase leading-[28px] text-black">
                <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere
                else.{" "}
                <strong className="font-bold">No typing. No switching apps.</strong>
              </p>
            </div>
            <div className="flex justify-end pt-3">
              <div>
                <div className="relative w-fit">
                  <img src="/voice-dictation-bg-tablet-mobile.svg" alt="" width={155} height={56} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                  <p className="relative font-['Inter',_sans-serif] font-bold text-[17px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">Voice dictation</p>
                </div>
                <div className="relative w-fit ml-[55px]">
                  <img src="/works-in-any-app-bg-tablet-mobile.svg" alt="" width={176} height={52} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                  <p className="relative font-['Inter',_sans-serif] font-bold text-[17px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">works in any app</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual row: iPhone left, person right */}
          <div className="grid grid-cols-2 mt-10 items-end">
            {/* iPhone */}
            <div>
              <div className="relative w-[260px]">
                <img src="/hero-iphone.png" alt="Sensay app" className="w-full" />
                <img
                  src="/phone-text-and-white-logo.svg"
                  alt=""
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            {/* Person */}
            <div className="flex justify-end">
              <div className="relative">
                <img src="/hero-person.png" alt="" className="w-[300px]" />
                <img
                  src="/hero-record-btn.svg"
                  alt=""
                  className="absolute w-[25%] z-20"
                  style={{ top: "52%", left: "3%" }}
                />
                <img
                  src="/hero-mic-btn.svg"
                  alt=""
                  className="absolute w-[9%] z-20"
                  style={{ top: "30%", right: "18%" }}
                />
              </div>
            </div>
          </div>

          <div className="h-px bg-white mt-8 mb-6" />

          {/* CTA + Loved badge */}
          <div className="flex items-center gap-8 pb-10">
            <a
              href="#"
              className="inline-block bg-coral text-white font-bold text-base uppercase rounded-xl px-8 py-4"
            >
              Start free — no signup
            </a>
            <LovedBadge size={120} />
          </div>
        </div>
      </div>

      {/* ═══ DESKTOP (xl+) ═══ */}
      <div className="hidden xl:block">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="flex">

            {/* Left column */}
            <div className="w-[44%] flex-none pt-10 pb-12 flex flex-col">
              <div className="relative w-fit mb-8">
                <img src="/voice-dictation-works-in-any-app-bg-desktop.svg" alt="" width={402} className="absolute left-0 pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[20px] uppercase text-stone-500 -rotate-[3deg] whitespace-nowrap">
                  Voice dictation · works in any app
                </p>
              </div>
              <div className="font-['Inter',_sans-serif] font-bold uppercase mb-12">
                <div className="text-[140px] leading-[120px]">JUST</div>
                <div className="text-[140px] leading-[120px]">SAY</div>
                <div className="text-[140px] leading-[120px] text-coral">IT.</div>
              </div>
              <div>
                <a
                  href="#"
                  className="inline-block bg-coral text-white font-bold text-base uppercase rounded-xl px-10 py-4 mb-5"
                >
                  Start free<span className="hidden min-[1500px]:inline"> — no signup</span>
                </a>
                <div>
                  <a
                    href="#"
                    className="text-sm font-bold uppercase tracking-[0.04em] text-black"
                  >
                    See how →
                  </a>
                </div>
              </div>
            </div>

            {/* Right column — visual composition */}
            <div className="flex-1 relative flex flex-col justify-end">

              {/* Description */}
              <p className="absolute top-[11%] left-0 w-[58%] font-['Inter',_sans-serif] text-[16px] font-medium uppercase leading-[28px] text-black">
                <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere
                else.{" "}
                <strong className="font-bold">No typing. No switching apps.</strong>
              </p>

              {/* Loved badge */}
              <div className="absolute top-[9%] right-0">
                <LovedBadge size={200} />
              </div>

              {/* Bubble */}
              <img
                src="/hero-bubble-desktop.svg"
                alt=""
                className="absolute z-20 pointer-events-none"
                style={{ left: "-251px", top: "281px", width: "384px" }}
              />

              {/* Person + iPhone — in flow, determine column height, bottoms aligned */}
              <div className="flex items-end relative z-10" style={{ paddingLeft: "25px", gap: "34px" }}>
                <img src="/hero-person.png" alt="" style={{ width: "382px", display: "block", flexShrink: 0 }} />
                <div className="relative" style={{ width: "310px", flexShrink: 0 }}>
                  <img src="/hero-iphone.png" alt="Sensay app" className="w-full" />
                  <img
                    src="/phone-text-and-white-logo.svg"
                    alt=""
                    className="absolute"
                    style={{ left: "14%", top: "27%", width: "72%" }}
                  />
                </div>
              </div>

              {/* Record button */}
              <img
                src="/hero-record-btn.svg"
                alt=""
                className="absolute z-20"
                style={{ left: "308px", bottom: "100px", width: "84px" }}
              />

              {/* Mic button */}
              <img
                src="/hero-mic-btn.svg"
                alt=""
                className="absolute z-20"
                style={{ left: "25px", bottom: "24px", width: "30px" }}
              />

              {/* Dashed connector 1 */}
              <img
                src="/hero-dashed-1.svg"
                alt=""
                className="absolute pointer-events-none"
                style={{ left: "215px", bottom: "122px", width: "238px", zIndex: 15 }}
              />

              {/* Dashed connector 2 */}
              <img
                src="/hero-dashed-2.svg"
                alt=""
                className="absolute z-0 pointer-events-none"
                style={{ top: "calc(62% + 100px)", left: "calc(27% - 30px)" }}
              />

            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="h-px bg-white" />
        </div>
      </div>

    </section>
  );
}
