import { Box, Layers, Edit, Scan } from "lucide-react";

export function ToolsSection() {
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            AI Investing Tools to Give You an Edge
          </h2>
          <p className="text-lg text-slate-500">
            Make smarter trades, invest with confidence, and discover more
            winning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Smart Money */}
          <ToolCard
            icon={Box}
            iconColor="text-red-500"
            iconBg="bg-red-50"
            title="Smart Money"
            desc="Follow what insiders, analysts, Congress, and billionaires are buying before the market reacts."
            features={[
              "Cross-validate from multiple sources",
              "Track 10,000+ insiders & institutions",
              "Real-time alerts on high-confidence trades",
            ]}
            linkText="View smart money moves"
            linkColor="text-blue-600"
          />

          {/* Card 2: AI Research Agents */}
          <ToolCard
            icon={Layers}
            iconColor="text-orange-500"
            iconBg="bg-orange-50"
            title="AI Research Agents"
            desc="Your 24/7 team of specialized analysts for stocks, crypto, forex, and ETFs."
            features={[
              "7 expert agents working around the clock",
              "Institutional-grade research instantly",
              "All research saved in your library",
            ]}
            linkText="Start research"
            linkColor="text-blue-600"
          />

          {/* Card 3: InvestGPT (Highlighted) */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-blue-500 relative transform hover:-translate-y-1 transition-transform duration-300 flex flex-col">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-50">
              <Edit className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-blue-600 mb-4">InvestGPT</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Your 24/7 AI analyst that answers any market question instantly.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Real-time data analysis",
                "Technical & fundamental insights",
                "Instant intelligence—just ask",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">✓</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="#"
                className="flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700"
              >
                Start chatting <span className="text-lg">→</span>
              </a>
            </div>
          </div>

          {/* Card 4: AI Stock Picker */}
          <ToolCard
            icon={Scan}
            iconColor="text-green-500"
            iconBg="bg-green-50"
            title="AI Stock Picker"
            desc="Discover high-potential stocks daily with AI-driven strategies."
            features={[
              "AI analysis of 9,000+ U.S. stocks",
              "Daily updated stock rankings",
              "Actionable, data-driven picks",
            ]}
            linkText="Get today's picks"
            linkColor="text-blue-600"
          />
        </div>
      </div>
    </section>
  );
}

function ToolCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  desc,
  features,
  linkText,
  linkColor,
}) {
  return (
    <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col group h-full">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${iconBg}`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 mb-8 leading-relaxed text-sm">{desc}</p>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
            <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 text-xs font-bold">✓</span>
            </div>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <a
          href="#"
          className={`flex items-center gap-2 font-bold hover:opacity-80 transition-opacity ${linkColor}`}
        >
          {linkText} <span className="text-lg">→</span>
        </a>
      </div>
    </div>
  );
}
