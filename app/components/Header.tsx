import Link from "next/link";
import personalData from "../data/personal.json";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-purple-600 hover:text-purple-700 transition-colors">
            {personalData.name}
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#about" className="text-slate-600 hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#experience" className="text-slate-600 hover:text-blue-600 transition-colors">Experience</Link>
            <Link href="/#skills" className="text-slate-600 hover:text-blue-600 transition-colors">Skills</Link>
            <Link href="/#hobbies" className="text-slate-600 hover:text-blue-600 transition-colors">Hobbies</Link>
            <Link href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</Link>
            {/* <a href="#education" className="text-slate-600 hover:text-blue-600 transition-colors">Education</a> */}
            <Link href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">Resume</Link>
            <Link href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 