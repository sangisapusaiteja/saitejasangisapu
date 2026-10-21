import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${personalInfo.name} - ${personalInfo.roles[0]}`,
  description: `Portfolio of ${personalInfo.name}, a ${personalInfo.roles[0]} specializing in React, Next.js, TypeScript, Node.js, and modern web technologies.`,
  keywords: [
    "Full-Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Web Development",
  ],
  authors: [{ name: personalInfo.name }],
  icons: {
    icon: [{ url: "/saitejasangisapu.jpg" }],
    apple: [{ url: "/saitejasangisapu.jpg", sizes: "180x180" }],
    shortcut: "/saitejasangisapu.jpg",
  },
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.roles[0]}`,
    description:
      "Portfolio showcasing modern web applications and full-stack development expertise",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151517" },
  ],
  colorScheme: "light dark",
};

const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.setAttribute("data-theme",t)})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
