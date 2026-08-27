"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ContactMotionProps = {
  children: ReactNode;
};

export function ContactMotion({ children }: ContactMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-contact-motion]", { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-contact-motion] > *", {
          opacity: 0,
          y: 14,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-contact-motion]",
            start: "top 84%",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents" data-contact-motion>
      {children}
    </div>
  );
}
