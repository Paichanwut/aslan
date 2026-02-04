import { BookOpen, BarChart3, Video } from "lucide-react";
import { ArrowRight } from "lucide-react";

export function MasterMarketsSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto bg-blue-50/50 rounded-[40px] p-8 md:p-16 text-center">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Master the Markets with AI
          </h2>
          <p className="text-lg text-slate-500">
            Free education from market experts and AI insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-transparent hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center text-center h-full">
      <div
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${iconBg} shadow-sm`}
      >
        <Icon className={`w-8 h-8 ${iconColor}`} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 px-2">
        {desc}
      </p>
      <a
        href="#"
        className="flex items-center gap-2 font-bold text-blue-600 hover:gap-3 transition-all mt-auto"
      >
        {linkText} <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}
