"use client";

import React, { useState, useMemo } from "react";
import { servicesList } from "@/data/servicesData";
import { DetailedServiceCard } from "./DetailedServiceCard";
import { SectionHeading } from "../ui/SectionHeading";
import { Search, X } from "lucide-react";

const categories = [
    "All Services",
    "Advisory & Strategy",
    "Implementation & Managed Services",
] as const;

export const ServicesGrid: React.FC = () => {
    const [activeCategory, setActiveCategory] =
        useState<(typeof categories)[number]>("All Services");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredServices = useMemo(() => {
        return servicesList.filter((service) => {
            const matchesCategory =
                activeCategory === "All Services" ||
                service.category === activeCategory;

            const query = searchQuery.trim().toLowerCase();
            const matchesQuery =
                !query ||
                service.title.toLowerCase().includes(query) ||
                service.shortDescription.toLowerCase().includes(query) ||
                service.detailedExplanation.toLowerCase().includes(query) ||
                service.keyCapabilities.some((c) =>
                    c.toLowerCase().includes(query)
                );

            return matchesCategory && matchesQuery;
        });
    }, [activeCategory, searchQuery]);

    return (
        <section className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <SectionHeading
                    tagline="PPM Practice Matrix"
                    title="Oracle PPM Service Capabilities"
                    description="Explore our specialized Oracle PPM consulting, implementation, data migration, and managed support services."
                    align="center"
                />

                {/* Search & Category Filter Controls */}
                <div className="max-w-2xl mx-auto space-y-4">
                    {/* Search Input */}
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-color-muted">
                            <Search className="w-4 h-4" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by keyword, module, or capability (e.g., FBDI, Billing, SLA)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-10 py-2.5 rounded-[8px] border border-theme bg-surface text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 shadow-xs transition-colors"
                        />
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={() => setSearchQuery("")}
                                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-color-muted hover:text-color-primary cursor-pointer"
                                aria-label="Clear search"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        )}
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap items-center justify-center gap-1.5">
                        {categories.map((cat) => {
                            const isActive = activeCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-3.5 py-1.5 text-xs font-semibold rounded-[6px] border transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                                        isActive
                                            ? "bg-slate-900 text-white dark:bg-sky-600 dark:text-white border-slate-900 dark:border-sky-600 shadow-xs"
                                            : "bg-surface text-color-secondary hover:text-color-primary hover:bg-slate-100 dark:hover:bg-slate-800 border-theme"
                                    }`}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Services Grid or Empty State */}
                {filteredServices.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredServices.map((service) => (
                            <DetailedServiceCard
                                key={service.id}
                                service={service}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="p-12 text-center rounded-[10px] bg-surface border border-theme max-w-xl mx-auto space-y-3">
                        <div className="w-10 h-10 rounded-[6px] bg-slate-100 dark:bg-slate-800 text-color-muted flex items-center justify-center mx-auto border border-theme">
                            <Search className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-bold text-color-primary">
                            No service capabilities found
                        </h3>
                        <p className="text-xs text-color-secondary">
                            No offerings matched &ldquo;{searchQuery}&rdquo;. Try another search keyword or reset the category filter.
                        </p>
                        <div className="pt-2">
                            <button
                                type="button"
                                onClick={() => {
                                    setSearchQuery("");
                                    setActiveCategory("All Services");
                                }}
                                className="px-3.5 py-1.5 rounded-[6px] bg-slate-900 text-white dark:bg-sky-600 text-xs font-medium cursor-pointer"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
