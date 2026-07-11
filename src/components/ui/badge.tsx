import { type HTMLAttributes } from "react";
import { cn } from "../../lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.04)] px-[10px] py-2 text-[0.76rem] leading-none text-[rgba(248,238,232,0.72)]",
        className,
      )}
      {...props}
    />
  );
}
