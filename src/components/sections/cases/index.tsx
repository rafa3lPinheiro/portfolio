"use client";

import { useState } from "react";
import { cases, type CaseStudy } from "../../../content/cases";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { SectionShell } from "../../layout/section-shell";
import { CaseCard } from "./case-card";
import { CaseDetailDialog } from "./case-detail-dialog";
import { CaseDetailDrawer } from "./case-detail-drawer";

export function CasesSection() {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const isDesktop = useMediaQuery("(min-width: 760px)");

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedCase(null);
    }
  };

  return (
    <SectionShell
      id="cases"
      eyebrow="Projetos"
      title="Projetos selecionados"
      description="Alguns exemplos de como eu conecto produto, engenharia e execução para resolver problemas reais."
    >
      <div className="mt-[42px] grid grid-cols-1 gap-[18px] xl:grid-cols-[1.1fr_0.95fr_0.95fr]">
        {cases.map((study) => (
          <CaseCard key={study.id} study={study} onOpen={setSelectedCase} />
        ))}
      </div>
      {isDesktop ? (
        <CaseDetailDialog
          study={selectedCase}
          onOpenChange={handleOpenChange}
        />
      ) : (
        <CaseDetailDrawer
          study={selectedCase}
          onOpenChange={handleOpenChange}
        />
      )}
    </SectionShell>
  );
}
