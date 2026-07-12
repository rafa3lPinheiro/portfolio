import { CodeXml, FileCheck2, Rocket, ScanSearch } from "lucide-react";
import { ProcessStep } from "./process-step";

const steps = [
  {
    title: "Análise",
    description:
      "Entendo a dor, o cenário em que ela existe e o resultado que o software precisa alcançar.",
    icon: ScanSearch,
  },
  {
    title: "Especificação",
    description:
      "Transformo a análise em requisitos claros, organizando o contexto para orientar o desenvolvimento com IA.",
    icon: FileCheck2,
  },
  {
    title: "Desenvolvimento",
    description:
      "Construo o software de forma incremental, usando testes para validar cada comportamento desde o início.",
    icon: CodeXml,
  },
  {
    title: "Entrega",
    description: "Entrego um software documentado e preparado para evoluir.",
    icon: Rocket,
  },
] as const;

export function ProcessTimeline() {
  return (
    <ol className="relative mx-auto mt-16 max-w-[720px] list-none p-0 md:mt-20 min-[1040px]:grid min-[1040px]:max-w-none min-[1040px]:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute top-[59px] right-[12.5%] left-[12.5%] hidden h-px bg-[#480415] min-[1040px]:block"
      />
      {steps.map((step, index) => (
        <ProcessStep
          key={step.title}
          {...step}
          isLast={index === steps.length - 1}
        />
      ))}
    </ol>
  );
}
