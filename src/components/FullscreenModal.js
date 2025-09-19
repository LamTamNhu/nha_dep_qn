'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function FullscreenModal({
                                            isOpen,
                                            onClose,
                                            images = [],
                                            currentIndex = 0,
                                            onNext,
                                            onPrev,
                                            showControls = true,
                                            showCounter = true
                                        }) {
    if (!isOpen || !images.length) return null;

    const currentImage = images[currentIndex];

    return (
        <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            onClick={onClose}
        >
            {/* Close button */}
            <button
                className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black/70 transition"
                onClick={onClose}
            >
                <X className="w-6 h-6" />
            </button>

            {/* Navigation controls */}
            {showControls && images.length > 1 && (
                <>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev?.();
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext?.();
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 bg-black/50 rounded-full hover:bg-black/70 transition"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>
                </>
            )}

            {/* Main image */}
            <Image
                src={currentImage.url}
                alt={currentImage.alt || 'fullscreen'}
                width={1200}
                height={800}
                className="object-contain max-h-[90vh] max-w-[90vw]"
            />

            {/* Counter */}
            {showCounter && images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/60 px-3 py-1 rounded-full text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
}