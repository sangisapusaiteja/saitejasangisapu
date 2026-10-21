import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { technologies, techCategories } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="tech-stack" className="wrap py-20 sm:py-28">
      <SectionHeader
        index="02"
        label="Stack"
        title="Tools I build with"
        lead="Grouped by where they sit in a project."
      />

      <div className="mt-10">
        {techCategories.map((category, index) => {
          const items = technologies.filter((tech) => tech.category === category);

          return (
            <Reveal key={category} delay={index * 0.05}>
              <div className="grid gap-3 border-t border-border py-6 sm:grid-cols-[10rem_1fr] sm:gap-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
                  {category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {items.map((tech) => (
                    <li
                      key={tech.name}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {tech.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
