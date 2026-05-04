export default function PhoneMockup() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto mt-[-2rem] md:mt-[-4rem] z-10 pb-20">
      {/* Phone Body */}
      <div className="bg-white rounded-[2.5rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1),0_0_0_8px_white,0_0_0_10px_rgba(0,0,0,0.05)] border border-gray-100 h-[600px] relative overflow-hidden flex flex-col items-center">
        
        {/* Status Bar */}
        <div className="w-full flex justify-between items-center text-[10px] font-medium text-gray-500 mb-8">
          <span>12:56</span>
          <div className="flex space-x-1 items-center">
            <div className="flex space-x-[2px]">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
            <span>4G</span>
          </div>
        </div>

        {/* App Nav */}
        <div className="flex space-x-6 text-sm mb-16">
          <span className="text-gray-400 italic">activity</span>
          <span className="font-bold text-black">Wallet</span>
          <span className="text-gray-400 italic">Setting</span>
        </div>

        {/* Balance Area */}
        <div className="text-center mb-10">
          <div className="text-4xl font-black tracking-tight mb-1">₹1,500.00</div>
          <div className="text-sm text-gray-400 italic">your balance</div>
        </div>

        {/* Today Area */}
        <div className="text-center">
          <div className="text-xl font-bold tracking-tight mb-1">+₹1,500.00</div>
          <div className="text-xs text-gray-400 italic">today</div>
        </div>

        {/* Floating Action Buttons */}
        <div className="absolute bottom-8 right-6 flex flex-col gap-3">
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-light hover:bg-gray-800 transition-colors shadow-lg">
            +
          </button>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl font-light hover:bg-gray-800 transition-colors shadow-lg">
            -
          </button>
          <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>

        {/* Gradient fade at bottom of phone interior to simulate scroll area */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      {/* Decorative radial gradients behind phone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] -z-10 rounded-full border border-gray-100 opacity-50 scale-75 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] -z-10 rounded-full border border-gray-100 opacity-30 scale-100 pointer-events-none"></div>

      <div className="text-center mt-12 text-xs font-semibold tracking-widest text-gray-400">
        IOS • ANDROID • LAUNCHING SOON
      </div>
    </div>
  );
}
