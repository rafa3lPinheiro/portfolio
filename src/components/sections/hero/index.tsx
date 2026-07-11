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

      <div className="relative z-20 mx-auto flex h-[calc(100svh-96px)] max-w-[1380px] flex-col items-center pt-8 pb-0 md:h-[calc(100svh-104px)] md:pt-10 min-[900px]:justify-start min-[900px]:pt-10 xl:h-[calc(100svh-112px)] xl:flex-row xl:items-center xl:justify-start xl:pt-[clamp(48px,7vw,104px)] xl:pb-[clamp(24px,4vw,40px)]">
        <div className="relative z-20 max-w-[clamp(320px,88vw,700px)] px-0 text-center md:mx-auto md:max-w-[620px] min-[900px]:max-w-[760px] xl:mx-0 xl:max-w-[720px] xl:pl-[clamp(40px,6vw,124px)] xl:pr-4 xl:text-left">
          <h1 className="m-0 flex max-w-[clamp(320px,86vw,760px)] flex-col text-[clamp(4rem,13vw,8.9rem)] leading-[0.78] font-black tracking-[0] text-center [word-spacing:0.08em] md:max-w-[620px] md:text-[clamp(4.6rem,12vw,6.4rem)] min-[900px]:max-w-[760px] min-[900px]:text-[clamp(5.4rem,10vw,7.4rem)] xl:max-w-[820px] xl:text-left xl:text-[clamp(5.6rem,8.8vw,9.4rem)]">
            <span className="mb-1 block text-[#fff3ef] md:mb-3">Rafael</span>
            <span className="block text-[#17070b] [text-shadow:0_1px_0_rgba(0,0,0,0.12)]">
              Pinheiro
            </span>
          </h1>

          <div className="mt-4 flex max-w-none justify-center md:mt-5 min-[900px]:mt-3 xl:mt-1 xl:max-w-[660px] xl:justify-end">
            <p className="m-0 text-[clamp(0.95rem,1.5vw,1.16rem)] font-medium tracking-[0.04em] text-[#fff1eb] lowercase md:text-[1.05rem] min-[900px]:text-[1.08rem] xl:text-[1.12rem]">
              Desenvolvedor Full Stack
            </p>
          </div>

          <HeroSocialLinks />
          <HeroHighlights />
        </div>

        <HeroIllustration />
      </div>
    </section>
  );
}
