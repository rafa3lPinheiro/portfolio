# Section About

## Objetivo

Apresentar Rafa de forma humana, direta e confiavel, conectando trajetoria, formacao e modo de pensar software.

A secao deve complementar os cases e a stack sem repetir o curriculo inteiro.

## Escopo

Esta spec cobre apenas a secao Sobre da Home.

Inclui:

- mensagem central;
- conteudo biografico curto;
- pontos de confianca;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Reproduzir curriculo completo.
- Listar todas as experiencias em linha do tempo extensa.
- Entrar em detalhes internos da nimbuslab.
- Falar de vida pessoal alem do necessario para criar contexto.
- Criar pagina separada de Sobre.

## Mensagem Central

```txt
Sou um desenvolvedor full-stack que gosta de entender o problema antes de construir a solucao.
```

Versao mais autoral:

```txt
Gosto de software que nasce de contexto bem entendido, decisao tecnica clara e cuidado na execucao.
```

## Conteudo Base

Pontos que devem aparecer:

- Rafael Pinheiro.
- Desenvolvedor full-stack.
- Atua com desenvolvimento de software ponta a ponta.
- Programa desde 2021.
- Estudante de Engenharia Mecatronica na UnB.
- Interesse por produto, arquitetura, qualidade, TDD e uso estruturado de IA.

## Copy Inicial

Versao sugerida:

```txt
Sou Rafael Pinheiro, desenvolvedor full-stack em Brasilia. Programo desde 2021 e trabalho criando aplicacoes web de ponta a ponta, do entendimento do problema a interfaces, APIs, dados, testes e evolucao.

Na pratica, gosto de aproximar produto e engenharia: transformar contexto em especificacao, decisao tecnica em implementacao e validacao em aprendizado para a proxima iteracao.
```

Versao curta:

```txt
Desenvolvedor full-stack em Brasilia, estudante de Engenharia Mecatronica na UnB e builder de produtos web com TypeScript, React, Node.js e IA estruturada.
```

## Pontos de Confianca

Podem aparecer como lista curta, badges ou pequenas metricas:

- Programando desde 2021.
- Engenharia Mecatronica na UnB.
- Full-stack: frontend, backend, dados e testes.
- Foco em clareza, performance e manutencao.
- IA usada com contexto, specs e validacao.

## Direcao Visual

A secao deve seguir `docs/images/site-inspiration.jpg`.

Direcao:

- dark premium;
- bloco de texto elegante;
- foto do Rafa ao lado do texto;
- cards discretos para pontos de confianca;
- acentos bordo com parcimonia;
- bastante respiro;
- sem parecer pagina de curriculo.

## Layout

Direcao inicial:

- titulo curto;
- texto principal em 1 ou 2 paragrafos;
- pontos de confianca em linha ou grid discreto;
- foto do Rafa ao lado;
- CTA para curriculo.

Titulo sugerido:

```txt
Sobre mim
```

Alternativas:

```txt
Por tras do codigo
```

```txt
Quem constroi
```

CTA opcional:

```txt
Baixar curriculo
```

## Comportamento

### Desktop

- Layout pode ser em duas colunas: texto principal e pontos de confianca.
- Foto do Rafa deve ficar ao lado do texto, com tratamento visual alinhado ao dark premium.
- A foto deve ser discreta e nao competir com a ilustracao do hero.
- Texto deve ter largura confortavel para leitura.

### Mobile

- Conteudo deve empilhar.
- Texto precisa continuar curto.
- Foto pode aparecer acima ou abaixo do texto, mantendo boa proporcao.
- Pontos de confianca devem virar lista ou cards compactos.

## Acessibilidade

- Texto com contraste AA.
- Se houver imagem, usar alt adequado ou marcar como decorativa.
- CTA deve ter foco visivel.
- Evitar paragrafos longos demais.

## Criterios de Aceite

- A secao apresenta Rafa de forma humana e profissional.
- A copy nao repete o curriculo inteiro.
- A experiencia como programador desde 2021 e a UnB aparecem com naturalidade.
- O texto reforca produto, engenharia, qualidade e IA estruturada.
- A secao tem foto do Rafa ao lado em desktop.
- A secao tem CTA para curriculo.
- A secao segue visual dark premium guiado por `site-inspiration.jpg`.
- A secao funciona como apoio aos cases, nao como protagonista maior que eles.
- A secao e curta, legivel e responsiva.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `specs/000-project-brief.md`
- `specs/004-section-cases.md`
- `specs/005-section-stack.md`

## Questoes em Aberto

- O titulo final sera `Sobre mim` ou algo mais autoral?
- Qual arquivo sera usado como foto do Rafa?
- O CTA sera `Baixar curriculo` ou `Ver curriculo`?
