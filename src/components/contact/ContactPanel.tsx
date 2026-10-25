"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactPanel: React.FC = () => {
    const handleEmailClick = () => {
        // Direct assignment ensures the mail client or default mail protocol handler is triggered
        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Inquiry - PPM Consulting Solutions")}`;
    };

    return (
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800/80 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-6 sm:gap-8 lg:gap-10 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {/* Email */}
                <a
                    href={`mailto:${siteConfig.email}?subject=${encodeURIComponent("Inquiry - PPM Consulting Solutions")}`}
                    onClick={handleEmailClick}
                    className="flex items-start gap-3 sm:gap-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 min-w-0 group cursor-pointer transition-colors"
                    title={`Send an email to ${siteConfig.email}`}
                >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 flex items-center justify-center border border-sky-500/20 shrink-0 transition-colors">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 group-hover:text-slate-300 transition-colors">
                            Email
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors underline whitespace-normal sm:whitespace-nowrap block">
                            {siteConfig.email}
                        </span>
                    </div>
                </a>

                {/* Phone */}
                <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="flex items-start gap-3 sm:gap-4 pt-6 md:pt-0 md:px-4 min-w-0 group cursor-pointer transition-colors"
                    title={`Call ${siteConfig.phone}`}
                >
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 group-hover:text-sky-300 flex items-center justify-center border border-sky-500/20 shrink-0 transition-colors">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 group-hover:text-slate-300 transition-colors">
                            Phone
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-sky-400 group-hover:text-sky-300 transition-colors whitespace-nowrap block">
                            {siteConfig.phone}
                        </span>
                    </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-3 sm:gap-4 pt-6 md:pt-0 md:pl-4 last:pr-0 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Location
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white block">
                            {siteConfig.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
