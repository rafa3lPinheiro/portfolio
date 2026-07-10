import { type CaseStudy } from "../../content/cases";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

type CaseDetailContentProps = {
  study: CaseStudy;
};

export function CaseDetailContent({ study }: CaseDetailContentProps) {
  return (
    <div className="case-detail">
      <div className="case-detail-impact">
        <span>{study.impact}</span>
        <p>{study.impactLabel}</p>
      </div>
      <Separator />
      <DetailBlock title="Contexto">{study.details.context}</DetailBlock>
      <DetailBlock title="Problema">{study.details.problem}</DetailBlock>
      <DetailBlock title="Meu papel">{study.details.role}</DetailBlock>
      <div className="detail-block">
        <h3>Decisões técnicas</h3>
        <ul>
          {study.details.decisions.map((decision) => (
            <li key={decision}>{decision}</li>
          ))}
        </ul>
      </div>
      <DetailBlock title="Resultado">{study.details.result}</DetailBlock>
      <DetailBlock title="Aprendizado">{study.details.learning}</DetailBlock>
      <div className="case-stack detail-stack">
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
    <div className="detail-block">
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
