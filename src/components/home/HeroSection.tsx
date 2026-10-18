"use client";

import React from "react";
import { Button } from "../ui/Button";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight, ShieldCheck, Check, Layers } from "lucide-react";

export const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
                    {/* Left Column: Headlines & Call to Action */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        {/* Practice Eyebrow Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-slate-100 dark:bg-slate-800 border border-theme text-color-secondary text-xs font-semibold">
                            <ShieldCheck className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                            <span>Enterprise Oracle Project Portfolio Management (Oracle PPM) Practice</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-color-primary tracking-tight leading-[1.15]">
                            Transforming Project Controls with{" "}
                            <span className="text-sky-600 dark:text-sky-400">
                                Oracle PPM Solutions
                            </span>
                        </h1>

                        {/* Supporting Value Proposition */}
                        <p className="text-base sm:text-lg text-color-secondary leading-relaxed font-normal max-w-2xl">
                            Empowering enterprise organizations to unify project execution with financial governance: streamlining project costing, contract billing, multi-currency revenue recognition, and Oracle Cloud PPM deployments.
                        </p>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                            <Button
                                href="/services"
                                variant="primary"
                                size="lg"
                                icon={<ArrowRight className="w-4 h-4" />}
                            >
                                Explore Service Offerings
                            </Button>
                            <Button
                                href="/oracle-ppm"
                                variant="secondary"
                                size="lg"
                                icon={<Layers className="w-4 h-4" />}
                                iconPosition="left"
                            >
                                Architecture Explorer
                            </Button>
                        </div>

                        {/* Key Architectural Controls */}
                        <div className="pt-6 border-t border-theme-subtle grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-color-secondary">
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3" />
                                </span>
                                <span>Project Financials & WIP</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3" />
                                </span>
                                <span>Automated Billing & AR</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-4 h-4 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0">
                                    <Check className="w-3 h-3" />
                                </span>
                                <span>Cloud & EBS Integration</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Technology Visual */}
                    <div className="lg:col-span-5 w-full">
                        <HeroVisual />
                    </div>
                </div>
            </div>
        </section>
    );
};
