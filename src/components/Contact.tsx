import { siteConfig } from "@/data/site";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-zinc-950 to-black px-8 py-12 md:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Contact</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
          Let&apos;s build your next film, campaign, or motion piece.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="mt-2 block text-lg text-white hover:text-amber-300">
              {siteConfig.email}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Phone / WhatsApp</p>
            <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="mt-2 block text-lg text-white hover:text-amber-300">
              {siteConfig.phone}
            </a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Location</p>
            <p className="mt-2 text-lg text-white">{siteConfig.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>{siteConfig.title}</p>
      </div>
    </footer>
  );
}
