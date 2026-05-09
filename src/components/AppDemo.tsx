export default function AppDemo() {
  return (
    <section className="w-full pt-0 pb-32 px-4 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center text-center mb-24 relative z-10">
        <div className="text-xs font-bold tracking-widest text-gray-500 dark:text-gray-400 uppercase mb-4">
          The App
        </div>
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-300">
          Your money. <em className="italic text-gray-400 dark:text-gray-500">Without the noise.</em>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 mb-20 relative z-10">
          
          {/* Phone 1: Wallet (Left) */}
          <div className="bg-white dark:bg-[#111] rounded-[2.5rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 w-full max-w-[300px] h-[600px] relative overflow-hidden flex flex-col items-center transition-colors duration-300">
            {/* Status Bar */}
            <div className="w-full flex justify-between items-center text-[10px] font-medium text-gray-500 dark:text-gray-500 mb-8">
              <span>12:56</span>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-[2px]">
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                </div>
                <span>4G</span>
              </div>
            </div>

            {/* App Nav */}
            <div className="flex space-x-6 text-sm mb-16">
              <span className="text-gray-400 italic">activity</span>
              <span className="font-bold text-black dark:text-white">Wallet</span>
              <span className="text-gray-400 italic">Setting</span>
            </div>

            {/* Balance Area */}
            <div className="text-center mb-10">
              <div className="text-4xl font-black tracking-tight mb-1 text-black dark:text-white">₹1,500.00</div>
              <div className="text-sm text-gray-400 italic">your balance</div>
            </div>

            {/* Today Area */}
            <div className="text-center">
              <div className="text-xl font-bold tracking-tight mb-1 text-black dark:text-white">+₹1,500.00</div>
              <div className="text-xs text-gray-400 italic">today</div>
            </div>

            {/* Floating Action Buttons */}
            <div className="absolute bottom-8 right-6 flex flex-col gap-3">
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl font-light hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                +
              </button>
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-2xl font-light hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                -
              </button>
              <button className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
              </button>
            </div>
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#111] to-transparent pointer-events-none"></div>
          </div>

          {/* Phone 2: Activity (Right) */}
          <div className="bg-white dark:bg-[#111] rounded-[2.5rem] p-6 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-gray-800 w-full max-w-[300px] h-[600px] relative overflow-hidden flex flex-col items-center transition-colors duration-300">
            {/* Status Bar */}
            <div className="w-full flex justify-between items-center text-[10px] font-medium text-gray-500 dark:text-gray-500 mb-8">
              <span>12:56</span>
              <div className="flex space-x-1 items-center">
                <div className="flex space-x-[2px]">
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
                </div>
                <span>4G</span>
              </div>
            </div>

            {/* App Nav */}
            <div className="flex space-x-6 text-sm mb-12">
              <span className="font-bold text-black dark:text-white italic">activity</span>
              <span className="text-gray-400">Wallet</span>
              <span className="text-gray-400 italic">Setting</span>
            </div>

            {/* List */}
            <div className="w-full px-2 overflow-y-auto pb-24 scrollbar-hide">
              {/* Today */}
              <div className="text-xs text-gray-400 italic mb-4">today</div>
              
              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                <div>
                  <div className="font-bold text-black dark:text-white">+₹2,000.00</div>
                  <div className="text-xs text-gray-400 italic">from dad</div>
                </div>
                <div className="text-xs text-gray-400">12:42</div>
              </div>

              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 mb-8">
                <div>
                  <div className="font-bold text-black dark:text-white">-₹10.00</div>
                  <div className="text-xs text-gray-400 italic">morning chai</div>
                </div>
                <div className="text-xs text-gray-400">08:14</div>
              </div>

              {/* Yesterday */}
              <div className="text-xs text-gray-400 italic mb-4">yesterday</div>
              
              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                <div>
                  <div className="font-bold text-black dark:text-white">-₹80.00</div>
                  <div className="text-xs text-gray-400 italic">cab to office</div>
                </div>
                <div className="text-xs text-gray-400">18:22</div>
              </div>

              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                <div>
                  <div className="font-bold text-black dark:text-white">-₹120.00</div>
                  <div className="text-xs text-gray-400 italic">lunch</div>
                </div>
                <div className="text-xs text-gray-400">13:05</div>
              </div>

              <div className="flex justify-between items-start border-b border-gray-100 dark:border-gray-800 pb-4 mb-4">
                <div>
                  <div className="font-bold text-black dark:text-white">+₹3,500.00</div>
                  <div className="text-xs text-gray-400 italic">freelance</div>
                </div>
                <div className="text-xs text-gray-400">11:00</div>
              </div>
            </div>
            
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-[#111] to-transparent pointer-events-none"></div>
          </div>
        </div>

        <div className="text-center relative z-10 mt-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white transition-colors duration-300">
            Track. Check. Move on.
          </h2>
        </div>
      </div>
    </section>
  );
}
