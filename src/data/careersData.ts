import {
    Briefcase,
    GraduationCap,
    TrendingUp,
    Compass,
    LucideIcon,
} from "lucide-react";

export interface ExampleJobRole {
    id: string;
    title: string;
    category: string;
    badge: "Example Roles / Coming Soon";
    experience: string;
    description: string;
    skills: string[];
}

export interface CareerPillar {
    title: string;
    description: string;
    icon: LucideIcon;
}

export const careerPillars: CareerPillar[] = [
    {
        title: "Why Work With Us",
        description:
            "Join an elite Oracle PPM advisory practice delivering strategic financial and operational transformation for enterprise clients across global industries.",
        icon: Briefcase,
    },
    {
        title: "Learning & Development",
        description:
            "Continuous mastery of Oracle Cloud infrastructure, Subledger Accounting (SLA), OTBI analytics, and enterprise project management methodologies.",
        icon: GraduationCap,
    },
    {
        title: "Oracle Consulting Opportunities",
        description:
            "Work directly with senior enterprise architects, solving complex multi-currency, multi-organization project accounting challenges.",
        icon: Compass,
    },
    {
        title: "Professional Growth",
        description:
            "Structured career progression paths from associate functional analysts to principal enterprise architects and practice directors.",
        icon: TrendingUp,
    },
];

export const exampleJobRoles: ExampleJobRole[] = [
    {
        id: "oracle-ppm-functional-consultant",
        title: "Oracle PPM Functional Consultant",
        category: "Functional Advisory",
        badge: "Example Roles / Coming Soon",
        experience: "3-7 Years Experience",
        description:
            "Design and configure Oracle Project Foundation, Costing, Billing, and Contracts for enterprise clients.",
        skills: [
            "Oracle PPM Cloud",
            "Project Costing & Billing",
            "WBS Templates",
            "Business Analysis",
        ],
    },
    {
        id: "oracle-ppm-technical-consultant",
        title: "Oracle PPM Technical Consultant",
        category: "Integration & Development",
        badge: "Example Roles / Coming Soon",
        experience: "3-6 Years Experience",
        description:
            "Develop custom OTBI dashboards, BI Publisher reports, and REST/SOAP API integrations between Oracle PPM and external ERP engines.",
        skills: [
            "OTBI Reporting",
            "BI Publisher",
            "Oracle Integration Cloud (OIC)",
            "SQL / PL-SQL",
        ],
    },
    {
        id: "oracle-erp-consultant",
        title: "Oracle ERP Consultant",
        category: "Financials & Cross-Module",
        badge: "Example Roles / Coming Soon",
        experience: "4 border-8 Years Experience",
        description:
            "Integrate Oracle Project Financials with General Ledger, Accounts Payable, Receivables, and Procurement modules.",
        skills: [
            "Oracle Financials Cloud",
            "General Ledger (GL)",
            "Subledger Accounting (SLA)",
            "Procurement Sync",
        ],
    },
    {
        id: "business-analyst",
        title: "Business Analyst",
        category: "Process & Advisory",
        badge: "Example Roles / Coming Soon",
        experience: "2-5 Years Experience",
        description:
            "Gather project accounting requirements, map enterprise business processes, and translate user needs into Oracle PPM functional designs.",
        skills: [
            "Requirements Gathering",
            "Process Mapping",
            "User Acceptance Testing (UAT)",
            "Documentation",
        ],
    },
    {
        id: "project-consultant",
        title: "Project Consultant",
        category: "Delivery & Governance",
        badge: "Example Roles / Coming Soon",
        experience: "3-6 Years Experience",
        description:
            "Manage project delivery timelines, risk registers, stakeholder communication, and Oracle PPM solution deployments.",
        skills: [
            "Project Governance",
            "PMI / PMP Methodologies",
            "Stakeholder Management",
            "Change Management",
        ],
    },
];
