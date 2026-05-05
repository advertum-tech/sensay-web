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

      {/* Orange CTA card — z-20 so it sits above paint bars */}
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto relative z-20">
        <div className="bg-[#FF4122] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] px-8 pt-16 pb-20 md:px-16 md:pt-24 md:pb-28 relative overflow-hidden">
          <img
            src="/landing-assets/sensay-wave-logo.svg"
            alt=""
            className="absolute top-8 left-8 md:top-10 md:left-12 h-[32px] md:h-[44px] object-contain"
          />
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-white text-[52px] md:text-[72px] xl:text-[100px] mb-8 md:mb-12 xl:max-w-[780px]">
            <span className="font-bold">You know </span>
            <span className="font-normal">what you want to say.</span>
          </h2>
          <p className="font-['Inter',sans-serif] font-bold text-[28px] md:text-[40px] xl:text-[55px] uppercase text-white/60 mb-10 md:mb-16">
            So say it
          </p>
          <a
            href="#"
            className="inline-block bg-white text-[#FF4122] font-['Inter',sans-serif] font-bold text-[16px] md:text-[18px] uppercase rounded-[7px] px-10 py-4 md:px-14 md:py-5 hover:bg-black hover:text-white transition-colors"
          >
            Try Sensay free
          </a>
        </div>
      </div>

      {/* Paint waveform — outer clips to visible portion (1747/1580=110.5%), inner holds full 2678px canvas */}
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto select-none pointer-events-none relative z-10" aria-hidden="true">
        <div className="relative overflow-hidden" style={{ paddingTop: '110.5%' }}>
          {/* Inner: full canvas shifted up by hidden portion (931/1747=53.3% of outer height) */}
          <div className="absolute" style={{ top: '-53.3%', left: 0, right: 0, bottom: 0 }}>
            {/* Full canvas: paddingTop 169.49% relative to inner width */}
            <div className="relative w-full" style={{ paddingTop: '169.49%' }}>
              {/* r1-right (olive, mirrored) — bottom layer */}
              <div className="absolute" style={{ top: '31.52%', bottom: '4.48%', left: '49.97%', right: '2.98%' }}>
                <img src="/landing-assets/paint-r1-right.svg" alt="" className="w-full h-full block" style={{ transform: 'scaleX(-1)' }} />
              </div>
              {/* r1-left (olive) */}
              <div className="absolute" style={{ top: '38.69%', bottom: '0%', left: '2.98%', right: '49.97%' }}>
                <img src="/landing-assets/paint-r1-left.svg" alt="" className="w-full h-full block" />
              </div>
              {/* r2-left (dark) */}
              <div className="absolute" style={{ top: '31.59%', bottom: '14.42%', left: '2.98%', right: '49.97%' }}>
                <img src="/landing-assets/paint-r2-left.svg" alt="" className="w-full h-full block" />
              </div>
              {/* r2-right (dark, mirrored) */}
              <div className="absolute" style={{ top: '15.64%', bottom: '20.84%', left: '49.97%', right: '2.98%' }}>
                <img src="/landing-assets/paint-r2-right.svg" alt="" className="w-full h-full block" style={{ transform: 'scaleX(-1)' }} />
              </div>
              {/* r3-left (orange) */}
              <div className="absolute" style={{ top: '15.98%', bottom: '30.02%', left: '2.98%', right: '49.97%' }}>
                <img src="/landing-assets/paint-r3-left.svg" alt="" className="w-full h-full block" />
              </div>
              {/* r3-right (orange, mirrored) — top layer */}
              <div className="absolute" style={{ top: '0%', bottom: '36.52%', left: '49.98%', right: '2.98%' }}>
                <img src="/landing-assets/paint-r3-right.svg" alt="" className="w-full h-full block" style={{ transform: 'scaleX(-1)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dark bottom section — pulled up to overlap bottom of paint (672/1580≈42.5% of width), rounded-bl only */}
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto relative z-0" style={{ marginTop: '-42.5%' }}>
        <div className="bg-[#2f2f2f] rounded-bl-[20px] px-5 pt-20 pb-12 md:px-16 md:pt-28 md:pb-16">

          {/* Puffy button */}
          <div className="flex justify-center mb-16 md:mb-20">
            <a
              href="#"
              className="relative flex items-end gap-0 justify-center"
              style={{ height: 130 }}
            >
              {BARS.map((b, i) => (
                <div
                  key={i}
                  className="w-[28px] md:w-[42px] rounded-[40px] bg-[#FF4122] flex-none"
                  style={{ height: b.h, opacity: b.opacity }}
                />
              ))}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF4122] border border-white rounded-[10px] h-[52px] w-[220px] md:h-[60px] md:w-[280px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[13px] md:text-[16px] uppercase text-white tracking-wider whitespace-nowrap pointer-events-none">
                Start Sensay free
              </span>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-6 md:mb-8" />

          {/* Tagline */}
          <p className="text-center font-['Inter',sans-serif] text-[11px] md:text-[12px] uppercase tracking-[0.15em] text-white/40 mb-6 md:mb-8">
            Sensay — voice dictation AI &nbsp;·&nbsp; Developed by Advertum Agency
          </p>

          {/* Divider */}
          <div className="border-t border-white/10 mb-8 md:mb-10" />

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:justify-between gap-6 font-['Inter',sans-serif] text-[12px] text-white/40 leading-[20px]">
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
              Follow @advertumofficial
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
