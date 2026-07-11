import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../../content/navigation";

const socialIconClassName =
  "inline-flex items-center justify-center text-[rgba(255,233,228,0.92)] transition-colors duration-300 hover:text-[#140f17]";

export function HeroSocialLinks() {
  return (
    <>
      <div
        aria-label="Links rápidos"
        className="absolute top-1/2 left-[clamp(12px,1.8vw,24px)] z-20 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      >
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={socialIconClassName}
        >
          <Github size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={socialIconClassName}
        >
          <Linkedin size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={`mailto:${socialLinks.email}`}
          aria-label="Email"
          className={socialIconClassName}
        >
          <Mail size={18} strokeWidth={1.8} />
        </Link>
      </div>

      <div
        aria-label="Links rápidos"
        className="mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-6 xl:hidden"
      >
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={socialIconClassName}
        >
          <Github size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={socialIconClassName}
        >
          <Linkedin size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={`mailto:${socialLinks.email}`}
          aria-label="Email"
          className={socialIconClassName}
        >
          <Mail size={18} strokeWidth={1.8} />
        </Link>
      </div>
    </>
  );
}
