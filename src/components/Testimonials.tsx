export default function Testimonials() {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto bg-[#fafafa]">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        People
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-16">
        what people are <em className="italic">saying.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between">
          <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
            "I've tried every finance app. Penny is the first one I actually use every day."
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden grayscale">
              <img src="https://i.pravatar.cc/100?img=11" alt="Arjun" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Arjun</div>
              <div className="text-xs text-gray-400">Freelance Designer</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between">
          <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
            "Finally. No budgets. No charts. Just my balance."
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden grayscale">
              <img src="https://i.pravatar.cc/100?img=5" alt="Priya" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Priya</div>
              <div className="text-xs text-gray-400">Graduate Student</div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col justify-between">
          <p className="text-gray-600 text-lg leading-relaxed italic mb-8">
            "I used to track money in a notes app. Penny is exactly what I needed."
          </p>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden grayscale">
              <img src="https://i.pravatar.cc/100?img=12" alt="Rohit" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-sm">Rohit</div>
              <div className="text-xs text-gray-400">Small Business Owner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
