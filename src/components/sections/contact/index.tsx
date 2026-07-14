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
      <h2 className="text-5xl leading-[1.05] font-bold text-[var(--text)]">
        Vamos conversar
      </h2>
      <p className="mx-auto mt-[18px] max-w-[620px] text-base leading-[1.8] text-[var(--muted)]">
        Se a forma como eu penso, construo e resolvo problemas faz sentido para
        o que você procura, vamos falar sobre o seu projeto.
      </p>
      <div className="mt-[30px] flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
        <ButtonLink
          href={`mailto:${socialLinks.email}`}
          variant="secondary"
          className="min-w-[220px] border-[var(--line-strong)] bg-[var(--surface-2)] px-7 text-[var(--text)] hover:border-[var(--accent)] hover:bg-[var(--surface-3)]"
        >
          Entrar em contato <Mail size={18} />
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
