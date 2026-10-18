"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ShieldCheck, Check } from "lucide-react";

export const WhoWeAre: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    {/* Text Content */}
                    <div className="lg:col-span-7 space-y-5">
                        <SectionHeading
                            tagline="Practice Identity"
                            title="Who We Are"
                            align="left"
                        />

                        <p className="text-base sm:text-lg text-color-primary leading-relaxed font-normal">
                            <strong className="text-[#F80000]">PPM CONSULTING SOLUTIONS</strong> is an enterprise consulting practice dedicated to empowering organizations through specialized Oracle Project Portfolio Management (Oracle PPM) solutions.
                        </p>

                        <p className="text-sm sm:text-base text-color-secondary leading-relaxed font-normal">
                            We focus on helping enterprises streamline project financial management, optimize project costing and billing rules, establish robust planning controls, and configure custom analytics across complex portfolio environments.
                        </p>
                    </div>

                    {/* Right Highlight Graphic Card */}
                    <div className="lg:col-span-5 p-7 rounded-[10px] bg-[#242424] text-white border border-[#3D3D3D] shadow-md space-y-5">
                        <div className="flex items-center gap-3 border-b border-[#3D3D3D] pb-4">
                            <div className="w-9 h-9 rounded-[6px] bg-[#333333] text-[#00A3C4] border border-[#444444] flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-sm sm:text-base text-white">
                                    Our Core Commitment
                                </h3>
                                <p className="text-xs text-[#E5E5E5]">
                                    Value-Driven Oracle PPM Advisory
                                </p>
                            </div>
                        </div>

                        <ul className="space-y-3 text-xs sm:text-sm text-[#E5E5E5]">
                            <li className="flex items-start gap-2.5">
                                <span className="w-4 h-4 rounded-full bg-[#00758F]/30 text-[#00A3C4] flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                <span>Specialized functional advisory centered entirely on Oracle PPM Cloud modules.</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="w-4 h-4 rounded-full bg-[#00758F]/30 text-[#00A3C4] flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-3 h-3" />
                                </span>
                                <span>Adaptable implementation methodologies tailored to unique organizational workflows.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};
