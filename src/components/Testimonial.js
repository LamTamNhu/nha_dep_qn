'use client';

import * as React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';

// Fallback testimonial data
const fallback = {
    quote:
        'Cảm ơn các anh đã thiết kế và thi công cho vợ chồng em căn nhà rất ưng ý.\nChất lượng thì không cần phải đề cập vì đã tin tưởng làm công trình thứ 3 rồi!',
    authorName: 'Chị Thảo Duyên',
    authorInfo: 'Nhà phố 2 tầng | Vĩnh Phú – Thuận An',
    link: '#',
    avatar: '/images/quote.jpg',
};

export default function Testimonial({ data }) {
    const testimonial = data || fallback;

    // Check if avatar is a Sanity image or fallback path
    const isSanityImage =
        testimonial.avatar && typeof testimonial.avatar === 'object' && testimonial.avatar.asset;

    const imageProps = isSanityImage ? useNextSanityImage(client, testimonial.avatar) : null;

    return (
        <section className="py-12 px-4 bg-black">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid gril-cols-1 swing-in-top-fwd-2 place-content-center">
                    <div className="bg-white grid grid-cols-1 p-6">
                        <Quote className="text-orange-500 text-5xl mb-2 text-center" />
                        <blockquote className="text-md font-normal italic text-black mb-2 text-center md:text-left whitespace-pre-line">
                            {testimonial.quote}
                        </blockquote>
                        <Quote className="text-orange-500 text-5xl justify-self-end mb-6" />
                        <a href={testimonial?.link || '#'} className="justify-self-end underline text-orange-400">
                            Tham quan nhà hoàn thiện
                        </a>
                    </div>

                    <div className="text-orange-400 p-2 text-center flex items-center justify-center gap-4 mt-4">
                        <div className="w-12 h-12">
                            {imageProps ? (
                                <Image
                                    {...imageProps}
                                    alt={testimonial.authorName}
                                    className="rounded-full object-cover w-full h-full"
                                />
                            ) : (
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.authorName}
                                    width={48}
                                    height={48}
                                    className="rounded-full object-cover w-full h-full"
                                />
                            )}
                        </div>
                        <div>
                            <div>{testimonial.authorName}</div>
                            <div className="text-sm text-white/80">{testimonial.authorInfo}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
