import Link from "next/link";
import { type ButtonHTMLAttributes, type ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[16px] border border-transparent text-[0.9rem] font-bold transition duration-150 [-webkit-tap-highlight-color:transparent] hover:-translate-y-px disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-[#fff7f1] text-[#17090a]",
        secondary:
          "border-[rgba(255,237,230,0.2)] bg-[rgba(20,15,23,0.12)] text-[var(--text)]",
        ghost: "bg-transparent text-[var(--text)]",
      },
      size: {
        md: "px-[22px]",
        sm: "min-h-9 px-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      type={props.type ?? "button"}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>;

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
