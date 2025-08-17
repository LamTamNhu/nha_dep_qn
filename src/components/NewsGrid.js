import Image from 'next/image';
import Link from 'next/link';
import { MoveUpRight } from 'lucide-react';

export default function NewsGrid({ news = [] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {news.length > 0 && news.map(item => (
                <div
                    key={item._id}
                    className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                    <div className="relative w-full h-64 overflow-hidden">
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={400}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="p-6 space-y-3 text-left">
                        <h3 className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                            {item.title}
                        </h3>
                        {item.excerpt && (
                            <p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
                        )}
                        <Link
                            href={`/news/${item.slug}`}
                            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded transition-colors duration-200 mt-4"
                        >
                            Xem thêm
                            <span><MoveUpRight size={16} strokeWidth={3} /></span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
