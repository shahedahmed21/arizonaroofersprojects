import { ShieldCheck, Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-roof.jpg";
import { CtaButton } from "./cta-button";

const areas = ["Phoenix", "Scottsdale", "Tucson", "Tempe", "Gilbert", "Chandler", "Flagstaff"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-28">
      <div className="glow-copper anim-pulse-glow top-[-8rem] right-[-6rem] h-[32rem] w-[32rem]" />
      <div className="glow-terracotta anim-pulse-glow bottom-[-10rem] left-[-8rem] h-[28rem] w-[28rem] [animation-delay:2s]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <div className="anim-rise inline-flex items-center gap-2.5 rounded-full border border-border bg-[oklch(0.26_0.02_55/0.5)] px-4 py-2 text-xs font-medium text-sand backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5 text-[var(--copper)]" />
            Professional roofing across Arizona
          </div>

          <h1 className="anim-rise mt-7 text-[clamp(2.6rem,6.2vw,4.9rem)] leading-[0.98] font-semibold text-balance [animation-delay:120ms]">
            Arizona Roofing
            <span className="block text-gradient-warm">Built for the Harshest</span>
            Conditions.
          </h1>

          <p className="anim-rise mt-7 max-w-xl text-base leading-relaxed text-muted-foreground [animation-delay:260ms] md:text-lg">
            Arizona Roofers delivers quality-focused roof repair, replacement and inspection for
            homeowners and businesses across Arizona — from the desert heat of Phoenix to the
            high-country weather of Flagstaff.
          </p>

          <div className="anim-rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:400ms]">
            <CtaButton href="#contact" size="lg">
              Get a Free Estimate
            </CtaButton>
            <CtaButton href="#projects" variant="ghost" size="lg">
              Explore Our Work
            </CtaButton>
          </div>

          <div className="anim-rise mt-11 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:540ms]">
            <div className="flex items-center gap-2">
              <span className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[var(--copper)] text-[var(--copper)]" />
                ))}
              </span>
              <span className="text-xs text-muted-foreground">2 Reviews</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-[var(--copper)]" />
              {areas.map((a) => (
                <span key={a}>{a}</span>
              ))}
              <span className="text-sand">+3 more</span>
            </div>
          </div>
        </div>

        <div className="anim-scale-in relative [animation-delay:200ms]">
          <div className="relative overflow-hidden rounded-lg border border-border shadow-[var(--shadow-premium)]">
            <img
              src={heroImage}
              alt="Arizona desert home with a newly installed tile roof at sunset"
              width={1600}
              height={1104}
              className="h-[24rem] w-full object-cover md:h-[34rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.16_0.014_55/0.85))]" />
            <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,oklch(0.7_0.13_50/0.22),transparent)]" />
          </div>

          <div className="anim-float panel absolute -bottom-8 -left-4 rounded-md px-5 py-4 md:-left-10">
            <p className="eyebrow">Serving</p>
            <p className="mt-1.5 font-display text-2xl font-semibold">10 Arizona Communities</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Residential &amp; commercial roofing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
