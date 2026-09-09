import Image from "next/image";
import Link from "next/link";

interface Project {
    name: string;
    description: string;
    image: string;
    tech: { name: string; image: string }[];
    view?: string | boolean;
    github: string | boolean;
    personal?: boolean;
    workStatus?: boolean;
    date?: string;
}

export default function ProjectTile({ project }: { project: Project }) {
    let imageSrc = project.image;
    if (!imageSrc || typeof imageSrc !== "string" || (!imageSrc.startsWith("/") && !imageSrc.startsWith("http"))) {
        imageSrc = "/tech/placeholder.svg";
    }

    return (
        <div className="flex flex-col h-full group">
            <div className="flex flex-col md:flex-row w-full p-4 sm:p-5 md:p-6 gap-3.5 sm:gap-4 items-center md:items-start flex-1">
                {/* 1. Project Preview Image */}
                <div className="w-full md:w-[45%] h-40 sm:h-44 md:h-full bg-gray-100 dark:bg-gray-800/80 rounded-2xl border border-gray-200/70 dark:border-gray-700/60 relative overflow-hidden shrink-0 shadow-inner">
                    <Image
                        src={imageSrc}
                        alt={project.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                        unoptimized={imageSrc.endsWith('.svg')}
                    />
                </div>

                {/* 2. Content Section */}
                <div className="flex flex-col justify-between w-full h-full">
                    <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                            <h2 className="text-base lg:text-lg font-black text-gray-900 dark:text-white tracking-tight font-decorative">
                                {project.name}
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed line-clamp-3 mb-3">
                            {project.description}
                        </p>
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap items-center gap-2.5 mt-auto pt-2">
                        {Array.isArray(project.tech) && project.tech.map((tech, i) => (
                            <div
                                key={i}
                                className="w-7 h-7 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center p-1 transition-transform hover:scale-110"
                                title={tech.name}
                            >
                                <Image
                                    src={tech.image || "/tech/placeholder.svg"}
                                    alt={tech.name}
                                    width={18}
                                    height={18}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Footer Section: Action & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 sm:gap-3 px-4 sm:px-5 md:px-6 py-2.5 rounded-b-2xl border-t border-gray-100 dark:border-gray-800 mt-auto bg-gray-50/70 dark:bg-gray-900/60 backdrop-blur-sm">
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                    {project.view && typeof project.view === "string" && (
                        <Link
                            href={project.view}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Visit live deployment for ${project.name}`}
                            className="w-8 h-8 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-white transition-all shadow-sm"
                            title="Live Deployment"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </Link>
                    )}
                    {project.github && typeof project.github === "string" && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View GitHub repository for ${project.name}`}
                            className="w-8 h-8 rounded-full bg-gray-200/80 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300/60 dark:border-gray-700 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-sm"
                            title="GitHub Repository"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                        </Link>
                    )}
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-1.5">
                    {project.view && (
                        <span className="px-2 py-0.5 bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 rounded-full text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Live
                        </span>
                    )}
                    {project.personal ? (
                        <span className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-[10px] font-bold border border-blue-200 dark:border-blue-800/40">
                            Open Source
                        </span>
                    ) : (
                        <span className="px-2 py-0.5 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-[10px] font-bold border border-purple-200 dark:border-purple-800/40">
                            Studio
                        </span>
                    )}
                    {project.date && (
                        <span className="text-gray-400 dark:text-gray-400 text-[11px] font-medium ml-1">
                            {project.date}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}