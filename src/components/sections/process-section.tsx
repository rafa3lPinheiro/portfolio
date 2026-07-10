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
    <section id="processo" className="process-section">
      <div className="process-intro">
        <span className="eyebrow">Processo</span>
        <h2>Como eu transformo contexto em software</h2>
        <p>
          IA acelera meu processo, mas o critério vem antes: contexto claro,
          spec pequena, testes e validação.
        </p>
      </div>
      <ol className="process-steps">
        {steps.map((step, index) => (
          <li key={step.title} className="process-step">
            <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
            <strong>{step.title}</strong>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
