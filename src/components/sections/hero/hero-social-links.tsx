import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../../../content/navigation";

const socialIconClassName =
  "inline-flex min-h-11 min-w-11 items-center justify-center touch-manipulation text-[rgba(255,233,228,0.92)] transition-[color,transform] duration-300 hover:-translate-y-0.5 hover:scale-105 hover:text-[#fff7f1] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none";

type HeroSocialLinksProps = {
  variant: "inline" | "rail";
};

export function HeroSocialLinks({ variant }: HeroSocialLinksProps) {
  const containerClassName =
    variant === "rail"
      ? "absolute top-1/2 left-[clamp(24px,3vw,56px)] z-30 hidden -translate-y-1/2 flex-col items-center gap-5 xl:flex"
      : "mx-auto mt-5 flex w-full max-w-[220px] items-center justify-center gap-6 xl:hidden";

  return (
    <nav data-hero-social aria-label="Links sociais" className={containerClassName}>
        <Link
          href={socialLinks.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className={socialIconClassName}
        >
          <Github aria-hidden="true" size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={socialLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className={socialIconClassName}
        >
          <Linkedin aria-hidden="true" size={18} strokeWidth={1.8} />
        </Link>
        <Link
          href={`mailto:${socialLinks.email}`}
          aria-label="Email"
          className={socialIconClassName}
        >
          <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
        </Link>
    </nav>
  );
}
