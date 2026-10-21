import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { projects, experiences } from "@/lib/data";

const workCompanies = Array.from(
  new Set(
    projects
      .filter((project) => project.type === "Work")
      .map((project) => project.company)
      .filter((company): company is string => Boolean(company))
  )
);

function tenureFor(company: string) {
  const entry = experiences.find((item) => item.company.startsWith(company));
  return entry?.duration.split("|")[0].trim();
}

const groups: {
  label: string;
  range?: string;
  note?: string;
  items: typeof projects;
}[] = [
  ...workCompanies.map((company) => ({
    label: company,
    range: tenureFor(company),
    items: projects.filter((project) => project.company === company),
  })),
  {
    label: "Personal",
    note: "Tools I designed and built on my own time.",
    items: projects.filter((project) => project.type === "Personal"),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="wrap py-20 sm:py-28">
      <SectionHeader
        index="03"
        label="Projects"
        title="Selected work"
        lead="Client work and personal tools I've designed, built and shipped."
      />

      {groups.map((group) => (
        <div key={group.label} className="mt-14">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
              {group.label}
            </h3>
            {group.range && (
              <span className="font-mono text-xs text-faint/70">
                {group.range}
              </span>
            )}
          </div>
          {group.note && <p className="mt-2 text-sm text-muted">{group.note}</p>}

          <ul className="mt-5">
            {group.items.map((project, index) => (
              <li key={project.title} className="border-t border-border">
                <Reveal>
                  <div className="group -mx-5 grid gap-x-6 gap-y-3 px-5 py-7 transition-colors duration-200 hover:bg-surface-hover sm:grid-cols-[2.5rem_1fr_auto]">
                    <div className="font-mono text-xs text-faint">
                      {String(index + 1).padStart(2, "0")}
                      {project.year && (
                        <span className="mt-1 block text-faint/70">
                          {project.year}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-base font-medium sm:text-lg">
                        {project.liveLink ? (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors group-hover:text-accent"
                          >
                            {project.title}
                            <span aria-hidden className="ml-1.5 text-faint">
                              ↗
                            </span>
                          </a>
                        ) : (
                          project.title
                        )}
                      </h4>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                        {project.description}
                      </p>
                      <p className="mt-3 font-mono text-xs text-faint">
                        {project.tech.join(" · ")}
                      </p>
                    </div>

                    <div className="flex gap-5 sm:flex-col sm:items-end sm:gap-2">
                      {project.caseStudy && (
                        <Link
                          href={project.caseStudy}
                          className="link font-mono text-xs"
                        >
                          Case study
                        </Link>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link font-mono text-xs"
                        >
                          Live
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link font-mono text-xs"
                        >
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
