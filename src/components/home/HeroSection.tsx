"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { HeroVisual } from "./HeroVisual";
import { ArrowRight, PhoneCall, ShieldCheck, ChevronRight } from "lucide-react";

export const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
            {/* Subtle Corporate Background Glow */}
            <div className="absolute top-0 right-0 -z-10 w-full max-w-4xl h-[500px] bg-gradient-to-b from-sky-50/70 via-slate-50/50 to-transparent blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:40px_40px] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Column: Headlines & Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6 text-left"
                    >
                        {/* Enterprise Tag / Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
                            <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                            <span>Oracle Project Portfolio Management (Oracle PPM) Practice</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                            Transforming Project Management with{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-sky-800 to-sky-600">
                                Oracle PPM Solutions
                            </span>
                        </h1>

                        {/* Supporting Text */}
                        <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                            Helping organizations streamline project financial management, project costing, billing, planning, reporting, and Oracle PPM implementations.
                        </p>

                        {/* CTAs */}
                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Button
                                href="#services"
                                variant="primary"
                                size="lg"
                                icon={<ArrowRight className="w-5 h-5" />}
                            >
                                Explore Our Services
                            </Button>
                            
                        </div>

                        {/* Key Value Highlights */}
                        <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-semibold text-slate-700">
                            <div className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-sky-600 shrink-0" />
                                <span>Financial Management</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ChevronRight className="w-4 h-4 text-sky-600 shrink-0" />
                                <span>Costing & Billing</span>
                            </div>
                            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                                <ChevronRight className="w-4 h-4 text-sky-600 shrink-0" />
                                <span>Oracle PPM Cloud</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Technology Visual */}
                    <div className="lg:col-span-5 w-full">
                        <HeroVisual />
                    </div>
                </div>
            </div>
        </section>
    );
};
