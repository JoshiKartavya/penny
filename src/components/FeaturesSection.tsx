export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        Features
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-16">
        what you actually <em className="italic">get.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold italic mb-4">logs in 3 seconds</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Tap +. Type the number. Done. Faster than typing it into your notes app — and you'll actually find it later.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold italic mb-4">one number a day</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Forget graphs. Forget pie charts. You get one honest number for today: spent or earned. That's the only thing your brain wanted in the first place.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col items-start transition-transform hover:-translate-y-2 duration-300">
          <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold italic mb-4">every rupee, remembered</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Scroll back through any day. The ₹10 chai. The ₹2,000 from dad. All there, timestamped, no categories to assign, no boxes to tick.
          </p>
        </div>
      </div>
    </section>
  );
}
