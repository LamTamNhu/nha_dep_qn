'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsGrid from './NewsGrid';
import SearchBar from './SearchBar';
import CategoryTags from './CategoryTags';
import Pagination from './Pagination';
import { SearchX } from 'lucide-react';

const categories = [
    { value: 'all', title: 'Tất cả' },
    { value: 'generalNews', title: 'Cẩm nang xây dựng' },
    { value: 'activities', title: 'Kiến thức xây dựng' },
];

const ITEMS_PER_PAGE = 12;

function NewsFilterContent({ news }) {
    const searchParams = useSearchParams();
    const categoryFromUrl = searchParams.get('category');
    const initialCategory = categories.some(cat => cat.value === categoryFromUrl)
        ? categoryFromUrl
        : 'all';

    const [filteredNews, setFilteredNews] = useState(news);
    const [selectedCategory, setSelectedCategory] = useState(initialCategory);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [paginatedNews, setPaginatedNews] = useState([]);

    // Keep the active tab in sync when the URL category changes (navbar dropdown)
    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    useEffect(() => {
        let filtered = news;
        if (selectedCategory !== 'all') {
            filtered = filtered.filter(item => item.category === selectedCategory);
        }
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            filtered = filtered.filter(item =>
                item.title.toLowerCase().includes(searchLower) ||
                (item.excerpt && item.excerpt.toLowerCase().includes(searchLower))
            );
        }
        setFilteredNews(filtered);
        setCurrentPage(1);
    }, [news, selectedCategory, searchTerm]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        setPaginatedNews(filteredNews.slice(startIndex, endIndex));
    }, [filteredNews, currentPage]);

    const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const resetFilters = () => {
        setSelectedCategory('all');
        setSearchTerm('');
        setCurrentPage(1);
    };

    return (
        <>
            <div className="mb-12 space-y-6">
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={handleSearchChange}
                    placeholder="Tìm kiếm tin tức..."
                />
                <CategoryTags
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <div className="text-center text-gray-400">
                    {searchTerm || selectedCategory !== 'all' ? (
                        <span>
                            Hiển thị {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, filteredNews.length)} trong {filteredNews.length} / {news.length} bài viết
                            {searchTerm && (
                                <span> cho "{searchTerm}"</span>
                            )}
                            {selectedCategory !== 'all' && (
                                <span> trong danh mục "{categories.find(cat => cat.value === selectedCategory)?.title}"</span>
                            )}
                        </span>
                    ) : (
                        <span>
                            Hiển thị {((currentPage - 1) * ITEMS_PER_PAGE) + 1}-{Math.min(currentPage * ITEMS_PER_PAGE, news.length)} trong tổng cộng {news.length} bài viết
                        </span>
                    )}
                </div>
            </div>
            <NewsGrid news={paginatedNews} />
            {totalPages > 1 && (
                <div className="mt-12">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
            {filteredNews.length === 0 && news.length > 0 && (
                <div className="text-center py-8">
                    <div className="text-gray-400 mb-4">
                        <SearchX size={40} className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-6">Không tìm thấy bài viết nào</h3>
                    <button
                        onClick={resetFilters}
                        className="px-6 py-2 bg-[var(--accent-light)] text-white rounded-lg hover:bg-[var(--accent)] transition-colors"
                    >
                        Xóa tất cả bộ lọc
                    </button>
                </div>
            )}
        </>
    );
}

export default function NewsFilter({ news }) {
    return (
        <Suspense fallback={<div className="text-gray-400 py-8">Đang tải bài viết...</div>}>
            <NewsFilterContent news={news} />
        </Suspense>
    );
}
