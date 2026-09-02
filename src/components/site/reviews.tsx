import { Star, Quote } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { CtaButton } from "./cta-button";

/**
 * REVIEWS
 * No review content is invented. Arizona Roofers currently has 2 verified reviews.
 * Paste real review text into the `body` / `author` fields below when available.
 */
const reviewSlots: { id: string; body?: string; author?: string }[] = [
  { id: "review-01" },
  { id: "review-02" },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative section-pad">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Reviews"
          title={
            <>
              What Arizona homeowners <span className="text-gradient-warm">tell us</span>
            </>
          }
          description="Arizona Roofers has 2 verified customer reviews. We only publish real feedback — these slots are reserved for our actual reviews."
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {reviewSlots.map((r, i) => (
            <Reveal key={r.id} delay={i * 130}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-[linear-gradient(160deg,oklch(0.25_0.02_55/0.7),oklch(0.19_0.015_52/0.6))] p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-[oklch(0.6_0.1_48/0.6)] hover:shadow-[var(--shadow-glow)]">
                <Quote className="h-7 w-7 text-[var(--copper)]" />
                <div className="mt-5 flex gap-1 text-[var(--copper)]">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current opacity-40" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {r.body ??
                    "Verified customer review — add the real review text here to publish it on the site."}
                </p>
                <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-sand uppercase">
                  {r.author ?? `Verified Review ${i + 1}`}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Worked with us before? Your feedback helps other Arizona homeowners.
          </p>
          <CtaButton variant="ghost" className="mt-6">
            Request a Free Estimate
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}
