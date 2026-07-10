# Specs

Esta pasta guarda especificacoes granulares do portfolio.

As specs devem ser pequenas, focadas e rastreaveis. Em vez de uma especificacao gigante para o site inteiro, cada arquivo deve cobrir uma parte clara do produto.

## Regra de granularidade

Uma spec deve responder bem:

- qual problema ela resolve;
- qual escopo esta incluso;
- qual escopo esta fora;
- quais criterios de aceite definem pronto;
- quais dependencias ela tem.

Se uma spec comecar a tratar de mais de uma secao grande, componente complexo ou decisao de arquitetura, ela deve ser quebrada.

## Convencao de nomes

Sugestao:

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

## Template

```md
# Nome da Spec

## Objetivo

## Escopo

## Fora de Escopo

## Conteudo

## Comportamento

## Criterios de Aceite

## Dependencias
```
