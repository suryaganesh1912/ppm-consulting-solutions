"use client";

import React from "react";

interface SectionHeadingProps {
    tagline?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    theme?: "auto" | "light" | "dark";
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    tagline,
    title,
    description,
    align = "center",
    theme = "auto",
    className = "",
}) => {
    const isExplicitDark = theme === "dark";

    const titleColor = isExplicitDark
        ? "text-white"
        : "text-color-primary";

    const descColor = isExplicitDark
        ? "text-slate-300"
        : "text-color-secondary";

    const tagBg = isExplicitDark
        ? "bg-slate-800 text-sky-400 border-slate-700"
        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-theme";

    return (
        <div
            className={`max-w-3xl ${
                align === "center" ? "mx-auto text-center" : "text-left"
            } ${className}`}
        >
            {tagline && (
                <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-0.75 rounded-[4px] text-[11px] font-semibold uppercase tracking-wider mb-3.5 border ${tagBg}`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-sky-400" />
                    <span>{tagline}</span>
                </div>
            )}

            <h2
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight ${titleColor} leading-[1.2]`}
            >
                {title}
            </h2>

            {description && (
                <p
                    className={`mt-3.5 text-sm sm:text-base ${descColor} leading-relaxed max-w-2xl ${
                        align === "center" ? "mx-auto" : ""
                    }`}
                >
                    {description}
                </p>
            )}
        </div>
    );
};
