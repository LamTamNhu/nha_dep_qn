'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Thumbs, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';

export default function ProjectGallery({images = []}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    if (!images.length) return null;
    return (
        <div>
            <Swiper
                modules={[Thumbs, Navigation]}
                thumbs={{swiper: thumbsSwiper}}
                spaceBetween={10}
                navigation
                className="mb-4"
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                        <Image
                            src={img.url}
                            alt={img.alt || `image-${idx}`}
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                modules={[Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={`thumb-${idx}`} className="!w-20 !h-20">
                        <Image
                            src={img.url}
                            alt={img.alt || `thumb-${idx}`}
                            width={80}
                            height={80}
                            className="object-cover w-full h-full cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
