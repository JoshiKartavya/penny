export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-20 px-4 flex flex-col items-center text-center max-w-4xl mx-auto">
      {/* Waitlist Pill */}
      <div className="inline-flex items-center space-x-2 bg-white border border-[#23c55e]/30 px-3 py-1 rounded-full text-xs font-semibold text-[#23c55e] mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#23c55e] animate-pulse"></span>
        <span className="tracking-wide uppercase">Open Beta • Waitlist Now Live</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight mb-6">
        your money.<br />simplified.
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
        You don't need another finance app. You need to remember the ₹80 you spent on coffee. <strong className="text-black font-semibold">That's the whole product.</strong>
      </p>

      {/* Offer Pill */}
      <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-full text-sm text-gray-600 mb-8 shadow-sm">
        <span>📅</span>
        <span>
          <strong className="text-black font-semibold">1 year of Pro — free</strong>, for everyone who joins before launch.
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-800 transition-colors w-full sm:w-auto justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span>claim my year of pro</span>
        </button>
        <button className="bg-white text-black border border-gray-200 px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-50 transition-colors shadow-sm w-full sm:w-auto justify-center">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>see how it works</span>
        </button>
      </div>
    </section>
  );
}
