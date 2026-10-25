"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import {
    Briefcase,
    Building2,
    Wrench,
    Cpu,
    Factory,
    Stethoscope,
    Landmark,
} from "lucide-react";

const industries = [
    {
        title: "Professional Services",
        description:
            "Time-and-materials tracking, billable utilization, client project milestone accounting, and resource planning.",
        icon: Briefcase,
        badge: "Target Vertical",
    },
    {
        title: "Construction",
        description:
            "Capital project cost accumulation, subcontractor commitment tracking, AIA billing compliance, and cost variance monitoring.",
        icon: Building2,
        badge: "Target Vertical",
    },
    {
        title: "Engineering",
        description:
            "Complex deliverable-based billing, multi-stage WBS architectures, overhead burdening, and earned value tracking.",
        icon: Wrench,
        badge: "Target Vertical",
    },
    {
        title: "Technology",
        description:
            "Software capitalization, R&D project costing, agile release budget tracking, and cloud resource allocation.",
        icon: Cpu,
        badge: "Target Vertical",
    },
    {
        title: "Manufacturing",
        description:
            "Capital expenditure (CapEx) tracking, tooling project costing, plant expansion accounting, and asset capitalization.",
        icon: Factory,
        badge: "Target Vertical",
    },
    {
        title: "Healthcare",
        description:
            "Facility expansion project controls, clinical research grant costing, equipment acquisition tracking, and compliance reporting.",
        icon: Stethoscope,
        badge: "Target Vertical",
    },
    {
        title: "Government",
        description:
            "Fund accounting compliance, FAR cost principles alignment, grant project tracking, and public sector audit reporting.",
        icon: Landmark,
        badge: "Target Vertical",
    },
];

export const IndustriesSection: React.FC = () => {
    return (
        <section id="industries" className="py-20 bg-slate-50 border-t border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Sector Focus"
                    title="Industries We Address"
                    description="Oracle PPM provides adaptable project financial controls designed to solve domain-specific accounting and operational challenges across complex industries."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {industries.map((ind, idx) => (
                        <ServiceCard
                            key={ind.title}
                            title={ind.title}
                            description={ind.description}
                            icon={ind.icon}
                            badge={ind.badge}
                            theme="light"
                            delay={0.05 * idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
