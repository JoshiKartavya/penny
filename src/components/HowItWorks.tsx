export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-24 pb-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
          How It Works
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-20 text-black dark:text-white">
          three taps. <em className="italic">that's it.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-left relative z-10">
          {/* Step 1 */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-8xl font-black italic text-gray-100 dark:text-white/5 select-none leading-none -z-10">01</div>
            <h3 className="text-xl font-bold italic mb-3 text-black dark:text-white">Add income</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Salary. Freelance. Cash.<br />
              Log it in seconds.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-8xl font-black italic text-gray-100 dark:text-white/5 select-none leading-none -z-10">02</div>
            <h3 className="text-xl font-bold italic mb-3 text-black dark:text-white">Add expense</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Spent something? Add it fast.<br />
              No categories required.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative pt-12">
            <div className="absolute top-0 left-0 text-8xl font-black italic text-gray-100 dark:text-white/5 select-none leading-none -z-10">03</div>
            <h3 className="text-xl font-bold italic mb-3 text-black dark:text-white">See what's left</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Know your balance instantly.<br />
              No math in your head.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
