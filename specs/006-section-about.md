# Section About

## Objetivo

Apresentar Rafa de forma humana, madura e profissional, sem transformar a secao em mini curriculo.

A funcao da secao e responder rapidamente:

- quem e Rafa;
- como ele trabalha;
- o que ele valoriza ao construir software.

Ela deve complementar Hero, Processo, Cases e Stack, trazendo contexto humano e estilo de trabalho, sem repetir a pagina inteira.

## Escopo

Esta spec cobre apenas a secao Sobre da Home.

Inclui:

- narrativa da secao;
- padrao de copy;
- conteudo base;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Reproduzir curriculo completo.
- Fazer linha do tempo de experiencias.
- Listar todas as tecnologias novamente.
- Repetir a tese do Hero com outras palavras.
- Criar pagina separada de Sobre.

## Padrao de Conteudo

Com base em referencias recorrentes de portfolios profissionais, o About deve seguir este formato:

1. Identidade curta
2. Area de atuacao
3. Forma de trabalhar
4. Valor humano/profissional
5. CTA opcional para curriculo

O texto deve ser curto, direto e legivel em poucos segundos.

Nao deve parecer:

- resumo de LinkedIn;
- carta de apresentacao;
- lista de adjetivos;
- autobiografia.

## Mensagem Central

```txt
Sou um desenvolvedor full stack que gosta de transformar ideias em software com clareza, organizacao e visao de produto.
```

Complemento conceitual:

```txt
Mais do que implementar, valorizo comunicacao clara, cuidado com o processo e responsabilidade com o resultado entregue.
```

## Conteudo Base

Pontos que devem aparecer com naturalidade:

- Rafael Pinheiro
- desenvolvedor full stack
- Brasilia
- programa desde 2021
- estudante de Engenharia Mecatronica na UnB
- conecta produto, engenharia e execucao
- trabalha de forma colaborativa
- valoriza clareza, organizacao e responsabilidade

## Copy Recomendada

Versao base:

```txt
Sou Rafael Pinheiro, desenvolvedor full stack em Brasilia.

Programo desde 2021 e gosto de transformar ideias em software com clareza, organizacao e visao de produto.

Trabalho de forma colaborativa, buscando simplificar problemas, alinhar contexto e tomar decisoes que facam sentido para o projeto como um todo.

Mais do que implementar, valorizo comunicacao clara, cuidado com o processo e responsabilidade com o resultado entregue.
```

Versao curta:

```txt
Desenvolvedor full stack em Brasilia, programando desde 2021 e construindo software com clareza, colaboracao e visao de produto.
```

## Principios de Copy

- Priorizar como Rafa pensa e trabalha, nao apenas o que estudou.
- Mostrar soft skills de forma implicita, pelo comportamento descrito.
- Evitar termos vazios como proativo, resiliente, dinamico e apaixonado.
- Evitar excesso de buzzwords.
- Manter tom confiante, mas nao inflado.
- So mencionar formacao e contexto academico se isso somar confianca sem roubar foco.

## Sinais de Confianca

Podem aparecer como pequenos highlights ou texto de apoio:

- Programando desde 2021
- Engenharia Mecatronica na UnB
- Full stack

Esses pontos devem apoiar a narrativa principal, nao competir com ela.

## Direcao Visual

A secao deve manter o visual dark premium ja definido no projeto.

Direcao:

- foto do Rafa ao lado do texto em desktop;
- texto primeiro e foto depois no mobile;
- bastante respiro;
- composicao editorial;
- sem cara de pagina de curriculo;
- CTA discreto para curriculo;
- acentos bordo apenas como detalhe.

## Layout

Estrutura recomendada:

- titulo curto;
- 3 ou 4 paragrafos curtos;
- pequenos sinais de confianca;
- foto ao lado;
- CTA de curriculo.

Titulo final:

```txt
Sobre mim
```

## Comportamento

### Desktop

- Layout em duas colunas.
- Texto com largura confortavel para leitura.
- Foto com presenca visual, mas sem competir com o Hero.
- CTA abaixo do bloco de texto.

### Mobile

- Conteudo empilhado.
- Texto vem antes da foto.
- Paragrafos continuam curtos.
- Destaques ficam compactos.

## Acessibilidade

- Texto com contraste AA.
- Paragrafos curtos e escaneaveis.
- Imagem com alt apropriado se for informativa.
- CTA com foco visivel.

## Criterios de Aceite

- A secao apresenta Rafa de forma humana e profissional.
- A copy e curta e legivel em poucos segundos.
- O texto comunica quem ele e, como trabalha e o que valoriza.
- A secao nao soa como curriculo resumido.
- A secao nao repete Hero, Stack ou Contato.
- Soft skills aparecem pelo comportamento descrito, e nao por adjetivos soltos.
- A experiencia desde 2021 aparece de forma natural.
- A foto aparece ao lado no desktop e abaixo do texto no mobile.
- O CTA de curriculo existe, mas nao domina a secao.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `specs/000-project-brief.md`
- `specs/004-section-cases.md`
- `specs/005-section-stack.md`

## Questoes em Aberto

- Qual arquivo final sera usado para a foto definitiva do Rafa?
- Qual arquivo final sera usado para o curriculo?
