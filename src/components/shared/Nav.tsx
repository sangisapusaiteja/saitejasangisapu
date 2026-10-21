"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { navItems, personalInfo } from "@/lib/data";

const sectionId = (href: string) => href.replace(/^\/?#/, "");

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => sectionId(item.href))
      .filter((id) => id !== "")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const linkClass = (href: string) =>
    `text-sm transition-colors ${
      active === sectionId(href) ? "text-fg" : "text-muted hover:text-fg"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-200 ${
        scrolled ? "border-b border-border bg-bg" : "border-b border-transparent"
      }`}
    >
      <nav className="wrap flex h-16 items-center justify-between">
        <a
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight"
        >
          {personalInfo.logo}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2 md:gap-4">
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={linkClass(item.href)}
                aria-current={
                  active === sectionId(item.href) ? "true" : undefined
                }
              >
                {item.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              className="font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              Résumé ↗
            </a>
          </div>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 p-2 text-muted transition-colors hover:text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-b border-border bg-bg md:hidden">
          <div className="wrap flex flex-col py-2">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-3 text-sm text-muted transition-colors hover:text-fg"
              >
                <span className="font-mono text-xs text-faint">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 py-3 font-mono text-sm text-muted transition-colors hover:text-accent"
            >
              <span className="font-mono text-xs text-faint">↗</span>
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
