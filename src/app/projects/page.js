"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
import Link from 'next/link';
import ContactForm from '../components/contactForm';
import Banner from '@/components/ui/banner';

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const projectsPerPage = 10;

  const projects = [
    {
      id: 1,
      title: "Da House",
      disc: "Hiện đại hóa không gian nhưng vẫn vẹn nguyên hồn Việt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-2025-06-11T103306.138-1-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 2,
      title: "H’s House",
      disc: "Sống tiện nghi, kinh doanh hiệu quả, riêng tư trọn vẹn",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-41-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 3,
      title: "Anh House",
      disc: "Ngôi nhà không cần quá lớn chắc chắn chị em sẽ say mê",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/a4-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 4,
      title: "DT VILLA",
      disc: "Hiện đại hoà quyện cùng thiên nhiên",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/d1-700x670.jpg",
      category: "Biệt thự",
    },
    {
      id: 5,
      title: "L VILLA",
      disc: "Vẻ đẹp hiện đại hút mọi ánh nhìn",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/07/l4-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 6,
      title: "HUNG VILLA",
      disc: "Đẳng cấp, tinh tế và sang trọng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5584607005888_b33eb55a459a8eb774068487c34ea2a5-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 7,
      title: "NH Villa",
      disc: "Dấu ấn khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5438947266194_10ce32f18288a95eb825ced27ce28bc1-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 8,
      title: "ND House",
      disc: "Nhà của đôi vợ chồng trẻ đam mê Kiến trúc mộc mạc và sự khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5315711468255_2c6acce84a5ee9d59065c4df5fb51761-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 9,
      title: "TC House",
      disc: "Câu chuyện nhà phố",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/ANH3-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 10,
      title: "T House",
      disc: "Sự kết nối giữa không gian và ánh sáng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5424216518033_6d660521e1217af6c8203395aad94446-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 11,
      title: "NH House",
      disc: "Nhà phố hướng tây, giải pháp tránh nắng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5424216518033_6d660521e1217af6c8203395aad94446-700x700.jpg",
      category: "Nhà Phố",
    },
    {
      id: 12,
      title: "T2 House",
      disc: "Vẻ đẹp từ sự tinh tế và sang trọng",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5584642502208_30b3615bced844af16480f624b70d914-700x700.jpg",
      category: "Nhà Phố",
    },
  ];

  const categories = ['Tất cả', 'Nhà Phố', 'Biệt thự'];

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        (selectedCategory === 'Tất cả' || project.category === selectedCategory) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.disc.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
    setCurrentPage(1); // Giữ reset page như file gốc
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
  };

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
    <div className="min-h-screen bg-white">
      <Banner title="Dự án" />
      <div className="py-20 px-6 md:px-10">
        <div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-12 gap-4">
          <div className="relative">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-8 mt-10">
              Tất cả dự án
            </h2>
            <p className="text-gray-600 text-base mb-8 max-w-2xl">
              Mỗi công trình là một tác phẩm nghệ thuật, mang trong mình câu chuyện và tâm huyết của những người sáng tạo. Từ những ngôi nhà hiện đại đến biệt thự sang trọng, mỗi dự án đều được thiết kế tỉ mỉ để mang lại không gian sống hoàn hảo nhất cho gia đình bạn.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <form onSubmit={handleSearch} className="relative">
              <div className="relative">
                <input
                  type="text"
                  id="search-projects"
                  placeholder="Tìm kiếm dự án..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-3 pr-12 border-2 border-orange-400 bg-white/80 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 text-base text-gray-800 placeholder-gray-500 md:w-64"
                  aria-label="Tìm kiếm dự án"
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400" />
              </div>
            </form>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full ${
                    selectedCategory === category
                      ? "bg-orange-400 text-white"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors duration-300`}
                  aria-pressed={selectedCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="relative bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={700}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 20vw"
                      onError={(e) => (e.target.src = "/fallback-image.jpg")}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <h3 className="text-lg font-semibold text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.title}
                      </h3>
                      <p className="text-md text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500 mt-2 px-4">
                        {project.disc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                Không tìm thấy dự án nào phù hợp với bộ lọc.
              </p>
            )}
          </div>
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
                aria-label="Trang trước"
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
                  aria-label={`Trang ${index + 1}`}
                  aria-current={currentPage === index + 1 ? "page" : undefined}
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
                aria-label="Trang sau"
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