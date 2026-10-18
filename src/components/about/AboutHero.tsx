"use client";

import React from "react";
import { Compass } from "lucide-react";

export const AboutHero: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-slate-900 text-white border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-slate-800 border border-slate-700 text-sky-400 text-xs font-semibold">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Dedicated Oracle PPM Advisory Practice</span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                        About <span className="text-sky-400">PPM CONSULTING SOLUTIONS</span>
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
                        Specializing in Oracle Project Portfolio Management (Oracle PPM) consulting, financial process optimization, and enterprise business transformation.
                    </p>
                </div>
            </div>
        </section>
    );
};
