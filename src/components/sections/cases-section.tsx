"use client";

import { useState } from "react";
import { CaseCard } from "../cases/case-card";
import { CaseDetailDialog } from "../cases/case-detail-dialog";
import { CaseDetailDrawer } from "../cases/case-detail-drawer";
import { SectionShell } from "../layout/section-shell";
import { cases, type CaseStudy } from "../../content/cases";
import { useMediaQuery } from "../../hooks/use-media-query";

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
      className="cases-section"
    >
      <div className="cases-grid">
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
