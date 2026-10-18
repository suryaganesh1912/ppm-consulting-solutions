"use client";

import React, { useState } from "react";
import { Mail, Check, Copy } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ResumeForm: React.FC = () => {
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="resume-form" className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors scroll-mt-28">
            <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-surface rounded-[10px] p-7 sm:p-10 border border-theme shadow-sm text-center space-y-5">
                    <div className="w-12 h-12 rounded-[8px] bg-slate-100 dark:bg-slate-800 text-sky-700 dark:text-sky-400 border border-theme flex items-center justify-center mx-auto">
                        <Mail className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl sm:text-3xl font-bold text-color-primary">
                            Submit Your Candidate Profile
                        </h2>
                        <p className="text-xs sm:text-sm text-color-secondary max-w-md mx-auto leading-relaxed">
                            We welcome experienced Oracle Cloud PPM functional consultants, solution architects, and technical integration specialists.
                        </p>
                    </div>

                    {/* Application Details Summary */}
                    <div className="bg-canvas-subtle p-4 rounded-[6px] border border-theme text-left text-xs text-color-secondary space-y-1.5">
                        <div className="font-semibold text-color-primary">Please include in your transmission:</div>
                        <div>• Updated CV / Resume (PDF format)</div>
                        <div>• Primary functional modules (e.g., Costing, Billing, Contracts, Resourcing)</div>
                        <div>• Summary of Oracle Cloud / EBS implementation lifecycle experience</div>
                    </div>

                    {/* Email Action Box */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                        <a
                            href={`mailto:${siteConfig.email}?subject=Consulting%20Application%20-%20Oracle%20PPM%20Practice`}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-slate-900 text-white dark:bg-sky-600 font-semibold text-xs sm:text-sm shadow-xs hover:bg-slate-800 dark:hover:bg-sky-500 transition-colors"
                        >
                            <Mail className="w-4 h-4" />
                            <span>Email Resume to Practice</span>
                        </a>

                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-[6px] border border-theme bg-surface text-color-secondary hover:text-color-primary hover:bg-slate-100 dark:hover:bg-slate-800 font-medium text-xs sm:text-sm cursor-pointer transition-colors"
                            aria-label="Copy email address"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-4 h-4 opacity-70" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
