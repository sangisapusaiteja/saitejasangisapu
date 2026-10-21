// ==========================================
// Centralized Portfolio Data
// ==========================================

// --- Personal Info ---
export const personalInfo = {
  name: "Saiteja Sangisapu",
  logo: "ST",
  location: "Bengaluru, India",
  status: "Employed · open to opportunities",
  greeting: "Hi, my name is",
  description:
    "I design and ship full-stack products end to end — React and Next.js on the front end, Nest.js and PostgreSQL behind it, with multi-tenant data models and real-time features where they earn their place.",
  resumeUrl: "/resume.pdf",
  email: "mailto:saitejasangisapu@tejaverse.org",
  roles: [
    "Software Engineer",
    "React Developer",
    "UI Engineer",
    "Next.js Developer",
    "TypeScript Enthusiast",
  ],
};

// --- Navigation ---
export const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Tech Stack", href: "/#tech-stack" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

// --- About Section ---
export const aboutContent = {
  subtitle: "Get To Know Me",
  title: "About Me",
  paragraphs: [
    "I'm a Software Engineer with 2 years and 10 months of experience, based in Bengaluru. I work across the stack — interfaces in React and Next.js, APIs in Nest.js, and data layers on PostgreSQL and Supabase.",
    "Most of that time has gone into multi-tenant platforms and real-time systems: scoping data per tenant, grouping content by region, and keeping state consistent across clients. I care about where the logic lives — outcomes that must not be forgeable belong in the database, not the browser.",
    "Outside client work I build and ship my own tools — an interview preparation platform, a real-time coding battler and a DSA visualiser. All three are deployed, share a single auth system, and run in production.",
  ],
  stats: [
    { value: "2y 10m", label: "Experience" },
    { value: "8", label: "Projects" },
    { value: "10", label: "Tech Stack" },
  ],
  highlights: [
    {
      icon: "Layers" as const,
      title: "Multi-tenant architecture",
      description:
        "Tenant-scoped data models and cross-region grouping for platforms serving organisers across Europe.",
    },
    {
      icon: "Zap" as const,
      title: "Real-time, server-authoritative",
      description:
        "Live match state over Supabase Realtime, with Elo and XP written only by Postgres SECURITY DEFINER functions.",
    },
    {
      icon: "Database" as const,
      title: "Data layer & performance",
      description:
        "PostgreSQL schema design, RLS policies and query optimisation to bring page load times down.",
    },
    {
      icon: "Code2" as const,
      title: "One account, three apps",
      description:
        "A shared users table and session cookie across Interview Handbook, Code Battle and Code Trace, so a single sign-in carries between them.",
    },
  ],
};

// --- Tech Stack ---
export type TechCategory = "Frontend" | "Backend" | "Database" | "Tools";

export interface Tech {
  name: string;
  category: TechCategory;
}

export const technologies: Tech[] = [
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Nest.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "Docker", category: "Tools" },
  { name: "Vercel", category: "Tools" },
];

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
];

export const techBadges = ["Responsive Design", "Clean Code", "Agile", "CI/CD"];

// --- Projects ---
export type ProjectType = "Work" | "Personal";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  type: ProjectType;
  /** Employer for work projects; omitted on personal ones. */
  company?: string;
  /** Internal route to a written case study, when one exists. */
  caseStudy?: string;
  liveLink?: string;
  githubLink?: string;
  /** Only read by the frozen /v0 snapshot — the current design doesn't use it. */
  gradient: string;
  year?: string;
}

export const projects: Project[] = [
  // --- Work: client projects ---
  {
    title: "Art of Living Teachers & Program Organizers Application",
    description:
      "Event and participant management platform built for Art of Living International, used by teachers and organisers to run programmes. I built the responsive UI across programme listings, participant records and registration flows, and integrated the REST APIs behind them so client and server stayed consistent as records changed.",
    tech: ["React.js", "Tailwind CSS", "Supabase", "PostgreSQL", "REST APIs"],
    type: "Work",
    company: "Sumeru Software Solutions",
    gradient: "from-blue-500 to-indigo-500",
    year: "2024",
  },
  {
    title: "AOL US Landing Pages",
    description:
      "Landing pages built for the Art of Living US market, held to the global brand system rather than restyled per campaign. I implemented the responsive layouts and components, and tuned the markup, images and asset loading so the pages stayed fast on the connections their visitors actually use. Live on artofliving.org.",
    tech: ["Tailwind CSS", "Next.js", "React.js"],
    type: "Work",
    company: "Sumeru Software Solutions",
    gradient: "from-pink-500 to-rose-500",
    year: "2024",
    liveLink: "https://www.artofliving.org/us-en",
  },
  {
    title: "Common Harmony",
    description:
      "Multi-tenant course management system where authorised tenants announce and manage courses across specific regions (e.g. Europe). I built the tenant-scoping and geographic grouping logic that decides which regions see which courses, so one tenant's content stays isolated while cross-region visibility is something you opt into rather than something that leaks by default.",
    tech: ["React.js", "PostgreSQL", "Nest.js", "Next.js"],
    type: "Work",
    company: "TECHVED Consulting",
    gradient: "from-emerald-500 to-teal-500",
    year: "2025",
  },
  {
    title: "Rewards System",
    description:
      "Reward wallet for the Art of Living platform: teachers and admins accrue credits for the programmes they announce in European regions, and the accumulated balance can later be redeemed as a discount. I built the wallet, the accrual tied to programme announcements, and the redemption path that applies a balance against a future booking.",
    tech: ["React.js", "Next.js", "Nest.js", "PostgreSQL"],
    type: "Work",
    company: "TECHVED Consulting",
    gradient: "from-amber-500 to-orange-500",
    year: "2026",
  },

  // --- Personal: tools built on my own time ---
  {
    title: "Interview Handbook",
    description:
      "Interview preparation platform covering 500+ topics across 9 categories — HTML, CSS, JavaScript, DSA, Python, PostgreSQL, React, System Design and Technical Q&A. Each topic combines a concept write-up, an interactive visualisation, a quiz and a Monaco editor, backed by an in-browser PostgreSQL sandbox (PGLite) and a Gemini-powered assistant for explanations. Progress, streaks and an activity heatmap are tracked per user, and topic content and the search index are cached server-side so navigation never refetches.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "PGLite", "Gemini"],
    type: "Personal",
    caseStudy: "/projects/interview-handbook",
    gradient: "from-blue-500 to-cyan-500",
    liveLink: "https://interviewhandbook.tejaverse.org",
    githubLink: "https://github.com/sangisapusaiteja/InterviewHandbook",
  },
  {
    title: "Code Battle",
    description:
      "Real-time competitive coding platform where two developers face the same problem set under one clock, driven by a compare-and-set state machine (waiting → matched → countdown → active → finished) over Supabase Realtime. Elo (K=32, from a 1200 start) and XP are computed in SQL by SECURITY DEFINER functions, with an idempotent settlement that takes a row lock on the match. Hosts pick the problems and share a 6-character room code, and a unique partial index enforces exactly one final submission per player per problem.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Monaco"],
    type: "Personal",
    caseStudy: "/projects/code-battle",
    gradient: "from-orange-500 to-amber-500",
    liveLink: "https://codebattle.tejaverse.org",
    githubLink: "https://github.com/sangisapusaiteja/CodeBattle",
  },
  {
    title: "Code Trace",
    description:
      "Interactive DSA visualiser that steps through 119 problems across 13 categories one source line at a time, highlighting the active line while animating the data structure — arrays, pointers, hash maps, sets, linked lists and grids. Every problem ships two approaches (usually a brute-force and a better one), each with its own purpose-built visualiser behind a (problem, approach) registry of 238 entries. Each approach's steps are generated up front from a simulation and then played back, so the animation cannot drift from the code; play, pause, step, three speeds and tracked-variable readouts sit on top.",
    tech: ["Next.js", "TypeScript", "React", "Supabase", "PostgreSQL", "Tailwind CSS"],
    type: "Personal",
    caseStudy: "/projects/code-trace",
    gradient: "from-violet-500 to-fuchsia-500",
    liveLink: "https://codetrace.tejaverse.org",
  },
  {
    title: "tejaverse.org",
    description:
      "The hub tying my tools together: a single-page site with an inline Markdown blog that expands in place rather than navigating away, light and dark themes with system-preference detection, and a navbar that highlights the section currently in view. Posts are Markdown files parsed with gray-matter and rendered through react-markdown with GFM, and each tool above deploys independently to its own subdomain.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Markdown"],
    type: "Personal",
    caseStudy: "/projects/tejaverse",
    gradient: "from-slate-500 to-zinc-500",
    liveLink: "https://tejaverse.org",
    githubLink: "https://github.com/sangisapusaiteja/tejaverse",
  },
];

// --- Experience ---
export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "TECHVED Consulting India Pvt. Ltd.",
    role: "Software Engineer",
    duration: "Jan 2025 – July 2026 | Bengaluru, India",
    achievements: [
      "Architected and maintained scalable web applications using React.js, TypeScript, Tailwind CSS, PostgreSQL, and Supabase",
      "Designed and optimized RESTful APIs to enable seamless front-end and back-end integration",
      "Improved application performance by optimizing complex SQL queries and reducing page load times",
      "Collaborated with cross-functional teams in Agile/Scrum environments to deliver high-quality features on schedule",
      "Contributed to clean architecture practices and reusable component development for long-term scalability",
    ],
  },
  {
    company: "Sumeru Software Solutions Pvt. Ltd.",
    role: "Full-Stack Developer",
    duration: "Jan 2024 – Dec 2024 | Bengaluru, India",
    achievements: [
      "Enhanced application functionality by implementing complex data flow management and secure authentication mechanisms",
      "Developed and maintained robust RESTful APIs ensuring reliable and efficient data exchange",
      "Implemented role-based access control and optimized backend logic for improved system stability",
      "Worked closely with stakeholders to translate business requirements into scalable technical solutions",
    ],
  },
];

// --- Contact / Social Links ---
export interface SocialLink {
  name: string;
  icon: "Mail" | "Linkedin" | "Github";
  link: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: "Mail",
    link: "mailto:saitejasangisapu@tejaverse.org",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    link: "https://www.linkedin.com/in/saitejasangisapu/",
    color: "from-blue-600 to-blue-400",
  },
  {
    name: "GitHub",
    icon: "Github",
    link: "https://github.com/sangisapusaiteja",
    color: "from-gray-700 to-gray-500",
  },
];

export const contactContent = {
  subtitle: "Let's Connect",
  title: "Get In Touch",
  description:
    "I'm always open to discussing new projects, creative ideas, or opportunities",
  ctaTitle: "Ready to start a project?",
  ctaDescription: "Drop me a message and let's make something amazing together",
  ctaText: "Send me a message",
  footerText: "Built with ♥",
};

// --- Portfolio Version History ---
export interface PortfolioVersion {
  version: string;
  year: string;
  description: string;
  url: string;
  technologies: string[];
  thumbnail?: string;
}

export const portfolioVersions: PortfolioVersion[] = [
  {
    version: "v1",
    year: "2026",
    description: "Current version — typography-led developer portfolio",
    url: "/",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    version: "v0",
    year: "2025",
    description: "Previous version — glassmorphism design",
    url: "/v0",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
    ],
  },
];
