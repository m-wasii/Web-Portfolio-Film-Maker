import Link from "next/link";
import { siteConfig } from "@/data/site";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-amber-400/60 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-300 transition hover:bg-amber-400 hover:text-black"
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}
