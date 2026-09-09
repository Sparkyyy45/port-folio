"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UpdatePost } from "@/updates/updatesData";

export default function UpdateCard({ post }: { post: UpdatePost }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post.metrics.likes);

    const toggleLike = () => {
        if (liked) {
            setLikeCount((prev) => prev - 1);
            setLiked(false);
        } else {
            setLikeCount((prev) => prev + 1);
            setLiked(true);
        }
    };

    const getCategoryStyles = (category: UpdatePost["category"]) => {
        switch (category) {
            case "Product Launch":
                return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
            case "Campus Leadership":
                return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
            case "Internship & Career":
                return "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20";
            case "Academic & Awards":
                return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
            case "Studio & Hackathon":
                return "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20";
            default:
                return "bg-gray-500/10 text-gray-600 dark:text-gray-400 border-gray-500/20";
        }
    };

    return (
        <article className="flex flex-col justify-between h-full p-4 sm:p-7 dark:bg-[#0d1117] transition-all duration-300">
            {/* Top Author & Metadata Header */}
            <div>
                <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden shadow-sm ring-1.5 ring-gray-200 dark:ring-gray-700 bg-gray-100 shrink-0">
                            <Image
                                src="/suyash-me.png"
                                alt="Suyash Yadav"
                                width={44}
                                height={44}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="font-bold text-sm text-gray-900 dark:text-white leading-tight truncate">
                                    Suyash Yadav
                                </span>
                                <span className="text-[11px] text-[#0A66C2] font-semibold shrink-0">• 1st</span>
                            </div>
                            <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate leading-tight mt-0.5">
                                Full-Stack Developer • GFG Campus Mantri • SPSU&apos;28
                            </p>
                            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
                                <span className="font-medium text-gray-600 dark:text-gray-300">{post.exactDateLabel}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                                <span>•</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"/>
                                    <line x1="2" y1="12" x2="22" y2="12"/>
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Category Pill */}
                    <span className={`self-start xs:self-auto text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full border shrink-0 ${getCategoryStyles(post.category)}`}>
                        {post.category}
                    </span>
                </div>

                {/* Headline / Title */}
                <h2 className="font-decorative text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug mb-2.5">
                    {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                </p>

                {/* Collapsible Content */}
                {isExpanded && (
                    <div className="space-y-4 pt-2 border-t border-gray-100 dark:border-gray-800 animate-in fade-in-50 duration-200">
                        {/* Paragraphs */}
                        <div className="space-y-2.5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                            {post.content.map((para, i) => (
                                <p key={i} className={para.startsWith("•") || para.startsWith("→") || para.startsWith("💻") || para.startsWith("📈") || para.startsWith("🎨") || para.startsWith("🌱") || para.startsWith("🎯") || para.startsWith("🛣️") || para.startsWith("🇮🇳") || para.startsWith("🥈") || para.startsWith("🥇") ? "pl-2 font-medium text-gray-800 dark:text-gray-200" : ""}>
                                    {para}
                                </p>
                            ))}
                        </div>

                        {/* Key Highlights Box */}
                        {post.keyHighlights && post.keyHighlights.length > 0 && (
                            <div className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 mt-3">
                                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">
                                    Key Takeaways &amp; Impact
                                </span>
                                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                                    {post.keyHighlights.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <svg
                                                className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Project CTA Link if applicable */}
                        {post.projectLink && (
                            <div className="pt-1">
                                <Link
                                    href={post.projectLink.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A66C2] dark:text-[#70B5F9] hover:underline"
                                >
                                    <span>{post.projectLink.label}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M7 17l9.2-9.2M17 17V8H8"/>
                                    </svg>
                                </Link>
                            </div>
                        )}
                    </div>
                )}

                {/* Read More / Show Less Toggle */}
                <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0A66C2] dark:text-[#70B5F9] hover:opacity-80 transition-opacity mt-1 mb-4"
                >
                    <span>{isExpanded ? "Show Less" : "Read Full Post"}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                    >
                        <path d="M6 9l6 6 6-6"/>
                    </svg>
                </button>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.slice(0, 5).map((tag) => (
                        <span
                            key={tag}
                            className="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 px-2 py-0.5 rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* LinkedIn Interaction Bar */}
            <div className="pt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2 mt-2">
                <div className="flex items-center gap-3">
                    {/* Like button */}
                    <button
                        type="button"
                        onClick={toggleLike}
                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-lg transition-colors ${
                            liked
                                ? "text-[#0A66C2] bg-[#0A66C2]/10"
                                : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        title="React to this post"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill={liked ? "currentColor" : "none"}
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                        </svg>
                        <span>{likeCount}</span>
                    </button>

                    {/* Comments count */}
                    {post.metrics.comments > 0 && (
                        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 px-1.5 py-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                            </svg>
                            <span>{post.metrics.comments}</span>
                        </div>
                    )}

                    {/* Impressions badge */}
                    {post.metrics.impressions && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-gray-400 dark:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                            <span>{post.metrics.impressions}</span>
                        </span>
                    )}
                </div>

                {/* Direct LinkedIn Post Link */}
                <Link
                    href={post.postUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-[#0A66C2] hover:bg-[#084e96] transition-all shadow-xs shrink-0"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58h2.8z" />
                    </svg>
                    <span>View Post</span>
                </Link>
            </div>
        </article>
    );
}
