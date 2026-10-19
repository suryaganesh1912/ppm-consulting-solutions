"use client";

import React, { useState, useRef, useEffect } from "react";
import {
    Mail,
    User,
    Phone,
    Briefcase,
    Clock,
    UploadCloud,
    FileText,
    Check,
    AlertCircle,
    Loader2,
    RefreshCw,
    Trash2,
    Copy,
    Send,
} from "lucide-react";
import { siteConfig } from "@/data/config";
import { exampleJobRoles } from "@/data/careersData";

const experienceOptions = [
    "1 - 3 Years (Associate Consultant)",
    "3 - 5 Years (Consultant / Specialist)",
    "5 - 8 Years (Senior Consultant)",
    "8+ Years (Principal Architect / Lead)",
];

export const ResumeForm: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        role: exampleJobRoles[0]?.title || "Oracle PPM Functional Consultant",
        experience: experienceOptions[1],
        message: "",
    });

    const [resumeFile, setResumeFile] = useState<File | null>(null);
    const [fileError, setFileError] = useState<string>("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [responseMessage, setResponseMessage] = useState("");
    const [copied, setCopied] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Allow clicking "Submit Profile" from job cards to update the role if hash matches
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash && hash.startsWith("#role-")) {
                const roleId = hash.replace("#role-", "");
                const matched = exampleJobRoles.find((r) => r.id === roleId);
                if (matched) {
                    setFormData((prev) => ({ ...prev, role: matched.title }));
                }
            }
        };

        handleHashChange();
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(siteConfig.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const validateFile = (file: File): boolean => {
        setFileError("");
        const isPdf =
            file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");

        if (!isPdf) {
            setFileError("Only PDF files (.pdf) are permitted. Please upload your resume in PDF format.");
            return false;
        }

        const maxSizeBytes = 5 * 1024 * 1024; // 5 MB
        if (file.size > maxSizeBytes) {
            setFileError(
                `The selected file is ${(file.size / (1024 * 1024)).toFixed(1)} MB. Resumes must be 5 MB or smaller.`
            );
            return false;
        }

        if (file.size === 0) {
            setFileError("The uploaded file appears to be empty.");
            return false;
        }

        return true;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (validateFile(file)) {
                setResumeFile(file);
                if (errors.resume) {
                    setErrors((prev) => ({ ...prev, resume: "" }));
                }
            } else {
                setResumeFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            if (validateFile(file)) {
                setResumeFile(file);
                if (errors.resume) {
                    setErrors((prev) => ({ ...prev, resume: "" }));
                }
            } else {
                setResumeFile(null);
            }
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleRemoveFile = () => {
        setResumeFile(null);
        setFileError("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const validate = () => {
        const newErrors: Record<string, string> = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Candidate full name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address.";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required for recruiter follow-up.";
        }
        if (!formData.role.trim()) {
            newErrors.role = "Please select a target position.";
        }
        if (!resumeFile) {
            newErrors.resume = "Please attach your resume in PDF format.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        if (!resumeFile) {
            setErrors((prev) => ({
                ...prev,
                resume: "Please attach your resume in PDF format.",
            }));
            return;
        }

        setIsSubmitting(true);
        setStatus("idle");
        setResponseMessage("");

        try {
            const payload = new FormData();
            payload.append("name", formData.name);
            payload.append("email", formData.email);
            payload.append("phone", formData.phone);
            payload.append("role", formData.role);
            payload.append("experience", formData.experience);
            payload.append("message", formData.message);
            payload.append("resume", resumeFile);

            const res = await fetch("/api/careers", {
                method: "POST",
                body: payload,
            });

            const data = await res.json().catch(() => ({}));

            if (res.ok && data.success) {
                setStatus("success");
                setResponseMessage(
                    data.message ||
                        "Your resume and application details have been received by our Oracle PPM talent team."
                );
            } else {
                setStatus("error");
                setResponseMessage(
                    data.error ||
                        "Unable to send your application. Please verify your information and retry."
                );
            }
        } catch (err: unknown) {
            console.error("Resume application submission error:", err);
            setStatus("error");
            setResponseMessage(
                "A network error occurred while uploading your resume. Please check your connection or email your CV directly."
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            role: exampleJobRoles[0]?.title || "Oracle PPM Functional Consultant",
            experience: experienceOptions[1],
            message: "",
        });
        setResumeFile(null);
        setFileError("");
        setErrors({});
        setStatus("idle");
        setResponseMessage("");
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    return (
        <section
            id="resume-form"
            className="py-16 md:py-20 bg-canvas border-b border-theme transition-colors scroll-mt-28"
        >
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                {/* Section Header */}
                <div className="text-center space-y-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] text-xs font-mono font-bold border border-theme">
                        Direct Talent Network
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-color-primary tracking-tight">
                        Submit Your Candidate Profile
                    </h2>
                    <p className="text-xs sm:text-sm text-color-secondary max-w-xl mx-auto leading-relaxed">
                        We welcome experienced Oracle Cloud PPM functional consultants, solution architects,
                        and technical integration specialists. Attach your PDF resume below for direct evaluation.
                    </p>
                </div>

                {/* Form or Success Box */}
                <div className="bg-surface rounded-[12px] p-6 sm:p-10 border border-theme shadow-sm">
                    {status === "success" ? (
                        <div className="bg-canvas-subtle border border-emerald-500/40 rounded-[10px] p-7 sm:p-9 text-center space-y-6">
                            <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                                <Check className="w-7 h-7" />
                            </div>

                            <div className="space-y-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                                    Application Dispatched
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold text-color-primary">
                                    Thank You, {formData.name}!
                                </h3>
                                <p className="text-xs sm:text-sm text-color-secondary max-w-md mx-auto leading-relaxed">
                                    {responseMessage}
                                </p>
                            </div>

                            <div className="bg-surface border border-theme rounded-[8px] p-4 text-xs text-color-secondary max-w-md mx-auto text-left space-y-1.5">
                                <div className="font-semibold text-color-primary">Submission Summary:</div>
                                <div>• Target Role: <span className="text-[#00758F] dark:text-[#00A3C4] font-medium">{formData.role}</span></div>
                                <div>• Contact Email: <span className="font-medium text-color-primary">{formData.email}</span></div>
                                <div>• Phone Number: <span className="font-medium text-color-primary">{formData.phone}</span></div>
                                {resumeFile && (
                                    <div>• Attached Resume: <span className="font-mono text-emerald-600 dark:text-emerald-400">{resumeFile.name}</span></div>
                                )}
                            </div>

                            <div className="pt-2">
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[6px] bg-[#F80000] text-white hover:bg-[#D60000] font-bold text-xs transition-colors shadow-xs cursor-pointer"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                    <span>Submit Another Application</span>
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} noValidate className="space-y-6 text-left">
                            {/* Error Banner */}
                            {status === "error" && (
                                <div className="bg-red-50 dark:bg-red-950/40 border border-red-500/30 rounded-[8px] p-4 flex items-start gap-3 text-xs text-red-700 dark:text-red-300">
                                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                                    <div className="space-y-0.5">
                                        <span className="font-bold text-red-800 dark:text-red-200 block">Submission Incomplete</span>
                                        <p>{responseMessage}</p>
                                    </div>
                                </div>
                            )}

                            {/* Row 1: Candidate Name & Email */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="applicant-name"
                                        className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                    >
                                        Candidate Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                            <User className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="applicant-name"
                                            type="text"
                                            required
                                            autoComplete="name"
                                            placeholder="e.g., Jennifer Lawrence"
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

                                <div className="space-y-1">
                                    <label
                                        htmlFor="applicant-email"
                                        className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                    >
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="applicant-email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            placeholder="jennifer@example.com"
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
                            </div>

                            {/* Row 2: Phone & Target Role */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label
                                        htmlFor="applicant-phone"
                                        className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                    >
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        <input
                                            id="applicant-phone"
                                            type="tel"
                                            required
                                            autoComplete="tel"
                                            placeholder="+1 (555) 234-5678"
                                            value={formData.phone}
                                            onChange={(e) => {
                                                setFormData({ ...formData, phone: e.target.value });
                                                if (errors.phone) setErrors({ ...errors, phone: "" });
                                            }}
                                            className={`w-full pl-9 pr-3 py-2 rounded-[6px] border bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 transition-colors ${
                                                errors.phone
                                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                                    : "border-theme focus-visible:ring-[#F80000]"
                                            }`}
                                        />
                                    </div>
                                    {errors.phone && (
                                        <p className="text-[11px] text-red-500 font-medium">{errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-1">
                                    <label
                                        htmlFor="applicant-role"
                                        className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                    >
                                        Target Position <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                            <Briefcase className="w-4 h-4" />
                                        </div>
                                        <select
                                            id="applicant-role"
                                            value={formData.role}
                                            onChange={(e) =>
                                                setFormData({ ...formData, role: e.target.value })
                                            }
                                            className="w-full pl-9 pr-8 py-2 rounded-[6px] border border-theme bg-canvas text-color-primary text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors cursor-pointer appearance-none"
                                        >
                                            {exampleJobRoles.map((role) => (
                                                <option key={role.id} value={role.title} className="bg-surface text-color-primary">
                                                    {role.title}
                                                </option>
                                            ))}
                                            <option value="Enterprise Oracle Solution Architect" className="bg-surface text-color-primary">
                                                Enterprise Oracle Solution Architect
                                            </option>
                                            <option value="Other / General Oracle Practice Inquiry" className="bg-surface text-color-primary">
                                                Other / General Oracle Practice Inquiry
                                            </option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-color-muted">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Experience Level */}
                            <div className="space-y-1">
                                <label
                                    htmlFor="applicant-experience"
                                    className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                >
                                    Experience Level in Oracle Ecosystem
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-color-muted">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <select
                                        id="applicant-experience"
                                        value={formData.experience}
                                        onChange={(e) =>
                                            setFormData({ ...formData, experience: e.target.value })
                                        }
                                        className="w-full pl-9 pr-8 py-2 rounded-[6px] border border-theme bg-canvas text-color-primary text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors cursor-pointer appearance-none"
                                    >
                                        {experienceOptions.map((opt) => (
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

                            {/* Row 4: PDF Resume Upload Dropzone */}
                            <div className="space-y-1.5">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                                    <label className="block text-xs font-semibold text-color-primary uppercase tracking-wider">
                                        Resume / CV Document (PDF) <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-1.5 text-[11px] font-mono">
                                        <span className="px-2 py-0.5 rounded-[4px] bg-[#E5E5E5]/60 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] font-semibold border border-theme">
                                            Format: .PDF
                                        </span>
                                        <span className="px-2 py-0.5 rounded-[4px] bg-[#E5E5E5]/60 dark:bg-[#333333] text-color-secondary border border-theme">
                                            Max Capacity: 5 MB
                                        </span>
                                    </div>
                                </div>

                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="application/pdf,.pdf"
                                    id="resume-upload"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />

                                {resumeFile ? (
                                    /* Selected File Display Card */
                                    <div className="flex items-center justify-between p-3.5 rounded-[8px] bg-canvas-subtle border border-[#00758F]/40 text-xs">
                                        <div className="flex items-center gap-3 min-w-0">
                                            <div className="w-9 h-9 rounded-[6px] bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center shrink-0 border border-red-500/20">
                                                <FileText className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <p className="font-semibold text-color-primary truncate text-xs sm:text-sm">
                                                    {resumeFile.name}
                                                </p>
                                                <p className="text-[11px] text-color-muted font-mono">
                                                    {(resumeFile.size / 1024).toFixed(1)} KB • PDF Document
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 shrink-0">
                                            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-[4px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-[11px] font-medium border border-emerald-500/30">
                                                <Check className="w-3 h-3" />
                                                <span>Ready to attach</span>
                                            </span>
                                            <button
                                                type="button"
                                                onClick={handleRemoveFile}
                                                className="p-1.5 rounded-[6px] text-color-muted hover:text-red-500 hover:bg-canvas transition-colors cursor-pointer"
                                                aria-label="Remove uploaded resume"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Upload Dropzone Box */
                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        onClick={() => fileInputRef.current?.click()}
                                        className={`border-2 border-dashed rounded-[8px] p-6 text-center cursor-pointer transition-colors ${
                                            isDragging
                                                ? "border-[#F80000] bg-[#F80000]/10"
                                                : errors.resume
                                                ? "border-red-500/70 bg-red-50/10 dark:bg-red-950/10"
                                                : "border-theme hover:border-[#F80000]/60 bg-canvas-subtle/50 hover:bg-canvas-subtle"
                                        }`}
                                    >
                                        <div className="flex flex-col items-center justify-center space-y-2">
                                            <div className="w-10 h-10 rounded-full bg-[#E5E5E5]/50 dark:bg-[#333333] text-[#00758F] dark:text-[#00A3C4] flex items-center justify-center border border-theme">
                                                <UploadCloud className="w-5 h-5" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs sm:text-sm font-semibold text-color-primary">
                                                    Click to select PDF or drag and drop here
                                                </p>
                                                <p className="text-[11px] text-color-muted">
                                                    Standard PDF resumes, CVs, or delivery portfolios up to 5 MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {fileError && (
                                    <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>{fileError}</span>
                                    </p>
                                )}
                                {errors.resume && !fileError && (
                                    <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>{errors.resume}</span>
                                    </p>
                                )}
                            </div>

                            {/* Row 5: Cover Note / Candidate Summary */}
                            <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="applicant-message"
                                        className="block text-xs font-semibold text-color-primary uppercase tracking-wider"
                                    >
                                        Candidate Summary / Key Oracle Modules
                                    </label>
                                    <span className="text-[10px] text-color-muted font-mono">
                                        {formData.message.length} / 4000 chars
                                    </span>
                                </div>
                                <textarea
                                    id="applicant-message"
                                    rows={3}
                                    placeholder="Brief overview of your Oracle PPM competencies (e.g., Costing, Billing, Project Contracts, OTBI reporting, FBDI conversions)..."
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({ ...formData, message: e.target.value })
                                    }
                                    className="w-full p-3 rounded-[6px] border border-theme bg-canvas text-color-primary text-xs sm:text-sm placeholder:text-color-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F80000] transition-colors resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-theme-subtle">
                                <p className="text-[11px] text-color-muted text-center sm:text-left">
                                    Your PDF resume will be directly attached and delivered to our hiring team.
                                </p>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[6px] font-bold text-xs sm:text-sm transition-colors shadow-xs cursor-pointer w-full sm:w-auto ${
                                        isSubmitting
                                            ? "bg-[#F80000]/60 text-white cursor-not-allowed"
                                            : "bg-[#F80000] text-white hover:bg-[#D60000] active:bg-[#B30000] border border-[#D60000]"
                                    }`}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                                            <span>Submitting Application & Resume...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-3.5 h-3.5" />
                                            <span>Submit Candidate Profile</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>

                {/* Direct Email Fallback Card */}
                <div className="bg-surface rounded-[8px] p-4 border border-theme flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-color-secondary">
                    <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#00758F] dark:text-[#00A3C4] shrink-0" />
                        <span>Prefer manual submission? Email your CV directly to <strong className="text-color-primary">{siteConfig.email}</strong></span>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={handleCopyEmail}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-theme bg-canvas hover:bg-canvas-subtle text-color-secondary hover:text-color-primary font-medium text-xs cursor-pointer transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="w-3.5 h-3.5 opacity-70" />
                                    <span>Copy Email</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
