const Arrow = () => <span aria-hidden="true">↗</span>;

const skills = [
  ["Backend", "Java · Spring Boot · APIs REST · Flask · Node.js"],
  ["Frontend", "Next.js · React · TypeScript · Tailwind CSS · Angular (interesse)"],
  ["Dados", "PostgreSQL · SQLAlchemy · Drizzle ORM · MongoDB"],
  ["Cloud & DevOps", "Docker · AWS · CI/CD · Ansible · automação de deploy"],
];

const secondaryProjects = [
  {
    title: "Portfólio anterior",
    type: "Website pessoal",
    href: "https://joao-juvino.github.io/Portifolio/",
  },
  {
    title: "SPA Portfólio",
    type: "Experimento front-end",
    href: "https://joao-juvino.github.io/SPA_Portifolio/",
  },
  {
    title: "Blog Node.js",
    type: "Demo hospedada · disponibilidade instável",
    href: "https://blognodejs-a41d.onrender.com/",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir para o início">
          <span className="brand-mark">JS</span>
          <span>JOÃO SANTOS</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#competencias">Competências</a>
        </nav>
        <a className="header-cta" href="#contato">Contato <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orbit" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy">
          <p className="eyebrow"><span /> Fullstack developer · Campina Grande, PB</p>
          <h1>Construo produtos<br />digitais <em>de ponta<br />a ponta.</em></h1>
          <div className="hero-bottom">
            <p>
              Do backend à interface, da infraestrutura ao deploy. Soluções web com
              arquitetura clara, integrações confiáveis e foco no que precisa funcionar.
            </p>
            <a className="primary-button" href="#projetos">Explorar projetos <Arrow /></a>
          </div>
        </div>
        <div className="hero-index" aria-hidden="true">01<span>/05</span></div>
        <div className="scroll-note" aria-hidden="true">ROLE PARA EXPLORAR <span>↓</span></div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <p className="kicker">Trabalho selecionado</p>
          <h2>Projetos que mostram<br /><em>como eu construo.</em></h2>
          <p className="section-number">02 — 05</p>
        </div>

        <article className="feature-card blue-card">
          <div className="project-meta"><span>01</span><span>API · PROCESSAMENTO ASSÍNCRONO</span></div>
          <div className="project-copy">
            <p className="project-label">PROJETO EM DESTAQUE</p>
            <h3>PiiCheck</h3>
            <p>
              API para detectar dados pessoais em arquivos de texto. O processamento acontece em
              segundo plano com fila de tarefas, autenticação JWT, rate limiting e documentação Swagger.
            </p>
            <div className="tags"><span>Flask</span><span>Celery</span><span>Redis</span><span>Docker</span></div>
            <a href="https://github.com/joao-juvino/piicheck" target="_blank" rel="noreferrer">
              Ver repositório <Arrow />
            </a>
          </div>
          <div className="code-visual" aria-hidden="true">
            <div className="window-bar"><b /><b /><b /><span>scan_service.py</span></div>
            <pre><code><span className="code-purple">@task</span>{"\n"}<span className="code-blue">def</span> process_scan(text):{"\n"}  entities = detector.scan(text){"\n"}  <span className="code-blue">return</span> sanitize(entities){"\n\n"}<span className="code-comment"># queued → processed → ready</span></code></pre>
            <div className="status-chip"><span /> SCAN COMPLETO</div>
          </div>
        </article>

        <div className="project-grid">
          <article className="feature-card chrome-card">
            <div className="project-meta"><span>02</span><span>COMÉRCIO · INTEGRAÇÃO</span></div>
            <div className="project-copy">
              <h3>Juvino Store API</h3>
              <p>
                Backend para integrar uma loja Shopify: autenticação, registro de webhooks e gerenciamento
                de pedidos, com banco relacional e ambiente conteinerizado.
              </p>
              <div className="tags"><span>NestJS</span><span>Drizzle ORM</span><span>PostgreSQL</span><span>Docker</span></div>
              <a href="https://github.com/joao-juvino/juvinostore" target="_blank" rel="noreferrer">Ver repositório <Arrow /></a>
            </div>
            <div className="store-visual" aria-hidden="true"><span>shopify/webhooks</span><strong>ORDER<br />FLOW</strong><i>200 OK</i></div>
          </article>

          <article className="feature-card game-card">
            <div className="project-meta"><span>03</span><span>JOGO · FRONT-END</span></div>
            <div className="game-screen" aria-hidden="true"><div className="moon" /><div className="bat">◆</div><span>FLAPPY<br />BATMAN</span></div>
            <div className="project-copy">
              <h3>Flappy Batman</h3>
              <p>Jogo web inspirado na mecânica de Flappy Bird, com menu, seleção de personagens e experiência interativa no navegador.</p>
              <a href="https://joao-juvino.github.io/FlappyBataman/" target="_blank" rel="noreferrer">Abrir projeto <Arrow /></a>
            </div>
          </article>
        </div>

        <div className="archive">
          <p className="kicker">Arquivo / experimentos anteriores</p>
          {secondaryProjects.map((project, index) => (
            <a href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <span>0{index + 4}</span><strong>{project.title}</strong><small>{project.type}</small><Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-statement">
          <p className="kicker">Sobre mim</p>
          <h2>Engenharia para transformar<br />complexidade em <em>produto.</em></h2>
        </div>
        <div className="about-grid">
          <p className="about-lead">
            Sou João Santos, desenvolvedor fullstack e estudante de Ciência da Computação na UFCG.
            Trabalho conectando regras de negócio, APIs, dados, interfaces e infraestrutura.
          </p>
          <div>
            <p>
              Minha experiência inclui desenvolvimento de APIs REST, interfaces responsivas, automação de
              deploys e serviços em nuvem. Gosto de atuar perto do problema, colaborar com o time e deixar o
              caminho de entrega mais simples e confiável.
            </p>
            <p className="note"><span>!</span> Situação acadêmica e tempo de experiência precisam de confirmação antes da publicação.</p>
          </div>
        </div>
        <div className="principles">
          <span>01 <b>Arquitetura clara</b></span><span>02 <b>Entrega contínua</b></span><span>03 <b>Experiência útil</b></span>
        </div>
      </section>

      <section className="skills section" id="competencias">
        <div className="section-heading compact">
          <p className="kicker">Competências</p>
          <h2>Ferramentas para<br /><em>entregar o todo.</em></h2>
          <p className="section-number">04 — 05</p>
        </div>
        <div className="skill-list">
          {skills.map(([title, items], index) => (
            <div className="skill-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{items}</p></div>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <p className="kicker">Vamos conversar</p>
        <h2>Tem um problema real<br />para <em>resolver?</em></h2>
        <p className="contact-copy">Estou aberto a conversar sobre desenvolvimento fullstack, APIs, integrações e infraestrutura de produtos web.</p>
        <div className="contact-actions">
          <a className="primary-button" href="mailto:joao.pedro.santos@ccc.ufcg.edu.br">Enviar e-mail <Arrow /></a>
          <a href="https://www.linkedin.com/in/joao-juvino" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/joao-juvino" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
        <p className="note contact-note"><span>!</span> Confirme se o e-mail institucional e o status de disponibilidade continuam atuais.</p>
        <footer><span>© {new Date().getFullYear()} João Santos</span><span>Campina Grande — PB</span><a href="#inicio">Voltar ao topo ↑</a></footer>
      </section>
    </main>
  );
}
