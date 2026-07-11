import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../../content/navigation";

const socialIconClassName =
  "inline-flex items-center justify-center text-[rgba(255,233,228,0.9)] transition duration-150 hover:translate-x-[2px] hover:text-white";

export function HeroSocialLinks() {
  return (
    <div
      aria-label="Links rápidos"
      className="absolute top-1/2 left-[clamp(20px,3vw,34px)] z-20 hidden -translate-y-1/2 flex-col items-center gap-[22px] md:flex"
    >
      <Link
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className={socialIconClassName}
      >
        <Github size={18} />
      </Link>
      <Link
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className={socialIconClassName}
      >
        <Linkedin size={18} />
      </Link>
      <Link
        href={`mailto:${socialLinks.email}`}
        aria-label="Email"
        className={socialIconClassName}
      >
        <Mail size={18} />
      </Link>
    </div>
  );
}
