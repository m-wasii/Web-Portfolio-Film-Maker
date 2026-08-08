import { siteConfig } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-y border-white/10 bg-zinc-950/60 px-6 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-amber-300">About</p>
          <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
            Cinematic craft with design precision.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-zinc-300">
          <p>{siteConfig.about}</p>
          <p>
            Tools include Adobe Premiere Pro, After Effects, Photoshop, and Illustrator. This site is
            the home for your portfolio, showreel, and client-facing project archive.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Services</p>
        <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">What I create</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div
              key={service}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-6 text-lg text-zinc-200"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
