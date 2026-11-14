import {
  profile,
  projects,
  experience,
  education,
  skills,
  languages,
  type Project,
} from "@/data/portfolio";

const nav = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-baseline gap-3 border-b border-line pb-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{children}</h2>
    </div>
  );
}

function ProjectCard({ project, n }: { project: Project; n: number }) {
  return (
    <article className="group grid gap-6 border-b border-line py-10 last:border-0 md:grid-cols-[4rem_1fr]">
      <span className="font-mono text-sm text-muted">{String(n).padStart(2, "0")}</span>
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
          {project.status && (
            <span
              className={`rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
                project.status === "Completed"
                  ? "bg-accent-soft text-accent"
                  : "border border-line text-muted"
              }`}
            >
              {project.status}
            </span>
          )}
        </div>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 max-w-2xl space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3 leading-relaxed">
              <span className="mt-2.5 h-1 w-3 shrink-0 bg-accent" aria-hidden />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded border border-line bg-card px-2 py-1 font-mono text-xs">
                {s}
              </li>
            ))}
          </ul>
          {project.links?.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sm text-accent underline-offset-4 hover:underline"
            >
              {l.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Top bar */}
      <header className="sticky top-0 z-10 -mx-6 flex items-center justify-between bg-paper/85 px-6 py-4 backdrop-blur">
        <a href="#top" className="font-mono text-sm font-medium">
          {profile.shortName.toLowerCase().replace(" ", ".")}
        </a>
        <nav className="flex gap-5 font-mono text-xs text-muted sm:text-sm">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="pb-24 pt-20 sm:pt-28">
          <p className="font-mono text-sm text-accent">
            <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
            {profile.availability}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-mono text-sm uppercase tracking-[0.15em] text-muted">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed sm:text-2xl">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-ink px-5 py-3 text-sm font-medium text-paper transition hover:opacity-85"
            >
              See my work
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-5 py-3 text-sm font-medium transition hover:border-ink"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="scroll-mt-20 pb-20">
          <SectionLabel index="01">Selected work</SectionLabel>
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} n={i + 1} />
          ))}
        </section>

        {/* Experience + Education */}
        <section id="experience" className="scroll-mt-20 pb-20">
          <SectionLabel index="02">Experience & education</SectionLabel>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              {experience.map((e) => (
                <div key={e.org + e.role}>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{e.role}</h3>
                  <p className="text-accent">{e.org}</p>
                  <ul className="mt-3 space-y-1.5 text-muted">
                    {e.points.map((pt) => (
                      <li key={pt}>— {pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              {education.map((ed) => (
                <div key={ed.degree} className="rounded-lg border border-line bg-card p-5">
                  <p className="font-mono text-xs text-muted">{ed.period}</p>
                  <h3 className="mt-1 font-semibold">{ed.degree}</h3>
                  <p className="text-muted">{ed.school}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-20 pb-20">
          <SectionLabel index="03">Skills</SectionLabel>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((g) => (
              <div key={g.group}>
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{g.group}</h3>
                <ul className="mt-3 space-y-1.5">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-muted">
            Languages: <span className="text-ink">{languages.join(" · ")}</span>
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-20 pb-24">
          <SectionLabel index="04">Contact</SectionLabel>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Hiring an intern? Let&apos;s talk.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-xl text-accent underline decoration-line underline-offset-8 hover:decoration-accent sm:text-2xl"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex gap-6 font-mono text-sm">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">
              GitHub ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 font-mono text-xs text-muted">
        © 2026 {profile.name}. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}