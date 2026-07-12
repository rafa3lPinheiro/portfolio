"use client";

import { useEffect, useState } from "react";
import { cases, type CaseStudy } from "../../../content/cases";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";
import { CaseCard } from "./case-card";

type CaseCarouselProps = {
  onOpen: (study: CaseStudy) => void;
};

export function CaseCarousel({ onOpen }: CaseCarouselProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);
  const [count, setCount] = useState(cases.length);

  useEffect(() => {
    if (!api) return;

    const updateSelection = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    updateSelection();
    api.on("select", updateSelection);
    api.on("reInit", updateSelection);

    return () => {
      api.off("select", updateSelection);
      api.off("reInit", updateSelection);
    };
  }, [api]);

  return (
    <Carousel
      aria-label="Projetos em destaque"
      className="mt-16 lg:hidden"
      opts={{ align: "start", loop: false }}
      setApi={setApi}
    >
      <CarouselContent>
        {cases.map((study) => (
          <CarouselItem
            key={study.id}
            className="basis-[88%] sm:basis-[68%] md:basis-[52%]"
          >
            <CaseCard study={study} variant="mobile" onOpen={onOpen} />
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-6 flex items-center justify-between">
        <span
          aria-live="polite"
          className="text-sm tabular-nums text-[var(--muted)]"
        >
          {String(current).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
    </Carousel>
  );
}
