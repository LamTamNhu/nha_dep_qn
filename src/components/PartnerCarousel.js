'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const partners = [
    { name: 'Kim Đỉnh', logo: '/images/logo_kimdinh.png' },
    { name: 'Hoa Phat', logo: '/images/hoaphat.png' },
    { name: 'Song Gianh', logo: '/images/songgianh.png' },
    { name: 'Viglacera', logo: '/images/vigla.png' },
    { name: 'Vina', logo: '/images/vina.png' },
    { name: 'Đồng Tâm', logo: '/images/dongtam.jpg' },
];

export default function PartnerCarousel() {
    return (
        <div className="relative max-w-6xl mx-auto mb-24 px-4">
            {/* Blue rounded container */}
            <div className="bg-orange-400 text-white text-center py-10 rounded-[2.5rem] shadow-md">
                <h2 className="text-3xl sm:text-2xl font-bold">
                    Đối tác của chúng tôi
                </h2>
            </div>

            {/* Floating carousel */}
            <div className="absolute -bottom-20 left-0 w-full px-6 z-10">
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
                    className="pt-6"
                >
                    {partners.map((partner) => (
                        <SwiperSlide key={partner.name}>
                            <div className="bg-white w-full h-[100px] rounded-xl shadow-lg flex items-center justify-center">
                                <img
                                    src={partner.logo}
                                    alt={partner.name}
                                    className="max-h-[60px] object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
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
    );
}
