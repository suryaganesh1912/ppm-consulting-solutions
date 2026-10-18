"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Oracle PPM", href: "/oracle-ppm" },
    { name: "Industries", href: "/industries" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
];

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 15);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
                isScrolled
                    ? "bg-surface/95 backdrop-blur-md border-theme shadow-xs py-2.5"
                    : "bg-surface/85 backdrop-blur-sm border-theme-subtle py-3.5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Brand Logo with Red Mark */}
                    <Logo size="md" />

                    {/* Desktop Navigation Links */}
                    <nav
                        className="hidden lg:flex items-center gap-1 xl:gap-1.5"
                        aria-label="Main Navigation"
                    >
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`px-3 py-1.75 text-xs xl:text-sm rounded-[6px] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] ${
                                        active
                                            ? "bg-[#E5E5E5]/70 dark:bg-[#333333] text-[#F80000] dark:text-[#FF3B30] font-bold shadow-2xs"
                                            : "text-color-secondary hover:text-[#F80000] hover:bg-[#E5E5E5]/40 dark:hover:bg-[#333333]/60 font-medium"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop Controls: Theme Toggle & Primary Red Action Button */}
                    <div className="hidden lg:flex items-center gap-2.5">
                        <ThemeToggle />
                        <Button
                            href="/contact"
                            variant="primary"
                            size="sm"
                            icon={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                            Contact Practice
                        </Button>
                    </div>

                    {/* Mobile Controls: Theme Toggle & Menu Hamburger */}
                    <div className="flex lg:hidden items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg border border-theme text-color-primary hover:bg-[#E5E5E5]/40 dark:hover:bg-[#333333] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="lg:hidden bg-surface border-b border-theme shadow-md overflow-hidden"
                    >
                        <div className="px-4 pt-3 pb-6 space-y-3 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 gap-1">
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center justify-between px-3.5 py-2.5 rounded-[6px] text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] min-h-[44px] ${
                                                active
                                                    ? "bg-[#E5E5E5]/80 dark:bg-[#333333] text-[#F80000] dark:text-[#FF3B30] font-bold"
                                                    : "text-color-secondary hover:text-[#F80000] hover:bg-[#E5E5E5]/40 dark:hover:bg-[#333333]/60 font-medium"
                                            }`}
                                        >
                                            <span>{link.name}</span>
                                            <ArrowRight className="w-4 h-4 opacity-40" />
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="pt-3 border-t border-theme flex flex-col gap-2">
                                <Button
                                    href="/contact"
                                    variant="primary"
                                    fullWidth
                                    size="md"
                                    onClick={() => setMobileMenuOpen(false)}
                                    icon={<ArrowRight className="w-4 h-4" />}
                                >
                                    Contact Practice
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
