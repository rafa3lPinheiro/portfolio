import { Badge } from "../../ui/badge";

type StackGroupProps = {
  title: string;
  items: readonly string[];
};

export function StackGroup({ title, items }: StackGroupProps) {
  return (
    <article className="overflow-hidden rounded-[16px] border border-[var(--line)] bg-[rgba(255,255,255,0.025)] p-6">
      <h3 className="mb-[18px] text-[1.35rem] leading-[1.15] text-[var(--text)]">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
