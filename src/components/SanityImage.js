"use client";

import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/sanity/lib/client";

export default function SanityImage({ image, alt, ...props }) {
  const imageProps = useNextSanityImage(client, image);
  if (!imageProps) return null;

  const { width, height, ...restImageProps } = imageProps;
  const hasFill = !!props.fill;
  const safeImageProps = hasFill ? restImageProps : imageProps;

  const sizes = props.sizes ?? "(min-width: 768px) 50vw, 100vw";
  const placeholder = props.placeholder ?? (imageProps.blurDataURL ? "blur" : "empty");

  return (
    <Image
      {...safeImageProps}
      alt={alt}
      sizes={sizes}
      placeholder={placeholder}
      {...props}
    />
  );
}

