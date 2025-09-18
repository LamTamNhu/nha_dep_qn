'use client';

import * as React from 'react';
import Image from 'next/image';
import {Quote, ChevronLeft, ChevronRight} from 'lucide-react';
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
                sizes="48px"
            />
        );
    }

    if (typeof avatar === 'string' && avatar) {
        return (
            <Image
                src={avatar}
                alt={alt}
                width={48}
                height={48}
                className="h-full w-full rounded-full object-cover"
            />
        );
    }

    return (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10">
            <Quote className="h-3 w-3 text-white/60"/>
        </div>
    );
}

function TestimonialCard({testimonial}) {
    return (
        <div className="grid grid-cols-1 place-content-center">
            <div className="flex flex-col bg-white p-6 h-60 max-h-60 overflow-hidden">
                <Quote className="mb-2 text-center text-5xl text-orange-500 flex-shrink-0"/>
                <blockquote className="mb-2 whitespace-pre-line text-center text-base font-normal italic text-black flex-1 overflow-hidden">
                    {testimonial.quote}
                </blockquote>
                <Quote className="mb-6 self-end text-5xl text-orange-500 flex-shrink-0"/>
                {testimonial?.link && (
                    <a href={testimonial.link} className="self-end text-orange-400 underline flex-shrink-0">
                        Tham quan nhà hoàn thiện
                    </a>
                )}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 p-2 text-center text-orange-400">
                <div className="h-12 w-12">
                    <AvatarImage
                        avatar={testimonial.avatar}
                        alt={testimonial.authorName || 'Khách hàng'}
                    />
                </div>
                <div>
                    <div>{testimonial.authorName}</div>
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
                <div className="relative">
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
                        pagination={hasMultipleTestimonials ? {
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet testimonial-bullet',
                            bulletActiveClass: 'swiper-pagination-bullet-active testimonial-bullet-active',
                        } : false}
                        className="testimonial-swiper pb-16"
                        style={{
                            '--swiper-pagination-color': '#fb923c',
                            '--swiper-pagination-bullet-inactive-color': '#ffffff66',
                            '--swiper-pagination-bullet-inactive-opacity': '1',
                            '--swiper-pagination-bottom': '0px',
                        }}
                    >
                        {testimonialsToRender.map((testimonial, index) => (
                            <SwiperSlide key={testimonial._key || testimonial._id || index}>
                                <TestimonialCard testimonial={testimonial}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    {hasMultipleTestimonials && (
                        <>
                            <button
                                className="testimonial-swiper-button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-white">
                                <ChevronLeft className="h-6 w-6"/>
                            </button>
                            <button
                                className="testimonial-swiper-button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-all duration-300 hover:bg-orange-500 hover:text-white">
                                <ChevronRight className="h-6 w-6"/>
                            </button>
                        </>
                    )}
                </div>

                {/* Custom Pagination Styles */}
                <style jsx>{`
                    .testimonial-bullet {
                        width: 12px !important;
                        height: 12px !important;
                        margin: 0 8px !important;
                        background: rgba(255, 255, 255, 0.4) !important;
                        opacity: 1 !important;
                        transition: all 0.3s ease !important;
                    }

                    .testimonial-bullet-active {
                        background: #fb923c !important;
                        transform: scale(1.2) !important;
                    }

                    .testimonial-bullet:hover {
                        background: rgba(251, 146, 60, 0.7) !important;
                        transform: scale(1.1) !important;
                    }
                `}</style>
            </div>
        </section>
    );
}