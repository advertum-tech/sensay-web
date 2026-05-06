const ROW1 = [
  { src: "/landing-assets/icon-gmail.png", alt: "Gmail" },
  { src: "/landing-assets/icon-slack.png", alt: "Slack" },
  { src: "/landing-assets/icon-whatsapp.png", alt: "WhatsApp" },
  { src: "/landing-assets/icon-notion.png", alt: "Notion" },
  { src: "/landing-assets/icon-outlook.png", alt: "Outlook" },
];

const ROW2 = [
  { src: "/landing-assets/icon-gdocs.png", alt: "Google Docs" },
  { src: "/landing-assets/icon-teams.png", alt: "Microsoft Teams" },
];

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
    <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] bg-white rounded-[20px] flex items-center justify-center shrink-0">
      <CardTail mirrored={mirrored} />
      <img src={src} alt={alt} className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] object-contain" />
    </div>
  );
}

function BrowserCard({ mirrored }: { mirrored?: boolean }) {
  return (
    <div className="relative w-[140px] h-[140px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] bg-white rounded-[20px] flex flex-col items-center justify-center gap-2 shrink-0">
      <CardTail mirrored={mirrored} />
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#bfb9ac" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#bfb9ac" strokeWidth="1.5"/>
        <path d="M2 12h20M4 7h16M4 17h16" stroke="#bfb9ac" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="font-['Inter',sans-serif] font-extrabold text-[12px] xl:text-[14px] leading-[13px] uppercase text-black/60 text-center">Any<br />browser</span>
    </div>
  );
}

export default function WorksIn() {
  return (
    <section className="bg-[#E3DED3] pt-10 pb-10 md:pt-12 md:pb-12">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">
        <h2 className="font-['Inter',sans-serif] uppercase text-black mb-12 md:mb-16 text-[50px] md:text-[50px] xl:text-[100px] leading-[50px] md:leading-[50px] xl:leading-[80px]">
          <span className="font-normal">Works </span><span className="font-bold">in</span>
        </h2>
        {/* Logos grid — constrained 1180px sub-grid centered */}
        <div className="md:max-w-[1180px] md:mx-auto">
          <div className="relative z-20 flex flex-wrap gap-5 mb-5">
            {ROW1.map((app) => <AppCard key={app.alt} {...app} />)}
          </div>
          <div className="relative z-20 flex flex-wrap gap-5">
            {ROW2.map((app) => <AppCard key={app.alt} {...app} />)}
            <BrowserCard mirrored />
          </div>
        </div>
      </div>
    </section>
  );
}
