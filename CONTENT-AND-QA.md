# Portfólio — redesign de 25 de setembro de 2026

## Direção e fontes

- Referência: imagem `ChatGPT Image 25 de set. de 2026, 15_28_05.png` e instruções completas fornecidas pelo usuário. Página longa: hero, ObraSync, dois projetos complementares, experiência, competências, apresentação, recomendações e rodapé.
- Identidade branca e azul, Manrope/Inter, retrato original sobre oval claro. Não há WebGL, rosto gerado, métricas inventadas ou tema incompleto.
- Retrato existente preservado: `public/media/joao-santos-cutout.webp`, 1122 × 1402. Sem alteração das proporções ou identidade.
- Experiência, competências, formação e recomendações: dados expressamente fornecidos pelo usuário em 25/09/2026. Não foi inferida conclusão do curso nem significado do ano 2021.
- PDF original: `João Currículo j.pdf`, na pasta indicada pelo usuário. Copiado sem alteração para `public/curriculo-joao-santos.pdf`; SHA-256 de origem e destino idêntico. Conferido por extração e renderização da página. E-mail atualizado a partir desse documento. Sem nascimento ou idade no site.
- LinkedIn e GitHub preservados dos contatos existentes.

## Projetos verificados

- [ObraSync](https://github.com/joao-juvino/ObraSync): README e árvore pública confirmam Java, Jakarta EE, JSF/PrimeFaces, JAX-RS, JPA, PostgreSQL e Docker. Gestão/vistoria de obras, evidências e relatórios. O diretório de screenshots contém somente instruções; não há captura real nem demo pública publicada. A apresentação usa um diagrama de arquitetura explicitamente identificado, não um dashboard fictício. “Ver projeto” abre a documentação; “Ver código” abre o repositório.
- [Companages](https://github.com/joao-juvino/companages): aplicação fullstack para organizar empresas e equipes em workspaces privados. README, árvore e linguagens confirmam Angular 22, Java 17/Spring Boot 3, PostgreSQL 17, Flyway e Docker. Como o repositório não publica captura da interface, a apresentação usa um modelo de domínio explicitamente identificado.
- [PiiCheck](https://github.com/joao-juvino/piicheck): Python/Flask, tarefas Celery, Redis, Docker. Representação do fluxo técnico, sem atribuir FastAPI ou uma interface inexistente.
- Projetos legados removidos da página conforme a solicitação de apresentar somente estes três. Cinco imagens antigas sem uso removidas; recuperáveis no Git.

## Arquitetura e compatibilidade

- Next.js 16.3.5, React 19.3, TypeScript, Tailwind 4.3.3 e Motion existentes preservados. Nenhuma dependência adicionada ao projeto.
- Componentes por seção em `app/components`; conteúdo profissional centralizado em `app/data/portfolio.ts`; tokens e breakpoints em `app/globals.css`.
- `output: export`, `trailingSlash: true`, imagens locais sem otimizador de servidor, `public/.nojekyll`. Workflow GitHub Pages existente preservado para a raiz `https://joao-juvino.github.io/`.
- Conteúdo renderizado no servidor, acessível sem animações. Motion usa `useReducedMotion`; CSS respeita `prefers-reduced-motion`. Menu com Escape, foco e fechamento ao navegar. Recomendações completas em `details`, funcionais sem JavaScript.

## Verificação

- Build otimizado, TypeScript e export estático aprovados.
- `scripts/check-export.mjs`: 22 âncoras, imagens locais, textos alternativos, três projetos, dois depoimentos completos, PDF, marcador Pages e proteção de movimento reduzido.
- Revisão visual no navegador da pasta `out`, incluindo desktop e celular; cartão do retrato reposicionado no mobile para não cobrir o rosto.
- PDF do site é byte a byte igual ao original fornecido.
- Links dos quatro repositórios e do perfil GitHub: HTTP 200. PDF local: HTTP 200. LinkedIn preservado, mas recusou a checagem automatizada HEAD (405).
- Console do navegador sem erros/avisos durante a revisão. Menu móvel abre e fecha ao navegar; recomendação completa expande corretamente. Larguras 1440, 820, 390 e 320 px sem overflow horizontal.
- Validação em viewport simulada, não em aparelho físico. Não foi realizado benchmark de desempenho nem emulação da preferência do sistema; as proteções de movimento reduzido foram verificadas no código e no teste estático.

## Pendências opcionais de fidelidade visual

- Captura real do ObraSync e do Companages (idealmente 1600 × 1000 ou maior) e URLs de demonstração, se houver. Até lá, permanecem os diagramas técnicos e os links para documentação.
- A formação aparece sem situação de conclusão ou data. Informar esses detalhes somente se desejar exibi-los.

Não houve publicação, push ou alteração de conta externa nesta tarefa.
