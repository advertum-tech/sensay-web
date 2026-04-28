import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WorksIn from "./components/WorksIn";
import SpeedStat from "./components/SpeedStat";
import UseCases from "./components/UseCases";
import AIPrompts from "./components/AIPrompts";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";

export default function LandingPage({ videoSrc }: { videoSrc: string }) {
  return (
    <div className="bg-sand">

      {/* Floating header — all breakpoints */}
      <header className="sticky top-0 z-50 mt-4 md:mt-10">
        <div className="ml-8 mr-4 md:mx-[45px] relative bg-white rounded-2xl h-[60px] md:h-[70px] flex items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-2">
            <img src="/icon.svg" alt="" width={41} height={40} />
            <span className="font-['Inter',sans-serif] text-[18px] text-black/80"><span className="font-light">Sen</span>say</span>
          </div>
          <a href="#" className="bg-white border border-black/60 text-[#FF4122] text-[14px] font-bold uppercase px-5 py-[5px] rounded-[5px]">
            TRY FREE
          </a>
          <svg
            className="absolute bottom-0 -left-[10px] pointer-events-none"
            viewBox="0 0 25 16"
            width="25"
            height="16"
            overflow="visible"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.69629 0 C9.69631 0.739 9.75028 1.465 9.85352 2.176 C9.37967 5.45 8.02879 8.021 6.52148 9.938 C4.56442 12.429 2.35535 13.807 1.49609 14.182 L0 14.834 L1.60547 15.132 C7.703 16.26 12.8784 14.623 16.4893 12.557 C18.8475 14.101 21.6668 15 24.6963 15 H25 V0 Z" />
          </svg>
        </div>
      </header>

      <Hero videoSrc={videoSrc} />
      <HowItWorks />
      <WorksIn />
      <SpeedStat />
      <UseCases />
      <AIPrompts />
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />

      <footer className="bg-white border-t border-stone-200 py-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs text-stone-500 font-medium">
            Sen<span className="text-red-500">say</span> — voice dictation that works in any app
          </span>
          <span className="text-xs text-stone-500">
            Made by <a href="https://advertum.com" className="font-medium text-stone-800">Advertum</a>
          </span>
        </div>
      </footer>

    </div>
  );
}
