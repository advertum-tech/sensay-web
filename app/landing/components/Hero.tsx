import HeroPerson from './HeroPerson';
import HeroPersonMobile from './HeroPersonMobile';
import HeroMicBtn from './HeroMicBtn';

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

export default function Hero({ videoSrc = '/dude.mp4' }: { videoSrc?: string }) {
  return (
    <section className="bg-[#E3DED3]">

      {/* ═══ MOBILE (< md, 0–767px) ═══ */}
      <div className="md:hidden overflow-hidden">
        <div className="relative max-[499px]:left-1/2 max-[499px]:-translate-x-1/2 max-[499px]:w-[375px] max-[359px]:left-0 max-[359px]:translate-x-0 max-[359px]:w-full">

          <div className="px-5 pt-8 min-[500px]:flex min-[500px]:flex-col min-[500px]:items-center">
            {/* ≤499px: two stacked tags */}
            <div className="min-[500px]:hidden mb-5">
              <div className="relative w-fit" style={{ marginLeft: "50px", top: "6px" }}>
                <img src="/voice-dictation-bg-tablet-mobile.svg" alt="" width={155} height={56} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">Voice dictation</p>
              </div>
              <div className="relative w-fit ml-[150px] max-[359px]:ml-[110px]" style={{ top: "-4px" }}>
                <img src="/works-in-any-app-bg-tablet-mobile.svg" alt="" width={176} height={52} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">works in any app</p>
              </div>
            </div>

            {/* 500–767px: single-line tag, centered, ~20% smaller than desktop */}
            <div className="hidden min-[500px]:block mb-8">
              <div className="relative w-fit">
                <img src="/voice-dictation-works-in-any-app-bg-desktop.svg" alt="" width={320} className="absolute left-0 pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[3deg] whitespace-nowrap">Voice dictation · works in any app</p>
              </div>
            </div>

            {/* ≤499px: two-line heading */}
            <div className="min-[500px]:hidden font-['Inter',_sans-serif] font-bold uppercase mb-5 text-center">
              <div className="text-[70px] leading-[60px]">JUST</div>
              <div className="text-[70px] leading-[60px]">SAY <span className="text-coral">IT.</span></div>
            </div>

            {/* 500–767px: one-line heading */}
            <div className="hidden min-[500px]:block font-['Inter',_sans-serif] font-bold uppercase mb-5 text-center text-[70px] leading-[60px] whitespace-nowrap">
              JUST SAY <span className="text-coral">IT.</span>
            </div>

            <p className="font-['Inter',_sans-serif] text-[14px] font-medium uppercase leading-[24px] text-black/80 mb-6 text-center max-[499px]:-mx-2 min-[500px]:max-w-[480px]">
              <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else.{" "}
              <strong className="font-bold">No typing. No switching apps.</strong>
            </p>

            <a href="#" className="max-[499px]:block min-[500px]:inline-block bg-coral text-white font-bold text-sm uppercase rounded-xl px-8 py-4 text-center mb-4">
              Start free — no signup
            </a>
            <a href="#" className="block text-sm font-bold uppercase text-black/60 text-center">
              See how →
            </a>
          </div>

          {/* Bubble */}
          <img src="/hero-bubble-tablet-mobile-2x.png" alt="" className="relative z-10 block mx-auto w-[375px] max-[359px]:w-[300px]" style={{ marginTop: "-30px" }} />

          {/* Person + overlays */}
          <HeroPersonMobile src={videoSrc} />

          {/* Separator — right at person bottom, per Figma y=1183 */}
          <div className="relative z-40 h-px bg-white max-[499px]:ml-[calc(50%-50vw)] max-[499px]:w-screen" />

          {/* iPhone — 20px below separator */}
          <div className="relative z-30 mx-auto w-[338px] max-[359px]:w-[270px] min-[500px]:w-[375px]" style={{ marginTop: "20px" }}>
            <img src="/hero-iphone.png" alt="Sensay app" className="w-[320px] max-[359px]:w-[256px] ml-[18px] max-[359px]:ml-[14px]" />
            <img src="/phone-text-and-white-logo.svg" alt="" className="absolute left-[63px] max-[359px]:left-[50px] top-[94px] max-[359px]:top-[75px] w-[230px] max-[359px]:w-[184px]" />
          </div>

          {/* Separator — iPhone bottom sits on this line, per Figma y=1524 */}
          <div className="h-px bg-white max-[499px]:ml-[calc(50%-50vw)] max-[499px]:w-screen" />


        </div>
      </div>

      {/* ═══ TABLET narrow (md–lg, 768–1023px) ═══ */}
      <div className="hidden md:block lg:hidden">

        {/* Hero visual area — Figma 834px frame, centered */}
        <div className="relative overflow-hidden" style={{ height: "807px" }}>

          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "834px", height: "807px" }} data-hero-video-container>

            {/* Person — bottom layer */}
            <HeroPerson src={videoSrc} className="absolute z-0" style={{ left: "441px", top: "464px", width: "343px" }} />

            {/* Bubble — above person */}
            <img
              src="/hero-bubble-tablet-mobile-2x.png"
              alt=""
              className="absolute z-10 pointer-events-none"
              style={{ left: "344px", top: "48px", width: "494px" }}
            />

            {/* Voice dictation tag */}
            <div className="absolute z-10" style={{ left: "476px", top: "54px" }}>
              <div className="relative w-fit">
                <img src="/voice-dictation-bg-tablet-mobile.svg" alt="" width={155} height={56} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">Voice dictation</p>
              </div>
              <div className="relative w-fit ml-[55px]">
                <img src="/works-in-any-app-bg-tablet-mobile.svg" alt="" width={176} height={52} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">works in any app</p>
              </div>
            </div>

            {/* Headline */}
            <div className="absolute z-10 font-['Inter',_sans-serif] font-bold uppercase" style={{ left: "81px", top: "64px" }}>
              <div className="text-[100px] leading-[80px]">JUST</div>
              <div className="text-[100px] leading-[80px]">SAY</div>
              <div className="text-[100px] leading-[80px] text-coral">IT.</div>
            </div>

            {/* Body text */}
            <p className="absolute z-10 font-['Inter',_sans-serif] text-[16px] font-medium uppercase leading-[24px] text-black" style={{ left: "80px", top: "331px", width: "249px" }}>
              <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else.{" "}
              <strong className="font-bold">No typing. No switching apps.</strong>
            </p>

            {/* iPhone */}
            <div className="absolute z-10" style={{ left: "59px", top: "505px", width: "310px" }}>
              <img src="/hero-iphone.png" alt="Sensay app" className="w-full" />
              <img src="/phone-text-and-white-logo.svg" alt="" className="absolute" style={{ left: "14%", top: "27%", width: "72%" }} />
            </div>

            {/* Dashed connector */}
            <img
              src="/hero-dashed-1-tablet.svg"
              alt=""
              className="absolute z-10 pointer-events-none"
              style={{ left: "339px", top: "548px", width: "258px" }}
            />

            {/* Record button */}
            <img
              src="/hero-record-btn.svg"
              alt=""
              className="absolute z-20"
              style={{ left: "452px", top: "647px", width: "84px" }}
            />

            {/* Mic button */}
            <HeroMicBtn className="absolute z-50" style={{ left: "722px", top: "568px", width: "30px" }} />

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-white z-30" />
        </div>

        {/* CTA + Loved badge */}
        <div className="relative" style={{ height: "256px" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "834px" }}>
            <a
              href="#"
              className="absolute flex items-center justify-center bg-coral text-white font-bold text-base uppercase rounded-xl"
              style={{ left: "80px", top: "50px", width: "280px", height: "50px" }}
            >
              Start free — no signup
            </a>
            <a
              href="#"
              className="absolute font-bold text-[18px] leading-[28px] uppercase text-black/60"
              style={{ left: "165px", top: "115px" }}
            >
              See how →
            </a>
            <div className="absolute" style={{ right: "113px", top: "32px", width: "312px" }}>
              <img src="/hero-dashed-2-tablet.svg" alt="" className="w-full" />
              <div className="absolute flex flex-col items-center" style={{ top: "4.5%", left: "63%", transform: "translateX(-50%)" }}>
                <img src="/loved-avatars.svg" alt="" className="mb-1" style={{ width: "59px" }} />
                <p className="text-center uppercase whitespace-nowrap" style={{ fontSize: "14px", lineHeight: "28px" }}>
                  Loved by <strong className="font-bold">12,000+</strong>
                  <br />people already
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ═══ TABLET wide (lg–xl, 1024–1279px) ═══
          Horizontal positions scaled ×1.259 (1050/834) from the 834px Figma frame.
          Vertical positions and section heights unchanged. */}
      <div className="hidden lg:block xl:hidden">

        <div className="relative overflow-hidden" style={{ height: "807px" }}>

          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "1050px", height: "807px" }} data-hero-video-container>

            <HeroPerson src={videoSrc} className="absolute z-0" style={{ left: "556px", top: "464px", width: "343px" }} />

            <img
              src="/hero-bubble-tablet-mobile-2x.png"
              alt=""
              className="absolute z-10 pointer-events-none"
              style={{ left: "473px", top: "48px", width: "494px" }}
            />

            <div className="absolute z-10" style={{ left: "599px", top: "54px" }}>
              <div className="relative w-fit">
                <img src="/voice-dictation-bg-tablet-mobile.svg" alt="" width={155} height={56} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">Voice dictation</p>
              </div>
              <div className="relative w-fit ml-[55px]">
                <img src="/works-in-any-app-bg-tablet-mobile.svg" alt="" width={176} height={52} className="absolute left-0 -top-[3px] pointer-events-none max-w-none" />
                <p className="relative font-['Inter',_sans-serif] font-bold text-[16px] uppercase text-stone-500 -rotate-[5deg] whitespace-nowrap">works in any app</p>
              </div>
            </div>

            <div className="absolute z-10 font-['Inter',_sans-serif] font-bold uppercase" style={{ left: "102px", top: "64px" }}>
              <div className="text-[100px] leading-[80px]">JUST</div>
              <div className="text-[100px] leading-[80px]">SAY</div>
              <div className="text-[100px] leading-[80px] text-coral">IT.</div>
            </div>

            <p className="absolute z-10 font-['Inter',_sans-serif] text-[16px] font-medium uppercase leading-[24px] text-black" style={{ left: "101px", top: "331px", width: "314px" }}>
              <strong className="font-bold">Speak.</strong>{" "}Get clean, ready-to-send text — in your email, Slack, WhatsApp, or anywhere else.{" "}
              <strong className="font-bold">No typing. No switching apps.</strong>
            </p>

            <div className="absolute z-[15]" style={{ left: "124px", top: "505px", width: "310px" }}>
              <img src="/hero-iphone.png" alt="Sensay app" className="w-full" />
              <img src="/phone-text-and-white-logo.svg" alt="" className="absolute" style={{ left: "14%", top: "27%", width: "72%" }} />
            </div>

            <img
              src="/hero-dashed-1-tablet.svg"
              alt=""
              className="absolute z-10 pointer-events-none"
              style={{ left: "387px", top: "548px", width: "258px" }}
            />

            <img
              src="/hero-record-btn.svg"
              alt=""
              className="absolute z-20"
              style={{ left: "524px", top: "647px", width: "84px" }}
            />

            <HeroMicBtn className="absolute z-50" style={{ left: "829px", top: "568px", width: "30px" }} />

          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-white z-30" />
        </div>

        <div className="relative" style={{ height: "256px" }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2" style={{ width: "1050px" }}>
            <a
              href="#"
              className="absolute flex items-center justify-center bg-coral text-white font-bold text-base uppercase rounded-xl"
              style={{ left: "101px", top: "50px", width: "353px", height: "50px" }}
            >
              Start free — no signup
            </a>
            <a
              href="#"
              className="absolute font-bold text-[18px] leading-[28px] uppercase text-black/60"
              style={{ left: "208px", top: "115px" }}
            >
              See how →
            </a>
            <div className="absolute" style={{ right: "142px", top: "32px", width: "312px" }}>
              <img src="/hero-dashed-2-tablet.svg" alt="" className="w-full" />
              <div className="absolute flex flex-col items-center" style={{ top: "4.5%", left: "63%", transform: "translateX(-50%)" }}>
                <img src="/loved-avatars.svg" alt="" className="mb-1" style={{ width: "74px" }} />
                <p className="text-center uppercase whitespace-nowrap" style={{ fontSize: "14px", lineHeight: "28px" }}>
                  Loved by <strong className="font-bold">12,000+</strong>
                  <br />people already
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ═══ DESKTOP (xl+) ═══ */}
      <div className="hidden xl:block">
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="flex pt-20">

            {/* Left column */}
            <div className="w-[44%] flex-none pb-12 flex flex-col relative z-30">
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
                  Start free<span className="hidden min-[1350px]:inline"> — no signup</span>
                </a>
                <div>
                  <a
                    href="#"
                    className="text-[16px] leading-[28px] font-bold uppercase text-black"
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

              {/* Visual cluster — right-anchored at <1500px */}
              <div className="absolute right-0 bottom-0 min-[1500px]:relative min-[1500px]:right-auto min-[1500px]:bottom-auto min-[1500px]:ml-auto" data-hero-video-container>

                {/* Bubble */}
                {/* <img
                  src="/hero-bubble-desktop.svg"
                  alt=""
                  className="absolute z-20 pointer-events-none w-[384px] left-[-245px] top-[5px]"
                /> */}
                <img
                  src="/hero-bubble-desktop-2x.png"
                  alt=""
                  className="absolute z-20 pointer-events-none w-[384px] left-[-245px] top-[5px]"
                />

                {/* Person + iPhone — in flow, determines container height */}
                <div className="flex items-end relative z-10" style={{ paddingLeft: "31px", gap: "28px" }}>
                  <HeroPerson src={videoSrc} className="block shrink-0 w-[382px]" />
                  <div className="relative shrink-0 w-[310px]">
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
                  className="absolute z-20 w-[84px] left-[308px] bottom-[100px]"
                />

                {/* Mic button */}
                <HeroMicBtn className="absolute z-50 w-[30px] left-[31px] bottom-[24px]" />

                {/* Dashed connector 1 */}
                <img
                  src="/hero-dashed-1.svg"
                  alt=""
                  className="absolute pointer-events-none w-[238px] left-[221px] bottom-[122px]"
                  style={{ zIndex: 15 }}
                />

                {/* Dashed connector all */}
                <img
                  src="/hero-dashed-all-desktop.svg"
                  alt=""
                  className="absolute z-0 pointer-events-none left-[81px] top-[203px]"
                />

              </div>

            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="max-w-screen-2xl mx-auto px-16">
          <div className="h-px bg-white max-[499px]:ml-[calc(50%-50vw)] max-[499px]:w-screen" />
        </div>
      </div>

    </section>
  );
}
