import Image from "next/image";
import Link from "next/link";

export default function AboutProjectsTile({
    selectedFilter,
    onSelectFilter,
    counts,
}: {
    selectedFilter: string;
    onSelectFilter: (filter: string) => void;
    counts: { all: number; deployed: number; opensource: number; studio: number };
}) {
    return (
        <div className="flex flex-col justify-between h-full p-4 sm:p-8 lg:p-10 dark:bg-[#0d1117] group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
                <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-md ring-2 ring-gray-100 dark:ring-gray-700 bg-[#e2e8f0] shrink-0">
                        <Image
                            src="/suyash-me.png"
                            alt="Suyash Yadav Avatar"
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2">
                            <h1 className="font-decorative text-xl sm:text-3xl font-black text-gray-900 dark:text-white">
                                Featured Work &amp; Projects
                            </h1>
                            <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                Deployed &amp; Live
                            </span>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium mt-0.5 sm:mt-1">
                            Production Web Apps, AI Engines &amp; Open Source Systems by Suyash Yadav
                        </p>
                    </div>
                </div>

                {/* Direct GitHub Profile Link */}
                <Link
                    href="https://github.com/Sparkyyy45"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 transition-opacity shadow-sm shrink-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>Sparkyyy45 on GitHub</span>
                </Link>
            </div>

            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base leading-relaxed max-w-3xl mt-3 sm:mt-4 mb-4 sm:mb-6">
                From concept to deployment, every project represents functional code built to solve actual problems—spanning AI-powered code analysis, smart city reporting, campus operating systems, and client growth flagships.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
                <button
                    type="button"
                    onClick={() => onSelectFilter("all")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedFilter === "all"
                            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-sm"
                            : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                >
                    All Work ({counts.all})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectFilter("deployed")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedFilter === "deployed"
                            ? "bg-emerald-600 text-white shadow-sm"
                            : "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-500/20"
                    }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live Deployed ({counts.deployed})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectFilter("opensource")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedFilter === "opensource"
                            ? "bg-blue-600 text-white shadow-sm"
                            : "bg-blue-500/10 text-blue-700 dark:text-blue-400 hover:bg-blue-500/20"
                    }`}
                >
                    Open Source ({counts.opensource})
                </button>
                <button
                    type="button"
                    onClick={() => onSelectFilter("studio")}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        selectedFilter === "studio"
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-purple-500/10 text-purple-700 dark:text-purple-400 hover:bg-purple-500/20"
                    }`}
                >
                    Studio &amp; Client ({counts.studio})
                </button>
            </div>
        </div>
    );
}
