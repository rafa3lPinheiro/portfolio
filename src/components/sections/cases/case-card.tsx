import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { type CaseStudy } from "../../../content/cases";
import { Badge } from "../../ui/badge";

type CaseCardProps = {
  study: CaseStudy;
  onOpen: (study: CaseStudy) => void;
  variant: "desktop" | "mobile";
};

export function CaseCard({ study, onOpen, variant }: CaseCardProps) {
  if (variant === "mobile") {
    return (
      <article className="relative h-full overflow-hidden rounded-[16px] border border-[var(--line)] bg-[var(--surface-2)]">
        <button
          type="button"
          aria-label={`Ver detalhes de ${study.title}`}
          className="absolute inset-0 z-10 h-full w-full text-left"
          onClick={() => onOpen(study)}
        />
        <div className="flex h-full w-full flex-col text-left">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              fill
              alt={study.image.alt}
              className="object-cover"
              sizes="(max-width: 639px) 88vw, (max-width: 1023px) 52vw, 33vw"
              src={study.image.src}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(12,11,12,0.82)_100%)]" />
          </div>

          <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-[0.16em] text-[var(--accent)] uppercase">
                  {study.category}
                </p>
                <h3 className="mt-2 text-2xl leading-tight font-semibold text-[var(--text)]">
                  {study.title}
                </h3>
              </div>
              <Link
                href={study.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Ver ${study.title} no GitHub`}
                className="relative z-20 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[var(--line-strong)] text-[var(--text)] transition-colors duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <Github aria-hidden="true" size={19} />
              </Link>
            </div>

            <p className="mt-4 text-base leading-7 text-[var(--muted)]">
              {study.problem}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative aspect-[4/3] overflow-hidden rounded-[16px] border border-[var(--line)] bg-[var(--surface-2)]">
      <button
        type="button"
        aria-label={`Ver detalhes de ${study.title}`}
        className="absolute inset-0 z-20 h-full w-full overflow-hidden text-left focus-visible:outline-none"
        onClick={() => onOpen(study)}
      />
      <div className="h-full w-full overflow-hidden text-left">
        <Image
          fill
          alt={study.image.alt}
          className="object-cover transition-[transform,filter] duration-300 group-hover:scale-[1.04] group-hover:blur-[3px] group-focus-within:scale-[1.04] group-focus-within:blur-[3px]"
          sizes="(max-width: 1199px) 50vw, 33vw"
          src={study.image.src}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,11,12,0.04)_20%,rgba(12,11,12,0.92)_100%)]" />
        <div className="absolute inset-0 bg-[rgba(12,11,12,0.7)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 p-6 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0">
          <div className="flex items-end justify-between gap-5">
            <div className="min-w-0">
              <p className="text-xs font-bold tracking-[0.16em] text-[#f4c6c8] uppercase">
                {study.category}
              </p>
              <h3 className="mt-2 text-2xl leading-tight font-semibold text-[var(--text)]">
                {study.title}
              </h3>
            </div>
            <ArrowUpRight
              aria-hidden="true"
              className="mb-1 shrink-0 text-[var(--text)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-within:-translate-y-1 group-focus-within:translate-x-1"
              size={22}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <Link
            href={study.repositoryUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Ver ${study.title} no GitHub`}
            className="absolute top-5 right-5 z-30 inline-flex h-10 items-center gap-2 rounded-[16px] border border-[var(--line-strong)] bg-[rgba(12,11,12,0.72)] px-3 text-xs font-semibold text-[var(--text)] opacity-0 transition-[color,border-color,opacity] duration-300 hover:border-[var(--accent)] hover:text-[var(--accent)] group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <Github aria-hidden="true" size={16} />
            GitHub
          </Link>
          <p className="pr-10 text-xs font-bold tracking-[0.16em] text-[#f4c6c8] uppercase">
            {study.category}
          </p>
          <h3 className="mt-2 text-xl leading-tight font-semibold text-[var(--text)]">
            {study.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--muted)]">
            {study.problem}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.stack.slice(0, 3).map((item) => (
              <Badge key={item} className="px-2 py-1.5 text-[0.7rem]">
                {item}
              </Badge>
            ))}
            {study.stack.length > 3 ? (
              <Badge className="px-2 py-1.5 text-[0.7rem]">
                +{study.stack.length - 3}
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
