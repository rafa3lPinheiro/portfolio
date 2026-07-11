import { cn } from "../../../lib/utils";

const highlights = [
  "Engenharia com IA",
  "SDD / TDD",
  "Software confiável",
] as const;

export function HeroHighlights() {
  return (
    <div
      aria-label="Destaques do hero"
      className="relative z-10 mx-auto flex max-w-[1240px] flex-wrap justify-center gap-x-[18px] gap-y-1 px-0 pt-0 md:justify-start md:pl-[clamp(58px,8vw,122px)] md:before:absolute md:before:inset-x-0 md:before:top-[-18px] md:before:h-px md:before:bg-[rgba(255,228,223,0.18)]"
    >
      {highlights.map((highlight, index) => (
        <span
          key={highlight}
          className={cn(
            "relative p-0 text-center text-[0.95rem] text-[rgba(255,233,228,0.78)] md:pr-[24px]",
            index !== highlights.length - 1 &&
              "md:pr-[34px] md:after:absolute md:after:right-4 md:after:top-1/2 md:after:h-7 md:after:w-px md:after:-translate-y-[40%] md:after:bg-[rgba(255,228,223,0.2)] md:after:content-['']",
          )}
        >
          {highlight}
        </span>
      ))}
    </div>
  );
}
