import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../../content/navigation";

const socialIconClassName =
  "inline-flex items-center justify-center text-[rgba(255,233,228,0.92)] transition-colors duration-300 hover:text-[#140f17]";

type HeroSocialLinksProps = {
  variant: "inline" | "rail";
};

export function HeroSocialLinks({ variant }: HeroSocialLinksProps) {
  const containerClassName =
    variant === "rail"
      ? "absolute top-1/2 left-[clamp(24px,3vw,56px)] z-30 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      : "mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-6 xl:hidden";

  return (
    <div aria-label="Links rápidos" className={containerClassName}>
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
  );
}
