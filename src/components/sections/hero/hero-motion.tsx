"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type HeroMotionProps = {
  children: ReactNode;
};

export function HeroMotion({ children }: HeroMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero-motion]", { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        timeline
          .from("[data-hero-nav]", { opacity: 0, y: -12, duration: 0.5 })
          .from(
            "[data-hero-title]",
            { opacity: 0, y: 24, duration: 0.6 },
            "-=0.2",
          )
          .from(
            "[data-hero-subtitle]",
            { opacity: 0, y: 14, duration: 0.45 },
            "-=0.24",
          )
          .from(
            "[data-hero-social]",
            { opacity: 0, y: 12, duration: 0.4 },
            "-=0.2",
          )
          .from(
            "[data-hero-highlights]",
            { opacity: 0, y: 12, duration: 0.4 },
            "-=0.18",
          )
          .from(
            "[data-hero-illustration]",
            { opacity: 0, y: 28, duration: 1.1 },
            "-=0.4",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents">
      {children}
    </div>
  );
}
