"use client";
import Navbar from "./components/navbar";
import {
  ShieldCheck,
  HandCoins,
  Hammer,
  Users,
  House,
  ArrowUpRight,
} from "lucide-react";
import * as React from "react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/animated-counter";
import ContactFloatingButtons from "./components/contactFloatingButtons";

const slideTransitions = [
  // Slide left/right (default)
  (index, current) =>
    index === current
      ? "translate-x-0 z-10"
      : index < current
      ? "-translate-x-full z-0"
      : "translate-x-full z-0",
  // Fade
  (index, current) =>
    index === current
      ? "opacity-100 z-10"
      : "opacity-0 pointer-events-none z-0",
  // Scale
  (index, current) =>
    index === current
      ? "scale-100 opacity-100 z-10"
      : "scale-90 opacity-0 pointer-events-none z-0",
  // Rotate Y
  (index, current) =>
    index === current
      ? "rotate-y-0 opacity-100 z-10"
      : "rotate-y-12 opacity-0 pointer-events-none z-0",
];

// Add this utility for random selection
function getRandomTransition() {
  return slideTransitions[Math.floor(Math.random() * slideTransitions.length)];
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallax, setParallax] = useState(0);
  const bannerRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/wide_shot.jpg",
      alt: "wide shot",
    },
    {
      id: 2,
      image: "/wide_hands.jpg",
      alt: "wide hands",
    },
    {
      id: 3,
      image: "/group_walking.jpg",
      alt: "group shot",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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
    <div className="min-h-screen relative bg-white">
      <Navbar />
      {/* Hero Section with Background Image and Overlay */}
      <div
        ref={bannerRef}
        className="h-screen w-full relative overflow-hidden flex items-center justify-center"
        style={{ perspective: "1px" }}
      >
        {slides.map((slide, index) => {
          // Pick a random transition for this render
          const transitionFn = getRandomTransition();
          const transitionClass = transitionFn(index, currentSlide);

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${transitionClass}`}
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
                  src={slide.image || "/globe.svg"}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-20" />
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">
            Kiến tạo không gian sống hiện đại
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-200">
            Thiết kế & Thi công nội thất chuyên nghiệp tại Quảng Nam
          </p>
        </div>
        {/* Removed Carousel Controls and Slide Indicators */}
      </div>

      {/* Introduction section */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-left text-orange-400">
            CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM
          </h2>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-black/60 px-4 shadow-2xl border border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:divide-x divide-white gap-8">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col items-center px-4 text-center md:text-left">
            <div className="mb-4">
              <House size={60} className="mx-auto text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              ĐƠN VỊ HÀNG ĐẦU
            </h3>
            <p className="text-base font-normal text-white">
              Công ty TNHH NHÀ ĐẸP QUẢNG NAM do KTS Nguyên Tương thành lập là
              đơn vị hàng đầu trong lĩnh vực Thiết kế và Thi công Nội thất hiện
              nay với gần 10 năm kinh nghiệm thực chiến.
            </p>
          </div>
          {/* Column 2 */}
          <div className="flex-1 flex flex-col items-center px-4 text-center md:text-left">
            <div className="mb-4">
              <Hammer size={40} className="mx-auto text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              DỊCH VỤ ĐA DẠNG
            </h3>
            <p className="text-base font-normal text-white">
              Chúng tôi chuyên thiết kế thi công trọn gói cho Nhà Phố, Nhà Vườn,
              Biệt Thự, Chung Cư, Văn Phòng, Nhà Hàng,...
            </p>
          </div>
          {/* Column 3 */}
          <div className="flex-1 flex flex-col items-center px-4 text-center md:text-left">
            <div className="mb-4">
              <Users size={40} className="mx-auto text-orange-400" />
            </div>
            <h3 className="text-lg font-semibold text-orange-400 mb-2">
              ĐỘI NGŨ TRẺ TRUNG, NHIỆT HUYẾT
            </h3>
            <p className="text-base font-normal text-white">
              NĐQN với mong muốn và sứ mệnh kiến tạo không gian sống giá trị đa
              dạng phong cách, đáp ứng tốt nhất có thể mọi nhu cầu khách hàng
              đưa ra.
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-center text-orange-400 mb-14">
            NHỮNG CON SỐ ẤN TƯỢNG
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <AnimatedCounter end={10} duration={3000} text="Năm kinh nghiệm" />
            <AnimatedCounter
              end={100}
              duration={3000}
              text="Chuyên viên, công nhân"
            />
            <AnimatedCounter
              end={1000}
              duration={3000}
              text="Khách hàng thân thiết"
            />
            <AnimatedCounter
              end={3000}
              duration={3000}
              text="Mẫu thiết kế hiện đại"
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
            TẠI SAO CHỌN CHÚNG TÔI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck width={48} height={48} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2 group-hover:text-orange-500 transition-colors duration-300 text-center">
                  Ưu tiên chất lượng hàng đầu
                </h3>
                <p className="text-gray-700 text-base leading-relaxed text-center mt-2 group-hover:text-gray-500">
                  Sử dụng vật liệu đạt chuẩn, đảm bảo an toàn và bền vững lâu
                  dài, cam kết chất lượng 100% như báo giá.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group relative bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Users color="white" width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2 group-hover:text-orange-500 transition-colors duration-300 text-center">
                  Đầu tư chất lượng đội ngũ
                </h3>
                <p className="text-gray-700 text-base leading-relaxed text-center mt-2 group-hover:text-gray-500">
                  Hầu hết KTS, kỹ sư, chuyên viên có kinh nghiệm 7-15 năm trong
                  lĩnh vực nghiên cứu, thiết kế kiến trúc và thi công xây dựng.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Hammer color="white" width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2 group-hover:text-orange-500 transition-colors duration-300 text-center">
                  Đa dạng mẫu mã
                </h3>
                <p className="text-gray-700 text-base leading-relaxed text-center mt-2 group-hover:text-gray-500">
                  Sở hữu hơn 3000 mẫu thiết kế hiện đại, liên tục cập nhật xu
                  hướng, sẵn sàng điều chỉnh đến khi khách hàng thật sự hài
                  lòng.
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="group relative bg-white  shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-6">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <HandCoins color="white" width={48} height={48} />
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2 group-hover:text-orange-500 transition-colors duration-300 text-center">
                  Giá cả cạnh tranh
                </h3>
                <p className="text-gray-700 text-base leading-relaxed text-center mt-2 group-hover:text-gray-500">
                  Báo đúng giá rõ ràng, minh bạch, đảm bảo cạnh tranh trên thị
                  trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center text-orange-400 mb-14 uppercase tracking-wider">
            Quy trình thi công trọn gói
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-12 relative">
            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center md:items-start">
              <div className="w-20 h-20 rounded-full border-4 border-orange-400 flex items-center justify-center text-3xl font-bold text-orange-400 mb-4 bg-black/10">
                1
              </div>
              <div className="text-white text-lg font-semibold mb-2">
                TRAO ĐỔI TƯ VẤN
              </div>
              <div className="text-white/80 text-base mb-2">
                Tiếp nhận khảo sát mặt bằng
              </div>
              <div className="text-white/80 text-base mb-2">
                Phân tích lập hồ sơ thiết kế sơ bộ
              </div>
              <div className="text-white/80 text-base mb-2">
                Báo giá thiết kế
              </div>
              <div className="text-white/80 text-base mb-2">
                Ký hợp đồng thiết kế
              </div>
            </div>
            {/* Timeline Line */}
            <div className="hidden md:block h-1 w-16 bg-orange-400 rounded-full mx-2" />
            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center md:items-center">
              <div className="w-20 h-20 rounded-full border-4 border-orange-400 flex items-center justify-center text-3xl font-bold text-orange-400 mb-4 bg-black/10">
                2
              </div>
              <div className="text-white text-lg font-semibold mb-2">
                Lập hồ sơ thiết kế thi công
              </div>
              <div className="text-white/80 text-base mb-2">
                Báo giá thi công
              </div>
              <div className="text-white/80 text-base mb-2">
                Kí hợp đồng thi công
              </div>
              <div className="text-white/80 text-base mb-2">
                Thiết kế nội thất
              </div>
            </div>
            {/* Timeline Line */}
            <div className="hidden md:block h-1 w-16 bg-orange-400 rounded-full mx-2" />
            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center md:items-end">
              <div className="w-20 h-20 rounded-full border-4 border-orange-400 flex items-center justify-center text-3xl font-bold text-orange-400 mb-4 bg-black/10">
                3
              </div>
              <div className="text-white text-lg font-semibold mb-2">
                Báo giá thi công nội thất
              </div>
              <div className="text-white/80 text-base mb-2">
                Kí hợp đồng thi công nội thất
              </div>
              <div className="text-white/80 text-base mb-2">Nghiệm thu</div>
              <div className="text-white/80 text-base mb-2">
                Bảo hành và hậu mãi
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Công trình thiết kế Section */}
      <section className="py-20 px-4 md:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Text Column */}
          <div className="md:col-span-1 flex flex-col h-full">
            <div>
              <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
                CÔNG TRÌNH THIẾT KẾ
              </h2>
              <p className="text-base mb-8 leading-relaxed">
                Mỗi năm, NHÀ ĐẸP QUẢNG NAM thực hiện hàng trăm công trình thiết
                kế ở mọi miền đất nước. Phong cách thiết kế chính là hiện đại -
                tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng và
                sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một
                công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max"
            >
              Xem tất cả
              <ArrowUpRight />
            </a>
          </div>
          {/* Images Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Project 1 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+1"
                alt="Project 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Nhà phố hiện đại 3 tầng, tối ưu ánh sáng tự nhiên và không
                  gian xanh.
                </span>
              </div>
            </div>
            {/* Project 2 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+2"
                alt="Project 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Biệt thự sân vườn sang trọng, không gian mở kết nối thiên
                  nhiên.
                </span>
              </div>
            </div>
            {/* Project 3 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+3"
                alt="Project 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Nội thất phòng khách hiện đại, tối giản, tiện nghi và ấm cúng.
                </span>
              </div>
            </div>
            {/* Project 4 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+4"
                alt="Project 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Nhà cấp 4 mái Nhật, thiết kế tối ưu công năng cho gia đình
                  trẻ.
                </span>
              </div>
            </div>
            {/* Project 5 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+5"
                alt="Project 5"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Biệt thự phố 2 mặt tiền, phong cách hiện đại, sang trọng.
                </span>
              </div>
            </div>
            {/* Project 6 */}
            <div className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer">
              <img
                src="https://placehold.co/400x500?text=Project+6"
                alt="Project 6"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-orange-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold text-center px-4">
                  Nhà phố 4 tầng, thiết kế thông thoáng, tối ưu diện tích đất.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Floating Buttons */}
      <ContactFloatingButtons />
    </div>
  );
}
