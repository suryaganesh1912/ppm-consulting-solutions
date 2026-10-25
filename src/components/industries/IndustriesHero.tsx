"use client";

import React from "react";
import { motion } from "framer-motion";
import { Factory } from "lucide-react";

export const IndustriesHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-900 text-white overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/30 via-navy-950 to-slate-950 -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:36px_36px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-300 text-xs font-semibold border border-sky-400/20 backdrop-blur-md">
                        <Factory className="w-4 h-4 text-sky-400" />
                        <span>Target Vertical Capability Matrix</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                        Industries We <span className="text-sky-400">Support</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
                        Exploring how Oracle Project Portfolio Management (Oracle PPM) capabilities can potentially optimize project controls, financial costing, revenue recognition, and resource management across key industry sectors.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
