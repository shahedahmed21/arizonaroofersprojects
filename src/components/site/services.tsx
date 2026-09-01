import { ArrowUpRight, Wrench, Layers, Home, Building2, Search, CloudLightning } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/** Editable service placeholders. */
const services = [
  {
    icon: Wrench,
    title: "Roof Repair",
    description:
      "Targeted repairs for leaks, cracked tiles, worn flashing and sun-damaged shingles.",
  },
  {
    icon: Layers,
    title: "Roof Replacement",
    description: "Full tear-off and replacement with materials chosen for Arizona conditions.",
  },
  {
    icon: Home,
    title: "Residential Roofing",
    description: "Roofing work for Arizona homeowners, from single tiles to complete systems.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Flat and low-slope roofing solutions for Arizona businesses and properties.",
  },
  {
    icon: Search,
    title: "Roof Inspection",
    description: "Detailed assessments with clear findings and straightforward recommendations.",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Roofing",
    description: "Response and repair after monsoon winds, hail and heavy desert storms.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative section-pad">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Roofing services shaped by <span className="text-gradient-warm">Arizona weather</span>
            </>
          }
          description="Every roof in Arizona faces extreme heat, UV exposure and monsoon storms. Our services are built around those realities."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-[linear-gradient(160deg,oklch(0.25_0.02_55/0.7),oklch(0.19_0.015_52/0.6))] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[oklch(0.6_0.1_48/0.6)] hover:shadow-[var(--shadow-glow)]">
                <div className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.15_45/0.28),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-md border border-border bg-[oklch(0.28_0.025_50/0.6)] text-[var(--copper)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[oklch(0.62_0.11_48/0.7)]">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="relative mt-7 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <a
                  href="#contact"
                  className="relative mt-7 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.18em] text-sand uppercase transition-colors hover:text-[var(--copper)]"
                >
                  Learn More
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
