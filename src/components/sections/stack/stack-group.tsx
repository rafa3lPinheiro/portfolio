import { Badge } from "../../ui/badge";

type StackGroupProps = {
  title: string;
  items: readonly string[];
};

export function StackGroup({ title, items }: StackGroupProps) {
  return (
    <article className="min-h-64 overflow-hidden rounded-[16px] border border-[var(--line)] bg-[var(--surface-2)] p-6 transition-colors duration-300 hover:border-[var(--line-strong)]">
      <h3 className="mb-6 text-xl leading-tight font-semibold text-[var(--text)]">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge
            key={item}
            className="border-[#730c1e] bg-[var(--surface)] text-[var(--muted)] transition-colors duration-300 hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
          >
            {item}
          </Badge>
        ))}
      </div>
    </article>
  );
}
