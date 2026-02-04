import { AGENT_DEMO_QUESTIONS } from "@/data/mockData";

export function AgentDemoSection() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            Your AI Agents Answer in Seconds
          </h2>
          <p className="text-base text-slate-500">
            Click any question to see your agent team in action
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left: Questions List */}
          <div className="flex-1 space-y-3">
            {AGENT_DEMO_QUESTIONS.map((q, i) => (
              <QuestionCard
                key={i}
                active={q.active}
                text={q.text}
                subtext={q.subtext}
              />
            ))}
          </div>

          {/* Right: Terminal / Analysis View */}
          <div className="flex-1 bg-slate-900 rounded-xl p-5 shadow-2xl border border-slate-700 font-mono text-xs leading-relaxed overflow-hidden relative">
            {/* Window Controls */}
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>

            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-2">
                <span>🤖</span>
                <span className="text-white font-bold">
                  Your AI Agent Team is analyzing NVIDIA...
                </span>
              </div>

              {/* Step 1 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded text-[10px] font-bold mr-2">
                  Fundamental Agent
                </span>
                <span>Running deep analysis...</span>
                <div className="pl-4 mt-1 text-green-400">
                  → P/E ratio 65x vs sector avg 28x - Premium justified by 87%
                  YoY growth
                </div>
              </div>

              {/* Step 2 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded text-[10px] font-bold mr-2">
                  Technical Agent
                </span>
                <span>Scanning price action...</span>
                <div className="pl-4 mt-1 text-green-400">
                  → RSI 72 (overbought), resistance at $950, support at $890
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <span className="bg-purple-900/50 text-purple-300 px-1.5 py-0.5 rounded text-[10px] font-bold mr-2">
                  Risk Agent
                </span>
                <span>Analyzing volatility...</span>
                <div className="pl-4 mt-1 text-green-400">
                  → Implied volatility elevated, consider 3-5% position max
                </div>
              </div>

              {/* Consensus */}
              <div className="pt-3 border-t border-slate-700 mt-3">
                <div className="text-yellow-400 font-bold mb-1">
                  CONSENSUS: Wait for pullback to $890-910. Set alerts.
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[10px]">
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
      className={`p-4 rounded-xl border transition-all cursor-pointer ${active ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500 shadow-md" : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm"}`}
    >
      <h4 className="text-base font-bold text-slate-900 mb-0.5">{text}</h4>
      <p className="text-slate-500 text-xs">{subtext}</p>
    </div>
  );
}
