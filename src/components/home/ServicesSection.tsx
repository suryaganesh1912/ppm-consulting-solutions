"use client";

import React from "react";
import Link from "next/link";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import {
    Compass,
    Rocket,
    Headphones,
    Database,
    ArrowRight,
    Check,
} from "lucide-react";

const coreCapabilities = [
    {
        title: "Cloud & EBS Implementation",
        description:
            "Turnkey deployment of Oracle PPM Cloud and E-Business Suite Project Financials, including multi-org architecture, WBS configuration, and subledger accounting setup.",
        icon: Rocket,
        tag: "Implementation",
        href: "/services#oracle-ppm-implementation",
    },
    {
        title: "Legacy Data Migration (FBDI)",
        description:
            "Automated data extraction, validation, and historical transaction loading via Oracle File-Based Data Import (FBDI) and REST APIs with financial reconciliation.",
        icon: Database,
        tag: "Data Engineering",
        href: "/services#data-migration",
    },
    {
        title: "Managed Support & Release Readiness",
        description:
            "Sustained application support, regression testing for quarterly Oracle Cloud releases, system health checks, and end-user enablement.",
        icon: Headphones,
        tag: "Managed Services",
        href: "/services#oracle-ppm-support",
    },
];

export const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-canvas-subtle border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Enterprise Capabilities"
                    title="Oracle PPM Advisory & Delivery Services"
                    description="Tailored consulting offerings designed to deliver measurable improvements in project governance, financial visibility, and system performance."
                    align="center"
                />

                {/* Asymmetric Service Layout: Featured Practice Pillar + 3 Supporting Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Featured Anchor Service: Strategic PPM Advisory */}
                    <div className="lg:col-span-5 p-7 sm:p-8 rounded-[10px] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-sm flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/80 px-2.5 py-0.5 rounded-[4px]">
                                    Lead Advisory Practice
                                </span>
                                <div className="w-10 h-10 rounded-[6px] bg-sky-600/20 text-sky-400 border border-sky-500/30 flex items-center justify-center">
                                    <Compass className="w-5 h-5" />
                                </div>
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                                Strategic Oracle PPM Consulting
                            </h3>

                            <p className="text-sm text-slate-300 leading-relaxed font-normal">
                                Comprehensive architectural assessment, software fit-gap evaluation, and financial governance design. We partner with CFOs and program leaders to ensure Oracle PPM directly supports strategic corporate objectives.
                            </p>

                            <div className="space-y-2 pt-2 border-t border-slate-800">
                                <div className="text-xs font-semibold text-slate-200">
                                    Key Engagement Deliverables:
                                </div>
                                <ul className="space-y-2 text-xs text-slate-400">
                                    <li className="flex items-center gap-2">
                                        <span className="w-4 h-4 rounded-full bg-sky-900/60 text-sky-400 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3" />
                                        </span>
                                        <span>ERP to PPM Fit-Gap & Architecture Roadmap</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-4 h-4 rounded-full bg-sky-900/60 text-sky-400 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3" />
                                        </span>
                                        <span>Project Subledger & General Ledger Accounting Models</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-4 h-4 rounded-full bg-sky-900/60 text-sky-400 flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3" />
                                        </span>
                                        <span>Multi-Entity & Multi-Currency Governance Frameworks</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-slate-800">
                            <Button
                                href="/services"
                                variant="accent"
                                size="sm"
                                fullWidth
                                icon={<ArrowRight className="w-4 h-4" />}
                            >
                                View Strategic Offerings
                            </Button>
                        </div>
                    </div>

                    {/* Supporting Service Capabilities */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-1 gap-4">
                        {coreCapabilities.map((service) => {
                            const Icon = service.icon;
                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className="p-5 sm:p-6 rounded-[10px] bg-surface border border-theme hover:border-theme-strong shadow-xs transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-theme flex items-center justify-center shrink-0">
                                            <Icon className="w-5 h-5" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                                                    {service.tag}
                                                </span>
                                            </div>
                                            <h4 className="text-base font-bold text-color-primary group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                                {service.title}
                                            </h4>
                                            <p className="text-xs sm:text-sm text-color-secondary leading-relaxed max-w-xl">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="shrink-0 self-end sm:self-center">
                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-color-muted group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                                            Explore <ArrowRight className="w-3.5 h-3.5" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
