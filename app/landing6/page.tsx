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

export default function Landing6() {
  return (
    <div className="bg-sand">

      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 h-15 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight">
            Sen<span className="text-red-500">say</span>
          </span>
          <a href="#" className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors">
            TRY FREE
          </a>
        </div>
      </header>

      <Hero />
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
