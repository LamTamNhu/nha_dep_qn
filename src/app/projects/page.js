"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const bannerRef = useRef(null);
  const [parallax, setParallax] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const projectsPerPage = 6;

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

  const projects = [
    {
      id: 1,
      title: "Da House",
      disc: "Hiện đại hóa không gian nhưng vẫn vẹn nguyên hồn Việt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-2025-06-11T103306.138-1-700x700.jpg",
    },
    {
      id: 2,
      title: "H’s House",
      disc: "Sống tiện nghi, kinh doanh hiệu quả, riêng tư trọn vẹn",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-41-700x700.jpg",
    },
    {
      id: 3,
      title: "Anh House",
      disc: "Ngôi nhà không cần quá lớn chắc chắn chị em sẽ say mê",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/a4-700x700.jpg",
    },
    {
      id: 4,
      title: "DT VILLA",
      disc: "Hiện đại hoà quyện cùng thiên nhiên",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/d1-700x670.jpg",
    },
    {
      id: 5,
      title: "L VILLA",
      disc: "Vẻ đẹp hiện đại hút mọi ánh nhìn",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/l4-700x700.jpg",
    },
    {
      id: 6,
      title: "HUNG VILLA",
      disc: "Đẳng cấp, tinh tế và sang trọng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5584607005888_b33eb55a459a8eb774068487c34ea2a5-700x700.jpg",
    },
    {
      id: 7,
      title: "NH Villa",
      disc: "Dấu ấn khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5438947266194_10ce32f18288a95eb825ced27ce28bc1-700x700.jpg",
    },
    {
      id: 8,
      title: "ND House",
      disc: "Nhà của đôi vợ chồng trẻ đam mê Kiến trúc mộc mạc và sự khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5315711468255_2c6acce84a5ee9d59065c4df5fb51761-700x700.jpg",
    },
    {
      id: 9,
      title: "TC House",
      disc: "Câu chuyện nhà phố",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/ANH3-700x700.jpg",
    },
    {
      id: 10,
      title: "T House",
      disc: "Sự kết nối giữa không gian và ánh sáng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5424216518033_6d660521e1217af6c8203395aad94446-700x700.jpg",
    },
    {
      id: 11,
      title: "NH House",
      disc: "Nhà phố hướng tây, giải pháp tránh nắng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5424216518033_6d660521e1217af6c8203395aad94446-700x700.jpg",
    },
    {
      id: 12,
      title: "T2 House",
      disc: "Vẻ đẹp từ sự tinh tế và sang trọng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5584642502208_30b3615bced844af16480f624b70d914-700x700.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        setParallax(window.scrollY * 0.3);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.disc.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
    setCurrentPage(1);
  }, [searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

  // Phân trang
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen relative bg-white">
      <div
        ref={bannerRef}
        className="h-screen w-full relative overflow-hidden flex items-center justify-center"
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
        ))}
        <div className="absolute inset-0 bg-black/40 z-20" />
        <div className="absolute inset-0 flex flex-col items-start justify-center z-30 text-left py-20 px-12 mx-auto md:px-10">
          <div className="container flex flex-col items-space-between mx-auto px-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-8 animate-fade-in">
              Dự án
            </h1>
          </div>
        </div>
      </div>
      <div className="py-20 px-6 md:px-10">
        <div className="container flex flex-row items-center justify-around mx-auto px-12">
          <div className="relative">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-8 mt-10">
              Tất cả dự án
            </h2>
            <p className="text-gray-600 text-base mb-8 max-w-2xl">
              Mỗi công trình là một tác phẩm nghệ thuật, mang trong mình câu chuyện và tâm huyết của những người sáng tạo. Từ những ngôi nhà hiện đại đến biệt thự sang trọng, mỗi dự án đều được thiết kế tỉ mỉ để mang lại không gian sống hoàn hảo nhất cho gia đình bạn.
            </p>
          </div>
          <form
            onSubmit={handleSearch}
            className="relative"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pr-12 border-2 border-orange-400 bg-white/80 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-base text-gray-800 placeholder-gray-500 md:w-50"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
            </div>
          </form>
        </div>
      </div>
      <div className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={700}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-semibold text-white text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-md text-white text-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 mt-2">
                        {project.disc}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                Không tìm thấy dự án nào phù hợp với từ khóa.
              </p>
            )}
          </div>
          {/* Phân trang */}
          {filteredProjects.length > 0 && (
            <div className="flex justify-center items-center mt-8 space-x-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full ${
                  currentPage === 1
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                } transition-colors duration-300`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  className={`px-4 py-2 rounded-full ${
                    currentPage === index + 1
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors duration-300`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full ${
                  currentPage === totalPages
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-orange-400 text-white hover:bg-orange-500"
                } transition-colors duration-300`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}