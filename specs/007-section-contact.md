# Section Contact

## Objetivo

Fechar a landing page com uma chamada clara para conversa profissional, mantendo o tom autoral, tecnico e direto do portfolio.

A secao deve facilitar contato sem quebrar a atmosfera visual construida pelas secoes anteriores.

## Escopo

Esta spec cobre apenas a secao final de contato/fechamento da Home.

Inclui:

- mensagem central;
- CTAs;
- links essenciais;
- direcao visual;
- comportamento responsivo;
- criterios de aceite.

## Fora de Escopo

- Criar formulario complexo.
- Enviar email automaticamente.
- Integrar CRM ou automacao.
- Criar pagina separada de contato.
- Exibir informacoes pessoais desnecessarias.

## Mensagem Central

```txt
Se voce quer construir software com clareza, metodo e cuidado tecnico, vamos conversar.
```

Versao mais curta:

```txt
Vamos construir algo com clareza?
```

## CTAs

CTA primario:

```txt
Entrar em contato
```

CTA secundario:

```txt
Ver curriculo
```

Links de apoio:

```txt
GitHub
LinkedIn
Email
```

Links definidos:

```txt
GitHub: https://github.com/rafa3lPinheiro
LinkedIn: https://www.linkedin.com/in/rafa3lpinheiro/
Email: rafa_calhao@outlook.com
```

## Comportamento dos Links

Direcao inicial:

- `Entrar em contato` pode abrir email via `mailto:`;
- `Ver curriculo` deve abrir ou baixar o curriculo;
- GitHub abre em nova aba;
- LinkedIn abre em nova aba;
- Email pode copiar endereco ou abrir cliente de email.

## Conteudo

Titulo sugerido:

```txt
Vamos conversar?
```

Copy sugerida:

```txt
Gosto de trabalhar em produtos onde contexto, engenharia e execucao precisam andar juntos. Se isso parece com o que voce quer construir, me chama.
```

Assinatura opcional:

```txt
Rafael Pinheiro
Full-stack developer
```

## Direcao Visual

A secao deve seguir `docs/images/site-inspiration.jpg`, com um fechamento elegante e escuro.

Direcao:

- fundo dark premium;
- acentos bordo sutis;
- bloco de CTA com bastante respiro;
- tipografia clara e confiante;
- links discretos;
- sem parecer formulario corporativo.

## Layout

Direcao inicial:

- titulo curto;
- copy pequena;
- dois CTAs principais;
- links sociais/contato em linha;
- assinatura final ou pequeno rodape.

O fechamento pode ter um pouco mais de respiro vertical para dar sensacao de conclusao.

## Comportamento

### Desktop

- Conteudo centralizado ou levemente alinhado ao grid principal do site.
- CTAs em linha.
- Links de apoio abaixo.

### Mobile

- CTAs empilhados ou em largura total.
- Links de apoio devem ser faceis de tocar.
- Texto deve continuar curto.

## Acessibilidade

- CTAs com foco visivel.
- Links com nomes claros.
- Contraste AA.
- Links externos devem indicar comportamento quando necessario.
- `mailto:` deve ter fallback visual com email visivel ou copiavel.

## Criterios de Aceite

- A secao fecha a landing com CTA claro.
- O usuario consegue acessar contato, curriculo, GitHub e LinkedIn.
- O visual segue dark premium e nao parece rodape generico.
- A copy combina com o tom do portfolio.
- A secao funciona bem em desktop e mobile.
- Nao ha informacoes pessoais desnecessarias expostas.

## Dependencias

- `docs/decisions.md`
- `docs/home-structure.md`
- `docs/visual-direction.md`
- `specs/000-project-brief.md`
- `specs/006-section-about.md`

## Questoes em Aberto

- O curriculo sera PDF local no projeto ou link externo?
