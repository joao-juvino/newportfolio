import Image from "next/image";
import { testimonials } from "../data/portfolio";
import Reveal from "./Reveal";
export default function Testimonials() {
  return (
    <section
      className="testimonials-section"
      aria-labelledby="testimonials-title"
    >
      <div className="section-grid container-shell">
        <Reveal className="section-intro">
          <p className="eyebrow">O que dizem sobre meu trabalho</p>
          <h2 id="testimonials-title">
            Feedbacks
            <br />
            que me motivam.
          </h2>
          <p>
            Pessoas com quem trabalhei e que compartilharam um pouco da
            experiência de ter colaborado comigo.
          </p>
        </Reveal>
        <div className="testimonials-grid">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <article className="testimonial-card">
                <div className="testimonial-person">
                  <Image
                    className="testimonial-avatar"
                    src={item.photo}
                    alt={`Foto de ${item.name}`}
                    width={96}
                    height={96}
                    sizes="48px"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>
                <p className="testimonial-context">{item.context}</p>
                <blockquote className="testimonial-excerpt">
                  “{item.excerpt}”
                </blockquote>
                <details>
                  <summary>
                    <span className="label-closed">
                      Ver recomendação completa
                    </span>
                    <span className="label-open">Recolher recomendação</span>
                  </summary>
                  <blockquote>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </blockquote>
                </details>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
