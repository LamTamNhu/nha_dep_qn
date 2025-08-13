"use client";

import React, {useEffect, useState, Suspense} from 'react';
import Image from 'next/image';
import {Search} from 'lucide-react';
import Link from 'next/link';
import Banner from '@/components/ui/banner';
import {useSearchParams} from "next/navigation";

// Separate component for search params logic
function ProjectsContent({pageTitle, projects}) {
    const searchParams = useSearchParams();
    const [categoryFromUrl, setCategoryFromUrl] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Tất cả');
    const projectsPerPage = 10;

    const projectsList = Array.isArray(projects) ? projects : [];

    const categories = ['Tất cả', 'Nhà phố', 'Biệt thự', 'Nhà vườn', 'Nhà tân cổ điển', 'Công trình dịch vụ', 'Mẫu nhà 2 tầng đẹp', 'Mẫu nhà 3 tầng đẹp', 'Nhà phố 4 tầng đẹp', 'Căn hộ cho thuê, Nhà trọ, Chung cư, Văn phòng', '55+ mẫu nhà cấp 4 đẹp, hiện đại và đơn giản nhất 2025'];

    useEffect(() => {
        try {
            const categoryParam = searchParams?.get("category") || null;
            setCategoryFromUrl(categoryParam);

            if (categoryParam && categories.includes(categoryParam)) {
                setSelectedCategory(categoryParam);
            }

            const filtered = projectsList.filter(
                (project) =>
                    (selectedCategory === 'Tất cả' || project.category === selectedCategory) &&
                    ((project.title || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
                        (project.disc || '').toLowerCase().includes(searchTerm.toLowerCase()))
            );
            setFilteredProjects(filtered);
            setCurrentPage(1);

            if (typeof window !== 'undefined' && window.location.hash === "#projects-section") {
                const section = document.getElementById("projects-section");
                section?.scrollIntoView({ behavior: "smooth" });
            }
        } catch (error) {
            console.warn('Error reading search params:', error);
            setCategoryFromUrl(null);
        }
    }, [searchParams, searchTerm, selectedCategory]);

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
        <div className="min-h-screen bg-[#272727]">
            <Banner title={pageTitle}/>
            <div className="py-20 px-6 md:px-10">
                <div className="container flex flex-col md:flex-row items-center justify-between mx-auto px-12 gap-8">
                    <div className="relative">
                        <p className="text-white text-base mb-8 max-w-2xl">
                            Mỗi công trình là một tác phẩm nghệ thuật, mang trong mình câu chuyện và tâm huyết của những
                            người sáng tạo. Từ những ngôi nhà hiện đại đến biệt thự sang trọng, mỗi dự án đều được thiết
                            kế tỉ mỉ để mang lại không gian sống hoàn hảo nhất cho gia đình bạn.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <form onSubmit={handleSearch} className="relative flex justify-start">
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
                                <Search
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-400"/>
                            </div>
                        </form>
                        <div className="flex gap-2 flex-wrap max-w-4xl">
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
            <div id="projects-section" className="py-20 px-6 md:px-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                        {currentProjects.length > 0 ? (
                            currentProjects.map((project) => (
                                <Link
                                    key={project.slug || project.id}
                                    href={`/${project.slug}/`}
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
                                        />
                                        <div
                                            className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
                            {Array.from({length: totalPages}, (_, index) => (
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
            <div className="pb-70 bg-[#272727]"/>
        </div>
    );
}

// Loading fallback component
function ProjectsLoading() {
    return (
        <div className="min-h-screen bg-[#272727] flex items-center justify-center">
            <div className="text-white text-lg">Loading projects...</div>
        </div>
    );
}

// Main component with Suspense boundary
export default function Projects({pageTitle, projects}) {
    return (
        <Suspense fallback={<ProjectsLoading />}>
            <ProjectsContent pageTitle={pageTitle} projects={projects} />
        </Suspense>
    );
}