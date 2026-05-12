"use client";

import { useState, useEffect, useRef } from "react";
import { LuSparkles, LuCircleHelp, LuX, LuCheck, LuUsers } from "react-icons/lu";
import PricingMicFreeAnim, { type MicAnimHandle } from "./PricingMicFreeAnim";
import PricingMicProAnim from "./PricingMicProAnim";
import PricingMicMaxAnim from "./PricingMicMaxAnim";

const FREE_FEATURES = [
  "30 minutes / day",
  "English + major languages",
  "Browser + key apps",
];

const PRO_FEATURES = [
  "Unlimited dictation",
  "All languages",
  "Every app & input field",
  "Smart context register",
  "Priority processing",
];

const MAX_FEATURES = [
  "Everything in Pro",
  "Team admin + SSO",
  "Audit logs",
  "Priority support",
];

const CUSTOM_FEATURES = [
  "Everything in Max",
  "Team admin + SSO",
  "Audit logs",
  "Volume pricing",
  "Dedicated onboarding",
  "Priority support with SLA",
];

const PRICES = {
  pro:  { monthly: "$2.99", yearly: "$2.49" },
  max:  { monthly: "$6.99", yearly: "$6.29" },
};

export default function Pricing() {
  const [customOpen, setCustomOpen] = useState(false);
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const freeAnimRef = useRef<MicAnimHandle>(null);
  const proAnimRef  = useRef<MicAnimHandle>(null);
  const maxAnimRef  = useRef<MicAnimHandle>(null);

  // Close popup on Escape
  useEffect(() => {
    if (!customOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setCustomOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [customOpen]);

  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28 relative">

      {/* TABLET — pixel-perfect 834px wrapper, figma 261:60 (swirl + supplement) */}
      <div className="hidden md:block xl:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: 834 }}>
        {/* Section-local dotted swirl — figma 261:712 */}
        <img
          src="/landing-assets/pricing-swirl.svg"
          alt=""
          width={299}
          height={170}
          className="absolute pointer-events-none"
          style={{ left: 431, top: 70, transform: 'rotate(2deg)' }}
        />
        {/* Supplement in swirl loop — figma 261:668 */}
        <p
          className="absolute origin-top-left font-['Inter',sans-serif] text-[16px] leading-[28px] uppercase text-black font-medium"
          style={{ left: 492, top: 122, width: 200, transform: 'rotate(-5deg)' }}
        >
          <span className="font-bold">Start free. </span><span>Upgrade when you&apos;re hooked.</span>
        </p>
      </div>

      <div className="px-5 md:px-[50px] xl:px-16 max-w-[1680px] xl:max-w-screen-2xl mx-auto">

        {/* Heading + supplement (in swirl loop on xl) */}
        <div className="mb-12 md:mb-16 xl:relative">

          <img
            src="/landing-assets/pricing-swirl.svg"
            alt=""
            width={354}
            height={200}
            className="hidden xl:block xl:absolute pointer-events-none xl:right-[150px] min-[1500px]:!right-[210px]"
            style={{ top: -70, transform: 'rotate(2deg)' }}
          />

          <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] md:max-lg:ml-[calc(50%-336px)] lg:max-xl:ml-[calc(50%-423px)] md:max-w-[306px] xl:max-w-[780px]">
            <span className="font-bold">Simple</span><span className="font-normal"> pricing.</span>
          </h2>

          {/* Mobile-only supplement (tablet supplement lives in 834-wrapper above) */}
          <p className="mt-4 font-['Inter',sans-serif] uppercase text-[16px] leading-[28px] text-black max-w-[193px] md:hidden">
            <span className="font-bold">Start free. </span><span className="font-medium">Upgrade when you&apos;re hooked.</span>
          </p>

          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left xl:right-[215px] min-[1500px]:!right-[278px]"
            style={{ top: 0, width: 200, transform: 'rotate(-5deg)' }}
          >
            <span className="font-bold">Start free.</span> Upgrade when you&apos;re hooked.
          </p>
        </div>

        {/* 3 price cards — constrained 1180px sub-grid centered */}
        <div className="md:max-w-[1180px] md:mx-auto">

          {/* Billing toggle — sits above cards, aligned right (under MAX area) */}
          <div className="mb-5 flex justify-center md:justify-end">
            <div className="inline-flex items-center gap-3">
              {billing === "yearly" && (
                <span className="font-['Inter',sans-serif] text-[12px] uppercase font-bold text-[#FF4122]">Save ~10%</span>
              )}
              <div className="inline-flex items-center bg-[#bfb9ac] rounded-[20px] p-[3px] h-[36px]">
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={`px-4 h-[30px] rounded-[20px] font-['Inter',sans-serif] font-bold text-[13px] uppercase transition-colors cursor-pointer ${billing === "monthly" ? "bg-white text-black" : "text-black/60 hover:text-black"}`}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  className={`px-4 h-[30px] rounded-[20px] font-['Inter',sans-serif] font-bold text-[13px] uppercase transition-colors cursor-pointer ${billing === "yearly" ? "bg-white text-black" : "text-black/60 hover:text-black"}`}
                >
                  Annually
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">

            {/* FREE */}
            <div className="relative flex-1 bg-[#fcfbfa] rounded-[20px] p-6 md:p-8 flex flex-col">
              <img src="/landing-assets/card-tail-fcfbfa.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                FREE
              </span>
              <div className="h-[103px] flex items-end mb-6">
                <PricingMicFreeAnim ref={freeAnimRef} />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-black mb-3">$0<span className="text-[20px] font-normal text-black/60"> /mo</span></p>
              <div className="flex gap-0 mb-6">
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">Always</span>
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">Free</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {FREE_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-black uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-[#817e73] shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block border border-black/70 rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-black hover:bg-black hover:text-white transition-colors" onMouseEnter={() => freeAnimRef.current?.start()} onMouseLeave={() => freeAnimRef.current?.stop()}>
                GET STARTED
              </a>
            </div>

            {/* PRO */}
            <div className="relative flex-1 bg-[#2f2f2f] rounded-[20px] p-6 md:p-8 flex flex-col mt-6 md:mt-0 md:scale-[1.04] md:z-10">
              <div className="absolute -top-[18px] inset-x-0 flex justify-center pointer-events-none">
                <span className="pointer-events-auto whitespace-nowrap inline-flex items-center gap-1.5 bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[11px] uppercase rounded-full px-4 h-[28px]">
                  <LuSparkles size={11} />
                  Most popular
                </span>
              </div>
              <img src="/landing-assets/card-tail-dark.svg" alt="" width={25} height={16} className="absolute bottom-0 -left-[10px] pointer-events-none" />
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#c3beac] text-[#FF4122] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                PRO
              </span>
              <div className="h-[103px] flex items-end mb-6">
                <PricingMicProAnim ref={proAnimRef} />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-white mb-3">{PRICES.pro[billing]}<span className="text-[20px] font-normal text-white/60"> /mo</span></p>
              <div className="flex gap-0 mb-6">
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">Per month</span>
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">Cancel anytime</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {PRO_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-[#ded8cc] uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-[#FF4122] shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block bg-[#FF4122] rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white hover:opacity-90 transition-opacity" onMouseEnter={() => proAnimRef.current?.start()} onMouseLeave={() => proAnimRef.current?.stop()}>
                14 DAYS FREE
              </a>
            </div>

            {/* MAX */}
            <div className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8 flex flex-col">
              <img src="/landing-assets/card-tail.svg" alt="" width={25} height={16} className="absolute bottom-0 -right-[10px] pointer-events-none -scale-x-100" />
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#79736d] text-[#e3dad0] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                MAX
              </span>
              <div className="h-[103px] flex items-end mb-6">
                <PricingMicMaxAnim ref={maxAnimRef} />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] text-black mb-3">{PRICES.max[billing]}<span className="text-[20px] font-normal text-black/60"> /mo</span></p>
              <div className="flex gap-0 mb-6">
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">For teams of</span>
                <span className="inline-flex items-center bg-[#e3dad0] rounded-full px-4 h-[30px] font-['Inter',sans-serif] text-[14px] text-black">5+</span>
              </div>
              <ul className="flex flex-col gap-1 mb-8 flex-1">
                {MAX_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-black uppercase font-medium">
                    <LuCheck size={18} strokeWidth={2.5} className="text-[#FF4122] shrink-0 mt-[5px]" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="block bg-white text-black rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase hover:bg-[#e3dad0] transition-colors" onMouseEnter={() => maxAnimRef.current?.start()} onMouseLeave={() => maxAnimRef.current?.stop()}>
                GET MAX
              </a>
            </div>

          </div>

          {/* Custom plan link — pill style matching the Monthly/Annually toggle, centered under MAX card */}
          <div className="mt-5 flex justify-center md:grid md:grid-cols-3 md:gap-5">
            <div className="md:col-start-3 md:flex md:justify-center">
              <button
                type="button"
                onClick={() => setCustomOpen(true)}
                className="inline-flex items-center bg-[#bfb9ac] rounded-[20px] p-[3px] h-[36px] cursor-pointer hover:bg-[#a8a39a] transition-colors"
              >
                <span className="inline-flex items-center gap-2 px-4 h-[30px] rounded-[20px] bg-white text-black font-['Inter',sans-serif] font-bold text-[13px] uppercase">
                  <LuCircleHelp size={16} />
                  Need a custom plan?
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Custom plan popup */}
      {customOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm"
          onClick={() => setCustomOpen(false)}
        >
          <div
            className="relative w-full max-w-[480px] bg-[#2f2f2f] rounded-[20px] p-6 md:p-8 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setCustomOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <LuX size={24} />
            </button>
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px] w-fit">
                <LuUsers size={16} />
                CUSTOM
              </span>
            </div>
            <p className="font-['Inter',sans-serif] font-bold text-[40px] leading-[44px] text-white mb-1">Let&apos;s talk</p>
            <p className="font-['Inter',sans-serif] text-[14px] leading-[28px] text-[#bfb9ac] mb-6">Volume pricing for teams of 10+</p>
            <ul className="flex flex-col gap-1 mb-8">
              {CUSTOM_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2 font-['Inter',sans-serif] text-[14px] leading-[28px] text-[#ded8cc] uppercase font-medium">
                  <LuCheck size={18} strokeWidth={2.5} className="text-[#FF4122] shrink-0 mt-[5px]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a href="mailto:hello@advertum.com" className="block bg-[#FF4122] rounded-[7px] h-[55px] flex items-center justify-center font-['Inter',sans-serif] font-bold text-[16px] uppercase text-white hover:opacity-90 transition-opacity">
              GET IN TOUCH
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
