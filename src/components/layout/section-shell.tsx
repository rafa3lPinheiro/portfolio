import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

type SectionShellProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto max-w-[1120px] px-[clamp(18px,4vw,40px)] py-[72px] md:py-[104px]",
        className,
      )}
    >
      <div className="max-w-[650px]">
        {eyebrow ? (
          <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#f4c6c8] uppercase">
            {eyebrow}
          </span>
        ) : null}
        <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.05] font-bold tracking-[0] text-[var(--text)]">
          {title}
        </h2>
        {description ? (
          <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
