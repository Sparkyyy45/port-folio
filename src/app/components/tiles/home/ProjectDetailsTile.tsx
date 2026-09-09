import Image from "next/image";
import Link from "next/link";

export default function ProjectDetailsTile() {
	return (
		<div className="w-full h-full relative overflow-hidden rounded-4xl bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] dark:bg-[#0d1117] dark:ring-2 dark:ring-gray-700 border border-cyan-500/20 group">
			<div className="absolute -top-14 right-[-24%] w-[86%] h-[40%] bg-cyan-500/10 rounded-[48%] blur-3xl dark:bg-[#0d1117]" />
			<div className="absolute -bottom-16 -left-14 w-[75%] h-[42%] bg-indigo-500/15 rounded-[55%] blur-3xl dark:bg-[#0d1117]" />

			{/* Floating Flagship Badge */}
			<div className="absolute top-6 left-6 z-30 flex flex-col gap-1.5">
				<span className="px-3 py-1 text-xs font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-md inline-flex items-center gap-1.5 w-fit">
					<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
					Featured Project
				</span>
				<h3 className="text-white text-lg font-black tracking-tight font-decorative">
					RepoSage AI
				</h3>
				<p className="text-gray-400 text-xs max-w-[200px]">
					Codebase architecture explorer & repository intelligence engine.
				</p>
			</div>

			<div className="absolute top-[28%] left-[10%] w-[85%] aspect-[4/3] rounded-[1.6rem] shadow-[0_24px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-cyan-500/30 z-20 bg-black/80 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
				<div className="w-full h-full relative">
					<Image
						src="/projects/repo-sage-user.png"
						alt="RepoSage preview"
						fill
						quality={100}
						unoptimized
						className="object-cover"
					/>
				</div>
			</div>

			<Link
				href="/projects"
				aria-label="Go to projects page"
				className="absolute bottom-0 left-0 m-4 z-40"
			>
				<div className="bg-white dark:bg-[#0d1117] text-[#0d1117] dark:text-white w-10 h-10 rounded-full flex justify-center items-center ring-2 ring-gray-200 dark:ring-gray-700 hover:ring-4 hover:ring-gray-300 dark:hover:ring-gray-500 transition duration-300 ease-in-out shadow-[0_8px_18px_rgba(0,0,0,0.12)]">
					<svg id="Arrow.7" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
						<g id="Group_7" data-name="Group 7" transform="translate(5.363 5.325)">
							<path
								id="Path_10"
								data-name="Path 10"
								d="M14.581,7.05,7.05,14.581"
								transform="translate(-7.05 -7.012)"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							/>
							<path
								id="Path_11"
								data-name="Path 11"
								d="M10,7l5.287.037.038,5.287"
								transform="translate(-7.756 -7)"
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
							/>
						</g>
						<path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none" />
					</svg>
				</div>
			</Link>
		</div>
	);
}
