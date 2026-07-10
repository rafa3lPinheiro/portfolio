import { Github, Linkedin, Mail } from "lucide-react";
import { navigationLinks, socialLinks } from "../../content/navigation";
import { HeroAnchors } from "../hero/hero-anchors";
import { HeroIllustration } from "../hero/hero-illustration";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-noise" />
      <nav className="hero-nav" aria-label="Navegação principal">
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="hero-socials" aria-label="Links rápidos">
        <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${socialLinks.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <h1>
            <span className="hero-name-light">Rafael</span>
            <span className="hero-name-dark">Pinheiro</span>
          </h1>
          <div className="hero-role-wrap">
            <p className="hero-role">desenvolvedor / full stack</p>
          </div>
        </div>
        <HeroIllustration />
      </div>
      <HeroAnchors />
    </section>
  );
}
