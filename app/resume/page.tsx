"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import personalData from "../data/personal.json";
import projectsData from "../data/projects.json";
import Header from "../components/Header";
import FloatingDownloadButton from "../components/FloatingDownloadButton";

export default function Resume() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(true);
  const [personalInfo, setPersonalInfo] = useState(personalData);
  const [projects, setProjects] = useState(projectsData);

  // Function to convert oklch colors to hex
  const convertOklchToHex = (oklchColor: string): string => {
    // Common oklch to hex mappings
    const colorMap: { [key: string]: string } = {
      "oklch(0.98 0.005 240)": "#f8fafc", // slate-50
      "oklch(0.96 0.01 240)": "#f1f5f9", // slate-100
      "oklch(0.92 0.015 240)": "#e2e8f0", // slate-200
      "oklch(0.85 0.02 240)": "#cbd5e1", // slate-300
      "oklch(0.75 0.025 240)": "#94a3b8", // slate-400
      "oklch(0.65 0.03 240)": "#64748b", // slate-500
      "oklch(0.55 0.035 240)": "#475569", // slate-600
      "oklch(0.45 0.04 240)": "#334155", // slate-700
      "oklch(0.35 0.045 240)": "#1e293b", // slate-800
      "oklch(0.25 0.05 240)": "#0f172a", // slate-900
      "oklch(0.6 0.15 240)": "#3b82f6", // blue-500
      "oklch(0.7 0.12 240)": "#60a5fa", // blue-400
      "oklch(0.8 0.1 240)": "#93c5fd", // blue-300
      "oklch(0.9 0.08 240)": "#dbeafe", // blue-100
      "oklch(0.95 0.06 240)": "#eff6ff", // blue-50
    };

    return colorMap[oklchColor] || "#000000";
  };

  // Function to replace oklch colors in CSS
  const replaceOklchColors = () => {
    // Create a style element with CSS overrides
    const style = document.createElement("style");
    style.id = "pdf-color-override";
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
      .text-orange-700, .text-orange-700 { color: #c2410c !important; background-color: #c2410c !important; }
      
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
    const existingOverride = document.getElementById("pdf-color-override");
    if (existingOverride) {
      existingOverride.remove();
    }

    // Add the override
    document.head.appendChild(style);
  };

  // Helper function to get skill names
  const getSkillNames = (skills: any[]) =>
    skills.map((skill) => skill.name).join(", ");

  // Function to open resume in new tab
  const openResumeInNewTab = () => {
    const resumeContent = document.getElementById("resume-content");
    if (!resumeContent) {
      alert("Could not find resume content");
      return;
    }

    // Create a new window with just the resume content
    const newWindow = window.open(
      "",
      "_blank",
      "width=1200,height=800,scrollbars=yes"
    );
    if (!newWindow) {
      alert("Please allow popups to open resume in new tab");
      return;
    }

    // Clone the resume content
    const clonedContent = resumeContent.cloneNode(true) as HTMLElement;

    // Write the HTML to the new window with comprehensive CSS
    newWindow.document.write(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${personalInfo.name} - Resume</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f8fafc;
            line-height: 1.6;
            color: #1f2937;
          }
          
          .resume-container {
            background-color: #ffffff;
            margin: 20px auto;
            max-width: 1000px;
            border-radius: 12px;
            overflow: hidden;
          }
          
          /* Grid and Flexbox Layouts */
          .grid {
            display: grid;
            gap: 2rem;
          }

          .grid-cols-1 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }

          @media (min-width: 768px) {
            .md\\:grid-cols-2 {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
          }

          .flex {
            display: flex;
          }

          .flex-col {
            flex-direction: column;
          }

          .flex-row {
            flex-direction: row;
          }

          .flex-wrap {
            flex-wrap: wrap;
          }

          /* Flex Alignment */
          .items-start {
            align-items: flex-start;
          }

          .items-center {
            align-items: center;
          }

          .items-end {
            align-items: flex-end;
          }

          .justify-start {
            justify-content: flex-start;
          }

          .justify-center {
            justify-content: center;
          }

          .justify-end {
            justify-content: flex-end;
          }

          .justify-between {
            justify-content: space-between;
          }

          /* Spacing Adjustments */
          .p-3 {
            padding: 0.75rem;
          }

          .px-0 {
            padding-left: 0;
            padding-right: 0;
          }

          .py-1 {
            padding-top: 0.25rem;
            padding-bottom: 0.25rem;
          }

          .my-0 {
            margin-top: 0;
            margin-bottom: 0;
          }

          /* Update header section */
          h2.flex {
            display: flex;
          }

          h2.items-start {
            align-items: flex-start;
          }

          h2.items-center {
            align-items: center;
          }

          /* Specific section adjustments */
          .achievement-header {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .achievement-header svg {
            margin-top: 0.25rem;
          }

          /* Grid gap adjustments */
          .gap-2 {
            gap: 0.5rem;
          }
                      .gap-4 {
            gap: 1rem;
          }

          .gap-8 {
            gap: 2rem;
          }

          /* Margin adjustments */
          .mb-5 {
            margin-bottom: 1.25rem;
          }

          .mt-1 {
            margin-top: 0.25rem;
          }

          /* Icon size adjustments */
          .w-2 {
            width: 0.5rem !important;
          }

          .h-2 {
            height: 0.5rem !important;
          }

          svg.w-2, svg.h-2 {
            width: 0.5rem !important;
            height: 0.5rem !important;
          }

          /* Spacing */
          .mb-1 { margin-bottom: 0.25rem; }
          .mb-2 { margin-bottom: 0.5rem; }
          .mb-3 { margin-bottom: 0.75rem; }
          .mb-4 { margin-bottom: 1rem; }
          .mb-6 { margin-bottom: 1.5rem; }
          .mb-8 { margin-bottom: 2rem; }
          .mb-10 { margin-bottom: 2.5rem; }

          .mt-1 { margin-top: 0.25rem; }
          .mt-2 { margin-top: 0.5rem; }
          .mt-4 { margin-top: 1rem; }

          .p-2 { padding: 0.5rem; }
          .p-3 { padding: 0.75rem; }
          .p-4 { padding: 1rem; }
          .p-6 { padding: 1.5rem; }
          .p-8 { padding: 2rem; }

          .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
          .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }

          .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }

          /* Typography */
          h1 {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.5rem;
            line-height: 1.2;
          }

          h2 {
            font-size: 1.5rem;
            font-weight: 600;
            color: #1f2937;
            margin: 1.25rem 0 1rem 0;
            padding-bottom: 0.5rem;
            border-bottom: 2px solid #3b82f6;
          }

          h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: #374151;
            margin: 0rem 0 0.5rem 0;
          }

          h4 {
            font-size: 1.125rem;
            font-weight: 600;
            color: #4b5563;
            margin: 0.75rem 0 0.5rem 0;
          }

          p {
            margin-bottom: 0rem;
            color: #4b5563;
            line-height: 1.6;
          }

          /* Links */
          a {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
          }

          a:hover {
            color: #2563eb;
            text-decoration: underline;
          }

          /* Lists */
          ul, ol {
            margin: 1rem 0;
            padding-left: 1.5rem;
          }

          li {
            margin-bottom: 0.5rem;
            color: #4b5563;
          }

          /* Cards and Sections */
          .card {
            background: #f8fafc;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1rem;
            border: 1px solid rgba(226, 232, 240, 0.5);
            transition: all 0.3s;
          }

          .card:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            transform: translateY(-2px);
          }

          /* Project Cards */
          .project-card {
            background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
            border-left: 4px solid #3b82f6;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
          }

          /* Tech Stack Tags */
          .tech-tag {
            background: #dbeafe;
            color: #1d4ed8;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            display: inline-block;
            margin: 0.25rem;
          }

          /* Achievement Cards */
          .achievement-card {
            background: linear-gradient(to right, #fefce8, #fef9c3);
            border: 1px solid #fde047;
            border-radius: 0.75rem;
            padding: 1rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;  /* Reduced gap */
          }

          .achievement-card span:first-child {
            font-size: 1.5rem;
            line-height: 1;
            flex-shrink: 0;
            flex-basis: auto;  /* Let content determine width */
            margin-top: 0.25rem;
          }

          .achievement-card span:last-child {
            flex: 1;
            text-align: left;
            color: #374151;
            line-height: 1.5;
            min-width: 0;  /* Allow text to wrap */
          }

          /* Achievement grid */
          .grid.gap-4 {
            display: grid;
            gap: 1rem;
          }

          /* Achievement items alignment */
          .flex.items-start {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;  /* Reduced gap */
          }

          .flex.items-start > svg {
            flex-shrink: 0;
            flex-basis: auto;  /* Let content determine width */
            margin-top: 0.25rem;
            width: 1.5rem;  /* Fixed width */
            height: 1.5rem;  /* Fixed height */
          }

          .flex.items-start > span {
            flex: 1;
            text-align: left;
            min-width: 0;  /* Allow text to wrap */
          }

          /* Achievement text styles */
          .text-slate-700.leading-relaxed {
            text-align: left;
            line-height: 1.6;
            margin-left: 0;  /* Remove any left margin */
          }

          /* Achievement section header */
          h2.flex.items-start {
            gap: 0.5rem;  /* Reduced gap */
          }

          h2.flex.items-start > svg {
            flex-shrink: 0;
            margin-top: 0.25rem;
          }

          /* Skill Sections */
          .skill-section {
            background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
            border: 1px solid #e2e8f0;
            border-radius: 0.75rem;
            padding: 1.5rem;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .resume-container {
              margin: 10px;
              padding: 20px;
            }

            h1 {
              font-size: 1.875rem;
            }

            h2 {
              font-size: 1.25rem;
            }

            .flex-col-mobile {
              flex-direction: column;
            }

            .grid-cols-1-mobile {
              grid-template-columns: 1fr;
            }
          }

          /* Print Styles */
          @media print {
            body { 
              background: white !important;
              color: black !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            .resume-container { 
              box-shadow: none !important;
              margin: 0 !important;
              padding: 20px !important;
              border: none !important;
              background: white !important;
            }

            #resume-content {
              border: none !important;
              padding: 0 !important;
              margin: 0 !important;
              background: white !important;
            }

            .no-print {
              display: none !important;
            }

            /* Force page breaks */
            .page-break {
              page-break-after: always !important;
              break-after: always !important;
              height: 0 !important;
              margin: 0 !important;
              padding: 0 !important;
            }

            /* Prevent unwanted breaks */
            h1, h2, h3, 
            .group,
            .skill-section,
            .achievement-card {
              page-break-inside: avoid !important;
              break-inside: avoid !important;
            }

            // /* Border styles */
            // .border,
            // [class*="border"] {
            //   border-color: #e5e5e5 !important;
            //   border-width: 0.5pt !important;
            //   border-style: solid !important;
            // }

            // .border-b,
            // [class*="border-b"] {
            //   border-bottom-color: #e5e5e5 !important;
            //   border-bottom-width: 0.5pt !important;
            //   border-bottom-style: solid !important;
            // }

            /* Project card specific styles */
            .group {
              border: 0.5pt solid #e5e5e5 !important;
              border-left: 2pt solid #bfdbfe !important;
              margin-bottom: 1em !important;
              padding: 1em !important;
              background: white !important;
            }

            /* Remove shadows and effects */
            * {
              box-shadow: none !important;
              text-shadow: none !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }

            /* Ensure text contrast */
            p, span, div {
              color: black !important;
            }

            h1, h2, h3, h4 {
              color: black !important;
            }

            /* Background colors */
            [class*="bg-gradient-"],
            [class*="bg-slate-"],
            [class*="bg-blue-"],
            [class*="bg-white"] {
              background: white !important;
            }

            /* Adjust spacing */
            .mb-10 {
              margin-bottom: 1em !important;
            }

            .gap-4 {
              gap: 0.5em !important;
            }

            /* Ensure SVG icons print */
            svg {
              fill: currentColor !important;
              stroke: currentColor !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
          }

          /* Utility Classes */
          .text-center { text-align: center; }
          .font-bold { font-weight: 700; }
          .font-semibold { font-weight: 600; }
          .text-sm { font-size: 0.875rem; }
          .text-lg { font-size: 1.125rem; }
          .text-xl { font-size: 1.25rem; }
          .text-2xl { font-size: 1.5rem; }
          .text-3xl { font-size: 1.875rem; }
          .text-4xl { font-size: 2.25rem; }
          
          .text-slate-600 { color: #475569; }
          .text-slate-700 { color: #334155; }
          .text-slate-800 { color: #1e293b; }
          
          .bg-white { background-color: #ffffff; }
          .bg-slate-50 { background-color: #f8fafc; }
          .bg-blue-50 { background-color: #eff6ff; }
          
          .rounded-full { border-radius: 9999px; }
          .rounded-lg { border-radius: 0.5rem; }
          .rounded-xl { border-radius: 0.75rem; }
          .rounded-2xl { border-radius: 1rem; }
          
          .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
          .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
          .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }

          /* Custom Components */
          .profile-image {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .status-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            font-size: 0.875rem;
            font-weight: 500;
          }

          .status-badge.available {
            background-color: #f0fdf4;
            color: #166534;
            border: 1px solid #bbf7d0;
          }

          .status-badge.notice {
            background-color: #fff1f2;
            color: #be123c;
            border: 1px solid #fecdd3;
          }

          /* Icons */
          .icon {
            width: 1.5rem;
            height: 1.5rem;
            display: inline-block;
            vertical-align: middle;
          }

          .icon-sm {
            width: 1rem;
            height: 1rem;
          }

          .icon-lg {
            width: 2rem;
            height: 2rem;
          }

          /* SVG Icons */
          svg {
            width: 1.5rem;
            height: 1.5rem;
            display: inline-block;
            vertical-align: middle;
          }

          /* Icon sizes based on Tailwind classes */
          svg.w-4, svg[class*="w-4"] {
            width: 1rem !important;
            height: 1rem !important;
          }

          svg.w-5, svg[class*="w-5"] {
            width: 1.25rem !important;
            height: 1.25rem !important;
          }

          svg.w-6, svg[class*="w-6"] {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }

          svg.w-8, svg[class*="w-8"] {
            width: 2rem !important;
            height: 2rem !important;
          }

          svg.w-10, svg[class*="w-10"] {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }

          /* Icon containers */
          div[class*="w-10"], div[class*="w-8"], div[class*="w-6"], div[class*="w-5"], div[class*="w-4"] {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          /* Social icons */
          a svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          /* Section header icons */
          h2 svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.75rem;
          }

          /* List item icons */
          li svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          /* Status badge icons */
          .status-badge svg {
            width: 1rem;
            height: 1rem;
          }

          /* Achievement icons */
          .achievement-card svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          /* Project card icons */
          .project-card svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          /* Skill section icons */
          .skill-section svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          /* Fix icon alignment */
          .inline-flex svg {
            flex-shrink: 0;
          }

          /* Icon colors */
          svg.text-blue-500 { color: #3b82f6; }
          svg.text-green-500 { color: #22c55e; }
          svg.text-yellow-500 { color: #eab308; }
          svg.text-red-500 { color: #ef4444; }
          svg.text-indigo-500 { color: #6366f1; }
          svg.text-purple-500 { color: #a855f7; }
          svg.text-slate-500 { color: #64748b; }
          svg.text-slate-600 { color: #475569; }
          svg.text-white { color: #ffffff; }

          /* Icon colors - ensure they print */
          svg.text-blue-500, 
          svg[class*="text-blue-500"] { 
            color: #3b82f6 !important; 
            fill: #3b82f6 !important; 
          }
          
          svg.text-green-500,
          svg[class*="text-green-500"] { 
            color: #22c55e !important; 
            fill: #22c55e !important; 
          }
          
          svg.text-yellow-500,
          svg[class*="text-yellow-500"] { 
            color: #eab308 !important; 
            fill: #eab308 !important; 
          }
          
          svg.text-red-500,
          svg[class*="text-red-500"] { 
            color: #ef4444 !important; 
            fill: #ef4444 !important; 
          }
          
          svg.text-indigo-500,
          svg[class*="text-indigo-500"] { 
            color: #6366f1 !important; 
            fill: #6366f1 !important; 
          }
          
          svg.text-purple-500,
          svg[class*="text-purple-500"] { 
            color: #a855f7 !important; 
            fill: #a855f7 !important; 
          }
          
          svg.text-slate-500,
          svg[class*="text-slate-500"] { 
            color: #64748b !important; 
            fill: #64748b !important; 
          }
          
          svg.text-slate-600,
          svg[class*="text-slate-600"] { 
            color: #475569 !important; 
            fill: #475569 !important; 
          }
          
          svg.text-white,
          svg[class*="text-white"] { 
            color: #ffffff !important; 
            fill: #ffffff !important; 
          }

          /* Ensure SVG colors print correctly */
          @media print {
            svg[class*="text-"] {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }

            /* Force white background behind white icons for contrast */
            svg.text-white,
            svg[class*="text-white"] {
              background-color: transparent !important;
            }

            /* Ensure icon containers preserve background colors */
            .bg-blue-500, .bg-green-500, .bg-purple-500, .bg-yellow-500,
            .bg-red-500, .bg-indigo-500, .bg-slate-500, .bg-slate-600 {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
          }

          .icon-sm {
            width: 1rem;
            height: 1rem;
          }

          .icon-lg {
            width: 2rem;
            height: 2rem;
          }

          /* Icon containers */
          div[class*="w-10"], 
          div[class*="w-8"], 
          div[class*="w-6"], 
          div[class*="w-5"], 
          div[class*="w-4"] {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          /* Icon sizes based on Tailwind classes */
          svg.w-4, 
          svg[class*="w-4"] {
            width: 1rem !important;
            height: 1rem !important;
          }

          svg.w-5, 
          svg[class*="w-5"] {
            width: 1.25rem !important;
            height: 1.25rem !important;
          }

          svg.w-6, 
          svg[class*="w-6"] {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }

          svg.w-8, 
          svg[class*="w-8"] {
            width: 2rem !important;
            height: 2rem !important;
          }

          svg.w-10, 
          svg[class*="w-10"] {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }

          /* Social icons */
          a svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          /* Section header icons */
          h2 svg {
            width: 1.5rem;
            height: 1.5rem;
            margin-right: 0.75rem;
          }

          /* List item icons */
          li svg {
            width: 1rem;
            height: 1rem;
            margin-right: 0.5rem;
          }

          /* Status badge icons */
          .status-badge svg {
            width: 1rem;
            height: 1rem;
          }

          /* Achievement icons */
          .achievement-card svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          .project-card svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          /* Skill section icons */
          .skill-section svg {
            width: 1.25rem;
            height: 1.25rem;
            margin-right: 0.5rem;
          }

          /* Fix icon alignment */
          .inline-flex svg {
            flex-shrink: 0;
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          ${clonedContent.outerHTML}
        </div>
        <script>
          // Add event listener for after print
          window.addEventListener('afterprint', function() {
            window.close();
          });
        </script>
      </body>
      </html>
    `);
    newWindow.document.close();
    // Wait for content to load then print
    newWindow.onload = () => {
      newWindow.focus(); // Focus the window
      newWindow.print(); // Open print dialog
    };
  };

  // Function to generate ATS-friendly resume
  const generateATSFriendlyResume = () => {
    setIsGenerating(true);
    try {
      const pdf = new jsPDF("p", "mm", "a4");
      let yPos = 20;
      const margin = 20;
      const pageWidth = 210 - 2 * margin;

      // Helper function to add text with word wrapping
      const addWrappedText = (
        text: string,
        fontSize: number,
        isBold: boolean = false
      ) => {
        pdf.setFontSize(fontSize);
        if (isBold) pdf.setFont("helvetica", "bold");
        else pdf.setFont("helvetica", "normal");

        const lines = pdf.splitTextToSize(text, pageWidth);
        if (yPos + lines.length * fontSize * 0.4 > 280) {
          pdf.addPage();
          yPos = 20;
        }

        pdf.text(lines, margin, yPos);
        yPos += lines.length * fontSize * 0.4 + 5;
      };

      // Header
      addWrappedText(personalInfo.name, 24, true);
      addWrappedText(personalInfo.title, 16);
      addWrappedText(`Email: ${personalInfo.contact.email}`, 10);
      addWrappedText(`Phone: ${personalInfo.contact.mobile}`, 10);
      addWrappedText(`Location: ${personalInfo.contact.address}`, 10);
      addWrappedText(`GitHub: ${personalInfo.social.github.url}`, 10);
      addWrappedText(`LinkedIn: ${personalInfo.social.linkedin.url}`, 10);
      addWrappedText(`Portfolio: https://tushartibude.netlify.app/`, 10);
      yPos += 10;

      // Professional Summary
      addWrappedText("PROFESSIONAL SUMMARY", 14, true);
      addWrappedText(personalInfo.about.paragraph1, 10);
      addWrappedText(personalInfo.about.paragraph2, 10);
      yPos += 5;

      // Technical Skills
      addWrappedText("TECHNICAL SKILLS", 14, true);
      addWrappedText(
        `Programming Languages: ${getSkillNames(
          personalInfo.skills.languages
        )}`,
        10
      );
      addWrappedText(
        `Frameworks & Libraries: ${getSkillNames(
          personalInfo.skills.frameworks
        )}`,
        10
      );
      addWrappedText(
        `Tools & Technologies: ${getSkillNames(personalInfo.skills.tools)}`,
        10
      );
      addWrappedText(
        `Other Skills: ${getSkillNames(personalInfo.skills.other)}`,
        10
      );
      yPos += 5;

      // Professional Experience
      addWrappedText("PROFESSIONAL EXPERIENCE", 14, true);

      // Current Experience
      addWrappedText(
        `${personalInfo.currentCompany} - ${personalInfo.title}`,
        12,
        true
      );
      addWrappedText(
        `${personalInfo.experience[0].duration} | ${personalInfo.experience[0].location}`,
        10
      );
      addWrappedText(
        `Technologies: ${personalInfo.experience[0].description}`,
        10
      );
      yPos += 5;
      // Previous Experience
      addWrappedText(
        `${personalInfo.experience[1].company} - ${personalInfo.experience[1].position}`,
        12,
        true
      );
      addWrappedText(
        `${personalInfo.experience[1].duration} | ${personalInfo.experience[1].location}`,
        10
      );
      addWrappedText(
        `Technologies: ${personalInfo.experience[1].description}`,
        10
      );
      yPos += 5;

      // Project Experience (most recent 6 projects)
      addWrappedText("PROJECTS", 14, true);

      projects.slice(0, 6).forEach((project) => {
        addWrappedText(`${project.title} - ${project.company}`, 12, true);
        addWrappedText(`${project.role} | ${project.duration}`, 10);
        addWrappedText(project.description, 10);

        // Key responsibilities
        addWrappedText("Key Responsibilities:", 10, true);
        project.responsibilities.forEach((resp) => {
          addWrappedText(`• ${resp}`, 10);
        });

        addWrappedText(`Technologies: ${project.techStack.join(", ")}`, 10);
        yPos += 5;
      });

      // Key Achievements
      addWrappedText("KEY ACHIEVEMENTS", 14, true);
      personalInfo.achievements.forEach((achievement) => {
        addWrappedText(`• ${achievement.text}`, 10);
      });
      yPos += 5;

      // Education
      addWrappedText("EDUCATION", 14, true);
      addWrappedText(personalInfo.education.degree, 12, true);
      addWrappedText(
        `${personalInfo.education.university}, ${personalInfo.education.graduationYear}`,
        10
      );
      yPos += 5;

      // Additional Information
      addWrappedText("ADDITIONAL INFORMATION", 14, true);
      personalInfo.extraInfo.forEach((info) => {
        addWrappedText(`• ${info}`, 10);
      });
      addWrappedText(
        `• Notice Period: ${personalInfo.contact.noticePeriod}`,
        10
      );
      addWrappedText(
        `• Availability: ${personalInfo.contact.availability}`,
        10
      );
      addWrappedText(`• Work Mode: ${personalInfo.contact.workMode}`, 10);

      pdf.save(`${personalInfo.name.replace(/\s+/g, "_")}_ATS_Resume.pdf`);
    } catch (error) {
      console.error("Error generating ATS resume:", error);
      alert("Error generating ATS resume. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Download Options Section */}
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-4 mb-8 max-w-2xl mx-auto gap-7 flex flex-row items-center justify-center">
            <button
              onClick={openResumeInNewTab}
              className="w-2/3 group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <svg
                className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Download Resume
            </button>
            {/* ATS-Friendly Resume */}
            <button
              onClick={generateATSFriendlyResume}
              disabled={isGenerating}
              className="w-2/3 group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-green-400 disabled:to-emerald-400 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </>
              ) : (
                <>
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download ATS Friendly PDF
                </>
              )}
            </button>
          </div>

          {/* Resume Content */}
          <div className="">
            {showPreview && (
              <div
                id="resume-content"
                className="bg-white/70 backdrop-blur-sm border p-8 rounded-3xl shadow-lg relative overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-600/5 opacity-5 rounded-full -translate-y-16 translate-x-16"></div>

                <div className="relative">
                  {/* Header */}
                  <div className="border-b pb-8 mb-4">
                    <div className="flex flex-row lg:flex-row gap-8">
                      {/* Photo on the left */}
                      <div className="flex justify-center lg:justify-start lg:w-1/3">
                        <div className="relative">
                          <Image
                            src="/tushar.png"
                            alt={personalInfo.name}
                            width={180}
                            height={180}
                            className="rounded-full border-4 border-white shadow-xl"
                            priority
                          />
                        </div>
                      </div>

                      {/* Content on the right */}
                      <div className="flex-1 lg:w-2/3">
                        <div className="text-center lg:text-left">
                          <h1 className="text-4xl font-bold text-slate-800 mb-3">
                            {personalInfo.name}
                          </h1>
                          <p className="text-2xl text-slate-600 mb-6">
                            {personalInfo.title}
                          </p>
                        </div>

                        {/* Contact Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-1">
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg
                              className="w-4 h-4 text-blue-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            <a
                              href={`mailto:${personalInfo.contact.email}`}
                              className="text-blue-600 hover:underline font-medium text-sm"
                            >
                              {personalInfo.contact.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg
                              className="w-4 h-4 text-green-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                            <a
                              href={`tel:${personalInfo.contact.mobile}`}
                              className="text-blue-600 hover:underline font-medium text-sm"
                            >
                              {personalInfo.contact.mobile}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg
                              className="w-4 h-4 text-purple-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium text-sm">
                              {personalInfo.contact.address}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-slate-600">
                            <svg
                              className="w-4 h-4 text-indigo-500 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="font-medium text-sm">
                              {personalInfo.contact.availability}
                            </span>
                          </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-2">
                          <a
                            href={personalInfo.social.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-1 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 text-slate-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </a>
                          <a
                            href={personalInfo.social.gitlab.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 text-slate-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z" />
                            </svg>
                            GitLab
                          </a>
                          <a
                            href={personalInfo.social.linkedin.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 text-slate-600"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            LinkedIn
                          </a>
                          <a
                            href="https://tushartibude.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                          >
                            <svg
                              className="w-4 h-4 text-slate-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Portfolio
                          </a>
                        </div>

                        {/* Status Info */}
                        <div className="flex flex-wrap gap-3">
                          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 px-0 py-1 rounded-xl border border-indigo-200/50">
                            <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2 text-sm my-0">
                              <svg
                                className="w-2 h-2 text-indigo-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {personalInfo.contact.yoe}
                            </h3>
                          </div>
                          <div className="bg-gradient-to-br from-red-50 to-red-100/50 px-0 py-1 rounded-xl border border-red-200/50">
                            <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2 text-sm my-0">
                              <svg
                                className="w-2 h-2 text-red-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Notice Period {personalInfo.contact.noticePeriod}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Professional Summary */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3 border-b border-slate-100/60 pb-3">
                      <svg
                        className="w-6 h-6 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Professional Summary
                    </h2>
                    <div className="space-y-4 text-slate-700 leading-relaxed">
                      <p>{personalInfo.about.paragraph1}</p>
                      <p>{personalInfo.about.paragraph2}</p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-5">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 border-b border-slate-100/60 pb-3">
                      <svg
                        className="w-6 h-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Skills & Technologies
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 rounded-2xl border border-blue-200/50">
                        <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Languages
                        </h3>
                        <p className="text-slate-700">
                          {getSkillNames(personalInfo.skills.languages)}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-3 rounded-2xl border border-green-200/50">
                        <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-green-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Frameworks
                        </h3>
                        <p className="text-slate-700">
                          {getSkillNames(personalInfo.skills.frameworks)}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-3 rounded-2xl border border-purple-200/50">
                        <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-purple-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Tools
                        </h3>
                        <p className="text-slate-700">
                          {getSkillNames(personalInfo.skills.tools)}
                        </p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-3 rounded-2xl border border-orange-200/50">
                        <h3 className="font-semibold text-slate-800 mb-1 flex items-center gap-2">
                          <svg
                            className="w-4 h-4 text-orange-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Other Skills
                        </h3>
                        <p className="text-slate-700">
                          {getSkillNames(personalInfo.skills.other)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="page-break"></div>
                  {/* Achievements */}
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-start gap-3 border-b border-slate-100/60 pb-3">
                      <svg
                        className="w-6 h-6 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      Key Achievements
                    </h2>
                    <div className="grid gap-4">
                      {personalInfo.achievements.map((achievement, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 p-2 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200/50"
                        >
                          <span className="text-slate-700 leading-relaxed flex items-center gap-2">
                            {achievement.icon} {achievement.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Experience */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3 border-b border-slate-200/60 pb-3">
                      <svg
                        className="w-6 h-6 text-indigo-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Project Experience
                    </h2>
                    <div className="space-y-8">
                      {projects.slice(0, 5).map((project, index) => (
                        <div
                          key={index}
                          className="group bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-100 border-l-4 border-l-blue-200 pl-6 p-3 rounded-2xl hover:shadow-lg transition-all duration-300 print:border-slate-200/60 print:!border-l-blue-300"
                        >
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <div className="text-sm text-slate-600 text-right mt-2 md:mt-0">
                              <div className="font-semibold">
                                {project.company}
                              </div>
                              <div>{project.role}</div>
                              <div className="text-slate-500">
                                {project.duration}
                              </div>
                            </div>
                          </div>
                          <p className="text-slate-700 mb-4 leading-relaxed">
                            {project.description}
                          </p>

                          <div className="mb-4">
                            <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Key Responsibilities
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-sm text-slate-600">
                              {project.responsibilities.map((resp, idx) => (
                                <li key={idx} className="leading-relaxed">
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <svg
                                className="w-4 h-4 text-green-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.techStack.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="bg-blue-100 text-blue-700 border border-blue-200 px-3 py-1 rounded-xl text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
