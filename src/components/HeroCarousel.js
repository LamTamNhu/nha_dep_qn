import * as React from "react";
import { useRef } from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function HeroCarousel(counterContent) {

    const bannerRef = useRef(null);
    return (
        <div
            ref={bannerRef}
            className="h-screen w-full relative overflow-hidden flex items-center justify-center video-container"
            style={{ perspective: "1px" }}
        >
            {/* Background Video */}
            <iframe
                src="https://www.youtube.com/embed/NoWyNgAQe34?si=VUk_ZT_5lKwmeLG6&amp;controls=0&autoplay=1&mute=1&loop=1&color=white&modestbranding=0&rel=0&playinline=1&enablejsapi=1&playlist=NoWyNgAQe34"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-screen h-full pointer-events-none"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-20" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 fade-in hover:text-orange-400 transition-colors duration-500">
                    Kiến tạo không gian sống hiện đại
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-200 hover:text-orange-300 transition-colors duration-300">
                    Thiết kế & Thi công nội thất chuyên nghiệp tại Quảng Nam
                </p>
            </div>

            {/* Counters */}
            <div className="absolute bottom-0 mx-auto px-4 z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-[1fr_2px_1fr_2px_1fr_2px_1fr] justify-center gap-6 border-2 border-black rounded-t-4xl p-8 bg-white">
                        <div/>
                        <div/>
                        {!counterContent?<AnimatedCounter end={counterContent[0].number} duration={3000} text={counterContent[0].text}/>:
                            <AnimatedCounter end={10} duration={3000} text="Năm kinh nghiệm"/> }

                        <div className="bg-black"/>
                        {!counterContent?<AnimatedCounter end={counterContent[1].number} duration={3000} text={counterContent[1].text}/>:
                            <AnimatedCounter end={1000} duration={3000} text="Khách hàng thân thiết"/> }

                    </div>
                </div>
            </div>
        </div>
    );
}
