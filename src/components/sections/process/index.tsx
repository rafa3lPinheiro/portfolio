const steps = [
  {
    title: "Contexto",
    description: "Entender o problema antes de pedir solução.",
  },
  {
    title: "Especificação",
    description: "Transformar ambiguidade em uma spec pequena e clara.",
  },
  {
    title: "Testes",
    description: "Usar critérios e testes como contrato de confiança.",
  },
  {
    title: "Implementação",
    description: "Construir com IA assistindo, mas com decisão humana.",
  },
  {
    title: "Validação",
    description: "Checar se a entrega resolve o problema certo.",
  },
] as const;

export function ProcessSection() {
  return (
    <section
      id="processo"
      className="mx-auto grid max-w-[1120px] grid-cols-1 items-start gap-[34px] px-[clamp(18px,4vw,40px)] pt-[72px] pb-[62px] md:grid-cols-[0.9fr_1.35fr] md:items-end md:pt-[104px]"
    >
      <div>
        <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#f4c6c8] uppercase">
          Processo
        </span>
        <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.05] font-bold text-[var(--text)]">
          Como eu transformo contexto em software
        </h2>
        <p className="mt-[18px] text-base leading-[1.8] text-[var(--muted)]">
          IA acelera meu processo, mas o critério vem antes: contexto claro,
          spec pequena, testes e validação.
        </p>
      </div>
      <ol className="grid list-none grid-cols-1 gap-[10px] p-0 md:grid-cols-5">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="border-t border-[var(--line)] px-[10px] pt-4 pb-[18px] transition duration-300 hover:-translate-y-[3px] hover:border-[rgba(200,52,71,0.78)] focus-within:-translate-y-[3px] focus-within:border-[rgba(200,52,71,0.78)] md:min-h-[156px] md:pb-0"
          >
            <span className="mb-5 block text-[0.72rem] text-[var(--faint)]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <strong className="block text-[0.92rem] text-[var(--text)]">
              {step.title}
            </strong>
            <p className="mt-[10px] text-[0.84rem] leading-[1.55] text-[var(--faint)]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
