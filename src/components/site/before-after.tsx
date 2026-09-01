import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before-1.jpg";
import afterImg from "@/assets/after-1.jpg";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

type Props = {
  before: string;
  after: string;
  caption: string;
  location: string;
};

/** Replace `before`/`after` image imports with real project photos. */
function CompareSlider({ before, after, caption, location }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  return (
    <figure className="group">
      <div
        ref={containerRef}
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        className="relative aspect-[16/10] w-full touch-none overflow-hidden rounded-lg border border-border shadow-[var(--shadow-premium)] select-none"
      >
        <img
          src={after}
          alt={`After — ${caption}`}
          loading="lazy"
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={before}
            alt={`Before — ${caption}`}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <span className="pointer-events-none absolute top-4 left-4 rounded-sm border border-border bg-[oklch(0.16_0.014_55/0.7)] px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.24em] text-sand uppercase backdrop-blur-md">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 rounded-sm border border-[oklch(0.6_0.1_48/0.6)] bg-[oklch(0.16_0.014_55/0.7)] px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.24em] text-[var(--copper)] uppercase backdrop-blur-md">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-[linear-gradient(180deg,transparent,var(--copper),transparent)]"
          style={{ left: `${position}%` }}
        />

        <button
          type="button"
          role="slider"
          aria-label={`Compare before and after — ${caption}`}
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
          }}
          onPointerDown={(e) => {
            e.stopPropagation();
            dragging.current = true;
          }}
          style={{ left: `${position}%` }}
          className="absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border border-[oklch(0.66_0.13_48/0.8)] bg-[oklch(0.2_0.02_50/0.85)] text-[var(--copper)] shadow-[var(--shadow-glow)] backdrop-blur-md transition-transform duration-300 hover:scale-110 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none active:scale-95"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>

      <figcaption className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-base font-semibold">{caption}</span>
        <span className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
          {location}
        </span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section className="relative section-pad">
      <div className="glow-copper top-10 left-[-8rem] h-[24rem] w-[24rem] opacity-70" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Before &amp; After"
          title={
            <>
              See the Difference <span className="text-gradient-warm">Quality Roofing</span> Makes
            </>
          }
          description="Drag the handle to compare. Replace these placeholder photos with your own project images at any time."
        />

        <Reveal delay={140} className="mt-14">
          <CompareSlider
            before={beforeImg}
            after={afterImg}
            caption="Tile roof restoration — image placeholder"
            location="Arizona"
          />
        </Reveal>
      </div>
    </section>
  );
}
