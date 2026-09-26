import { contacts, navigation } from "../data/portfolio";
import { Brand } from "./Header";
import Icon from "./Icon";
export default function Footer() {
  return (
    <footer id="contato" className="site-footer container-shell">
      <Brand />
      <nav aria-label="Navegação do rodapé">
        {navigation.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <div className="social-links">
        <a
          href={contacts.github}
          aria-label="GitHub de João Santos"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="github" />
        </a>
        <a
          href={contacts.linkedin}
          aria-label="LinkedIn de João Santos"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="linkedin" />
        </a>
        <a
          href={contacts.email}
          aria-label={`Escrever e-mail para ${contacts.emailAddress}`}
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="mail" />
        </a>
      </div>
      <small>
        © {new Date().getFullYear()} João Santos.
        <br />
        Todos os direitos reservados.
      </small>
    </footer>
  );
}
