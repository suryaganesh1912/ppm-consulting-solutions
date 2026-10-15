import React from "react";
import { User, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactPanel: React.FC = () => {
    return (
        <div className="bg-slate-900/90 rounded-2xl p-6 sm:p-10 shadow-xl border border-slate-800/80 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {/* Contact Person */}
                <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                        <User className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Contact Person
                        </span>
                        <span className="text-sm font-semibold text-white">
                            {siteConfig.contactPerson}
                        </span>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Email
                        </span>
                        <a
                            href={`mailto:${siteConfig.email}`}
                            className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors underline break-all"
                        >
                            {siteConfig.email}
                        </a>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:px-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Phone
                        </span>
                        <a
                            href={`tel:${siteConfig.phoneClean}`}
                            className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            {siteConfig.phone}
                        </a>
                    </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 pt-6 md:pt-0 md:pl-4 last:pr-0">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20 shrink-0">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                            Location
                        </span>
                        <span className="text-sm font-semibold text-white">
                            {siteConfig.location}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
