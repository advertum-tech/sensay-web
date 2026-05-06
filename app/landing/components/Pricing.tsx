import { LuSparkles, LuZap, LuUsers, LuCheck } from "react-icons/lu";

export default function Pricing() {
  return (
    <section className="bg-[#E3DED3] pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading + supplement (in swirl loop on xl) */}
        <div className="mb-12 md:mb-16 xl:relative">

          {/* Section-local dotted swirl — figma 158:3202 (xl only) */}
          <img
            src="/landing-assets/pricing-swirl.svg"
            alt=""
            width={354}
            height={200}
            className="hidden xl:block xl:absolute pointer-events-none xl:right-[150px] min-[1500px]:!right-[210px]"
            style={{ top: -80, transform: 'rotate(-7deg)' }}
          />

          <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] xl:max-w-[780px]">
            <span className="font-bold">Simple</span><span className="font-normal"> pricing.</span>
          </h2>

          {/* Mobile/tablet supplement */}
          <p className="mt-4 font-['Inter',sans-serif] uppercase text-[16px] leading-[28px] text-black xl:hidden">
            <span className="font-bold">Start free. </span><span className="font-medium">Upgrade when you&apos;re hooked.</span>
          </p>

          {/* Desktop supplement — positioned per figma 158:3158 */}
          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left xl:right-[150px] min-[1500px]:!right-[278px]"
            style={{ top: 0, width: 200, transform: 'rotate(-5deg)' }}
          >
            <span className="font-bold">Start free.</span> Upgrade when you&apos;re hooked.
          </p>
        </div>

        {/* 3 price cards — constrained 1180px sub-grid centered, no border, square corners + tails */}
        <div className="md:max-w-[1180px] md:mx-auto">
          <div className="flex flex-col md:flex-row gap-5">

            {/* FREE — tail at BL, color #fcfbfa */}
            <div className="relative flex-1 bg-[#fcfbfa] rounded-[20px] p-6 md:p-8 flex flex-col">
              <img src="/landing-assets/card-tail-fcfbfa.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px] w-fit">
                  <LuZap size={16} />
                  FREE
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-black mb-4">$0</p>
              <div className="flex mb-6">
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">Always</span>
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">Free</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {["30 minutes / day", "English + major languages", "Browser + key apps"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-black uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-[#817e73] shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block border border-black/70 rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-black hover:bg-black hover:text-white transition-colors">
                GET STARTED
              </a>
            </div>

            {/* PRO — tail at BL, color #2f2f2f */}
            <div className="relative flex-1 bg-[#2f2f2f] rounded-[20px] p-6 md:p-8 flex flex-col">
              <img src="/landing-assets/card-tail-dark.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-[#c3beac] text-[#FF4122] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px] w-fit">
                  <LuSparkles size={16} />
                  PRO
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-white mb-4">$9</p>
              <div className="flex mb-6">
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">Per month</span>
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">Cancel anytime</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {["Unlimited dictation", "All languages", "Every app & input field", "Smart context register", "Priority processing"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-[#ded8cc] uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-[#FF4122] shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block bg-[#FF4122] rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white hover:opacity-90 transition-opacity">
                14 DAYS FREE
              </a>
            </div>

            {/* TEAM — tail at BR (mirrored), color #bfb9ac */}
            <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8 flex flex-col">
              <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 bg-[#79736d] text-[#e3dad0] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px] w-fit">
                  <LuUsers size={16} />
                  TEAM
                </span>
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-black mb-4">Custom</p>
              <div className="flex mb-6">
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">For teams of</span>
                <span className="inline-flex items-center px-[15px] h-[30px] rounded-[30px] bg-[#e3dad0] font-['Inter',sans-serif] text-[14px] leading-[28px] text-black">5+</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {["Everything in Pro", "Team admin + SSO", "Audit logs", "Priority support"].map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-black uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-white shrink-0 mt-[5px]" />
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

      </div>
    </section>
  );
}
