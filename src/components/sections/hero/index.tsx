import { HeroHighlights } from "./hero-highlights";
import { HeroIllustration } from "./hero-illustration";
import { HeroNavbar } from "./hero-navbar";
import { HeroSocialLinks } from "./hero-social-links";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-svh overflow-hidden bg-[#730c1e] px-[clamp(16px,4vw,44px)] pt-[clamp(16px,3vw,24px)]"
    >
      <HeroNavbar />

      <div className="relative z-20 mx-auto flex h-[calc(100svh-96px)] max-w-[1380px] flex-col items-center pt-8 pb-0 md:pt-12 lg:h-[calc(100svh-112px)] lg:flex-row lg:items-center lg:pt-[clamp(48px,7vw,104px)] lg:pb-[clamp(24px,4vw,40px)]">
        <div className="max-w-[clamp(320px,56vw,700px)] px-0 text-center md:mx-auto md:max-w-[clamp(420px,68vw,760px)] lg:mx-0 lg:max-w-[720px] lg:pl-[clamp(40px,6vw,124px)] lg:pr-4 lg:text-left">
          <h1 className="m-0 flex max-w-[clamp(320px,76vw,760px)] flex-col text-[clamp(4rem,13vw,8.9rem)] leading-[0.78] font-black tracking-[0] text-center [word-spacing:0.08em] lg:max-w-[820px] lg:text-left xl:text-[clamp(5.6rem,8.8vw,9.4rem)]">
            <span className="mb-1 block text-[#fff3ef] md:mb-3">Rafael</span>
            <span className="block text-[#17070b] [text-shadow:0_1px_0_rgba(0,0,0,0.12)]">
              Pinheiro
            </span>
          </h1>

          <div className="mt-4 flex max-w-none justify-center lg:mt-1 lg:max-w-[660px] lg:justify-end">
            <p className="m-0 text-[clamp(0.95rem,1.5vw,1.16rem)] font-medium tracking-[0.04em] text-[#fff1eb] lowercase lg:text-[1.12rem]">
              Desenvolvedor Full Stack
            </p>
          </div>

          <HeroSocialLinks />
          <HeroHighlights />
        </div>
      </div>

      <HeroIllustration />
    </section>
  );
}
