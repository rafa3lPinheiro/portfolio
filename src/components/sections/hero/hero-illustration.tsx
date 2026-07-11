import Image from "next/image";
import heroRafael from "../../../public/hero-rafael.png";

export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="absolute right-[clamp(16px,4vw,44px)] bottom-0 left-[clamp(16px,4vw,44px)] z-10 flex opacity-90 lg:right-0 lg:left-0 lg:mx-auto lg:w-full lg:max-w-[1380px] lg:opacity-100"
    >
      <div className="w-full origin-bottom scale-[1.12] lg:ml-auto lg:mr-0 lg:w-[min(60vw,980px)] lg:scale-100 lg:self-end">
        <Image
          alt=""
          className="block h-auto w-full select-none object-contain object-[center_bottom] lg:max-h-[calc(100svh-20px)] lg:object-[right_bottom] lg:[transform:translateX(1.5%)]"
          priority
          sizes="(max-width: 1023px) calc((100vw - 2 * clamp(16px, 4vw, 44px)) * 1.08), 60vw"
          src={heroRafael}
        />
      </div>
    </div>
  );
}
