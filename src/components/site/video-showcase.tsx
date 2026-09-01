import { Play } from "lucide-react";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

/**
 * VIDEO PLACEHOLDERS
 * Replace the `embedUrl` of each item with a YouTube / Facebook / video iframe URL.
 * When `embedUrl` is set, the iframe renders automatically at a 16:9 ratio.
 */
const videos: { id: string; label: string; title: string; embedUrl?: string }[] = [
  { id: "video-01", label: "Video 01", title: "Add your first video embed here" },
  { id: "video-02", label: "Video 02", title: "Add your second video embed here" },
  { id: "video-03", label: "Video 03", title: "Add your third video embed here" },
];

export function VideoShowcase() {
  return (
    <section id="videos" className="relative section-pad">
      <div className="glow-terracotta top-1/4 left-1/2 h-[24rem] w-[34rem] -translate-x-1/2 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Video"
          title={
            <>
              Arizona Roofers — <span className="text-gradient-warm">See Our Work</span>
            </>
          }
          description="Three video slots ready for your own footage. Supports YouTube, Facebook and standard iframe embeds."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {videos.map((v, i) => (
            <Reveal key={v.id} delay={i * 130}>
              <div className="group relative overflow-hidden rounded-lg border border-border bg-[linear-gradient(160deg,oklch(0.25_0.02_55/0.7),oklch(0.18_0.015_52/0.7))] transition-all duration-500 hover:-translate-y-1.5 hover:border-[oklch(0.6_0.1_48/0.6)] hover:shadow-[var(--shadow-glow)]">
                <div className="relative aspect-video w-full">
                  {v.embedUrl ? (
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[radial-gradient(70%_70%_at_50%_40%,oklch(0.3_0.04_48/0.7),transparent)]">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[oklch(0.62_0.11_48/0.55)] bg-[oklch(0.2_0.02_50/0.7)] text-[var(--copper)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--shadow-glow)]">
                        <Play className="ml-0.5 h-6 w-6 fill-current" />
                      </span>
                      <span className="text-[0.65rem] font-semibold tracking-[0.3em] text-sand uppercase">
                        {v.label}
                      </span>
                    </div>
                  )}
                </div>
                <div className="border-t border-border p-5">
                  <p className="text-sm font-semibold">{v.label} — Video Placeholder</p>
                  <p className="mt-1 text-xs text-muted-foreground">{v.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
