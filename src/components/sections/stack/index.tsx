import { stackGroups } from "../../../content/stack";
import { SectionShell } from "../../layout/section-shell";
import { StackGroup } from "./stack-group";

export function StackSection() {
  return (
    <SectionShell
      id="stack"
      title="Stack"
      description="Escolho ferramentas que reduzem ambiguidade e tornam o desenvolvimento mais claro, testável e preparado para evoluir."
    >
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stackGroups.map((group) => (
          <StackGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
    </SectionShell>
  );
}
