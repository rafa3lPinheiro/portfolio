import Image from "next/image";
import heroRafael from "../../../public/hero-rafael.png";

export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[clamp(16px,4vw,44px)] bottom-0 left-[clamp(16px,4vw,44px)] z-10 flex justify-center opacity-90 xl:right-0 xl:left-0 xl:mx-auto xl:w-full xl:max-w-[1380px] xl:justify-end xl:opacity-100"
    >
      <div className="w-full max-w-[340px] origin-bottom translate-y-4 scale-[1.9] md:mx-auto md:max-w-[420px] md:translate-y-0 md:scale-100 min-[640px]:max-w-[460px] min-[900px]:max-w-[580px] xl:mr-0 xl:ml-auto xl:w-[min(60vw,980px)] xl:max-w-none xl:self-end">
        <Image
          alt=""
          className="block h-auto max-h-[30svh] w-full select-none object-contain object-[center_bottom] md:max-h-[32svh] min-[640px]:max-h-[33svh] min-[900px]:max-h-[37svh] xl:max-h-[calc(100svh-20px)] xl:object-[right_bottom] xl:[transform:translateX(8%)]"
          priority
          sizes="(max-width: 639px) 340px, (max-width: 899px) 460px, (max-width: 1199px) 580px, 60vw"
          src={heroRafael}
        />
      </div>
    </div>
  );
}
