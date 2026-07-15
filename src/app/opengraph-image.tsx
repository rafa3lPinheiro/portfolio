import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import {
  socialImageAlt,
  socialImageContentType,
  SocialImageCard,
  socialImageSize,
} from "./social-image";

export const alt = socialImageAlt;
export const size = socialImageSize;
export const contentType = socialImageContentType;

async function getHeroDataUrl() {
  const heroPath = join(process.cwd(), "src", "public", "hero-rafael.png");
  const heroBuffer = await readFile(heroPath);

  return `data:image/png;base64,${heroBuffer.toString("base64")}`;
}

export default async function OpenGraphImage() {
  const heroSrc = await getHeroDataUrl();

  return new ImageResponse(<SocialImageCard heroSrc={heroSrc} />, {
    ...socialImageSize,
  });
}
