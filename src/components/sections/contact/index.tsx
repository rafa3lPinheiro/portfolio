import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../../content/navigation";
import { ButtonLink } from "../../ui/button";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="mx-auto max-w-[1120px] border-t border-[var(--line)] px-[clamp(18px,4vw,40px)] pt-[72px] pb-[84px] text-center md:pt-[104px]"
    >
      <span className="text-[0.75rem] font-bold tracking-[0.2em] text-[#f4c6c8] uppercase">
        Contato
      </span>
      <h2 className="mt-3 text-[clamp(2.2rem,5vw,4.8rem)] leading-[1.05] font-bold text-[var(--text)]">
        Vamos conversar?
      </h2>
      <p className="mx-auto mt-[18px] max-w-[620px] text-base leading-[1.8] text-[var(--muted)]">
        Gosto de trabalhar em produtos onde contexto, engenharia e execução
        precisam andar juntos. Se isso parece com o que você quer construir, me
        chama.
      </p>
      <div className="mt-[30px] flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <ButtonLink href={`mailto:${socialLinks.email}`}>
          Entrar em contato <Mail size={18} />
        </ButtonLink>
        <ButtonLink href="#" variant="secondary" aria-disabled="true">
          Ver currículo
        </ButtonLink>
      </div>
      <div className="mt-[26px] flex flex-wrap items-center justify-center gap-5">
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[0.9rem] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
        >
          <Github size={18} /> GitHub
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-[0.9rem] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
        >
          <Linkedin size={18} /> LinkedIn
        </Link>
        <Link
          href={`mailto:${socialLinks.email}`}
          className="inline-flex items-center gap-2 text-[0.9rem] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
        >
          <Mail size={18} /> {socialLinks.email}
        </Link>
      </div>
    </section>
  );
}
