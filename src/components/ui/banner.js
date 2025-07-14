import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Banner({ title }) {
    const bannerRef = useRef(null);
    const [parallax, setParallax] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

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

    const nextSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, [slides.length]);
  
    const prevSlide = useCallback(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);
  
    useEffect(() => {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer); // Đảm bảo dọn dẹp interval
    }, [nextSlide]);
  
    // Debounce scroll handler để tối ưu hiệu suất
    const handleScroll = useCallback(
      debounce(() => {
        if (!bannerRef.current) return;
        const rect = bannerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          setParallax(window.scrollY * 0.3);
        }
      }, 10),
      []
    );
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        handleScroll.cancel(); // Hủy debounce khi unmount
      };
    }, [handleScroll]);


  return (
    <div className="bg-white mb-30">
      <div
        ref={bannerRef}
        className="h-[50vh] w-full relative overflow-hidden flex items-center justify-center"
        style={{ perspective: "1px" }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${index === currentSlide
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
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                quality={80} // Giảm chất lượng để tối ưu tốc độ tải
                sizes="(max-width: 768px) 100vw, 1200px" // Tối ưu hóa sizes
                className="object-cover"
                onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback hình ảnh
              />
            </div>
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 z-20" />
        <div className="absolute inset-0 flex flex-col items-start justify-center z-30 text-left py-10 px-12 mx-auto md:px-10">
          <div className="container flex flex-col items-start mx-auto px-12">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6 animate-fade-in">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
