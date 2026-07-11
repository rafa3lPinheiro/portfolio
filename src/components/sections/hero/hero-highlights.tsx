import { cn } from "../../../lib/utils";

const highlights = [
  "+4 anos",
  "Arquiteto de soluções",
  "Engenharia de produto",
] as const;

export function HeroHighlights() {
  return (
    <div
      aria-label="Destaques do hero"
      className="mt-8 flex w-full items-center justify-between gap-2 text-center md:mx-auto md:max-w-[540px] md:justify-center md:gap-4 lg:mx-0 lg:max-w-[clamp(320px,48vw,720px)] lg:justify-center"
    >
      {highlights.map((highlight, index) => (
        <span
          key={highlight}
          className={cn(
            "relative shrink-0 text-center text-[0.72rem] leading-none text-[rgba(255,233,228,0.76)] md:text-[0.82rem] md:pr-3 lg:pr-4",
            index !== highlights.length - 1 &&
              "md:pr-6 md:after:absolute md:after:right-3 md:after:top-1/2 md:after:h-4 md:after:w-px md:after:-translate-y-1/2 md:after:bg-[rgba(255,228,223,0.2)] md:after:content-[''] lg:pr-8 lg:after:right-4 lg:after:h-6",
          )}
        >
          {highlight}
        </span>
      ))}
    </div>
  );
}
