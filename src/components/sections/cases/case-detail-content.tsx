import { type CaseStudy } from "../../../content/cases";
import { Badge } from "../../ui/badge";
import { Separator } from "../../ui/separator";

type CaseDetailContentProps = {
  study: CaseStudy;
};

export function CaseDetailContent({ study }: CaseDetailContentProps) {
  return (
    <div>
      <div className="mb-5">
        <span className="text-5xl font-extrabold text-[#f0a3a5]">
          {study.impact}
        </span>
        <p className="mt-1.5 text-[var(--muted)]">{study.impactLabel}</p>
      </div>
      <Separator />
      <DetailBlock title="Contexto">{study.details.context}</DetailBlock>
      <DetailBlock title="Problema">{study.details.problem}</DetailBlock>
      <DetailBlock title="Meu papel">{study.details.role}</DetailBlock>
      <div className="mt-[22px]">
        <h3 className="mb-2 text-[0.8rem] tracking-[0.18em] text-[var(--text)] uppercase">
          Decisões técnicas
        </h3>
        <ul className="pl-5">
          {study.details.decisions.map((decision) => (
            <li key={decision} className="leading-[1.7] text-[var(--muted)]">
              {decision}
            </li>
          ))}
        </ul>
      </div>
      <DetailBlock title="Resultado">{study.details.result}</DetailBlock>
      <DetailBlock title="Aprendizado">{study.details.learning}</DetailBlock>
      <div className="mt-6 flex flex-wrap gap-2">
        {study.details.stack.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </div>
  );
}

function DetailBlock({
  title,
  children,
}: {
  title: string;
  children: string;
}) {
  return (
    <div className="mt-[22px]">
      <h3 className="mb-2 text-[0.8rem] tracking-[0.18em] text-[var(--text)] uppercase">
        {title}
      </h3>
      <p className="leading-[1.7] text-[var(--muted)]">{children}</p>
    </div>
  );
}
