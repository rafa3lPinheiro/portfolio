import { type LucideIcon } from "lucide-react";

type ProcessStepProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  isLast: boolean;
};

export function ProcessStep({
  title,
  description,
  icon: Icon,
  isLast,
}: ProcessStepProps) {
  return (
    <li className="group relative grid grid-cols-[48px_1fr] gap-4 pb-12 last:pb-0 min-[1040px]:block min-[1040px]:px-4 min-[1040px]:pb-0 min-[1040px]:text-center">
      <div className="relative flex justify-center min-[1040px]:block">
        <Icon
          aria-hidden="true"
          className="relative z-10 h-10 w-10 bg-[var(--surface)] p-1 text-[var(--accent)] transition-colors duration-300 group-hover:text-[var(--text)] min-[1040px]:mx-auto"
          strokeWidth={1.6}
        />
        {!isLast ? (
          <span
            aria-hidden="true"
            className="absolute top-12 bottom-[-48px] left-1/2 w-px -translate-x-1/2 bg-[#480415] min-[1040px]:hidden"
          />
        ) : null}
      </div>

      <div className="min-[1040px]:mt-4">
        <span
          aria-hidden="true"
          className="relative z-10 mx-auto hidden h-2 w-2 rounded-full bg-[#730c1e] ring-8 ring-[var(--surface)] transition-transform duration-300 group-hover:scale-150 min-[1040px]:block"
        />
        <h3 className="text-xl leading-tight font-semibold text-[var(--text)] min-[1040px]:mt-6">
          {title}
        </h3>
        <p className="mt-3 max-w-[34rem] text-base leading-7 text-[var(--muted)] min-[1040px]:mx-auto min-[1040px]:max-w-[15rem]">
          {description}
        </p>
      </div>
    </li>
  );
}
