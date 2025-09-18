import Image from 'next/image';
import Link from 'next/link';
import {MoveUpRight} from 'lucide-react';

export default function NewsGrid({news = []}) {
    return (
        <div className="grid mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl">
            {news.length > 0 && news.map(item => (
                <div
                    key={item._id}
                    className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group h-fit flex flex-col overflow-hidden"
                >
                    <Link href={`/news/${item.slug}`} className="relative h-85 flex-shrink-0 overflow-hidden">
                        {item.image && (
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                            />
                        )}
                    </Link>
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
                            className="inline-flex mt-8 text-white text-center w-50 justify-center gap-2 bg-orange-400 hover:bg-orange-300 text-black font-medium px-4 py-2 rounded transition-colors duration-200"
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
