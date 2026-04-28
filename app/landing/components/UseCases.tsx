const CASES = [
  {
    icon: "/landing-assets/icon-car.svg",
    label: "In the car",
    body: "Reply to messages, jot down ideas. Hands on the wheel, words in the app.",
  },
  {
    icon: "/landing-assets/icon-couch.svg",
    label: "On the couch",
    body: "Long reply, short energy. Say it instead of slowly hunting keys.",
  },
  {
    icon: "/landing-assets/icon-walk.svg",
    label: "On a walk",
    body: "The idea that arrived while moving. Say it before it's gone.",
  },
  {
    icon: "/landing-assets/icon-house.svg",
    label: "Hands full",
    body: "Cooking, coffee, whatever. Your voice is free even when your hands aren't.",
  },
];

export default function UseCases() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-black text-[52px] md:text-[72px] xl:text-[100px] xl:max-w-[677px]">
            <span className="font-normal">Whenever typing feels </span><span className="font-bold">like too much.</span>
          </h2>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70">
            Which is, honestly, most of the time.
          </p>
        </div>

        {/* 4 use-case cards */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-5">
          {CASES.map((c) => (
            <div
              key={c.label}
              className="bg-[#eaeaea] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-5 md:p-6 min-h-[200px]"
            >
              <img src={c.icon} alt="" className="w-[28px] h-[28px] object-contain mb-4" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-black mb-3">{c.label}</p>
              <p className="font-['Inter',sans-serif] text-[16px] text-black/80 leading-[28px]">{c.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
