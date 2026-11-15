import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { siteNavigation } from "@/lib/site-content";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Saltar para o conteúdo
      </a>
      <header className="site-header">
        <div className="page-frame header-inner">
          <Link className="wordmark" to="/" aria-label="ORXU — página inicial" onClick={closeMenu}>
            ORXU
            <span>TECNOLOGIA</span>
          </Link>

          <nav className="desktop-nav" aria-label="Navegação principal">
            {siteNavigation.map((item) => (
              <Link
                key={item.to}
                className="nav-link"
                to={item.to}
                activeProps={{ "data-status": "active" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link className="nav-cta" to="/contact">
              Vamos conversar <ArrowRight className="button-icon" aria-hidden="true" />
            </Link>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="navegacao-movel"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>

        <nav
          className="mobile-nav page-frame"
          id="navegacao-movel"
          aria-label="Navegação móvel"
          data-open={menuOpen}
          hidden={!menuOpen}
        >
          {siteNavigation.map((item) => (
            <Link
              key={item.to}
              className="nav-link"
              to={item.to}
              activeProps={{ "data-status": "active" }}
              activeOptions={{ exact: item.to === "/" }}
              aria-current={pathname === item.to ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" to="/contact" onClick={closeMenu}>
            Vamos conversar <ArrowRight className="button-icon" aria-hidden="true" />
          </Link>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="page-frame footer-main">
          <div className="footer-brand">
            <Link className="wordmark" to="/" aria-label="ORXU — página inicial">
              ORXU
              <span>TECNOLOGIA</span>
            </Link>
            <p className="footer-description">
              Desenvolvemos produtos digitais próprios e soluções tecnológicas para empresas e
              organizações.
            </p>
          </div>
          <div>
            <h2 className="footer-title">Explorar</h2>
            <nav className="footer-links" aria-label="Explorar o website">
              {siteNavigation.slice(1).map((item) => (
                <Link className="footer-link" key={item.to} to={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h2 className="footer-title">Contacto</h2>
            <div className="footer-links">
              <Link className="footer-link" to="/contact">
                Fale connosco <ArrowUpRight className="button-icon" aria-hidden="true" />
              </Link>
              <a className="footer-link" href="mailto:orxugroup@gmail.com">
                orxugroup@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="page-frame footer-bottom">
          <span>© {new Date().getFullYear()} ORXU. Todos os direitos reservados.</span>
          <span>Produtos próprios · Soluções tecnológicas</span>
        </div>
      </footer>
    </>
  );
}

export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading-row">
      <div>
        <span className="eyebrow">{label}</span>
        <h2 className="section-heading">{title}</h2>
      </div>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}

export function ContactCta({
  heading = "Tem uma ideia ou necessidade tecnológica?",
  buttonLabel = "Fale com a ORXU",
}: {
  heading?: string;
  buttonLabel?: string;
}) {
  return (
    <div className="page-frame cta-strip">
      <h2>{heading}</h2>
      <Link className="button-primary" to="/contact">
        {buttonLabel} <ArrowRight className="button-icon" aria-hidden="true" />
      </Link>
    </div>
  );
}