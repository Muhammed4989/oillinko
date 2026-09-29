import NextImage, { type ImageProps } from "next/image";

/** Keep each image's accessible description and native mouse tooltip together. */
export default function SiteImage({ alt, title, ...props }: ImageProps) {
  return <NextImage {...props} alt={alt} title={title ?? alt} />;
}
