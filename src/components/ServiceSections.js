'use client';

import Image from 'next/image';
import {useEffect} from 'react';

export default function ServiceSections({services}) {
    useEffect(() => {
        const sections = document.querySelectorAll('.service-section');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && window.innerWidth >= 768) {
                        const images = entry.target.querySelectorAll('img');
                        let loadedCount = 0;
                        const totalImages = images.length;

                        if (totalImages === 0) {
                            entry.target.classList.add('animate');
                            return;
                        }

                        images.forEach((img) => {
                            if (img.complete) {
                                loadedCount++;
                                if (loadedCount === totalImages) {
                                    entry.target.classList.add('animate');
                                }
                            } else {
                                img.addEventListener('load', () => {
                                    loadedCount++;
                                    if (loadedCount === totalImages) {
                                        entry.target.classList.add('animate');
                                    }
                                });
                            }
                        });
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            {threshold: 0.2}
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [services]);

    return (
        <>
            {services.map((service, index) => (
                <div
                    key={service.slug || service.id}
                    className={`service-section flex flex-col md:flex-row min-h-[630px] justify-center w-full max-w-[1240px] mb-30 mx-auto px-20 gap-10 ${index % 2 === 0 ? 'md:flex-row odd' : 'md:flex-row-reverse even'}`}
                >
                    <div className="w-full md:w-1/2 p-4 service-description flex flex-col justify-center">
                        <h2 className="text-lg md:text-4xl md:whitespace-nowrap font-bold text-left text-orange-400 mb-6">
                            {service.title}
                        </h2>
                        <p className="text-white mb-4">{service.description}</p>
                        <a
                            href={`/services/${service.slug || service.id}`}
                            className="w-fit inline-block px-4 py-2 border border-orange-400 bg-white text-orange-400 text-center hover:text-white hover:!bg-orange-400 font-semibold rounded-full duration-200 text-lg"
                        >
                            Liên hệ
                        </a>
                    </div>
                    <div className="w-full md:w-1/2 p-4 service-image relative">
                        <Image
                            src={service.image}
                            alt={service.alt || service.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority={index === 0}
                        />
                    </div>
                </div>
            ))}
            <style jsx>{`
        .service-description,
        .service-image {
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        @media (min-width: 768px) {
          .odd .service-description,
          .even .service-image {
            opacity: 0;
            transform: translateX(-100px);
          }
          .odd .service-image,
          .even .service-description {
            opacity: 0;
            transform: translateX(100px);
          }

          .animate.odd .service-description,
          .animate.even .service-image {
            opacity: 1;
            transform: translateX(0);
          }
          .animate.odd .service-image,
          .animate.even .service-description {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </>
    );
}

