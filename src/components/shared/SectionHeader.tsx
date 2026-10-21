import Reveal from "./Reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  lead?: string;
}

export default function SectionHeader({
  index,
  label,
  title,
  lead,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="border-t border-border pt-6">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
          <span className="text-accent">{index}</span>
          <span className="mx-2 text-faint">/</span>
          {label}
        </p>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-2xl text-muted">{lead}</p>}
      </div>
    </Reveal>
  );
}
