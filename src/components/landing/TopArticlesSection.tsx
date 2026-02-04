import { ArrowRight, Clock, FileText } from "lucide-react";

export function TopArticlesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-blue-500 rounded-lg p-1.5 text-white">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Top Articles
            </h2>
          </div>
          <a
            href="#"
            className="text-blue-600 font-bold text-sm hover:underline"
          >
            View More
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article (Left) */}
          <div className="lg:col-span-2 group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl mb-4 h-[360px] bg-gradient-to-br from-indigo-900 to-purple-800 flex items-center justify-center border border-gray-100 shadow-sm">
              {/* Abstract Visual Placeholder */}
              <div className="w-48 h-48 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 transform rotate-12 shadow-2xl flex items-center justify-center">
                <span className="text-6xl font-black text-white/80 tracking-tighter">
                  AI
                </span>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                2026 AI Investment Guide: From Infrastructure Boom to Revenue
                Reality
              </h3>
              <div className="flex items-center gap-4 text-sm text-slate-500">
                <span>Feb 02, 2026</span>
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold">
                  Investment Ideas
                </span>
              </div>
            </div>
          </div>

          {/* Side Articles (Right) */}
          <div className="space-y-6">
            <ArticleCard
              title="Travel Industry Outlook 2026: Airlines, Hotels, and Booking Stocks Investment Guide"
              date="Jan 26, 2026"
              color="from-green-800 to-emerald-600"
            />
            <ArticleCard
              title="Cathie Wood's Golden Age Thesis: What Investors Need to Know in 2026"
              date="Jan 20, 2026"
              color="from-slate-900 to-blue-900"
            />
            <ArticleCard
              title="Walmart Joins Nasdaq-100 in 2026: What Investors Need to Know"
              date="Jan 16, 2026"
              color="from-yellow-600 to-orange-500"
            />
            <ArticleCard
              title="Apple and Google AI Partnership 2026: Everything You Need to Know About Gemini-Pro"
              date="Jan 14, 2026"
              color="from-gray-800 to-gray-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArticleCard({
  title,
  date,
  color,
}: {
  title: string;
  date: string;
  color: string;
}) {
  return (
    <div className="flex gap-4 group cursor-pointer items-start">
      <div
        className={`w-28 h-20 rounded-xl bg-gradient-to-br ${color} flex-shrink-0 shadow-sm overflow-hidden relative`}
      >
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
      </div>
      <div>
        <h4 className="font-bold text-slate-900 text-sm leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h4>
        <div className="text-xs text-slate-500">{date}</div>
      </div>
    </div>
  );
}
