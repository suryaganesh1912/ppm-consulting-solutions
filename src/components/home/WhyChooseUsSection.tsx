"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Award,
    Target,
    Workflow,
    TrendingUp,
} from "lucide-react";

const valuePillars = [
    {
        title: "Exclusive Oracle PPM Specialization",
        description:
            "Unlike broad IT generalists, our consulting practice is dedicated exclusively to Oracle Project Portfolio Management, delivering deep technical and functional mastery across Cloud and EBS.",
        icon: Award,
        metric: "100% Focused Practice",
    },
    {
        title: "Financial Governance & Controls",
        description:
            "We prioritize accounting accuracy, cost allocation rules, revenue recognition standards, and executive auditability—ensuring software configurations faithfully mirror your business models.",
        icon: Target,
        metric: "Subledger Precision",
    },
    {
        title: "Process & Rate Schedule Optimization",
        description:
            "We re-engineer complex work breakdown structures, multi-tiered burdening matrices, overhead schedules, and approval hierarchies to eliminate billing delays and administrative overhead.",
        icon: Workflow,
        metric: "Optimized WBS Rules",
    },
    {
        title: "Scalable Enterprise Architectures",
        description:
            "We design adaptable PPM architectures capable of scaling across multiple operating units, legal entities, tax jurisdictions, and diverse billing currencies without system degradation.",
        icon: TrendingUp,
        metric: "Multi-Org & Multi-Currency",
    },
];

export const WhyChooseUsSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Strategic Differentiation"
                    title="Why Organizations Choose PPM CONSULTING SOLUTIONS"
                    description="We combine deep functional Oracle PPM knowledge with business-first advisory to construct reliable, audit-ready project financial management environments."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {valuePillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="p-6 sm:p-7 rounded-[10px] bg-surface border border-theme hover:border-[#F80000]/60 shadow-xs transition-colors space-y-4 group"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] border border-theme flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-[#F80000] bg-[#F80000]/8 px-2.5 py-0.5 rounded border border-[#F80000]/25">
                                        {pillar.metric}
                                    </span>
                                </div>

                                <div className="space-y-1.5">
                                    <h3 className="text-base sm:text-lg font-bold text-color-primary group-hover:text-[#F80000] transition-colors">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-color-secondary leading-relaxed font-normal">
                                        {pillar.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
