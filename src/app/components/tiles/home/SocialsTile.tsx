"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type SocialSlide = {
	id: "linkedin" | "github" | "email";
	label: string;
	bgClass: string;
	iconSrc?: string;
	url: string;
};

const LINKEDIN_URL = "https://www.linkedin.com/in/suyash--yadav/";
const GITHUB_URL = "https://github.com/Sparkyyy45/";
const EMAIL_URL = "mailto:suyashyadav1709@gmail.com";

const SLIDES: SocialSlide[] = [
	{
		id: "linkedin",
		label: "LinkedIn",
		bgClass: "bg-[#0A66C2]",
		iconSrc: "/tech/linkedin.svg",
		url: LINKEDIN_URL,
	},
	{
		id: "github",
		label: "GitHub",
		bgClass: "bg-gradient-to-br from-[#24292e] via-[#1b1f23] to-[#0d1117]",
		iconSrc: "/tech/github.svg",
		url: GITHUB_URL,
	},
	{
		id: "email",
		label: "Email",
		bgClass: "bg-gradient-to-br from-[#ea4335] via-[#d93025] to-[#fbbc05]",
		url: EMAIL_URL,
	},
];

export default function SocialTile() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = window.setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % SLIDES.length);
		}, 3800);

		return () => window.clearInterval(interval);
	}, []);

	return (
		<div className="w-full h-full relative overflow-hidden rounded-4xl ring-2 ring-transparent dark:ring-gray-700 transition-all duration-300">
			{SLIDES.map((slide, index) => {
				const isActive = activeIndex === index;

				return (
					<div
						key={slide.id}
						className={`absolute inset-0 flex items-center justify-center transition-[opacity,transform,background-color] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${slide.bgClass} dark:bg-neutral-900 dark:bg-none ${isActive ? "opacity-100 scale-100 pointer-events-auto z-10" : "opacity-0 scale-[0.98] pointer-events-none z-0"}`}
						aria-hidden={!isActive}
					>
						<a
							href={slide.url}
							target={slide.id === "email" ? "_self" : "_blank"}
							rel="noopener noreferrer"
							aria-label={`Open ${slide.label}`}
							className="group/btn flex flex-col items-center gap-2 p-3 rounded-3xl transition-transform duration-300 ease-out hover:scale-105"
						>
							<div className="w-20 h-20 rounded-full bg-white/15 backdrop-blur-[4px] border border-white/30 flex items-center justify-center shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover/btn:bg-white/25">
								{slide.iconSrc ? (
									<Image
										src={slide.iconSrc}
										alt={slide.label}
										width={44}
										height={44}
										className="w-11 h-11 object-contain"
										priority
									/>
								) : (
									<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
										<rect width="20" height="16" x="2" y="4" rx="2"/>
										<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
									</svg>
								)}
							</div>
							<span className="text-white font-medium text-xs tracking-wide drop-shadow-sm opacity-90">
								{slide.label}
							</span>
						</a>
					</div>
				);
			})}

			<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
				{SLIDES.map((slide, index) => (
					<span
						key={`${slide.id}-dot`}
						className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-6 bg-white/90" : "w-2 bg-white/50"}`}
					/>
				))}
			</div>
		</div>
	);
}
