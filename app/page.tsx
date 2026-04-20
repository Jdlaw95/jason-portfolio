import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0a0a0a" }}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
        <span className="text-lg font-semibold tracking-tight">Jason Lawrence</span>
        <ul className="flex gap-8 text-sm">
          <li>
            <Link href="/projects" className="text-zinc-400 hover:text-white transition-colors">
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

      <main className="flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-8 text-center">
        <h1 className="text-6xl font-bold tracking-tight">Jason Lawrence</h1>
        <p className="mt-4 text-xl text-zinc-400">
          Builder of apps, workflows, and AI tools
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/projects"
            className="rounded-lg px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#3b82f6" }}
          >
            View My Work
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-white hover:border-zinc-500 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </main>
    </div>
  );
}
