import Image from "next/image";
import heroRafael from "../../../public/hero-rafael.png";

export function HeroIllustration() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[380px] w-[min(72vw,360px)] justify-self-center self-end opacity-90 md:min-h-[700px] md:w-[min(48vw,700px)] md:max-h-[calc(100svh-96px)] md:justify-self-end md:items-end md:opacity-100"
    >
      <Image
        alt=""
        className="block h-auto max-h-full w-full self-end object-contain object-[right_bottom] [transform:translateX(2%)] select-none"
        priority
        sizes="(max-width: 920px) 72vw, 48vw"
        src={heroRafael}
      />
    </div>
  );
}
