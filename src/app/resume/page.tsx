"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FiDownload, FiArrowLeft } from "react-icons/fi";

export default function ResumePage() {
  useEffect(() => {
    // Automatically trigger direct download via blob
    (async () => {
      const res = await fetch("/resume.pdf");
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Suyash_Yadav_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })();
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#161b22] border border-gray-800 rounded-3xl p-8 text-center shadow-2xl flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-[#0A84FF]/30 flex items-center justify-center text-[#0A84FF]">
          <FiDownload className="h-8 w-8" />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white mb-1">Downloading Resume...</h1>
          <p className="text-sm text-gray-400">
            Your download has started automatically. If it didn&apos;t begin, click below:
          </p>
        </div>
        <button
          onClick={async () => {
            const res = await fetch("/resume.pdf");
            const blob = await res.blob();
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "Suyash_Yadav_Resume.pdf";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A84FF] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#0070e0] transition-all shadow-md shadow-blue-500/20 active:scale-95 cursor-pointer"
        >
          <FiDownload className="h-4 w-4" />
          <span>Download PDF</span>
        </button>
        <Link
          href="/home"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
        >
          <FiArrowLeft className="h-3.5 w-3.5" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    </div>
  );
}
