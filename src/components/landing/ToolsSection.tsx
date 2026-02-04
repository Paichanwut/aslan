import Link from "next/link";
import { TOOLS_DATA } from "@/data/mockData";

export function ToolsSection() {
  return (
    <section className="py-12 px-4 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
            AI Investing Tools to Give You an Edge
          </h2>
          <p className="text-base text-slate-500">
            Make smarter trades, invest with confidence, and discover more
            winning opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TOOLS_DATA.map((tool, idx) => {
            if (tool.type === "highlight") {
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-xl border-2 border-blue-500 relative transform hover:-translate-y-1 transition-transform duration-300 flex flex-col"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-blue-50">
                    <tool.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-600 mb-2">
                    {tool.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed text-sm">
                    {tool.desc}
                  </p>
                  <ul className="space-y-2 mb-4 flex-1">
                    {tool.features!.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-600 text-[10px] font-bold">
                            ✓
                          </span>
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link
                      href={tool.href || "#"}
                      className="flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 text-sm"
                    >
                      {tool.linkText} <span className="text-base">→</span>
                    </Link>
                  </div>
                </div>
              );
            }

            return (
              <ToolCard
                key={idx}
                icon={tool.icon}
                iconColor={tool.iconColor}
                iconBg={tool.iconBg}
                title={tool.title}
                desc={tool.desc}
                features={tool.features}
                linkText={tool.linkText}
                linkColor={tool.linkColor}
                href={tool.href}
              />
            );
          })}
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
  href,
}: any) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-transparent hover:border-blue-100 hover:shadow-xl transition-all duration-300 flex flex-col group h-full">
      <div
        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${iconBg}`}
      >
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 mb-4 leading-relaxed text-xs">{desc}</p>
      <ul className="space-y-2 mb-4 flex-1">
        {features.map((item: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
            <div className="w-4 h-4 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-green-500 text-[10px] font-bold">✓</span>
            </div>
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link
          href={href || "#"}
          className={`flex items-center gap-1 font-bold hover:opacity-80 transition-opacity ${linkColor} text-sm`}
        >
          {linkText} <span className="text-base">→</span>
        </Link>
      </div>
    </div>
  );
}
