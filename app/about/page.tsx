import Nav from "@/components/Nav";

const skills = [
  "Next.js",
  "React Native",
  "Supabase",
  "Tailwind CSS",
  "TypeScript",
  "n8n",
  "Claude AI",
  "Expo",
  "Vercel",
  "Java",
  "Swift",
  "Python (Learning)",
  
];

export default function About() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0a0a0a" }}>
      <Nav />

      <main className="mx-auto max-w-5xl px-8 py-16">
        {/* Hero */}
        <section>
          <h1 className="text-4xl font-bold tracking-tight">Jason Lawrence</h1>
          <p className="mt-2 text-lg font-medium" style={{ color: "#3b82f6" }}>
            Developer &amp; Founder
          </p>
          <p className="mt-1 text-sm text-zinc-500">Cape Town, South Africa</p>
        </section>

        {/* Bio */}
        <section className="mt-10">
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300">
            I&apos;m a self-taught developer and founder of KaiBlu — a Cape Town-based studio
            building apps, AI workflows, and digital tools. I have a background in Computer
            Science from IIE Varsity College and I build across mobile, web, and automation.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Tech Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-md border border-zinc-700 px-3 py-1 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Currently Building */}
        <section className="mt-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
            Currently Building
          </h2>
          <div
            className="mt-4 rounded-xl border border-zinc-800 p-6"
            style={{ backgroundColor: "#111" }}
          >
            <p className="text-sm leading-relaxed text-zinc-300">
              <a
                href="https://kaiblu.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-white hover:opacity-80 transition-opacity"
                style={{ textDecorationColor: "#3b82f6" }}
              >
                KaiBlu
              </a>{" "}
              — a growing suite of apps and AI workflows from Cape Town.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
