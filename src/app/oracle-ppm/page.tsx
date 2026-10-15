import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { OraclePPMHero } from "@/components/oracle-ppm/OraclePPMHero";
import { ModuleExplorer } from "@/components/oracle-ppm/ModuleExplorer";

export const metadata: Metadata = {
    title: "Oracle PPM Consulting Expertise | PPM CONSULTING SOLUTIONS",
    description:
        "Interactive Oracle PPM Cloud capability explorer spanning Project Foundation, Planning, Costing, Billing, Contracts, Performance, Resource Management, and Analytics.",
};

export default function OraclePPMPage() {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />

            <main className="flex-grow">
                <OraclePPMHero />
                <ModuleExplorer />
            </main>

            <Footer />
        </div>
    );
}
