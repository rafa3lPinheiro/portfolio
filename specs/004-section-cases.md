# Section Cases

## Objetivo

Apresentar os projetos/cases principais do Rafa logo apos a secao de processo, usando evidencias concretas para provar capacidade tecnica, criterio de produto e impacto real.

Esta deve ser uma das secoes mais importantes da landing page.

## Escopo

Esta spec cobre apenas a secao de cases/projetos da Home.

Inclui:

- objetivo da secao;
- estrutura dos cards;
- padrao de detalhe dos cases;
- comportamento de modal/drawer;
- conteudo inicial dos cases;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Criar paginas individuais de case.
- Escrever case studies completos.
- Expor dados sensiveis, nomes de clientes ou informacoes internas.
- Definir imagens finais dos projetos.
- Implementar filtros complexos.

## Mensagem Central

```txt
Projetos onde clareza, decisao tecnica e execucao viraram resultado.
```

Alternativa mais direta:

```txt
Projetos selecionados
```

## Conteudo Inicial

Comecar com poucos cases. Qualidade importa mais que quantidade.

Cases mapeados:

1. Otimizacao de endpoint
2. Automacao de fluxo manual
3. Projeto com IA/context engineering a definir

## Estrutura do Card

Cada card deve conter:

- nome do case ou titulo anonimo;
- tipo de projeto;
- problema em uma frase;
- papel do Rafa;
- stack ou decisoes tecnicas principais;
- resultado mensuravel quando existir;
- CTA curto.

Modelo:

```txt
Titulo
Tipo / contexto
Problema em uma frase
Resultado ou impacto
Stack principal
CTA
```

## Case 1 - Otimizacao de Endpoint

Titulo provisiorio:

```txt
Endpoint critico otimizado de 50s para 4s
```

Mensagem:

```txt
Reestruturei um fluxo de backend sob carga para reduzir latencia critica e tornar a experiencia mais viavel em producao.
```

Resultado:

```txt
~92% de reducao no tempo de resposta
```

Stack provavel:

```txt
Node.js, TypeScript, PostgreSQL, Prisma
```

Observacao:

Detalhes internos devem ser anonimizados.

## Case 2 - Automacao de Fluxo Manual

Titulo provisiorio:

```txt
Fluxo manual reduzido de 5min para 1min
```

Mensagem:

```txt
Transformei uma operacao repetitiva em um fluxo mais direto, reduzindo friccao e tempo de execucao.
```

Resultado:

```txt
~80% de reducao no tempo operacional
```

Stack provavel:

```txt
React, Next.js, TypeScript
```

Observacao:

Validar contexto e stack antes de publicar.

## Case 3 - IA e Context Engineering

Titulo provisiorio:

```txt
Software com IA guiada por contexto, specs e testes
```

Mensagem:

```txt
Uso IA para acelerar a construcao de software a partir de contexto estruturado, specs granulares e criterios de aceite.
```

Resultado:

```txt
Case a definir
```

Stack provavel:

```txt
TypeScript, testes, documentacao viva, IA assistida
```

Observacao:

Este case deve ser escolhido com cuidado para nao parecer abstrato demais.

## Direcao Visual

A secao deve seguir a atmosfera dark premium de `docs/images/site-inspiration.jpg`.

Direcao:

- fundo escuro;
- cards discretos;
- bordas sutis;
- imagens ou mockups com tratamento cinematografico;
- acentos bordo para metricas e estados;
- grid elegante;
- pouco texto visivel de uma vez;
- foco em impacto e leitura rapida.
- espacamento, grid e atmosfera devem ser guiados principalmente por `docs/images/site-inspiration.jpg`.

Evitar:

- grade grande de muitos projetos;
- cards coloridos demais;
- excesso de logos de tecnologias;
- thumbnails genericas;
- prometer detalhes que ainda nao existem.

## Layout

Direcao inicial:

- titulo curto;
- frase de apoio pequena;
- grid com 3 cards principais;
- primeiro card pode ter mais destaque;
- metricas devem aparecer como elemento forte;
- CTA geral opcional ao final.

Titulo sugerido:

```txt
Projetos selecionados
```

Copy sugerida:

```txt
Alguns exemplos de como eu conecto produto, engenharia e execucao para resolver problemas reais.
```

CTA dos cards:

```txt
Ver detalhes
```

CTA geral, se necessario:

```txt
Ver mais no GitHub
```

## Padrao de Detalhe

Os detalhes dos cases devem abrir dentro da propria landing page, sem navegar para uma pagina individual.

Padrao:

- desktop: modal central largo;
- mobile: drawer/bottom sheet;
- base de componentes: shadcn;
- informacao essencial deve continuar visivel no card;
- detalhe serve para aprofundar, nao para explicar tudo do zero.

Componentes shadcn sugeridos:

- `Dialog` para desktop;
- `Drawer` para mobile;
- `Button` para CTAs;
- `Badge` para stack/categorias;
- `Separator` para dividir blocos;
- `ScrollArea` se o conteudo do detalhe passar da altura disponivel.

## Estrutura do Detalhe

Todo novo case deve seguir a mesma estrutura para manter consistencia.

Template:

```txt
Contexto
Problema
Meu papel
Decisoes tecnicas
Resultado
Aprendizados
Stack
```

Regras:

- cada bloco deve ser curto;
- evitar formato de artigo longo;
- resultado deve vir com metrica sempre que possivel;
- stack deve ser resumida;
- dados sensiveis devem ser anonimizados;
- o detalhe deve funcionar como "case snapshot".

Exemplo de nivel de detalhe:

```txt
Contexto
Endpoint usado em uma operacao sensivel de produto, com impacto direto na experiencia.

Problema
A resposta podia chegar a aproximadamente 50 segundos em cenarios criticos.

Meu papel
Analisei o fluxo, identifiquei gargalos e reestruturei a execucao para reduzir latencia.

Decisoes tecnicas
- revisao de consultas e serializacao
- reducao de trabalho desnecessario
- ajustes no fluxo de dados
- validacao com testes e medicoes

Resultado
Tempo reduzido de ~50s para ~4s.

Aprendizado
Performance boa nao nasce so de otimizar codigo; nasce de entender o fluxo.
```

## Comportamento

### Desktop

- Grid com 3 cards.
- Card principal pode ocupar mais largura ou ter maior destaque visual.
- Hover/focus pode revelar detalhes curtos, nunca informacao essencial escondida.
- Metricas devem ser visiveis sem interacao.
- Clique em `Ver detalhes` abre modal central largo.
- Modal deve manter foco preso enquanto aberto.
- `Esc` e clique fora devem fechar o modal.

### Mobile

- Cards em lista vertical.
- Metricas continuam visiveis.
- Texto deve ser curto para evitar blocos pesados.
- CTAs devem ser confortaveis para toque.
- Clique em `Ver detalhes` abre drawer/bottom sheet.
- Drawer deve permitir leitura confortavel em telas pequenas.

## Acessibilidade

- Cards devem ser navegaveis por teclado se forem interativos.
- Informacao essencial nao deve depender apenas de hover.
- Contraste deve atender AA.
- Imagens precisam ter texto alternativo quando forem informativas.
- Metricas devem ter contexto textual, nao apenas numero solto.
- Modal/drawer deve gerenciar foco corretamente.
- Modal/drawer deve ter titulo acessivel.

## Criterios de Aceite

- A secao apresenta no maximo 3 cases principais no primeiro momento.
- Pelo menos 2 cases possuem metricas concretas.
- Os cards comunicam problema, papel e impacto rapidamente.
- Dados sensiveis ou internos estao anonimizados.
- A secao tem mais peso que a secao de processo.
- O visual segue dark premium com acentos bordo.
- A secao funciona bem em desktop e mobile.
- Nenhum card depende de uma pagina individual para fazer sentido.
- Detalhes abrem em modal no desktop e drawer no mobile.
- Novos cases conseguem seguir o mesmo template sem redesenhar a secao.
- Componentes shadcn sao usados como base para Dialog/Drawer, Button e Badge.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `docs/implementation-guidelines.md`
- `specs/000-project-brief.md`
- `specs/003-section-process.md`

## Questoes em Aberto

- Quais nomes finais os cases terao?
- O terceiro case sera um projeto real atual ou um estudo/processo demonstrativo?
- Havera imagens/mockups reais dos projetos ou composicoes abstratas?
