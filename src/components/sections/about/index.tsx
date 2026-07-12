import { Download } from "lucide-react";
import { ButtonLink } from "../../ui/button";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-14 px-[clamp(18px,4vw,40px)] py-[72px] md:grid-cols-[0.78fr_1fr] md:py-[104px]"
    >
      <div
        className="relative flex aspect-[0.82] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[16px] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(72,4,21,0.5),rgba(20,15,23,0.85)),var(--surface-2)] text-[var(--faint)]"
        aria-label="Foto de Rafael Pinheiro"
      >
        <span className="text-[0.78rem] tracking-[0.2em] uppercase">Foto</span>
        <span className="absolute bottom-[12%] left-[18%] h-[2px] w-[64%] bg-[rgba(200,52,71,0.58)]" />
      </div>
      <div>
        <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#f4c6c8] uppercase">
          Sobre
        </span>
        <h2 className="mt-3 text-5xl leading-[1.05] font-bold text-[var(--text)]">
          Sobre mim
        </h2>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Sou Rafael Pinheiro, desenvolvedor full-stack em Brasília. Programo
          desde 2021 e trabalho criando aplicações web de ponta a ponta, do
          entendimento do problema a interfaces, APIs, dados, testes e evolução.
        </p>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          Na prática, gosto de aproximar produto e engenharia: transformar
          contexto em especificação, decisão técnica em implementação e validação
          em aprendizado para a próxima iteração.
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
        <ButtonLink href="#" variant="secondary" aria-disabled="true">
          Ver currículo <Download size={16} />
        </ButtonLink>
      </div>
    </section>
  );
}
