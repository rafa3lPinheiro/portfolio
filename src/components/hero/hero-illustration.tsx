import Image from "next/image";
import heroRafael from "../../public/hero-rafael.png";

export function HeroIllustration() {
  return (
    <div className="hero-portrait" aria-hidden="true">
      <Image
        alt=""
        className="hero-portrait-image"
        priority
        sizes="(max-width: 920px) 72vw, 36vw"
        src={heroRafael}
      />
    </div>
  );
}
