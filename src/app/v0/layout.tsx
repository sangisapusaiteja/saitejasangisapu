import type { Metadata } from "next";
import "../v0.css";
import ClientWrapper from "@/components/v0/ClientWrapper";

export const metadata: Metadata = {
  title: "v0 — Previous portfolio",
  robots: { index: false, follow: false },
};

export default function LegacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClientWrapper>{children}</ClientWrapper>
      {/* Deliberately a hard navigation: client-side routing would keep v0.css
          attached and leak its :root tokens into the v1 page. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        className="fixed bottom-5 right-5 z-[110] rounded-full border border-white/20 bg-black/70 px-4 py-2 font-mono text-xs text-white backdrop-blur transition-colors hover:border-white/50"
      >
        ← back to v1
      </a>
    </>
  );
}
