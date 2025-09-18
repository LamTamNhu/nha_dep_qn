'use client';

import * as React from 'react';
import Image from 'next/image';
import {Quote} from 'lucide-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useNextSanityImage} from 'next-sanity-image';
import {client} from '@/sanity/lib/client';

// Fallback testimonial data
const fallbackTestimonials = [
    {
        quote:
            'Cảm ơn các anh đã thiết kế và thi công cho vợ chồng em căn nhà rất ưng ý.\nChất lượng thì không cần phải đề cập vì đã tin tưởng làm công trình thứ 3 rồi!',
        authorName: 'Chị Thảo Duyên',
        authorInfo: 'Nhà phố 2 tầng | Vĩnh Phú – Thuận An',
        link: '#',
        avatar: '/images/quote.jpg',
    },
    {
        quote:
            'Đội ngũ kiến trúc sư và kỹ sư làm việc rất chuyên nghiệp, tư vấn tỉ mỉ từng chi tiết. Gia đình tôi hoàn toàn hài lòng với tiến độ và chất lượng công trình.',
        authorName: 'Anh Minh Tuấn',
        authorInfo: 'Biệt thự hiện đại | Quảng Ngãi',
        link: '#',
        avatar: '/images/quote.jpg',
    },
];

function AvatarImage({avatar, alt}) {
    const sanityImage = avatar && typeof avatar === 'object' && avatar.asset ? avatar : null;
    const imageProps = useNextSanityImage(client, sanityImage);

    if (sanityImage && imageProps) {
        return (
            <Image
                {...imageProps}
                alt={alt}
                className="h-full w-full rounded-full object-cover"
                sizes="56px"
            />
        );
    }

    if (typeof avatar === 'string' && avatar) {
        return (
            <Image
                src={avatar}
                alt={alt}
                width={56}
                height={56}
                className="h-full w-full rounded-full object-cover"
            />
        );
    }

    return (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10">
            <Quote className="h-5 w-5 text-white/60" />
        </div>
    );
}

function TestimonialCard({testimonial}) {
    return (
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <div className="w-full rounded-3xl bg-white p-6 shadow-xl md:p-10">
                <div className="flex flex-col gap-4">
                    <Quote className="mx-auto text-5xl text-orange-500 md:mx-0" />
                    <blockquote className="whitespace-pre-line text-center text-base font-normal italic text-black md:text-left md:text-lg">
                        {testimonial.quote}
                    </blockquote>
                    <Quote className="self-end text-5xl text-orange-500" />
                    {testimonial?.link && (
                        <div className="flex justify-center md:justify-end">
                            <a
                                href={testimonial.link}
                                className="text-sm font-semibold text-orange-500 underline underline-offset-4"
                            >
                                Tham quan nhà hoàn thiện
                            </a>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-col items-center gap-3 text-center text-orange-400 md:items-start md:text-left">
                <div className="h-14 w-14 overflow-hidden rounded-full bg-white/10">
                    <AvatarImage
                        avatar={testimonial.avatar}
                        alt={testimonial.authorName || 'Khách hàng'}
                    />
                </div>
                <div>
                    <div className="text-lg font-semibold text-orange-400">
                        {testimonial.authorName}
                    </div>
                    {testimonial.authorInfo && (
                        <div className="text-sm text-white/80">
                            {testimonial.authorInfo}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Testimonial({data}) {
    const testimonialsFromData = React.useMemo(() => {
        if (Array.isArray(data)) {
            return data;
        }

        if (data && typeof data === 'object') {
            return [data];
        }

        return [];
    }, [data]);

    const testimonialsToRender = testimonialsFromData.length > 0 ? testimonialsFromData : fallbackTestimonials;
    const hasMultipleTestimonials = testimonialsToRender.length > 1;

    return (
        <section className="bg-black px-4 py-12">
            <div className="mx-auto max-w-6xl px-4">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={1}
                    spaceBetween={32}
                    loop={hasMultipleTestimonials}
                    autoplay={hasMultipleTestimonials ? {delay: 7000, disableOnInteraction: false} : false}
                    navigation={hasMultipleTestimonials ? {
                        nextEl: '.testimonial-swiper-button-next',
                        prevEl: '.testimonial-swiper-button-prev',
                    } : false}
                    pagination={hasMultipleTestimonials ? {clickable: true} : false}
                    className="testimonial-swiper pb-10"
                    style={{
                        '--swiper-pagination-color': '#fb923c',
                        '--swiper-pagination-bullet-inactive-color': '#ffffff66',
                        '--swiper-pagination-bullet-inactive-opacity': '1',
                    }}
                >
                    {testimonialsToRender.map((testimonial, index) => (
                        <SwiperSlide key={testimonial._key || testimonial._id || index}>
                            <div className="swing-in-top-fwd-2">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {hasMultipleTestimonials && (
                    <div className="mt-4 flex items-center justify-end gap-3">
                        <button
                            className="testimonial-swiper-button-prev rounded-full bg-white p-3 shadow-lg transition-colors duration-200 hover:bg-gray-50"
                            aria-label="Xem lời chứng thực trước"
                        >
                            <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                        <button
                            className="testimonial-swiper-button-next rounded-full bg-white p-3 shadow-lg transition-colors duration-200 hover:bg-gray-50"
                            aria-label="Xem lời chứng thực tiếp theo"
                        >
                            <svg className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
