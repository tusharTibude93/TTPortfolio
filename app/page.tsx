import Image from "next/image";
import Link from "next/link";
import personalData from "./data/personal.json";
import { 
  Code, 
  FileText, 
  FileCode, 
  Palette, 
  Atom, 
  Smartphone,
  ArrowRight, 
  Database, 
  Filter,
  Component,
  Wind,
  Circle, 
  Server, 
  GitBranch, 
  Zap,
  Package, 
  TestTube, 
  Beaker,
  Ship,
  Monitor,
  PenTool, 
  Layout,
  Eye,
  Grid,
  Phone,
  Cpu,
  Activity,
  Users, 
  Kanban
} from "lucide-react";

// Icon mapping object
const iconMap = {
  Code,
  FileText,
  FileCode,
  Palette,
  Atom,
  Smartphone,
  ArrowRight,
  Database,
  Filter,
  Component,
  Wind,
  Circle,
  Server,
  GitBranch,
  Zap,
  Package,
  TestTube,
  Beaker,
  Ship,
  Monitor,
  PenTool,
  Layout,
  Eye,
  Grid,
  Phone,
  Cpu,
  Activity,
  Users,
  Kanban
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-slate-800">
              {personalData.name}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
              <Link href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</Link>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/tushar.png"
                  alt={personalData.name}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-white shadow-xl"
                  priority
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
              {personalData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
              {personalData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 mb-6">
                {personalData.about.paragraph1}
              </p>
              <p className="text-lg text-slate-600 mb-6">
                {personalData.about.paragraph2}
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={personalData.social.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {personalData.social.github.label}
                </a>
                <a
                  href={personalData.social.gitlab.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"/>
                  </svg>
                  {personalData.social.gitlab.label}
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <ul className="space-y-3">
                {personalData.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-300">{achievement.icon}</span>
                    <span>{achievement.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Languages</h3>
              <div className="space-y-3">
                {personalData.skills.languages.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-blue-500" />
                      <span className="text-slate-600">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Frameworks</h3>
              <div className="space-y-3">
                {personalData.skills.frameworks.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-green-500" />
                      <span className="text-slate-600">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Tools</h3>
              <div className="space-y-3">
                {personalData.skills.tools.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-purple-500" />
                      <span className="text-slate-600">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Other Skills</h3>
              <div className="space-y-3">
                {personalData.skills.other.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-orange-500" />
                      <span className="text-slate-600">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalData.featuredProjects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-br ${project.gradient} p-6 rounded-xl shadow-lg ${project.borderColor}`}>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${project.tagColors.bg} ${project.tagColors.text} px-2 py-1 rounded text-sm`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <strong>Role:</strong> {project.role}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-8">{personalData.contact.title}</h2>
          <p className="text-lg text-slate-600 mb-8">
            {personalData.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalData.contact.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
            <a
              href={personalData.social.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {personalData.social.linkedin.label}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300">
            {personalData.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
