import Link from "next/link";
import { navigationLinks } from "../../content/navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="#hero" aria-label="Ir para o início">
        Rafael Pinheiro
      </Link>
      <nav className="nav-links" aria-label="Navegação principal">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
