# Diretrizes de Implementacao

## Objetivo

Guiar a implementacao da landing page mantendo manutenibilidade, clareza e consistencia visual.

O site deve ser bem componentizado, com responsabilidades pequenas e explicitas. Evitar mega componentes.

## Principios

- Componentes pequenos e focados.
- Uma responsabilidade principal por componente.
- Dados de conteudo separados da estrutura visual quando fizer sentido.
- Next.js App Router como base da aplicacao.
- TailwindCSS como base de estilos.
- shadcn como base para componentes interativos e primitives de UI.
- Bun como runtime/package manager do projeto.
- TypeScript forte.
- Sem `any` desnecessario.
- Nomes semanticos.
- Acessibilidade como requisito, nao acabamento.
- Estilos consistentes com a direcao visual documentada.

## Uso de shadcn

Usar shadcn sempre que fizer sentido, especialmente para:

- `Button`
- `Badge`
- `Dialog`
- `Drawer`
- `Separator`
- `ScrollArea`
- `Tooltip`, se houver controles ou labels que precisem de apoio

Nao forcar shadcn para tudo. Secoes visuais simples podem ser componentes proprios.

## Toolchain

Usar Bun como runtime/package manager do projeto.

Direcao:

- instalar dependencias com `bun add`;
- executar scripts com `bun run`;
- manter lockfile do Bun como referencia;
- evitar misturar npm, pnpm ou yarn sem necessidade.

Scripts esperados:

```txt
bun run dev
bun run build
bun run lint
bun run test
```

## Framework

Usar Next.js com App Router.

Direcao:

- `src/app/layout.tsx` concentra metadata e shell HTML.
- `src/app/page.tsx` deve apenas compor as secoes.
- Componentes ficam em `src/components`.
- Conteudos repetiveis ficam em `src/content`.
- Estilos globais e Tailwind ficam em `src/app/globals.css`.

## Estrutura Sugerida

```txt
src/
  app/
    page.tsx
  components/
    layout/
      site-header.tsx
      section-shell.tsx
    sections/
      hero-section.tsx
      process-section.tsx
      cases-section.tsx
      stack-section.tsx
      about-section.tsx
      contact-section.tsx
    cases/
      case-card.tsx
      case-detail-dialog.tsx
      case-detail-drawer.tsx
      case-detail-content.tsx
    hero/
      hero-illustration.tsx
      hero-anchors.tsx
    stack/
      stack-group.tsx
      principle-strip.tsx
    ui/
      shadcn-components...
  content/
    cases.ts
    stack.ts
    navigation.ts
  lib/
    cn.ts
```

## Page Composition

`src/app/page.tsx` deve apenas compor as secoes.

Exemplo de responsabilidade:

```txt
src/app/page.tsx
  -> SiteHeader
  -> HeroSection
  -> ProcessSection
  -> CasesSection
  -> StackSection
  -> AboutSection
  -> ContactSection
```

Evitar colocar logica de cards, modal, drawer ou listas diretamente em `src/app/page.tsx`.

## Conteudo

Conteudos repetiveis devem ficar em arquivos de dados tipados.

Exemplos:

- cases;
- stack groups;
- principios;
- links de navegacao;
- CTAs.

Isso facilita adicionar novos cases no futuro sem reescrever a secao.

## Cases

A secao de cases deve ser especialmente componentizada:

- `CasesSection`: orquestra a secao.
- `CaseCard`: mostra resumo do case.
- `CaseDetailContent`: renderiza o conteudo compartilhado.
- `CaseDetailDialog`: desktop.
- `CaseDetailDrawer`: mobile.

O conteudo detalhado deve seguir o template da spec `004-section-cases.md`.

## Estilo

Seguir:

- hero guiado por `docs/images/paleta.jpg` e `docs/images/hero-inspiration.jpg`;
- secoes abaixo guiadas por `docs/images/site-inspiration.jpg`;
- acentos bordo com parcimonia;
- dark premium;
- cards discretos;
- nada de visual generico de portfolio dev.

## Criterios de Aceite

- Nenhuma secao principal vira mega componente.
- `src/app/page.tsx` fica como composicao de alto nivel.
- Next.js App Router esta configurado.
- TailwindCSS esta integrado em `src/app/globals.css`.
- Componentes interativos usam shadcn quando aplicavel.
- Projeto usa Bun para instalacao e execucao de scripts.
- Dados repetiveis ficam fora dos componentes visuais.
- Componentes possuem nomes semanticos.
- A estrutura permite adicionar novos cases com mudanca pequena e localizada.
- Acessibilidade de Dialog/Drawer, links e CTAs e preservada.
