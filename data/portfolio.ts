// ─────────────────────────────────────────────────────────────
// All the text on your portfolio lives in this one file.
// Edit here — you don't need to touch the page code.
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
  availability: "Available for a 3–6 month internship from 15 March 2027.",
  email: "abdullahakmalhakim@gmail.com",
  github: "https://github.com/acidzburns",
  linkedin: "https://www.linkedin.com/in/akmal-hakim-655063251/",
};

export const projects: Project[] = [
  {
    title: "AssetFlow",
    summary:
      "An IT asset and equipment loan system: staff request laptops and other equipment, admins approve, hand out and receive it back, and a dashboard tracks overdue loans and repairs.",
    highlights: [
      "C# / ASP.NET Core 10 REST API with JWT login and Staff / Admin roles",
      "Object-oriented domain model: each loan moves Requested → Approved → Checked out → Returned, and invalid steps are refused",
      "PostgreSQL with Entity Framework Core migrations, plus hand-written SQL for the admin report",
      "React + TypeScript frontend with role-based actions and an admin dashboard",
      "45 automated tests (xUnit + Vitest); GitHub Actions CI builds and tests the API and frontend",
      "Deployed on Microsoft Azure (App Service + Azure Database for PostgreSQL) with a GitHub Actions pipeline that tests before every deploy",
    ],
    stack: ["C#", ".NET 10", "PostgreSQL", "React", "TypeScript", "Azure", "xUnit", "GitHub Actions"],
    status: "Completed",
    links: [
      { label: "Live demo", href: "https://assetflow-api-akmal-gubxf8djb2aja3c7.malaysiawest-01.azurewebsites.net" },
      { label: "Code", href: "https://github.com/acidzburns/assetflow" },
    ],
  },
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
    title: "Car Rental Platform",
    summary:
      "A car rental marketplace where renters book cars from lessors, with payments, refunds, reviews and an admin back office. Group project for CSC577.",
    highlights: [
      "Three roles with separate logins: renters search, book, pay and review; lessors list cars and manage bookings and earnings; admins verify lessors and manage users, bookings and support tickets",
      "Built most of the admin side, payments and notifications (46 of 68 commits)",
      "Simulated FPX online-banking payments, cancellations with refund tracking, and email notifications with PHPMailer",
      "Admin reports and charts with Chart.js; lessor verification and account suspension",
      "Oracle Database 23ai, with every query using bind variables to prevent SQL injection; passwords stored as hashes",
    ],
    stack: ["PHP", "Oracle Database", "SQL", "JavaScript", "Chart.js", "PHPMailer"],
    status: "Completed",
    links: [{ label: "Code", href: "https://github.com/acidzburns/CarRentalPlatformSystem" }],
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
    role: "IT Intern — IT Treasury (Global Banking Delivery & Operations)",
    org: "Maybank",
    period: "Sep 2024 – Feb 2025",
    points: [
      "Performed System Integration Testing (SIT) for the Real-Time Distribution System (RTDS) upgrade, which moved market-data distribution from v3.1 on a physical Oracle Linux server to v3.7 on Red Hat Enterprise Linux VMs",
      "Verified connectivity, data completeness, latency and error handling from the Refinitiv feed to downstream treasury systems (Kondor+, ARTS, FINIQ, MAESTRO)",
      "Wrote SIT plans and test scripts, test evidence, a test coverage checklist and technical documentation following the bank's SDLC",
      "Raised and tracked Change Requests in HP Service Manager with risk assessments and hour-by-hour implementation plans, through to Change Advisory Board (CAB) approval",
      "Troubleshot treasury applications on OpenShift using oc and Linux commands (pod status, logs), and gave regular status updates to the Technical Project Manager",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Computer Science (Hons) — Software Engineering",
    school: "Universiti Teknologi MARA (UiTM)",
    period: "2025 – 2027 (expected)",
  },
  {
    degree: "Diploma in Computer Science",
    school: "UiTM Cawangan Kedah",
    period: "2022 – 2025",
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["C#", "Java", "TypeScript", "JavaScript", "PHP", "Python", "SQL"] },
  { group: "Web & APIs", items: [".NET / ASP.NET Core", "Spring Boot", "React", "Next.js", "Laravel (MVC)", "REST APIs"] },
  { group: "Data", items: ["PostgreSQL", "Oracle", "MySQL", "SQLite", "Entity Framework Core"] },
  { group: "Cloud & Tools", items: ["Microsoft Azure", "Git & GitHub", "GitHub Actions", "ServiceNow", "Vercel"] },
];

export const languages = ["English", "Bahasa Melayu"];

// Small facts shown in the green "chips" strip under the hero
export const stats: { label: string; value: string }[] = [
  { label: "Automated tests", value: "68" },
  { label: "CI pipeline", value: "passing" },
  { label: "Azure", value: "live" },
  { label: "ServiceNow", value: "connected" },
  { label: "Internship", value: "3–6 months" },
  { label: "Languages", value: "EN · BM" },
];