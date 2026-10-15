"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Target, Compass } from "lucide-react";

export const MissionVision: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Guiding Principles"
                    title="Our Mission & Vision"
                    description="Our foundation is built on delivering high-impact Oracle PPM consulting that aligns project controls with long-term enterprise goals."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mission Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 border border-sky-500/20 flex items-center justify-center">
                                <Target className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
                            <p className="text-slate-600 leading-relaxed font-normal text-sm md:text-base">
                                &ldquo;To empower organizations with robust, scalable Oracle Project Portfolio Management (Oracle PPM) solutions—optimizing project financial controls, enhancing cost and revenue visibility, and driving sustainable operational performance.&rdquo;
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-sky-700 uppercase tracking-wider">
                            Core Objective & Commitment
                        </div>
                    </motion.div>

                    {/* Vision Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-md hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center">
                                <Compass className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Our Vision</h3>
                            <p className="text-slate-300 leading-relaxed font-normal text-sm md:text-base">
                                &ldquo;To be the premier enterprise advisory partner for Oracle PPM implementations and process optimization, recognized globally for deep functional expertise, architectural excellence, and long-term client value creation.&rdquo;
                            </p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-sky-400 uppercase tracking-wider">
                            Strategic Future Direction
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
