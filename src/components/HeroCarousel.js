import * as React from "react";
import {useEffect, useRef, useState} from "react";

const slideTransitions = [
    // Puff in center
    (index, current) =>
        index === current ? "puff-in-center" : "opacity-0 pointer-events-none z-0",

    // Fade in center
    (index, current) =>
        index === current ? "fade-in" : "opacity-0 pointer-events-none z-0",

    (index, current) =>
        index === current
            ? "jello-horizontal"
            : "opacity-0 pointer-events-none z-0",

    (index, current) =>
        index === current
            ? "wobble-hor-bottom"
            : "opacity-0 pointer-events-none z-0",

    (index, current) =>
        index === current ? "bounce-top" : "opacity-0 pointer-events-none z-0",

    (index, current) =>
        index === current ? "kenburns-top" : "opacity-0 pointer-events-none z-0",

    // Scale in horizontal center
    (index, current) =>
        index === current
            ? "scale-in-hor-center"
            : "opacity-0 pointer-events-none z-0",

    // Scale in horizontal left
    (index, current) =>
        index === current
            ? "scale-in-hor-left "
            : "opacity-0 pointer-events-none z-0",
];

function getRandomTransition() {
    return slideTransitions[Math.floor(Math.random() * slideTransitions.length)];
}

export default function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [parallax, setParallax] = useState(0);
    const bannerRef = useRef(null);
    const [currentTransitionIndex, setCurrentTransitionIndex] = useState(0);
    const slides = [
        {
            id: 1,
            image: "/images/wide_shot.jpg",
            alt: "wide shot",
        },
        {
            id: 2,
            image: "/images/wide_hands.jpg",
            alt: "wide hands",
        },
        {
            id: 3,
            image: "/images/group_walking.jpg",
            alt: "group shot",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setCurrentTransitionIndex(
            Math.floor(Math.random() * slideTransitions.length)
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        setCurrentTransitionIndex(
            Math.floor(Math.random() * slideTransitions.length)
        );
    };

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 3500);
        return () => clearInterval(timer);
    }, []);
    const getCurrentTransition = () => slideTransitions[currentTransitionIndex];

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            if (!bannerRef.current) return;
            const rect = bannerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Only apply parallax when banner is in view
            if (rect.top < windowHeight && rect.bottom > 0) {
                // Adjust the multiplier for stronger/weaker effect
                setParallax(window.scrollY * 0.3);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            ref={bannerRef}
            className="h-screen w-full relative overflow-hidden flex items-center justify-center video-container"
            style={{perspective: "1px"}}
        >
            <iframe
                src="https://www.youtube.com/embed/NoWyNgAQe34?si=VUk_ZT_5lKwmeLG6&amp;controls=0&autoplay=1&mute=1&loop=1&color=white&modestbranding=0&rel=0&playinline=1&enablejsapi=1&playlist=NoWyNgAQe34"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                className="w-screen h-full pointer-events-none"/>
            {/*{slides.map((slide, index) => {*/}
            {/*    const currentTransition = getCurrentTransition();*/}
            {/*    return (*/}
            {/*        <div*/}
            {/*            key={slide.id}*/}
            {/*            className={`absolute inset-0 ${currentTransition(*/}
            {/*                index,*/}
            {/*                currentSlide*/}
            {/*            )}`}*/}
            {/*        >*/}
            {/*            <div*/}
            {/*                className="h-full w-full relative"*/}
            {/*                style={*/}
            {/*                    index === currentSlide*/}
            {/*                        ? {*/}
            {/*                            transform: `translateY(${parallax * 0.4}px)`,*/}
            {/*                            willChange: "transform",*/}
            {/*                        }*/}
            {/*                        : {}*/}
            {/*                }*/}
            {/*            >*/}
            {/*                <Image*/}
            {/*                    src={slide.image || "/globe.svg"}*/}
            {/*                    alt={slide.alt}*/}
            {/*                    fill*/}
            {/*                    priority={index === 0}*/}
            {/*                    quality={90}*/}
            {/*                    sizes="100vw"*/}
            {/*                    className="object-cover"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    );*/}
            {/*})}*/}
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-20"/>
            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 ">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 fade-in hover:text-orange-400 transition-colors duration-500">
                    Kiến tạo không gian sống hiện đại
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-200 hover:text-orange-300 transition-colors duration-300">
                    Thiết kế & Thi công nội thất chuyên nghiệp tại Quảng Nam
                </p>
            </div>
        </div>

    )
}