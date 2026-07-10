# Revisao das Specs

## Status

As specs principais da landing page estao criadas e consistentes com a decisao de site em pagina unica.

## Mapa

```txt
000-project-brief.md
001-section-hero.md
002-asset-hero-illustration.md
003-section-process.md
004-section-cases.md
005-section-stack.md
006-section-about.md
007-section-contact.md
```

## Decisoes Consolidadas

- O portfolio sera uma landing page unica.
- Tudo sera tratado como Home e secoes da Home.
- Hero guiado por `docs/images/paleta.jpg` e `docs/images/hero-inspiration.jpg`.
- Secoes abaixo guiadas por `docs/images/site-inspiration.jpg`.
- Ilustracao do hero em estilo anime editorial maduro, com fundo transparente.
- Processo sera uma secao sutil e rapida antes dos projetos.
- Cases usam card resumido e detalhe na propria landing.
- Desktop usa modal para detalhes de case.
- Mobile usa drawer/bottom sheet para detalhes de case.
- Next.js App Router sera usado como framework.
- TailwindCSS sera usado como base de estilos.
- shadcn sera usado onde fizer sentido, especialmente em componentes interativos.
- Bun sera usado como runtime/package manager do projeto.
- Implementacao deve ser bem componentizada, sem mega componentes.
- About deve dizer que Rafa programa desde 2021, nao destacar empresa desde 2021.
- About tera foto do Rafa ao lado e CTA para curriculo.

## Diretriz Tecnica

Ver `docs/implementation-guidelines.md`.

Pontos principais:

- `src/app/page.tsx` deve compor secoes, nao concentrar logica.
- Secoes devem ser componentes separados.
- Cases devem ser altamente componentizados.
- Conteudos repetiveis devem ficar em arquivos tipados.
- Componentes interativos devem usar shadcn quando aplicavel.
- Bun deve ser usado para instalar dependencias e executar scripts.

## Pendencias Abertas

### Hero

- Definir foto(s) de referencia do Rafa para a ilustracao.
- Decidir se a assinatura visual final tera retrato em perfil ou tres-quartos.

### Cases

- Definir nomes finais dos cases.
- Definir o terceiro case: projeto real atual ou demonstracao de processo/IA.
- Definir se havera mockups reais ou composicoes abstratas para os cards.

### Stack

- Revisar lista final de tecnologias antes da implementacao.

### About

- Definir arquivo da foto do Rafa.
- Decidir CTA: `Baixar curriculo` ou `Ver curriculo`.

### Contact

- Confirmar email final.
- Definir se o curriculo sera PDF local no projeto ou link externo.
- Confirmar links finais de GitHub e LinkedIn.
