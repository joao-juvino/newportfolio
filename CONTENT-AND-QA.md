# Redesenho claro — 23 de setembro de 2026

## Versão atual

- Referência visual: `Imagem do Codex 23 de set. de 2026, 11_47_17.png`, fornecida pelo usuário. Hero em duas colunas, monograma JS, nome azul, retrato sobre oval claro, cartão flutuante, projetos com representações técnicas e linha inferior com sobre/competências/contato.
- Retrato: `ChatGPT Image 23 de set. de 2026, 11_33_13.png`, também fornecido pelo usuário. Publicado localmente como `public/media/joao-santos-cutout.webp`, 1122 × 1402 px e 204.466 bytes. Dimensões e canal alpha comparados com a origem: idênticos. Compressão WebP, sem geração de rosto, retoque, alongamento ou alteração de proporções.
- Next.js 16.3.5 preservado. Tailwind CSS 4.3.3 e Motion 13.4.0 instalados. Componentes e dependências Three.js/R3F removidos: não faziam parte desta direção e o R3F anterior tinha incompatibilidade de peer com React 19.3.0. Histórico anterior permanece no Git.
- Tokens centralizados em `app/globals.css`. Manrope nos títulos, Inter nos textos e JetBrains Mono nos detalhes técnicos. Fontes com `display=swap` e fallback local.
- Componentes separados: Header, Icon, Reveal e ProjectVisual. Menu responsivo com estado acessível, Escape e fechamento ao navegar. Motion para entrada progressiva; CSS para microinterações. Guardas `useReducedMotion` e `prefers-reduced-motion`. Sem 3D ou alternância de tema incompleta.
- Projetos e links anteriores preservados. PiiCheck usa Flask/Celery/Redis (não FastAPI/IA); Juvino Store usa NestJS/Drizzle/PostgreSQL (não Express nem pagamentos inventados). Os diagramas são explicitamente técnicos, não screenshots de aplicações inexistentes.
- A apresentação “Engenheiro de Software Fullstack” foi solicitada expressamente pelo usuário. Não se acrescentaram empregadores, diplomas concluídos, métricas ou disponibilidade.

## Verificações da versão atual

- `pnpm build`: compilação, TypeScript e exportação estática aprovados.
- `pnpm peers check`: nenhuma incompatibilidade restante.
- `pnpm check:export`: 16 âncoras válidas, imagens existentes com alt, h1 único, links preservados e guardas de movimento reduzido.
- Revisão visual no navegador em desktop (1440 × 1000), tablet (768 × 1024) e mobile (390 × 844), com verificação adicional de 320 × 740. Ajustados cartão decorativo, dimensões do título e recorte da foto nos tamanhos intermediários e pequenos.
- Menu móvel aberto e fechado com Escape; navegação para projetos fecha o menu. Seções de projetos, arquivo, sobre, competências, contato e rodapé inspecionadas visualmente.
- Não foi usado aparelho físico. Movimento reduzido validado na implementação; a API do navegador não oferece emulação dessa preferência. Não se atribuem resultados de Lighthouse ou FPS não medidos.
- Prévia de produção: http://127.0.0.1:3002 . Nenhuma publicação ou push efetuado.

## Histórico da versão escura anterior (substituída)

## Decisões

A foto e a apresentação substituem a cena 3D na abertura. Os componentes antigos de Three.js permanecem no repositório, mas não são importados pela página e não integram a experiência publicada. Não há dependência de WebGL nem animação contínua. Transições de hover são desativadas por `prefers-reduced-motion`.

## Conteúdo e proveniência

- Perfil e fotografia: https://joao-juvino.github.io/Portifolio/ . A imagem era aplicada como background no CSS, em `img/eu-1.jpeg`.
- Retrato local: `public/media/joao-santos.jpeg`, 806 × 1280 px, 68.532 bytes. Original preservado, sem geração ou alteração de rosto. Adequado ao quadro de até 430 px no desktop. Uma atualização é opcional: substituir esse mesmo arquivo por JPEG vertical de pelo menos 1200 × 1600 px, mantendo cabeça e ombros com margem.
- PiiCheck: https://github.com/joao-juvino/piicheck . README confirma Flask, Celery, Redis, Docker, autenticação JWT e documentação Swagger. Ilustração recuperada de `img/portfolio/piicheck.jpg`; não é screenshot nem demonstração de reconhecimento facial. A página identifica explicitamente que é uma ilustração e descreve somente análise de texto. Derivada WebP otimizada em `public/media/piicheck.webp`, 30.982 bytes.
- Juvino Store API: https://github.com/joao-juvino/juvinostore . README confirma NestJS, Drizzle, PostgreSQL, Docker, OAuth Shopify, webhooks e pedidos. A marca Shopify veio de `img/portfolio/shopify.png`; não representa tela do sistema, cliente ou parceria.
- Flappy Batman: https://joao-juvino.github.io/FlappyBataman/ . HTML do jogo referencia CSS e JavaScript próprios. A captura é a publicada em `img/portfolio/flappybatman.png`. Não se afirma que os itens secundários do menu funcionam.
- Arquivo: portfólio original e https://joao-juvino.github.io/SPA_Portifolio/ . A SPA é apresentada apenas como experimento anterior.
- Blog: https://blognodejs-a41d.onrender.com/ . Não respondeu em 20 segundos na checagem final; mantido no arquivo com aviso de disponibilidade instável.

Os cinco links principais acima responderam HTTP 200. Não há idade, nascimento, contagem de anos, disponibilidade profissional, métricas, clientes ou vínculo profissional não confirmado.

## Verificação

- `pnpm build`: compilação, TypeScript e exportação estática concluídos.
- Produção servida localmente em http://127.0.0.1:3001 . Essa revisão não publica nem faz push para o GitHub.
- Revisão visual das seções em desktop 1440 × 1000 e celular 390 × 844; checagem adicional de largura de 320 px. Sem elementos ultrapassando a largura da página nas verificações DOM.
- Todas as quatro imagens carregadas; todas as âncoras internas têm alvo válido; navegação para projetos, sobre, contato e retorno ao início testada.
- Nenhum erro de console observado na produção. Sem canvas ativo.
- Não houve ensaio em aparelho físico, medição de FPS, Lighthouse ou simulação de conexão lenta. Não se atribuem notas de desempenho. Fontes externas continuam usando `display=swap` e fallback de sistema; a tipografia pode variar se o Google Fonts estiver bloqueado.
- Capturas entregues separadamente por viewport: a captura longa automática do navegador apresentou emendas/duplicações, portanto não foi usada como evidência visual final.

## Confirmações pessoais pendentes

1. Situação atual da graduação em Ciência da Computação na UFCG.
2. Se `joao.pedro.santos@ccc.ufcg.edu.br` e `https://www.linkedin.com/in/joao-juvino` ainda são seus canais profissionais preferidos.

Nenhuma nova fotografia é obrigatória para concluir esta versão.
