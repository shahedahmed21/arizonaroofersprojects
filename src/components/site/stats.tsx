import { useEffect, useState } from "react";
import { Reveal, useInView } from "./reveal";

/** Editable placeholder stats — replace values with verified business numbers. */
const stats = [
  { value: 10, suffix: "", label: "Service Areas", note: "Communities across Arizona" },
  { value: 2, suffix: "", label: "Reviews", note: "Verified customer reviews" },
  { value: 100, suffix: "%", label: "Quality Focused", note: "Workmanship-first approach" },
  { value: 24, suffix: "/7", label: "Request a Quote", note: "Estimate requests welcome" },
];

function Counter({ value, suffix, active }: { value: number; suffix: string; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const duration = 1600;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="font-display text-[clamp(2.6rem,6vw,4rem)] leading-none font-semibold tracking-tight text-gradient-warm">
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="relative section-pad">
      <div className="glow-copper top-1/4 left-1/2 h-[26rem] w-[38rem] -translate-x-1/2 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Trusted Arizona Roofing</p>
          <h2 className="mt-4 text-[clamp(1.6rem,3vw,2.3rem)] leading-tight font-semibold text-balance">
            Quality workmanship, honest assessments, and clear communication.
          </h2>
        </Reveal>

        <div
          ref={ref}
          className="mt-14 grid grid-cols-2 gap-y-12 border-y border-border py-12 lg:grid-cols-4"
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ transitionDelay: `${i * 120}ms` }}
              data-visible={inView ? "true" : "false"}
              className="reveal relative px-4 text-center lg:not-last:after:absolute lg:not-last:after:top-2 lg:not-last:after:right-0 lg:not-last:after:bottom-2 lg:not-last:after:w-px lg:not-last:after:bg-[linear-gradient(180deg,transparent,oklch(0.5_0.05_50/0.6),transparent)]"
            >
              <Counter value={s.value} suffix={s.suffix} active={inView} />
              <p className="mt-4 text-sm font-semibold tracking-wide text-foreground">{s.label}</p>
              <p className="mt-1 text-xs text-muted-foreground">{s.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
