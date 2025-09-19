"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import FullscreenModal from './FullscreenModal'; // Adjust path as needed

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const fallbackImages = [
    { imageUrl: "/images/office1.jpg" },
    { imageUrl: "/images/Thiet-ke-chua-co-ten-7.jpg" },
    { imageUrl: "/images/Thiet-ke-chua-co-ten-7.jpg" }
];

export default function OfficePictures({ data }) {
    const [fullscreen, setFullscreen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = data?.images?.length ? data.images : fallbackImages;

    // Transform images for modal compatibility
    const modalImages = images.map((img, idx) => ({
        url: img.imageUrl || img,
        alt: `Văn phòng ${idx + 1}`
    }));

    const openFullscreen = (index) => {
        setCurrentImageIndex(index);
        setFullscreen(true);
    };

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % modalImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + modalImages.length) % modalImages.length);
    };

    return (
        <section className="pt-12">
            <div className="w-full mx-auto text-center">
                <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
                    HOẠT ĐỘNG
                </h2>

                <div className="relative px-4">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            // Mobile (default): 1 slide
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 8,
                            },
                            // Tablet: 2 slides
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 12,
                            },
                            // Desktop: 3 slides
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 16,
                            },
                            // Large screens: 4 slides
                        }}
                        className="office-pictures-swiper"
                    >
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <div
                                    className="overflow-hidden gallery-reveal h-80 md:h-96 cursor-pointer"
                                    onClick={() => openFullscreen(idx)}
                                >
                                    <Image
                                        width={300}
                                        height={400}
                                        src={img.imageUrl || img}
                                        alt={`Văn phòng ${idx + 1}`}
                                        className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons */}
                    <div className="swiper-button-prev after:text-white after:text-2xl after:font-bold hover:after:text-gray-300 transition-colors"></div>
                    <div className="swiper-button-next after:text-white after:text-2xl after:font-bold hover:after:text-gray-300 transition-colors"></div>
                </div>

                {/* Fullscreen Modal */}
                <FullscreenModal
                    isOpen={fullscreen}
                    onClose={() => setFullscreen(false)}
                    images={modalImages}
                    currentIndex={currentImageIndex}
                    onNext={nextImage}
                    onPrev={prevImage}
                    showControls={true}
                    showCounter={true}
                />

                {/* Custom Styles */}
                <style jsx global>{`
                    .office-pictures-swiper .swiper-pagination {
                        bottom: -50px !important;
                    }

                    .office-pictures-swiper .swiper-pagination-bullet {
                        background: rgba(255, 255, 255, 0.5);
                        width: 12px;
                        height: 12px;
                        margin: 0 6px;
                    }

                    .office-pictures-swiper .swiper-pagination-bullet-active {
                        background: white;
                    }

                    .swiper-button-prev,
                    .swiper-button-next {
                        color: white;
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        margin-top: -25px;
                    }

                    .swiper-button-prev::after,
                    .swiper-button-next::after {
                        font-size: 20px;
                        font-weight: bold;
                    }

                    @media (max-width: 768px) {
                        .swiper-button-prev,
                        .swiper-button-next {
                            width: 40px;
                            height: 40px;
                            margin-top: -20px;
                        }

                        .swiper-button-prev::after,
                        .swiper-button-next::after {
                            font-size: 16px;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}