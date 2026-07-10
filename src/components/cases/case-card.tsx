import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "../../content/cases";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type CaseCardProps = {
  study: CaseStudy;
  onOpen: (study: CaseStudy) => void;
};

export function CaseCard({ study, onOpen }: CaseCardProps) {
  return (
    <article className="case-card">
      <div className="case-thumbnail" aria-hidden="true">
        <span>{study.category}</span>
      </div>
      <div className="case-card-body">
        <p className="case-category">{study.category}</p>
        <h3>{study.title}</h3>
        <p>{study.problem}</p>
        <div className="case-impact">
          <strong>{study.impact}</strong>
          <span>{study.impactLabel}</span>
        </div>
        <div className="case-stack">
          {study.stack.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <Button variant="secondary" onClick={() => onOpen(study)}>
          Ver detalhes <ArrowUpRight size={16} />
        </Button>
      </div>
    </article>
  );
}
