import { projects } from "@/data/site";

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-amber-300">Selected Work</p>
            <h2 className="mt-3 text-4xl font-semibold text-white md:text-5xl">Film & Motion Projects</h2>
          </div>
          <p className="max-w-md text-zinc-400">
            Replace these starter projects with your real reels, thumbnails, and Vimeo or YouTube links.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/80"
            >
              <div className="relative aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black">
                <div className="absolute inset-0 flex items-center justify-center text-sm uppercase tracking-[0.35em] text-zinc-500">
                  Reel Placeholder
                </div>
                <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-300">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                  <span className="text-sm text-zinc-500">{project.year}</span>
                </div>
                <p className="mt-3 text-zinc-400">{project.description}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
                  Project {String(index + 1).padStart(2, "0")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
