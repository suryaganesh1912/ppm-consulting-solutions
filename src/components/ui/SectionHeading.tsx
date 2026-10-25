"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    tagline?: string;
    title: string;
    description?: string;
    align?: "left" | "center";
    theme?: "light" | "dark"; // "dark" theme is for dark navy backgrounds
    className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
    tagline,
    title,
    description,
    align = "center",
    theme = "light",
    className = "",
}) => {
    const isDark = theme === "dark";

    return (
        <div
            className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"
                } ${className}`}
        >
            {tagline && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${isDark
                            ? "bg-sky-500/10 text-sky-300 border border-sky-400/20"
                            : "bg-slate-100 text-slate-700 border border-slate-200"
                        }`}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                    {tagline}
                </motion.div>
            )}

            <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight ${isDark ? "text-white" : "text-slate-900"
                    } leading-tight`}
            >
                {title}
            </motion.h2>

            {description && (
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className={`mt-4 text-base md:text-lg ${isDark ? "text-slate-300" : "text-slate-600"
                        } leading-relaxed`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
};
