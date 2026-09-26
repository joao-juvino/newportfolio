import { technologies } from "../data/portfolio";
import Icon from "./Icon";
import Reveal from "./Reveal";
export default function Technologies() {
  return (
    <section
      id="competencias"
      className="section-grid container-shell technologies-section"
      aria-labelledby="technology-title"
    >
      <Reveal className="section-intro">
        <p className="eyebrow">Tecnologias</p>
        <h2 id="technology-title">
          Tecnologias
          <br />
          que uso no dia a dia.
        </h2>
        <p>
          Ferramentas e tecnologias que me ajudam a construir soluções robustas,
          escaláveis e de alto impacto.
        </p>
      </Reveal>
      <div className="technology-grid">
        {technologies.map((item, index) => (
          <Reveal key={item.title} delay={(index % 3) * 0.06}>
            <article className="info-card technology-card">
              <span className="icon-tile">
                <Icon name={item.icon} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.items}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
