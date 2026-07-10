import * as SeparatorPrimitive from "@radix-ui/react-separator";

type SeparatorProps = SeparatorPrimitive.SeparatorProps;

export function Separator(props: SeparatorProps) {
  return <SeparatorPrimitive.Root className="separator" {...props} />;
}
