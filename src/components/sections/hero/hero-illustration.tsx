import Image from "next/image";
import heroRafael from "../../../public/hero-rafael.png";

export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-auto flex w-full justify-center pt-10 opacity-90 md:pt-12 min-[900px]:pt-6 xl:absolute xl:right-0 xl:bottom-0 xl:left-0 xl:z-10 xl:mx-auto xl:w-full xl:max-w-[1380px] xl:justify-end xl:pt-0 xl:opacity-100"
    >
      <div className="w-full max-w-[340px] origin-bottom md:mx-auto md:max-w-[420px] min-[640px]:max-w-[460px] min-[900px]:max-w-[580px] xl:mr-0 xl:ml-auto xl:w-[min(60vw,980px)] xl:max-w-none xl:self-end">
        <Image
          alt=""
          className="block h-auto max-h-[30svh] w-full select-none object-contain object-[center_bottom] md:max-h-[32svh] min-[640px]:max-h-[33svh] min-[900px]:max-h-[37svh] xl:max-h-[calc(100svh-20px)] xl:object-[right_bottom] xl:[transform:translateX(1.5%)]"
          priority
          sizes="(max-width: 639px) 340px, (max-width: 899px) 460px, (max-width: 1199px) 580px, 60vw"
          src={heroRafael}
        />
      </div>
    </div>
  );
}
