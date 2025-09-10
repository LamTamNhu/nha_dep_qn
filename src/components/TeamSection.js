"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";

export default function TeamSection({data}) {
    const members = data?.members || [];

    const Card = ({person}) => (
        <div className="relative">
            <div className="relative aspect-2/3 w-full mb-4 overflow-hidden group">
                <Image
                    src={person.thumbnailUrl}
                    alt={person.name}
                    fill
                    className="object-cover object-top mx-auto"
                />
                {person.aboutShort && (
                    <div
                        className="absolute bottom-0 w-full p-4 flex items-center justify-center
               bg-orange-400/70 text-white text-base line-clamp-2
               transform translate-y-full opacity-0
               group-hover:translate-y-0 group-hover:opacity-100
               transition-all duration-500"
                    >
                        <p className='text-base text-white line-clamp-2 text-center'>{person.aboutShort}</p>
                    </div>
                )}
            </div>
            <h3 className="text-white font-bold text-xl mb-2">
                {person.name}
            </h3>
            <p className="text-gray-300 text-sm">{person.title}</p>

        </div>
    );

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
                        ĐỘI NGŨ
                    </h2>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    loop
                    spaceBetween={16}
                    slidesPerView={2}
                    breakpoints={{
                        640: { slidesPerView: 3, spaceBetween: 16 },
                        1024: { slidesPerView: 4, spaceBetween: 24 },
                    }}
                    className="!px-1 gallery-reveal relative"
                >
                    {members.map((m) => (
                        <SwiperSlide key={m.name}>
                            <Card person={m} />
                        </SwiperSlide>
                    ))}

                    {/* Arrows */}
                    <div className="swiper-button-prev !text-orange-400"/>
                    <div className="swiper-button-next !text-orange-400"/>
                </Swiper>
            </div>
        </section>
    );
}
