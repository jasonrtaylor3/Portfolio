// ---------------------------------------------------------------------------
// Content is pulled from your resume.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Jason Taylor",
  role: "Revenue Operations Analyst",
  tagline: "I manage sales proposals and build systems that help sales teams move faster and perform better.",
  email: "jasonrtaylor3@gmail.com",
  location: "New York City",
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
  "I'm a revenue operations analyst based in NYC, improving sales operations through applied AI.",
  "Currently a Revenue Operations Analyst at Moore, where I've acted as project manager on a $15M+ sales proposal pipeline, partnered with AI Engineering to ship internal tools that speed up how the sales team operates, and surface revenue intelligence that improves win rates on future proposals.",
  "I hold a Master's in Marketing Analytics and a Bachelor's in Neuroscience from the University of Maryland.",
];

export const experience = [
  {
    range: "Jan 2025 — Present",
    title: "Revenue Operations Analyst",
    company: "Moore",
    companyUrl: "#",
    summary:
      "Directed end-to-end management of 25+ major sales proposals, securing $15M in annual revenue pipeline at a 23% win rate. Automated invoicing for the Data Sales team, cutting monthly processing delays by 20%, and partnered with top-performing sales reps as operational lead — deploying systems that increased meeting volume and bridged the gap between prospecting and close.",
  },
  {
    range: "May 2024 — Aug 2024",
    title: "Marketing Intern",
    company: "Moore",
    companyUrl: "#",
    summary:
      "Led event attribution modeling for major conferences and corporate activations, delivering insights that shaped executive marketing budget decisions. Led on-the-ground event operations, coordinating logistics to bring the conference marketing and sales strategy to life, and partnered with Product Engineering to translate specs into high-conversion launch collateral across 5 product launches.",
  },
] as const;

export const projects = [
  {
    id: "case-study-library",
    title: "Case Study Library",
    description:
      "A simple, internally-hosted, LLM-powered repository that let anyone search past case studies in plain English — e.g. \"find me a case study that shows a 50%+ ROAS on Meta Ads.\" Cut asset retrieval time by 80% for pitch decks and sales proposals, and shipped a shareable Claude skill that lets account executives auto-convert QBR results into customer-facing marketing materials.",
    tags: ["Product & Engineering", "LLM", "Claude Skills", "Sales Enablement"],
  },
  {
    id: "rag-rfp",
    title: "Automating Sales Proposals with RAG",
    description:
      "Served as the lead on an internal, RAG-based tool built with the AI Engineering team. Allows our sales team to increase our work capacity by automating RFP responses, while maintaining quality and brand consistency across every bid.",
    tags: ["Product Management", "RAG", "Cross-functional Leadership"],
  },
] as const;
