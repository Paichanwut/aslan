import { PAIN_POINTS } from "@/data/mockData";
import Link from "next/link";

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
            <Link key={idx} href={item.href} className="block group">
              <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 h-full">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${item.bg}`}
                >
                  <item.icon
                    className={`w-5 h-5 ${item.color}`}
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
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
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/intelligence">
            <button className="bg-white border border-gray-200 text-slate-900 font-bold py-3 px-6 rounded-full shadow-sm hover:shadow-md transition-all inline-flex items-center gap-2 text-sm group">
              Meet Your AI Agent Team
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
