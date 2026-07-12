export type CaseStudy = {
  id: string;
  title: string;
  category: string;
  image: {
    src: string;
    alt: string;
  };
  repositoryUrl: string;
  problem: string;
  impact: string;
  impactLabel: string;
  stack: string[];
  details: {
    context: string;
    problem: string;
    role: string;
    decisions: string[];
    result: string;
    learning: string;
    stack: string[];
  };
};

export const cases: CaseStudy[] = [
  {
    id: "endpoint-performance",
    title: "Endpoint crítico otimizado",
    category: "Backend / Performance",
    image: {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      alt: "Dashboard de dados exibido em uma tela",
    },
    repositoryUrl: "https://github.com/rafa3lPinheiro",
    problem:
      "Reestruturei um fluxo sob carga para reduzir uma latência crítica em produção.",
    impact: "50s → 4s",
    impactLabel: "~92% menos tempo de resposta",
    stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    details: {
      context:
        "Endpoint usado em uma operação sensível de produto, com impacto direto na experiência.",
      problem:
        "A resposta podia chegar a aproximadamente 50 segundos em cenários críticos.",
      role:
        "Analisei o fluxo, identifiquei gargalos e reestruturei a execução para reduzir latência.",
      decisions: [
        "Revisão de consultas e serialização.",
        "Redução de trabalho desnecessário.",
        "Ajustes no fluxo de dados.",
        "Validação com testes e medições.",
      ],
      result: "Tempo reduzido de aproximadamente 50 segundos para 4 segundos.",
      learning:
        "Performance boa não nasce só de otimizar código; nasce de entender o fluxo.",
      stack: ["Node.js", "TypeScript", "PostgreSQL", "Prisma"],
    },
  },
  {
    id: "manual-flow",
    title: "Fluxo manual simplificado",
    category: "Produto / Frontend",
    image: {
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
      alt: "Notebook aberto em um ambiente de trabalho",
    },
    repositoryUrl: "https://github.com/rafa3lPinheiro",
    problem:
      "Transformei uma operação repetitiva em um fluxo mais direto e fácil de executar.",
    impact: "5min → 1min",
    impactLabel: "~80% menos tempo operacional",
    stack: ["React", "Next.js", "TypeScript"],
    details: {
      context:
        "Fluxo operacional recorrente que consumia tempo e dependia de passos manuais.",
      problem:
        "A execução levava cerca de 5 minutos e gerava fricção em uma tarefa frequente.",
      role:
        "Modelei a experiência, reduzi passos e implementei uma interface mais objetiva.",
      decisions: [
        "Remoção de etapas redundantes.",
        "Interface orientada à ação principal.",
        "Validações mais claras no fluxo.",
        "Revisão de estados e feedbacks.",
      ],
      result: "Tempo reduzido de aproximadamente 5 minutos para 1 minuto.",
      learning:
        "Um bom fluxo não só automatiza; ele deixa a intenção da ação mais óbvia.",
      stack: ["React", "Next.js", "TypeScript"],
    },
  },
  {
    id: "ai-process",
    title: "Software guiado por contexto",
    category: "IA aplicada / Processo",
    image: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
      alt: "Representação visual de inteligência artificial",
    },
    repositoryUrl: "https://github.com/rafa3lPinheiro",
    problem:
      "Uso IA com specs granulares, critérios de aceite e revisão técnica para acelerar entregas.",
    impact: "SDD + TDD",
    impactLabel: "Contexto antes do código",
    stack: ["TypeScript", "Specs", "Testes", "IA assistida"],
    details: {
      context:
        "Processo atual de criação de software com IA como parte da rotina de engenharia.",
      problem:
        "IA sem contexto tende a aumentar ambiguidade, retrabalho e decisões frágeis.",
      role:
        "Estruturo contexto, especificação, critérios e testes antes de avançar para implementação.",
      decisions: [
        "Specs pequenas e rastreáveis.",
        "Critérios de aceite explícitos.",
        "Testes como contrato de comportamento.",
        "Revisão humana antes de considerar pronto.",
      ],
      result:
        "Entregas mais previsíveis, com melhor rastreabilidade entre intenção, código e validação.",
      learning:
        "O ganho real da IA aparece quando ela trabalha dentro de um processo claro.",
      stack: ["TypeScript", "SDD", "TDD", "Context engineering"],
    },
  },
];
