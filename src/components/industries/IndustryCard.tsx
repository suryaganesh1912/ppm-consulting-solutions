"use client";

import React from "react";
import { IndustryCapability } from "@/data/industriesData";
import { Button } from "../ui/Button";
import { ArrowRight, Layers, Check } from "lucide-react";

interface IndustryCardProps {
    capability: IndustryCapability;
    index: number;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({
    capability,
}) => {
    const Icon = capability.icon;

    return (
        <div
            id={capability.id}
            className="p-6 sm:p-7 rounded-[10px] bg-surface border border-theme hover:border-theme-strong shadow-xs transition-colors flex flex-col justify-between group scroll-mt-28"
        >
            <div className="space-y-4">
                {/* Header Icon & Title */}
                <div className="flex items-start justify-between gap-3">
                    <div className="w-10 h-10 rounded-[6px] bg-slate-900 dark:bg-sky-600 text-white flex items-center justify-center shrink-0 border border-slate-800 dark:border-sky-500">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-theme uppercase tracking-wider">
                        Vertical Practice
                    </span>
                </div>

                <div>
                    <h3 className="text-lg font-bold text-color-primary group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {capability.title}
                    </h3>
                    <p className="text-xs font-semibold text-sky-700 dark:text-sky-400 mt-0.5">
                        {capability.subtitle}
                    </p>
                </div>

                {/* Capability Summary Statement */}
                <div className="p-3.5 rounded-[6px] bg-canvas-subtle border border-theme">
                    <p className="text-xs font-medium text-color-secondary leading-relaxed">
                        {capability.summary}
                    </p>
                </div>

                {/* Potential Benefits */}
                <div className="space-y-2 pt-1">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-color-primary">
                        Target Enterprise Capabilities
                    </h4>
                    <ul className="space-y-1.5 text-xs text-color-secondary">
                        {capability.potentialBenefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-2">
                                <span className="w-3.5 h-3.5 rounded-full bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5" />
                                </span>
                                <span className="leading-relaxed">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Applicable Oracle PPM Modules */}
                <div className="pt-3 border-t border-theme-subtle flex items-center gap-1.5 flex-wrap text-xs text-color-secondary">
                    <span className="font-semibold text-color-primary flex items-center gap-1 text-[11px]">
                        <Layers className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" /> Key Modules:
                    </span>
                    {capability.keyModules.map((mod) => (
                        <span
                            key={mod}
                            className="px-2 py-0.5 rounded-[4px] bg-slate-100 dark:bg-slate-800 text-color-primary text-[10px] font-mono font-medium border border-theme"
                        >
                            {mod}
                        </span>
                    ))}
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-3.5 border-t border-theme-subtle">
                <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                    Discuss {capability.title} Advisory
                </Button>
            </div>
        </div>
    );
};
