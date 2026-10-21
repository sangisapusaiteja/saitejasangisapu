import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { aboutContent, personalInfo } from "@/lib/data";

export default function About() {
  const location = personalInfo.location ?? "Bengaluru, India";

  return (
    <section id="about" className="wrap py-20 sm:py-28">
      <SectionHeader
        index="01"
        label="About"
        title={aboutContent.title}
        lead={aboutContent.subtitle}
      />

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,60ch)_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5 text-[15px] leading-7 text-muted">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                Based
              </dt>
              <dd className="mt-1 text-sm text-fg">{location}</dd>
            </div>
            {aboutContent.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-faint">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-sm text-fg">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.08}>
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
            Focus
          </h3>
          <ul className="mt-4 space-y-4">
            {aboutContent.highlights.map((highlight) => (
              <li key={highlight.title} className="border-t border-border pt-4">
                <p className="text-sm font-medium text-fg">
                  <span className="mr-2 text-accent">▸</span>
                  {highlight.title}
                </p>
                <p className="mt-1 pl-5 text-sm leading-6 text-muted">
                  {highlight.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
