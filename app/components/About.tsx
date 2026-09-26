import { about } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
export default function About() {
  return (
    <section
      id="sobre"
      className="section-grid container-shell about-section"
      aria-labelledby="about-title"
    >
      <Reveal className="section-intro">
        <p className="eyebrow">Sobre mim</p>
        <h2 id="about-title">
          Curioso por natureza,
          <br />
          movido por impacto.
        </h2>
        <p>{about}</p>
        <span className="location">
          <Icon name="pin" /> Campina Grande — PB, Brasil
        </span>
      </Reveal>
      <div className="about-cards">
        <Reveal>
          <article className="info-card">
            <span className="icon-tile">
              <Icon name="education" />
            </span>
            <div>
              <h3>Educação</h3>
              <p>Bacharelado em Ciência da Computação</p>
              <p>Universidade Federal de Campina Grande — UFCG</p>
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.08}>
          <article className="info-card">
            <span className="icon-tile">
              <Icon name="globe" />
            </span>
            <div>
              <h3>Idiomas</h3>
              <p>Português: Nativo</p>
              <p>
                Inglês: Intermediário
                <br />
                Leitura e escrita técnica
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
