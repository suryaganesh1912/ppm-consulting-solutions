export interface SampleCaseStudy {
    id: string;
    badge: "Sample Case Study";
    title: string;
    category: string;
    industry: string;
    summary: string;
    businessChallenge: string;
    solutionApproach: string;
    oraclePPMAreas: string[];
    expectedBenefits: string[];
}

export const sampleCaseStudies: SampleCaseStudy[] = [
    {
        id: "oracle-ppm-implementation",
        badge: "Sample Case Study",
        title: "Oracle PPM Implementation",
        category: "Full Suite Deployment",
        industry: "Engineering & Professional Services",
        summary:
            "A representative scenario detailing a full-suite Oracle PPM Cloud deployment to unify operational project execution with corporate financial accounting.",
        businessChallenge:
            "Legacy fragmented systems resulted in disconnected project accounting, delayed period-end financial reconciliation, lack of standardized WBS templates, and manual spreadsheet-based budget tracking across global project teams.",
        solutionApproach:
            "Implemented a unified Oracle PPM Cloud subledger environment integrated with General Ledger and Accounts Payable, establishing standardized project templates, automated expenditure burdening, and milestone billing workflows.",
        oraclePPMAreas: [
            "Project Foundation",
            "Project Costing",
            "Project Billing",
            "Financial Planning",
            "Reporting & Analytics",
        ],
        expectedBenefits: [
            "Standardized project creation and WBS structure across all business units",
            "Eliminated manual spreadsheet reconciliation via subledger automation",
            "Accelerated month-end financial closing cycle times",
            "Real-time visibility into project cost commitments and budget variances",
        ],
    },
    {
        id: "project-costing-optimization",
        badge: "Sample Case Study",
        title: "Project Costing Optimization",
        category: "Financial Control & Burdening",
        industry: "Construction & Infrastructure",
        summary:
            "A representative scenario illustrating how automated labor rate schedules and indirect cost burdening optimize project expenditure accounting.",
        businessChallenge:
            "Complex overhead burdening rules, variable labor rate schedules, and third-party subcontractor costs were manually calculated, leading to inaccurate project cost absorption and delayed cost distribution.",
        solutionApproach:
            "Configured Oracle Project Costing with automated labor rate schedules, multi-tier expenditure categories, indirect burdening multipliers, and Subledger Accounting (SLA) distribution rules.",
        oraclePPMAreas: [
            "Project Costing",
            "Expenditure Organizations",
            "Transaction Sources",
            "Subledger Accounting",
        ],
        expectedBenefits: [
            "Automated absorption of indirect overheads and administrative burdening",
            "Accurate cost pricing for direct labor and third-party subcontractor fees",
            "Seamless daily synchronization between project expenditures and GL accounts",
            "Enhanced expenditure auditability with granular transaction tracking",
        ],
    },
    {
        id: "project-billing-transformation",
        badge: "Sample Case Study",
        title: "Project Billing Transformation",
        category: "Revenue & Customer Invoicing",
        industry: "IT Services & Commercial Contracting",
        summary:
            "A representative scenario demonstrating automated milestone billing, revenue recognition rules, and contract ceiling controls.",
        businessChallenge:
            "Manual milestone invoice generation caused unbilled revenue leakage, cash flow delays, and risk of exceeding contractual funding limits without immediate system alerts.",
        solutionApproach:
            "Deployed Oracle Project Billing and Project Contracts, configuring automated billing events, Time-and-Materials and Fixed-Price revenue rules, and hard contract funding limits.",
        oraclePPMAreas: [
            "Project Billing",
            "Project Contracts",
            "Billing Controls",
            "Revenue Recognition",
        ],
        expectedBenefits: [
            "Reduced unbilled receivables and accelerated customer billing cycles",
            "Enforced contractual funding ceilings to prevent unbilled scope creep",
            "Compliance with ASC 606 / IFRS 15 revenue recognition standards",
            "Automated draft invoice consolidation and Accounts Receivable sync",
        ],
    },
];
