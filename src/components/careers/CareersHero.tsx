"use client";

import React from "react";
import { Users } from "lucide-react";

export const CareersHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-[#1E1E1E] text-white border-b border-[#333333]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
                <div className="max-w-3xl mx-auto space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#2E2E2E] border border-[#444444] text-[#00A3C4] text-xs font-semibold">
                        <Users className="w-3.5 h-3.5" />
                        <span>Join Our Oracle Advisory Practice</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                        Build Your Career with <span className="text-[#F80000]">PPM CONSULTING SOLUTIONS</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto font-normal">
                        Shape the future of enterprise project portfolio management. Work alongside senior Oracle PPM architects, solve high-impact financial challenges, and accelerate your professional growth.
                    </p>
                </div>
            </div>
        </section>
    );
};
