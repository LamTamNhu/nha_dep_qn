'use client';

import {useState} from 'react';
import Image from 'next/image';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Thumbs} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';

export default function ProjectGallery({images = []}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    if (!images.length) return null;
    return (
        <div>
            <Swiper
                modules={[Thumbs]}
                thumbs={{swiper: thumbsSwiper}}
                spaceBetween={10}
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
                slidesPerView={Math.min(4, images.length)}
                watchSlidesProgress
            >
                {images.map((img, idx) => (
                    <SwiperSlide key={`thumb-${idx}`}>
                        <Image
                            src={img.url}
                            alt={img.alt || `thumb-${idx}`}
                            width={150}
                            height={100}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
