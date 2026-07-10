import { navigationLinks } from "../../content/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Ir para o início">
        Rafael Pinheiro
      </a>
      <nav className="nav-links" aria-label="Navegação principal">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
