"use client";

import React, { useState } from "react";
import {
    Mail,
    User,
    Building,
    Phone,
    Briefcase,
    Send,
    Check,
    AlertCircle,
    Loader2,
    RefreshCw,
} from "lucide-react";

const serviceOptions = [
    "Oracle PPM Consulting",
    "Oracle PPM Implementation",
    "Project Costing & Subledgers",
    "Contract Billing & Revenue",
    "Oracle Cloud PPM Migration (FBDI)",
    "Resource Management & Capacity",
    "PPM Support & Release Optimization",
    "Other Enterprise Requirements",
];

export const ContactEmailSender: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Oracle PPM Consulting",
        message: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");

    const validate = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required.";
        }
        if (!formData.company.trim()) {
            newErrors.company = "Company / Organization name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Business email is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid business email address.";
        }
        if (!formData.message.trim()) {
            newErrors.message = "Please describe your project requirements or challenges.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setResponseMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setStatus("success");
                setResponseMessage(
                    data.message || "Your inquiry has been delivered to our consulting practice successfully."
                );
            } else {
                setStatus("error");
                setResponseMessage(
                    data.error || "Failed to dispatch email. Please try again or contact us directly."
                );
            }
        } catch (err: unknown) {
            console.error("Submission error:", err);
            setStatus("error");
            setResponseMessage(
                "A network error occurred while sending your message. Please check your connection or contact our team directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            company: "",
            email: "",
            phone: "",
            service: "Oracle PPM Consulting",
            message: "",
        });
        setErrors({});
        setStatus("idle");
        setResponseMessage("");
    };

    return (
        <div className="bg-surface rounded-[12px] p-6 sm:p-10 border border-theme shadow-sm max-w-3xl mx-auto space-y-6">
            {/* Header info */}
            <div className="text-center space-y-2">
                <div className="w-10 h-10 rounded-[6px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center mx-auto border border-theme">
                    <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <h2 className="text-xl sm:text-2xl font-bold text-color-primary tracking-tight">
                        Direct Enterprise Inquiry Dispatch
                    </h2>
                    <p className="text-xs sm:text-sm text-color-secondary max-w-lg mx-auto leading-relaxed">
                        Submit your project requirements below to directly notify our senior Oracle PPM consulting team.
                    </p>
                </div>
            </div>

            {/* Success State */}
            {status === "success" ? (
                <div className="bg-canvas-subtle border border-emerald-500/40 rounded-[10px] p-7 sm:p-8 text-center space-y-5">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                        <Check className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                            Transmission Delivered
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-color-primary">
                            Thank You, {formData.name}!
                        </h3>
                        <p className="text-xs sm:text-sm text-color-secondary max-w-md mx-auto leading-relaxed">
                            {responseMessage}
                        </p>
                    </div>

                    <div className="bg-surface border border-theme rounded-[8px] p-4 text-xs text-color-secondary max-w-md mx-auto text-left space-y-1">
                        <div className="font-semibold text-color-primary">Inquiry Summary:</div>
                        <div>• Service Domain: <span className="text-[#00758F] dark:text-[#00A3C4] font-medium">{formData.service}</span></div>
                        <div>• Company: <span className="font-medium text-color-primary">{formData.company}</span></div>
                        <div>• Reply Address: <span className="text-[#00758F] dark:text-[#00A3C4] font-medium">{formData.email}</span></div>
                    </div>

                    <div className="pt-2">
                        <button
                            type="button"
                            onClick={handleReset}
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[6px] bg-[#F80000] text-white hover:bg-[#D60000] font-bold text-xs transition-colors shadow-xs cursor-pointer"
                        >
                            <RefreshCw className="w-3.5 h-3.5" />
                            <span>Send Another Inquiry</span>
                        </button>
                    </div>
                </div>
            ) : (
                /* Form Fields */
                <form onSubmit={handleSubmit} noValidate className="space-y-5 text-left">
                    {/* Error Banner */}
                    {status === "error" && (
                        <div className="bg-red-50 dark:bg-red-950/40 border border-red-500/30 rounded-[8px] p-4 flex items-start gap-3 text-xs text-red-700 dark:text-red-300">
                            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                            <div className="space-y-0.5">
                                <span className="font-bold text-red-800 dark:text-red-200 block">Unable to send message</span>
                                <p>{responseMessage}</p>
                            </div>
                        </div>
                    )}

                    {/* Row 1: Name and Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-1">
                            <label
                                htmlFor="sender-name"
                                className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                            >
                                Your Name <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                    <User className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-name"
                                    type="text"
                                    required
                                    autoComplete="name"
                                    placeholder="e.g., David Miller"
                                    value={formData.name}
                                    onChange={(e) => {
                                        setFormData({ ...formData, name: e.target.value });
                                        if (errors.name) setErrors({ ...errors, name: "" });
                                    }}
                                    className={`w-full pl-9 pr-3 py-2 rounded-[6px] border bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 transition-colors ${
                                        errors.name
                                            ? "border-red-500 focus-visible:ring-red-500/50"
                                            : "border-theme focus-visible:ring-[#F80000]"
                                    }`}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-[11px] text-red-500 font-medium">{errors.name}</p>
                            )}
                        </div>

                        {/* Company */}
                        <div className="space-y-1">
                            <label
                                htmlFor="sender-company"
                                className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                            >
                                Organization / Company <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                    <Building className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-company"
                                    type="text"
                                    required
                                    autoComplete="organization"
                                    placeholder="e.g., Apex Global Corp"
                                    value={formData.company}
                                    onChange={(e) => {
                                        setFormData({ ...formData, company: e.target.value });
                                        if (errors.company) setErrors({ ...errors, company: "" });
                                    }}
                                    className={`w-full pl-9 pr-3 py-2 rounded-[6px] border bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 transition-colors ${
                                        errors.company
                                            ? "border-red-500 focus-visible:ring-red-500/50"
                                            : "border-theme focus-visible:ring-[#F80000]"
                                    }`}
                                />
                            </div>
                            {errors.company && (
                                <p className="text-[11px] text-red-500 font-medium">{errors.company}</p>
                            )}
                        </div>
                    </div>

                    {/* Row 2: Email and Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Business Email */}
                        <div className="space-y-1">
                            <label
                                htmlFor="sender-email"
                                className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                            >
                                Business Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    placeholder="david.miller@company.com"
                                    value={formData.email}
                                    onChange={(e) => {
                                        setFormData({ ...formData, email: e.target.value });
                                        if (errors.email) setErrors({ ...errors, email: "" });
                                    }}
                                    className={`w-full pl-9 pr-3 py-2 rounded-[6px] border bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 transition-colors ${
                                        errors.email
                                            ? "border-red-500 focus-visible:ring-red-500/50"
                                            : "border-theme focus-visible:ring-[#F80000]"
                                    }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-[11px] text-red-500 font-medium">{errors.email}</p>
                            )}
                        </div>

                        {/* Phone */}
                        <div className="space-y-1">
                            <label
                                htmlFor="sender-phone"
                                className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                            >
                                Phone Number <span className="text-color-muted font-normal">(Optional)</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <input
                                    id="sender-phone"
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="+1 (555) 019-2834"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    className="w-full pl-9 pr-3 py-2 rounded-[6px] border border-theme bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Service Domain */}
                    <div className="space-y-1">
                        <label
                            htmlFor="sender-service"
                            className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                        >
                            Primary Service Focus <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                <Briefcase className="w-4 h-4" />
                            </div>
                            <select
                                id="sender-service"
                                value={formData.service}
                                onChange={(e) =>
                                    setFormData({ ...formData, service: e.target.value })
                                }
                                className="w-full pl-9 pr-8 py-2 rounded-[6px] border border-theme bg-canvas text-color-primary text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors cursor-pointer appearance-none"
                            >
                                {serviceOptions.map((opt) => (
                                    <option key={opt} value={opt} className="bg-surface text-color-primary">
                                        {opt}
                                    </option>
                                ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-color-muted">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Message */}
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="sender-message"
                                className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                            >
                                Project Requirements & Objectives <span className="text-red-500">*</span>
                            </label>
                            <span className="text-[10px] text-color-muted font-mono">
                                {formData.message.length} / 5000 chars
                            </span>
                        </div>
                        <div className="relative">
                            <textarea
                                id="sender-message"
                                required
                                rows={4}
                                placeholder="Describe your Oracle PPM requirements, timeline, project costing, billing, or migration needs..."
                                value={formData.message}
                                onChange={(e) => {
                                    setFormData({ ...formData, message: e.target.value });
                                    if (errors.message) setErrors({ ...errors, message: "" });
                                }}
                                className={`w-full p-3 rounded-[6px] border bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 transition-colors resize-none ${
                                    errors.message
                                        ? "border-red-500 focus-visible:ring-red-500/50"
                                        : "border-theme focus-visible:ring-[#F80000]"
                                }`}
                            />
                        </div>
                        {errors.message && (
                            <p className="text-[11px] text-red-500 font-medium">{errors.message}</p>
                        )}
                    </div>

                    {/* Submit Action */}
                    <div className="pt-2 flex items-center justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer ${
                                isSubmitting
                                    ? "bg-[#F80000]/60 text-white cursor-not-allowed"
                                    : "bg-[#F80000] text-white hover:bg-[#D60000] active:bg-[#B30000] border border-[#D60000]"
                            }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                                    <span>Dispatching Inquiry...</span>
                                </>
                            ) : (
                                <>
                                    <Send className="w-3.5 h-3.5" />
                                    <span>Send Inquiry</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};
