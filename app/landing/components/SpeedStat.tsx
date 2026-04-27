export default function SpeedStat() {
  return (
    <section className="py-24 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="sm:hidden">Speed Stat: mobile</p>
        <p className="hidden sm:block xl:hidden">Speed Stat: tablet</p>
        <p className="hidden xl:block">Speed Stat: desktop</p>
      </div>
    </section>
  );
}
