import { ArrowDownRight } from "lucide-react";
import { HeroAnchors } from "../hero/hero-anchors";
import { HeroIllustration } from "../hero/hero-illustration";
import { ButtonLink } from "../ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-noise" />
      <div className="hero-content">
        <div className="hero-copy">
          <p className="hero-kicker">Rafael Pinheiro</p>
          <h1>Eu uso IA como parte de um processo de engenharia, não como atalho.</h1>
          <p className="hero-subtitle">
            Transformo contexto em especificação, especificação em testes, e
            testes em software que dá para confiar.
          </p>
          <p className="hero-description">
            Desenvolvedor full-stack com foco em TypeScript, React, Next.js e
            Node.js. Crio aplicações web combinando produto, arquitetura, testes
            e IA estruturada.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#cases">
              Ver cases <ArrowDownRight size={18} />
            </ButtonLink>
            <ButtonLink href="#processo" variant="secondary">
              Conhecer processo
            </ButtonLink>
          </div>
        </div>
        <HeroIllustration />
      </div>
      <HeroAnchors />
    </section>
  );
}
