"use client";

import Link from "next/link";

export default function GitHubActivityCard() {
    return (
        <div className="space-y-4">
            {/* Header & Description */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                        A real-time snapshot of public open-source contributions, daily commit activity, and codebase shipping frequency on GitHub.
                    </p>
                </div>

                <Link
                    href="https://github.com/Sparkyyy45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-all shadow-sm shrink-0 active:scale-95"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Follow @Sparkyyy45</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                    </svg>
                </Link>
            </div>

            {/* GitHub Calendar Container */}
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/80 dark:border-gray-700 bg-gray-50/70 dark:bg-[#111821] p-3.5 sm:p-6 shadow-xs">
                {/* Mobile Swipe Hint */}
                <div className="flex sm:hidden items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 mb-2.5 px-1">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">Annual Activity</span>
                    <span className="inline-flex items-center gap-1 font-bold text-[#0A84FF]">← Swipe to explore →</span>
                </div>

                {/* Scrollable Chart Area */}
                <div className="overflow-x-auto pb-2 hide-scrollbar">
                    <div className="min-w-[700px] flex flex-col items-center justify-center">
                        {/* Light & Dark Adaptive SVG Chart */}
                        <div className="w-full flex justify-center py-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://ghchart.rshah.org/0A84FF/Sparkyyy45"
                                alt="Sparkyyy45 GitHub Contribution Calendar"
                                className="w-full max-w-[850px] h-auto object-contain select-none"
                                loading="lazy"
                            />
                        </div>

                        <div className="w-full flex items-center justify-between text-[11px] text-gray-500 dark:text-gray-400 pt-3 px-2 border-t border-gray-200/60 dark:border-gray-800">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Live data synced with GitHub REST
                            </span>
                            <div className="flex items-center gap-1.5">
                                <span>Less</span>
                                <span className="w-2.5 h-2.5 rounded-xs bg-[#EEEEEE] dark:bg-gray-800"></span>
                                <span className="w-2.5 h-2.5 rounded-xs bg-[#57d1ff]"></span>
                                <span className="w-2.5 h-2.5 rounded-xs bg-[#3db7ff]"></span>
                                <span className="w-2.5 h-2.5 rounded-xs bg-[#0A84FF]"></span>
                                <span className="w-2.5 h-2.5 rounded-xs bg-[#086acc]"></span>
                                <span>More</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Highlight Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-gray-200/60 dark:border-gray-800">
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-[#0d1117] border border-gray-200/60 dark:border-gray-700/60">
                        <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 block">Repositories</span>
                        <span className="text-sm sm:text-base font-bold text-gray-900 dark:text-white mt-0.5 block">14+ Public</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-[#0d1117] border border-gray-200/60 dark:border-gray-700/60">
                        <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 block">Open Source</span>
                        <span className="text-sm sm:text-base font-bold text-blue-600 dark:text-blue-400 mt-0.5 block truncate">GSSoC&apos;26</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-[#0d1117] border border-gray-200/60 dark:border-gray-700/60">
                        <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 block">Top Open Repo</span>
                        <span className="text-sm sm:text-base font-bold text-purple-600 dark:text-purple-400 mt-0.5 block truncate">RepoSage</span>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-2xl bg-white dark:bg-[#0d1117] border border-gray-200/60 dark:border-gray-700/60">
                        <span className="text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 block">Focus Stack</span>
                        <span className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block truncate">Full-Stack MERN</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
