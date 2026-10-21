import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, caseStudySlugs } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) return {};

  return {
    title: `${study.title} — case study | Saiteja Sangisapu`,
    description: study.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies[slug];

  if (!study) notFound();

  return (
    <main id="main" className="wrap pb-24 pt-32">
      <Link href="/#projects" className="link font-mono text-xs">
        ← back to projects
      </Link>

      <p className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-faint">
        Case study · {study.year} · Personal
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        {study.title}
      </h1>
      <p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-muted">
        {study.summary}
      </p>

      <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-3">
        {study.meta.map((item) => (
          <div key={item.label}>
            <dt className="font-mono text-xs uppercase tracking-wider text-faint">
              {item.label}
            </dt>
            <dd className="mt-1 font-mono text-xs text-fg">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  {item.value}
                </a>
              ) : (
                item.value
              )}
            </dd>
          </div>
        ))}
      </dl>

      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-6 sm:grid-cols-4">
        {study.numbers.map((number) => (
          <div key={number.label}>
            <dt className="font-mono text-xs uppercase tracking-wider text-faint">
              {number.label}
            </dt>
            <dd className="mt-1 text-2xl font-semibold tracking-tight">
              {number.value}
            </dd>
          </div>
        ))}
      </dl>

      <section className="mt-16">
        <h2 className="border-t border-border pt-6 text-xl font-semibold tracking-tight sm:text-2xl">
          The problem
        </h2>
        <p className="mt-4 max-w-[65ch] leading-relaxed text-muted">
          {study.problem}
        </p>
      </section>

      <section className="mt-16">
        <h2 className="border-t border-border pt-6 text-xl font-semibold tracking-tight sm:text-2xl">
          Decisions
        </h2>
        <ol className="mt-6 space-y-10">
          {study.decisions.map((decision, index) => (
            <li
              key={decision.title}
              className="grid gap-x-8 gap-y-2 sm:grid-cols-[2.5rem_1fr]"
            >
              <span className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-medium text-fg">
                  {decision.title}
                </h3>
                <p className="mt-2 max-w-[65ch] leading-relaxed text-muted">
                  {decision.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="border-t border-border pt-6 text-xl font-semibold tracking-tight sm:text-2xl">
          Where it stands
        </h2>
        <ul className="mt-4 max-w-[65ch] space-y-3">
          {study.limits.map((limit) => (
            <li
              key={limit}
              className="flex gap-3 text-[15px] leading-7 text-muted"
            >
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-faint" />
              <span>{limit}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
