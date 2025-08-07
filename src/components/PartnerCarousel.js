'use client';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import {useNextSanityImage} from 'next-sanity-image';
import {client} from '@/sanity/lib/client';
import {useMemo} from "react";

const fallbackPartners = [
    {name: 'Kim Đỉnh', logo: '/images/logo_kimdinh.png'},
    {name: 'Hoa Phat', logo: '/images/hoaphat.png'},
    {name: 'Song Gianh', logo: '/images/songgianh.png'},
    {name: 'Viglacera', logo: '/images/vigla.png'},
    {name: 'Vina', logo: '/images/vina.png'},
    {name: 'Đồng Tâm', logo: '/images/dongtam.jpg'},
];

function PartnerLogo({ partner }) {
    // Always call the hook, but pass null if it's not a Sanity image
    const sanityImage = (partner.logo && typeof partner.logo === "object" && partner.logo.asset)
        ? partner.logo
        : null;

    const sanityImageProps = useNextSanityImage(client, sanityImage);
    const isSanityImage = sanityImage !== null;

    return (
        <div className="bg-white w-full h-[100px] rounded-xl shadow-lg flex items-center justify-center p-4">
            {sanityImageProps ? (
                <Image
                    {...sanityImageProps}
                    alt={partner.name}
                    className="object-contain max-w-full max-h-full"
                    style={{ maxHeight: '60px', width: 'auto' }}
                />
            ) : (
                <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={60}
                    className="object-contain max-w-full max-h-[60px]"
                />
            )}
        </div>
    );
}

export default function PartnerCarousel({data}) {
    // Determine which data to use
    const partnersToRender = Array.isArray(data) && data.length > 0 ? data : fallbackPartners;

    return (
        <section>
            <div className="relative max-w-6xl mx-auto mb-28 px-4">
                {/* Header */}
                <div className="bg-orange-400 text-white text-center pb-24 pt-8 rounded-[2.5rem] shadow-md">
                    <h2 className="text-4xl font-bold">Đối tác của chúng tôi</h2>
                </div>

                {/* Carousel */}
                <div className="absolute -bottom-[4.5rem] left-0 w-full px-6 z-10 pb-4">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            640: {slidesPerView: 3},
                            768: {slidesPerView: 4},
                            1024: {slidesPerView: 5},
                        }}
                        className="partner-swiper"
                    >
                        {partnersToRender.map((partner, index) => (
                            <SwiperSlide key={`${partner.name}-${index}`}>
                                <PartnerLogo partner={partner} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation Arrows */}
                    <div className="absolute top-1/2 left-2 -translate-y-1/2 z-20">
                        <button
                            className="swiper-button-prev-custom bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                            aria-label="Previous partners"
                        >
                            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-1/2 right-2 -translate-y-1/2 z-20">
                        <button
                            className="swiper-button-next-custom bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200"
                            aria-label="Next partners"
                        >
                            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}