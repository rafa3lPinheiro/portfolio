"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "../../../content/navigation";

export function HeroNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        aria-label="Navegação principal"
        data-hero-nav
        className="relative z-30 mx-auto flex max-w-[1240px] items-center justify-end"
      >
        <div className="hidden flex-wrap items-center justify-end gap-[clamp(18px,2.6vw,34px)] xl:flex">
          {navigationLinks.filter((link) => link.available).map((link) => (
            <Link
              key={link.href}
              className="group relative py-2 text-[0.95rem] leading-none font-medium text-[rgba(255,241,236,0.94)] transition-[color,transform] duration-300 hover:-translate-y-px hover:text-[#fff7f1] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#f4c6c8] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar navegação" : "Abrir navegação"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17] active:scale-[0.98] xl:hidden"
        >
          {open ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </nav>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Fechar navegação"
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] xl:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 flex h-svh w-[min(84vw,360px)] flex-col bg-[#730c1e] px-6 py-6 shadow-[-24px_0_80px_rgba(0,0,0,0.28)] xl:hidden">
            <div className="flex items-center justify-end">
              <button
                type="button"
                aria-label="Fechar navegação"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17] active:scale-[0.98]"
              >
                <X size={24} strokeWidth={2.2} />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {navigationLinks.filter((link) => link.available).map((link) => (
                <Link
                  key={link.href}
                  className="group relative text-[1.1rem] font-semibold text-[rgba(255,241,236,0.94)] transition-[color,transform] duration-300 hover:-translate-y-px hover:text-[#fff7f1] active:scale-[0.98] motion-reduce:transition-none motion-reduce:hover:transform-none after:absolute after:right-0 after:bottom-[-4px] after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#f4c6c8] after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none"
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
