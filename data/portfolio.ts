// ─────────────────────────────────────────────────────────────
// All the text on your portfolio lives in this one file.
// Edit here — you don't need to touch the page code.
// Anything marked 
// is a placeholder for you to fill in.
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
  location: "Malaysia",
  tagline:
    "Final-year CS student at UiTM who builds web systems and applies algorithms to real problems — from leave scheduling for a 24-hour clinic to defect detection with deep learning.",
  availability:
    "Looking for an internship from 2026/2027 — 3 to 6 months.", // TODO: adjust dates
  email: "aqbdullahakmalhakim@gmail.com", // TODO: your email
  github: "https://github.com/acidzburns",
  linkedin: "https://www.linkedin.com/in/akmal-hakim-655063251/", // TODO
  
};

export const projects: Project[] = [
  {
    title: "Leave Conflict Detection & Approval Engine",
    summary:
      "Final year project: a web system for a 14-staff, 24-hour clinic in Kemaman that detects leave conflicts and ranks requests by severity, so managers can approve without leaving shifts understaffed.",
    highlights: [
      "Genetic Algorithm with a severity-weighted fitness function scores conflicts across leave type, request date, staff role and shift coverage minimums",
      "Priority queue orders requests Emergency → Medical → Maternity → Annual, FIFO on ties",
      "Finite State Machine enforces the request lifecycle: Pending, Approved, Rejected, Cancelled",
      "Role-based dashboards for staff, approvers and admins; parameterised queries, XSS sanitisation and bcrypt hashing",
    ],
    stack: ["PHP", "SQLite / MySQL", "Bootstrap 5", "Genetic Algorithm", "FSM"],
    status: "In progress",
    links: [{ label: "Code", href: "https://github.com/acidzburns" }], // TODO: repo link
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
      "Styled with Tailwind CSS; automatic light and dark mode",
      "Deployed on Vercel from GitHub",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "Completed",
    links: [{ label: "Code", href: "https://github.com/acidzburns" }], // TODO: repo link
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
  { group: "Web", items: ["Laravel (MVC)", "Next.js", "React", "Tailwind CSS", "Bootstrap"] },
  { group: "Data & AI", items: ["MySQL", "SQLite", "CNNs", "Genetic Algorithms"] },
  { group: "Tools", items: ["Git & GitHub", "VS Code", "XAMPP", "Vercel"] },
];

export const languages = ["English", "Bahasa Melayu"];