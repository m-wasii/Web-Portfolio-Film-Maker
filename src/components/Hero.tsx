import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-24 pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.18),transparent_45%),linear-gradient(180deg,#111_0%,#050505_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.45em] text-amber-300">
            {siteConfig.title}
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl">
            Visual stories crafted for brands, artists, and audiences.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
            {siteConfig.tagline}. Based in {siteConfig.location}.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-amber-300"
            >
              View Selected Work
            </a>
            <a
              href={siteConfig.social.behance || "#contact"}
              target={siteConfig.social.behance ? "_blank" : undefined}
              rel={siteConfig.social.behance ? "noreferrer" : undefined}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-white hover:bg-white/5"
            >
              Behance Profile
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">Currently Available</p>
          <p className="mt-3 text-2xl font-medium text-white">Freelance & Full-time Projects</p>
          <ul className="mt-6 space-y-3 text-sm text-zinc-300">
            {siteConfig.services.slice(0, 4).map((service) => (
              <li key={service} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
