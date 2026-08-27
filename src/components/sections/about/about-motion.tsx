"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type AboutMotionProps = {
  children: ReactNode;
};

export function AboutMotion({ children }: AboutMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-about-motion]", { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "[data-about-content]",
            start: "top 80%",
            once: true,
          },
          defaults: { ease: "power2.out" },
        });

        timeline
          .from("[data-about-image]", { opacity: 0, x: -24, duration: 0.7 })
          .from(
            "[data-about-content] > *",
            { opacity: 0, y: 14, duration: 0.45, stagger: 0.08 },
            "-=0.45",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents" data-about-motion>
      {children}
    </div>
  );
}
