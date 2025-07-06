import Link from "next/link";
import projectsData from "../data/projects.json";

export default function Projects() {
  const projects = projectsData;

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-500/10 to-blue-600/5 border-blue-200/50 hover:border-blue-300/70",
      green: "from-green-500/10 to-green-600/5 border-green-200/50 hover:border-green-300/70",
      purple: "from-purple-500/10 to-purple-600/5 border-purple-200/50 hover:border-purple-300/70",
      orange: "from-orange-500/10 to-orange-600/5 border-orange-200/50 hover:border-orange-300/70",
      indigo: "from-indigo-500/10 to-indigo-600/5 border-indigo-200/50 hover:border-indigo-300/70",
      pink: "from-pink-500/10 to-pink-600/5 border-pink-200/50 hover:border-pink-300/70",
      teal: "from-teal-500/10 to-teal-600/5 border-teal-200/50 hover:border-teal-300/70",
      cyan: "from-cyan-500/10 to-cyan-600/5 border-cyan-200/50 hover:border-cyan-300/70",
      amber: "from-amber-500/10 to-amber-600/5 border-amber-200/50 hover:border-amber-300/70",
      lime: "from-lime-500/10 to-lime-600/5 border-lime-200/50 hover:border-lime-300/70",
      emerald: "from-emerald-500/10 to-emerald-600/5 border-emerald-200/50 hover:border-emerald-300/70"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getTechColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200",
      green: "bg-green-100 text-green-700 border-green-200 hover:bg-green-200",
      purple: "bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200",
      orange: "bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200",
      indigo: "bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-200",
      pink: "bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200",
      teal: "bg-teal-100 text-teal-700 border-teal-200 hover:bg-teal-200",
      cyan: "bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200",
      amber: "bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-200",
      lime: "bg-lime-100 text-lime-700 border-lime-200 hover:bg-lime-200",
      emerald: "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getAccentColor = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600",
      orange: "text-orange-600",
      indigo: "text-indigo-600",
      pink: "text-pink-600",
      teal: "text-teal-600",
      cyan: "text-cyan-600",
      amber: "text-amber-600",
      lime: "text-lime-600",
      emerald: "text-emerald-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-slate-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
              Tushar Tibude
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</Link>
              <Link href="/#skills" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Skills</Link>
              <Link href="/projects" className="text-blue-600 font-semibold relative">
                Projects
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
              </Link>
              <Link href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Resume</Link>
              <Link href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Professional Experience
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of my professional experience across various industries and cutting-edge technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white/70 backdrop-blur-sm border ${getColorClasses(project.color)} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background accent */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColorClasses(project.color).split(' ')[0]} opacity-5 rounded-full -translate-y-16 translate-x-16`}></div>
                
                <div className="relative">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                          <h2 className="text-3xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                            {project.title}
                          </h2>
                          {/* <div className="flex items-center gap-1">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span className="text-sm text-green-600 font-medium">Active</span>
                          </div> */}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-4">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                            <span className="font-semibold">{project.company}</span>
                          </div>
                          <span className="text-slate-300">•</span>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{project.role}</span>
                          </div>
                          <span className="text-slate-300">•</span>
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Description */}
                      <div className="mb-8">
                        <p className="text-slate-700 leading-relaxed text-lg">
                          {project.description}
                        </p>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Key Responsibilities
                        </h3>
                        <ul className="space-y-3">
                          {project.responsibilities.map((responsibility, index) => (
                            <li key={index} className="flex items-start gap-3 text-slate-700 group/item">
                              <span className={`${getAccentColor(project.color)} mt-1.5 text-lg font-bold group-hover/item:scale-110 transition-transform duration-200`}>•</span>
                              <span className="leading-relaxed">{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, index) => (
                            <span
                              key={index}
                              className={`${getTechColorClasses(project.color)} px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="text-xl font-semibold">Tushar Tibude</span>
          </div>
          <p className="text-slate-300">
            © 2024 Tushar Tibude. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 