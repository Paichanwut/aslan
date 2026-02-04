import { useState } from "react";
import { AGENT_DEMO_QUESTIONS } from "@/data/mockData";

export function AgentDemoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeQuestion = AGENT_DEMO_QUESTIONS[activeIndex];
  const response = activeQuestion.response || AGENT_DEMO_QUESTIONS[0].response;

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
          <div className="flex-1 space-y-3 order-2 lg:order-1">
            {AGENT_DEMO_QUESTIONS.map((q, i) => (
              <QuestionCard
                key={i}
                active={i === activeIndex}
                text={q.text}
                subtext={q.subtext}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* Right: Terminal / Analysis View */}
          <div className="flex-1 bg-slate-900 rounded-xl p-4 sm:p-5 shadow-2xl border border-slate-700 font-mono text-xs leading-relaxed overflow-hidden relative min-h-[350px] sm:min-h-[400px] order-1 lg:order-2">
            {/* Window Controls */}
            <div className="flex gap-1.5 mb-4">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            </div>

            <div
              key={activeIndex}
              className="space-y-3 text-slate-300 animate-in fade-in slide-in-from-right-4 duration-500"
            >
              <div className="flex items-center gap-2">
                <span>🤖</span>
                <span className="text-white font-bold text-sm sm:text-base">
                  {response.title}
                </span>
              </div>

              {response.agents.map((agent: any, index: number) => (
                <div
                  key={index}
                  className="animate-in fade-in slide-in-from-bottom-2 duration-500"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: "backwards",
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className={`${agent.bg} ${agent.color} px-1.5 py-0.5 rounded text-[10px] font-bold`}
                    >
                      {agent.name}
                    </span>
                    <span className="text-[10px] opacity-70">
                      {agent.status}
                    </span>
                  </div>
                  <div
                    className={`pl-2 sm:pl-4 mt-1 ${agent.color} border-l-2 border-${agent.color}/20`}
                  >
                    → {agent.output}
                  </div>
                </div>
              ))}

              {/* Consensus */}
              <div
                className="pt-3 border-t border-slate-700 mt-3 animate-in fade-in slide-in-from-bottom-2 duration-700"
                style={{
                  animationDelay: "600ms",
                  animationFillMode: "backwards",
                }}
              >
                <div className="text-yellow-400 font-bold mb-1 text-sm">
                  CONSENSUS: {response.consensus}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[10px]">
                  <span>⏱</span> Analysis completed in {12 + (activeIndex % 10)}{" "}
                  seconds
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
  onClick,
}: {
  text: string;
  subtext: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`p-4 rounded-xl border transition-all cursor-pointer ${
        active
          ? "bg-blue-50 border-blue-500 ring-1 ring-blue-500 shadow-md transform scale-[1.02]"
          : "bg-white border-gray-200 hover:border-blue-300 hover:shadow-sm hover:translate-x-1"
      }`}
    >
      <h4 className="text-base font-bold text-slate-900 mb-0.5">{text}</h4>
      <p className="text-slate-500 text-xs">{subtext}</p>
    </div>
  );
}
