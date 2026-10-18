"use client";

import React from "react";
import { exampleJobRoles } from "@/data/careersData";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export const ExampleRolesGrid: React.FC = () => {
    return (
        <section className="py-16 md:py-20 bg-canvas-subtle border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <SectionHeading
                    tagline="Talent Spectrum"
                    title="Representative Consulting Roles"
                    description="Profiles across functional advisory, technical integration, ERP financials, and project delivery."
                    align="center"
                />

                {/* Example Role Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exampleJobRoles.map((role) => (
                        <div
                            key={role.id}
                            className="bg-surface rounded-[10px] p-6 border border-theme hover:border-theme-strong shadow-xs transition-colors flex flex-col justify-between group space-y-5"
                        >
                            <div className="space-y-3.5">
                                {/* Badge & Experience */}
                                <div className="flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-[4px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] text-[11px] font-mono font-semibold border border-theme">
                                        {role.badge}
                                    </span>
                                    <span className="text-[11px] font-mono text-color-muted">
                                        {role.experience}
                                    </span>
                                </div>

                                <div>
                                    <span className="text-[10px] font-bold text-[#00758F] dark:text-[#00A3C4] uppercase tracking-wider block">
                                        {role.category}
                                    </span>
                                    <h3 className="text-base sm:text-lg font-bold text-color-primary group-hover:text-[#F80000] transition-colors mt-0.5">
                                        {role.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-color-secondary leading-relaxed font-normal">
                                    {role.description}
                                </p>

                                {/* Skills tags */}
                                <div className="space-y-1.5 pt-2">
                                    <span className="text-[10px] font-bold text-color-muted uppercase tracking-wider block">
                                        Core Practice Competencies
                                    </span>
                                    <div className="flex flex-wrap gap-1">
                                        {role.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-0.5 rounded-[4px] bg-canvas-subtle text-color-secondary text-[10px] font-mono border border-theme"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Link */}
                            <div className="pt-3.5 border-t border-theme-subtle flex items-center justify-between text-xs text-color-muted">
                                <span>Direct Application</span>
                                <a
                                    href={`#role-${role.id}`}
                                    onClick={() => {
                                        window.location.hash = `role-${role.id}`;
                                        document.getElementById("resume-form")?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                    className="inline-flex items-center gap-1 font-bold text-[#F80000] hover:underline transition-colors"
                                >
                                    <span>Submit Profile</span>
                                    <ArrowUpRight className="w-3.5 h-3.5" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
