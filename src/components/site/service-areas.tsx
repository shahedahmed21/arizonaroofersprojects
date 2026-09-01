import { MapPin } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { CtaButton } from "./cta-button";

const areas = [
  { name: "Flagstaff", region: "Northern Arizona" },
  { name: "Surprise", region: "West Valley" },
  { name: "Tempe", region: "East Valley" },
  { name: "Scottsdale", region: "Northeast Valley" },
  { name: "Phoenix", region: "Central Arizona" },
  { name: "Tucson", region: "Southern Arizona" },
  { name: "Gilbert", region: "East Valley" },
  { name: "Chandler", region: "East Valley" },
  { name: "Carefree", region: "North Valley" },
  { name: "Queen Creek", region: "Southeast Valley" },
];

export function ServiceAreas() {
  return (
    <section id="areas" className="relative overflow-hidden section-pad">
      <div className="glow-copper top-0 right-[-6rem] h-[26rem] w-[26rem] opacity-70" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(oklch(0.6_0.06_50/0.5)_1px,transparent_1px),linear-gradient(90deg,oklch(0.6_0.06_50/0.5)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(70%_60%_at_50%_45%,black,transparent)]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Service Areas"
          title={
            <>
              Proudly Serving Communities{" "}
              <span className="text-gradient-warm">Across Arizona</span>
            </>
          }
          description="Roof repair, replacement and inspection across the Valley, Southern Arizona and the high country."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {areas.map((a, i) => (
            <Reveal key={a.name} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-md border border-border bg-[oklch(0.23_0.018_54/0.55)] p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[oklch(0.6_0.1_48/0.6)] hover:bg-[oklch(0.27_0.026_50/0.65)]">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="anim-ping-dot absolute h-2.5 w-2.5 rounded-full bg-[var(--copper)]" />
                  <span className="h-2 w-2 rounded-full bg-[var(--copper)]" />
                </span>
                <p className="mt-5 flex items-center gap-1.5 text-base font-semibold">
                  {a.name}
                  <MapPin className="h-3.5 w-3.5 text-[var(--copper)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </p>
                <p className="mt-1 text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {a.region}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12">
          <CtaButton href="#contact" variant="ghost" size="lg">
            Not sure if we cover your area? Ask us
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
