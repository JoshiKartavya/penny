export default function ProblemSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-3xl mx-auto">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        The Problem
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight">
        every tracker does <em className="italic">too much.</em>
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
        <p>
          You download the app. It asks you to set a budget. Then categories. Then it wants your bank login. Then it shows you a pie chart of the ₹3 you spent on parking.
        </p>
        
        <p>
          Two weeks later, you stop opening it. Same as the last six apps.
        </p>

        <p>
          You didn't need any of that. You just wanted to remember you spent ₹80 on coffee this morning.
        </p>
      </div>

      <h3 className="mt-16 text-4xl md:text-5xl font-extrabold italic tracking-tight">
        That's what Penny fixes.
      </h3>
    </section>
  );
}
