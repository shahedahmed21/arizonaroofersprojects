import { Phone, MapPin, Clock } from "lucide-react";
import { Reveal } from "./reveal";
import { CtaButton } from "./cta-button";

export function FinalCta() {
  return (
    <section id="contact" className="relative section-pad">
      <div className="glow-terracotta top-1/2 left-1/2 h-[28rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal variant="scale">
          <div className="relative overflow-hidden rounded-xl border border-[oklch(0.6_0.1_48/0.45)] bg-[linear-gradient(140deg,oklch(0.27_0.03_50/0.85),oklch(0.18_0.015_52/0.85))] px-6 py-16 text-center sm:px-14">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.62_0.15_45/0.25),transparent_70%)]" />
            <p className="eyebrow">Get Started</p>
            <h2 className="font-display mx-auto mt-5 max-w-3xl text-[clamp(2rem,4.6vw,3.4rem)] leading-[1.05] font-semibold text-balance">
              Ready for a roof built for{" "}
              <span className="text-gradient-warm">Arizona conditions?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
              Request a free inspection and estimate. We'll assess your roof honestly and explain
              exactly what it needs — nothing more.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <CtaButton size="lg" href="#contact">
                Request a Free Estimate
              </CtaButton>
              <CtaButton size="lg" variant="ghost" href="#services">
                Explore Services
              </CtaButton>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-6 border-t border-border pt-10 sm:grid-cols-3">
              {[
                { icon: Phone, label: "Free Estimates", note: "Quote requests welcome" },
                { icon: MapPin, label: "Statewide Arizona", note: "10 service communities" },
                { icon: Clock, label: "Storm Response", note: "Monsoon damage repair" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <item.icon className="h-5 w-5 text-[var(--copper)]" />
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
