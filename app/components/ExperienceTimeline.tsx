import { experience } from "../data/portfolio";
import Reveal from "./Reveal";
export default function ExperienceTimeline() {
  return (
    <section
      id="experiencia"
      className="section-grid container-shell experience-section"
      aria-labelledby="experience-title"
    >
      <Reveal className="section-intro">
        <p className="eyebrow">Experiência profissional</p>
        <h2 id="experience-title">
          Experiência
          <br />
          que gera valor.
        </h2>
        <p>
          Atuei no desenvolvimento de soluções backend, APIs, integrações e
          sistemas distribuídos, com foco em resultados reais e impacto no
          negócio.
        </p>
      </Reveal>
      <div className="timeline">
        {experience.map((job, index) => (
          <Reveal key={job.company} delay={index * 0.08}>
            <article className="timeline-item">
              <span className="company-mark" aria-hidden="true">
                {job.mark}
              </span>
              <div>
                <p className="job-period">{job.period}</p>
                <h3>{job.company}</h3>
                <p className="job-role">{job.role}</p>
                <ul>
                  {job.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
