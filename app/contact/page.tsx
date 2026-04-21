import Nav from "@/components/Nav";

const contacts = [
  {
    label: "Email",
    display: "kaiblu26@gmail.com",
    href: "mailto:kaiblu26@gmail.com",
  },
  {
    label: "GitHub",
    display: "github.com/Jdlaw95",
    href: "https://github.com/Jdlaw95",
  },
  {
    label: "KaiBlu Studio",
    display: "kaiblu.co.za",
    href: "https://kaiblu.co.za",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: "#0a0a0a" }}>
      <Nav />

      <main className="mx-auto max-w-5xl px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Get In Touch</h1>
        <p className="mt-3 text-zinc-400">
          Open to junior developer roles, freelance projects, and collaboration.
        </p>

        <div className="mt-10 flex flex-col gap-3">
          {contacts.map(({ label, display, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between rounded-xl border border-zinc-800 px-6 py-5 hover:border-zinc-600 transition-colors"
              style={{ backgroundColor: "#111" }}
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {label}
                </p>
                <p className="mt-1 text-sm text-zinc-300">{display}</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-zinc-600 group-hover:text-zinc-400 transition-colors"
                aria-hidden="true"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
