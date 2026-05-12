const TESTIMONIALS = [
  {
    quote: '“I replied to like 12 WhatsApps during my commute. Without Sensay I would’ve just stared at them until evening”.',
    name: "Marcus T.",
    role: "Project manager",
    avatar: "/landing-assets/avatar-marcus.png",
    mirrored: false,
  },
  {
    quote: '“My ChatGPT answers got noticeably better. Turns out I was just being lazy with my prompts because typing them out felt like work”.',
    name: "Daria S.",
    role: "Designer",
    avatar: "/landing-assets/avatar-daria.png",
    mirrored: true,
  },
  {
    quote: '“I drafted a full client update email while walking to the coffee machine. Hit send before I even sat back down”.',
    name: "James R.",
    role: "Consultant",
    avatar: "/landing-assets/avatar-james.png",
    mirrored: false,
  },
];

export default function Testimonials() {
  return (
    <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Narrow tablet squiggle 768–1023px */}
      <img
        src="/landing-assets/testimonials-swirl.svg"
        alt=""
        width={246}
        height={458}
        className="hidden md:block lg:hidden absolute z-10 pointer-events-none -scale-y-100"
        style={{ top: -150, left: '50%' }}
      />
      {/* Wide tablet squiggle 1024–1279px */}
      <img
        src="/landing-assets/testimonials-swirl.svg"
        alt=""
        width={246}
        height={458}
        className="hidden lg:block xl:hidden absolute z-10 pointer-events-none -scale-y-100"
        style={{ top: -150, left: '50%', marginLeft: -23 }}
      />
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <h2 className="font-['Inter',sans-serif] uppercase text-black mb-12 md:mb-16 text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] max-[499px]:max-w-[306px] md:max-xl:ml-[30px] md:max-xl:max-w-[372px] xl:max-w-[776px]">
          <span className="font-normal">Real people. </span>
          <span className="hidden min-[500px]:block md:hidden h-0" aria-hidden="true" />
          <span className="font-bold">Real messages.</span>
        </h2>

        {/* Constrained block (figma 1180px) — centered horizontally */}
        <div className="md:max-w-[1180px] md:mx-auto md:relative">

          {/* Desktop squiggle */}
          <img
            src="/landing-assets/testimonials-swirl.svg"
            alt=""
            width={246}
            height={458}
            className="hidden xl:block xl:absolute z-10 pointer-events-none -scale-y-100"
            style={{ left: 679, top: -460 }}
          />

          {/* 3 testimonial cards — 380x420, gap 20, no border, no dark wrapper */}
          <div className="relative z-20 flex flex-col gap-5 md:flex-row md:gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className={`md:flex-1 ${i % 2 === 0 ? 'max-[499px]:mr-[50px] min-[500px]:mr-[100px] md:mr-0' : 'max-[499px]:ml-[50px] min-[500px]:ml-[100px] md:ml-0'}`}>
                <div className="relative bg-[#f0ede3] p-7 md:p-8 md:min-h-[420px] flex flex-col justify-between rounded-[20px]">
                  {t.mirrored ? (
                    <img src="/landing-assets/card-tail-cream.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
                  ) : (
                    <img src="/landing-assets/card-tail-cream.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
                  )}
                  <p className="font-['Inter',sans-serif] text-[16px] leading-[28px] xl:text-[18px] xl:leading-[36px] text-black/80">{t.quote}</p>
                  <div className="flex items-center gap-4 mt-6">
                    <img src={t.avatar} alt={t.name} width={53} height={50} className="w-[53px] h-[50px] rounded-full object-cover shrink-0" />
                    <div>
                      <p className="font-['Inter',sans-serif] font-bold text-[16px] leading-[28px] text-black">{t.name}</p>
                      <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-black">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
