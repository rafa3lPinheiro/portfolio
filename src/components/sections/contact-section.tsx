import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../content/navigation";
import { ButtonLink } from "../ui/button";

export function ContactSection() {
  return (
    <section id="contato" className="contact-section">
      <span className="eyebrow">Contato</span>
      <h2>Vamos conversar?</h2>
      <p>
        Gosto de trabalhar em produtos onde contexto, engenharia e execução
        precisam andar juntos. Se isso parece com o que você quer construir, me
        chama.
      </p>
      <div className="contact-actions">
        <ButtonLink href={`mailto:${socialLinks.email}`}>
          Entrar em contato <Mail size={18} />
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" aria-disabled="true">
          Ver currículo
        </ButtonLink>
      </div>
      <div className="footer-links">
        <a href={socialLinks.github} target="_blank" rel="noreferrer">
          <Github size={18} /> GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={`mailto:${socialLinks.email}`}>
          <Mail size={18} /> {socialLinks.email}
        </a>
      </div>
    </section>
  );
}
