const TYPED_CHIPS = ["summerize", "this", "article"];

const SPOKEN_CHIPS = [
  ["Can", "you", "summerize", "this", "article"],
  ["in", "3", "bullet points,", "focusing", "on the"],
  ["practical", "implications", "for a", "non-technical"],
  ["audience", "?"],
  ["Keep", "it", "under", "100", "words"],
];

function Chip({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center px-[15px] h-[30px] rounded-[30px] text-[16px] font-['Inter',sans-serif] whitespace-nowrap ${dark ? "bg-white text-black" : "bg-white text-black"}`}>
      {children}
    </span>
  );
}

export default function AIPrompts() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] uppercase leading-[0.8] text-black text-[52px] md:text-[72px] xl:text-[100px] xl:max-w-[776px]">
            <span className="font-normal">Your AI gets smarter </span><span className="font-bold">when you<br />stop typing to it.</span>
          </h2>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70 max-w-[700px]">
            When you type a prompt, you cut corners. When you speak, you explain. Better input, better output.
          </p>
        </div>

        {/* Comparison boxes */}
        <div className="flex flex-col md:flex-row gap-5 mb-8">

          {/* Typed prompt box */}
          <div className="flex-1 bg-[#bfb9ac] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 min-h-[160px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[14px] h-[14px] rounded-full bg-white/60" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white">Typed prompt</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {TYPED_CHIPS.map((w) => (
                <Chip key={w}>{w}</Chip>
              ))}
            </div>
          </div>

          {/* Speaking with Sensay box */}
          <div className="flex-1 bg-[#FF4122] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 min-h-[160px]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[14px] h-[14px] rounded-full border-2 border-white" />
              <p className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white">Speaking with Sensay</p>
              <img src="/landing-assets/sensay-wave-sm.svg" alt="" className="ml-auto h-[14px] object-contain opacity-80" />
            </div>
            <div className="flex flex-col gap-2">
              {SPOKEN_CHIPS.map((row, i) => (
                <div key={i} className="flex flex-wrap gap-2">
                  {row.map((w) => (
                    <Chip key={w}>{w}</Chip>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer note */}
        <div className="flex items-start gap-3">
          <span className="font-['Inter',sans-serif] font-bold text-[16px] uppercase text-[#FF4122] shrink-0">For AI power users</span>
          <p className="font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/60 leading-[24px]">
            Same thought. One took 3 seconds to type. The other took 4 seconds to say — and produced a 10× better response.
          </p>
        </div>

      </div>
    </section>
  );
}
