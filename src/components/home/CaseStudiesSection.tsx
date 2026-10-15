"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { Layers, DollarSign, Receipt } from "lucide-react";

const sampleCaseStudies = [
    {
        title: "Oracle PPM Implementation",
        description:
            "Sample Case Study Scenario: Deployment of Oracle PPM Cloud Project Foundation and Costing for a multi-entity enterprise to standardize project structures.",
        icon: Layers,
        badge: "Sample Scenario",
    },
    {
        title: "Project Costing Optimization",
        description:
            "Sample Case Study Scenario: Restructuring burdening rules, labor cost rates, and expenditure approvals to reduce reporting cycle times.",
        icon: DollarSign,
        badge: "Sample Scenario",
    },
    {
        title: "Project Billing Transformation",
        description:
            "Sample Case Study Scenario: Streamlining complex milestone billing contracts and revenue recognition accounting for professional services projects.",
        icon: Receipt,
        badge: "Sample Scenario",
    },
];

export const CaseStudiesSection: React.FC = () => {
    return (
        <section id="case-studies" className="py-20 bg-white border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Illustrative Proof of Concept"
                    title="Case Studies Preview"
                    description="Sample implementation scenarios demonstrating how PPM CONSULTING SOLUTIONS approaches complex Oracle PPM challenges."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {sampleCaseStudies.map((study, idx) => (
                        <ServiceCard
                            key={study.title}
                            title={study.title}
                            description={study.description}
                            icon={study.icon}
                            badge={study.badge}
                            isPlaceholder={true}
                            theme="outlined"
                            delay={0.08 * idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
