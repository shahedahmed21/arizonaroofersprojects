import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <Reveal>
        <p className="eyebrow">{eyebrow}</p>
      </Reveal>
      <Reveal delay={90}>
        <h2 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] font-semibold text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={170}>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-base">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
