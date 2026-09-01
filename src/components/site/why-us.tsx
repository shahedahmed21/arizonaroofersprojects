import { Check } from "lucide-react";
import whyImage from "@/assets/why-us.jpg";
import { Reveal } from "./reveal";
import { CtaButton } from "./cta-button";

/** Editable trust points. */
const points = [
  {
    title: "Professional Roofing Service",
    body: "Structured, professional work from first assessment to final cleanup.",
  },
  {
    title: "Quality-Focused Work",
    body: "Careful installation and materials selected for long-term Arizona performance.",
  },
  {
    title: "Local Arizona Service",
    body: "Serving communities from Phoenix and Tucson to Flagstaff and Queen Creek.",
  },
  {
    title: "Customer-Focused Approach",
    body: "Recommendations based on what your roof actually needs — nothing more.",
  },
  {
    title: "Reliable Communication",
    body: "Clear timelines, straight answers and updates throughout the project.",
  },
];

export function WhyUs() {
  return (
    <section id="about" className="relative section-pad">
      <div className="glow-terracotta top-1/3 right-[-10rem] h-[26rem] w-[26rem]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal variant="scale" className="relative">
          <div className="group relative overflow-hidden rounded-lg border border-border shadow-[var(--shadow-premium)]">
            <img
              src={whyImage}
              alt="Roofing crew installing shingles on an Arizona home"
              loading="lazy"
              width={1200}
              height={1408}
              className="h-[26rem] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105 lg:h-[38rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(200deg,transparent_40%,oklch(0.16_0.014_55/0.8))]" />
          </div>
          <div className="panel absolute right-4 -bottom-6 rounded-md px-5 py-4 lg:-right-8">
            <p className="eyebrow">Arizona Roofers</p>
            <p className="mt-1.5 max-w-[14rem] text-sm text-muted-foreground">
              Roofing built for heat, UV and monsoon season.
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Why Arizona Roofers</p>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.05] font-semibold text-balance">
              A roofing partner that treats your home{" "}
              <span className="text-gradient-warm">like the investment it is</span>
            </h2>
          </Reveal>

          <div className="mt-10 space-y-1">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={140 + i * 110}>
                <div className="group flex gap-4 border-b border-border py-5 transition-colors duration-300 last:border-b-0 hover:border-[oklch(0.6_0.1_48/0.5)]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[oklch(0.6_0.1_48/0.5)] text-[var(--copper)] transition-colors duration-300 group-hover:bg-[oklch(0.62_0.14_45/0.18)]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={700} className="mt-10">
            <CtaButton href="#contact" size="lg">
              Request a Quote
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
