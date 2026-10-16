import {
    ListTodo,
    Users,
    Calculator,
    Receipt,
    LucideIcon,
} from "lucide-react";

export interface FunctionalDomain {
    id: string;
    moduleNumber: string;
    title: string;
    category: string;
    icon: LucideIcon;
    description: string;
}

export const oraclePPMDomains: FunctionalDomain[] = [
    {
        id: "project-execution",
        moduleNumber: "MODULE 01",
        title: "Project Execution Management",
        category: "Project Delivery & Execution",
        icon: ListTodo,
        description:
            "Manage project execution, tasks, deliverables, progress, and project team activities.",
    },
    {
        id: "resource-management",
        moduleNumber: "MODULE 02",
        title: "Project Resource Management",
        category: "People & Capacity",
        icon: Users,
        description:
            "Help organizations plan, manage and optimize project resources based on skills, availability and organizational requirements.",
    },
    {
        id: "project-costing",
        moduleNumber: "MODULE 03",
        title: "Project Costing",
        category: "Expenditure & Subledger Engine",
        icon: Calculator,
        description:
            "Project Costing captures, processes and accounts for project-related expenditures from multiple transaction sources.",
    },
    {
        id: "project-billing",
        moduleNumber: "MODULE 04",
        title: "Project Billing",
        category: "Revenue & Customer Billing",
        icon: Receipt,
        description:
            "Project Billing transforms project transactions and billing events into customer invoices and project revenue.",
    },
];
