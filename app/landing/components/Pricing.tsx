"use client";

import { useState, useRef, type ReactNode } from "react";
import {
  LuSparkles, LuArrowRight,
  LuMessageSquare, LuStickyNote, LuMail,
  LuFileText, LuMic, LuFileAudio, LuInfinity,
} from "react-icons/lu";
import { SiApple } from "react-icons/si";
import { FaWindows, FaAppStoreIos, FaAndroid } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import PricingMicFreeAnim, { type MicAnimHandle } from "./PricingMicFreeAnim";
import PricingMicProAnim from "./PricingMicProAnim";
import PricingMicMaxAnim from "./PricingMicMaxAnim";
import { usePlatform, type Platform } from "@/app/hooks/usePlatform";
import { getDownloadUrl } from "@/app/utils/downloads";
import { reachGoal } from "@/app/utils/reachGoal";
import { locale } from "@/app/locales";
import DownloadAlert from "@/app/components/DownloadAlert";

// Card content: weekly word limit sits right under the price; the closing block
// is concrete use cases (who/what it's for) with small Lucide icons.
const PLAN_FREE = {
  limit: "7,000",
  unit: "words / week",
  uses: [
    { Icon: LuMessageSquare, label: "Quick chat replies" },
    { Icon: LuStickyNote, label: "Notes to self" },
    { Icon: LuMail, label: "The odd email" },
  ],
};
const PLAN_PRO = {
  limit: "30,000",
  unit: "words / week",
  uses: [
    { Icon: LuMail, label: "Long emails, all day" },
    { Icon: LuFileText, label: "Docs & reports" },
    { Icon: LuSparkles, label: "AI prompts & chats" },
  ],
};
const PLAN_MAX = {
  limit: "Unlimited",
  unit: "words / week",
  uses: [
    { Icon: LuMic, label: "All-day dictation" },
    { Icon: LuFileAudio, label: "Meeting transcripts" },
    { Icon: LuInfinity, label: "No weekly cap" },
  ],
};

const PRICES = {
  pro:  { monthly: "$2.99", yearly: "$2.49" },
  max:  { monthly: "$6.99", yearly: "$6.29" },
};

// Download button — ported from HeroDownload (auto platform detect + S3 build URL).
const dlT = locale.heroDownload;
const DL_PARAM_MAP: Record<Platform, Record<string, boolean>> = {
  "mac-arm": { mac_arm: true },
  "mac-x64": { mac_x64: true },
  windows:   { windows: true },
  unknown:   { other: true },
};
const DL_BUTTON_CONFIG: Record<Platform, { icon: ReactNode; label: string }> = {
  "mac-arm": { icon: <SiApple size={24} />, label: dlT.macArm },
  "mac-x64": { icon: <SiApple size={24} />, label: dlT.macIntel },
  windows:   { icon: <FaWindows size={24} />, label: dlT.windows },
  unknown:   { icon: <HiOutlineDownload size={24} />, label: dlT.generic },
};

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const freeAnimRef = useRef<MicAnimHandle>(null);
  const proAnimRef  = useRef<MicAnimHandle>(null);
  const maxAnimRef  = useRef<MicAnimHandle>(null);

  const { platform } = usePlatform();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);
  const downloadUrl = getDownloadUrl(platform);
  const dlConfig = DL_BUTTON_CONFIG[platform];

  function handleDownloadClick() {
    reachGoal("click_download_button", { platform: DL_PARAM_MAP[platform] });
  }

  function handleOtherPlatforms() {
    setShowAllPlatforms(true);
    setAlertVisible(true);
  }

  return (
    <section id="start-for-free" className="pt-16 pb-20 md:pt-24 md:pb-28 relative">

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
          style={{ left: 492, top: 102, width: 200, transform: 'rotate(-5deg)' }}
        >
          <span className="font-bold">Pick how much you talk. </span><span>The right plan clicks once you start.</span>
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

          <h2 className="font-['Inter',sans-serif] uppercase text-black text-[50px] leading-[50px] xl:text-[100px] xl:leading-[80px] md:max-lg:ml-[calc(50%-336px)] lg:max-xl:ml-[calc(50%-423px)] max-[499px]:max-w-[306px] md:max-xl:max-w-[306px] xl:max-w-[780px]">
            <span className="font-bold">Start </span><span className="font-normal">for free.</span>
          </h2>

          {/* Mobile-only supplement (tablet supplement lives in 834-wrapper above) */}
          <p className="mt-4 font-['Inter',sans-serif] uppercase text-[16px] leading-[28px] text-black max-[499px]:max-w-[193px] md:hidden">
            <span className="font-bold">Pick how much you talk. </span><span className="font-medium">The right plan clicks once you start.</span>
          </p>

          <p
            className="hidden xl:block xl:absolute font-['Inter',sans-serif] xl:text-[16px] xl:leading-[28px] xl:uppercase xl:text-black xl:font-medium xl:origin-top-left xl:right-[215px] min-[1500px]:!right-[278px]"
            style={{ top: -20, width: 200, transform: 'rotate(-5deg)' }}
          >
            <span className="font-bold">Pick how much you talk.</span> The right plan clicks once you start.
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
            <div
              className="relative flex-1 bg-[#fcfbfa] rounded-[20px] p-6 md:p-8 flex flex-col"
              onMouseEnter={() => freeAnimRef.current?.start()}
              onMouseLeave={() => freeAnimRef.current?.stop()}
            >
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                FREE
              </span>
              <div className="flex-1 flex flex-col min-[500px]:max-md:flex-row min-[500px]:max-md:gap-6">
                <div className="min-[500px]:max-md:basis-[45%] min-[500px]:max-md:shrink-0">
                  <div className="h-[103px] flex items-end mb-6">
                    <PricingMicFreeAnim ref={freeAnimRef} />
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] min-[500px]:max-md:leading-[40px] text-black mb-6 min-[500px]:max-md:mb-0">$0<span className="text-[20px] font-normal text-black/60"> /mo</span></p>
                </div>
                <div className="min-[500px]:max-md:basis-[55%] min-[500px]:max-md:items-end flex-1 flex">
                  <ul className="flex-1 flex flex-col gap-3 min-[500px]:max-md:pb-1.5">
                    {PLAN_FREE.uses.map(({ Icon, label }) => (
                      <li key={label} className="flex items-center gap-3 font-['Inter',sans-serif] text-[15px] leading-[24px] text-black/75">
                        <Icon size={18} className="shrink-0 text-black/40" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 md:mt-7 -mx-6 md:-mx-8 border-t-[4px] border-dotted border-black/20" />
              <p className="mt-5 md:mt-7 flex items-baseline gap-1.5">
                <span className="font-bold text-[22px] leading-none text-black">{PLAN_FREE.limit}</span>
                <span className="text-[14px] lowercase text-black/45">{PLAN_FREE.unit}</span>
              </p>
            </div>

            {/* PRO */}
            <div
              className="relative flex-1 bg-[#2f2f2f] rounded-[20px] p-6 md:p-8 flex flex-col"
              onMouseEnter={() => proAnimRef.current?.start()}
              onMouseLeave={() => proAnimRef.current?.stop()}
            >
              <div className="absolute -top-[14px] inset-x-0 flex justify-center pointer-events-none">
                <span className="pointer-events-auto whitespace-nowrap relative inline-flex items-center justify-center bg-[#FF4122] text-white font-['Inter',sans-serif] font-bold text-[11px] leading-none uppercase rounded-full px-7 h-[28px]">
                  <LuSparkles size={11} className="absolute left-3 top-1/2 -translate-y-1/2" />
                  <span className="translate-y-[1px]">Popular</span>
                </span>
              </div>
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#c3beac] text-[#FF4122] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                PRO
              </span>
              <div className="flex-1 flex flex-col min-[500px]:max-md:flex-row min-[500px]:max-md:gap-6">
                <div className="min-[500px]:max-md:basis-[45%] min-[500px]:max-md:shrink-0">
                  <div className="h-[103px] flex items-end mb-6">
                    <PricingMicProAnim ref={proAnimRef} />
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] min-[500px]:max-md:leading-[40px] text-white mb-6 min-[500px]:max-md:mb-0">{PRICES.pro[billing]}<span className="text-[20px] font-normal text-white/60"> /mo</span></p>
                </div>
                <div className="min-[500px]:max-md:basis-[55%] min-[500px]:max-md:items-end flex-1 flex">
                  <ul className="flex-1 flex flex-col gap-3 min-[500px]:max-md:pb-1.5">
                    {PLAN_PRO.uses.map(({ Icon, label }) => (
                      <li key={label} className="flex items-center gap-3 font-['Inter',sans-serif] text-[15px] leading-[24px] text-[#ded8cc]">
                        <Icon size={18} className="shrink-0 text-[#FF4122]" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 md:mt-7 -mx-6 md:-mx-8 border-t-[4px] border-dotted border-white/25" />
              <p className="mt-5 md:mt-7 flex items-baseline gap-1.5">
                <span className="font-bold text-[22px] leading-none text-white">{PLAN_PRO.limit}</span>
                <span className="text-[14px] lowercase text-white/45">{PLAN_PRO.unit}</span>
              </p>
            </div>

            {/* MAX */}
            <div
              className="relative flex-1 bg-[#bfb9ac] rounded-[20px] p-6 md:p-8 flex flex-col"
              onMouseEnter={() => maxAnimRef.current?.start()}
              onMouseLeave={() => maxAnimRef.current?.stop()}
            >
              <span className="absolute top-6 right-6 md:top-8 md:right-8 inline-flex items-center bg-[#79736d] text-[#e3dad0] font-['Inter',sans-serif] font-bold text-[16px] uppercase rounded-[20px] px-5 h-[40px]">
                MAX
              </span>
              <div className="flex-1 flex flex-col min-[500px]:max-md:flex-row min-[500px]:max-md:gap-6">
                <div className="min-[500px]:max-md:basis-[45%] min-[500px]:max-md:shrink-0">
                  <div className="h-[103px] flex items-end mb-6">
                    <PricingMicMaxAnim ref={maxAnimRef} />
                  </div>
                  <p className="font-['Inter',sans-serif] font-bold text-[55px] leading-[50px] min-[500px]:max-md:leading-[40px] text-black mb-6 min-[500px]:max-md:mb-0">{PRICES.max[billing]}<span className="text-[20px] font-normal text-black/60"> /mo</span></p>
                </div>
                <div className="min-[500px]:max-md:basis-[55%] min-[500px]:max-md:items-end flex-1 flex">
                  <ul className="flex-1 flex flex-col gap-3 min-[500px]:max-md:pb-1.5">
                    {PLAN_MAX.uses.map(({ Icon, label }) => (
                      <li key={label} className="flex items-center gap-3 font-['Inter',sans-serif] text-[15px] leading-[24px] text-black/75">
                        <Icon size={18} className="shrink-0 text-black/40" />
                        <span>{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 md:mt-7 -mx-6 md:-mx-8 border-t-[4px] border-dotted border-black/20" />
              <p className="mt-5 md:mt-7 flex items-baseline gap-1.5">
                <span className="font-bold text-[22px] leading-none text-black">{PLAN_MAX.limit}</span>
                <span className="text-[14px] lowercase text-black/50">{PLAN_MAX.unit}</span>
              </p>
            </div>

          </div>

          {/* Foundation CTA — one shared button for every plan (same intent as the header CTA),
              sitting as the base the cards rest on. No per-card purchase button. */}
          <div className="mt-5">
            {downloadUrl ? (
              <a
                href={downloadUrl}
                onClick={handleDownloadClick}
                className="group w-full bg-[#FF4122] rounded-[14px] h-[76px] md:h-[88px] flex items-center justify-center gap-2.5 text-white font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] leading-none hover:-translate-y-[2px] transition-transform duration-200"
              >
                <span className="flex items-center">{dlConfig.icon}</span>
                {dlConfig.label}
                <LuArrowRight size={22} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={handleDownloadClick}
                className="group w-full bg-[#FF4122] rounded-[14px] h-[76px] md:h-[88px] flex items-center justify-center gap-2.5 text-white font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] leading-none hover:-translate-y-[2px] transition-transform duration-200 cursor-pointer"
              >
                <span className="flex items-center">{dlConfig.icon}</span>
                {dlConfig.label}
                <LuArrowRight size={22} className="transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>
            )}
            <button
              type="button"
              onClick={handleOtherPlatforms}
              className="mt-5 w-full bg-transparent border border-black/15 rounded-[14px] h-[76px] md:h-[88px] flex items-center justify-center gap-3 text-black/45 font-['Inter',sans-serif] font-bold text-[20px] md:text-[24px] leading-none hover:border-black/30 hover:text-black/70 transition-colors duration-200 cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <SiApple size={24} />
                <FaWindows size={24} />
                <FaAppStoreIos size={24} />
                <FaAndroid size={24} />
              </span>
              {dlT.otherPlatforms}
            </button>
            <p className="mt-4 text-center font-['Inter',sans-serif] font-medium text-[13px] leading-[28px] uppercase text-black/50">
              Nothing to pay here - you start free. Pro and Max are unlocked later, inside the app.
            </p>
          </div>

          <DownloadAlert
            visible={alertVisible}
            onClose={() => setAlertVisible(false)}
            showAllPlatforms={showAllPlatforms}
          />

        </div>

      </div>
    </section>
  );
}
