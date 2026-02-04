import { DISCOVER_ITEMS } from "@/data/mockData";

export function DiscoverMoreSection() {
  return (
    <section className="py-10 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-orange-500 rounded-md p-1 px-2 text-white text-xs">
            <span className="font-bold">Original</span>
          </div>
          <h2 className="text-xl font-extrabold text-slate-900">
            Discover More
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DISCOVER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-pointer flex items-start gap-3"
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${item.bg}`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-0.5 text-sm">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
