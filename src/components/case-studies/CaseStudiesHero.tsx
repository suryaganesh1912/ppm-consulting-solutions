"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, AlertCircle } from "lucide-react";

export const CaseStudiesHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden border-b border-slate-800">
            {/* Background Decorative Grid */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center max-w-3xl mx-auto space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-400/20">
                        <Briefcase className="w-4 h-4" />
                        <span>Consulting Practice Portfolio</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        Enterprise Case Studies
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                        Explore how Oracle PPM Cloud architecture resolves complex financial, operational, and billing challenges across enterprise environments.
                    </p>

                    {/* Sample Case Study Disclaimer Alert */}
                    <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-500/10 text-amber-300 text-xs font-medium border border-amber-500/20 max-w-xl mx-auto mt-2">
                        <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
                        <span>
                            <strong>Note:</strong> All case studies below represent sample consulting scenarios detailing potential architectural solutions.
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
