export function AgentDemoSection() {
  return (
    <section className="py-24 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Your AI Agents Answer in Seconds
          </h2>
          <p className="text-lg text-slate-500">
            Click any question to see your agent team in action
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left: Questions List */}
          <div className="flex-1 space-y-4">
            <QuestionCard
              active
              text="Should I buy NVDA now?"
              subtext="Get instant analysis from multiple specialized agents"
            />
            <QuestionCard
              text="What stocks should I buy today?"
              subtext="Your agents scan 11,000+ stocks in real-time"
            />
            <QuestionCard
              text="Any day trading opportunities?"
              subtext="Live setups refreshed every 30 seconds"
            />
            <QuestionCard
              text="Are there any negative news on Apple?"
              subtext="Real-time news sentiment and impact analysis"
            />
          </div>

          {/* Right: Terminal / Analysis View */}
          <div className="flex-1 bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-700 font-mono text-sm leading-relaxed overflow-hidden relative">
            {/* Window Controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-2">
                <span>🤖</span>
                <span className="text-white font-bold">
                  Your AI Agent Team is analyzing NVIDIA...
                </span>
              </div>

              {/* Step 1 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded text-xs font-bold mr-2">
                  Fundamental Agent
                </span>
                <span>Running deep analysis...</span>
                <div className="pl-4 mt-2 text-green-400">
                  → P/E ratio 65x vs sector avg 28x - Premium justified by 87%
                  YoY growth
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded text-xs font-bold mr-2">
                  Technical Agent
                </span>
                <span>Scanning price action...</span>
                <div className="pl-4 mt-2 text-green-400">
                  → RSI 72 (overbought), resistance at $950, support at $890
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-2 py-0.5 rounded text-xs font-bold mr-2">
                  Risk Agent
                </span>
                <span>Analyzing volatility...</span>
                <div className="pl-4 mt-2 text-green-400">
                  → Implied volatility elevated, consider 3-5% position max
                </div>
              </div>

              {/* Consensus */}
              <div className="pt-4 border-t border-slate-700 mt-4">
                <div className="text-yellow-400 font-bold mb-2">
                  CONSENSUS: Wait for pullback to $890-910. Set alerts.
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <span>⏱</span> Analysis completed in 14 seconds
                </div>
              </div>
            </div>

            {/* Fading glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuestionCard({
  text,
  subtext,
  active,
}: {
  text: string;
  subtext: string;
  active?: boolean;
}) {
  return (
    <div
      className={`p-6 rounded-2xl border transition-all cursor-pointer ${active ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500 shadow-md" : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"}`}
    >
      <h4 className="text-lg font-bold text-slate-900 mb-1">{text}</h4>
      <p className="text-slate-500 text-sm">{subtext}</p>
    </div>
  );
}
