import { personalInfo, portfolioVersions } from "@/lib/data";

const earlierVersions = portfolioVersions.filter(
  (version) => version.url !== "/"
);

export default function Footer() {
  return (
    <footer className="wrap border-t border-border py-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs text-faint">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>

        {earlierVersions.length > 0 && (
          <p className="font-mono text-xs text-faint">
            Earlier versions:{" "}
            {earlierVersions.map((version, index) => (
              <span key={version.version}>
                {index > 0 && ", "}
                <a
                  href={version.url}
                  className="link"
                  title={version.description}
                >
                  {version.version}
                </a>
              </span>
            ))}
          </p>
        )}
      </div>
    </footer>
  );
}
