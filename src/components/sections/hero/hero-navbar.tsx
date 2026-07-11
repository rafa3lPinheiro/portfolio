import Link from "next/link";
import { navigationLinks } from "../../../content/navigation";

export function HeroNavbar() {
  return (
    <nav
      aria-label="Navegação principal"
      className="relative z-20 mx-auto flex max-w-[1240px] flex-wrap justify-center gap-x-[18px] gap-y-[14px] md:justify-end md:gap-[clamp(18px,2.6vw,34px)]"
    >
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          className="py-2 text-[0.95rem] leading-none font-medium text-[rgba(255,241,236,0.94)] transition-opacity duration-150 hover:opacity-80"
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
