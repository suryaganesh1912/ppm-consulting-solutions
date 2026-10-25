"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "../ui/Logo";
import { Button } from "../ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile drawer on resize to desktop
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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-md shadow-slate-900/5 py-3 border-b border-slate-200/80"
                : "bg-white py-4 border-b border-slate-100"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Logo size="md" variant="dark" />

                    {/* Desktop Navigation Links */}
                    <nav
                        className="hidden lg:flex items-center gap-1 xl:gap-2"
                        aria-label="Main Navigation"
                    >
                        {navLinks.map((link) => {
                            const active = isActive(link.href);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    aria-current={active ? "page" : undefined}
                                    className={`px-3 py-2 text-xs xl:text-sm rounded-md transition-colors relative group focus:outline-none focus:ring-2 focus:ring-sky-500 ${active
                                        ? "font-bold text-slate-900 bg-sky-50/60"
                                        : "font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                                        }`}
                                >
                                    <span className={active ? "text-sky-600 font-bold" : ""}>{link.name}</span>
                                    <span
                                        className={`absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 transition-transform duration-200 origin-left ${active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    />
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop CTA Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <Button
                            href="/contact"
                            variant="primary"
                            size="md"
                            icon={<ArrowRight className="w-4 h-4" />}
                        >
                            Let&apos;s Talk
                        </Button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <div className="flex lg:hidden items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors"
                            aria-expanded={mobileMenuOpen}
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
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
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden bg-white border-b border-slate-200 shadow-xl overflow-hidden"
                    >
                        <div className="px-4 pt-3 pb-6 space-y-2 max-w-7xl mx-auto">
                            <div className="grid grid-cols-1 gap-1">
                                {navLinks.map((link) => {
                                    const active = isActive(link.href);
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            aria-current={active ? "page" : undefined}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${active
                                                ? "bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600 pl-3"
                                                : "font-semibold text-slate-800 hover:bg-slate-50 hover:text-sky-700"
                                                }`}
                                        >
                                            <span className={active ? "text-sky-700 font-bold" : ""}>{link.name}</span>
                                            <ArrowRight className={`w-4 h-4 ${active ? "text-sky-600" : "text-slate-400"}`} />
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                                <Button
                                    href="/contact"
                                    variant="primary"
                                    fullWidth
                                    size="md"
                                    onClick={() => setMobileMenuOpen(false)}
                                    icon={<ArrowRight className="w-4 h-4" />}
                                >
                                    Let&apos;s Talk
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
