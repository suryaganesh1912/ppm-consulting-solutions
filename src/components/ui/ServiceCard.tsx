"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";
import { clsx } from "clsx";

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: LucideIcon;
    badge?: string;
    tag?: string;
    isPlaceholder?: boolean;
    theme?: "light" | "dark" | "outlined";
    delay?: number;
    className?: string;
    onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon: Icon,
    badge,
    tag,
    isPlaceholder = false,
    theme = "light",
    delay = 0,
    className = "",
}) => {
    const cardThemeClasses = {
        light:
            "bg-white border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 text-slate-900",
        dark: "bg-navy-900/80 border-slate-800 shadow-md hover:border-sky-500/40 hover:shadow-sky-500/10 hover:-translate-y-1 text-white",
        outlined:
            "bg-slate-50/50 border-slate-200 hover:bg-white hover:shadow-md hover:border-slate-300 hover:-translate-y-1 text-slate-900",
    }[theme];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            className={clsx(
                "group relative flex flex-col justify-between p-6 rounded-xl border transition-all duration-300",
                cardThemeClasses,
                className
            )}
        >
            <div>
                {/* Header bar: Badge / Icon / Placeholder label */}
                <div className="flex items-center justify-between gap-2 mb-4">
                    {Icon && (
                        <div
                            className={clsx(
                                "w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                                theme === "dark"
                                    ? "bg-sky-500/10 text-sky-400 border border-sky-400/20 group-hover:bg-sky-500 group-hover:text-white"
                                    : "bg-slate-100 text-slate-800 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900"
                            )}
                        >
                            <Icon className="w-6 h-6" />
                        </div>
                    )}

                    {badge && (
                        <span
                            className={clsx(
                                "text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full",
                                theme === "dark"
                                    ? "bg-slate-800 text-slate-300 border border-slate-700"
                                    : "bg-slate-100 text-slate-600 border border-slate-200"
                            )}
                        >
                            {badge}
                        </span>
                    )}

                    {isPlaceholder && (
                        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                            Sample Case Study
                        </span>
                    )}
                </div>

                {/* Tag line */}
                {tag && (
                    <span className="text-xs font-semibold text-sky-600 tracking-wide uppercase block mb-1">
                        {tag}
                    </span>
                )}

                {/* Title */}
                <h3
                    className={clsx(
                        "text-lg font-bold tracking-tight mb-2 transition-colors",
                        theme === "dark"
                            ? "group-hover:text-sky-300"
                            : "group-hover:text-slate-900"
                    )}
                >
                    {title}
                </h3>

                {/* Description */}
                <p
                    className={clsx(
                        "text-sm leading-relaxed",
                        theme === "dark" ? "text-slate-300" : "text-slate-600"
                    )}
                >
                    {description}
                </p>
            </div>

            {/* Action Indicator */}
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                <span
                    className={clsx(
                        "inline-flex items-center gap-1.5 transition-all group-hover:gap-2.5",
                        theme === "dark"
                            ? "text-sky-400 group-hover:text-sky-300"
                            : "text-slate-900 group-hover:text-sky-700"
                    )}
                >
                    Explore Details
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
            </div>
        </motion.div>
    );
};
