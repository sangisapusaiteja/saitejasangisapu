import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf">
      <style>{`
        .nf {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.75rem;
          padding: 2rem 1.5rem;
          background: #151517;
          color: #ededed;
        }
        .nf-eyebrow {
          margin: 0;
          font-family: var(--font-geist-mono), monospace;
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #9a9aa2;
        }
        .nf-title { margin: 0; font-size: 1.75rem; font-weight: 600; }
        .nf-text { margin: 0; color: #9a9aa2; }
        .nf-link {
          margin-top: 0.5rem;
          width: fit-content;
          color: #7ee787;
          font-size: 0.875rem;
          text-decoration: underline;
        }
        @media (prefers-color-scheme: light) {
          .nf { background: #fafafa; color: #18181b; }
          .nf-eyebrow { color: #71717a; }
          .nf-text { color: #52525b; }
          .nf-link { color: #0f7b3f; }
        }
      `}</style>

      <p className="nf-eyebrow">404</p>
      <h1 className="nf-title">Page not found</h1>
      <p className="nf-text">
        That page doesn&apos;t exist — it may have been moved or removed.
      </p>
      <Link href="/" className="nf-link">
        ← back home
      </Link>
    </main>
  );
}
