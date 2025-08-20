"use client";

import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Banner({title, images = []}) {
    const bannerRef = useRef(null);
    const [parallax, setParallax] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [imageErrors, setImageErrors] = useState({});

    const fallbackSlides = [
        { id: 1, image: "/images/slide1.jpg", alt: "1" },
        { id: 2, image: "/images/slide2.jpg", alt: "2" },
        { id: 3, image: "/images/slide3.jpg", alt: "3" },
        { id: 4, image: "/images/slide4.jpg", alt: "4" },
        { id: 5, image: "/images/slide5.jpg", alt: "5" },
        { id: 6, image: "/images/slide6.jpg", alt: "6" },
    ];

    const cmsSlides = Array.isArray(images) && images.length
        ? images.map((img, idx) => ({
            id: idx + 1,
            image: img?.url || '',
            alt: img?.alt || String(idx + 1),
        }))
        : [];

    const slides = cmsSlides.length ? cmsSlides : fallbackSlides;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    // Parallax scroll handler
    const handleScroll = useCallback(
        debounce(() => {
            if (bannerRef.current) {
                const rect = bannerRef.current.getBoundingClientRect();
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                setParallax(rate);
            }
        }, 10),
        []
    );

    // Auto-slide effect
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    // Parallax scroll effect
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const handleImageError = useCallback((slideId) => {
        setImageErrors(prev => ({ ...prev, [slideId]: true }));
    }, []);

    return (
        <div className="bg-[#272727] text-center">
            <div
                ref={bannerRef}
                className="h-[80vh] w-full relative overflow-hidden flex items-center justify-center"
                style={{ perspective: "1px" }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                            index === currentSlide
                                ? "translate-x-0 z-10"
                                : index < currentSlide
                                    ? "-translate-x-full z-0"
                                    : "translate-x-full z-0"
                        }`}
                    >
                        <div
                            className="h-full w-full relative"
                            style={
                                index === currentSlide
                                    ? {
                                        transform: `translateY(${parallax * 0.4}px)`,
                                        willChange: "transform",
                                    }
                                    : {}
                            }
                        >
                            {imageErrors[slide.id] ? (
                                <div className="h-full w-full bg-gray-600 flex items-center justify-center">
                                    <span className="text-white">Image not found</span>
                                </div>
                            ) : (
                                <Image
                                    src={slide.image}
                                    alt={slide.alt}
                                    fill
                                    priority={index === 0}
                                    quality={80}
                                    sizes="(max-width: 768px) 100vw, 1200px"
                                    className="object-cover"
                                    onError={() => handleImageError(slide.id)}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <h2 className="text-white font-extrabold text-3xl my-12 p-4 border-2 border-white inline-block">
                {title}
            </h2>
        </div>
    );
}
