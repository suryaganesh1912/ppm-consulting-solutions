import {
    Compass,
    Rocket,
    Landmark,
    Calculator,
    Receipt,
    FileText,
    CalendarDays,
    TrendingUp,
    Users,
    BarChart3,
    Database,
    Headphones,
    Workflow,
    Cpu,
    LucideIcon,
} from "lucide-react";

export interface ServiceDetail {
    id: string;
    title: string;
    category: "Advisory & Strategy" | "Financials & Costing" | "Planning & Control" | "Technical & Managed Services";
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
        category: "Technical & Managed Services",
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
        id: "project-financial-management",
        title: "Project Financial Management",
        category: "Financials & Costing",
        shortDescription: "Enterprise financial controls, multi-currency accounting, and capital project tracking.",
        detailedExplanation:
            "Establish rigorous financial control mechanisms across your project portfolios. We configure general ledger synchronization, capital project asset creation, commitment tracking, and automated financial closures.",
        keyCapabilities: [
            "General Ledger & Subledger Accounting Sync",
            "Capital Expenditure (CapEx) & Asset Accounting",
            "Multi-Currency & Multi-Entity Ledger Setup",
            "Financial Audit Trail & Control Compliance",
        ],
        icon: Landmark,
    },
    {
        id: "project-costing",
        title: "Project Costing",
        category: "Financials & Costing",
        shortDescription: "Detailed expenditure capture, labor rate schedules, and indirect cost burdening.",
        detailedExplanation:
            "Optimize how costs are captured, accumulated, and allocated across projects. We configure complex labor cost rates, equipment usage schedules, indirect cost burdening multipliers, and variance tracking.",
        keyCapabilities: [
            "Expenditure Type & Cost Element Hierarchies",
            "Labor & Non-Labor Rate Schedule Setup",
            "Indirect Cost Burdening & Overhead Allocations",
            "Real-Time Cost Variance Monitoring",
        ],
        icon: Calculator,
    },
    {
        id: "project-billing",
        title: "Project Billing",
        category: "Financials & Costing",
        shortDescription: "Automated revenue accounting, client invoicing, and milestone contract billing.",
        detailedExplanation:
            "Automate complex project revenue recognition and client invoicing workflows. We design time-and-materials, fixed-price milestone, and progress billing rules aligned with current accounting standards.",
        keyCapabilities: [
            "Milestone, T&M, and Percent-Complete Billing",
            "Automated Revenue Recognition & Accounting",
            "Client Invoice Template & Workflow Design",
            "AR & Financials Seamless Subledger Integration",
        ],
        icon: Receipt,
    },
    {
        id: "project-contracts",
        title: "Project Contracts",
        category: "Financials & Costing",
        shortDescription: "Contractual term management, funding limits, amendments, and revenue rules.",
        detailedExplanation:
            "Configure robust contract structures linking client agreements directly to project execution plans. Track funding ceilings, multi-client contract splits, amendment histories, and contractual compliance terms.",
        keyCapabilities: [
            "Multi-Client & Split-Billing Contract Models",
            "Funding Limit Alerts & Budget Enforcement",
            "Contract Amendment & Revision Tracking",
            "Compliance Terms & Master Service Agreement Sync",
        ],
        icon: FileText,
    },
    {
        id: "project-planning",
        title: "Project Planning",
        category: "Planning & Control",
        shortDescription: "Work breakdown structures, milestone scheduling, and baseline control tracking.",
        detailedExplanation:
            "Design structured Work Breakdown Structures (WBS) that reflect both operational delivery and financial accounting requirements. Establish schedule baselines, task dependencies, and variance thresholds.",
        keyCapabilities: [
            "Standardized Enterprise WBS Architecture",
            "Baseline Tracking & Schedule Variance Controls",
            "Task Dependency & Critical Path Mapping",
            "Integration with External Scheduling Tools",
        ],
        icon: CalendarDays,
    },
    {
        id: "project-budgeting-forecasting",
        title: "Project Budgeting & Forecasting",
        category: "Planning & Control",
        shortDescription: "Financial baseline budgets, periodic forecasting, and ETC/EAC variance analysis.",
        detailedExplanation:
            "Implement multi-version budgeting and periodic forecasting models. Track Estimate-to-Complete (ETC) and Estimate-at-Completion (EAC) metrics to proactively manage budget variances before cost overruns occur.",
        keyCapabilities: [
            "Multi-Version Budget Baseline Approval Workflows",
            "Periodic Forecasting & ETC/EAC Calculations",
            "Top-Down & Bottom-Up Budgeting Models",
            "Variance Alerts & Automated Re-Forecasting",
        ],
        icon: TrendingUp,
    },
    {
        id: "resource-management",
        title: "Resource Management",
        category: "Planning & Control",
        shortDescription: "Workforce utilization tracking, skill capacity planning, and resource request workflows.",
        detailedExplanation:
            "Maximize billable utilization and workforce efficiency across enterprise projects. We configure skill repositories, capacity planning matrices, resource request approval chains, and assignment tracking.",
        keyCapabilities: [
            "Skill Repository & Resource Profile Management",
            "Capacity Planning & Utilization Tracking",
            "Resource Request & Fulfillment Workflows",
        ],
        icon: Users,
    },
    {
        id: "reporting-analytics",
        title: "Reporting & Analytics",
        category: "Advisory & Strategy",
        shortDescription: "Executive dashboards, OTBI reports, and real-time portfolio financial analytics.",
        detailedExplanation:
            "Turn project data into actionable business intelligence. We construct custom Oracle Transactional Business Intelligence (OTBI) dashboards, BI Publisher financial statements, and executive portfolio views.",
        keyCapabilities: [
            "Oracle OTBI & BI Publisher Custom Reports",
            "Executive Portfolio Financial Dashboards",
            "Earned Value Management (EVM) Analytics",
            "Automated Scheduled Report Delivery",
        ],
        icon: BarChart3,
    },
    {
        id: "data-migration",
        title: "Data Migration",
        category: "Technical & Managed Services",
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
        category: "Technical & Managed Services",
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
        id: "process-optimization",
        title: "Process Optimization",
        category: "Advisory & Strategy",
        shortDescription: "Refining financial workflows, rate structures, and expenditure approval chains.",
        detailedExplanation:
            "Re-engineer outdated project financial workflows to reduce administrative overhead and accelerate invoicing cycles. We audit current operations and implement streamlined approval paths.",
        keyCapabilities: [
            "Financial Workflow Streamlining & Automation",
            "Approval Chain Optimization",
            "Invoicing & Revenue Cycle Acceleration",
            "Best Practice Process Benchmarking",
        ],
        icon: Workflow,
    },
    {
        id: "integration-support",
        title: "Integration Support",
        category: "Technical & Managed Services",
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
