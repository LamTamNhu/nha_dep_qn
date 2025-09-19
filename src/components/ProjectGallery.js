'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FullscreenModal from './FullscreenModal'; // Adjust path as needed

export default function ProjectGallery({ images = [] }) {
    const [current, setCurrent] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    if (!images.length) return null;

    const next = () => setCurrent((current + 1) % images.length);
    const prev = () => setCurrent((current - 1 + images.length) % images.length);

    return (
        <div className="w-full">
            {/* Main image */}
            <div
                className="relative aspect-video overflow-hidden cursor-pointer rounded-lg"
                onClick={() => setFullscreen(true)}
            >
                <Image
                    src={images[current].url}
                    alt={images[current].alt || `image-${current}`}
                    fill
                    className="object-cover"
                />

                {/* Prev button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        prev();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
                >
                    <ChevronLeft size={50}/>
                </button>

                {/* Next button */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        next();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full"
                >
                    <ChevronRight size={50}/>
                </button>
            </div>

            {/* Thumbnails row */}
            <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className={`relative flex-shrink-0 aspect-square w-40 cursor-pointer border-2 overflow-hidden ${
                            idx === current ? 'border-orange-500' : 'border-transparent'
                        }`}
                        onClick={() => {
                            setCurrent(idx);
                            setFullscreen(true);
                        }}
                    >
                        <Image
                            src={img.url}
                            alt={img.alt || `thumb-${idx}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Reusable Fullscreen Modal */}
            <FullscreenModal
                isOpen={fullscreen}
                onClose={() => setFullscreen(false)}
                images={images}
                currentIndex={current}
                onNext={next}
                onPrev={prev}
                showControls={true}
                showCounter={true}
            />
        </div>
    );
}