'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Thumbs, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';

export default function ProjectGallery({images = []}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!images.length) return null;

    const openFullscreen = (img, index) => {
        setFullscreenImage(img);
        setCurrentImageIndex(index);
    };

    const closeFullscreen = () => {
        setFullscreenImage(null);
    };

    const navigateNext = () => {
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
        setFullscreenImage(images[nextIndex]);
    };

    const navigatePrev = () => {
        const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(prevIndex);
        setFullscreenImage(images[prevIndex]);
    };

    return (
        <div>
            <Swiper
                modules={[Thumbs, Navigation]}
                thumbs={{swiper: thumbsSwiper}}
                spaceBetween={10}
                navigation
                className="mb-4"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="relative w-full h-150 cursor-pointer"
                            onClick={() => openFullscreen(img, idx)}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt || `image-${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={`thumb-${idx}`} className="relative !w-40 !h-40">
                        <div
                            className="cursor-pointer w-full h-full"
                            onClick={() => openFullscreen(img, idx)}
                        >
                            <Image
                                src={img.url}
                                alt={img.alt || `thumb-${idx}`}
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Fullscreen Overlay */}
            {fullscreenImage && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
                    onClick={closeFullscreen}
                >
                    {/* Previous Arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigatePrev();
                        }}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-7xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-opacity z-10"
                        aria-label="Previous image"
                    >
                        ‹
                    </button>

                    {/* Next Arrow */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateNext();
                        }}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-7xl bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-70 transition-opacity z-10"
                        aria-label="Next image"
                    >
                        ›
                    </button>

                    <div className="relative max-w-full max-h-full">
                        <Image
                            src={fullscreenImage.url}
                            alt={fullscreenImage.alt || 'Fullscreen image'}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="max-w-full max-h-screen w-auto h-auto object-contain"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                        />
                        {/* Close button */}
                        <button
                            onClick={closeFullscreen}
                            className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-opacity"
                            aria-label="Close fullscreen"
                        >
                            ×
                        </button>

                        {/* Image counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}