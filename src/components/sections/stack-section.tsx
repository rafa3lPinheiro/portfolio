import { stackGroups } from "../../content/stack";
import { SectionShell } from "../layout/section-shell";
import { PrincipleStrip } from "../stack/principle-strip";
import { StackGroup } from "../stack/stack-group";

export function StackSection() {
  return (
    <SectionShell
      id="stack"
      eyebrow="Stack"
      title="Stack guiada por critério"
      description="Eu gosto de ferramentas que reduzem ambiguidade: tipos fortes, validação clara, testes, boas interfaces e documentação viva."
      className="stack-section"
    >
      <div className="stack-grid">
        {stackGroups.map((group) => (
          <StackGroup key={group.title} title={group.title} items={group.items} />
        ))}
      </div>
      <PrincipleStrip />
    </SectionShell>
  );
}
