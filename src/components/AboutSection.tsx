export default function AboutSection() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto bg-[#fafafa]">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        About
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight">
        built out of <em className="italic">frustration.</em>
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
        <p>
          Every expense tracker I tried was built for someone I'm not. Someone who gets a thrill from charts. Who wants five sub-categories for a ₹10 chai. Who actually finishes the onboarding.
        </p>
        
        <p>
          I just wanted to know if I had enough money for dinner. So I built the smallest possible app that could answer that — and nothing else.
        </p>

        <p>
          No bank logins. No categories. No budgets that make you feel guilty by Wednesday. Just two numbers — what came in, what went out — and the calm of finally seeing them clearly.
        </p>
      </div>

      <div className="mt-12 flex items-center space-x-4">
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold">
          P
        </div>
        <div>
          <div className="font-bold text-sm">the team</div>
          <div className="text-xs text-gray-400">made by people who don't like bloat.</div>
        </div>
      </div>

      <div className="mt-32 text-center text-xs font-bold tracking-widest text-gray-400 uppercase pb-8">
        be the first one in. the spot before everyone else's spot.
      </div>
    </section>
  );
}
