"use client";

import React from "react";
import { industriesData } from "@/data/industriesData";
import { IndustryCard } from "./IndustryCard";
import { SectionHeading } from "../ui/SectionHeading";

export const IndustriesGrid: React.FC = () => {
    return (
        <section className="py-20 bg-slate-50 border-b border-slate-200/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    tagline="Sector Focus & Alignment"
                    title="Oracle PPM Industry Capabilities"
                    description="A representative overview of how Oracle PPM Cloud functionality addresses industry-specific financial, operational, and compliance challenges."
                    align="center"
                    theme="light"
                />

                <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industriesData.map((cap, idx) => (
                        <IndustryCard key={cap.id} capability={cap} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};
