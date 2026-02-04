"use client";

import Link from "next/link";
import { ArrowLeft, Brain, Cpu, Database, Globe } from "lucide-react";

export default function IntelligencePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-gray-100 text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="font-bold text-slate-900">Back to Dashboard</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50rounded-2xl mb-6">
            <Brain className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Unlock Your{" "}
            <span className="text-blue-600">Market Intelligence</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Stop trading in the dark. Our AI agents process millions of data
            points 24/7 to give you the edge that was previously only available
            to institutional giants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Cpu,
              title: "Real-time Processing",
              desc: "Analyzing market movements as they happen, millisecond by millisecond.",
            },
            {
              icon: Globe,
              title: "Global Coverage",
              desc: "Monitoring 11,000+ stocks, crypto assets, and forex pairs across all major exchanges.",
            },
            {
              icon: Database,
              title: "Deep History",
              desc: "Cross-referencing current patterns with decades of historical financial data.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-slate-900">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to upgrade your trading?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Join thousands of traders who are already using AI to make
              smarter, faster decisions.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
