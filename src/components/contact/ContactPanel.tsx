import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactPanel: React.FC = () => {
    return (
        <div className="bg-surface rounded-[10px] p-6 sm:p-8 shadow-xs border border-theme max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr_1.15fr] gap-6 divide-y md:divide-y-0 md:divide-x divide-theme">
                {/* Email */}
                <div className="flex items-start gap-3 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0 min-w-0">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center border border-theme shrink-0">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold text-color-muted uppercase tracking-wider mb-1">
                            Inquiry Dispatch
                        </span>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-xs sm:text-[13px] lg:text-sm font-bold text-[#00758F] dark:text-[#00A3C4] hover:text-[#F80000] hover:underline transition-colors block break-all sm:break-normal"
                            title={siteConfig.email}
                        >
                            {siteConfig.email}
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3 pt-6 md:pt-0 md:px-4 min-w-0">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center border border-theme shrink-0">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold text-color-muted uppercase tracking-wider mb-1">
                            Direct Telephone
                        </span>
                        <a
                            href={`tel:${siteConfig.phoneClean}`}
                            className="text-xs sm:text-sm font-semibold text-color-primary hover:text-[#F80000] transition-colors block"
                        >
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 pt-6 md:pt-0 md:pl-4 last:pr-0 min-w-0">
                    <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center border border-theme shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                        <span className="block text-[10px] font-bold text-color-muted uppercase tracking-wider mb-1">
                            Practice Headquarters
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-color-primary block">
                            {siteConfig.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
