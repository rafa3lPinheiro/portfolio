# Asset Hero Illustration

## Objetivo

Criar uma ilustracao do Rafa para o hero da landing page.

A imagem deve funcionar como elemento visual principal da primeira dobra, inspirada na referencia vermelha com personagem lateral, mas adaptada para a identidade do Rafa e para a paleta bordo do projeto.

## Escopo

Esta spec cobre apenas a criacao da imagem/asset do hero.

Inclui:

- direcao artistica;
- relacao com a paleta;
- formato esperado;
- uso no layout;
- restricoes de legibilidade;
- criterios de aceite.

## Fora de Escopo

- Implementacao do hero.
- Animacoes da imagem.
- Tratamento completo de responsividade no codigo.
- Criacao de outros assets do site.
- Geracao da imagem nesta etapa.

## Referencias

Referencia principal de paleta:

- `docs/images/paleta.jpg`

Referencia de composicao:

- `docs/images/hero-inspiration.jpg`

Referencia de atmosfera premium para o restante do site:

- `docs/images/site-inspiration.jpg`

Analise da referencia:

- personagem ocupa o lado direito e cria uma silhueta dominante;
- rosto em perfil/tres-quartos, com atitude calma e confiante;
- poucos blocos de cor, sombra forte e contornos limpos;
- fundo vermelho quase chapado, deixando o personagem ser o ponto focal;
- preto usado como massa de cabelo/roupa e contraste principal;
- detalhes pequenos, como oculos, cabelo e linhas de roupa, criam personalidade sem poluir.

## Direcao Artistica

A ilustracao deve representar o Rafa em uma linguagem visual autoral, editorial e madura.

Direcao aprovada:

- estilo anime editorial maduro;
- busto ou meio corpo;
- rosto em perfil ou tres-quartos;
- fundo transparente;
- composicao bem proxima da referencia `docs/images/hero-inspiration.jpg`, adaptada ao Rafa;
- encaixe direto na paleta bordo do hero.

Caracteristicas desejadas:

- retrato estilizado do Rafa;
- presenca forte, como personagem de capa/poster;
- contraste alto;
- traco limpo;
- clima tecnico e confiante;
- expressao calma, focada ou levemente provocativa;
- uso de sombras profundas;
- silhueta marcante do cabelo, rosto e roupa;
- poucos detalhes bem escolhidos, evitando excesso de textura;
- evitar aparencia infantil, caricata ou mascote.

## Paleta

A imagem deve encaixar na paleta do hero.

Paleta base:

```txt
#730c1e  vermelho bordo principal
#210207  vinho quase preto
#480415  bordo profundo
#140f17  preto azulado quase absoluto
```

Uso esperado:

- sombras em `#140f17` ou `#210207`;
- meios-tons em `#480415`;
- acentos e fundo em `#730c1e`;
- luzes em tom claro quente ou off-white, se necessario para contraste.

## Composicao

Direcao inicial:

- posicionamento lateral no hero, preferencialmente a direita no desktop;
- busto ou meio corpo;
- olhar ou direcao corporal voltada para a area de texto;
- silhueta forte e reconhecivel;
- area negativa suficiente para preservar leitura da headline.

Preferencias de enquadramento:

- perfil ou tres-quartos;
- busto ou meio corpo;
- pose levemente lateral;
- roupa escura para formar massa visual;
- bordas e sombras integradas ao fundo bordo.

No mobile, a imagem pode:

- aparecer acima do texto em versao reduzida;
- aparecer parcialmente ao fundo com baixa interferencia;
- ser omitida se prejudicar a leitura.

## Formatos Esperados

Exportacoes recomendadas:

```txt
hero-rafael-illustration.png
hero-rafael-illustration.webp
hero-rafael-illustration@2x.png
```

Requisitos:

- fundo transparente;
- dimensao grande o suficiente para desktop;
- boa leitura em fundo bordo escuro;
- sem textos embutidos na imagem;
- sem elementos que dificultem corte responsivo.

## Prompt Base Futuro

Quando a imagem for criada, usar este briefing como base:

```txt
Stylized editorial portrait illustration of Rafael Pinheiro, a Brazilian full-stack software developer, confident and calm, dramatic burgundy and near-black color palette, high contrast shadows, clean sharp shapes, modern anime-inspired but mature, poster-like composition, suitable for a premium developer portfolio hero section, transparent background, no text.
```

Adaptar o prompt com referencias reais do rosto do Rafa quando disponiveis.

Direcao complementar do prompt:

```txt
Three-quarter or side profile bust portrait, positioned for the right side of a landing page hero, strong silhouette, black/dark clothing mass, burgundy highlights, deep shadows, minimal color blocks, inspired by a red anime portfolio hero reference, mature editorial look, not childish, not mascot-like.
```

## Criterios de Aceite

- A imagem representa o Rafa de forma reconhecivel ou aceitavel para uso pessoal.
- A imagem encaixa na paleta bordo do hero.
- A imagem funciona em composicao lateral no desktop.
- A silhueta da imagem equilibra o bloco de texto do hero.
- A imagem nao compete com a headline.
- A imagem mantem contraste adequado contra o fundo.
- A imagem nao parece generica, infantil ou desalinhada com o tom tecnico/maduro do portfolio.
- A imagem pode ser usada sem texto embutido.
- A imagem segue de perto a composicao da referencia `hero-inspiration.jpg`, sem copia literal.

## Dependencias

- `docs/visual-direction.md`
- `docs/images/paleta.jpg`
- `docs/images/hero-inspiration.jpg`
- `docs/images/site-inspiration.jpg`
- `specs/001-section-hero.md`

## Questoes em Aberto

- Qual foto do Rafa sera usada como referencia principal?
- A ilustracao final sera gerada a partir de uma ou mais fotos de referencia do Rafa?
