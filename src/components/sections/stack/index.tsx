import { stackGroups } from "../../../content/stack";
import { SectionShell } from "../../layout/section-shell";
import { PrincipleStrip } from "./principle-strip";
import { StackGroup } from "./stack-group";

export function StackSection() {
  return (
    <SectionShell
      id="stack"
      eyebrow="Stack"
      title="Stack guiada por critério"
      description="Eu gosto de ferramentas que reduzem ambiguidade: tipos fortes, validação clara, testes, boas interfaces e documentação viva."
    >
      <div className="mt-[42px] grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-4">
        {stackGroups.map((group) => (
          <StackGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
      <PrincipleStrip />
    </SectionShell>
  );
}
