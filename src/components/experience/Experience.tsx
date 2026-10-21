import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="wrap py-20 sm:py-28">
      <SectionHeader
        index="04"
        label="Experience"
        title="Where I've worked"
      />

      <ol className="mt-10">
        {experiences.map((experience, index) => (
          <li
            key={`${experience.company}-${index}`}
            className="grid gap-4 border-t border-border py-8 sm:grid-cols-[12rem_1fr] sm:gap-8"
          >
            <Reveal>
              <p className="font-mono text-xs text-faint">
                {experience.duration}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h3 className="text-base font-medium text-fg">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-accent">{experience.company}</p>

              <ul className="mt-4 space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-6 text-muted"
                  >
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-faint" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
