import {
    Compass,
    Rocket,
    Database,
    Headphones,
    Cpu,
    LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
    id: string;
    title: string;
    category: "Advisory & Strategy" | "Implementation & Managed Services";
    shortDescription: string;
    detailedExplanation: string;
    keyCapabilities: string[];
    icon: LucideIcon;
}

export const servicesList: ServiceDetail[] = [
    {
        id: "oracle-ppm-consulting",
        title: "Oracle PPM Consulting",
        category: "Advisory & Strategy",
        shortDescription: "Strategic advisory to align Oracle PPM software capabilities with enterprise business goals.",
        detailedExplanation:
            "Our Oracle PPM consulting practice provides comprehensive strategic assessment, software fit-gap analysis, and architecture design. We partner with finance and operations leaders to determine optimal module selection, process alignment, and governance frameworks.",
        keyCapabilities: [
            "ERP & PPM Fit-Gap & Readiness Assessment",
            "Strategic Portfolio Architecture Design",
            "Governance & Financial Control Frameworks",
            "Executive Roadmap & Roadmap Alignment",
        ],
        icon: Compass,
    },
    {
        id: "oracle-ppm-implementation",
        title: "Oracle PPM Implementation",
        category: "Implementation & Managed Services",
        shortDescription: "End-to-end implementation services across Oracle PPM Cloud and enterprise modules.",
        detailedExplanation:
            "Full lifecycle implementation services covering requirement gathering, prototype configuration, system testing, user training, and go-live deployment. We specialize in seamless transitions that minimize operational disruption.",
        keyCapabilities: [
            "Full Lifecycle Cloud PPM Deployment",
            "Multi-Organization & Multi-Currency Setup",
            "User Acceptance Testing (UAT) Execution",
            "Go-Live Stabilization & Adoption",
        ],
        icon: Rocket,
    },
    {
        id: "data-migration",
        title: "Data Migration",
        category: "Implementation & Managed Services",
        shortDescription: "Secure data extraction, transformation, validation, and historical data loading.",
        detailedExplanation:
            "Ensure seamless data transitions from legacy ERPs to Oracle PPM. We provide data mapping, cleansing, validation scripts, historical transaction loading, and financial reconciliation support.",
        keyCapabilities: [
            "Legacy Data Extraction & Cleansing Frameworks",
            "FBDI (File-Based Data Import) Automated Loading",
            "Historical Financial Reconciliation & Audit",
            "Validation Scripts & Re-Run Capabilities",
        ],
        icon: Database,
    },
    {
        id: "oracle-ppm-support",
        title: "Oracle PPM Support",
        category: "Implementation & Managed Services",
        shortDescription: "Post-implementation support, quarterly update readiness, and ongoing maintenance.",
        detailedExplanation:
            "Sustain system health and user productivity with dedicated managed support. We provide quarter release testing, functional assistance, system optimization, and end-user enablement.",
        keyCapabilities: [
            "Quarterly Oracle Update Testing & Release Readiness",
            "Functional Incident Resolution & Root-Cause Fixes",
            "System Health Checks & Performance Tuning",
            "User Training & Documentation Updates",
        ],
        icon: Headphones,
    },
    {
        id: "integration-support",
        title: "Integration Support",
        category: "Implementation & Managed Services",
        shortDescription: "Connecting Oracle PPM with third-party ERPs, payroll, procurement, and CRM systems.",
        detailedExplanation:
            "Connect Oracle PPM seamlessly with surrounding enterprise software ecosystem. We facilitate integrations between PPM, General Ledger, Payroll, Procurement, CRM, and custom operational platforms.",
        keyCapabilities: [
            "Oracle Integration Cloud (OIC) Data Flows",
            "REST & SOAP Web Services Middleware Design",
            "Third-Party Payroll & Procurement System Sync",
            "Error Handling & Exception Notification Design",
        ],
        icon: Cpu,
    },
];
