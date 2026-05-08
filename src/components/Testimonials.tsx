export default function Testimonials() {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        People
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-16 text-black dark:text-white">
        Built for <em className="italic">real life.</em>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white dark:bg-[#111] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 flex items-center justify-center min-h-[160px] transition-colors duration-300">
          <h3 className="text-2xl font-bold italic text-center text-black dark:text-white">No budgets to maintain.</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-[#111] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 flex items-center justify-center min-h-[160px] transition-colors duration-300">
          <h3 className="text-2xl font-bold italic text-center text-black dark:text-white">No categories to organize.</h3>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-[#111] rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-gray-800 flex items-center justify-center min-h-[160px] transition-colors duration-300">
          <h3 className="text-2xl font-bold italic text-center text-black dark:text-white">No charts you'll ignore.</h3>
        </div>
      </div>
    </section>
  );
}
