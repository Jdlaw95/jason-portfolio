import Link from "next/link";

const projects = [
  {
    title: "KaiBlu Parenting Companion",
    description:
      "AI-powered parenting assistant that delivers research-backed answers grounded in WHO, AAP, and NHS guidance.",
    tags: ["React Native", "Supabase", "Claude AI", "Expo"],
    href: "https://kaiblu.co.za/apps/kaiblu-parenting-companion",
  },
  {
    title: "Dentist AI Agent",
    description:
      "Automated AI agent that handles dental practice inquiries without staff involvement.",
    tags: ["n8n", "Claude AI", "Automation"],
    href: "https://kaiblu.co.za/workflows/dentist-ai-agent",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0a0a0a" }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <Link href="/" className="text-lg font-semibold tracking-tight text-white">
          Jason Lawrence
        </Link>
        <ul className="flex gap-8 text-sm">
          <li>
            <Link href="/projects" className="text-white transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-zinc-400 hover:text-white transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <main className="mx-auto max-w-5xl px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-zinc-400">A selection of things I&apos;ve built.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-zinc-800 p-6"
              style={{ backgroundColor: "#111" }}
            >
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-700 px-2 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#3b82f6" }}
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
