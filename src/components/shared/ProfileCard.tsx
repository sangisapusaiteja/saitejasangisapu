import { personalInfo } from "@/lib/data";

const location = personalInfo.location ?? "Bengaluru, India";
const status = personalInfo.status ?? "Open to opportunities";

const rows = [
  { label: "Name", value: personalInfo.name },
  { label: "Role", value: personalInfo.roles[0] },
  { label: "Based", value: location },
  { label: "Focus", value: "Full-stack · React, Next.js, Postgres" },
];

export default function ProfileCard() {
  return (
    <div className="rounded-lg border border-border bg-surface">
      <dl className="divide-y divide-border">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-4 px-4 py-5">
            <dt className="w-16 shrink-0 font-mono text-xs uppercase tracking-wider text-faint">
              {row.label}
            </dt>
            <dd className="text-sm text-fg">{row.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center gap-2 border-t border-border px-4 py-5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
        <span className="font-mono text-xs text-muted">{status}</span>
      </div>
    </div>
  );
}
