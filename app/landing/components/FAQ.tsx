const ITEMS = [
  {
    q: "What languages does it support?",
    a: "50+ languages including English, Spanish, French, German, Portuguese, Italian, Dutch, Polish, Japanese, Korean, and many more.",
  },
  {
    q: "How accurate is it?",
    a: "Extremely. Sensay uses state-of-the-art speech recognition that adapts to your accent and speaking style over time.",
  },
  {
    q: "Is my voice recorded or stored?",
    a: "No. Audio is processed in real time and never stored. Only the resulting text is handled.",
  },
  {
    q: "Does it work offline?",
    a: "Core transcription requires an internet connection. Offline mode for basic dictation is on our roadmap.",
  },
  {
    q: "Which apps does it work with?",
    a: "Any app with a text input — email, Slack, WhatsApp, Notion, browsers, coding editors, and more.",
  },
  {
    q: "What happens when my free trial ends?",
    a: "You'll automatically continue on the Free plan (30 min/day). No charges, no card required unless you upgrade.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading */}
        <h2 className="font-['Inter',sans-serif] font-bold uppercase leading-[0.82] text-black mb-12 md:mb-16 text-[52px] md:text-[72px] xl:text-[100px]">
          Simple answers.
        </h2>

        {/* FAQ list */}
        <div className="flex flex-col divide-y divide-[#817e73]">
          {ITEMS.map((item, i) => (
            <div key={i} className="py-6 md:py-8">
              <div className="flex items-start gap-4 md:gap-6">
                <span className="font-['Inter',sans-serif] font-bold text-[16px] text-[#FF4122] leading-[28px] shrink-0 mt-px">—</span>
                <div className="flex-1">
                  <p className="font-['Inter',sans-serif] text-[16px] md:text-[18px] uppercase leading-[28px] text-[#FF4122] mb-2">
                    <strong className="font-bold">{item.q.split(" ")[0]}</strong>{" "}
                    <span className="font-medium">{item.q.slice(item.q.indexOf(" ") + 1)}</span>
                  </p>
                  <p className="font-['Inter',sans-serif] text-[15px] md:text-[16px] text-black/70 leading-[26px] max-w-[760px]">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
