"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import { Button } from "../ui/Button";
import {
    Compass,
    Rocket,
    Landmark,
    Calculator,
    Receipt,
    CalendarCheck,
    Headphones,
    ArrowRight,
} from "lucide-react";

const consultingServices = [
    {
        title: "Oracle PPM Consulting",
        description:
            "Strategic advisory services to assess current project management maturity, evaluate system gaps, and align Oracle PPM with business goals.",
        icon: Compass,
        tag: "Advisory Practice",
    },
    {
        title: "Oracle PPM Implementation",
        description:
            "End-to-end cloud and on-premise implementation services including requirements gathering, solution design, configuration, and go-live deployment.",
        icon: Rocket,
        tag: "Implementation",
    },
    {
        title: "Project Financial Management",
        description:
            "Comprehensive financial controls, multi-currency accounting, capital project tracking, and executive portfolio budgeting.",
        icon: Landmark,
        tag: "Financial Control",
    },
    {
        title: "Project Costing",
        description:
            "Implementation of expenditure type structures, labor rate schedules, indirect burdening rules, and detailed cost variance analysis.",
        icon: Calculator,
        tag: "Cost Control",
    },
    {
        title: "Project Billing",
        description:
            "Automated revenue accounting, client invoicing workflows, multi-contract billing, and seamless integration with Financials.",
        icon: Receipt,
        tag: "Revenue Engine",
    },
    {
        title: "Project Planning",
        description:
            "Work breakdown structure optimization, resource capacity planning, milestone scheduling, and enterprise project portfolio controls.",
        icon: CalendarCheck,
        tag: "Planning & Control",
    },
    {
        title: "Oracle PPM Support",
        description:
            "Post-implementation support, system health checks, quarter release updates, application maintenance, and user training.",
        icon: Headphones,
        tag: "Managed Support",
    },
];

export const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Professional Services"
                    title="Our Consulting Services"
                    description="Tailored consulting offerings designed to deliver measurable improvements in project governance, financial visibility, and system performance."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {consultingServices.map((service, idx) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            tag={service.tag}
                            theme="outlined"
                            delay={0.06 * idx}
                        />
                    ))}
                </div>

                {/* View All Services Callout */}
                <div className="mt-12 text-center">
                    <Button
                        href="#contact"
                        variant="secondary"
                        size="lg"
                        icon={<ArrowRight className="w-4 h-4" />}
                    >
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    );
};
