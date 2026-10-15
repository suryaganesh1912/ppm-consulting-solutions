"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { oraclePPMDomains, FunctionalDomain } from "@/data/oraclePPMData";
import { Button } from "../ui/Button";
import {
    BookOpen,
    HelpCircle,
    ShieldCheck,
    Layers,
    CheckCircle2,
    ArrowRight,
    Sparkles,
} from "lucide-react";

export const ModuleExplorer: React.FC = () => {
    const [selectedModuleId, setSelectedModuleId] = useState<string>("project-foundation");

    const selectedModule: FunctionalDomain =
        oraclePPMDomains.find((m) => m.id === selectedModuleId) || oraclePPMDomains[0];

    const handleSelectModule = (id: string) => {
        setSelectedModuleId(id);
    };

    return (
        <section className="py-12 md:py-20 bg-slate-950 text-white min-h-[800px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Module Selector Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold border border-sky-400/20">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Interactive Module Explorer</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                        Select an Oracle PPM Module
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400">
                        Click any module below to inspect its core functional topics, business purpose, and consulting capabilities.
                    </p>
                </div>

                {/* 4x2 Interactive Module Selector Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                    {oraclePPMDomains.map((module) => {
                        const Icon = module.icon;
                        const isSelected = module.id === selectedModuleId;

                        return (
                            <button
                                key={module.id}
                                type="button"
                                onClick={() => handleSelectModule(module.id)}
                                className={`p-4 md:p-5 rounded-xl text-left border transition-all duration-200 cursor-pointer flex flex-col justify-between group relative overflow-hidden ${isSelected
                                    ? "bg-slate-900 border-sky-500 text-white ring-2 ring-sky-400/50 shadow-[0_0_25px_rgba(14,165,233,0.3)]"
                                    : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/60"
                                    }`}
                            >
                                {/* Active Accent Bar */}
                                {isSelected && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}

                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span
                                            className={`text-[10px] font-mono font-bold tracking-wider uppercase ${isSelected ? "text-sky-400" : "text-slate-400"
                                                }`}
                                        >
                                            {module.moduleNumber}
                                        </span>
                                        <div
                                            className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${isSelected
                                                ? "bg-sky-500 text-white"
                                                : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                                                }`}
                                        >
                                            <Icon className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div>
                                        <h3
                                            className={`text-sm md:text-base font-bold transition-colors ${isSelected ? "text-white" : "text-slate-200 group-hover:text-white"
                                                }`}
                                        >
                                            {module.title}
                                        </h3>
                                        <p className="text-[11px] text-slate-400 font-medium truncate mt-0.5">
                                            {module.category}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Single Dynamic Content Container with Framer Motion transitions */}
                <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                    {/* Subtle Ambient Background Gradient */}
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedModule.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="space-y-8"
                        >
                            {/* Module Header */}
                            <div className="pb-6 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="space-y-2">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider border border-sky-400/20">
                                        <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                                        <span>{selectedModule.category}</span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                                        {selectedModule.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
                                        {selectedModule.description}
                                    </p>
                                </div>

                                <div className="shrink-0">
                                    <Button
                                        href="/#contact"
                                        variant="primary"
                                        size="md"
                                        icon={<ArrowRight className="w-4 h-4" />}
                                    >
                                        Consult on {selectedModule.title}
                                    </Button>
                                </div>
                            </div>

                            {/* Main 2-Column Content Grid */}
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                                {/* Left Column: What It Is & Why Businesses Use It */}
                                <div className="lg:col-span-6 space-y-6">
                                    {/* What It Is */}
                                    <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
                                            <BookOpen className="w-5 h-5 text-sky-400 shrink-0" />
                                            <h4>What It Is</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                                            {selectedModule.whatItIs}
                                        </p>
                                    </div>

                                    {/* Why Businesses Use It */}
                                    <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                                        <div className="flex items-center gap-2 text-sky-400 font-bold text-base">
                                            <HelpCircle className="w-5 h-5 text-sky-400 shrink-0" />
                                            <h4>Why Businesses Use It</h4>
                                        </div>
                                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                                            {selectedModule.whyBusinessesUseIt}
                                        </p>
                                    </div>
                                </div>

                                {/* Right Column: Consulting Services & Key Functional Topics */}
                                <div className="lg:col-span-6 space-y-6">
                                    {/* Consulting Services Provided */}
                                    <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                                        <div className="flex items-center gap-2 text-white font-bold text-base pb-3 border-b border-slate-800">
                                            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                                            <h4>Consulting Capabilities</h4>
                                        </div>
                                        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                                            {selectedModule.consultingServices.map((service) => (
                                                <li key={service} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                                                    <span>{service}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Key Functional Topics */}
                                    <div className="p-6 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                                        <div className="flex items-center gap-2 text-white font-bold text-base pb-3 border-b border-slate-800">
                                            <Layers className="w-5 h-5 text-sky-400 shrink-0" />
                                            <h4>Key Functional Topics</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedModule.functionalTopics.map((topic) => (
                                                <span
                                                    key={topic}
                                                    className="px-3 py-1.5 rounded-lg bg-sky-500/10 text-sky-300 text-xs font-semibold border border-sky-400/20"
                                                >
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom CTA Banner */}
                            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
                                <p>
                                    Need specialized advisory or implementation support for{" "}
                                    <strong className="text-white">{selectedModule.title}</strong>?
                                </p>
                                <Button
                                    href="/#contact"
                                    variant="outline-light"
                                    size="sm"
                                    icon={<ArrowRight className="w-4 h-4" />}
                                >
                                    Consult on {selectedModule.title}
                                </Button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
