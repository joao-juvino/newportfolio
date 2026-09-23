import Icon from "./Icon";
export default function ProjectVisual({ kind }: { kind: "pii" | "store" }) {
  if (kind === "pii")
    return (
      <figure
        className="technical-visual pii-visual"
        aria-label="Fluxo técnico do PiiCheck: texto enviado à API Flask, processado por Celery com Redis e disponibilizado para consulta"
      >
        <div className="visual-top">
          <span>
            <Icon name="shield" /> PiiCheck
          </span>
          <span className="mono">ASYNC API</span>
        </div>
        <div className="endpoint">
          <span>POST</span>
          <code>/pii/scan</code>
        </div>
        <div className="pipeline">
          <div>
            <Icon name="code" />
            <strong>Arquivo .txt</strong>
            <small>Entrada de texto</small>
          </div>
          <span className="flow-line" />
          <div>
            <Icon name="server" />
            <strong>Flask API</strong>
            <small>Autenticação JWT</small>
          </div>
          <span className="flow-line" />
          <div>
            <Icon name="database" />
            <strong>Celery + Redis</strong>
            <small>Processamento em fila</small>
          </div>
        </div>
        <figcaption>Arquitetura simplificada do projeto</figcaption>
      </figure>
    );
  return (
    <figure
      className="technical-visual store-visual"
      aria-label="Integração da Juvino Store API com Shopify por OAuth e webhooks, usando NestJS, Drizzle e PostgreSQL"
    >
      <div className="terminal-bar">
        <span>
          <i />
          <i />
          <i />
        </span>
        <span>integration.ts</span>
      </div>
      <div className="code-lines">
        <span className="code-comment">// Integração com Shopify</span>
        <br />
        <span className="code-purple">Shopify</span>
        <span className="code-muted"> → </span>
        <span className="code-green">OAuth</span>
        <br />
        <span className="code-purple">Webhooks</span>
        <span className="code-muted"> → </span>
        <span>NestJS</span>
        <br />
        <br />
        <span className="code-comment">// Persistência de dados</span>
        <br />
        <span>NestJS</span>
        <span className="code-muted"> → </span>
        <span className="code-green">Drizzle ORM</span>
        <br />
        <span className="code-muted"> ↓</span>
        <br />
        <span className="code-purple"> PostgreSQL</span>
      </div>
      <figcaption>Fluxo técnico · não é uma interface</figcaption>
    </figure>
  );
}
