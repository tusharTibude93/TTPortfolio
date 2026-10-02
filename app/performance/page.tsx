import Link from "next/link";
import Header from "../components/Header";
import { ArrowLeft, Award, Target, CheckCircle } from "lucide-react";
import performanceData from "../data/performance.json";

export default function PerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Navigation */}
      <section className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Header Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              {performanceData.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {performanceData.description}
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Target size={24} className="text-orange-500" />
                <h3 className="text-sm font-semibold text-slate-600">Modules Built</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">{performanceData.stats.modulesBuilt}</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle size={24} className="text-green-500" />
                <h3 className="text-sm font-semibold text-slate-600">Sprint Completion</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">{performanceData.stats.sprintCompletion}</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Award size={24} className="text-blue-500" />
                <h3 className="text-sm font-semibold text-slate-600">Client Award</h3>
              </div>
              <p className="text-2xl font-bold text-slate-900">{performanceData.stats.clientSatisfactionAward ? "✓" : "—"}</p>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Target size={24} className="text-purple-500" />
                <h3 className="text-sm font-semibold text-slate-600">Guides Created</h3>
              </div>
              <p className="text-3xl font-bold text-slate-900">{performanceData.stats.engineeringGuidesCreated}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {performanceData.highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-slate-200 px-8 py-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-2">
                        {highlight.category}
                      </h2>
                      <div className="inline-block">
                        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                          {highlight.rating}
                        </span>
                      </div>
                    </div>
                    <Award size={32} className="text-blue-500 flex-shrink-0" />
                  </div>
                </div>

                {/* Achievements */}
                <div className="px-8 py-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {highlight.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle size={20} className="text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900 mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">Interested in Working Together?</h2>
            <p className="mb-6 text-blue-100">
              Let's discuss how I can contribute to your team's success.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/tushar-tibude-832629a1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Connect on LinkedIn
              </a>
              <a
                href="https://github.com/tusharTibude93"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
