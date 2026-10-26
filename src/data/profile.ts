// ---------------------------------------------------------------------------
// Content is pulled from your resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jason Taylor",
  role: "Revenue Analyst",
  tagline: "I manage sales proposals and build systems that help sales teams move faster and perform better.",
  email: "jasonrtaylor3@gmail.com",
  location: "Bethesda, MD",
  resumeUrl: "/resume.pdf",
};

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jason-taylor-7981b820b/", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
] as const;

export const nav = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "favorites", label: "Favorites" },
] as const;

export const about = [
  "I'm a revenue analyst based in Bethesda, MD, improving sales operations through applied AI.",
  "Currently a Revenue Analyst at Moore, where I serve as RFP project manager across 25+ proposals representing $25M+ in annual pipeline value, own quarterly sales performance reporting for the Chief Revenue Officer, and build AI-powered tools that help the sales team move faster.",
  "I hold a Master's in Marketing Analytics and a Bachelor's in Neuroscience from the University of Maryland.",
];

export const experience = [
  {
    range: "Jan 2025 — Present",
    title: "Revenue Analyst",
    company: "Moore",
    companyUrl: "#",
    summary:
      "Owned quarterly sales performance reporting, validating CRM data and analyzing pipeline by vertical and opportunity type to deliver dashboards to the Chief Revenue Officer. Served as RFP project manager across 25+ proposals representing $25M+ in annual pipeline value, partnering with sales leadership and cross-functional teams to manage deliverables and ensure submission quality, and ran win/loss and gap analyses against competitors to strengthen future bids. Automated invoicing for the Data Sales team, cutting processing delays by 20%, and partnered with top-performing sales reps as their operational lead, deploying systems that let them spend more time prospecting rather than writing proposals.",
  },
  {
    range: "May 2024 — Aug 2024",
    title: "Marketing Intern",
    company: "Moore",
    companyUrl: "#",
    summary:
      "Analyzed event attribution and performance data across 6 events to identify which conferences and activations drove outcomes, translating findings into recommendations for future marketing budget allocation. Partnered with the data team to translate product specs into marketing collateral for product launches and demos at conferences and events.",
  },
] as const;

export const projects = [
  {
    id: "case-study-library",
    title: "Case Study Library",
    description:
      "Owned the development of an internal case study repository, starting with discovery sessions with sales users to understand their content retrieval challenges. Lets anyone search past case studies in plain English — e.g. \"find me a case study that shows a 50%+ ROAS on Meta Ads.\" Cut retrieval time by 80%, and drove adoption through lunch-and-learns and live demos. Shipped alongside a Claude skill that automates converting QBR results into collateral for the sales team.",
    tags: ["Product & Engineering", "LLM", "Claude Skills", "Sales Enablement"],
  },
  {
    id: "rag-rfp",
    title: "Automating Sales Proposals with GraphRAG",
    description:
      "Led product management for an internal GraphRAG proposal tool. Prototyped it with Claude Code and Codex, validated user needs through demos, conversations, and internal surveys, and ran discovery sessions with sales teams to turn their workflows into requirements — reducing RFP response time by 50%.",
    tags: ["Product Management", "GraphRAG", "Cross-functional Leadership"],
  },
] as const;
