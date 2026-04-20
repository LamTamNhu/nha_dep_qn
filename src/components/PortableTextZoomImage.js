'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import FullscreenModal from '@/components/FullscreenModal';
import { urlFor } from '@/sanity/lib/image';

function getSanityImageDimensions(image) {
  const ref = image?.asset?._ref;
  if (!ref) return { width: 1600, height: 900 };

  const parts = ref.split('-');
  const dimensions = parts[2] || '';
  const [width, height] = dimensions.split('x').map(Number);

  if (!Number.isFinite(width) || !Number.isFinite(height)) {
    return { width: 1600, height: 900 };
  }

  return { width, height };
}

export default function PortableTextZoomImage({ value, fallbackAlt }) {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = useMemo(() => getSanityImageDimensions(value), [value]);

  const inlineUrl = useMemo(
    () => urlFor(value).fit('max').auto('format').quality(100).url(),
    [value]
  );

  const fullSizeUrl = useMemo(() => urlFor(value).url(), [value]);

  const images = useMemo(
    () => [
      {
        url: fullSizeUrl,
        alt: value?.alt || fallbackAlt || 'image',
      },
    ],
    [fallbackAlt, fullSizeUrl, value?.alt]
  );

  return (
    <>
      <button
        type="button"
        className="w-full my-4 block cursor-zoom-in"
        onClick={() => setIsOpen(true)}
        aria-label="Open full size image"
      >
        <Image
          src={inlineUrl}
          alt={value?.alt || fallbackAlt || 'image'}
          width={width}
          height={height}
          className="w-full h-auto"
        />
      </button>

      <FullscreenModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        images={images}
        currentIndex={0}
        showControls={false}
        showCounter={false}
      />
    </>
  );
}
