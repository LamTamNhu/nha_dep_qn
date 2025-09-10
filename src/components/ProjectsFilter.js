'use client';

import { useState, useEffect } from 'react';
import ProjectsGrid from './ProjectsGrid';
import SearchBar from './SearchBar';
import CategoryTags from './CategoryTags';
import Pagination from './Pagination';
import {SearchX} from "lucide-react";

const categories = [
    { value: 'all', title: 'Tất cả' },
    { value: 'mansion', title: 'Biệt thự' },
    { value: 'urbanHouse', title: 'Nhà phố' },
    { value: 'countryHouse', title: 'Nhà vườn' },
    { value: 'neoClassicHouse', title: 'Nhà tân cổ điển' },
    { value: 'serviceBuilding', title: 'Công trình dịch vụ' }
];

const ITEMS_PER_PAGE = 12;

export default function ProjectsFilter({ projects, initialCategory = 'all' }) {
    const [filteredProjects, setFilteredProjects] = useState(projects);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedProjects, setPaginatedProjects] = useState([]);

    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    // Filter projects based on category and search term
    useEffect(() => {
        let filtered = projects;

        // Filter by category
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(project => project.category === selectedCategory);
        }

        // Filter by search term
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(project =>
                project.title.toLowerCase().includes(searchLower) ||
                (project.location && project.location.toLowerCase().includes(searchLower)) ||
                (project.function && project.function.toLowerCase().includes(searchLower)) ||
                (project.shortDescription && project.shortDescription.toLowerCase().includes(searchLower))
            );
        }

        setFilteredProjects(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [projects, selectedCategory, searchTerm]);

    // Handle pagination
    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setPaginatedProjects(filteredProjects.slice(startIndex, endIndex));
    }, [filteredProjects, currentPage]);

    const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetFilters = () => {
        setSelectedCategory('all');
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <>
            {/* Search and Filter Section */}
            <div className="mb-12 space-y-6">
                {/* Search Bar */}
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                />

                {/* Category Tags */}
                <CategoryTags
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />

                {/* Results Count and Page Info */}
                <div className="text-center text-gray-400">
                    {searchTerm || selectedCategory !== 'all' ? (
                        <span>
              Hiển thị {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredProjects.length)} trong {filteredProjects.length} / {projects.length} dự án
                            {searchTerm && (
                                <span> cho "{searchTerm}"</span>
                            )}
                            {selectedCategory !== 'all' && (
                                <span> trong danh mục "{categories.find(cat => cat.value === selectedCategory)?.title}"</span>
                            )}
            </span>
                    ) : (
                        <span>
              Hiển thị {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, projects.length)} trong tổng cộng {projects.length} dự án
            </span>
                    )}
                </div>
            </div>

            {/* Projects Grid */}
            <ProjectsGrid projects={paginatedProjects} />

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="mt-12">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}

            {/* No Results Message */}
            {filteredProjects.length === 0 && projects.length > 0 && (
                <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">
                        <SearchX size={40} className="mx-auto"/>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6">Không tìm thấy dự án nào</h3>
                    <button
                        onClick={resetFilters}
                        className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors"
                    >
                        Xóa tất cả bộ lọc
                    </button>
                </div>
            )}
        </>
    );
}
