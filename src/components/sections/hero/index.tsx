import { HeroHighlights } from "./hero-highlights";
import { HeroIllustration } from "./hero-illustration";
import { HeroNavbar } from "./hero-navbar";
import { HeroSocialLinks } from "./hero-social-links";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#730c1e] px-[clamp(18px,4vw,44px)] pb-[34px] pt-5 sm:pt-[26px]"
    >
      <HeroNavbar />
      <HeroSocialLinks />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-124px)] max-w-[1320px] grid-cols-1 items-center gap-0 pt-12 md:grid-cols-[minmax(0,0.82fr)_minmax(380px,1.08fr)] md:items-end md:pt-0">
        <div className="max-w-[700px] self-center px-0 text-center md:pr-[clamp(12px,1.4vw,20px)] md:pl-[clamp(58px,8vw,122px)] md:text-left">
          <h1 className="m-0 flex max-w-[760px] flex-col text-[clamp(3.2rem,15vw,5rem)] leading-[0.8] font-black tracking-[0] text-left [word-spacing:0.08em] md:text-[clamp(4.6rem,9.6vw,8.6rem)]">
            <span className="block text-[#fff3ef]">Rafael</span>
            <span className="block text-[#17070b] [text-shadow:0_1px_0_rgba(0,0,0,0.12)]">
              Pinheiro
            </span>
          </h1>

          <div className="mt-3 flex max-w-none justify-center md:mt-2 md:max-w-[540px] md:justify-end">
            <p className="m-0 text-[1rem] font-bold tracking-[0.01em] text-[#fff1eb] lowercase md:text-[clamp(1.05rem,1.5vw,1.55rem)]">
              desenvolvedor / full stack
            </p>
          </div>
        </div>

        <HeroIllustration />
      </div>

      <HeroHighlights />
    </section>
  );
}
