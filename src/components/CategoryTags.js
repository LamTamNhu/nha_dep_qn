'use client';

export default function CategoryTags({ categories, selectedCategory, onCategoryChange }) {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <button
                    key={category.value}
                    onClick={() => onCategoryChange(category.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category.value
                            ? 'bg-[var(--accent-light)] text-black'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                    }`}
                >
                    {category.title}
                </button>
            ))}
        </div>
    );
}