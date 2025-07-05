import Link from "next/link";
import projectsData from "../data/projects.json";

export default function Projects() {
  const projects = projectsData;

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "from-blue-50 to-blue-100 border-blue-200",
      green: "from-green-50 to-green-100 border-green-200",
      purple: "from-purple-50 to-purple-100 border-purple-200",
      orange: "from-orange-50 to-orange-100 border-orange-200",
      indigo: "from-indigo-50 to-indigo-100 border-indigo-200",
      pink: "from-pink-50 to-pink-100 border-pink-200",
      teal: "from-teal-50 to-teal-100 border-teal-200",
      cyan: "from-cyan-50 to-cyan-100 border-cyan-200",
      amber: "from-amber-50 to-amber-100 border-amber-200",
      lime: "from-lime-50 to-lime-100 border-lime-200",
      emerald: "from-emerald-50 to-emerald-100 border-emerald-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getTechColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: "bg-blue-200 text-blue-800",
      green: "bg-green-200 text-green-800",
      purple: "bg-purple-200 text-purple-800",
      orange: "bg-orange-200 text-orange-800",
      indigo: "bg-indigo-200 text-indigo-800",
      pink: "bg-pink-200 text-pink-800",
      teal: "bg-teal-200 text-teal-800",
      cyan: "bg-cyan-200 text-cyan-800",
      amber: "bg-amber-200 text-amber-800",
      lime: "bg-lime-200 text-lime-800",
      emerald: "bg-emerald-200 text-emerald-800"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-slate-800">
              Tushar Tibude
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</Link>
              <Link href="/projects" className="text-blue-600 font-semibold">Projects</Link>
              <Link href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</Link>
              <Link href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              My Projects
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive showcase of my professional experience across various industries and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-gradient-to-br ${getColorClasses(project.color)} border p-8 rounded-2xl shadow-lg`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                      <h2 className="text-2xl font-bold text-slate-800">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="font-semibold">{project.company}</span>
                        <span>•</span>
                        <span>{project.role}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Key Responsibilities:
                      </h3>
                      <ul className="space-y-2">
                        {project.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-3 text-slate-700">
                            <span className="text-blue-500 mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Tech Stack:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className={`${getTechColorClasses(project.color)} px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {tech}
                          </span>
                        ))}
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
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300">
            © 2024 Tushar Tibude. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 