"use client";

import React from "react";
import { ArrowRight, LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    badge?: string;
    tag?: string;
    isPlaceholder?: boolean;
    theme?: "auto" | "light" | "dark" | "outlined";
    className?: string;
    onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon: Icon,
    badge,
    tag,
    theme = "auto",
    className = "",
    onClick,
}) => {
    const isExplicitDark = theme === "dark";

    const cardClasses = isExplicitDark
        ? "bg-slate-900 border-slate-800 text-white shadow-xs"
        : "bg-surface border-theme text-color-primary shadow-xs hover:border-theme-strong";

    return (
        <div
            onClick={onClick}
            className={clsx(
                "group relative flex flex-col justify-between p-5 sm:p-6 rounded-[8px] border transition-colors duration-150",
                cardClasses,
                onClick && "cursor-pointer",
                className
            )}
        >
            <div>
                {/* Header bar: Badge / Icon */}
                <div className="flex items-center justify-between gap-2 mb-3.5">
                    {Icon && (
                        <div
                            className={clsx(
                                "w-10 h-10 rounded-[6px] flex items-center justify-center border transition-colors shrink-0",
                                isExplicitDark
                                    ? "bg-slate-800 text-sky-400 border-slate-700"
                                    : "bg-slate-100 dark:bg-slate-800/80 text-sky-700 dark:text-sky-400 border-theme"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                        </div>
                    )}

                    {badge && (
                        <span
                            className={clsx(
                                "text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[4px] border",
                                isExplicitDark
                                    ? "bg-slate-800 text-slate-300 border-slate-700"
                                    : "bg-slate-100 dark:bg-slate-800 text-color-secondary border-theme"
                            )}
                        >
                            {badge}
                        </span>
                    )}
                </div>

                {/* Tag line */}
                {tag && (
                    <span className="text-[11px] font-semibold text-sky-600 dark:text-sky-400 tracking-wider uppercase block mb-1">
                        {tag}
                    </span>
                )}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 text-color-primary">
                    {title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-color-secondary leading-relaxed font-normal">
                    {description}
                </p>
            </div>

            {/* Action Indicator */}
            <div className="mt-5 pt-3.5 border-t border-theme-subtle flex items-center justify-between text-xs font-medium text-color-muted group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                <span>View practice details</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-70" />
            </div>
        </div>
    );
};
