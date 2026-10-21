import SectionHeader from "@/components/shared/SectionHeader";
import Reveal from "@/components/shared/Reveal";
import { contactContent, personalInfo, socialLinks } from "@/lib/data";

export default function Contact() {
  const email = personalInfo.email.replace(/^mailto:/, "");

  return (
    <section id="contact" className="wrap py-20 sm:py-28">
      <SectionHeader
        index="05"
        label="Contact"
        title={contactContent.title}
        lead={contactContent.description}
      />

      <Reveal>
        <div className="mt-10 flex flex-col gap-8">
          <a
            href={personalInfo.email}
            className="link w-fit font-mono text-sm sm:text-base"
          >
            {email} ↗
          </a>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.link}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={
                    social.name === "Email" ? undefined : "noopener noreferrer"
                  }
                  className="text-sm text-muted transition-colors hover:text-accent"
                >
                  {social.name}
                  <span aria-hidden className="ml-1.5 text-faint">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
