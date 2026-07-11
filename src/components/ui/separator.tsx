import * as SeparatorPrimitive from "@radix-ui/react-separator";

type SeparatorProps = SeparatorPrimitive.SeparatorProps;

export function Separator(props: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root
      className="my-[22px] h-px w-full bg-[var(--line)]"
      {...props}
    />
  );
}
