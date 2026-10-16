"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, CheckCircle2 } from "lucide-react";

export const WhoWeAre: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <SectionHeading
                            tagline="Organizational Focus"
                            title="Who We Are"
                            align="left"
                            theme="light"
                        />

                        <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                            <strong>PPM CONSULTING SOLUTIONS</strong> is an enterprise consulting practice dedicated to empowering organizations through specialized Oracle Project Portfolio Management (Oracle PPM) solutions.
                        </p>

                        <p className="text-slate-600 leading-relaxed font-normal">
                            We focus on helping enterprises streamline project financial management, optimize project costing and billing rules, establish robust planning controls, and configure custom analytics across complex portfolio environments.
                        </p>
                    </motion.div>

                    {/* Right Highlight Graphic Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-5 p-8 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6 relative overflow-hidden"
                    >
                        <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                            <ShieldCheck className="w-6 h-6 text-sky-400 shrink-0" />
                            <div>
                                <h3 className="font-bold text-base text-white">
                                    Our Core Commitment
                                </h3>
                                <p className="text-xs text-slate-400">
                                    Value-Driven Oracle PPM Advisory
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-4 text-xs sm:text-sm text-slate-300">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                <span>Specialized functional advisory centered entirely on Oracle PPM Cloud modules.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                <span>Adaptable implementation methodologies tailored to unique organizational workflows.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
