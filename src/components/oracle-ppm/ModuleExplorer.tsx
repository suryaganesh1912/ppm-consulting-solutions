"use client";

import React from "react";
import { oraclePPMDomains } from "@/data/oraclePPMData";
import { Sparkles } from "lucide-react";

export const ModuleExplorer: React.FC = () => {
    return (
        <section className="py-12 md:py-20 bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-400/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Interactive Module Explorer</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Select an Oracle PPM Module
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Explore core Oracle Project Portfolio Management modules designed to optimize enterprise project delivery, resourcing, costing, and billing.
                    </p>
                </div>

                {/* 4 Cards Grid - Balanced Two-Column Layout on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {oraclePPMDomains.map((module) => {
                        const Icon = module.icon;

                        return (
                            <div
                                key={module.id}
                                className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 flex flex-col justify-between group relative overflow-hidden transition-all duration-300 hover:border-sky-500/50 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-mono font-bold tracking-wider uppercase text-sky-400">
                                            {module.moduleNumber}
                                        </span>
                                        <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-400/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <span className="text-xs font-semibold text-sky-400 tracking-wide uppercase block">
                                            {module.category}
                                        </span>
                                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                                            {module.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-1">
                                            {module.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
