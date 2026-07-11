import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "../../../content/cases";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";

type CaseCardProps = {
  study: CaseStudy;
  onOpen: (study: CaseStudy) => void;
};

export function CaseCard({ study, onOpen }: CaseCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[16px] border border-[var(--line)] bg-[rgba(255,255,255,0.025)] xl:min-h-[520px]">
      <div
        className="relative flex min-h-[190px] items-end overflow-hidden border-b border-[var(--line)] bg-[linear-gradient(145deg,rgba(20,15,23,0.3),rgba(115,12,30,0.18)),#171314] p-[18px]"
        aria-hidden="true"
      >
        <span className="absolute top-6 left-[18px] h-[3px] w-20 bg-[var(--accent)]" />
        <span className="absolute top-[10%] right-[-10%] h-[86%] w-[58%] rotate-[14deg] bg-[linear-gradient(135deg,#292326,#080708_70%)]" />
        <span className="relative text-[0.72rem] tracking-[0.14em] text-[rgba(248,238,232,0.62)] uppercase">
          {study.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[0.75rem] font-bold tracking-[0.2em] text-[#f4c6c8] uppercase">
          {study.category}
        </p>
        <h3 className="mt-2 text-[1.35rem] leading-[1.15] text-[var(--text)]">
          {study.title}
        </h3>
        <p className="leading-[1.65] text-[var(--muted)]">{study.problem}</p>
        <div className="mt-auto mb-[18px]">
          <strong className="block text-[2.4rem] font-extrabold text-[var(--text)]">
            {study.impact}
          </strong>
          <span className="text-[0.9rem] text-[#f0a3a5]">
            {study.impactLabel}
          </span>
        </div>
        <div className="mb-[22px] flex flex-wrap gap-2">
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
