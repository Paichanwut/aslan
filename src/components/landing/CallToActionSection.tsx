import { Check, ArrowRight } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="py-32 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
          Stop Fighting the Market Alone.
          <br />
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-yellow-100 -rotate-1 rounded-lg"></span>
            <span className="relative">Hire Your AI Agent Team</span>
          </span>{" "}
          Today.
        </h2>

        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed">
          While you're drowning in data and losing to emotions, our AI agents
          deliver deep research across stocks, crypto, forex, and ETFs - helping
          you make confident trading and investing decisions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          <FeatureCheck text="Instant intelligence" />
          <FeatureCheck text="Confident, rational decisions" />
          <FeatureCheck text="24/7 opportunity detection" />
          <FeatureCheck text="Institutional-grade insights" />
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto">
          Get Started Now <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}

function FeatureCheck({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white shadow-sm">
        <Check className="w-5 h-5" strokeWidth={3} />
      </div>
      <span className="text-slate-700 font-bold text-sm leading-tight">
        {text}
      </span>
    </div>
  );
}
