"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./Button";
import { ArrowRight, ShieldCheck, PhoneCall } from "lucide-react";

interface CTASectionProps {
    title?: string;
    text?: string;
    buttonText?: string;
    buttonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
    title = "Let's Build Better Project Financial Management",
    text = "Whether you're implementing Oracle PPM, optimizing existing processes, or looking for ongoing support, let's discuss how PPM CONSULTING SOLUTIONS can help.",
    buttonText = "Contact Us",
    buttonHref = "#contact",
    secondaryButtonText = "Talk to Our Experts",
    secondaryButtonHref = "#contact",
    className = "",
}) => {
    return (
        <section className={`relative py-16 md:py-24 overflow-hidden ${className}`}>
            {/* Background Graphic Elements */}
            <div className="absolute inset-0 navy-gradient -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6"
                >
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-300 text-xs font-semibold backdrop-blur-md border border-white/15">
                        <ShieldCheck className="w-4 h-4 text-sky-400" />
                        <span>Trusted Oracle PPM Advisory & Implementation</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
                        {title}
                    </h2>

                    {/* Body Text */}
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
                        {text}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            href={buttonHref}
                            variant="accent"
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                        >
                            {buttonText}
                        </Button>
                        {secondaryButtonText && (
                            <Button
                                href={secondaryButtonHref}
                                variant="outline-light"
                                size="lg"
                                icon={<PhoneCall className="w-5 h-5" />}
                                iconPosition="left"
                            >
                                {secondaryButtonText}
                            </Button>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
