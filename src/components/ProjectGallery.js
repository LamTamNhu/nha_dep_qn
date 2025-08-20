'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

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
                    <ChevronLeft  size={50}/>
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
                        onClick={() => setCurrent(idx)}
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

            {/* Fullscreen modal */}
            {fullscreen && (
                <div
                    className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
                    onClick={() => setFullscreen(false)}
                >
                    <button
                        className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                        onClick={() => setFullscreen(false)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            prev();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <Image
                        src={images[current].url}
                        alt={images[current].alt || 'fullscreen'}
                        width={1200}
                        height={800}
                        className="object-contain max-h-[90vh] max-w-[90vw]"
                    />

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            next();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-1 rounded-full text-sm">
                        {current + 1} / {images.length}
                    </div>
                </div>
            )}
        </div>
    );
}
