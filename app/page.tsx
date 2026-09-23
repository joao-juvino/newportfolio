import Image from "next/image";
import Header, { Brand } from "./components/Header";
import Icon, { type IconName } from "./components/Icon";
import Reveal, { HeroTitle } from "./components/Reveal";
import ProjectVisual from "./components/ProjectVisual";

const skills: { title: string; icon: IconName; items: string }[] = [
  { title: "Frontend", icon: "code", items: "React, Next.js, TypeScript" },
  {
    title: "Backend",
    icon: "server",
    items: "Java, Spring Boot, Python, Flask, NestJS",
  },
  {
    title: "Bancos de dados",
    icon: "database",
    items: "PostgreSQL, Redis, Drizzle ORM",
  },
  {
    title: "Cloud e DevOps",
    icon: "cloud",
    items: "Docker, AWS, automação de deploy",
  },
  { title: "Ferramentas", icon: "tools", items: "Git, GitHub, Swagger" },
];
const projects = [
  {
    name: "PiiCheck",
    subtitle: "Detecção de dados pessoais em texto",
    description:
      "API para identificar dados pessoais em arquivos de texto, com autenticação JWT e processamento assíncrono em fila.",
    tags: ["Python / Flask", "Celery", "Redis", "Docker"],
    href: "https://github.com/joao-juvino/piicheck",
    kind: "pii" as const,
    icon: "shield" as const,
  },
  {
    name: "Juvino Store API",
    subtitle: "Backend e integrações com Shopify",
    description:
      "Integração com Shopify por OAuth e webhooks, com gerenciamento de pedidos e persistência em banco relacional.",
    tags: ["NestJS", "Drizzle ORM", "PostgreSQL", "Docker"],
    href: "https://github.com/joao-juvino/juvinostore",
    kind: "store" as const,
    icon: "cart" as const,
  },
];
const contacts = {
  email: "mailto:joao.pedro.santos@ccc.ufcg.edu.br",
  github: "https://github.com/joao-juvino",
  linkedin: "https://www.linkedin.com/in/joao-juvino",
};
function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href={contacts.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn de João Santos"
      >
        <Icon name="linkedin" />
      </a>
      <a
        href={contacts.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub de João Santos"
      >
        <Icon name="github" />
      </a>
      <a href={contacts.email} aria-label="Enviar e-mail a João Santos">
        <Icon name="mail" />
      </a>
    </div>
  );
}
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <section className="hero container-shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow">Ideias em soluções reais</p>
            </Reveal>
            <HeroTitle />
            <Reveal delay={0.24}>
              <p className="hero-role">Engenheiro de Software Fullstack</p>
              <p className="hero-description">
                Conecto interfaces, APIs e infraestrutura para transformar
                ideias em produtos digitais confiáveis e escaláveis.
              </p>
            </Reveal>
            <Reveal
              delay={0.38}
              className="hero-actions flex flex-wrap items-center gap-3"
            >
              <a className="button" href="#projetos">
                Ver meus projetos <Icon name="arrow" />
              </a>
              <a className="button button-outline" href="#contato">
                <Icon name="mail" /> Falar comigo
              </a>
            </Reveal>
          </div>
          <Reveal className="hero-art" delay={0.2}>
            <div className="portrait-oval" aria-hidden="true" />
            <div className="portrait-mask">
              <Image
                className="hero-portrait"
                src="/media/joao-santos-cutout.webp"
                alt="João Santos, usando óculos e camisa azul clara"
                width={1122}
                height={1402}
                preload
                unoptimized
              />
            </div>
            <div className="signature" aria-hidden="true">
              João
              <br />
              <span>Santos</span>
              <i />
            </div>
            <div className="floating-card">
              <div className="card-kicker">
                <span /> Desenvolvedor
                <br />
                fullstack
              </div>
              <p>
                Interfaces
                <br />
                APIs
                <br />
                Infraestrutura
                <br />
                Integrações
              </p>
            </div>
            <div className="hero-note" aria-hidden="true">
              Tecnologia para pessoas.
              <br />
              Do código à experiência.
              <span />
            </div>
            <span className="decor-cross" aria-hidden="true">
              +
            </span>
          </Reveal>
        </section>
        <section
          className="projects container-shell"
          id="projetos"
          aria-labelledby="projects-title"
        >
          <Reveal className="section-top">
            <h2 className="eyebrow" id="projects-title">
              Projetos em destaque
            </h2>
            <a className="inline-link" href="#mais-projetos">
              Mais projetos <Icon name="arrow" />
            </a>
          </Reveal>
          <div className="featured-grid grid grid-cols-1 xl:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.name} delay={index * 0.1}>
                <article className="project-card">
                  <div className="project-copy">
                    <div className="project-heading">
                      <span className={`project-icon ${project.kind}`}>
                        <Icon name={project.icon} />
                      </span>
                      <div>
                        <h3>{project.name}</h3>
                        <p>{project.subtitle}</p>
                      </div>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <ul
                      className="tags flex flex-wrap gap-2"
                      aria-label="Tecnologias"
                    >
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                    <a
                      className="inline-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ver repositório <Icon name="arrow" />
                    </a>
                  </div>
                  <ProjectVisual kind={project.kind} />
                </article>
              </Reveal>
            ))}
          </div>
          <div className="more-projects" id="mais-projetos">
            <Reveal>
              <article className="game-card">
                <a
                  className="game-preview"
                  href="https://joao-juvino.github.io/FlappyBataman/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Abrir Flappy Batman"
                >
                  <Image
                    src="/media/flappybatman.png"
                    alt="Menu real do jogo Flappy Batman"
                    width={1366}
                    height={667}
                    unoptimized
                  />
                </a>
                <div>
                  <p className="small-label">Experimento interativo</p>
                  <h3>Flappy Batman</h3>
                  <p>
                    Um jogo no navegador inspirado em Flappy Bird, construído
                    com HTML, CSS e JavaScript.
                  </p>
                  <a
                    className="inline-link"
                    href="https://joao-juvino.github.io/FlappyBataman/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir jogo <Icon name="arrow" />
                  </a>
                </div>
              </article>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="archive">
                <p className="small-label">Arquivo de experimentos</p>
                <a
                  href="https://joao-juvino.github.io/Portifolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfólio original <Icon name="arrow" />
                </a>
                <a
                  href="https://joao-juvino.github.io/SPA_Portifolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  SPA Portfólio <Icon name="arrow" />
                </a>
                <a
                  href="https://blognodejs-a41d.onrender.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>
                    Blog Node.js <small>Disponibilidade da demo instável</small>
                  </span>
                  <Icon name="arrow" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
        <div className="profile-grid container-shell">
          <section className="about" id="sobre" aria-labelledby="about-title">
            <Reveal>
              <p className="eyebrow">Sobre mim</p>
              <h2 id="about-title">
                Curioso por natureza,
                <br />
                movido por impacto.
              </h2>
              <p>
                Sou João Santos, desenvolvedor fullstack em Campina Grande.
                Minha atuação conecta interfaces, APIs, dados e infraestrutura
                para construir aplicações web de ponta a ponta.
              </p>
              <p>
                Meu percurso inclui desenvolvimento de APIs REST, DevOps,
                serviços em nuvem e automação de deploy, trabalhando com métodos
                ágeis.
              </p>
              <div className="about-details">
                <span>
                  <Icon name="pin" /> Campina Grande, PB
                </span>
                <span>
                  <Icon name="education" /> Ciência da Computação · UFCG
                </span>
              </div>
              <p className="verification-note">
                Situação acadêmica informada no portfólio anterior; atualização
                pendente.
              </p>
              <a
                className="button button-outline button-small"
                href={contacts.github}
                target="_blank"
                rel="noreferrer"
              >
                Conheça meu código <Icon name="arrow" />
              </a>
            </Reveal>
          </section>
          <section
            className="skills"
            id="competencias"
            aria-labelledby="skills-title"
          >
            <Reveal>
              <h2 className="eyebrow" id="skills-title">
                Competências
              </h2>
            </Reveal>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <Reveal key={skill.title} delay={index * 0.06}>
                  <div className="skill-item">
                    <span className="skill-icon">
                      <Icon name={skill.icon} />
                    </span>
                    <div>
                      <h3>{skill.title}</h3>
                      <p>{skill.items}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="learning-note">
              <span>Em perspectiva</span> Interesse em Angular.
            </p>
          </section>
          <section
            className="contact"
            id="contato"
            aria-labelledby="contact-title"
          >
            <Reveal>
              <p className="eyebrow">Contato</p>
              <h2 id="contact-title">
                Vamos construir
                <br />
                algo incrível juntos?
              </h2>
              <p>
                Tem uma ideia, um projeto ou quer conversar sobre tecnologia?
                Vamos nos conectar.
              </p>
              <a className="button contact-button" href={contacts.email}>
                <Icon name="mail" /> Enviar e-mail <Icon name="arrow" />
              </a>
              <SocialLinks />
              <p className="verification-note">
                E-mail institucional do portfólio anterior; confirmação
                pendente.
              </p>
            </Reveal>
          </section>
        </div>
      </main>
      <footer className="site-footer">
        <div className="container-shell">
          <Brand />
          <p>Conectando ideias através da tecnologia.</p>
          <a href="#inicio">
            Voltar ao início <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}
