export default function WaitlistPricing() {
  return (
    <section id="pricing" className="pb-32 px-4 max-w-5xl mx-auto bg-[#fafafa]">
      <div className="text-center mb-16">
        <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
          The Waitlist
        </div>
        
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-8">
          be early. and get a <em className="italic">year<br/>on us.</em>
        </h2>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We're not asking for your card. Or your bank. Just an email. In return, when Penny ships, you get <strong className="text-black font-semibold">a full year of Pro, free</strong> — locked to the same email you give us today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Left Card: The List */}
        <div className="bg-white rounded-[2rem] p-8 border-2 border-black/90 shadow-xl flex flex-col relative overflow-hidden">
          <div className="inline-flex items-center space-x-1 bg-[#23c55e]/10 text-[#23c55e] px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-6 self-start">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span>Early Access</span>
          </div>

          <h3 className="text-4xl font-extrabold italic mb-2">the list</h3>
          <div className="text-sm font-medium mb-8">
            <span className="font-bold">free</span> <span className="text-gray-400">— takes 10 seconds</span>
          </div>

          <div className="bg-[#23c55e]/10 border border-[#23c55e]/20 rounded-2xl p-4 mb-8 flex items-start space-x-3 text-sm">
            <div className="mt-0.5">🎁</div>
            <div className="text-gray-800 leading-relaxed">
              <strong className="font-bold">1 year of Pro, free</strong> — for everyone who joins before we launch. Tied to your email. No code. No catch.
            </div>
          </div>

          <ul className="space-y-4 mb-10 flex-grow text-sm font-medium text-gray-700">
            {[
              "1 full year of Pro — free, on launch day",
              "early access before the public release",
              "your spot is locked to this email forever",
              "founder badge in-app — visible to everyone",
              "one email when we ship. that's it."
            ].map((item, i) => (
              <li key={i} className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-auto">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input type="email" placeholder="your@email.com" className="flex-grow bg-gray-50 border border-gray-200 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition-colors" />
              <button className="bg-black text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
                claim my year free
              </button>
            </div>
            <div className="flex items-center justify-center space-x-1.5 text-xs text-gray-400 font-medium">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
              <span>stored locally. one email when we ship. unsubscribe anytime.</span>
            </div>
          </div>
        </div>

        {/* Right Card: Pro */}
        <div className="bg-[#f8f9fa] rounded-[2rem] p-8 border border-gray-100 flex flex-col">
          <div className="inline-flex items-center text-gray-400 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6 self-start border border-gray-200 bg-white">
            What you'll unlock
          </div>

          <h3 className="text-4xl font-extrabold italic mb-2 text-gray-300">pro</h3>
          <div className="text-sm font-medium mb-12">
            <span className="line-through text-gray-300 mr-2">₹99 / month</span>
            <span className="text-[#23c55e] font-bold">₹0 for your first year</span>
          </div>

          <ul className="space-y-5 flex-grow text-sm font-medium text-gray-400">
            {[
              "cloud backup & sync across devices",
              "multiple wallets",
              "recurring income/expense",
              "export to CSV",
              "custom categories"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 bg-white text-gray-400 border border-gray-200 text-center py-3 rounded-full text-sm font-medium">
            included free for waitlist members
          </div>
        </div>

      </div>
    </section>
  );
}
