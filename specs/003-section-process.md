# Section Process

## Objetivo

Apresentar de forma sutil e rapida como Rafa pensa o uso de IA dentro do processo de engenharia.

Esta secao deve funcionar como uma ponte entre o hero e os projetos: um reforco de metodo antes de mostrar evidencias concretas.

## Escopo

Esta spec cobre apenas a secao de processo da Home.

Inclui:

- mensagem central;
- fluxo do processo;
- microcopy de cada etapa;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Explicar SDD, TDD ou context engineering em profundidade.
- Criar uma secao longa de metodologia.
- Criar documentacao tecnica completa do processo.
- Mostrar ferramentas internas ou detalhes sensiveis.
- Implementar animacoes complexas.
- Criar cases completos.

## Mensagem Central

```txt
IA entra no meu processo como aceleradora de engenharia, nao como substituta de criterio.
```

## Fluxo

Fluxo principal:

```txt
Contexto -> Especificacao -> Testes -> Implementacao -> Validacao
```

Etapas:

1. Contexto
2. Especificacao
3. Testes
4. Implementacao
5. Validacao

## Conteudo por Etapa

### 1. Contexto

```txt
Entender o problema antes de pedir solucao.
```

### 2. Especificacao

```txt
Transformar ambiguidade em uma spec pequena e clara.
```

### 3. Testes

```txt
Usar criterios e testes como contrato de confianca.
```

### 4. Implementacao

```txt
Construir com IA assistindo, mas com decisao tecnica humana.
```

### 5. Validacao

```txt
Checar se a entrega resolve o problema certo.
```

## Direcao Visual

A secao deve seguir o tom dark premium inspirado em `docs/images/site-inspiration.jpg`, mantendo conexao com a paleta bordo do hero.

Direcao:

- fundo escuro mais calmo que o hero;
- texto claro e refinado;
- acentos em bordo/vermelho;
- linha curta de processo com cinco etapas;
- interacao discreta, se existir;
- ritmo visual rapido, como transicao antes dos projetos.
- atmosfera geral guiada por `docs/images/site-inspiration.jpg`.

Evitar:

- parecer timeline corporativa generica;
- exagerar em icones;
- usar textos longos demais;
- transformar a secao em aula teorica;
- ocupar mais atencao que a secao de projetos.

## Layout

Direcao inicial:

- titulo humano e curto;
- frase de apoio com no maximo duas linhas;
- fluxo visual compacto com cinco etapas;
- cada etapa com nome e microcopy curta;
- sem cards grandes.

Titulo aprovado:

```txt
Como eu transformo contexto em software
```

Copy sugerida:

```txt
IA acelera meu processo, mas o criterio vem antes: contexto claro, spec pequena, testes e validacao.
```

## Comportamento

### Desktop

- Fluxo deve aparecer em linha horizontal compacta.
- Microinteracao deve ser sutil: hover/focus destaca a etapa e mostra uma frase curta.
- Deve ser compreendido em poucos segundos.

### Mobile

- Fluxo deve virar lista vertical curta.
- Cada etapa deve manter nome e descricao curta visiveis.
- Evitar accordion se isso deixar a secao pesada.

## Acessibilidade

- Ordem de leitura deve seguir a ordem do processo.
- O fluxo nao deve depender apenas de setas visuais.
- Contraste deve atender AA.
- Se houver interacao, todos os estados devem ser acessiveis por teclado.

## Criterios de Aceite

- A secao deixa claro como Rafa usa IA no processo de engenharia.
- O fluxo Contexto -> Especificacao -> Testes -> Implementacao -> Validacao esta presente.
- Cada etapa tem texto muito curto.
- A secao conecta SDD, TDD e context engineering sem soar buzzword.
- A secao funciona como continuidade natural do hero.
- A secao funciona como ponte rapida antes dos projetos.
- O visual segue dark premium com acentos bordo.
- A secao e legivel em desktop e mobile.
- A secao nao rouba protagonismo da secao de projetos.
- Nenhum dado sensivel ou interno e exposto.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `specs/000-project-brief.md`
- `specs/001-section-hero.md`

## Questoes em Aberto

- A microinteracao sera apenas hover/focus ou tambem tera destaque automatico sutil?
- O termo `context engineering` aparecera nesta secao ou ficara reservado para stack/principios?
