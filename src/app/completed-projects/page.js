"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';
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
      title: "Q’s House",
      disc: "Nổi bật với lối kiến trúc đậm chất Châu Âu",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Ban-sao-cua-File-hinh-vuong-1-1000x1000.jpg",
      category: "Biệt thự",
    },
    {
      id: 2,
      title: "LG Villa",
      disc: "Biệt Thự Vườn Trên Mảnh Đất 800m2",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-2-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 3,
      title: "NH – Villa",
      disc: "Nổi bật bởi nghệ thuật đường cong",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2025/05/1-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 4,
      title: "T2 HOME",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/05/z5407387608918_018491daf8d36adbda84c97074f13783-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 5,
      title: "Ba Ninh Home",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2024/01/ba_ninh_home-3-1000x1000.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 6,
      title: "T HOUSE",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/12/t_house-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 7,
      title: "PHUOC HOUSE",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/10/nha_anh_phuoc_truong_xuan-1-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 8,
      title: "NT’HOUSE",
      disc: "Nhà không cần quá lớn, miễn nơi đó có đầy đủ yêu thương",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/10/n_t_house-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 9,
      title: " VA’HOUSE",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/10/NHA-VINH-ANH-1-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 10,
      title: "Ai Cuong house",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/10/BIET-THU-AI-CUONG-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 11,
      title: "HT HOUSE",
      disc: "Nét pha trộn kiến trúc nhiệt đới cùng phong cách hiện đại kiến tạo một không gian sống lý tưởng, giao hòa cùng thiên nhiên",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/09/h_t_home-1-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 12,
      title: "THY HOUSE",
      disc: "Tiện nghi, gắn kết với thiên nhiên",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/09/nha_thy_cam-1-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 13,
      title: "HT HOUSE",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/08/noi-that-anh-hai-chi-trang-7-of-34-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 14,
      title: "PH HOUSE",
      disc: "Ngôi nhà hạnh phúc từ những điều giản đơn",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/09/nha_anh_phuc-6-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 15,
      title: "L HOUSE",
      disc: "",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/09/nha_anh_linh-4-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 16,
      title: "BH HOUSE",
      disc: "TỔ ẤM XANH GIỮA LÒNG THÀNH PHỐ",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/09/nha_anh_bao_chi_huyen-6-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 17,
      title: "T’VILLA",
      disc: "BIỆT THỰ MÁI NHẬT NỔI BẬT TẠI THÀNH PHỐ TAM KỲ",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2023/03/Chu-tuong-32-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 18,
      title: "TTT HOUSE",
      disc: "BIỆT THỰ 2 MẶT TIỀN CỦA VỢ CHỒNG TRẺ",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2022/12/noi-that-trung-thuyen-44-700x700.jpg",
      category: "Nhà phố, Biệt thự",
    },
    {
      id: 19,
      title: "TN HOUSE",
      disc: "Dấu ấn khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2022/03/noi-that-nha-hang-bep-do-9275-700x700.jpg",
      category: "Biệt thự",
    },
    {
      id: 20,
      title: "ND House",
      disc: "Nhà của đôi vợ chồng trẻ đam mê Kiến trúc mộc mạc và sự khác biệt",
      image: "https://nhadepquangnam.vn/wp-content/uploads/2022/11/Hung_house-700x700.jpg",
      category: "Biệt thự",
    },
  ];

  const categories = ['Tất cả', 'Nhà phố', 'Biệt thự'];

  useEffect(() => {
    const filtered = projects.filter(
      (project) =>
        (selectedCategory === 'Tất cả' || project.category.includes(selectedCategory)) &&
        (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.disc.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

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
    <div className="min-h-screen bg-white">
      <Banner title="Dự án đã hoàn thành" />
      <div className="py-20 px-6 md:px-10">
        <div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-12 gap-4">
          <div className="relative">
            <h2 className="text-xl font-bold text-left text-orange-400 mb-8 mt-10">
              Tất cả dự án
            </h2>
            <p className="text-gray-600 text-base mb-8 max-w-2xl">
              Khám phá những dự án đã hoàn thành của chúng tôi, nơi mỗi chi tiết đều được chăm chút tỉ mỉ để mang lại không gian sống hoàn hảo.
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
                  className={`px-4 py-2 rounded-full ${selectedCategory === category
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {currentProjects.length > 0 ? (
              currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative bg-white border border-gray-200 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="relative w-full h-80 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={700}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
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
                </div>
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
                className={`px-4 py-2 rounded-full ${currentPage === 1
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
                  className={`px-4 py-2 rounded-full ${currentPage === index + 1
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
                className={`px-4 py-2 rounded-full ${currentPage === totalPages
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
      <ContactForm />
    </div>
  );
}