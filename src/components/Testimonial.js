'use client';

import * as React from 'react';
import Image from 'next/image';
import {Quote, ChevronLeft, ChevronRight} from 'lucide-react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {
    Autoplay,
    EffectCards,
    EffectCoverflow,
    EffectCreative,
    EffectFade,
    Navigation,
    Pagination
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useNextSanityImage} from 'next-sanity-image';
import {client} from '@/sanity/lib/client';

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
            <div className="flex flex-col bg-white p-6 md:h-60 md:max-h-60 overflow-hidden">
                <Quote className="mb-2 hidden text-center text-5xl text-orange-500 flex-shrink-0 sm:flex"/>
                <blockquote
                    className="mb-2 whitespace-pre-line text-center text-sm font-normal italic text-black flex-1 overflow-hidden line-clamp-6 md:text-base md:line-clamp-none">
                    {testimonial.quote}
                </blockquote>
                <Quote className="mb-6 hidden self-end text-5xl text-orange-500 flex-shrink-0 sm:flex"/>
                {testimonial?.link && (
                    <a href={testimonial.link}
                       className="self-end text-sm text-orange-400 underline flex-shrink-0 md:text-base">
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

    const testimonialsToRender = testimonialsFromData.length > 0 ? testimonialsFromData : null;
    const hasMultipleTestimonials = testimonialsToRender.length > 1;

    return (
        <section className="bg-black px-4 py-12">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative flex flex-row">
                    {/* Navigation Arrows - At the bottom */}
                    {hasMultipleTestimonials && (
                        <button
                            className="testimonial-swiper-button-prev flex items-center justify-center rounded-full text-orange-400 backdrop-blur-sm transition-all duration-300 hover:text-white">
                            <ChevronLeft className="h-12 w-12"/>
                        </button>

                    )}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                        slidesPerView={1}
                        effect="coverflow"
                        speed={800}
                        spaceBetween={32}
                        grabCursor={true}
                        loop={hasMultipleTestimonials}
                        autoplay={hasMultipleTestimonials ? {
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        } : false}
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
                    {hasMultipleTestimonials && (<button
                        className="testimonial-swiper-button-next flex items-center justify-center rounded-full text-orange-400 backdrop-blur-sm transition-all duration-300 hover:text-white">
                        <ChevronRight className="h-12 w-12"/>
                    </button>)}
                </div>
            </div>
        </section>
    );
}