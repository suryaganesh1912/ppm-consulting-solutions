"use client";

import React from "react";
import { careerPillars } from "@/data/careersData";
import { SectionHeading } from "../ui/SectionHeading";

export const WhyWorkWithUs: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Practice Culture"
                    title="Why Build Your Career Here?"
                    description="We foster an environment dedicated to technical mastery, career trajectory advancement, and enterprise consulting excellence."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {careerPillars.map((pillar) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={pillar.title}
                                className="bg-surface rounded-[10px] p-6 border border-theme hover:border-theme-strong shadow-xs transition-colors space-y-3.5 flex flex-col justify-between"
                            >
                                <div className="space-y-3">
                                    <div className="w-10 h-10 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-theme flex items-center justify-center font-bold">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-base font-bold text-color-primary">
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
