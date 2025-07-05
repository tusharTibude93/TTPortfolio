'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { PDFDownloadLink, pdf } from '@react-pdf/renderer';
import ResumePDF from '../components/ResumePDF';

export default function Resume() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const personalInfo = {
    name: "Tushar Tibude",
    title: "Software Engineer - React (8+ Years)",
    email: "tushar.tibude@example.com",
    github: "https://github.com/TusharVelotio",
    gitlab: "https://gitlab.com/tushar.tibude",
    education: "Bachelor's Degree in Computer Engineering"
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SCSS"],
    frameworks: ["React", "NextJS", "Redux", "Node.js", "Angular", "jQuery", "React Query"],
    versionControl: ["Git (GitHub, Bitbucket, Gitlab)"],
    os: ["Linux", "Windows", "Mac"],
    tools: ["WebStorm", "IntelliJ IDEA", "VSCode", "Jira", "InVisionApp", "Figma", "Webpack"],
    other: ["Project Management", "Team Management"]
  };

  const achievements = [
    "Superstar of the quarter in Velotio",
    "Building Applications with React 16 and Redux",
    "Building Server-side Rendered React Apps for Beginners"
  ];

  const projects = [
    {
      title: "NetApp - Spot Connect",
      company: "NetApp",
      role: "Senior UI Engineer",
      duration: "2023 - Present",
      description: "Spot Connect allows you to build flows for your processes and scripts with a simple, powerful editor. These flows can take actions against your infrastructure or tools, and can perform logical operations such as branches and data operations within the flow.",
      responsibilities: [
        "Contributed to the development of a micro-frontend architecture for a scalable and maintainable React application",
        "Created and maintained comprehensive unit tests for various components",
        "Led the UI team by overseeing sprint planning, creating and assigning tickets",
        "Conducted daily status meetings to track project progress and address blockers",
        "Implemented security scans using Blackduck and CodeQL to identify and mitigate vulnerabilities"
      ],
      techStack: ["React", "Redux", "SCSS", "Jest", "GitHub Actions"]
    },
    {
      title: "TrilioVault",
      company: "TrilioVault",
      role: "Senior UI Engineer",
      duration: "2022 - 2023",
      description: "TrilioVault for Kubernetes is a cloud-native, application-centric data protection platform that was designed to support the scale, performance, and mobility requirements of Kubernetes container environments across any public or hybrid cloud environment.",
      responsibilities: [
        "Development of UI app architecture from scratch",
        "Developed application to Manage backups and restore & their operations using ReactJS",
        "Multi-cluster login with multiple session management in a single app",
        "Websocket integration for data syncing in the redux store",
        "Data creation as per Kubernetes API for direct communication from UI",
        "Complex data handling on the UI and peer code review"
      ],
      techStack: ["React", "Redux", "SCSS", "Highcharts", "JWT", "WebSocket"]
    },
    {
      title: "Capitalmind",
      company: "Capitalmind",
      role: "UI Lead Engineer",
      duration: "2021 - 2022",
      description: "Capitalmind provides original research, opinions, and strategies to understand, trade, and invest in the Indian financial markets. We are building a platform where users can study and analyze different mutual funds and comparison.",
      responsibilities: [
        "Developed Mutual funds web app using NextJs & React",
        "Conversion of Figma design into reality",
        "Added scalability by implementing edge caching mechanisms in Next.js",
        "Created a modular component library on top of Mantine",
        "SSR and react queries implementation",
        "Managing a UI team and ensuring code quality by reviewing each PR",
        "Discussions with the backend team for APIs and requirements"
      ],
      techStack: ["NextJS", "React", "Redux", "SCSS", "Mantine", "SSR"]
    },
    {
      title: "Looking Point - Acela Portal",
      company: "Looking Point",
      role: "UI Lead Engineer",
      duration: "2020 - 2021",
      description: "Looking Point is an IT solutions provider that understands customers' needs for collaboration, security, networking, and data center solutions. We are building the Acela portal, which manages their devices, software, etc.",
      responsibilities: [
        "Build dynamic UI components based on JSON",
        "Life-cycle management, asset management, inventory management, support, and contract renewals",
        "Document creation feature with markdown to manage SOW",
        "Created a Windows app with ElectronJS",
        "Managing UI team and running standup",
        "Code review and ensure application quality",
        "Discuss each sprint delivered with the client and try to get feedback",
        "Keeping UI libraries and their dependencies updated"
      ],
      techStack: ["React", "Redux", "SCSS", "ChartsJS", "Quill Markdown", "ElectronJS"]
    },
    {
      title: "Jobility",
      company: "Jobility",
      role: "UI Engineer",
      duration: "2019 - 2020",
      description: "Jobility is a platform for companies looking for on-demand workers and also for those workers who would like to work based on their availability. The platform consists of three separate web applications for workers, companies, and admin.",
      responsibilities: [
        "Analysis of the requirements and implementation of the core React framework for all three apps",
        "Building a React app with clean architecture for Three types of users: Super Admin, Admin & Worker",
        "Web-socket notifications, security requirements, and payments",
        "Worked on development, unit testing, and integration testing of the entire front-end code",
        "Worked closely with the backend team on designing and debugging the APIs",
        "Build reusable react components for all types of users with access rights"
      ],
      techStack: ["React", "WebSocket", "Unit Testing", "Integration Testing"]
    }
  ];

  // Function to convert oklch colors to hex
  const convertOklchToHex = (oklchColor: string): string => {
    // Common oklch to hex mappings
    const colorMap: { [key: string]: string } = {
      'oklch(0.98 0.005 240)': '#f8fafc', // slate-50
      'oklch(0.96 0.01 240)': '#f1f5f9',  // slate-100
      'oklch(0.92 0.015 240)': '#e2e8f0', // slate-200
      'oklch(0.85 0.02 240)': '#cbd5e1',  // slate-300
      'oklch(0.75 0.025 240)': '#94a3b8', // slate-400
      'oklch(0.65 0.03 240)': '#64748b',  // slate-500
      'oklch(0.55 0.035 240)': '#475569', // slate-600
      'oklch(0.45 0.04 240)': '#334155',  // slate-700
      'oklch(0.35 0.045 240)': '#1e293b', // slate-800
      'oklch(0.25 0.05 240)': '#0f172a',  // slate-900
      'oklch(0.6 0.15 240)': '#3b82f6',   // blue-500
      'oklch(0.7 0.12 240)': '#60a5fa',   // blue-400
      'oklch(0.8 0.1 240)': '#93c5fd',    // blue-300
      'oklch(0.9 0.08 240)': '#dbeafe',   // blue-100
      'oklch(0.95 0.06 240)': '#eff6ff',  // blue-50
    };
    
    return colorMap[oklchColor] || '#000000';
  };

  // Function to replace oklch colors in CSS
  const replaceOklchColors = () => {
    // Create a style element with CSS overrides
    const style = document.createElement('style');
    style.id = 'pdf-color-override';
    style.textContent = `
      /* Override all oklch colors with hex equivalents */
      * {
        color: inherit !important;
        background-color: inherit !important;
        border-color: inherit !important;
      }
      
      /* Specific color overrides for common Tailwind classes */
      .text-slate-50, .bg-slate-50 { color: #f8fafc !important; background-color: #f8fafc !important; }
      .text-slate-100, .bg-slate-100 { color: #f1f5f9 !important; background-color: #f1f5f9 !important; }
      .text-slate-200, .bg-slate-200 { color: #e2e8f0 !important; background-color: #e2e8f0 !important; }
      .text-slate-300, .bg-slate-300 { color: #cbd5e1 !important; background-color: #cbd5e1 !important; }
      .text-slate-400, .bg-slate-400 { color: #94a3b8 !important; background-color: #94a3b8 !important; }
      .text-slate-500, .bg-slate-500 { color: #64748b !important; background-color: #64748b !important; }
      .text-slate-600, .bg-slate-600 { color: #475569 !important; background-color: #475569 !important; }
      .text-slate-700, .bg-slate-700 { color: #334155 !important; background-color: #334155 !important; }
      .text-slate-800, .bg-slate-800 { color: #1e293b !important; background-color: #1e293b !important; }
      .text-slate-900, .bg-slate-900 { color: #0f172a !important; background-color: #0f172a !important; }
      
      .text-blue-50, .bg-blue-50 { color: #eff6ff !important; background-color: #eff6ff !important; }
      .text-blue-100, .bg-blue-100 { color: #dbeafe !important; background-color: #dbeafe !important; }
      .text-blue-200, .bg-blue-200 { color: #bfdbfe !important; background-color: #bfdbfe !important; }
      .text-blue-300, .bg-blue-300 { color: #93c5fd !important; background-color: #93c5fd !important; }
      .text-blue-400, .bg-blue-400 { color: #60a5fa !important; background-color: #60a5fa !important; }
      .text-blue-500, .bg-blue-500 { color: #3b82f6 !important; background-color: #3b82f6 !important; }
      .text-blue-600, .bg-blue-600 { color: #2563eb !important; background-color: #2563eb !important; }
      .text-blue-700, .bg-blue-700 { color: #1d4ed8 !important; background-color: #1d4ed8 !important; }
      .text-blue-800, .bg-blue-800 { color: #1e40af !important; background-color: #1e40af !important; }
      .text-blue-900, .bg-blue-900 { color: #1e3a8a !important; background-color: #1e3a8a !important; }
      
      .text-green-500, .bg-green-500 { color: #22c55e !important; background-color: #22c55e !important; }
      .text-green-600, .bg-green-600 { color: #16a34a !important; background-color: #16a34a !important; }
      .text-green-700, .bg-green-700 { color: #15803d !important; background-color: #15803d !important; }
      
      .text-purple-500, .bg-purple-500 { color: #a855f7 !important; background-color: #a855f7 !important; }
      .text-purple-600, .bg-purple-600 { color: #9333ea !important; background-color: #9333ea !important; }
      .text-purple-700, .bg-purple-700 { color: #7c3aed !important; background-color: #7c3aed !important; }
      
      .text-orange-500, .bg-orange-500 { color: #f97316 !important; background-color: #f97316 !important; }
      .text-orange-600, .bg-orange-600 { color: #ea580c !important; background-color: #ea580c !important; }
      .text-orange-700, .bg-orange-700 { color: #c2410c !important; background-color: #c2410c !important; }
      
      .text-indigo-500, .bg-indigo-500 { color: #6366f1 !important; background-color: #6366f1 !important; }
      .text-indigo-600, .bg-indigo-600 { color: #4f46e5 !important; background-color: #4f46e5 !important; }
      .text-indigo-700, .bg-indigo-700 { color: #4338ca !important; background-color: #4338ca !important; }
      
      .text-pink-500, .bg-pink-500 { color: #ec4899 !important; background-color: #ec4899 !important; }
      .text-pink-600, .bg-pink-600 { color: #db2777 !important; background-color: #db2777 !important; }
      .text-pink-700, .bg-pink-700 { color: #be185d !important; background-color: #be185d !important; }
      
      .text-teal-500, .bg-teal-500 { color: #14b8a6 !important; background-color: #14b8a6 !important; }
      .text-teal-600, .bg-teal-600 { color: #0d9488 !important; background-color: #0d9488 !important; }
      .text-teal-700, .bg-teal-700 { color: #0f766e !important; background-color: #0f766e !important; }
      
      .text-cyan-500, .bg-cyan-500 { color: #06b6d4 !important; background-color: #06b6d4 !important; }
      .text-cyan-600, .bg-cyan-600 { color: #0891b2 !important; background-color: #0891b2 !important; }
      .text-cyan-700, .bg-cyan-700 { color: #0e7490 !important; background-color: #0e7490 !important; }
      
      .text-amber-500, .bg-amber-500 { color: #f59e0b !important; background-color: #f59e0b !important; }
      .text-amber-600, .bg-amber-600 { color: #d97706 !important; background-color: #d97706 !important; }
      .text-amber-700, .bg-amber-700 { color: #b45309 !important; background-color: #b45309 !important; }
      
      .text-lime-500, .bg-lime-500 { color: #84cc16 !important; background-color: #84cc16 !important; }
      .text-lime-600, .bg-lime-600 { color: #65a30d !important; background-color: #65a30d !important; }
      .text-lime-700, .bg-lime-700 { color: #4d7c0f !important; background-color: #4d7c0f !important; }
      
      .text-emerald-500, .bg-emerald-500 { color: #10b981 !important; background-color: #10b981 !important; }
      .text-emerald-600, .bg-emerald-600 { color: #059669 !important; background-color: #059669 !important; }
      .text-emerald-700, .bg-emerald-700 { color: #047857 !important; background-color: #047857 !important; }
      
      /* Border color overrides */
      .border-slate-200 { border-color: #e2e8f0 !important; }
      .border-slate-300 { border-color: #cbd5e1 !important; }
      .border-blue-500 { border-color: #3b82f6 !important; }
      .border-blue-600 { border-color: #2563eb !important; }
      
      /* Gradient overrides */
      .bg-gradient-to-br { background: linear-gradient(to bottom right, #f8fafc, #eff6ff) !important; }
      .bg-gradient-to-r { background: linear-gradient(to right, #667eea, #764ba2) !important; }
      
      /* Ensure white background for PDF */
      body, #resume-content { background-color: #ffffff !important; }
    `;
    
    // Remove existing override if present
    const existingOverride = document.getElementById('pdf-color-override');
    if (existingOverride) {
      existingOverride.remove();
    }
    
    // Add the override
    document.head.appendChild(style);
  };

  const generateHTMLPDF = async () => {
    setIsGenerating(true);
    try {
      // Create a simplified version for PDF generation
      const pdfElement = createPDFVersion();
      if (!pdfElement) {
        alert('Could not find resume content');
        return;
      }
      
      // Temporarily add the PDF element to the DOM
      pdfElement.style.position = 'absolute';
      pdfElement.style.left = '-9999px';
      pdfElement.style.top = '0';
      document.body.appendChild(pdfElement);

      const canvas = await html2canvas(pdfElement, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        removeContainer: true
      });

      // Remove the temporary element
      document.body.removeChild(pdfElement);

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${personalInfo.name.replace(' ', '_')}_Resume_HTML.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Error generating PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };


  // Function to create a simplified PDF version of the resume
  const createPDFVersion = () => {
    const element = document.getElementById('resume-content');
    if (!element) return null;
    
    // Clone the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement;
    
    // Apply basic styling that works with PDF generation
    clone.style.cssText = `
      font-family: Arial, sans-serif !important;
      font-size: 12px !important;
      line-height: 1.4 !important;
      color: #000000 !important;
      background-color: #ffffff !important;
      padding: 20px !important;
      max-width: 800px !important;
      margin: 0 auto !important;
    `;
    
    // Remove any problematic classes and apply basic colors
    const allElements = clone.querySelectorAll('*');
    allElements.forEach((el) => {
      const element = el as HTMLElement;
      // Remove all Tailwind classes
      element.className = element.className.replace(/text-\w+-\d+|bg-\w+-\d+|border-\w+-\d+/g, '');
      
      // Apply basic styling
      if (element.tagName === 'H1') {
        element.style.cssText = 'font-size: 24px !important; font-weight: bold !important; color: #000000 !important; margin-bottom: 10px !important; text-align: center !important;';
      } else if (element.tagName === 'H2') {
        element.style.cssText = 'font-size: 18px !important; font-weight: bold !important; color: #000000 !important; margin-bottom: 8px !important; border-bottom: 1px solid #cccccc !important; padding-bottom: 3px !important;';
      } else if (element.tagName === 'H3') {
        element.style.cssText = 'font-size: 14px !important; font-weight: bold !important; color: #333333 !important; margin-bottom: 5px !important;';
      } else if (element.tagName === 'P') {
        element.style.cssText = 'color: #333333 !important; margin-bottom: 5px !important;';
      } else if (element.tagName === 'A') {
        element.style.cssText = 'color: #0066cc !important; text-decoration: underline !important;';
      } else if (element.tagName === 'LI') {
        element.style.cssText = 'color: #333333 !important; margin-bottom: 2px !important;';
      } else if (element.tagName === 'DIV') {
        element.style.cssText = 'color: #333333 !important; margin-bottom: 5px !important;';
      } else if (element.tagName === 'SPAN') {
        element.style.cssText = 'color: #333333 !important;';
      }
    });
    
    return clone;
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
              <Link href="/projects" className="text-slate-600 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/resume" className="text-blue-600 font-semibold">Resume</Link>
              <Link href="/#contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-4">Resume</h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={generateHTMLPDF}
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
              >
                {isGenerating ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {showPreview && (
            <div id="resume-content" className="bg-white p-8 rounded-xl shadow-lg mb-8">
              {/* Header */}
              <div className="border-b border-slate-200 pb-6 mb-6">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex justify-center md:justify-start">
                    <div className="relative">
                      <Image
                        src="/tushar.png"
                        alt="Tushar Tibude"
                        width={120}
                        height={120}
                        className="rounded-full border-4 border-slate-200 shadow-lg"
                        priority
                      />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">{personalInfo.name}</h1>
                    <p className="text-xl text-slate-600 mb-4">{personalInfo.title}</p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-600">
                      <span>📧 {personalInfo.email}</span>
                      <span>🎓 {personalInfo.education}</span>
                      <span>🔗 <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a></span>
                      <span>🔗 <a href={personalInfo.gitlab} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitLab</a></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Professional Summary</h2>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Passionate front-end developer with over 8+ years of extensive experience in large system architecture design and application development.</li>
                  <li>Proficient in client-side scripting with TypeScript, ES6, and JavaScript frameworks such as ReactJS and NextJS.</li>
                  <li>Skilled in designing and developing React-Redux app architectures from scratch.</li>
                  <li>Experienced in managing UI teams, conducting code reviews, and overseeing UI task management.</li>
                  <li>Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
                  <li>Capable of understanding business requirements and translating them into technical specifications.</li>
                </ul>
              </div>

              {/* Skills */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Skills</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">Languages:</h3>
                    <p className="text-slate-600">{skills.languages.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">Frameworks:</h3>
                    <p className="text-slate-600">{skills.frameworks.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">Version Control:</h3>
                    <p className="text-slate-600">{skills.versionControl.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">OS:</h3>
                    <p className="text-slate-600">{skills.os.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">Tools:</h3>
                    <p className="text-slate-600">{skills.tools.join(', ')}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-700 mb-2">Other Skills:</h3>
                    <p className="text-slate-600">{skills.other.join(', ')}</p>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Achievements</h2>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* Project Experience */}
              <div>
                <h2 className="text-xl font-bold text-slate-800 mb-3 border-b border-slate-200 pb-2">Project Experience</h2>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-lg font-semibold text-slate-800">{project.title}</h3>
                        <div className="text-sm text-slate-600">
                          <span className="font-medium">{project.company}</span> • {project.role} • {project.duration}
                        </div>
                      </div>
                      <p className="text-slate-700 mb-3">{project.description}</p>
                      <div className="mb-3">
                        <h4 className="font-semibold text-slate-700 mb-1">Responsibilities:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
                          {project.responsibilities.map((resp, idx) => (
                            <li key={idx}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-700 mb-1">Tech Stack:</h4>
                        <p className="text-sm text-slate-600">{project.techStack.join(', ')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
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