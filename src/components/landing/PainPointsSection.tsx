import { Grid, Heart, Clock, Layers } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Grid,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Drowning in Data",
    desc: "Charts, signals, news, filings—weeks of analysis with conflicting views. Result? Paralyzed by data overload.",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "FOMO & Panic Selling",
    desc: "Bought high? Sold low? You're not alone. Emotions drive 80% of retail losses. You need an objective voice.",
  },
  {
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "Always Late to the Party",
    desc: "See that spike? It already happened. While you sleep, algorithms trade. While you work, opportunities pass.",
  },
  {
    icon: Layers,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "David vs. Goliath",
    desc: "Hedge funds have AI, Bloomberg terminals, and teams of analysts. What do you have?",
  },
];

export function PainPointsSection() {
  return (
    <section className="py-12 px-4 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 max-w-3xl mx-auto leading-tight">
            The Market Never Sleeps.
            <br />
            Neither Should Your Intelligence.
          </h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">
            Every day, millions of investors face the same struggles.
            <br className="hidden md:block" />
            Deep research for investing has become essential for success in
            today's markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PAIN_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.bg}`}
              >
                <item.icon
                  className={`w-5 h-5 ${item.color}`}
                  strokeWidth={2.5}
                />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                {item.desc
                  .split(
                    /(You're not alone\.|It already happened\.|What do you have\?)/g,
                  )
                  .map((part, i) =>
                    // Simple bolding logic for key phrases
                    part.match(
                      /(You're not alone\.|It already happened\.|What do you have\?)/,
                    ) ? (
                      <strong key={i} className="text-slate-800">
                        {part}
                      </strong>
                    ) : (
                      part
                    ),
                  )}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="bg-white border border-gray-200 text-slate-900 font-bold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 text-sm">
            Meet Your AI Agent Team
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
