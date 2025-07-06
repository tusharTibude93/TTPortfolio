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
  Kanban,
  Waves,
  Bike,
  Sprout,
  Globe,
  Heart,
  Baby,
  Fan,
  Box,
  Worm,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  Info,
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
  Kanban,
  Swim: Waves,
  Bike,
  Plant: Sprout,
  Globe,
  Heart,
  Baby,
  Box,
  Fan,
  Worm,
  GraduationCap,
  Briefcase,
  Calendar,
  MapPin,
  Clock,
  Info,
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
              {personalData.name}
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Education</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#hobbies" className="text-slate-600 hover:text-blue-600 transition-colors">Hobbies</a>
              <a href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</a>
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

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {personalData.experience.map((exp, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{exp.position}</h3>
                    <div className="flex items-center gap-4 text-slate-600 mb-3">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-500" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-slate-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{exp.employmentType}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
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

      {/* Hobbies Section */}
      <section id="hobbies" className="py-16 px-10 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Hobbies & Interests</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-3">
            {personalData.hobbies.map((hobby, index) => {
              const IconComponent = iconMap[hobby.icon as keyof typeof iconMap];
              return (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition-shadow">
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className="w-8 h-8 text-blue-600 mb-3" />
                    <h3 className="text-lg font-semibold text-slate-800">{hobby.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              Featured Work
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent mb-6 leading-tight">
              Featured Projects
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A selection of my most impactful projects showcasing diverse technologies and industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {personalData.featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="group bg-white/70 backdrop-blur-sm border border-slate-200/60 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.gradient.split(' ')[0]} opacity-5 rounded-full -translate-y-12 translate-x-12`}></div>
                
                <div className="relative">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 mb-3">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                      </svg>
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className={`${project.tagColors.bg} ${project.tagColors.text} px-3 py-1.5 rounded-xl text-sm font-medium border transition-all duration-200 hover:scale-105 hover:shadow-md`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Role */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Role:</span>
                    <span>{project.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{personalData.education.degree}</h3>
                  <p className="text-xl mb-2 opacity-90">{personalData.education.university}</p>
                  <p className="text-lg opacity-80">Graduated: {personalData.education.graduationYear}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section id="extra-info" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Additional Information</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Info className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Key Highlights</h3>
                  <ul className="space-y-3">
                    {personalData.extraInfo.map((info, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-700">{info}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{personalData.contact.title}</h2>
            <p className="text-xl text-slate-600 mb-2">{personalData.contact.subtitle}</p>
            <p className="text-lg text-slate-600">
              {personalData.contact.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Email</p>
                    <a href={`mailto:${personalData.contact.email}`} className="text-slate-800 hover:text-blue-600 transition-colors">
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Mobile</p>
                    <a href={`tel:${personalData.contact.mobile}`} className="text-slate-800 hover:text-green-600 transition-colors">
                      {personalData.contact.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Location</p>
                    <p className="text-slate-800">{personalData.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Current Role</p>
                    <p className="text-slate-800">{personalData.contact.designation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Professional Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Availability</p>
                    <p className="text-slate-800">{personalData.contact.availability}</p>
                  </div>
                </div>

            

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Timezone</p>
                    <p className="text-slate-800">{personalData.contact.timezone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Work Mode</p>
                    <p className="text-slate-800">{personalData.contact.workMode}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Notice Period</p>
                    <p className="text-slate-800">{personalData.contact.noticePeriod}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Open to Work Badge */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Open to Work</h3>
            <p className="text-lg mb-4">{personalData.contact.openToWork}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${personalData.contact.email}`}
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Send Email
              </a>
              <a
                href={personalData.social.linkedin.url}
                target="_blank"
                className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {personalData.social.linkedin.label}
              </a>
            </div>
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
