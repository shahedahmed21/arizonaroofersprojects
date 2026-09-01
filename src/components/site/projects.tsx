import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Replaceable project placeholders. */
const featured = {
  image: project1,
  category: "Residential Roofing",
  title: "Tile roof replacement — image placeholder",
  location: "Scottsdale, AZ",
};

const supporting = [
  {
    image: project2,
    category: "Commercial Roofing",
    title: "Flat roof system — image placeholder",
    location: "Phoenix, AZ",
  },
  {
    image: project3,
    category: "Metal Roofing",
    title: "Standing seam install — image placeholder",
    location: "Tucson, AZ",
  },
];

function ProjectCard({
  image,
  category,
  title,
  location,
  tall,
}: (typeof supporting)[number] & { tall?: boolean }) {
  return (
    <a
      href="#contact"
      className="group relative block overflow-hidden rounded-lg border border-border transition-colors duration-500 hover:border-[oklch(0.6_0.1_48/0.6)]"
    >
      <img
        src={image}
        alt={title}
        loading="lazy"
        className={`w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07] ${
          tall ? "h-[24rem] lg:h-[38rem]" : "h-[16rem] lg:h-[18.25rem]"
        }`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.14_0.014_55/0.92))]" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_50%_100%,oklch(0.6_0.14_45/0.22),transparent)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <span className="eyebrow">{category}</span>
          <h3 className="mt-2 text-lg font-semibold text-balance">{title}</h3>
          <p className="mt-1 text-xs text-muted-foreground">{location}</p>
        </div>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-[oklch(0.2_0.02_50/0.7)] text-sand backdrop-blur-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[oklch(0.62_0.11_48/0.7)] group-hover:text-[var(--copper)]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative section-pad">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Project Showcase"
          title={
            <>
              Roofing work across <span className="text-gradient-warm">Arizona</span>
            </>
          }
          description="A selection of project placeholders. Swap in your own photography to showcase completed roofs."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal variant="scale">
            <ProjectCard {...featured} tall />
          </Reveal>
          <div className="grid gap-5">
            {supporting.map((p, i) => (
              <Reveal key={p.title} variant="x" delay={140 + i * 140}>
                <ProjectCard {...p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
