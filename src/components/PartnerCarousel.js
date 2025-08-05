'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { useNextSanityImage } from 'next-sanity-image';
import { client } from '@/sanity/lib/client';

const fallbackPartners = [
    { name: 'Kim Đỉnh', logo: '/images/logo_kimdinh.png' },
    { name: 'Hoa Phat', logo: '/images/hoaphat.png' },
    { name: 'Song Gianh', logo: '/images/songgianh.png' },
    { name: 'Viglacera', logo: '/images/vigla.png' },
    { name: 'Vina', logo: '/images/vina.png' },
    { name: 'Đồng Tâm', logo: '/images/dongtam.jpg' },
];

export default function PartnerCarousel({ data }) {
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
                <div className="absolute -bottom-18 left-0 w-full px-6 z-10 pb-4">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        spaceBetween={20}
                        slidesPerView={2}
                        breakpoints={{
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {partnersToRender.map((partner, index) => {
                            const isSanityImage = partner.logo && typeof partner.logo === 'object' && partner.logo.asset;
                            const imageProps = isSanityImage ? useNextSanityImage(client, partner.logo) : null;

                            return (
                                <SwiperSlide key={partner.name + index}>
                                    <div className="bg-white w-full h-[100px] rounded-xl shadow-lg flex items-center justify-center">
                                        {imageProps ? (
                                            <Image
                                                {...imageProps}
                                                alt={partner.name}
                                                className="object-contain"
                                                style={{ maxHeight: '60px', width: 'auto', height: '100%' }}
                                            />
                                        ) : (
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={150}
                                                height={60}
                                                className="object-contain max-h-[60px]"
                                            />
                                        )}
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    {/* Arrows */}
                    <div className="absolute top-[50%] left-0 -translate-y-1/2 z-20">
                        <button className="swiper-button-prev-custom bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                            <svg className="w-4 h-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13 16l-5-5 5-5v10z" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute top-[50%] right-0 -translate-y-1/2 z-20">
                        <button className="swiper-button-next-custom bg-white rounded-full p-2 shadow-md hover:bg-gray-100">
                            <svg className="w-4 h-4 text-black" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M7 4l5 5-5 5V4z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
