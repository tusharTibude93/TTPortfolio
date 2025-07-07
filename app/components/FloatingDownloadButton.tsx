import Link from "next/link";

interface FloatingDownloadButtonProps {
}

export default function FloatingDownloadButton({
}: FloatingDownloadButtonProps) {
  return (
    <div className="fixed bottom-8 right-8 z-50" title="Download Resume">
      <div className="relative group">
      <Link href="/resume" className="text-slate-600 hover:text-blue-600 transition-colors">
        <button
          className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-400 disabled:to-purple-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2"
          title="Download Resume"
        > Resume 
            <svg
              className="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
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
        </button>
        </Link>
      </div>
    </div>
  );
} 