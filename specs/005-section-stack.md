# Section Stack

## Objetivo

Mostrar o repertorio tecnico do Rafa de forma curada, conectando ferramentas a criterio de engenharia.

A secao deve reforcar que tecnologia e meio para construir software claro, testavel e facil de evoluir.

## Escopo

Esta spec cobre apenas a secao de stack/principios da Home.

Inclui:

- mensagem central;
- grupos de tecnologias;
- principios tecnicos;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Criar lista exaustiva de todas as ferramentas ja usadas.
- Exibir nuvem gigante de logos.
- Comparar tecnologias.
- Explicar cada ferramenta individualmente.
- Criar grafico de senioridade por tecnologia.

## Mensagem Central

```txt
Tecnologia entra como meio, nao como fim. O foco e escolher ferramentas que deixem o produto mais claro, testavel e facil de evoluir.
```

Versao curta:

```txt
Stack guiada por clareza, teste e evolucao.
```

## Titulo

Titulo aprovado:

```txt
Stack guiada por criterio
```

## Grupos

### Frontend

```txt
React
Next.js
TypeScript
Tailwind CSS
Zustand
React Hook Form
Zod
TanStack Query
```

### Backend

```txt
Node.js
Fastify
NestJS
Prisma
PostgreSQL
Swagger
Socket.io
```

### Qualidade

```txt
TDD
Vitest
Jest
Clean Code
Performance
Acessibilidade
SEO
```

### IA Aplicada

```txt
SDD
Context engineering
Specs granulares
Revisao assistida
Documentacao viva
```

## Principios

Principios que podem aparecer como texto curto ou badges:

- TypeScript forte.
- Nomes semanticos.
- Sem `any` desnecessario.
- Componentes pequenos e claros.
- Testes como ferramenta de design.
- Performance e acessibilidade desde o inicio.
- IA orientada por contexto, criterios e revisao.

## Direcao Visual

A secao deve seguir `docs/images/site-inspiration.jpg`.

Direcao:

- fundo dark premium;
- cards pequenos ou grupos em colunas;
- badges discretas de texto;
- linhas e bordas sutis;
- acentos bordo apenas para destaque;
- nao usar icones/logos na primeira versao;
- tipografia elegante e legivel.

## Layout

Direcao inicial:

- titulo curto;
- frase de apoio;
- 4 grupos principais;
- cada grupo com lista curta;
- principios em uma faixa curta abaixo dos grupos.

Copy sugerida:

```txt
Eu gosto de ferramentas que reduzem ambiguidade: tipos fortes, validacao clara, testes, boas interfaces e documentacao viva.
```

## Comportamento

### Desktop

- Grupos podem aparecer em grid de 4 colunas ou 2x2.
- Principios podem aparecer em linha compacta abaixo.
- Hover/focus pode destacar uma badge, sem revelar informacao essencial.

### Mobile

- Grupos devem empilhar em lista vertical.
- Badges precisam quebrar linha sem estourar largura.
- A secao deve continuar curta e escaneavel.

## Acessibilidade

- Badges devem ter texto real, nao apenas logos.
- Contraste deve atender AA.
- Ordem de leitura deve seguir os grupos.
- Se houver logos no futuro, eles devem ser decorativos ou ter texto acessivel.

## Criterios de Aceite

- A secao mostra stack de forma curada, nao exaustiva.
- As tecnologias estao agrupadas por papel.
- A secao conecta stack com principios de engenharia.
- IA aplicada aparece como parte do metodo, nao como hype.
- O visual segue a inspiracao dark premium do site.
- A secao e curta, legivel e responsiva.
- Nao ha mural gigante de logos.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `specs/000-project-brief.md`
- `specs/003-section-process.md`

## Questoes em Aberto

- Quais tecnologias entram ou saem da lista final antes da implementacao?
