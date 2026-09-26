import Icon from "./Icon";
/** Technical diagrams, not fabricated screenshots. */
export default function ProjectVisual({
  kind,
}: {
  kind: "obrasync" | "companages" | "pii";
}) {
  if (kind === "pii")
    return (
      <div
        className="pii-diagram"
        aria-label="Fluxo técnico simplificado do PiiCheck"
      >
        <div className="diagram-brand">
          <Icon name="shield" /> PiiCheck
        </div>
        <strong>
          Dados pessoais.
          <br />
          Um fluxo de análise.
        </strong>
        <div className="flow-node">Texto recebido</div>
        <span className="flow-line" />
        <div className="flow-node blue-node">API Flask</div>
        <span className="flow-line" />
        <div className="flow-node">Celery + Redis</div>
        <span className="flow-line" />
        <div className="flow-result">
          <Icon name="shield" /> Resultado da análise
        </div>
        <small>Fluxo técnico simplificado</small>
      </div>
    );
  if (kind === "companages")
    return (
      <div
        className="company-diagram"
        aria-label="Modelo de domínio simplificado do Companages"
      >
        <div className="diagram-brand">
          <Icon name="architecture" /> Companages
        </div>
        <strong>
          Empresas e equipes
          <br /> em um único workspace.
        </strong>
        <div className="company-domain">
          <div className="flow-node blue-node">
            <Icon name="building" /> <span>Organizações</span>
          </div>
          <div className="company-domain-row">
            <div className="flow-node">Membros</div>
            <div className="flow-node">Cargos</div>
          </div>
          <div className="flow-node assignment-node">
            <Icon name="architecture" /> <span>Associações</span>
          </div>
        </div>
        <div className="company-stack">
          <span>Angular</span><i />
          <span>Spring Boot</span><i />
          <span>PostgreSQL</span>
        </div>
        <small>Modelo de domínio simplificado</small>
      </div>
    );
  return (
    <div
      className="obra-diagram"
      aria-label="Arquitetura simplificada do ObraSync"
    >
      <aside className="diagram-sidebar">
        <span className="diagram-brand">
          <Icon name="building" /> ObraSync
        </span>
        <span className="sidebar-active">
          <Icon name="architecture" /> Arquitetura
        </span>
        <span>
          <Icon name="building" /> Obras e vistorias
        </span>
        <span>
          <Icon name="shield" /> Autenticação
        </span>
        <span>
          <Icon name="code" /> Relatórios PDF
        </span>
        <small>JAVA · JAKARTA EE</small>
      </aside>
      <div className="diagram-canvas">
        <div className="diagram-heading">
          <span>Do acompanhamento ao registro.</span>
          <small>MAPA DO SISTEMA</small>
        </div>
        <div className="diagram-inputs">
          <div className="flow-node">
            <Icon name="code" />
            <strong>Interface web</strong>
            <small>JSF · PrimeFaces</small>
          </div>
          <div className="flow-node">
            <Icon name="server" />
            <strong>API REST</strong>
            <small>JAX-RS · JWT</small>
          </div>
        </div>
        <div className="connector" />
        <div className="flow-node service-node">
          <Icon name="building" />
          <div>
            <strong>Serviços Java</strong>
            <small>Obras · vistorias · evidências</small>
          </div>
        </div>
        <span className="flow-line" />
        <div className="flow-node database-node">
          <Icon name="database" />
          <div>
            <strong>PostgreSQL</strong>
            <small>Persistência com JPA</small>
          </div>
        </div>
        <div className="diagram-caption">
          Arquitetura simplificada · não é uma captura de tela
        </div>
      </div>
    </div>
  );
}
