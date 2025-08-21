import Image from 'next/image';
import Link from 'next/link';
import {MoveUpRight} from 'lucide-react';

export default function NewsGrid({news = []}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
            {news.length > 0 && news.map(item => (
                <div
                    key={item._id}
                    className="bg-white items-center rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group h-[480px] flex flex-col"
                >
                    <div className="relative w-full h-64 overflow-hidden flex-shrink-0">

                        {item.image && (
                            <Link
                                href={`/news/${item.slug}`}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>
                        )}
                    </div>
                    <div className="p-4 flex flex-col items-center justify-between flex-grow">
                        <Link
                            href={`/news/${item.slug}`}>
                            <h3 className="text-md h-10 text-left font-semibold text-gray-900 leading-tight line-clamp-2">
                                {item.title}
                            </h3>
                        </Link>
                        {item.excerpt && (
                            <p className="text-sm text-left text-gray-600 line-clamp-2">{item.excerpt}</p>
                        )}
                        <Link
                            href={`/news/${item.slug}`}
                            className="inline-flex text-white text-center w-50 justify-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-medium px-4 py-2 rounded transition-colors duration-200"
                        >
                            Xem thêm
                            <span><MoveUpRight size={16} strokeWidth={3}/></span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
