"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
import {
    Briefcase,
    Building2,
    Wrench,
    Cpu,
    ArrowRight,
} from "lucide-react";

const featuredIndustries = [
    {
        id: "professional-services",
        title: "Professional Services",
        description:
            "Granular time-and-materials tracking, billable consultant utilization, milestone accounting, and automated client invoicing.",
        icon: Briefcase,
        badge: "T&M Billing",
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        description:
            "Capital project cost accumulation, subcontractor commitment tracking, AIA G702 billing compliance, and cost variance monitoring.",
        icon: Building2,
        badge: "AIA Billing & CapEx",
    },
    {
        id: "engineering",
        title: "Engineering Services",
        description:
            "Deliverable-based progress billing, multi-stage WBS architectures, overhead burdening rates, and earned value performance tracking.",
        icon: Wrench,
        badge: "Earned Value & WBS",
    },
    {
        id: "technology",
        title: "Technology & Software",
        description:
            "Software capitalization compliance (ASC 350-40), internal R&D project costing, agile release tracking, and cloud asset accumulation.",
        icon: Cpu,
        badge: "CapEx R&D",
    },
];

export const IndustriesSection: React.FC = () => {
    return (
        <section id="industries" className="py-20 bg-canvas-subtle border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <SectionHeading
                        tagline="Vertical Specialization"
                        title="Industries We Address"
                        description="Oracle PPM delivers adaptable project financial accounting tailored to solve domain-specific compliance and revenue recognition challenges."
                        align="left"
                    />
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 hover:underline shrink-0 pb-1"
                    >
                        <span>View all 7 supported industries</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {featuredIndustries.map((ind) => {
                        const Icon = ind.icon;
                        return (
                            <Link
                                key={ind.title}
                                href={`/industries#${ind.id}`}
                                className="p-5 sm:p-6 rounded-[8px] bg-surface border border-theme hover:border-theme-strong shadow-xs transition-colors flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                            >
                                <div className="space-y-3.5">
                                    <div className="flex items-center justify-between">
                                        <div className="w-9 h-9 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-theme flex items-center justify-center">
                                            <Icon className="w-4.5 h-4.5" />
                                        </div>
                                        <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-theme">
                                            {ind.badge}
                                        </span>
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-color-primary group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                            {ind.title}
                                        </h3>
                                        <p className="mt-1.5 text-xs text-color-secondary leading-relaxed">
                                            {ind.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 pt-3 border-t border-theme-subtle flex items-center justify-between text-xs font-medium text-color-muted group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                    <span>Industry workflows</span>
                                    <ArrowRight className="w-3.5 h-3.5 opacity-60" />
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
