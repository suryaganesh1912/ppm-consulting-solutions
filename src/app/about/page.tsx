import React from "react";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutHero } from "@/components/about/AboutHero";
import { WhoWeAre } from "@/components/about/WhoWeAre";
import { MissionVision } from "@/components/about/MissionVision";
import { OurApproach } from "@/components/about/OurApproach";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
    title: "About Us | PPM CONSULTING SOLUTIONS - Oracle PPM Expertise",
    description:
        "Learn about PPM CONSULTING SOLUTIONS, our focus on Oracle Project Portfolio Management (Oracle PPM), mission, vision, 6-step implementation methodology, and core values.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-canvas text-color-primary transition-colors">
            <Navbar />

            <main className="flex-grow">
                <AboutHero />
                <WhoWeAre />
                <MissionVision />
                <OurApproach />
                <CTASection
                    title="Let's Discuss Your PPM Requirements"
                    text="Whether you are assessing Oracle PPM Cloud capabilities, redesigning project costing rules, or planning an end-to-end implementation, our team is ready to assist."
                    buttonText="Contact Us"
                    buttonHref="/contact"
                />
            </main>

            <Footer />
        </div>
    );
}
