import { Button } from "@/components/ui/button";
import Reveal from "@/components/shared/Reveal";
import ProfileCard from "@/components/shared/ProfileCard";
import { personalInfo } from "@/lib/data";

export default function Hero() {
  const location = personalInfo.location ?? "Bengaluru, India";

  return (
    <section id="top" className="wrap pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-16">
        <Reveal>
          <p className="font-mono text-xs text-muted">~/saiteja-sangisapu</p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>

          <p className="mt-4 font-mono text-sm text-accent">
            {personalInfo.roles[0]}
            <span className="mx-2 text-faint">·</span>
            <span className="text-muted">{location}</span>
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {personalInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" variant="accent">
              <a href="#projects">
                View work
                <span aria-hidden>↓</span>
              </a>
            </Button>
            <Button asChild size="lg">
              <a href={personalInfo.resumeUrl} download>
                Résumé
              </a>
            </Button>
            <a
              href={personalInfo.email}
              className="link px-1 font-mono text-sm"
            >
              Email ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ProfileCard />
        </Reveal>
      </div>
    </section>
  );
}
