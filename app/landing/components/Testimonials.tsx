const TESTIMONIALS = [
  {
    quote: '"I replied to like 12 WhatsApps during my commute. Without Sensay I would\'ve just stared at them until evening".',
    name: "Marcus T.",
    role: "Project manager",
    avatar: "/landing-assets/avatar-marcus.png",
  },
  {
    quote: '"I drafted a full client update email while walking to the coffee machine. Hit send before I even sat back down".',
    name: "James R.",
    role: "Consultant",
    avatar: "/landing-assets/avatar-james.png",
  },
  {
    quote: '"My ChatGPT answers got noticeably better. Turns out I was just being lazy with my prompts because typing them out felt like work".',
    name: "Daria S.",
    role: "Designer",
    avatar: "/landing-assets/avatar-daria.png",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">

        {/* Heading */}
        <h2 className="font-['Inter',sans-serif] uppercase leading-[0.82] text-black mb-12 md:mb-16 text-[52px] md:text-[72px] xl:text-[100px]">
          <span className="font-bold">Real people.</span><br />
          <span className="font-normal">Real messages</span>
        </h2>

        {/* Dark rounded container */}
        <div className="bg-[#2f2f2f] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="flex-1 bg-[#f0ece3] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-7 flex flex-col justify-between"
              >
                <p className="font-['Inter',sans-serif] text-[18px] text-black/80 leading-[36px] mb-6">{t.quote}</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-[50px] h-[50px] rounded-full object-cover" />
                  <div>
                    <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-black">{t.name}</p>
                    <p className="font-['Inter',sans-serif] text-[16px] text-black/60">{t.role}</p>
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
