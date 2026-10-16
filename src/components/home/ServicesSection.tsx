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
        title: "Oracle PPM Support",
        description:
            "Post-implementation support, system health checks, quarterly release updates, application maintenance, and user training.",
        icon: Headphones,
        tag: "Managed Services",
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

                <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
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
            </div>
        </section>
    );
};
