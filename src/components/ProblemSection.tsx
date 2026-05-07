export default function ProblemSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-3xl mx-auto">
      <div className="mb-6 text-xs font-bold tracking-widest text-gray-400 uppercase">
        The Problem
      </div>
      
      <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-12 leading-tight">
        Most finance apps are built for accountants. Not normal people.
      </h2>

      <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
        <p>
          You open an expense app.
It asks for budgets, categories, savings goals, bank syncs.

Before you track ₹10 chai, you’ve spent 10 minutes setting it up.

Not because you don’t care.

Because tracking money shouldn’t feel like work.
        </p>
      </div>

      <h3 className="mt-16 text-4xl md:text-5xl font-extrabold italic tracking-tight">
        That's what Penny fixes.
      </h3>
    </section>
  );
}
