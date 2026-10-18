"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Target, Compass } from "lucide-react";

export const MissionVision: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-canvas-subtle border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Guiding Principles"
                    title="Our Mission & Vision"
                    description="Our foundation is built on delivering high-impact Oracle PPM consulting that aligns project controls with long-term enterprise goals."
                    align="center"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Mission Card */}
                    <div className="p-7 rounded-[10px] bg-surface border border-theme shadow-xs flex flex-col justify-between space-y-5">
                        <div className="space-y-3.5">
                            <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] border border-theme flex items-center justify-center">
                                <Target className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-color-primary">Our Mission</h3>
                            <p className="text-color-secondary leading-relaxed font-normal text-xs sm:text-sm">
                                &ldquo;Our mission is to help Oracle Cloud customers achieve their business goals through affordable, high-quality Oracle PPM consulting, implementation, and support services.&rdquo;
                            </p>
                        </div>
                        <div className="pt-3.5 border-t border-theme-subtle text-[11px] font-mono font-bold text-[#00758F] dark:text-[#00A3C4] uppercase tracking-wider">
                            Core Practice Mandate
                        </div>
                    </div>

                    {/* Vision Card */}
                    <div className="p-7 rounded-[10px] bg-[#242424] text-white border border-[#3D3D3D] shadow-xs flex flex-col justify-between space-y-5">
                        <div className="space-y-3.5">
                            <div className="w-10 h-10 rounded-[6px] bg-[#333333] text-[#00A3C4] border border-[#444444] flex items-center justify-center">
                                <Compass className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-white">Our Vision</h3>
                            <p className="text-[#E5E5E5] leading-relaxed font-normal text-xs sm:text-sm">
                                &ldquo;To be the premier enterprise advisory partner for Oracle PPM implementations and process optimization, recognized globally for deep functional expertise, architectural excellence, and long-term client value creation.&rdquo;
                            </p>
                        </div>
                        <div className="pt-3.5 border-t border-[#3D3D3D] text-[11px] font-mono font-bold text-[#00A3C4] uppercase tracking-wider">
                            Strategic Global Trajectory
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
