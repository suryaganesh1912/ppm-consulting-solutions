import {
    Layers,
    CalendarDays,
    Calculator,
    Receipt,
    FileText,
    TrendingUp,
    Users,
    BarChart3,
    LucideIcon,
} from "lucide-react";

export interface FunctionalDomain {
    id: string;
    moduleNumber: string;
    title: string;
    category: string;
    icon: LucideIcon;
    description: string;
    whatItIs: string;
    whyBusinessesUseIt: string;
    consultingServices: string[];
    functionalTopics: string[];
}

export const oraclePPMDomains: FunctionalDomain[] = [
    {
        id: "project-foundation",
        moduleNumber: "MODULE 01",
        title: "Project Foundation",
        category: "Core Architecture",
        icon: Layers,
        description:
            "Core setup parameters, project types, templates, organizational structures, classifications and lifecycle controls that establish the foundation for Oracle PPM.",
        whatItIs:
            "Project Foundation establishes the core configuration required to create, manage and control projects consistently across an organization.",
        whyBusinessesUseIt:
            "Project Foundation provides the structural framework required to create and manage projects consistently. It helps organizations standardize project creation, establish organizational relationships, apply classifications and control project lifecycle behavior.",
        consultingServices: [
            "Standardized Project Template & Type Architecture Design",
            "Organizational Hierarchy & Security Control Configuration",
            "Project Classification & Custom Attribute Definition",
            "Lifecycle Status Approval Workflow Setup",
        ],
        functionalTopics: [
            "Project Types",
            "Project Templates",
            "Project Organizations",
            "Project Classifications",
            "Project Statuses",
        ],
    },
    {
        id: "project-planning",
        moduleNumber: "MODULE 02",
        title: "Project Planning",
        category: "Financial Control & Baselines",
        icon: CalendarDays,
        description:
            "Project planning provides budgeting, forecasting, financial plans and work breakdown structure management to establish financial baselines and monitor project performance.",
        whatItIs:
            "Project Planning provides multi-version budgeting, periodic forecasting, and work breakdown structure (WBS) management to establish financial baselines and track project delivery progress.",
        whyBusinessesUseIt:
            "Project Planning helps organizations establish financial baselines, forecast project costs and revenues, monitor variances and maintain financial control throughout the project lifecycle.",
        consultingServices: [
            "Multi-Version Financial Plan & Baseline Architecture",
            "Top-Down & Bottom-Up Budgeting Workflow Configuration",
            "Periodic ETC & EAC Forecasting Automation",
            "Variance Threshold Alert & Approval Integration",
        ],
        functionalTopics: [
            "Budgets",
            "Forecasts",
            "Financial Plans",
            "Work Breakdown Structures",
            "ETC / EAC",
        ],
    },
    {
        id: "project-costing",
        moduleNumber: "MODULE 03",
        title: "Project Costing",
        category: "Expenditure & Subledger Engine",
        icon: Calculator,
        description:
            "Project Costing captures, processes and accounts for project-related expenditures from multiple transaction sources.",
        whatItIs:
            "Project Costing collects, calculates, and accounts for all project expenditures including labor, materials, equipment, third-party invoices, and indirect burdening overheads.",
        whyBusinessesUseIt:
            "Project Costing provides visibility into project expenditures and supports accurate cost collection, processing, accounting and analysis.",
        consultingServices: [
            "Expenditure Type & Category Hierarchy Design",
            "Labor Cost Rate & Equipment Rate Schedule Setup",
            "Indirect Cost Burdening & Overhead Rule Configuration",
            "Subledger Accounting (SLA) & GL Sync Optimization",
        ],
        functionalTopics: [
            "Expenditure Types",
            "Expenditure Categories",
            "Expenditure Organizations",
            "Transaction Sources",
            "Cost Collection",
            "Labor Rates",
            "Burdening",
            "Accounting",
        ],
    },
    {
        id: "project-billing",
        moduleNumber: "MODULE 04",
        title: "Project Billing",
        category: "Revenue & Customer Billing",
        icon: Receipt,
        description:
            "Project Billing transforms project transactions and billing events into customer invoices and project revenue.",
        whatItIs:
            "Project Billing automates client invoicing and revenue recognition accounting for billable projects based on contractual terms, progress milestones, or time-and-materials expenses.",
        whyBusinessesUseIt:
            "Project Billing helps organizations accurately calculate billable amounts, generate customer invoices and manage project revenue.",
        consultingServices: [
            "Time-and-Materials, Fixed-Price, and Milestone Billing Setup",
            "Automated Revenue Recognition & Accounting Rule Design",
            "Client Invoice Layout & Billing Event Workflow Configuration",
            "Accounts Receivable (AR) Subledger Integration",
        ],
        functionalTopics: [
            "Billing Events",
            "Billing Controls",
            "Billing Methods",
            "Invoice Generation",
            "Revenue Recognition",
            "Contract Billing",
        ],
    },
    {
        id: "project-contracts",
        moduleNumber: "MODULE 05",
        title: "Project Contracts",
        category: "Commercial & Funding Control",
        icon: FileText,
        description:
            "Project Contracts manages contractual relationships, funding, billing arrangements and revenue-related controls for projects.",
        whatItIs:
            "Project Contracts governs commercial terms, multi-client funding limits, billing rules, and amendment controls linking client contracts to project execution.",
        whyBusinessesUseIt:
            "Project Contracts provides control over project funding, contractual terms, billing and revenue processes.",
        consultingServices: [
            "Multi-Client & Split-Funding Contract Architecture",
            "Contract Amendment & Change Order Control Setup",
            "Revenue & Invoice Rule Mapping to Project Tasks",
            "Contract Compliance & Milestone Tracking Integration",
        ],
        functionalTopics: [
            "Contract Types",
            "Contract Lines",
            "Funding",
            "Billing",
            "Revenue",
            "Contract Amendments",
            "Contract Controls",
        ],
    },
    {
        id: "project-performance",
        moduleNumber: "MODULE 06",
        title: "Project Performance",
        category: "Project Monitoring & Control",
        icon: TrendingUp,
        description:
            "Project Performance provides visibility into project progress, financial performance, variances and key project indicators.",
        whatItIs:
            "Project Performance provides real-time health metrics, Key Performance Indicators (KPIs), and earned value indicators to monitor project status across the portfolio.",
        whyBusinessesUseIt:
            "Project Performance helps project managers and business stakeholders monitor project health, identify deviations and take corrective action.",
        consultingServices: [
            "Executive KPI & Performance Rule Definition",
            "Cost & Schedule Variance Threshold Configuration",
            "Earned Value Management (EVM) Metric Implementation",
            "Project Performance Health Dashboard Design",
        ],
        functionalTopics: [
            "KPIs",
            "Cost Variance",
            "Revenue Variance",
            "Schedule Performance",
            "Project Health",
            "Performance Monitoring",
        ],
    },
    {
        id: "resource-management",
        moduleNumber: "MODULE 07",
        title: "Resource Management",
        category: "People & Capacity",
        icon: Users,
        description:
            "Resource Management helps organizations plan, manage and optimize project resources based on skills, availability and organizational requirements.",
        whatItIs:
            "Resource Management structures resource profiles, job roles, billable rate hierarchies, and Resource Breakdown Structures (RBS) to optimize workforce allocation across projects.",
        whyBusinessesUseIt:
            "Resource Management helps organizations align the right resources with project requirements and improve resource utilization.",
        consultingServices: [
            "Resource Breakdown Structure (RBS) Architecture",
            "Job Class & Person Resource Hierarchy Configuration",
            "Billable & Cost Rate Schedule Mapping",
            "Capacity Planning & Utilization Workflow Setup",
        ],
        functionalTopics: [
            "Resources",
            "Persons",
            "Jobs",
            "Skills",
            "Resource Profiles",
            "Resource Rates",
            "Resource Breakdown Structures",
            "Resource Utilization",
        ],
    },
    {
        id: "reporting-analytics",
        moduleNumber: "MODULE 08",
        title: "Reporting & Analytics",
        category: "Insights & Decision Support",
        icon: BarChart3,
        description:
            "Reporting and analytics provide visibility into project financial and operational information for better decision-making.",
        whatItIs:
            "Reporting & Analytics provides real-time transactional reporting and business intelligence through Oracle Transactional Business Intelligence (OTBI) dashboards and BI Publisher financial statements.",
        whyBusinessesUseIt:
            "Reporting and Analytics helps stakeholders understand project performance, financial results, trends and exceptions through meaningful reports and dashboards.",
        consultingServices: [
            "Oracle OTBI Real-Time Dashboard & Analysis Design",
            "BI Publisher Financial Statement & Invoice Layout Customization",
            "Executive Financial Summary & Portfolio Health Reporting",
            "Scheduled Automated Report Delivery & Security Setup",
        ],
        functionalTopics: [
            "OTBI",
            "BI Publisher",
            "Project Financial Reports",
            "Dashboards",
            "Project Performance Analysis",
            "Financial Analysis",
        ],
    },
];
