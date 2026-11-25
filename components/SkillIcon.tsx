import {
  siDotnet,
  siGit,
  siGithubactions,
  siJavascript,
  siLaravel,
  siLinux,
  siMysql,
  siNextdotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siSpringboot,
  siSqlite,
  siTypescript,
  siVercel,
  type SimpleIcon,
} from "simple-icons";

// Brand logos from Simple Icons (simpleicons.org).
// Some brands (C#, Oracle, Azure, ServiceNow) asked to be removed from it,
// so those and general skills get a lettered badge instead.
const ICONS: Record<string, SimpleIcon> = {
  Java: siOpenjdk,
  "Spring Boot": siSpringboot,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  PHP: siPhp,
  Python: siPython,
  ".NET": siDotnet,
  ".NET / ASP.NET Core": siDotnet,
  React: siReact,
  "Next.js": siNextdotjs,
  Laravel: siLaravel,
  "Laravel (MVC)": siLaravel,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  SQLite: siSqlite,
  "Git & GitHub": siGit,
  "GitHub Actions": siGithubactions,
  Vercel: siVercel,
  Linux: siLinux,
};

const BADGES: Record<string, { text: string; color: string }> = {
  "C#": { text: "C#", color: "#68217A" },
  SQL: { text: "SQL", color: "#336791" },
  "REST APIs": { text: "API", color: "#0c8c5e" },
  Oracle: { text: "OR", color: "#C74634" },
  "Entity Framework Core": { text: "EF", color: "#512BD4" },
  "Microsoft Azure": { text: "Az", color: "#0078D4" },
  ServiceNow: { text: "SN", color: "#293E40" },
};

export function SkillIcon({ name, size = 18 }: { name: string; size?: number }) {
  const icon = ICONS[name];
  if (icon) {
    return (
      <svg role="img" aria-label={icon.title} viewBox="0 0 24 24" width={size} height={size} fill={`#${icon.hex}`}>
        <path d={icon.path} />
      </svg>
    );
  }
  const badge = BADGES[name] ?? { text: name.slice(0, 2).toUpperCase(), color: "#6b6b6b" };
  return (
    <span
      aria-hidden
      className="grid shrink-0 place-items-center rounded font-mono font-bold text-white"
      style={{ width: size, height: size, background: badge.color, fontSize: size * 0.42 }}
    >
      {badge.text}
    </span>
  );
}