import SensayDot from "./SensayDot";

const BARS = [
  { h: 67, opacity: 0.4 },
  { h: 90, opacity: 0.6 },
  { h: 110, opacity: 0.9 },
  { h: 130, opacity: 1 },
  { h: 120, opacity: 0.9 },
  { h: 100, opacity: 0.8 },
  { h: 110, opacity: 0.7 },
  { h: 120, opacity: 0.8 },
  { h: 130, opacity: 1 },
  { h: 110, opacity: 0.9 },
  { h: 90, opacity: 0.8 },
  { h: 60, opacity: 0.7 },
];

export default function FinalCTA() {
  return (
    <section className="bg-[#E3DED3] pt-16 md:pt-24">

      {/* Orange CTA card */}
      <div className="mx-5 md:mx-[50px] xl:mx-auto xl:max-w-[1580px] relative bg-[#FF4122] rounded-tl-[20px] rounded-tr-[20px] z-20">
        <div className="px-6 pt-10 pb-8 md:px-12 md:pt-14 md:pb-12 xl:px-[100px] xl:pt-[100px] xl:pb-16">
          {/* Logo aligned with heading on the left */}
          <img
            src="/landing-assets/sensay-logo-white.svg"
            alt=""
            width={41}
            height={40}
            className="block h-[62px] md:h-[78px] xl:h-[86px] w-auto object-contain mb-8 md:mb-12"
          />
          <h2 className="font-['Inter',sans-serif] uppercase text-white text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] mb-20 md:mb-32 xl:mb-40 xl:max-w-[780px]">
            <span className="font-bold">You know </span>
            <span className="font-bold xl:font-normal">what you want to say.</span>
            <span className="inline-flex align-middle ml-3 relative" style={{ transform: 'translate(-33px, 22px)' }}><SensayDot cutoutColor="#FF4122" /></span>
          </h2>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-flex items-center bg-white text-[#FF4122] font-['Inter',sans-serif] font-bold text-[14px] leading-none xl:text-[16px] uppercase rounded-[7px] px-12 md:px-16 h-[44px] md:h-[52px] hover:opacity-90 transition-opacity duration-200"
            >
              So say it!
            </a>
          </div>
        </div>
      </div>

      {/* Dark bottom section — same wrapper layout as orange CTA, height grown by paint-SVG-equivalent padding-top */}
      <div className="mx-5 md:mx-[50px] xl:mx-auto xl:max-w-[1580px] mb-12 md:mb-16 relative bg-[#2f2f2f] rounded-bl-[20px] rounded-tr-[20px] rounded-br-[20px] z-0">

        {/* Tail at bottom-RIGHT */}
        <img
          src="/landing-assets/card-tail-dark.svg"
          alt=""
          width={25}
          height={16}
          className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100 z-10"
        />

        {/* Paint waveform — single SVG (paint-desktop-tablet, viewBox 1580x2675), full width of dark wrapper */}
        <div className="absolute left-0 right-0 pointer-events-none select-none" style={{ top: 0 }} aria-hidden="true">
          <div className="relative w-full" style={{ paddingTop: '120%' }}>
            <img
              src="/landing-assets/paint-desktop-tablet.svg"
              alt=""
              className="absolute bottom-0 left-0 w-full h-auto block"
            />
          </div>
        </div>

        <div className="relative px-6 md:px-12 xl:px-[100px] pb-12 md:pb-16" style={{ paddingTop: '120%' }}>

          {/* Puffy button */}
          <div className="flex justify-center mt-[256px] md:mt-[320px] mb-[256px] md:mb-[320px]">
            <a
              href="#"
              className="group relative flex items-center gap-0 justify-center"
              style={{ height: 130 }}
            >
              {BARS.map((b, i) => (
                <div
                  key={i}
                  className="w-[28px] md:w-[42px] rounded-[40px] bg-[#FF4122] flex-none transition-opacity duration-300 group-hover:opacity-100"
                  style={{ height: b.h, opacity: b.opacity }}
                />
              ))}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4122] border border-white rounded-[10px] h-[52px] w-[220px] md:h-[60px] md:w-[280px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[14px] leading-[28px] xl:text-[16px] xl:leading-[28px] uppercase text-white tracking-wider whitespace-nowrap pointer-events-none transition-colors duration-200 group-hover:bg-white group-hover:text-[#FF4122]">
                Start Sensay free
              </span>
            </a>
          </div>

          {/* Divider — full wrapper width via negative margin */}
          <div className="border-t border-white/20 mb-6 md:mb-8 -mx-6 md:-mx-12 xl:-mx-[100px]" />

          {/* Tagline */}
          <p className="text-center font-['Inter',sans-serif] text-[13px] leading-[28px] uppercase text-[#bfb9ac] mb-6 md:mb-8">
            <span className="font-bold">Sensay</span><span className="font-medium"> — voice dictation AI &nbsp;·&nbsp; Developed by Advertum Agency</span>
          </p>

          {/* Divider — full wrapper width via negative margin */}
          <div className="border-t border-white/20 mb-8 md:mb-10 -mx-6 md:-mx-12 xl:-mx-[100px]" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 font-['Inter',sans-serif] font-normal text-[16px] leading-[45px] md:text-[13px] md:leading-[34px] xl:text-[16px] xl:leading-[45px] text-[#e3dad0]">
            <div>
              Advertum Agency since 2009<br />
              hello@advertum.com<br />
              +372 5551 1283
            </div>
            <div>
              Narva mnt 5, 10117 Tallinn,<br />
              Harjumaa, Estonia<br />
              Get directions
            </div>
            <div className="md:text-right">
              <span className="font-semibold xl:font-normal">Follow </span><span className="font-medium">@advertumofficial</span>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
