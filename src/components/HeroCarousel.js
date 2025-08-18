'use client';

import * as React from "react";
import AnimatedCounter from "@/components/AnimatedCounter";

// Utility để chuyển đổi URL YouTube thành embed link
function getYouTubeEmbedUrl(url) {
    if (!url) return null;
    const videoIdMatch = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/
    );
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?controls=0&autoplay=1&mute=1&loop=1&color=white&modestbranding=0&rel=0&playinline=1&enablejsapi=1&playlist=${videoIdMatch[1]}` : null;
}

export default function HeroCarousel({ data }) {
    const title = data?.bannerTitle?.title || "Kiến tạo không gian sống hiện đại";
    const description =
        data?.bannerTitle?.description ||
        "Thiết kế & Thi công nội thất chuyên nghiệp tại Quảng Nam";
    const videoUrl = getYouTubeEmbedUrl(data?.videoBanner?.url);
    const sale = data?.sale || [];

    return (
        <div
            className="h-screen w-full relative overflow-hidden flex items-center justify-center video-container"
            style={{ perspective: "1px" }}
        >
            {/* Background Video */}
            {videoUrl && (
                <iframe
                    src={videoUrl}
                    title={data?.videoBanner?.title || "Video giới thiệu"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="max-w-full h-full pointer-events-none"
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-20" />

            {/* Hero Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 fade-in hover:text-orange-400 transition-colors duration-500">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-200 hover:text-orange-300 transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Counters */}
            {sale.length >= 2 && (
                <div className="absolute bottom-0 w-full px-4 z-50">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col sm:flex-row bg-white border-2 border-black rounded-t-4xl p-4 md:p-8 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black">
                            {sale.map((item, index) => (
                                <AnimatedCounter
                                    key={index}
                                    text={item.topText}
                                    text2={item.bottomText}
                                    className="flex-1 py-2 px-4"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
