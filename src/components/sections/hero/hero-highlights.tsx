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
      className="mt-12 flex w-full items-center justify-between gap-2 text-center md:mx-auto md:mt-10 md:max-w-[620px] md:justify-center md:gap-4 min-[900px]:mt-7 min-[900px]:max-w-[760px] xl:mx-0 xl:mt-8 xl:max-w-[clamp(320px,48vw,720px)] xl:justify-center"
    >
      {highlights.map((highlight, index) => (
        <span
          key={highlight}
          className={cn(
            "relative shrink-0 text-center text-[0.72rem] leading-none text-[rgba(255,233,228,0.76)] md:text-[0.84rem] md:pr-3 xl:pr-4",
            index !== highlights.length - 1 &&
              "md:pr-6 md:after:absolute md:after:right-3 md:after:top-1/2 md:after:h-4 md:after:w-px md:after:-translate-y-1/2 md:after:bg-[rgba(255,228,223,0.2)] md:after:content-[''] xl:pr-8 xl:after:right-4 xl:after:h-6",
          )}
        >
          {highlight}
        </span>
      ))}
    </div>
  );
}
