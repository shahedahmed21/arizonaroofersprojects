import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  className?: string;
  size?: "md" | "lg";
};

export function CtaButton({
  children,
  href = "#contact",
  variant = "primary",
  size = "md",
  className,
}: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-md font-semibold tracking-tight transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const sizing = size === "lg" ? "px-8 py-4 text-[0.95rem]" : "px-6 py-3 text-sm";

  const variants = {
    primary:
      "bg-[linear-gradient(100deg,var(--copper),var(--ember)_55%,var(--terracotta))] text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-22px_oklch(0.6_0.16_40/0.75)]",
    ghost:
      "border border-border bg-[oklch(0.28_0.02_55/0.4)] text-foreground backdrop-blur-md hover:-translate-y-0.5 hover:border-[oklch(0.6_0.1_48/0.7)] hover:bg-[oklch(0.32_0.03_50/0.55)]",
  } as const;

  return (
    <a href={href} className={cn(base, sizing, variants[variant], className)}>
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      {variant === "primary" && (
        <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(100deg,transparent,oklch(1_0_0/0.22),transparent)] transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </a>
  );
}
