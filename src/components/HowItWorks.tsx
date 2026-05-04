export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-24">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
          How It Works
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-20">
          three taps. <em className="italic">that's it.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left relative z-10">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -top-10 -left-4 text-9xl font-black italic text-gray-100 -z-10 select-none">01</div>
            <h3 className="text-xl font-bold italic mb-4">money came in</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tap +. Type 2000. That's the entire flow. No category. No memo unless you want one.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -top-10 -left-4 text-9xl font-black italic text-gray-100 -z-10 select-none">02</div>
            <h3 className="text-xl font-bold italic mb-4">money went out</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Chai ₹10. Cab ₹80. Lunch ₹120. Tap - each time. Five seconds. Then close the app.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -top-10 -left-4 text-9xl font-black italic text-gray-100 -z-10 select-none">03</div>
            <h3 className="text-xl font-bold italic mb-4">look back, anytime</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Tap ↗ when you wonder where it all went. One number. Today, this week, ever.
            </p>
          </div>
        </div>
      </div>

      {/* Spacer instead of dark transition */}
      <div className="mt-32 w-full h-12"></div>
    </section>
  );
}
