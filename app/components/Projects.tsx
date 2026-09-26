import Icon, { type IconName } from "./Icon";
import Reveal from "./Reveal";
import ProjectVisual from "./ProjectVisual";
function ProjectLinks({ project, code }: { project: string; code: string }) {
  return (
    <div className="button-row project-links">
      <a className="button" href={project} target="_blank" rel="noreferrer">
        Ver projeto <Icon name="arrow" />
      </a>
      <a
        className="button button-outline"
        href={code}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" /> Ver código
      </a>
    </div>
  );
}
function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function ProjectName({
  name,
  icon,
  green = false,
}: {
  name: string;
  icon: IconName;
  green?: boolean;
}) {
  return (
    <div className="project-name">
      <span className={`project-icon ${green ? "green" : ""}`}>
        <Icon name={icon} />
      </span>
      <h3>{name}</h3>
    </div>
  );
}
export default function Projects() {
  return (
    <section
      id="projetos"
      className="projects-section"
      aria-label="Projetos selecionados"
    >
      <div className="container-shell">
        <Reveal>
          <h2 className="eyebrow">Projeto em destaque</h2>
        </Reveal>
        <Reveal>
          <article className="featured-project project-card">
            <div className="project-copy">
              <ProjectName name="ObraSync" icon="building" green />
              <p>
                Sistema web para gestão e vistoria de obras. Organiza o
                acompanhamento de processos, o registro de evidências e a
                geração de laudos para o setor da construção civil.
              </p>
              <Tags items={["Java", "PrimeFaces", "PostgreSQL", "Docker"]} />
              <ProjectLinks
                project="https://github.com/joao-juvino/ObraSync#readme"
                code="https://github.com/joao-juvino/ObraSync"
              />
              <small className="project-note">
                Documentação no GitHub · demonstração local
              </small>
            </div>
            <ProjectVisual kind="obrasync" />
          </article>
        </Reveal>
        <Reveal>
          <h2 className="eyebrow other-projects-label">Outros projetos</h2>
        </Reveal>
        <div className="secondary-projects">
          <Reveal>
            <article className="project-card secondary-project">
              <div className="project-copy">
                <ProjectName name="Companages" icon="architecture" />
                <p>
                  Aplicação fullstack para organizar empresas e equipes em
                  workspaces privados, com gestão de organizações, membros,
                  cargos e responsabilidades.
                </p>
                <Tags
                  items={[
                    "Angular",
                    "Java",
                    "Spring Boot",
                    "PostgreSQL",
                    "Docker",
                  ]}
                />
                <ProjectLinks
                  project="https://github.com/joao-juvino/companages#readme"
                  code="https://github.com/joao-juvino/companages"
                />
              </div>
              <ProjectVisual kind="companages" />
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="project-card secondary-project">
              <div className="project-copy">
                <ProjectName name="PiiCheck" icon="shield" green />
                <p>
                  API para análise de dados pessoais em textos, com
                  processamento assíncrono de tarefas, autenticação e
                  documentação de endpoints.
                </p>
                <Tags
                  items={["Python", "Flask", "Celery", "Redis", "Docker"]}
                />
                <ProjectLinks
                  project="https://github.com/joao-juvino/piicheck#readme"
                  code="https://github.com/joao-juvino/piicheck"
                />
              </div>
              <ProjectVisual kind="pii" />
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
