// 12 icons — same set used across all breakpoints, just with different layouts
const ICONS = [
  { src: "/landing-assets/icon-gmail.png",     alt: "Gmail" },
  { src: "/landing-assets/icon-slack.png",     alt: "Slack" },
  { src: "/landing-assets/icon-telegram.png",  alt: "Telegram" },
  { src: "/landing-assets/icon-whatsapp.png",  alt: "WhatsApp" },
  { src: "/landing-assets/icon-openai.png",    alt: "ChatGPT" },
  { src: "/landing-assets/icon-anthropic.png", alt: "Claude" },
  { src: "/landing-assets/icon-chrome.png",    alt: "Chrome" },
  { src: "/landing-assets/icon-notion.png",    alt: "Notion" },
  { src: "/landing-assets/icon-outlook.png",   alt: "Outlook" },
  { src: "/landing-assets/icon-safari.png",    alt: "Safari" },
  { src: "/landing-assets/icon-gdocs.png",     alt: "Google Docs" },
  { src: "/landing-assets/icon-teams.png",     alt: "Microsoft Teams" },
];

// Desktop layout — 7 + 5, left-aligned
const DESKTOP_ROW1 = ICONS.slice(0, 7);
const DESKTOP_ROW2 = ICONS.slice(7);

function CardTail({ mirrored }: { mirrored?: boolean }) {
  return (
    <img
      src="/landing-assets/card-tail-white.svg"
      alt=""
      width={25}
      height={16}
      className={`absolute bottom-0 pointer-events-none ${mirrored ? "-right-[10px] -scale-x-100" : "-left-[10px]"}`}
    />
  );
}

function AppCard({ src, alt, mirrored }: { src: string; alt: string; mirrored?: boolean }) {
  return (
    <div className="relative w-[105px] h-[105px] md:w-[112px] md:h-[112px] xl:w-[140px] xl:h-[140px] bg-white rounded-[20px] flex items-center justify-center shrink-0">
      <CardTail mirrored={mirrored} />
      <img src={src} alt={alt} className="w-[60px] h-[60px] md:w-[48px] md:h-[48px] xl:w-[55px] xl:h-[55px] object-contain" />
    </div>
  );
}

export default function WorksIn() {
  return (
    <section className="pt-10 pb-10 md:pt-12 md:pb-12 relative">

      {/* Mobile swirl top — short segment peeking from under "Text appears" card */}
      <img
        src="/landing-assets/worksIn-swirl-mobile-top.svg"
        alt=""
        width={206}
        height={1057}
        className="md:hidden absolute pointer-events-none"
        style={{ left: 133, top: -70 }}
        aria-hidden="true"
      />

      {/* TABLET swirl — pixel-perfect 834px wrapper (like Hero md/lg). Swirl natural size 336x942, starts under HowItWorks last card and extends down through SpeedStat */}
      <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
        <img
          src="/landing-assets/works-in-swirl.svg"
          alt=""
          width={336}
          height={942}
          className="absolute md:left-[430px] md:top-[-50px] lg:left-[480px] lg:top-[-50px]"
          aria-hidden="true"
        />
      </div>

      <div className="pl-5 pr-0 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">
        <h2 className="font-['Inter',sans-serif] uppercase text-black mb-[27px] md:mb-16 text-[50px] md:text-[50px] xl:text-[100px] leading-[50px] md:leading-[50px] xl:leading-[80px] md:max-lg:ml-[calc(50%-336px)] md:max-lg:max-w-[673px] lg:max-xl:ml-[calc(50%-423px)] lg:max-xl:max-w-[847px]">
          <span className="font-normal">Works </span><span className="font-bold">in</span>
        </h2>

        {/* Mobile logos — flex-wrap, 12 icons natural flow */}
        <div className="md:hidden">
          <div className="relative z-20 flex flex-wrap gap-[10px]">
            {ICONS.map((app, i) => <AppCard key={app.alt} {...app} mirrored={i === ICONS.length - 1} />)}
          </div>
        </div>

        {/* Tablet logos — 6 + 6 symmetric grid, fixed-width centered (non-fluid) */}
        <div className="hidden md:block xl:hidden mx-auto w-fit">
          <div className="relative z-20 grid grid-cols-6 gap-5">
            {ICONS.map((app, i) => <AppCard key={app.alt} {...app} mirrored={i === ICONS.length - 1} />)}
          </div>
        </div>

        {/* Desktop logos — 7 + 5 left-aligned */}
        <div className="hidden xl:block xl:max-w-[1180px] xl:mx-auto">
          <div className="relative z-20 flex flex-wrap gap-5 mb-5">
            {DESKTOP_ROW1.map((app) => <AppCard key={app.alt} {...app} />)}
          </div>
          <div className="relative z-20 flex flex-wrap gap-5">
            {DESKTOP_ROW2.map((app, i) => <AppCard key={app.alt} {...app} mirrored={i === DESKTOP_ROW2.length - 1} />)}
          </div>
        </div>

      </div>
    </section>
  );
}
