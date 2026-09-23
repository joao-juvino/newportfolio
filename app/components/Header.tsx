"use client";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
const links = [
  ["Projetos", "projetos"],
  ["Sobre", "sobre"],
  ["Competências", "competencias"],
  ["Contato", "contato"],
];
export function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="João Santos, início">
      <span className="monogram">JS</span>
      <span className="brand-copy">
        João Santos<small>Engenheiro de Software</small>
      </span>
    </a>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className="site-header container-shell" id="inicio">
      <Brand />
      <nav className="desktop-nav" aria-label="Navegação principal">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <a className="button header-cta" href="#contato">
        Vamos conversar <Icon name="arrow" />
      </a>
      <button
        ref={button}
        className="menu-toggle"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegação móvel"
        hidden={!open}
      >
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
            {label}
            <Icon name="arrow" />
          </a>
        ))}
      </nav>
    </header>
  );
}
