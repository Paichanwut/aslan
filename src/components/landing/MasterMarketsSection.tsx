import { BookOpen, BarChart3, Video } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function MasterMarketsSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto bg-blue-50/50 rounded-[20px] p-6 md:p-10 text-center">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
            Master the Markets with AI
          </h2>
          <p className="text-base text-slate-500">
            Free education from market experts and AI insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <EducationCard
            icon={BookOpen}
            iconColor="text-slate-700"
            iconBg="bg-blue-100"
            title="Academy"
            desc="Learning center featuring tutorials, glossary, help docs, and expert investing tips"
            linkText="Start Learning"
          />
          <EducationCard
            icon={BarChart3}
            iconColor="text-slate-700"
            iconBg="bg-green-100"
            title="Market Lens"
            desc="Actionable investment ideas and sector insights across stocks, ETFs, crypto, and forex"
            linkText="Explore Ideas"
          />
          <EducationCard
            icon={Video}
            iconColor="text-slate-700"
            iconBg="bg-yellow-100"
            title="Video Tutorials"
            desc="How-to videos for mastering AI tools, features, and smarter investing techniques"
            linkText="View Tutorials"
          />
        </div>
      </div>
    </section>
  );
}

function EducationCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  desc,
  linkText,
}: any) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-transparent hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center h-full">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${iconBg} shadow-sm`}
      >
        <Icon className={`w-6 h-6 ${iconColor}`} strokeWidth={2} />
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-1 px-2">
        {desc}
      </p>
      <a
        href="#"
        className="flex items-center gap-1.5 font-bold text-blue-600 hover:gap-2 transition-all mt-auto text-sm"
      >
        {linkText} <ArrowRight className="w-3 h-3" />
      </a>
    </div>
  );
}
