"use client";

import React from "react";
import { Cpu } from "lucide-react";

export const OraclePPMHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#1E1E1E] text-white border-b border-[#333333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#2E2E2E] border border-[#444444] text-[#00A3C4] text-xs font-semibold">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Functional Architecture & Domain Guide</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        Oracle PPM <span className="text-[#F80000]">Architectural Suite</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-[#E5E5E5] font-normal leading-relaxed">
                        Oracle Project Portfolio Management (Oracle PPM) Cloud unifies operational project execution with rigorous enterprise financial controls. Explore the 6 core pillars governing project costing, billing, resources, and portfolio governance below.
                    </p>
                </div>
            </div>
        </section>
    );
};
