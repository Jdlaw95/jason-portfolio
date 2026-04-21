'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto flex max-w-5xl items-center justify-between px-8 py-6">
      <Link href="/" className="text-lg font-semibold tracking-tight text-white">
        Jason Lawrence
      </Link>
      <ul className="flex gap-8 text-sm">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`transition-colors ${
                pathname === href ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
