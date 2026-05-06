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
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28 xl:bg-transparent xl:py-0">
      <div className="xl:relative xl:py-[100px]">

        {/* xl: dark background layer — max 1580px wide, centered, sits behind content */}
        <div className="hidden xl:flex xl:absolute xl:inset-0 xl:items-stretch xl:pointer-events-none">
          <div className="xl:relative xl:w-full xl:mx-auto xl:bg-[#2f2f2f] xl:overflow-visible min-[1600px]:!max-w-[1580px] min-[1600px]:!rounded-[20px]" />
        </div>

        {/* Content — same padded container as other sections; everything (heading, supplement, swirl, cards) is positioned relative to THIS box */}
        <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto xl:relative xl:z-10">

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
            <h2 className="font-['Inter',sans-serif] uppercase text-black xl:text-[#E3DAD0] text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] xl:max-w-[677px]">
              <span className="font-normal">Whenever typing feels </span><span className="font-bold">like too much.</span>
            </h2>
            {/* Mobile/tablet supplement (will be redone per breakpoint later) */}
            <p className="mt-4 font-['Inter',sans-serif] font-medium text-[16px] leading-[28px] text-black/70 xl:hidden">
              Which is, honestly, most of the time.
            </p>
            {/* Desktop supplement — positioned per figma node 131:2853 */}
            <p
              className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-[#E3DAD0] xl:font-medium xl:origin-top-left xl:right-[150px] min-[1500px]:!right-[273px]"
              style={{ top: 141, width: 200, transform: 'rotate(-5deg)' }}
            >
              <span className="font-bold">Which is, honestly,</span><br />most of the time.
            </p>
          </div>

          {/* 4 use-case cards — constrained 1180px sub-grid centered */}
          <div className="relative z-20 grid grid-cols-2 xl:grid-cols-4 gap-5 md:max-w-[1180px] md:mx-auto">
            {CASES.map((c) => (
              <div
                key={c.label}
                className={`relative bg-[#eaeaea] p-5 md:p-6 min-h-[200px] rounded-tl-[20px] rounded-tr-[20px] ${c.mirrored ? "rounded-bl-[20px]" : "rounded-br-[20px]"}`}
              >
                <img src={c.icon} alt="" width={c.iconW} height={c.iconH} className="block mb-4" />
                <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] uppercase text-black mb-3">{c.label}</p>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-black/80">{c.body}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
