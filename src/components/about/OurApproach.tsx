"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Search,
    FileSearch,
    Layout,
    Sliders,
    CheckCircle2,
    Headphones,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Understand the Business",
        description:
            "Engage key stakeholders to map financial objectives, operational constraints, reporting expectations, and portfolio goals.",
        icon: Search,
    },
    {
        number: "02",
        title: "Analyze Existing Processes",
        description:
            "Evaluate current work breakdown structures, rate schedules, costing rules, and system integration points to identify gaps.",
        icon: FileSearch,
    },
    {
        number: "03",
        title: "Design the Solution",
        description:
            "Architect tailored Oracle PPM configurations, multi-currency accounting models, contract billing workflows, and OTBI reports.",
        icon: Layout,
    },
    {
        number: "04",
        title: "Configure & Implement",
        description:
            "Execute system setup across Project Foundation, Costing, Billing, Contracts, and Resource Management modules.",
        icon: Sliders,
    },
    {
        number: "05",
        title: "Test & Validate",
        description:
            "Perform comprehensive User Acceptance Testing (UAT), financial reconciliation, end-to-end data migration, and process validation.",
        icon: CheckCircle2,
    },
    {
        number: "06",
        title: "Support & Optimize",
        description:
            "Deliver post-go-live stabilization, user training, continuous performance tuning, and quarter release adoption support.",
        icon: Headphones,
    },
];

export const OurApproach: React.FC = () => {
    return (
        <section className="py-20 bg-white border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Proven Methodology"
                    title="Our 6-Step Implementation Approach"
                    description="A structured, risk-mitigated consulting framework designed to ensure seamless Oracle PPM alignment with enterprise financial controls."
                    align="center"
                    theme="light"
                />

                <div className="mt-16 relative">
                    {/* Connecting Line for Desktop */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 -z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.08 * idx }}
                                    className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group flex flex-col justify-between"
                                >
                                    <div>
                                        {/* Header: Step Number & Icon */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-2xl font-black text-slate-300 font-mono group-hover:text-sky-600 transition-colors">
                                                {step.number}
                                            </span>
                                            <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 leading-relaxed font-normal">
                                            {step.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-sky-600">
                                        <span>Phase {idx + 1} Execution</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
