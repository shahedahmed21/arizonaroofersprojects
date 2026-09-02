import { PhoneCall, ClipboardCheck, Hammer, ShieldCheck } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const steps = [
  {
    icon: PhoneCall,
    step: "01",
    title: "Reach Out",
    description:
      "Tell us about your roof, your property and the issue you're seeing. We listen first.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Inspection & Estimate",
    description:
      "We assess the roof in detail and share clear findings with a straightforward written estimate.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Roofing Work",
    description:
      "Our crew completes the work with materials selected for Arizona heat, UV and monsoon storms.",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "Final Walkthrough",
    description:
      "We clean the site, walk the finished roof with you and confirm every detail meets spec.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative section-pad">
      <div className="glow-copper top-1/3 left-1/4 h-[24rem] w-[32rem] opacity-50" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title={
            <>
              A clear path from first call to <span className="text-gradient-warm">finished roof</span>
            </>
          }
          description="No guesswork and no pressure — just a simple, transparent process from inspection through final walkthrough."
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 110}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-[linear-gradient(160deg,oklch(0.25_0.02_55/0.7),oklch(0.19_0.015_52/0.6))] p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-[oklch(0.6_0.1_48/0.6)] hover:shadow-[var(--shadow-glow)]">
                <span className="font-display absolute top-5 right-6 text-4xl font-semibold text-[oklch(0.5_0.06_50/0.35)] transition-colors duration-500 group-hover:text-[oklch(0.62_0.13_45/0.5)]">
                  {s.step}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-md border border-border bg-[oklch(0.28_0.025_50/0.6)] text-[var(--copper)] transition-all duration-500 group-hover:-translate-y-1">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="relative mt-7 text-xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
