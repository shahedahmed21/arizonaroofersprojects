import { Home } from "lucide-react";

const areas = [
  "Flagstaff, AZ",
  "Surprise, AZ",
  "Tempe, AZ",
  "Scottsdale, AZ",
  "Phoenix, AZ",
  "Tucson, AZ",
  "Gilbert, AZ",
  "Chandler, AZ",
  "Carefree, AZ",
  "Queen Creek, AZ",
];

const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Process", href: "#process" },
  { label: "Service Areas", href: "#areas" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.4fr]">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-[oklch(0.6_0.1_48/0.5)] bg-[oklch(0.28_0.025_50/0.6)] text-[var(--copper)]">
                <Home className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-semibold tracking-tight">
                Arizona Roofers
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Professional roofing across Arizona — repair, replacement, inspection and storm
              damage work built for extreme heat, UV exposure and monsoon season.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-sand uppercase">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm text-muted-foreground">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-[var(--copper)]">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.24em] text-sand uppercase">
              Service Areas
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs text-muted-foreground">
              {areas.map((a) => (
                <li
                  key={a}
                  className="rounded-md border border-border bg-[oklch(0.25_0.02_55/0.5)] px-3 py-1.5 transition-colors hover:border-[oklch(0.6_0.1_48/0.6)] hover:text-foreground"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Arizona Roofers. All rights reserved.</p>
          <p>Serving Arizona homeowners and businesses statewide.</p>
        </div>
      </div>
    </footer>
  );
}
