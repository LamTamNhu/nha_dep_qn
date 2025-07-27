import { debounce } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function Banner({title}) {
    const bannerRef = useRef(null);
    const [parallax, setParallax] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);

      const slides = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      alt: "wide shot",
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      alt: "wide hands",
    },
    {
      id: 3,
      image: "/images/slide3.jpg",
      alt: "3",
    },
    {
      id: 4,
      image: "/images/slide4.jpg",
      alt: "4",
    },
    {
      id: 5,
      image: "/images/slide5.jpg",
      alt: "5",
    },
    {
      id: 6,
      image: "/images/slide6.jpg",
      alt: "6",
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
    <div className="bg-[#272727] text-center mb-30">
      <div
        ref={bannerRef}
        className="h-[80vh] w-full relative overflow-hidden flex items-center justify-center"
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
      </div>
        <h2 className="text-white text-extrabold text-3xl font-bold my-20 tracking-[.5em] p-4 border-draw inline-block">
            {title}
        </h2>
    </div>
  );
}
