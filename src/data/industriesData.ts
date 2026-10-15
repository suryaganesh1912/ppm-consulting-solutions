import {
    Briefcase,
    Building2,
    Wrench,
    Laptop,
    Factory,
    Stethoscope,
    Landmark,
    LucideIcon,
} from "lucide-react";

export interface IndustryCapability {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    summary: string;
    potentialBenefits: string[];
    keyModules: string[];
}

export const industriesData: IndustryCapability[] = [
    {
        id: "professional-services",
        title: "Professional Services",
        subtitle: "Consulting, Legal, IT & Advisory Practices",
        icon: Briefcase,
        summary:
            "Improve project financial visibility, resource utilization, costing, billing, and overall project profitability.",
        potentialBenefits: [
            "Real-time billable utilization tracking per consultant",
            "Automated Time-and-Materials and milestone invoice generation",
            "Multi-client contract split billing and revenue accounting",
            "Granular project margin and burn rate analytics",
        ],
        keyModules: ["Project Billing", "Resource Management", "Project Costing"],
    },
    {
        id: "construction",
        title: "Construction",
        subtitle: "General Contracting & Subcontractor Delivery",
        icon: Building2,
        summary:
            "Improve project cost control, budgeting, forecasting, and detailed financial tracking across long-term build programs.",
        potentialBenefits: [
            "Subcontractor cost commitment tracking and approval workflows",
            "Capital asset creation and multi-phase cost allocations",
            "Periodic Estimate-to-Complete (ETC) budget forecasting",
            "Client milestone progress billing and retention management",
        ],
        keyModules: ["Project Costing", "Project Contracts", "Project Planning"],
    },
    {
        id: "engineering",
        title: "Engineering",
        subtitle: "Infrastructure, EPC & Industrial Design",
        icon: Wrench,
        summary:
            "Manage complex multi-tier Work Breakdown Structures (WBS), milestone deliverables, and indirect cost burdening multipliers.",
        potentialBenefits: [
            "Hierarchical WBS planning for large-scale engineering projects",
            "Overhead burdening rates applied automatically to direct labor",
            "Earned Value Management (EVM) schedule variance tracking",
            "Integration with Primavera and external scheduling tools",
        ],
        keyModules: ["Project Foundation", "Project Costing", "Project Performance"],
    },
    {
        id: "technology",
        title: "Technology & Software",
        subtitle: "SaaS Development & System Integrators",
        icon: Laptop,
        summary:
            "Streamline software R&D capitalization, agile project budgeting, and skilled technical resource allocation.",
        potentialBenefits: [
            "Automated R&D software capitalization vs. operational expensing",
            "Resource skill repositories and capacity allocation planning",
            "Agile team budget tracking across product release lines",
            "Real-time OTBI reporting on product development cost",
        ],
        keyModules: ["Resource Management", "Project Costing", "Reporting & Analytics"],
    },
    {
        id: "manufacturing",
        title: "Manufacturing",
        subtitle: "Industrial Equipment & OEM Product Lines",
        icon: Factory,
        summary:
            "Track capital tooling costs, new product development budgets, and overhead cost absorption across plants.",
        potentialBenefits: [
            "New Product Introduction (NPI) financial cost baselines",
            "Capital equipment tooling cost accumulation and asset creation",
            "Plant overhead cost allocations and variance tracking",
            "Cross-departmental expenditure approval workflows",
        ],
        keyModules: ["Project Costing", "Project Foundation", "Project Planning"],
    },
    {
        id: "healthcare",
        title: "Healthcare",
        subtitle: "Hospital Systems & Medical Research Institutions",
        icon: Stethoscope,
        summary:
            "Control capital facilities expansion budgets, equipment acquisition costs, and medical research grant tracking.",
        potentialBenefits: [
            "Hospital facility expansion project financial controls",
            "Medical research grant fund tracking and audit compliance",
            "Capital equipment acquisition subledger accounting",
            "Multi-entity ledger synchronization for healthcare networks",
        ],
        keyModules: ["Project Financial Management", "Project Costing", "Project Contracts"],
    },
    {
        id: "government",
        title: "Government & Public Sector",
        subtitle: "State, Local & Federal Agencies",
        icon: Landmark,
        summary:
            "Enforce public grant compliance, fund accounting controls, strict audit trails, and multi-year budget caps.",
        potentialBenefits: [
            "Public grant funding ceiling enforcement and alert rules",
            "Multi-year fiscal budget baseline controls and approvals",
            "Audit-ready subledger transaction history and compliance",
            "Public transparency reporting via custom OTBI dashboards",
        ],
        keyModules: ["Project Contracts", "Project Billing", "Reporting & Analytics"],
    },
];
