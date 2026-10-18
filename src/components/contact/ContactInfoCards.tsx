import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactInfoCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Direct Contact */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                        <p className="text-xs text-slate-400">
                            Connect directly with our advisory practice lead.
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-2 break-all"
                    >
                        <span>{siteConfig.email}</span>
                    </a>
                    <p className="text-[11px] text-slate-500 mt-1">Response time: Within 24 business hours</p>
                </div>
            </div>

            {/* Card 2: Phone & Team */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Telephone & Team</h3>
                        <p className="text-xs text-slate-400">
                            {siteConfig.contactPerson}
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-slate-800">
                    <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-2"
                    >
                        <span>{siteConfig.phone}</span>
                    </a>
                    <p className="text-[11px] text-slate-500 mt-1">Monday – Friday, 9:00 AM – 6:00 PM IST</p>
                </div>
            </div>

            {/* Card 3: Location & Practice */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center border border-sky-500/20">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Global Delivery & Base</h3>
                        <p className="text-xs text-slate-400">
                            {siteConfig.addressSummary}
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Remote Enterprise Consulting Worldwide</span>
                </div>
            </div>
        </div>
    );
};
