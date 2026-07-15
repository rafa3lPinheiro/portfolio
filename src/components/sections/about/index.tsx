import Image from "next/image";
import { Download } from "lucide-react";
import aboutMe from "../../../public/about-me.png";
import { ButtonLink } from "../../ui/button";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-[clamp(18px,4vw,40px)] py-[72px] md:grid-cols-[0.78fr_1fr] md:py-[104px]"
    >
      <div
        className="order-2 relative mx-auto flex aspect-[0.82] w-full max-w-[420px] items-end justify-center overflow-hidden rounded-[16px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(72,4,21,0.5),rgba(20,15,23,0.85)),var(--surface-2)] md:order-1"
        aria-label="Foto de Rafael Pinheiro"
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(200,52,71,0.12),transparent_52%)]" />
        <div className="absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(12,11,12,0.08),rgba(12,11,12,0.24))]" />
        <Image
          src={aboutMe}
          alt="Foto de Rafael Pinheiro"
          className="relative z-0 h-full w-full object-cover object-center grayscale blur-[0.4px] brightness-[0.9]"
          sizes="(max-width: 767px) 80vw, 420px"
        />
        <span className="absolute right-5 bottom-5 z-30 h-px w-20 bg-[rgba(255,237,230,0.28)]" />
      </div>
      <div className="order-1 md:order-2">
        <h2 className="text-5xl leading-[1.05] font-bold text-[var(--text)]">
          Sobre mim
        </h2>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Sou Rafael Pinheiro, desenvolvedor full stack em Brasília.
        </p>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Programo desde 2021 e gosto de transformar ideias em software com
          clareza, organização e visão de produto.
        </p>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Trabalho de forma colaborativa, buscando simplificar problemas,
          alinhar contexto e tomar decisões que façam sentido para o projeto
          como um todo.
        </p>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Mais do que implementar, valorizo comunicação clara, cuidado com o
          processo e responsabilidade com o resultado entregue.
        </p>
        <div className="my-6 flex flex-wrap gap-x-[18px] gap-y-3">
          <span className="text-[0.88rem] text-[var(--muted)]">
            Programando desde 2021
          </span>
          <span className="text-[0.88rem] text-[var(--muted)]">
            Engenharia Mecatrônica na UnB
          </span>
          <span className="text-[0.88rem] text-[var(--muted)]">Full-stack</span>
        </div>
        <ButtonLink
          href="/Currículo-Rafael-Pinheiro.pdf"
          variant="secondary"
          target="_blank"
          rel="noreferrer"
          className="border-[var(--line-strong)] bg-[var(--surface-2)] text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--surface-3)]"
        >
          Ver currículo <Download size={16} />
        </ButtonLink>
      </div>
    </section>
  );
}
