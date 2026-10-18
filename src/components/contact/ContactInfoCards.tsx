import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactInfoCards: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Card 1: Direct Email */}
            <div className="bg-[#242424] text-white rounded-[10px] p-6 sm:p-8 shadow-sm border border-[#3D3D3D] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-[6px] bg-[#333333] text-[#00A3C4] flex items-center justify-center border border-[#444444]">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Direct Email</h3>
                        <p className="text-xs text-[#E5E5E5]">
                            Connect directly with our advisory practice lead.
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-[#3D3D3D]">
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-sm font-bold text-[#00A3C4] hover:text-[#F80000] transition-colors inline-flex items-center gap-2 break-all"
                    >
                        <span>{siteConfig.email}</span>
                    </a>
                    <p className="text-[11px] text-[#A3A3A3] mt-1">Response time: Within 24 business hours</p>
                </div>
            </div>

            {/* Card 2: Phone & Team */}
            <div className="bg-[#242424] text-white rounded-[10px] p-6 sm:p-8 shadow-sm border border-[#3D3D3D] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-[6px] bg-[#333333] text-[#00A3C4] flex items-center justify-center border border-[#444444]">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Telephone & Team</h3>
                        <p className="text-xs text-[#E5E5E5]">
                            {siteConfig.contactPerson}
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-[#3D3D3D]">
                    <a
                        href={`tel:${siteConfig.phoneClean}`}
                        className="text-sm font-bold text-[#00A3C4] hover:text-[#F80000] transition-colors inline-flex items-center gap-2"
                    >
                        <span>{siteConfig.phone}</span>
                    </a>
                    <p className="text-[11px] text-[#A3A3A3] mt-1">Monday – Friday, 9:00 AM – 6:00 PM IST</p>
                </div>
            </div>

            {/* Card 3: Location & Practice */}
            <div className="bg-[#242424] text-white rounded-[10px] p-6 sm:p-8 shadow-sm border border-[#3D3D3D] flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                    <div className="w-12 h-12 rounded-[6px] bg-[#333333] text-[#00A3C4] flex items-center justify-center border border-[#444444]">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-1">Global Delivery & Base</h3>
                        <p className="text-xs text-[#E5E5E5]">
                            {siteConfig.addressSummary}
                        </p>
                    </div>
                </div>
                <div className="pt-4 border-t border-[#3D3D3D] flex items-center gap-2 text-xs text-[#A3A3A3]">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Remote Enterprise Consulting Worldwide</span>
                </div>
            </div>
        </div>
    );
};
