"use client";

import { useState } from "react";
import { cases, type CaseStudy } from "../../../content/cases";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { CaseCard } from "./case-card";
import { CaseCarousel } from "./case-carousel";
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
    <section
      id="cases"
      className="mx-auto max-w-[1120px] px-[clamp(18px,4vw,40px)] py-[72px] md:py-[104px]"
    >
      <div>
        <header className="max-w-[650px]">
          <h2 className="text-5xl leading-[1.05] font-bold tracking-[0] text-[var(--text)]">
            Projetos
          </h2>
          <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
            Uma seleção de como conecto produto, engenharia e execução para
            transformar ideias em software.
          </p>
        </header>
      </div>

      <CaseCarousel onOpen={setSelectedCase} />

      <div className="mt-16 hidden gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
        {cases.map((study) => (
          <CaseCard
            key={study.id}
            study={study}
            variant="desktop"
            onOpen={setSelectedCase}
          />
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
    </section>
  );
}
