"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type StackMotionProps = {
  children: ReactNode;
};

export function StackMotion({ children }: StackMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-stack-motion]", { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-stack-group]", {
          opacity: 0,
          y: 18,
          duration: 0.55,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: "[data-stack-groups]",
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents" data-stack-motion>
      {children}
    </div>
  );
}
