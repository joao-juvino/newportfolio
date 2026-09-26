import Image from "next/image";
import Icon, { type IconName } from "./Icon";
import Reveal, { HeroTitle } from "./Reveal";
import { contacts } from "../data/portfolio";
const highlights: { icon: IconName; title: string; detail: string }[] = [
  { icon: "tools", title: "3+ anos", detail: "de experiência" },
  { icon: "server", title: "Atuação real", detail: "em produção" },
  {
    icon: "architecture",
    title: "Tecnologias",
    detail: "modernas e escaláveis",
  },
  { icon: "shield", title: "Foco em", detail: "resultado" },
];
export default function Hero() {
  return (
    <section className="hero container-shell" aria-labelledby="hero-title">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Ideias em soluções reais</p>
          <HeroTitle />
          <Reveal delay={0.2}>
            <p className="hero-description">
              Engenheiro de Software com experiência em backend, APIs,
              integrações e sistemas distribuídos. Desenvolvendo soluções
              escaláveis, confiáveis e com impacto real.
            </p>
            <div className="button-row">
              <a className="button" href="#projetos">
                Ver meus projetos <Icon name="arrow" />
              </a>
              <a className="button button-outline" href={contacts.resume}>
                <Icon name="download" /> Ver meu currículo
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal className="portrait-composition" delay={0.25}>
          <div className="portrait-oval" aria-hidden="true" />
          <div className="portrait-mask">
            <Image
              className="portrait"
              src="/media/joao-santos-cutout.webp"
              alt="João Santos, de óculos e camisa azul"
              width={1122}
              height={1402}
              priority
              sizes="(max-width: 700px) 90vw, 480px"
            />
          </div>
          <span className="signature" aria-hidden="true">
            João
            <br />
            <span>Santos</span>
          </span>
          <div className="floating-card">
            <span className="status-dot" />
            <div>
              <strong>
                Desenvolvedor
                <br />
                Backend
              </strong>
              <ul>
                <li>APIs</li>
                <li>Integrações</li>
                <li>Sistemas distribuídos</li>
                <li>Infraestrutura</li>
                <li>Resultados</li>
              </ul>
            </div>
          </div>
          <p className="portrait-quote">
            “Tecnologia
            <br /> para pessoas,
            <br /> e não o contrário.”
          </p>
        </Reveal>
      </div>
      <div className="hero-highlights">
        {highlights.map((item) => (
          <div className="highlight" key={item.title}>
            <span className="icon-tile">
              <Icon name={item.icon} />
            </span>
            <span>
              <strong>{item.title}</strong>
              <small>{item.detail}</small>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
