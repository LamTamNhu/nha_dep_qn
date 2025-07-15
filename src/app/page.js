"use client";
import {
  ArrowUpRight,
  Eye,
  Goal,
  Paintbrush,
  HandCoins,
  HeartHandshake,
  ShieldCheck,
  Users,
} from "lucide-react";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/animated-counter";
import ContactForm from "./components/contactForm";
import PartnerCarousel from "@/app/components/partnerCarousel";
import ProcessSection from "./components/processSection";

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

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [parallax, setParallax] = useState(0);
  const bannerRef = useRef(null);
  const [currentTransitionIndex, setCurrentTransitionIndex] = useState(0);
  const cardData = [
    {
      id: "core-values",
      icon: <HeartHandshake size={70} />,
      title: "Giá trị cốt lõi",
      description:
        "Chúng tôi cam kết chất lượng xây dựng, an toàn lao động và đổi mới công nghệ để mang lại những công trình bền vững và hiệu quả nhất. Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.",
      cardBgColor: "bg-orange-400",
      titleColor: "text-white",
      descriptionColor: "text-white",
      iconWrapperBgColor: "bg-orange-50",
      iconColorClass: "text-orange-500",
      iconBorderColor: "border-orange-500",
    },
    {
      id: "mission",
      icon: <Goal />,
      title: "Sứ mệnh",
      description:
        "Xây dựng những công trình chất lượng cao, an toàn và thân thiện với môi trường, góp phần phát triển hạ tầng và nâng cao chất lượng cuộc sống cộng đồng. Chúng tôi luôn đồng hành cùng đối tác để hiện thực hóa mọi dự án.",
      cardBgColor: "bg-gray-50",
      titleColor: "text-gray-800",
      descriptionColor: "text-gray-500",
      iconWrapperBgColor: "bg-gray-50",
      iconColorClass: "text-gray-800",
      iconBorderColor: "border-gray-800",
    },
    {
      id: "vision",
      icon: <Eye />,
      title: "Tầm nhìn",
      description:
        "Trở thành công ty xây dựng hàng đầu tại Việt Nam, được công nhận về sự xuất sắc trong thiết kế, thi công và quản lý dự án. Chúng tôi hướng tới việc tạo ra những công trình mang tính biểu tượng, đóng góp vào sự phát triển bền vững của đất nước.",
      cardBgColor: "bg-gray-50",
      titleColor: "text-gray-800",
      descriptionColor: "text-gray-500",
      iconWrapperBgColor: "bg-gray-50",
      iconColorClass: "text-gray-800",
      iconBorderColor: "border-gray-800",
    },
  ];
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

  // Partners data
  const partners = [
    {
      logo: "/images/logo_kimdinh.png",
      alt: "Kim Đỉnh Partner Logo",
    },
    {
      logo: "/images/hoaphat.png",
      alt: "logo Hoa Phat",
    },
    {
      logo: "/images/songgianh.png",
      alt: "Songgianh logo",
    },
    {
      logo: "/images/vina.png",
      alt: "Vina logo",
    },
    {
      logo: "/images/dongtam.jpg",
      alt: "Dong Tam Logo",
    },
    {
      logo: "/images/vigla.png",
      alt: "Viglacera Logo",
    },
  ];
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
      {/* Hero Section with Background Image and Overlay */}
      <div
        ref={bannerRef}
        className="h-screen w-full relative overflow-hidden flex items-center justify-center"
        style={{ perspective: "1px" }}
      >
        {slides.map((slide, index) => {
          const currentTransition = getCurrentTransition();
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 ${currentTransition(
                index,
                currentSlide
              )}`}
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
        <div className="absolute inset-0 flex flex-col items-center justify-center z-30 text-center px-4 ">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-4 fade-in hover:text-orange-400 transition-colors duration-500">
            Kiến tạo không gian sống hiện đại
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium mb-8 animate-fade-in delay-200 hover:text-orange-300 transition-colors duration-300">
            Thiết kế & Thi công nội thất chuyên nghiệp tại Quảng Nam
          </p>
        </div>
      </div>

      {/* Introduction section */}
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-400 swing-in-top-fwd mb-6">
            CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM
          </h2>
          <h3 className="text-md font-semibold mb-2 text-gray-500 text-justify">
            Công ty TNHH NHÀ ĐẸP QUẢNG NAM do KTS Nguyên Tương thành lập là đơn
            vị hàng đầu trong lĩnh vực Thiết kế và Thi công Nội thất hiện nay
            với gần 10 năm kinh nghiệm thực chiến. Chúng tôi chuyên thiết kế thi
            công trọn gói cho Nhà Phố, Nhà Vườn, Biệt Thực, Chung Cư, Văn Phòng,
            Nhà Hàng,...
          </h3>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 px-4 font-sans">
        <div className="max-w-6xl mx-auto">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {cardData.map((card) => (
              <div
                key={card.id}
                className={`relative rounded-4xl shadow-xl p-8 flex flex-col items-center text-justify transition-transform duration-300 hover:scale-105 ${card.cardBgColor}`}
              >
                {/* Icon Wrapper */}
                <div
                  className={`absolute -top-12 w-24 h-24 ${card.iconWrapperBgColor} rounded-full flex items-center justify-center shadow-md border-4 ${card.iconBorderColor}`}
                >
                  {/* Clone the icon and apply specific color for the icon itself */}
                  {React.cloneElement(card.icon, {
                    className: `w-12 h-12 ${card.iconColorClass}`,
                  })}
                </div>

                {/* Adjust padding-top for content to account for the absolute icon */}
                <div className="pt-10">
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-4 ${card.titleColor}`}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className={`leading-relaxed ${card.descriptionColor}`}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="py-12 bg-gray-50 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-400 swing-in-top-fwd mb-6">
            NHỮNG CON SỐ ẤN TƯỢNG
          </h2>
          <h3 className="text-md font-semibold mb-2 text-gray-500 text-justify mb-12">
            Chính những trăn trở ấy đã trở thành động lực để chúng tôi xây dựng
            một quy trình thi công CHẶT CHẼ - MINH BẠCH - CHẤT LƯỢNG, đảm bảo
            mỗi ngôi nhà khi bàn giao không chỉ đạt chuẩn kỹ thuật, mà còn mang
            đến sự an tâm tuyệt đối cho gia chủ.Trên hành trình hơn 10 năm thực
            chiến, đội ngũ đã không ngừng nỗ lực, học hỏi và đúc kết kinh nghiệm
            để mang đến những giải pháp thiết kế và thi công chất lượng – tối ưu
            – bền vững.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-justify">
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
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-orange-400 swing-in-top-fwd mb-12">
            TẠI SAO CHỌN CHÚNG TÔI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-10">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ShieldCheck width={48} height={48} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">
                  Ưu tiên chất lượng hàng đầu
                </h3>
                <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">
                  Sử dụng vật liệu đạt chuẩn, đảm bảo an toàn và bền vững lâu
                  dài, cam kết chất lượng 100% như báo giá.
                </p>
              </div>
            </div>

            <div className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-10">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Users width={48} height={48} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">
                  Đầu tư chất lượng đội ngũ
                </h3>
                <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">
                  Hầu hết KTS, kỹ sư, chuyên viên có kinh nghiệm 7-15 năm trong
                  lĩnh vực nghiên cứu, thiết kế kiến trúc và thi công xây dựng.
                </p>
              </div>
            </div>

            <div className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-10">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <Paintbrush width={48} height={48} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">
                  Đa dạng mẫu mã
                </h3>
                <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">
                  Sở hữu hơn 3000 mẫu thiết kế hiện đại, liên tục cập nhật xu
                  hướng, sẵn sàng điều chỉnh đến khi khách hàng thật sự hài
                  lòng.
                </p>
              </div>
            </div>

            <div className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">
              <div className="flex flex-col items-center p-10">
                <div className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <HandCoins width={48} height={48} color="white" />
                </div>
                <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">
                  Giá cả cạnh tranh
                </h3>
                <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">
                  Báo đúng giá rõ ràng, minh bạch, đảm bảo cạnh tranh trên thị
                  trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProcessSection />
      {/* Process Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-orange-400 swing-in-top-fwd mb-12">
            Quy trình thi công trọn gói
          </h2>
        </div>
      </section>

      {/* Công trình thiết kế Section */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
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
            {[
              {
                img: "/thumbnails/1.jpg",
                alt: "Project 1",
                desc: "Nhà phố hiện đại 3 tầng, tối ưu ánh sáng tự nhiên và không gian xanh.",
              },
              {
                img: "/thumbnails/2.jpg",
                alt: "Project 2",
                desc: "Biệt thự sân vườn sang trọng, không gian mở kết nối thiên nhiên.",
              },
              {
                img: "/thumbnails/3.jpg",
                alt: "Project 3",
                desc: "Nội thất phòng khách hiện đại, tối giản, tiện nghi và ấm cúng.",
              },
              {
                img: "/thumbnails/4.jpg",
                alt: "Project 4",
                desc: "Nhà cấp 4 mái Nhật, thiết kế tối ưu công năng cho gia đình trẻ.",
              },
              {
                img: "/thumbnails/5.jpg",
                alt: "Project 5",
                desc: "Biệt thự phố 2 mặt tiền, phong cách hiện đại, sang trọng.",
              },
              {
                img: "/thumbnails/6.jpg",
                alt: "Project 6",
                desc: "Nhà phố 4 tầng, thiết kế thông thoáng, tối ưu diện tích đất.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer"
              >
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-400 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold px-4">
                    {project.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*THI CÔNG THỰC TẾ section*/}
      <section className="py-12 px-4 md:px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Images Grid */}
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                img: "/thumbnails/7.jpg",
                alt: "Project 1",
                desc: "Nhà phố hiện đại 3 tầng, tối ưu ánh sáng tự nhiên và không gian xanh.",
              },
              {
                img: "/thumbnails/8.jpg",
                alt: "Project 2",
                desc: "Biệt thự sân vườn sang trọng, không gian mở kết nối thiên nhiên.",
              },
              {
                img: "/thumbnails/9.jpg",
                alt: "Project 3",
                desc: "Nội thất phòng khách hiện đại, tối giản, tiện nghi và ấm cúng.",
              },
              {
                img: "/thumbnails/10.jpg",
                alt: "Project 4",
                desc: "Nhà cấp 4 mái Nhật, thiết kế tối ưu công năng cho gia đình trẻ.",
              },
              {
                img: "/thumbnails/11.jpg",
                alt: "Project 5",
                desc: "Biệt thự phố 2 mặt tiền, phong cách hiện đại, sang trọng.",
              },
              {
                img: "/thumbnails/12.jpg",
                alt: "Project 6",
                desc: "Nhà phố 4 tầng, thiết kế thông thoáng, tối ưu diện tích đất.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="group aspect-[4/5] bg-gray-200 rounded overflow-hidden relative cursor-pointer"
              >
                <Image
                  src={project.img}
                  alt={project.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-orange-400 flex items-center justify-center opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold px-4">
                    {project.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
          {/* Text Column */}
          <div className="md:col-span-1 flex flex-col h-full">
            <div>
              <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
                THI CÔNG THỰC TẾ
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
        </div>
      </section>

      {/*Partners*/}
      <PartnerCarousel />

      {/* Testimonial Section */}
      <section className="py-12 px-4 bg-gray-50 ">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-left text-orange-400 mb-14">
            KHÁCH HÀNG NÓI GÌ VỀ NHÀ ĐẸP QUẢNG NAM
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left: Quote */}
            <div className="col-span-1 flex flex-col items-center md:items-start">
              <div className="text-orange-500 text-5xl mb-4">“</div>
              <blockquote className="text-2xl font-semibold italic text-gray-900 mb-6 text-justify md:text-left">
                Nhà chị rộng hơn nhiều.
                <br />
                Nếu chị xây nhà tiếp, chị vẫn muốn bên NHÀ ĐẸP QUẢNG NAM xây cho
                chị!
              </blockquote>
              <div className="text-orange-500 text-5xl self-end">”</div>
              <div className="w-16 h-1 bg-orange-400 mt-8 mb-2" />
            </div>

            {/* Center: Image */}
            <div className="col-span-1 flex justify-center">
              <div className="relative w-72 h-80 overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <Image
                  src="/images/testimonial.png"
                  alt="Chị Thảo Duyên testimonial"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-0 right-0 m-4 grid grid-cols-3 gap-1">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <span
                      key={i}
                      className="w-2 h-2 rounded-full bg-orange-300 inline-block"
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Details */}
            <div className="col-span-1 flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-justify md:text-left">
                Chị Thảo Duyên | Nhà phố 2 tầng | Vĩnh Phú – Thuận An
              </h3>
              <p className="text-base text-gray-700 mb-8 text-justify md:text-left">
                &quot;Mình có thể tự tin nói rằng lựa chọn Nhà Đẹp Quảng Nam thi
                công trọn gói là một quyết định đáng đồng tiền bát gạo nếu bạn
                cần một đơn vị hội đủ các yếu tố TƯ DUY THIẾT KẾ, NĂNG LỰC THI
                CÔNG và CÁI TÂM LÀM NGHỀ. Khi viết những dòng đánh giá này, nhà
                mình đã làm xong được 5 tháng và mình đã rất tự tin giới thiệu
                thành công thêm 3 công trình của bạn bè người thân mình như một
                lời cảm ơn đến anh em Nhà Đẹp Quảng Nam.&quot;
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max mb-4"
              >
                THAM QUAN NHÀ HOÀN THIỆN
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-4">
        <ContactForm />
      </section>
    </div>
  );
}
