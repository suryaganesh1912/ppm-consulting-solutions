"use client";

import React, { useState } from "react";
import { oraclePPMDomains } from "@/data/oraclePPMData";
import { Button } from "../ui/Button";
import { ArrowRight, Layers, Check, ShieldCheck, Database } from "lucide-react";

export const ModuleExplorer: React.FC = () => {
    const [selectedModuleId, setSelectedModuleId] = useState<string>(
        oraclePPMDomains[0].id
    );

    const activeModule =
        oraclePPMDomains.find((m) => m.id === selectedModuleId) ||
        oraclePPMDomains[0];

    const ActiveIcon = activeModule.icon;

    return (
        <section className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.75 rounded-[4px] bg-[#E5E5E5]/50 dark:bg-[#333333] border border-theme text-[#00758F] dark:text-[#00A3C4] text-xs font-bold">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Interactive Capability Explorer</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-color-primary">
                        Oracle PPM Functional Domain Workbench
                    </h2>
                    <p className="text-xs sm:text-sm text-color-secondary leading-relaxed">
                        Select an Oracle PPM domain below to inspect its functional capabilities, subledger accounting implications, and enterprise integration points.
                    </p>
                </div>

                {/* Module Selector Bar (Accessible Tabs) */}
                <div
                    role="tablist"
                    aria-label="Oracle PPM Modules"
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 bg-canvas-subtle p-2 rounded-[8px] border border-theme"
                >
                    {oraclePPMDomains.map((mod) => {
                        const isSelected = mod.id === selectedModuleId;
                        const Icon = mod.icon;

                        return (
                            <button
                                key={mod.id}
                                role="tab"
                                id={`tab-${mod.id}`}
                                aria-controls={`panel-${mod.id}`}
                                aria-selected={isSelected}
                                onClick={() => setSelectedModuleId(mod.id)}
                                className={`flex flex-col items-center justify-center p-3 rounded-[6px] text-center transition-colors cursor-pointer border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] ${
                                    isSelected
                                        ? "bg-[#F80000] text-white border-[#D60000] shadow-sm font-bold"
                                        : "bg-surface text-color-secondary hover:text-[#F80000] hover:bg-[#E5E5E5]/40 border-theme"
                                }`}
                            >
                                <Icon className="w-4 h-4 mb-1.5 shrink-0 opacity-90" />
                                <span className="text-[10px] font-mono tracking-wider opacity-80 block">
                                    {mod.moduleNumber}
                                </span>
                                <span className="text-xs font-bold leading-tight mt-0.5 line-clamp-2">
                                    {mod.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Active Module Detailed Inspection Panel */}
                <div
                    id={`panel-${activeModule.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeModule.id}`}
                    className="rounded-[10px] bg-surface border border-theme shadow-sm p-6 sm:p-8 space-y-6"
                >
                    {/* Header: Title, Category, and Action */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-theme">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-[8px] bg-[#F80000] text-white flex items-center justify-center shrink-0 border border-[#D60000] shadow-sm">
                                <ActiveIcon className="w-6 h-6" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-mono font-bold text-[#00758F] dark:text-[#00A3C4] uppercase tracking-wider">
                                        {activeModule.moduleNumber} • {activeModule.category}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-color-primary tracking-tight">
                                    {activeModule.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-color-secondary mt-1 max-w-2xl leading-relaxed">
                                    {activeModule.description}
                                </p>
                            </div>
                        </div>

                        <div className="shrink-0">
                            <Button
                                href="/contact"
                                variant="primary"
                                size="sm"
                                icon={<ArrowRight className="w-3.5 h-3.5" />}
                            >
                                Consult on {activeModule.title.split(" ")[0]}
                            </Button>
                        </div>
                    </div>

                    {/* 3-Column Specifications Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        {/* Column 1: Core Functional Capabilities (7 cols) */}
                        <div className="md:col-span-7 space-y-4">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-color-primary flex items-center gap-1.5">
                                <ShieldCheck className="w-4 h-4 text-[#00758F] dark:text-[#00A3C4]" />
                                <span>Core Functional & Technical Capabilities</span>
                            </h4>
                            <div className="bg-canvas-subtle rounded-[8px] p-4 border border-theme space-y-2.5">
                                {activeModule.capabilities.map((cap) => (
                                    <div key={cap} className="flex items-start gap-2.5 text-xs text-color-secondary">
                                        <span className="w-4 h-4 rounded-full bg-[#00758F]/10 dark:bg-[#00A3C4]/15 text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="w-3 h-3" />
                                        </span>
                                        <span className="leading-relaxed">{cap}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-4 rounded-[8px] bg-[#242424] dark:bg-[#1A1A1A] text-white border border-[#3D3D3D] space-y-1">
                                <div className="text-[10px] font-bold text-[#00A3C4] uppercase tracking-wider">
                                    Measurable Business Outcome:
                                </div>
                                <p className="text-xs text-[#E5E5E5] leading-relaxed">
                                    {activeModule.businessValue}
                                </p>
                            </div>
                        </div>

                        {/* Column 2: Accounting & Architecture Integration (5 cols) */}
                        <div className="md:col-span-5 space-y-4">
                            {/* Subledger Accounting Impact */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-color-primary flex items-center gap-1.5">
                                    <Database className="w-4 h-4 text-[#00758F] dark:text-[#00A3C4]" />
                                    <span>Subledger Accounting & Financial Impact</span>
                                </h4>
                                <div className="p-4 rounded-[8px] bg-canvas-subtle border border-theme text-xs text-color-secondary leading-relaxed">
                                    {activeModule.accountingImpact}
                                </div>
                            </div>

                            {/* Connected Enterprise Integrations */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-color-primary flex items-center gap-1.5">
                                    <Layers className="w-4 h-4 text-[#00758F] dark:text-[#00A3C4]" />
                                    <span>Enterprise Integration Endpoints</span>
                                </h4>
                                <div className="flex flex-wrap gap-1.5">
                                    {activeModule.integrationPoints.map((point) => (
                                        <span
                                            key={point}
                                            className="px-2.5 py-1 rounded-[4px] bg-[#E5E5E5]/60 dark:bg-[#333333] text-color-primary text-[11px] font-semibold border border-theme font-mono"
                                        >
                                            {point}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
