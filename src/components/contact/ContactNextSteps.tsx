import React from "react";
import { CheckCircle2, MessageSquare, Calendar, Rocket, Shield } from "lucide-react";
import { siteConfig } from "@/data/config";

export const ContactNextSteps: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Initial Requirements Review",
            description: "Our senior Oracle PPM consultants examine your project scope, pain points (costing, billing, planning, or integration), and technical objectives.",
            icon: <MessageSquare className="w-5 h-5 text-sky-500" />,
        },
        {
            number: "02",
            title: "Advisory & Scope Alignment Call",
            description: "We coordinate a focused scoping call with you to discuss implementation roadmaps, resource allocation, and timeline estimates.",
            icon: <Calendar className="w-5 h-5 text-sky-500" />,
        },
        {
            number: "03",
            title: "Tailored Proposal & Roadmap",
            description: "You receive a structured engagement proposal outlining deliverables, milestone milestones, governance frameworks, and expert staffing.",
            icon: <Rocket className="w-5 h-5 text-sky-500" />,
        },
    ];

    return (
        <div className="bg-slate-50 rounded-2xl p-8 sm:p-12 border border-slate-200 my-16 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 text-xs font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Transparent Client Onboarding</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    What Happens When You Reach Out?
                </h2>
                <p className="text-sm text-slate-600">
                    We believe in clarity, deep domain expertise, and rapid responsiveness. Here is how our engagement process begins:
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-200/80 space-y-4 relative">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-sky-50 text-sky-600 border border-sky-100">
                                Step {step.number}
                            </span>
                            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100">
                                {step.icon}
                            </div>
                        </div>
                        <h3 className="text-base font-bold text-slate-900">
                            {step.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="pt-4 text-center text-xs text-slate-500">
                Have urgent inquiries? Email our practice lead directly at <a href={`mailto:${siteConfig.email}`} className="text-sky-600 underline font-semibold">{siteConfig.email}</a>.
            </div>
        </div>
    );
};
