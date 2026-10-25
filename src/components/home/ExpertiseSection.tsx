"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { ServiceCard } from "../ui/ServiceCard";
import {
    Layers,
    CalendarDays,
    Calculator,
    Receipt,
    FileText,
    Activity,
    Users,
    BarChart3,
} from "lucide-react";

const expertiseModules = [
    {
        title: "Project Foundation",
        description:
            "Configure baseline enterprise project structures, work breakdown structures (WBS), organization hierarchies, and global parameters.",
        icon: Layers,
        badge: "Module",
    },
    {
        title: "Project Planning",
        description:
            "Establish robust project schedules, resource allocations, baseline tracking, and integrated project plan control across business units.",
        icon: CalendarDays,
        badge: "Module",
    },
    {
        title: "Project Costing",
        description:
            "Capture, accumulate, and analyze project commitments, labor expenditures, equipment costs, and indirect overhead distributions.",
        icon: Calculator,
        badge: "Module",
    },
    {
        title: "Project Billing",
        description:
            "Automate complex revenue recognition, milestone-based invoicing, time and materials billing, and customer agreement management.",
        icon: Receipt,
        badge: "Module",
    },
    {
        title: "Project Contracts",
        description:
            "Manage contractual terms, funding limits, amendment histories, and revenue rules aligned with enterprise compliance standards.",
        icon: FileText,
        badge: "Module",
    },
    {
        title: "Project Performance",
        description:
            "Track key performance indicators (KPIs), earned value management (EVM), budget variance alerts, and project health metrics.",
        icon: Activity,
        badge: "Module",
    },
    {
        title: "Resource Management",
        description:
            "Optimize workforce utilization, skill-matching, resource requests, capacity planning, and project assignment workflows.",
        icon: Users,
        badge: "Module",
    },
    {
        title: "Reporting & Analytics",
        description:
            "Deliver executive dashboards, Oracle Transactional Business Intelligence (OTBI) reports, and real-time financial insights.",
        icon: BarChart3,
        badge: "Module",
    },
];

export const ExpertiseSection: React.FC = () => {
    return (
        <section id="oracle-ppm" className="py-20 bg-slate-50 border-y border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Core Capabilities"
                    title="Oracle PPM Expertise"
                    description="PPM CONSULTING SOLUTIONS helps organizations improve their Oracle PPM processes and implementations across all core functional modules."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {expertiseModules.map((item, idx) => (
                        <ServiceCard
                            key={item.title}
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                            badge={item.badge}
                            theme="light"
                            delay={0.05 * idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
