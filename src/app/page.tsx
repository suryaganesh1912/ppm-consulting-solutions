import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { CTASection } from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Consulting Services */}
        <ServicesSection />

        {/* 4. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 5. Industries Preview */}
        <IndustriesSection />

        {/* 6. Final CTA Section */}
        <CTASection
          title="Let's Build Better Project Financial Management"
          text="Whether you're implementing Oracle PPM, optimizing existing processes, or looking for ongoing support, let's discuss how PPM CONSULTING SOLUTIONS can help."
          buttonText="Contact Us"
          buttonHref="/contact"
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
