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
        className="relative z-30 mx-auto flex max-w-[1240px] items-center justify-end"
      >
        <div className="hidden flex-wrap items-center justify-end gap-[clamp(18px,2.6vw,34px)] lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              className="py-2 text-[0.95rem] leading-none font-medium text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17]"
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
          className="inline-flex h-11 w-11 items-center justify-center text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17] lg:hidden"
        >
          {open ? <X size={24} strokeWidth={2.2} /> : <Menu size={24} strokeWidth={2.2} />}
        </button>
      </nav>

      {open ? (
        <>
          <button
            type="button"
            aria-label="Fechar navegação"
            className="fixed inset-0 z-40 bg-[rgba(0,0,0,0.5)] lg:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-0 right-0 z-50 flex h-svh w-[min(84vw,360px)] flex-col bg-[#730c1e] px-6 py-6 shadow-[-24px_0_80px_rgba(0,0,0,0.28)] lg:hidden">
            <div className="flex items-center justify-end">
              <button
                type="button"
                aria-label="Fechar navegação"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17]"
              >
                <X size={24} strokeWidth={2.2} />
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-6">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-[1.1rem] font-semibold text-[rgba(255,241,236,0.94)] transition-colors duration-300 hover:text-[#140f17]"
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
