import Reveal from "./Reveal";
import SpotlightCard from "./SpotlightCard";

type Project = {
  name: string;
  tag: string;
  status: string;
  body: string;
};

const PROJECTS: Project[] = [
  {
    name: "Life OS",
    tag: "Personal operating system",
    status: "In use daily",
    body: "OKRs, weekly & monthly reviews, and a linked second brain — the system that keeps my life and work actually shipping.",
  },
  {
    name: "This portfolio — as a template",
    tag: "Next.js · dark spatial UI",
    status: "Coming soon",
    body: "The site you're on: built end-to-end with AI, with an embedded agent that answers questions about you. Make it your own in a day.",
  },
  {
    name: "Resume kit + editing",
    tag: "Template + 1:1 service",
    status: "Available",
    body: "The template and story-packaging system I used on my own resume — plus hands-on edits that turn your work into results recruiters read.",
  },
];

export default function MyProjects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.4em] text-faint">
          My projects
        </p>
        <h2 className="mb-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] md:text-5xl">
          I run growth. I also ship products.
        </h2>
        <p className="mb-14 max-w-2xl text-base font-light leading-relaxed text-muted">
          Building is how I stay sharp — and a few of these are things you can
          actually use.
        </p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} y={40}>
            <SpotlightCard className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-7 hover:border-emerald/50 hover:shadow-[0_44px_90px_-28px_rgba(47,174,111,0.55)]">
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <span className="h-1 w-6 rounded-full bg-gradient-to-r from-lemon to-emerald" />
                  <span className="rounded-full border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-faint">
                    {p.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug tracking-[-0.01em] text-ink">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-faint">
                  {p.tag}
                </p>
                <p className="mt-4 text-sm font-light leading-relaxed text-muted">
                  {p.body}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
