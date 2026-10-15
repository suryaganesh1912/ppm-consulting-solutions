"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sampleCaseStudies, SampleCaseStudy } from "@/data/caseStudiesData";
import { Button } from "../ui/Button";
import {
    FileText,
    AlertTriangle,
    Lightbulb,
    Layers,
    TrendingUp,
    X,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";

export const CaseStudiesGrid: React.FC = () => {
    const [activeCaseStudy, setActiveCaseStudy] = useState<SampleCaseStudy | null>(null);

    return (
        <section className="py-16 md:py-24 bg-white text-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                {/* Section Intro */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-8">
                    <div>
                        <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                            Consulting Scenarios
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                            Sample Oracle PPM Solutions
                        </h2>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                        Click any case study to inspect the complete business challenge, solution approach, Oracle PPM modules used, and expected benefits.
                    </p>
                </div>

                {/* 3 Case Study Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sampleCaseStudies.map((cs, index) => (
                        <motion.div
                            key={cs.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-sky-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div className="space-y-4">
                                {/* Header & Badges */}
                                <div className="flex items-center justify-between">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 text-[11px] font-bold border border-amber-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                        {cs.badge}
                                    </span>
                                    <span className="text-xs font-semibold text-slate-500">
                                        {cs.industry}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                                        {cs.category}
                                    </span>
                                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors mt-0.5">
                                        {cs.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {cs.summary}
                                </p>

                                {/* Modules Tags */}
                                <div className="pt-2">
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-2">
                                        Oracle PPM Modules
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cs.oraclePPMAreas.map((area) => (
                                            <span
                                                key={area}
                                                className="px-2 py-0.5 rounded bg-white text-slate-700 text-[11px] font-semibold border border-slate-200"
                                            >
                                                {area}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-6 mt-6 border-t border-slate-200">
                                <button
                                    type="button"
                                    onClick={() => setActiveCaseStudy(cs)}
                                    className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold text-sky-600 hover:text-sky-700 py-2 rounded-lg bg-sky-50 hover:bg-sky-100 transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    <span>View Full Case Study</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Interactive Modal Popup for Detailed Case Study */}
            <AnimatePresence>
                {activeCaseStudy && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveCaseStudy(null)}
                            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
                        />

                        {/* Modal Content Window */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto z-10 border border-slate-200 p-6 sm:p-8 space-y-6"
                        >
                            {/* Close Button */}
                            <button
                                type="button"
                                onClick={() => setActiveCaseStudy(null)}
                                className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Modal Header */}
                            <div className="space-y-2 pr-8">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-800 text-xs font-bold border border-amber-500/20">
                                        {activeCaseStudy.badge}
                                    </span>
                                    <span className="px-2.5 py-1 rounded bg-sky-500/10 text-sky-700 text-xs font-bold">
                                        {activeCaseStudy.category}
                                    </span>
                                    <span className="text-xs text-slate-500 font-semibold">
                                        {activeCaseStudy.industry}
                                    </span>
                                </div>
                                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                                    {activeCaseStudy.title}
                                </h3>
                            </div>

                            {/* Business Challenge */}
                            <div className="p-4 rounded-xl bg-red-50/50 border border-red-200/60 space-y-2">
                                <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                                    <AlertTriangle className="w-4 h-4 text-red-600" />
                                    <h4>Business Challenge</h4>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    {activeCaseStudy.businessChallenge}
                                </p>
                            </div>

                            {/* Solution Approach */}
                            <div className="p-4 rounded-xl bg-sky-50/50 border border-sky-200/60 space-y-2">
                                <div className="flex items-center gap-2 text-sky-800 font-bold text-sm">
                                    <Lightbulb className="w-4 h-4 text-sky-600" />
                                    <h4>Solution Approach</h4>
                                </div>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    {activeCaseStudy.solutionApproach}
                                </p>
                            </div>

                            {/* Oracle PPM Areas Covered */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                                    <Layers className="w-4 h-4 text-sky-600" />
                                    <h4>Oracle PPM Areas Covered</h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {activeCaseStudy.oraclePPMAreas.map((area) => (
                                        <span
                                            key={area}
                                            className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Expected Business Benefits */}
                            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200/60 space-y-3">
                                <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                                    <h4>Expected Business Benefits</h4>
                                </div>
                                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                                    {activeCaseStudy.expectedBenefits.map((benefit) => (
                                        <li key={benefit} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Footer CTA */}
                            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <span className="text-xs text-slate-500">
                                    Interested in similar Oracle PPM solutions for your enterprise?
                                </span>
                                <Button
                                    href="/#contact"
                                    variant="accent"
                                    size="sm"
                                    icon={<ArrowRight className="w-4 h-4" />}
                                >
                                    Discuss Architecture
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
