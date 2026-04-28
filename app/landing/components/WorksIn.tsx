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

function AppCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] bg-white border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] flex items-center justify-center shrink-0">
      <img src={src} alt={alt} className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] object-contain" />
    </div>
  );
}

function BrowserCard() {
  return (
    <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] xl:w-[180px] xl:h-[180px] bg-white border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] flex flex-col items-center justify-center gap-2 shrink-0">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="#bfb9ac" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="4" ry="10" stroke="#bfb9ac" strokeWidth="1.5"/>
        <path d="M2 12h20M4 7h16M4 17h16" stroke="#bfb9ac" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <span className="font-['Inter',sans-serif] font-extrabold text-[11px] uppercase text-black/60 text-center leading-tight">Any<br />browser</span>
    </div>
  );
}

export default function WorksIn() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">
        <h2 className="font-['Inter',sans-serif] uppercase leading-[0.82] text-black mb-12 md:mb-16 text-[52px] md:text-[72px] xl:text-[100px]">
          <span className="font-normal">Works </span><span className="font-bold">in</span>
        </h2>
        <div className="flex flex-wrap gap-5 mb-5">
          {ROW1.map((app) => <AppCard key={app.alt} {...app} />)}
        </div>
        <div className="flex flex-wrap gap-5">
          {ROW2.map((app) => <AppCard key={app.alt} {...app} />)}
          <BrowserCard />
        </div>
      </div>
    </section>
  );
}
