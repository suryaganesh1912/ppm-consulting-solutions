"use client";

import React from "react";
import { ServiceDetail } from "@/data/servicesData";
import { Button } from "../ui/Button";
import { ArrowRight, Check } from "lucide-react";

interface DetailedServiceCardProps {
    service: ServiceDetail;
}

export const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({
    service,
}) => {
    const Icon = service.icon;

    return (
        <div
            id={service.id}
            className="p-6 sm:p-7 rounded-[10px] bg-surface border border-theme hover:border-[#F80000]/60 shadow-xs transition-colors flex flex-col justify-between group scroll-mt-28"
        >
            <div className="space-y-4">
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-[6px] bg-[#F80000] text-white flex items-center justify-center shrink-0 border border-[#D60000] shadow-sm">
                        <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] border border-theme">
                        {service.category}
                    </span>
                </div>

                {/* Title */}
                <div>
                    <h3 className="text-lg font-bold text-color-primary group-hover:text-[#F80000] transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#00758F] dark:text-[#00A3C4] mt-0.5">
                        {service.shortDescription}
                    </p>
                </div>

                {/* Detailed Explanation */}
                <p className="text-xs sm:text-sm text-color-secondary leading-relaxed font-normal">
                    {service.detailedExplanation}
                </p>

                {/* Key Capabilities List */}
                <div className="pt-3 border-t border-theme-subtle space-y-2">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-color-primary">
                        Key Capabilities & Deliverables
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-color-secondary">
                        {service.keyCapabilities.map((cap) => (
                            <li key={cap} className="flex items-start gap-2">
                                <span className="w-3.5 h-3.5 rounded-full bg-[#00758F]/10 dark:bg-[#00A3C4]/15 text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-2.5 h-2.5" />
                                </span>
                                <span className="leading-relaxed">{cap}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6 pt-3.5 border-t border-theme-subtle">
                <Button
                    href="/contact"
                    variant="secondary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                    Discuss {service.title}
                </Button>
            </div>
        </div>
    );
};
