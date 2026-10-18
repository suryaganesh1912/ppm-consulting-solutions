"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Search,
    FileSearch,
    Layout,
    Sliders,
    Check,
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
        icon: Check,
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
        <section className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Delivery Lifecycle"
                    title="Our 6-Step Implementation Approach"
                    description="A structured, risk-mitigated consulting framework designed to ensure seamless Oracle PPM alignment with enterprise financial controls."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={step.number}
                                className="p-6 rounded-[10px] bg-surface border border-theme hover:border-theme-strong shadow-xs transition-colors flex flex-col justify-between group space-y-4"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-xl font-bold font-mono text-slate-400 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                            {step.number}
                                        </span>
                                        <div className="w-9 h-9 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-theme flex items-center justify-center">
                                            <Icon className="w-4.5 h-4.5" />
                                        </div>
                                    </div>

                                    <h3 className="text-base font-bold text-color-primary mb-1.5">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-color-secondary leading-relaxed font-normal">
                                        {step.description}
                                    </p>
                                </div>

                                <div className="pt-3 border-t border-theme-subtle flex items-center text-[11px] font-mono font-semibold text-color-muted group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                    <span>Phase {idx + 1} Milestone</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
