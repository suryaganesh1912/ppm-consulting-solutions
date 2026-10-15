"use client";

import Link from "next/link";
import React from "react";

interface LogoProps {
    variant?: "light" | "dark";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({
    variant = "dark",
    size = "md",
    className = "",
}) => {
    const isDarkBg = variant === "light"; // "light" variant is for dark backgrounds

    const sizeClasses = {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
    }[size];

    const subtextSizes = {
        sm: "text-[9px] tracking-[0.2em]",
        md: "text-[10.5px] tracking-[0.22em]",
        lg: "text-[12px] tracking-[0.25em]",
    }[size];

    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1 transition-opacity ${className}`}
            aria-label="PPM CONSULTING SOLUTIONS - Home"
        >
            {/* Oracle PPM Emblem */}
            <div className="relative flex items-center justify-center shrink-0">
                <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white shadow-sm transition-transform group-hover:scale-105 ${isDarkBg
                            ? "bg-gradient-to-br from-sky-400 via-sky-600 to-navy-900 border border-sky-400/30"
                            : "bg-gradient-to-br from-navy-900 via-navy-800 to-sky-700 shadow-navy-900/10"
                        }`}
                >
                    {/* Geometric Grid / Chart Symbol for PPM */}
                    <svg
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="3" width="7" height="7" rx="1.5" />
                        <rect x="14" y="14" width="7" height="7" rx="1.5" />
                        <path d="M3 14h7v7H3z" />
                        <path d="M6 10v4" className="text-sky-300" strokeWidth="2" />
                        <path d="M10 6h4" className="text-sky-300" strokeWidth="2" />
                    </svg>
                </div>
            </div>

            {/* Brand Text */}
            <div className="flex flex-col leading-none">
                <span
                    className={`font-extrabold ${sizeClasses} tracking-tight ${isDarkBg ? "text-white" : "text-slate-900"
                        }`}
                >
                    PPM
                </span>
                <span
                    className={`font-semibold uppercase ${subtextSizes} ${isDarkBg ? "text-sky-300" : "text-slate-600"
                        } mt-0.5`}
                >
                    CONSULTING SOLUTIONS
                </span>
            </div>
        </Link>
    );
};
