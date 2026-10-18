import { MessageSquare, Calendar, Rocket, Shield } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactNextSteps: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Initial Requirements Review",
            description: "Our senior Oracle PPM consultants examine your project scope, pain points (costing, billing, planning, or integration), and technical objectives.",
            icon: <MessageSquare className="w-5 h-5 text-[#00758F] dark:text-[#00A3C4]" />,
        },
        {
            number: "02",
            title: "Advisory & Scope Alignment Call",
            description: "We coordinate a focused scoping call with you to discuss implementation roadmaps, resource allocation, and timeline estimates.",
            icon: <Calendar className="w-5 h-5 text-[#00758F] dark:text-[#00A3C4]" />,
        },
        {
            number: "03",
            title: "Tailored Proposal & Roadmap",
            description: "You receive a structured engagement proposal outlining deliverables, milestone milestones, governance frameworks, and expert staffing.",
            icon: <Rocket className="w-5 h-5 text-[#00758F] dark:text-[#00A3C4]" />,
        },
    ];

    return (
        <div className="bg-surface rounded-[10px] p-8 sm:p-12 border border-theme my-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[4px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] text-xs font-bold border border-theme">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Transparent Client Onboarding</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-color-primary">
                    What Happens When You Reach Out?
                </h2>
                <p className="text-sm text-color-secondary">
                    We believe in clarity, deep domain expertise, and rapid responsiveness. Here is how our engagement process begins:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-canvas rounded-[8px] p-6 border border-theme hover:border-[#F80000]/60 space-y-4 transition-colors">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-[#E5E5E5]/60 dark:bg-[#333333] text-[#F80000] border border-theme">
                                Step {step.number}
                            </span>
                            <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/40 dark:bg-[#333333] flex items-center justify-center border border-theme">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-base font-bold text-color-primary">
                            {step.title}
                        </h3>
                        <p className="text-xs text-color-secondary leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="pt-4 text-center text-xs text-color-muted">
                Have urgent inquiries? Email our practice lead directly at <a href={`mailto:${siteConfig.email}`} className="text-[#F80000] underline font-bold">{siteConfig.email}</a>.
            </div>
        </div>
    );
};
