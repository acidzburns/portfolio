// ─────────────────────────────────────────────────────────────
// All the text on your portfolio lives in this one file.
// Edit here — you don't need to touch the page code.
// Anything marked TODO is a placeholder for you to fill in.
// ─────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  status?: "Completed" | "In progress";
  links?: { label: string; href: string }[];
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const profile = {
  name: "Akmal Hakim Bin Abdullah",
  shortName: "Akmal Hakim",
  role: "Computer Science (Software Engineering) student",
  // Big serif headline at the top of the page
  headline: "I build systems that talk to each other.",
  location: "Malaysia",
  tagline:
    "Final-year CS student at UiTM who builds web systems and connects them together — from system integrations with ServiceNow to defect detection with deep learning.",
  availability:
    "Looking for an internship from 2026/2027 — 3 to 6 months.", // TODO: adjust dates
  email: "abdullahakmalhakim@gmail.com",
  github: "https://github.com/acidzburns",
  linkedin: "https://www.linkedin.com/in/akmal-hakim-655063251/",
};

export const projects: Project[] = [
  {
    title: "Integration Hub",
    summary:
      "A system integration and monitoring platform that moves orders from a Shop system to a Warehouse system, with data mapping, automatic retries and ServiceNow incident management.",
    highlights: [
      "Polls the source API, maps orders into the warehouse format and delivers them over REST",
      "Retries temporary failures with exponential backoff; permanent errors open an incident",
      "Failed messages raise incidents in ServiceNow via the Table API and are resolved automatically after a successful reprocess",
      "Monitoring dashboard with success rate, latency, delivery log and one-click reprocess",
      "23 automated tests with Vitest; CI pipeline on GitHub Actions",
    ],
    stack: ["Next.js", "TypeScript", "REST APIs", "ServiceNow", "SQLite", "Vitest", "GitHub Actions"],
    status: "In progress",
    links: [{ label: "Code", href: "https://github.com/acidzburns/integration-hub" }],
  },
  {
    title: "Boundary-Aware CNN for Honeycomb Panel Defects",
    summary:
      "Research project classifying honeycomb sandwich panel images as defected or intact by looking at whether the hexagonal cell boundaries are broken or deformed.",
    highlights: [
      "Combines grayscale images with Canny edge maps so the model focuses on cell boundaries",
      "EfficientNet-B0 backbone enhanced with spatial attention",
      "Benchmarked against standard CNN, ResNet, MobileNetV2, SVM and Logistic Regression, using F1 as the main metric",
      "Hand-labelled dataset of 231 images; desktop GUI for offline classification",
    ],
    stack: ["Python", "Deep Learning", "Computer Vision", "Tkinter"],
    status: "In progress",
    links: [{ label: "Code", href: "https://github.com/acidzburns" }], // TODO: repo link
  },
  {
    title: "This Portfolio",
    summary:
      "The site you're looking at — a fast, responsive single-page portfolio with all content driven from one typed data file.",
    highlights: [
      "Built with the Next.js App Router and React Server Components",
      "Clean, responsive design styled with Tailwind CSS",
      "Deployed on Vercel from GitHub",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Completed",
    links: [
      { label: "Code", href: "https://github.com/acidzburns/portfolio" },
      { label: "Live", href: "https://akmalhakim.vercel.app" },
    ],
  },
  // Add your new projects here — copy one block above and edit it.
];

export const experience: Experience[] = [
  {
    role: "IT Intern — IT Treasury",
    org: "Maybank",
    period: "Sep 2024 – Feb 2025",
    points: [
      // TODO: replace with what you actually did. Use action + result, e.g.
      "Supported the IT Treasury team on [systems / tasks you worked on]",
      "Built / tested / documented [something specific] which helped [result]",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science (Hons) — Software Engineering",
    school: "Universiti Teknologi MARA (UiTM)",
    period: "Final year", // TODO: e.g. "2025 – 2027 (expected)"
  },
  {
    degree: "Diploma in Computer Science",
    school: "UiTM Cawangan Kedah",
    period: "Completed", // TODO: years
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["PHP", "JavaScript", "TypeScript", "Python", "SQL"] },
  { group: "Web & APIs", items: ["Laravel (MVC)", "Next.js", "React", "REST APIs", "Tailwind CSS"] },
  { group: "Data & AI", items: ["MySQL", "SQLite", "CNNs", "Genetic Algorithms"] },
  { group: "Tools", items: ["Git & GitHub", "GitHub Actions", "ServiceNow", "VS Code", "Vercel"] },
];

export const languages = ["English", "Bahasa Melayu"];

// Small facts shown in the green "chips" strip under the hero
export const stats: { label: string; value: string }[] = [
  { label: "Automated tests", value: "23" },
  { label: "CI pipeline", value: "passing" },
  { label: "ServiceNow", value: "connected" },
  { label: "Internship", value: "3–6 months" },
  { label: "Languages", value: "EN · BM" },
];