"use client";

import React from "react";
import { motion } from "framer-motion";
import { careerPillars } from "@/data/careersData";

export const WhyWorkWithUs: React.FC = () => {
    return (
        <section className="py-16 md:py-24 bg-white text-slate-900 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                        Practice Excellence
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Why Build Your Career Here?
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600">
                        We foster an environment dedicated to technical mastery, career trajectory advancement, and enterprise consulting excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {careerPillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-500/50 hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
