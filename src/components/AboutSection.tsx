export default function AboutSection() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        About
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight text-black dark:text-white transition-colors duration-300">
        built out of <em className="italic">frustration.</em>
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-medium transition-colors duration-300">
        <p>
          I tried every expense tracker I could find.
        </p>
        <p>
          They all wanted me to manage categories, budgets, and reports.
        </p>
        <p>
          But most days, I just wanted one thing:<br />
          to know how much money I had left.
        </p>
        <p>
          So I built Penny.
        </p>
        <p>
          A simpler way to track money without turning it into work.
        </p>
      </div>

      <div className="mt-12 flex items-center space-x-4">
        <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center font-bold transition-colors duration-300">
          P
        </div>
        <div>
          <div className="font-bold text-sm text-black dark:text-white transition-colors duration-300">the team</div>
          <div className="text-xs text-gray-400">made by people who don't like bloat.</div>
        </div>
      </div>

      <div className="mt-32 text-center text-xs font-bold tracking-widest text-gray-400 uppercase pb-8">
        be the first one in. the spot before everyone else's spot.
      </div>
    </section>
  );
}
