import { useEffect, useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { CtaButton } from "./cta-button";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-[oklch(0.17_0.014_55/0.82)] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm bg-[linear-gradient(140deg,var(--copper),var(--terracotta))] text-primary-foreground transition-transform duration-300 group-hover:-translate-y-0.5">
            <Home className="h-4.5 w-4.5" />
          </span>
          <span className="font-display text-[0.95rem] leading-tight font-semibold tracking-tight">
            Arizona <span className="text-gradient-warm">Roofers</span>
            <span className="block text-[0.6rem] font-medium tracking-[0.26em] text-muted-foreground uppercase">
              Professional Roofing
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-medium lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CtaButton href="#contact">Get a Free Estimate</CtaButton>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-[oklch(0.26_0.02_55/0.5)] text-foreground transition-colors hover:border-[oklch(0.6_0.1_48/0.6)] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-[oklch(0.16_0.014_55/0.97)] backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-8">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 40}ms` }}
              className="border-b border-border/60 py-3.5 text-base font-medium text-foreground/90 transition-colors hover:text-[var(--copper)]"
            >
              {l.label}
            </a>
          ))}
          <CtaButton href="#contact" className="mt-5 w-full" size="lg">
            Get a Free Estimate
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
