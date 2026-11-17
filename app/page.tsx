import {
  profile,
  projects,
  experience,
  education,
  skills,
  languages,
  stats,
  type Project,
} from "@/data/portfolio";

const nav = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const toolWall = ["Next.js", "TypeScript", "Laravel", "Python", "ServiceNow", "MySQL", "GitHub Actions", "REST APIs"];

/* ── Small building blocks ─────────────────────────────────────────── */

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden className="opacity-70">
      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PrimaryButton({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-white transition hover:bg-ink/85"
    >
      {children}
      <Chevron />
    </a>
  );
}

function SecondaryButton({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2.5 text-sm font-medium transition hover:border-ink/30"
    >
      {children}
    </a>
  );
}

/** "Label  [value]" chip with the value in green monospace. */
function StatChip({ label, value }: { label: string; value: string }) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap text-sm text-muted">
      {label}
      <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[13px] text-accent">{value}</span>
    </span>
  );
}

/** Two-tone section heading: first sentence black, second grey. */
function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <h2 className="relative max-w-2xl pl-6 text-3xl font-medium leading-[1.15] tracking-tight sm:text-[42px]">
      <span className="absolute left-0 top-1 h-9 w-[2px] bg-accent sm:h-11" aria-hidden />
      {title} <span className="text-muted/80">{subtitle}</span>
    </h2>
  );
}

/* ── Hero artwork: flowing green lines + a preview of the Integration Hub ── */

function Waves() {
  const lines = Array.from({ length: 22 }, (_, i) => i);
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 800 700"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="wave" x1="0" x2="1" y1="1" y2="0">
          <stop offset="0" stopColor="#10b981" stopOpacity="0.9" />
          <stop offset="1" stopColor="#bef264" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      {lines.map((i) => (
        <path
          key={i}
          d={`M -40 ${640 - i * 6} C 220 ${560 - i * 14}, 420 ${380 + i * 9}, 840 ${40 + i * 13}`}
          stroke="url(#wave)"
          strokeWidth="1"
          fill="none"
          opacity={0.25 + (i % 5) * 0.12}
        />
      ))}
    </svg>
  );
}

function HubPreview() {
  const rows = [
    { ref: "SO-000014", status: "DELIVERED", tone: "bg-emerald-50 text-emerald-700" },
    { ref: "SO-000013", status: "RETRY", tone: "bg-amber-50 text-amber-700" },
    { ref: "SO-000012", status: "DELIVERED", tone: "bg-emerald-50 text-emerald-700" },
    { ref: "SO-000011", status: "FAILED", tone: "bg-rose-50 text-rose-700" },
    { ref: "SO-000010", status: "DELIVERED", tone: "bg-emerald-50 text-emerald-700" },
  ];
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_0_60px_-10px_rgba(16,185,129,0.25)]">
      <div className="grid grid-cols-[150px_1fr] text-[11px]">
        {/* sidebar */}
        <div className="border-r border-line p-3">
          <div className="mb-4 flex items-center gap-1.5 font-semibold">
            <span className="grid h-4 w-4 place-items-center rounded bg-accent font-mono text-[8px] text-white">IH</span>
            Integration Hub
          </div>
          {["Monitor", "Messages", "Incidents", "ServiceNow", "Settings"].map((item, i) => (
            <div
              key={item}
              className={`mb-0.5 rounded px-2 py-1.5 ${i === 0 ? "bg-accent-soft font-medium text-accent" : "text-muted"}`}
            >
              {item}
            </div>
          ))}
        </div>
        {/* main */}
        <div className="p-4">
          <div className="mb-3 flex gap-4 border-b border-line text-muted">
            <span className="border-b-2 border-accent pb-1.5 font-medium text-accent">Monitor</span>
            <span>Messages</span>
            <span>Incidents</span>
          </div>
          <p className="font-medium text-accent">Shop → Warehouse</p>
          <p className="mt-0.5 text-base font-medium">Message monitor</p>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Success rate", "96.4%"],
              ["In retry", "2"],
              ["Incidents", "1"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-md border border-line bg-card/60 p-2">
                <p className="text-[10px] text-muted">{k}</p>
                <p className="text-sm font-semibold">{v}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 divide-y divide-line rounded-md border border-line">
            {rows.map((r) => (
              <div key={r.ref} className="flex items-center gap-3 px-2 py-1.5 font-mono">
                <span className="w-20">{r.ref}</span>
                <span className={`rounded px-1.5 py-0.5 text-[9px] ${r.tone}`}>{r.status}</span>
                <span className="ml-auto text-muted">Shop → Warehouse</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project card ──────────────────────────────────────────────────── */

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <article
      className={`flex flex-col rounded-xl border border-card-line bg-card p-7 transition hover:border-ink/20 ${
        featured ? "md:col-span-2 md:p-9" : ""
      }`}
    >
      <div className="flex items-center gap-3 font-mono text-xs text-muted">
        {featured && <span className="rounded bg-accent-soft px-1.5 py-0.5 text-accent">Featured</span>}
        {project.status && <span>{project.status}</span>}
      </div>
      <h3 className={`mt-3 font-medium tracking-tight ${featured ? "text-3xl" : "text-2xl"}`}>{project.title}</h3>
      <p className="mt-3 max-w-2xl leading-relaxed text-muted">{project.summary}</p>
      <ul className={`mt-5 space-y-2 text-[15px] ${featured ? "md:columns-2 md:gap-10" : ""}`}>
        {project.highlights.map((h) => (
          <li key={h} className="flex break-inside-avoid gap-2.5 pb-2 leading-relaxed">
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
        <ul className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s} className="rounded-md border border-card-line bg-white px-2 py-1 font-mono text-xs">
              {s}
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          {project.links?.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium hover:text-accent"
            >
              {l.label}
              <Chevron />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function Home() {
  const [featured, ...others] = projects;
  const initials = profile.shortName
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <>
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-line bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5 sm:px-8">
          <a href="#top" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            <span className="grid h-6 w-6 place-items-center rounded-md bg-accent font-mono text-[10px] font-bold text-white">
              {initials}
            </span>
            {profile.shortName.toLowerCase()}
          </a>
          <nav className="hidden gap-8 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-accent">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-md border border-line px-3.5 py-2 text-sm font-medium hover:border-ink/30 sm:block"
            >
              GitHub
            </a>
            <a href="#contact" className="rounded-md bg-ink px-3.5 py-2 text-sm font-medium text-white hover:bg-ink/85">
              Contact me
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl border-x border-line">
        {/* Hero */}
        <section className="relative grid overflow-hidden lg:grid-cols-[5fr_7fr]">
          <div className="relative z-10 px-6 pb-14 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-2.5 py-1.5 text-sm"
            >
              Open to internships
              <span className="rounded bg-accent-soft px-1.5 py-0.5 font-mono text-[13px] text-accent">
                3–6 months
              </span>
              <Chevron />
            </a>
            <h1 className="mt-7 font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">{profile.headline}</h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted">
              I&apos;m <strong className="font-medium text-ink">{profile.name}</strong>, a final-year{" "}
              <strong className="font-medium text-ink">Computer Science</strong> student at UiTM working on{" "}
              <strong className="font-medium text-ink">integrations</strong>,{" "}
              <strong className="font-medium text-ink">web apps</strong> and{" "}
              <strong className="font-medium text-ink">machine learning</strong>.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <PrimaryButton href="#work">See my work</PrimaryButton>
              <SecondaryButton href={profile.github} external>
                View GitHub
              </SecondaryButton>
            </div>
            <p className="mt-6 font-mono text-xs text-muted">{profile.location} · English & Bahasa Melayu</p>
          </div>

          <div className="relative min-h-[380px] lg:min-h-0">
            <Waves />
            <div className="relative z-10 px-6 pb-12 sm:px-8 lg:absolute lg:-right-6 lg:left-6 lg:top-36 lg:px-0 lg:pb-0">
              <HubPreview />
            </div>
          </div>
        </section>

        {/* Tools wall */}
        <section className="grid border-t border-line md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col justify-between gap-8 border-line p-6 sm:p-8 md:border-r">
            <p className="text-2xl leading-snug tracking-tight text-muted">
              Working across the stack, <span className="text-ink">from APIs and databases</span> to CI pipelines and
              ServiceNow.
            </p>
            <div>
              <PrimaryButton href="#skills">See all skills</PrimaryButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-4 sm:p-6">
            {toolWall.map((t) => (
              <div
                key={t}
                className="grid aspect-[4/3] place-items-center rounded-lg border border-card-line bg-card px-2 text-center text-[15px] font-semibold tracking-tight"
              >
                {t}
              </div>
            ))}
          </div>
        </section>

        {/* Stats strip */}
        <section className="flex items-center gap-8 overflow-hidden border-t border-line px-6 py-5 sm:px-8">
          <p className="shrink-0 font-medium">At a glance</p>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]">
            <div className="marquee flex w-max gap-10">
              {[...stats, ...stats].map((s, i) => (
                <StatChip key={i} label={s.label} value={s.value} />
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-16 border-t border-line px-4 py-20 sm:px-6 sm:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6 px-2">
            <SectionHeading title="Selected work." subtitle="Projects I've designed, built and shipped." />
            <PrimaryButton href={profile.github} external>
              All projects on GitHub
            </PrimaryButton>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {featured && <ProjectCard project={featured} featured />}
            {others.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </section>

        {/* Experience & education */}
        <section id="experience" className="scroll-mt-16 border-t border-line px-4 py-20 sm:px-6 sm:py-24">
          <div className="px-2">
            <SectionHeading title="Experience & education." subtitle="Where I've worked and studied." />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {experience.map((e) => (
              <div key={e.org + e.role} className="rounded-xl border border-card-line bg-card p-7 md:row-span-2">
                <p className="font-mono text-xs text-muted">{e.period}</p>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{e.role}</h3>
                <p className="mt-1 font-medium text-accent">{e.org}</p>
                <ul className="mt-5 space-y-2 text-[15px]">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 leading-relaxed">
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {education.map((ed) => (
              <div key={ed.degree} className="rounded-xl border border-card-line bg-card p-7">
                <p className="font-mono text-xs text-muted">{ed.period}</p>
                <h3 className="mt-3 text-lg font-medium tracking-tight">{ed.degree}</h3>
                <p className="mt-1 text-muted">{ed.school}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-16 border-t border-line px-4 py-20 sm:px-6 sm:py-24">
          <div className="px-2">
            <SectionHeading title="Skills." subtitle="The tools I reach for every day." />
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <div key={g.group} className="rounded-xl border border-card-line bg-card p-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent">{g.group}</h3>
                <ul className="mt-4 space-y-2">
                  {g.items.map((s) => (
                    <li key={s} className="font-medium">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-6 px-2">
            <StatChip label="Spoken languages" value={languages.join(" · ")} />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative scroll-mt-16 overflow-hidden border-t border-line px-6 py-24 sm:px-8 sm:py-32">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 opacity-60 md:block">
            <Waves />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl">
              Hiring an intern? <span className="text-muted/80">Let&apos;s talk.</span>
            </h2>
            <p className="mt-6 text-lg text-muted">
              I reply within a day. Email is best, or find me on LinkedIn.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5">
              <PrimaryButton href={`mailto:${profile.email}`}>Email me</PrimaryButton>
              <SecondaryButton href={profile.linkedin} external>
                LinkedIn
              </SecondaryButton>
              <SecondaryButton href={profile.github} external>
                GitHub
              </SecondaryButton>
            </div>
            <p className="mt-6 font-mono text-sm text-muted">{profile.email}</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:px-8">
          <span className="flex items-center gap-2">
            <span className="grid h-5 w-5 place-items-center rounded bg-accent font-mono text-[9px] font-bold text-white">
              {initials}
            </span>
            © 2026 {profile.name}
          </span>
          <span className="font-mono text-xs">Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </>
  );
}