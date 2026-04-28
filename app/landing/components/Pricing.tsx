export default function Pricing() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] max-w-[1680px] mx-auto">

        {/* Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Inter',sans-serif] font-bold uppercase leading-[0.82] text-black text-[52px] md:text-[72px] xl:text-[100px]">
            Simple pricing.
          </h2>
          <p className="mt-4 font-['Inter',sans-serif] text-[14px] md:text-[16px] text-black/70">
            Start free. Upgrade when you're hooked.
          </p>
        </div>

        {/* 3 price cards */}
        <div className="flex flex-col md:flex-row gap-5">

          {/* FREE */}
          <div className="flex-1 bg-[#fcfbfa] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-[#FF4122] text-white font-['Inter',sans-serif] font-semibold text-[16px] uppercase rounded-[20px] px-5 h-[40px] leading-[40px]">
                FREE
              </span>
            </div>
            <p className="font-['Inter',sans-serif] font-semibold text-[55px] leading-[50px] uppercase text-black mb-4">$0</p>
            <div className="flex gap-2 mb-6">
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">Always</span>
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">Free</span>
            </div>
            <ul className="flex flex-col gap-1 mb-8 flex-1">
              {["30 minutes / day", "English + major languages", "Browser + key apps"].map((f) => (
                <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] text-black uppercase font-medium">
                  <span className="text-[#817e73] font-medium">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="block border border-black/70 rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-black hover:bg-black hover:text-white transition-colors">
              GET STARTED
            </a>
          </div>

          {/* PRO */}
          <div className="flex-1 bg-[#2f2f2f] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-[#c3beac] text-[#FF4122] font-['Inter',sans-serif] font-semibold text-[16px] uppercase rounded-[20px] px-5 h-[40px] leading-[40px]">
                PRO
              </span>
            </div>
            <p className="font-['Inter',sans-serif] font-semibold text-[55px] leading-[50px] uppercase text-white mb-4">$9</p>
            <div className="flex gap-2 mb-6">
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">Per month</span>
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">Cancel anytime</span>
            </div>
            <ul className="flex flex-col gap-1 mb-8 flex-1">
              {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map((f) => (
                <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] text-[#ded8cc] uppercase font-medium">
                  <span className="text-[#FF4122] font-medium">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="block bg-[#FF4122] rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-semibold text-[16px] uppercase text-black hover:opacity-90 transition-opacity">
              14 DAYS FREE
            </a>
          </div>

          {/* TEAM */}
          <div className="flex-1 bg-[#bfb9ac] border border-[#817e73] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] p-6 md:p-8 flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-[#79736d] text-[#e3dad0] font-['Inter',sans-serif] font-semibold text-[16px] uppercase rounded-[20px] px-5 h-[40px] leading-[40px]">
                TEAM
              </span>
            </div>
            <p className="font-['Inter',sans-serif] font-semibold text-[55px] leading-[50px] text-black mb-4">Custom</p>
            <div className="flex gap-2 mb-6">
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">For teams of</span>
              <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] text-black">5+</span>
            </div>
            <ul className="flex flex-col gap-1 mb-8 flex-1">
              {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map((f) => (
                <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] text-black uppercase font-medium">
                  <span className="text-white font-medium">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="block border border-white rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white hover:bg-white hover:text-black transition-colors">
              GET IN TOUCH
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
