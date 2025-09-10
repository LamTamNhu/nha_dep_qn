"use client";

import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

export default function TeamSection({data}) {
    const members = data?.members || [];

    const Card = ({person}) => (
        <div className="text-center relative">
            <div className="relative aspect-2/3 w-full mb-4">
                <Image
                    src={person.thumbnailUrl}
                    alt={person.name}
                    fill
                    className="object-cover object-top mx-auto"
                />
                {person.aboutShort && (
                    <div
                        className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-700">
                        <p className='text-xl text-white'>{person.aboutShort}</p>
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
                    loop
                    spaceBetween={16}
                    slidesPerView={2}
                    breakpoints={{
                        640: {slidesPerView: 3, spaceBetween: 16},
                        1024: {slidesPerView: 4, spaceBetween: 24},
                    }}
                    className="!px-1 gallery-reveal"
                >
                    {members.map((m) => (
                        <SwiperSlide key={m.name}>
                            <Card person={m}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
