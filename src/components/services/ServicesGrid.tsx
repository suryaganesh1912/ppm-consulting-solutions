"use client";

import React, { useState } from "react";
import { servicesList } from "@/data/servicesData";
import { DetailedServiceCard } from "./DetailedServiceCard";
import { SectionHeading } from "../ui/SectionHeading";

const categories = [
    "All Services",
    "Advisory & Strategy",
    "Implementation & Managed Services",
] as const;

export const ServicesGrid: React.FC = () => {
    const [activeCategory, setActiveCategory] =
        useState<(typeof categories)[number]>("All Services");

    const filteredServices =
        activeCategory === "All Services"
            ? servicesList
            : servicesList.filter((s) => s.category === activeCategory);

    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Comprehensive Offerings"
                    title="Oracle PPM Service Capabilities"
                    description="Explore our specialized Oracle PPM consulting, implementation, data migration, and managed support services."
                    align="center"
                    theme="light"
                />

                {/* Category Filter Tabs */}
                <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${isActive
                                        ? "bg-slate-900 text-white shadow-md"
                                        : "bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Services Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service, idx) => (
                        <DetailedServiceCard
                            key={service.id}
                            service={service}
                            delay={0.04 * idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
