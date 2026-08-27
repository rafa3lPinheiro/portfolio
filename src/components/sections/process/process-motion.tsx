"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type ProcessMotionProps = {
  children: ReactNode;
};

export function ProcessMotion({ children }: ProcessMotionProps) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-process-motion]", { clearProps: "all" });
      });

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "[data-process-timeline]",
            start: "top 78%",
            once: true,
          },
          defaults: { ease: "power2.out" },
        });

        timeline
          .from("[data-process-step]", {
            opacity: 0,
            y: 16,
            duration: 0.5,
            stagger: 0.12,
          })
          .from(
            "[data-process-line]",
            {
              scaleX: 0,
              transformOrigin: "left center",
              duration: 0.8,
            },
            "-=0.55",
          );
      });

      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="contents" data-process-motion>
      {children}
    </div>
  );
}
