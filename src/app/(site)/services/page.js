"use client";

import Banner from '@/components/ui/banner';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ContactForm from '../../../components/ContactForm';
import { client } from "@/sanity/lib/client";
import { servicesPageQuery } from "@/sanity/lib/queries";

const fallbackServices = [
  {
    id: 1,
    title: "Thiết kế thi công trọn gói",
    description: "Cung cấp giải pháp toàn diện từ thiết kế đến thi công, đảm bảo tiến độ và chất lượng.",
    image: "https://nhadepquangnam.vn/wp-content/uploads/2025/06/Ban-sao-cua-File-hinh-vuong-1-1000x1000.jpg",
    alt: "Thiết kế thi công trọn gói",
  },
  {
    id: 2,
    title: "Thiết kế thi công nội thất",
    description: "Tạo nên không gian sống hoàn hảo với nội thất tinh tế và hiện đại.",
    image: "/thumbnails/2.jpg",
    alt: "Thiết kế thi công nội thất",
  },
  {
    id: 3,
    title: "Thiết kế kiến trúc",
    description: "Thiết kế kiến trúc sáng tạo, phù hợp với nhu cầu và phong cách riêng.",
    image: "/thumbnails/3.jpg",
    alt: "Thiết kế kiến trúc",
  },
  {
    id: 4,
    title: "Thi công phần thô",
    description: "Xây dựng phần thô chắc chắn, đúng kỹ thuật và chuẩn bị cho hoàn thiện.",
    image: "/thumbnails/4.jpg",
    alt: "Thi công phần thô",
  },
  {
    id: 5,
    title: "Thi công hoàn thiện",
    description: "Hoàn thiện công trình với chi tiết cao, mang lại không gian sống lý tưởng.",
    image: "/thumbnails/5.jpg",
    alt: "Thi công hoàn thiện",
  },
  {
    id: 6,
    title: "Thi công nhà đã có bảng vẽ",
    description: "Thực hiện thi công dựa trên bản vẽ sẵn, đảm bảo đúng thiết kế ban đầu.",
    image: "/thumbnails/6.jpg",
    alt: "Thi công nhà đã có bảng vẽ",
  },
];
const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    client.fetch(servicesPageQuery).then((data) => {
      setServices(data?.services || []);
    });
  }, []);

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
      { threshold: 0.2 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [services]);

  const displayServices = services.length ? services : fallbackServices;

  return (
    <div className="min-h-screen bg-[#272727]">
      <Banner title="DỊCH VỤ" />
      <div className="container mx-auto px-6 md:px-10">
        {displayServices.map((service, index) => (
          <div
            key={service.slug || service.id}
            className={`service-section flex flex-col md:flex-row min-h-[630px] justify-center w-full max-w-[1240px] mb-30 mx-auto px-20 gap-10 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } ${index % 2 === 0 ? 'odd' : 'even'}`}
          >
            <div className="w-full md:w-1/2 p-4 service-description flex flex-col justify-center">
              <h2 className="text-lg md:text-4xl md:whitespace-nowrap font-bold text-left text-orange-400 mb-6 ">
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
      </div>
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
      <div className="h-70 bg-[#272727]"/>
    </div>
  );
};

export default ServicesPage;