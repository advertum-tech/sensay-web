const CASES = [
  {
    icon: "/landing-assets/icon-car.svg",
    iconW: 31, iconH: 25,
    label: "In the car",
    body: "Reply to messages, jot down ideas. Hands on the wheel, words in the app.",
    mirrored: false,
  },
  {
    icon: "/landing-assets/icon-couch.svg",
    iconW: 41, iconH: 20,
    label: "On the couch",
    body: "Long reply, short energy. Say it instead of slowly hunting keys.",
    mirrored: true,
  },
  {
    icon: "/landing-assets/icon-walk.svg",
    iconW: 22, iconH: 35,
    label: "On a walk",
    body: "The idea that arrived while moving. Say it before it's gone.",
    mirrored: false,
  },
  {
    icon: "/landing-assets/icon-house.svg",
    iconW: 32, iconH: 30,
    label: "Hands full",
    body: "Cooking, coffee, whatever. Your voice is free even when your hands aren't.",
    mirrored: true,
  },
];

export default function UseCases() {
  return (
    <section className="pt-0 pb-20 md:pt-2 md:pb-28 md:-mt-[50px] xl:bg-transparent xl:py-0 xl:mt-0">

      {/* ── MOBILE: dark card with staggered absolute-positioned cards ── */}
      <div className="md:hidden mx-[10px] relative bg-[#2f2f2f] rounded-[20px]" style={{ height: 1414 }}>
        <img
          src="/landing-assets/card-tail-dark.svg"
          alt=""
          width={25}
          height={16}
          className="absolute bottom-0 -left-[10px] pointer-events-none"
        />
        <h2
          className="absolute font-['Inter',sans-serif] uppercase text-[#E3DAD0] text-[50px] leading-[50px]"
          style={{ left: 20, top: 23, width: 282 }}
        >
          <span className="font-normal">Whenever typing feels </span><span className="font-bold">like too much.</span>
        </h2>
        <p
          className="absolute font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-[#E3DAD0] font-medium"
          style={{ left: 20, top: 303, width: 193 }}
        >
          Which is, honestly, most of the time.
        </p>
        <img
          src="/landing-assets/usecases-swirl-mobile.svg"
          alt=""
          width={67}
          height={404}
          className="absolute pointer-events-none"
          style={{ left: 250, top: 193 }}
          aria-hidden="true"
        />
        <img
          src="/landing-assets/usecases-swirl-mobile-2.svg"
          alt=""
          width={43}
          height={197}
          className="absolute pointer-events-none"
          style={{ left: 58, top: 762 }}
          aria-hidden="true"
        />
        {([
          { ...CASES[0], cardLeft: 20,  cardTop: 394,  tailRight: false },
          { ...CASES[1], cardLeft: 95,  cardTop: 644,  tailRight: true  },
          { ...CASES[2], cardLeft: 20,  cardTop: 894,  tailRight: false },
          { ...CASES[3], cardLeft: 95,  cardTop: 1144, tailRight: true  },
        ] as Array<typeof CASES[0] & { cardLeft: number; cardTop: number; tailRight: boolean }>).map((c) => (
          <div
            key={c.label}
            className="absolute bg-[#eaeaea] rounded-[20px] p-6"
            style={{ left: c.cardLeft, top: c.cardTop, width: 240, height: 240 }}
          >
            <div
              className={`absolute bottom-0 w-[25px] h-[16px] pointer-events-none ${c.tailRight ? "-right-[10px] -scale-x-100" : "-left-[10px]"}`}
              style={{
                backgroundColor: '#eaeaea',
                WebkitMaskImage: 'url(/landing-assets/card-tail.svg)',
                maskImage: 'url(/landing-assets/card-tail.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
            <div
              className="block mb-4"
              style={{
                width: c.iconW,
                height: c.iconH,
                backgroundColor: '#817e73',
                WebkitMaskImage: `url(${c.icon})`,
                maskImage: `url(${c.icon})`,
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
            <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-black mb-3">{c.label}</p>
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-black/80">{c.body}</p>
          </div>
        ))}
      </div>

      {/* ── TABLET + DESKTOP ── */}
      <div className="hidden md:block xl:relative xl:py-[100px] relative md:max-xl:min-h-[962px]">

        {/* TABLET dark background (md-xl-): absolute, with margin from viewport edges, rounded, with bottom-left tail */}
        <div className="hidden md:block xl:hidden absolute inset-0 mx-5 bg-[#2f2f2f] rounded-[20px] pointer-events-none z-0">
          <img
            src="/landing-assets/card-tail-dark.svg"
            alt=""
            width={25}
            height={16}
            className="absolute bottom-0 -left-[10px] pointer-events-none"
          />
        </div>

        {/* TABLET background swirl + supplement — pixel-perfect 834px wrapper */}
        <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
          {/* Main swirl through cards (figma 261:358) */}
          <img
            src="/landing-assets/usecases-swirl-tablet.svg"
            alt=""
            width={458}
            height={816}
            className="absolute md:left-[96px] md:top-[138px] lg:left-[146px] lg:top-[138px]"
            aria-hidden="true"
          />
          <p
            className="absolute font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-[#E3DAD0] font-medium md:right-[166px] md:top-[68px] lg:right-[116px] lg:top-[68px]"
            style={{ width: 193 }}
          >
            <span className="font-bold">Which is, honestly,</span><br />most of the time.
          </p>
        </div>

        {/* TABLET top transition swirl — pixel-perfect 834px wrapper. Figma node 261:204, native 17x168 */}
        <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
          <img
            data-figma-node="261:204"
            src="/landing-assets/usecases-swirl-top-tablet.svg"
            alt=""
            width={17}
            height={168}
            className="absolute md:left-[547px] md:top-[-103px] lg:left-[597px] lg:top-[-103px] origin-center"
            style={{ transform: 'rotate(-10deg)' }}
            aria-hidden="true"
          />
        </div>

        {/* xl: dark background layer — max 1580px wide, centered, sits behind content */}
        <div className="hidden xl:flex xl:absolute xl:inset-0 xl:items-stretch xl:pointer-events-none">
          <div className="xl:relative xl:w-full xl:mx-auto xl:bg-[#2f2f2f] xl:overflow-visible min-[1600px]:!max-w-[1580px] min-[1600px]:!rounded-[20px]" />
        </div>

        {/* Content — same padded container as other sections; everything (heading, supplement, swirl, cards) is positioned relative to THIS box */}
        <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto relative z-10 md:pt-[73px] xl:pt-0">

          {/* Section-local dotted swirl — figma 161:3341, positioned relative to content container */}
          <img
            src="/landing-assets/usecases-swirl.svg"
            alt=""
            width={343}
            height={335}
            className="hidden xl:block xl:absolute pointer-events-none xl:right-[150px] min-[1500px]:!right-[280px]"
            style={{ top: 0 }}
          />

          {/* Heading */}
          <div className="mb-12 md:mb-16 xl:relative">
            <h2 className="font-['Inter',sans-serif] uppercase text-black md:text-[#E3DAD0] xl:text-[#E3DAD0] text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] md:max-lg:ml-[calc(50%-336px)] md:max-lg:max-w-[282px] lg:max-xl:ml-[calc(50%-423px)] lg:max-xl:max-w-[282px] xl:max-w-[677px]">
              <span className="font-normal">Whenever typing feels </span><span className="font-bold">like too much.</span>
            </h2>
            {/* Desktop supplement — positioned per figma node 131:2853 */}
            <p
              className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-[#E3DAD0] xl:font-medium xl:origin-top-left xl:right-[150px] min-[1500px]:!right-[273px]"
              style={{ top: 141, width: 200, transform: 'rotate(-5deg)' }}
            >
              <span className="font-bold">Which is, honestly,</span><br />most of the time.
            </p>
          </div>

          {/* 4 use-case cards — mobile (grid-cols-2) and desktop (xl:grid-cols-4); tablet handled separately below */}
          <div className="relative z-20 grid grid-cols-2 xl:grid-cols-4 gap-5 md:max-w-[1180px] md:mx-auto md:max-xl:hidden">
            {CASES.map((c, idx) => {
              // Desktop: all 4 cards fully rounded. Car (0) — tail bottom-LEFT. Couch (1), Walk (2), Hands full (3) — tail bottom-RIGHT.
              const desktopTail = idx === 0 ? "left" : "right";
              return (
                <div
                  key={c.label}
                  className={`relative bg-[#eaeaea] p-5 md:p-6 min-h-[200px] rounded-tl-[20px] rounded-tr-[20px] ${c.mirrored ? "rounded-bl-[20px]" : "rounded-br-[20px]"} xl:rounded-[20px]`}
                >
                  <img src={c.icon} alt="" width={c.iconW} height={c.iconH} className="block mb-4" />
                  <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-black mb-3">{c.label}</p>
                  <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-black/80">{c.body}</p>
                  {desktopTail && (
                    <div
                      className={`hidden xl:block absolute bottom-0 w-[25px] h-[16px] pointer-events-none ${desktopTail === "right" ? "-right-[10px] -scale-x-100" : "-left-[10px]"}`}
                      style={{
                        backgroundColor: "#eaeaea",
                        WebkitMaskImage: "url(/landing-assets/card-tail.svg)",
                        maskImage: "url(/landing-assets/card-tail.svg)",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* TABLET cards — pixel-perfect 834px wrapper, brick layout, monochrome icons */}
        <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 z-20" style={{ width: 834 }}>
          {[
            { ...CASES[0], left: 104, top: 398, tailRight: false },
            { ...CASES[1], left: 364, top: 398, tailRight: false },
            { ...CASES[2], left: 214, top: 658, tailRight: false },
            { ...CASES[3], left: 474, top: 658, tailRight: true },
          ].map((c) => (
            <div
              key={c.label}
              className="absolute bg-[#eaeaea] p-6 w-[240px] h-[240px] rounded-[20px]"
              style={{ left: c.left, top: c.top }}
            >
              <div
                className={`absolute bottom-0 w-[25px] h-[16px] pointer-events-none ${c.tailRight ? "-right-[10px] -scale-x-100" : "-left-[10px]"}`}
                style={{
                  backgroundColor: '#eaeaea',
                  WebkitMaskImage: 'url(/landing-assets/card-tail.svg)',
                  maskImage: 'url(/landing-assets/card-tail.svg)',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                }}
              />
              <div
                className="block mb-4"
                style={{
                  width: c.iconW,
                  height: c.iconH,
                  backgroundColor: '#817e73',
                  WebkitMaskImage: `url(${c.icon})`,
                  maskImage: `url(${c.icon})`,
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-black mb-3">{c.label}</p>
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-black/80">{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
