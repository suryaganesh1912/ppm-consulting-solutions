import {
    ListTodo,
    Users,
    Calculator,
    Receipt,
    LineChart,
    Layers,
    LucideIcon,
} from "lucide-react";

export interface FunctionalDomain {
    id: string;
    moduleNumber: string;
    title: string;
    category: string;
    icon: LucideIcon;
    description: string;
    capabilities: string[];
    businessValue: string;
    integrationPoints: string[];
    accountingImpact: string;
}

export const oraclePPMDomains: FunctionalDomain[] = [
    {
        id: "project-costing",
        moduleNumber: "MODULE 01",
        title: "Project Costing & Subledger",
        category: "Expenditure & Capitalization Engine",
        icon: Calculator,
        description:
            "Central expenditure subledger that captures, validates, calculates burden costs, and accounts for all project-related financial transactions.",
        capabilities: [
            "Time & Labor expenditure validation and automated costing",
            "Multi-tiered burden schedules (fringe, overhead, G&A allocations)",
            "Capital Work in Progress (CWIP) accumulation and Fixed Asset grouping",
            "Supplier invoice and procurement line distribution to WBS tasks",
            "Cross-charge and inter-company transfer pricing rules",
        ],
        businessValue:
            "Eliminates unassigned costs, enforces accounting governance, and ensures 100% compliance with audit standards before GL posting.",
        integrationPoints: [
            "Oracle General Ledger (GL)",
            "Oracle Payables (AP)",
            "Oracle Time & Labor (OTL)",
            "Oracle Fixed Assets (FA)",
        ],
        accountingImpact:
            "Generates Subledger Accounting (SLA) entries with debit/credit balancing, clearing accounts, and project-level drill-down.",
    },
    {
        id: "project-billing",
        moduleNumber: "MODULE 02",
        title: "Project Billing & Contracts",
        category: "Revenue Recognition & Invoicing",
        icon: Receipt,
        description:
            "Comprehensive contract billing system that transforms project transactions and deliverable milestones into customer invoices and compliant revenue.",
        capabilities: [
            "Milestone-based, time-and-materials, and percentage-of-completion billing",
            "Multi-currency contract funding and automated FX rate conversion",
            "Automated AIA G702/G703 construction billing schedule generation",
            "Revenue recognition compliance under ASC 606 / IFRS 15 guidelines",
            "Automated invoice approval workflows and credit/debit adjustment rules",
        ],
        businessValue:
            "Shortens Days Sales Outstanding (DSO), prevents unbilled revenue leakage, and ensures contract terms strictly govern customer billing.",
        integrationPoints: [
            "Oracle Receivables (AR)",
            "Oracle Revenue Management (RMCS)",
            "Customer Relationship Management (CRM)",
        ],
        accountingImpact:
            "Posts Unbilled Receivables (WIP) and Unearned Revenue accruals directly to the general ledger with full contractual audit trails.",
    },
    {
        id: "project-control",
        moduleNumber: "MODULE 03",
        title: "Project Financial Control & Planning",
        category: "Budgeting & Earned Value",
        icon: LineChart,
        description:
            "Robust financial planning framework supporting multi-year baseline budgeting, continuous forecasting, and Earned Value Management (EVM).",
        capabilities: [
            "Hierarchical Work Breakdown Structure (WBS) financial modeling",
            "Version-controlled baseline budgets and formal revision workflows",
            "Earned Value KPI tracking (CPI, SPI, Estimate at Completion)",
            "Period-by-period EAC (Estimate at Completion) re-forecasting",
            "Real-time commitment vs. actual variance thresholds and alerts",
        ],
        businessValue:
            "Empowers project controllers with proactive cost alerts before budget overruns occur, protecting project profit margins.",
        integrationPoints: [
            "Oracle Enterprise Planning & Budgeting (EPBCS)",
            "Primavera P6 Enterprise Project Portfolio Management",
        ],
        accountingImpact:
            "Feeds variance analysis and expected future expenditures into corporate balance sheet projections.",
    },
    {
        id: "resource-management",
        moduleNumber: "MODULE 04",
        title: "Project Resource Management",
        category: "Workforce & Capacity Planning",
        icon: Users,
        description:
            "Enables enterprise resourcing teams to optimize talent allocation, evaluate skill inventories, and forecast billable utilization.",
        capabilities: [
            "Competency, credential, and skill-profile tracking across global teams",
            "Capacity vs. demand forecasting across in-flight and pipeline projects",
            "Automated staffing request, nomination, and approval workflows",
            "Target vs. actual billable consultant utilization metrics",
            "Calendar availability and resource leveling across shared pools",
        ],
        businessValue:
            "Maximizes revenue per consultant, minimizes bench time, and eliminates resource bottlenecks on critical path deliverables.",
        integrationPoints: [
            "Oracle Cloud Human Capital Management (HCM)",
            "Resource scheduling middleware and calendar sync",
        ],
        accountingImpact:
            "Directly drives standard costing rates, internal transfer pricing, and future resource cost forecasting.",
    },
    {
        id: "project-execution",
        moduleNumber: "MODULE 05",
        title: "Project Execution Management",
        category: "Task & Deliverable Delivery",
        icon: ListTodo,
        description:
            "Structured delivery management for project managers to coordinate deliverables, schedule milestones, and resolve project issues.",
        capabilities: [
            "Interactive Gantt chart scheduling and critical path calculation",
            "Task dependency mapping, lead/lag constraints, and baseline tracking",
            "Integrated deliverable sign-offs and client milestone approvals",
            "Risk, action item, and change request governance workflows",
            "Mobile-ready team collaboration and progress status updates",
        ],
        businessValue:
            "Maintains cross-functional alignment between engineering, delivery teams, and financial stakeholders.",
        integrationPoints: [
            "Microsoft Project / Primavera P6 desktop sync",
            "Document management systems & cloud storage",
        ],
        accountingImpact:
            "Task completion milestones trigger automated billing events and revenue recognition events.",
    },
    {
        id: "project-analytics",
        moduleNumber: "MODULE 06",
        title: "Oracle PPM Analytics & Reporting",
        category: "Executive Governance & Dashboards",
        icon: Layers,
        description:
            "Real-time business intelligence and reporting built on Oracle Transactional Business Intelligence (OTBI) and BIP templates.",
        capabilities: [
            "Executive portfolio profitability and gross margin dashboards",
            "Detailed subledger-to-general-ledger financial reconciliation reports",
            "Aged unbilled revenue and billing transaction exception audits",
            "Real-time operational queries with role-based data security",
            "Automated report distribution schedules to leadership stakeholders",
        ],
        businessValue:
            "Gives CFOs and program directors instant, single-source-of-truth visibility without waiting for monthly manual spreadsheet consolidations.",
        integrationPoints: [
            "Oracle Analytics Cloud (OAC)",
            "Oracle BI Publisher (BIP) report engines",
        ],
        accountingImpact:
            "Enforces SOX compliance, transaction traceability, and audit documentation for external accounting reviews.",
    },
];
