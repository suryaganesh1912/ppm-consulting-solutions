"use client";

import Link from "next/link";
import React from "react";

interface LogoProps {
    variant?: "auto" | "light" | "dark";
    size?: "sm" | "md" | "lg";
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({
    variant = "auto",
    size = "md",
    className = "",
}) => {
    const sizeClasses = {
        sm: "text-base tracking-tight",
        md: "text-lg tracking-tight",
        lg: "text-xl tracking-tight",
    }[size];

    const subtextSizes = {
        sm: "text-[9px] tracking-[0.16em]",
        md: "text-[10px] tracking-[0.18em]",
        lg: "text-[11px] tracking-[0.2em]",
    }[size];

    const isExplicitLight = variant === "light";
    const isExplicitDark = variant === "dark";

    const textPrimaryClass = isExplicitLight
        ? "text-white"
        : isExplicitDark
        ? "text-[#333333]"
        : "text-color-primary";

    const textSubClass = isExplicitLight
        ? "text-[#E5E5E5]"
        : isExplicitDark
        ? "text-[#555555]"
        : "text-color-secondary";

    return (
        <Link
            href="/"
            className={`inline-flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] rounded-[6px] transition-opacity select-none ${className}`}
            aria-label="PPM CONSULTING SOLUTIONS - Home"
        >
            {/* Primary Red Highlighted Logo Mark */}
            <div className="w-8 h-8 rounded-[6px] bg-[#F80000] text-white flex items-center justify-center shrink-0 border border-[#D60000] shadow-sm">
                <svg
                    className="w-4.5 h-4.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                >
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                    <path d="M3 14h7v7H3z" />
                </svg>
            </div>

            {/* Typography */}
            <div className="flex flex-col leading-none">
                <span className={`font-extrabold ${sizeClasses} ${textPrimaryClass} flex items-center`}>
                    PPM<span className="text-[#F80000] ml-0.5 font-black">.</span>
                </span>
                <span className={`font-semibold uppercase ${subtextSizes} ${textSubClass} mt-0.5`}>
                    CONSULTING SOLUTIONS
                </span>
            </div>
        </Link>
    );
};
