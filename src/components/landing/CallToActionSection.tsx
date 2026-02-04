import { Check, ArrowRight } from "lucide-react";
import { CTA_FEATURES } from "@/data/mockData";

export function CallToActionSection() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
          Stop Fighting the Market Alone.
          <br />
          <span className="relative inline-block px-2">
            <span className="absolute inset-0 bg-yellow-100 -rotate-1 rounded-lg"></span>
            <span className="relative">Hire Your AI Agent Team</span>
          </span>{" "}
          Today.
        </h2>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          While you're drowning in data and losing to emotions, our AI agents
          deliver deep research across stocks, crypto, forex, and ETFs - helping
          you make confident trading and investing decisions.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
          {CTA_FEATURES.map((feature, i) => (
            <FeatureCheck key={i} text={feature} />
          ))}
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-base font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-200 hover:-translate-y-1 transition-all flex items-center gap-2 mx-auto">
          Get Started Now <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function FeatureCheck({ text }: { text: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white shadow-sm">
        <Check className="w-3.5 h-3.5" strokeWidth={3} />
      </div>
      <span className="text-slate-700 font-bold text-xs leading-tight">
        {text}
      </span>
    </div>
  );
}
