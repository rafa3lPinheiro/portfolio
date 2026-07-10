import { Badge } from "../ui/badge";

type StackGroupProps = {
  title: string;
  items: readonly string[];
};

export function StackGroup({ title, items }: StackGroupProps) {
  return (
    <article className="stack-group">
      <h3>{title}</h3>
      <div className="stack-badges">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </article>
  );
}
