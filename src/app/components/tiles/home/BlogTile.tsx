"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogTile = () => {
  return (
    <div className="relative w-full h-full rounded-4xl bg-[#f7f7f7] dark:bg-zinc-900 border border-black/5 dark:border-white/5 dark:ring-2 dark:ring-gray-700 shadow-[0_18px_35px_rgba(0,0,0,0.08),0_3px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.85)] dark:shadow-[0_18px_35px_rgba(0,0,0,0.4),0_3px_8px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] overflow-hidden group">
      {/* Decorative background glow */}
      <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#0A66C2]/10 dark:bg-[#0A66C2]/15 rounded-full blur-3xl pointer-events-none transition-all duration-700 group-hover:scale-125" />

      {/* Header Content */}
      <div className="relative z-20 px-5 sm:px-8 pt-5 sm:pt-7 flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs sm:text-[13px] leading-none text-[#555] dark:text-zinc-400 font-medium tracking-[-0.01em]">
              Building in Public &amp; Milestones
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0A66C2]/10 text-[#0A66C2] dark:text-[#70B5F9] border border-[#0A66C2]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A66C2] animate-pulse"></span>
              Live Activity
            </span>
          </div>

          <h2 className="text-xl sm:text-[26px] md:text-[30px] leading-tight font-bold tracking-[-0.03em] text-black dark:text-white font-decorative">
            Updates &amp; LinkedIn Feed
          </h2>
        </div>

        {/* Top-Right LinkedIn Logo Badge */}
        <Link
          href="https://www.linkedin.com/in/suyash--yadav/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center shadow-md hover:scale-105 transition-transform shrink-0"
          title="Open Suyash's LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.4 9.74V9.92H5.06v8.58h2.8z" />
          </svg>
        </Link>
      </div>

      {/* Mini LinkedIn Activity Preview Card in Center */}
      <div className="relative z-20 px-4 sm:px-8 pt-3 sm:pt-4 pb-2">
        <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 dark:bg-zinc-800/80 backdrop-blur-xs border border-black/5 dark:border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:-translate-y-0.5">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-black/10 dark:ring-white/20 shrink-0">
              <Image
                src="/suyash-me.png"
                alt="Suyash Yadav"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xs text-gray-900 dark:text-white truncate">
                  Suyash Yadav
                </span>
                <span className="text-[10px] text-[#0A66C2] font-semibold truncate">• GFG Mantri</span>
              </div>
              <p className="text-[10px] text-gray-400 dark:text-gray-500">
                Recent update • 8 real posts
              </p>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20 shrink-0">
              Studio &amp; Sprint
            </span>
          </div>

          <p className="text-xs text-gray-700 dark:text-gray-300 line-clamp-2 leading-relaxed">
            &ldquo;Launching the Worth IT: Real-World Innovation Challenge by Worthfinding Studio. 2-week build sprint with 9 direct internship opportunities!&rdquo;
          </p>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3 mt-2.5 pt-2 border-t border-gray-100 dark:border-gray-700/60 text-[10px] sm:text-[11px] text-gray-500 dark:text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <span className="text-blue-500">🚀</span> DevPort
            </span>
            <span className="flex items-center gap-1">
              🏆 NPTEL Topper
            </span>
            <span className="ml-auto text-[10px] sm:text-[11px] font-bold text-[#0A66C2] dark:text-[#70B5F9] hover:underline whitespace-nowrap">
              Read 8 updates →
            </span>
          </div>
        </div>
      </div>

      {/* Decorative subtle concentric arcs */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-10 pointer-events-none">
        <div className="absolute w-[520px] h-[520px] left-[-20px] bottom-[-355px] border border-[#d8d8d8] dark:border-zinc-700 rounded-full"></div>
        <div className="absolute w-[410px] h-[410px] left-[35px] bottom-[-300px] border border-[#d8d8d8] dark:border-zinc-700 rounded-full"></div>
      </div>

      {/* Expanding 'View Updates' Button (Bottom Left) matching Contact tile style */}
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/updates";
        }}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        className="absolute bottom-0 left-0 m-4 z-50 group/btn border-none outline-none bg-transparent p-0 cursor-pointer"
      >
        <div className="bg-white dark:bg-zinc-800 text-black dark:text-white w-10 h-10 rounded-full flex justify-start items-center ring-2 ring-black/5 dark:ring-white/10 hover:ring-4 hover:ring-black/10 dark:hover:ring-white/20 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] overflow-hidden hover:w-[150px] shadow-sm">
          {/* Icon part (always w-10 centered) */}
          <div className="min-w-[40px] h-full flex justify-center items-center">
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
                ></path>
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
                ></path>
              </g>
              <path id="Path_12" data-name="Path 12" d="M0,0H18.256V18.256H0Z" fill="none"></path>
            </svg>
          </div>
          {/* Text part (appears on hover) */}
          <span className="text-[13px] font-medium whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover/btn:opacity-100 delay-75 pr-4 font-decorative">
            View Updates
          </span>
        </div>
      </button>
    </div>
  );
};

export default BlogTile;
