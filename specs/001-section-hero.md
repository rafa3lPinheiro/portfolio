# Section Hero

## Objetivo

Criar a primeira dobra da landing page do Rafa com impacto visual, clareza de posicionamento e direcao autoral.

O hero deve comunicar imediatamente:

- quem e o Rafa;
- qual e sua tese profissional;
- que ele constroi software com metodo;
- que IA faz parte do processo de engenharia, nao de um atalho.

## Escopo

Esta spec cobre apenas a secao Hero da Home.

Inclui:

- conteudo textual principal;
- hierarquia de informacao;
- direcao visual;
- CTAs;
- anchors de posicionamento;
- imagem/ilustracao principal como dependencia visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Implementacao tecnica.
- Animacoes finais.
- Conteudo completo dos cases.
- Criacao final da ilustracao do Rafa.
- Secao de processo.
- Secao de stack.
- Secao sobre.
- Rodape/contato.

## Conteudo

### Nome

```txt
RAFAEL PINHEIRO
```

### Headline

```txt
Eu uso IA como parte de um processo de engenharia, nao como atalho.
```

### Subheadline

```txt
Transformo contexto em especificacao, especificacao em testes, e testes em software que da para confiar.
```

### Descricao complementar

```txt
Desenvolvedor full-stack com foco em TypeScript, React, Next.js e Node.js. Crio aplicacoes web combinando produto, arquitetura, testes e IA estruturada com SDD, TDD e context engineering.
```

### Anchors

```txt
Full-stack
SDD/TDD
Context engineering
```

### CTAs

CTA primario:

```txt
Ver cases
```

CTA secundario:

```txt
Conhecer meu processo
```

## Hierarquia

Ordem de leitura desejada:

1. Nome.
2. Headline.
3. Subheadline.
4. Descricao complementar.
5. CTAs.
6. Anchors ou atributos de confianca.

O nome pode funcionar como marca visual grande, mas a headline deve ser o centro conceitual da secao.

## Direcao Visual

Paleta base:

```txt
#730c1e  vermelho bordo principal
#210207  vinho quase preto
#480415  bordo profundo
#140f17  preto azulado quase absoluto
```

Clima:

- editorial;
- intenso;
- maduro;
- premium;
- tecnico sem parecer frio;
- dramatico sem perder legibilidade.

Referencias:

- `docs/images/paleta.jpg` como referencia de paleta;
- `docs/images/hero-inspiration.jpg` como referencia principal de composicao do hero;
- `docs/images/site-inspiration.jpg` como referencia dark premium para refinamento de espacamento e contraste.

## Layout

Direcao inicial:

- hero em tela cheia ou quase tela cheia;
- fundo bordo dominante;
- contraste com preto quase absoluto;
- composicao assimetrica;
- texto grande e com presenca;
- ilustracao do Rafa em estilo inspirado na referencia do hero vermelho, encaixada na paleta bordo;
- navegacao minimalista no topo.

Composicao baseada em `docs/images/hero-inspiration.jpg`:

- texto como massa principal no lado esquerdo/centro;
- ilustracao como massa visual no lado direito;
- header pequeno no topo direito ou centralizado com baixa interferencia;
- atributos curtos na base, com separadores discretos;
- fundo vermelho/bordo dominante, com poucos elementos decorativos;
- leitura em formato de poster horizontal.

O hero deve deixar uma pista visual da proxima secao quando possivel, para evitar sensacao de tela isolada.

## Navegacao

A landing page deve ter um header minimalista no hero.

Links iniciais:

```txt
Processo
Cases
Stack
Sobre
Contato
```

Os links devem rolar para secoes internas da propria Home.

## Imagem Principal

O hero deve usar uma ilustracao do Rafa, nao uma foto crua.

A ilustracao deve:

- ser inspirada na composicao da referencia vermelha com personagem lateral;
- encaixar na paleta bordo do hero;
- funcionar como elemento visual de presenca, sem competir com a headline;
- manter contraste suficiente com o fundo;
- preservar uma aparencia autoral, tecnica e madura.

A criacao da imagem fica especificada em `specs/002-asset-hero-illustration.md`.

## Comportamento

### Desktop

- Conteudo principal deve ocupar a area nobre da tela.
- CTAs devem estar visiveis sem scroll em viewport padrao.
- Anchors podem aparecer na base do hero como atributos.
- Ilustracao lateral pode ter mais presenca.
- A composicao deve equilibrar o bloco tipografico com a silhueta do Rafa.

### Mobile

- Headline deve continuar forte, mas sem quebrar de forma estranha.
- CTAs devem ficar confortaveis para toque.
- Anchors podem virar linha compacta ou lista curta.
- Ilustracao deve ser reduzida, reposicionada ou omitida se prejudicar leitura.

## Acessibilidade

- Contraste minimo AA para textos essenciais.
- CTAs com foco visivel.
- Ordem de leitura coerente no DOM.
- Texto nao deve depender apenas de imagem ou decoracao.
- Animacoes, se existirem depois, nao devem bloquear leitura.

## Criterios de Aceite

- A primeira dobra comunica claramente que o portfolio e do Rafa.
- A frase sobre IA como processo de engenharia aparece com destaque.
- A paleta bordo e aplicada como primeira impressao visual.
- O hero tem CTAs claros para cases e processo.
- O header minimalista rola para secoes internas da Home.
- A ilustracao do Rafa encaixa na paleta e nao prejudica legibilidade.
- A secao funciona bem em desktop e mobile.
- O texto principal permanece legivel em alto contraste.
- O hero nao parece um template generico de portfolio dev.
- A secao nao promete cases ou informacoes que ainda nao existam.

## Dependencias

- `docs/decisions.md`
- `docs/visual-direction.md`
- `docs/home-structure.md`
- `specs/000-project-brief.md`
- `specs/002-asset-hero-illustration.md`

## Decisoes Respondidas

- O hero tera uma ilustracao do Rafa, inspirada na imagem de referencia com personagem lateral.
- A navegacao aparecera como header minimalista.
- O nome usado sera `Rafael Pinheiro`.
- Os CTAs e links do header devem rolar para secoes internas da Home.

## Questoes em Aberto

- Qual foto ou conjunto de fotos do Rafa sera usado como referencia para a ilustracao?
- A ilustracao sera busto, meio corpo ou retrato lateral?
- A assinatura visual tera traco mais anime/editorial ou mais semi-realista?
