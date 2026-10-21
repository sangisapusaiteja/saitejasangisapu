"use client";

import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next =
      root.getAttribute("data-theme") === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage can be blocked (private mode) — the choice just won't persist.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      title="Toggle color theme"
      className="p-2 text-muted transition-colors hover:text-fg"
    >
      <Sun className="h-4 w-4 light:hidden" />
      <Moon className="hidden h-4 w-4 light:block" />
    </button>
  );
}
