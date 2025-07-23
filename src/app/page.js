"use client";
import {ArrowUpRight, Eye, Goal, HandCoins, HeartHandshake, Paintbrush, ShieldCheck, Users,} from "lucide-react";
import * as React from "react";
import {useEffect, useState} from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProcessSection from "../components/ProcessSection";
import SectionHeading from "@/components/SectionHeading";
import animateOnObserve from "@/lib/animateOnObserve";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import {client} from "@/sanity/lib/client";
import {urlFor} from "@/sanity/lib/image";
import {homepageQuery} from "@/sanity/lib/queries";

export default function Home() {
    const [content, setContent] = useState(null);

    useEffect(() => {
        client.fetch(homepageQuery).then((data) => {
            if (data?.heroSlides) {
                data.heroSlides = data.heroSlides.map((img) => ({
                    ...img,
                    url: urlFor(img).url(),
                }));
            }
            if (data?.testimonialImage) {
                data.testimonialImageUrl = urlFor(data.testimonialImage).url();
            }
            setContent(data);
        });

        // Set up animations after DOM is ready
        const swingObserver = animateOnObserve('.swing-in-top-fwd-2');
        const slideObserver = animateOnObserve('.slide-in-bottom');
        const slideInObserver = animateOnObserve('.slide-in-right');
        const puffInObserver = animateOnObserve('.puff-in-center');

        // Cleanup function to disconnect observers
        return () => {
            swingObserver.disconnect();
            slideObserver.disconnect();
            slideInObserver.disconnect();
            puffInObserver.disconnect();
        };
    }, []);

    if (!content) return null;

    const iconComponents = [HeartHandshake, Goal, Eye];
    const cardData = content.coreValues?.map((cv, idx) => ({
        id: `core-${idx}`,
        icon: React.createElement(iconComponents[idx] || HeartHandshake, { size: 70 }),
        title: cv.title,
        description: cv.description,
        cardBgColor: idx === 0 ? 'bg-orange-400' : 'bg-gray-50',
        titleColor: idx === 0 ? 'text-white' : 'text-gray-800',
        descriptionColor: idx === 0 ? 'text-white' : 'text-gray-500',
        iconWrapperBgColor: idx === 0 ? 'bg-orange-50' : 'bg-gray-50',
        iconColorClass: idx === 0 ? 'text-orange-500' : 'text-gray-800',
        iconBorderColor: idx === 0 ? 'border-orange-500' : 'border-gray-800',
    }));

    return (
        <div className="min-h-screen relative bg-white">
            {/*<HeroCarousel/>*/}
            <HeroCarousel
                slides={content.heroSlides}
                title={content.heroTitle}
                subtitle={content.heroSubtitle}
            />
            {/* Introduction section */}
            <div className="py-12 px-4 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeading>
                        {content.introHeading}
                    </SectionHeading>

                    <h3 className="text-md font-semibold mb-2 text-white text-justify swing-in-top-fwd-2">
                        {content.introText}
                    </h3>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="py-16 px-4 font-sans bg-black">
                <div className="max-w-6xl mx-auto">
                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {cardData.map((card) => (
                            <div
                                key={card.id}
                                className={`slide-in-right relative rounded-4xl shadow-xl p-8 flex flex-col items-center text-justify transition-transform duration-300 hover:scale-105 ${card.cardBgColor}`}
                            >
                                {/* Icon Wrapper */}
                                <div
                                    className={`absolute -top-12 w-24 h-24 ${card.iconWrapperBgColor} rounded-full flex items-center justify-center shadow-md border-4 ${card.iconBorderColor}`}
                                >
                                    {/* Clone the icon and apply specific color for the icon itself */}
                                    {React.cloneElement(card.icon, {
                                        className: `w-12 h-12 ${card.iconColorClass}`,
                                    })}
                                </div>

                                {/* Adjust padding-top for content to account for the absolute icon */}
                                <div className="pt-10">
                                    {/* Title */}
                                    <h3 className={`text-2xl font-bold mb-4 ${card.titleColor}`}>
                                        {card.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`leading-relaxed ${card.descriptionColor}`}>
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* Why Choose Us Section */}
            <section className="py-12 px-4 bg-white">
                <div className="container mx-auto max-w-6xl mx-auto px-4">
                    <SectionHeading>
                        {content.chooseUsTitle}
                    </SectionHeading>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
                        <div className="swing-in-top-fwd-2">
                            <WhyChooseUs/>
                        </div>
                        <div className="slide-in-bottom">
                            {content.chooseUsBullets?.map((item, i) => (
                                <p key={i} className="w-full text-md text-justify leading-relaxed">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">*/}
                    {/*    /!* Card 1 *!/*/}
                    {/*    <div*/}
                    {/*        className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">*/}
                    {/*        <div className="flex flex-col items-center p-10">*/}
                    {/*            <div*/}
                    {/*                className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">*/}
                    {/*                <ShieldCheck width={48} height={48} color="white"/>*/}
                    {/*            </div>*/}
                    {/*            <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">*/}
                    {/*                Ưu tiên chất lượng hàng đầu*/}
                    {/*            </h3>*/}
                    {/*            <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">*/}
                    {/*                Sử dụng vật liệu đạt chuẩn, đảm bảo an toàn và bền vững lâu*/}
                    {/*                dài, cam kết chất lượng 100% như báo giá.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">*/}
                    {/*        <div className="flex flex-col items-center p-10">*/}
                    {/*            <div*/}
                    {/*                className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">*/}
                    {/*                <Users width={48} height={48} color="white"/>*/}
                    {/*            </div>*/}
                    {/*            <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">*/}
                    {/*                Đầu tư chất lượng đội ngũ*/}
                    {/*            </h3>*/}
                    {/*            <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">*/}
                    {/*                Hầu hết KTS, kỹ sư, chuyên viên có kinh nghiệm 7-15 năm trong*/}
                    {/*                lĩnh vực nghiên cứu, thiết kế kiến trúc và thi công xây dựng.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">*/}
                    {/*        <div className="flex flex-col items-center p-10">*/}
                    {/*            <div*/}
                    {/*                className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">*/}
                    {/*                <Paintbrush width={48} height={48} color="white"/>*/}
                    {/*            </div>*/}
                    {/*            <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">*/}
                    {/*                Đa dạng mẫu mã*/}
                    {/*            </h3>*/}
                    {/*            <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">*/}
                    {/*                Sở hữu hơn 3000 mẫu thiết kế hiện đại, liên tục cập nhật xu*/}
                    {/*                hướng, sẵn sàng điều chỉnh đến khi khách hàng thật sự hài*/}
                    {/*                lòng.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div*/}
                    {/*        className="rounded-4xl group relative bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl cursor-pointer">*/}
                    {/*        <div className="flex flex-col items-center p-10">*/}
                    {/*            <div*/}
                    {/*                className="w-20 h-20 mb-4 rounded-full bg-orange-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">*/}
                    {/*                <HandCoins width={48} height={48} color="white"/>*/}
                    {/*            </div>*/}
                    {/*            <h3 className="text-lg font-semibold text-orange-500 mb-2 group-hover:text-orange-300 transition-colors duration-300  text-justify">*/}
                    {/*                Giá cả cạnh tranh*/}
                    {/*            </h3>*/}
                    {/*            <p className="text-gray-700 text-base leading-relaxed  text-justify mt-2 group-hover:text-gray-500">*/}
                    {/*                Báo đúng giá rõ ràng, minh bạch, đảm bảo cạnh tranh trên thị*/}
                    {/*                trường.*/}
                    {/*            </p>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </section>

            <ProcessSection/>

            {/* Công trình thiết kế Section */}
            <section className="py-12 px-4 md:px-10 bg-black">
                <div className="max-w-370 grid grid-cols-1 md:grid-cols-4 gap-8 items-end ml-auto">
                    {/* Text Column */}
                    <div className="md:col-span-1 flex flex-col h-full ">
                        <div>
                            <SectionHeading>
                                {content.designHeading}
                            </SectionHeading>

                            <p className="text-base mb-8 leading-relaxed text-white">
                                {content.designText}
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max"
                        >
                            Xem thêm
                            <ArrowUpRight/>
                        </a>
                    </div>
                    {/* Images Grid */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 slide-in-right">
                        {[
                            {
                                img: "/thumbnails/1.jpg",
                                alt: "Tổng hợp 30+ mẫu nhà phố đẹp nhất",
                                desc: "Nhà phố hiện đại 3 tầng, tối ưu ánh sáng tự nhiên và không gian xanh.",
                            },
                            {
                                img: "/thumbnails/2.jpg",
                                alt: "Project 2",
                                desc: "Biệt thự sân vườn sang trọng, không gian mở kết nối thiên nhiên.",
                            },
                            {
                                img: "/thumbnails/3.jpg",
                                alt: "Project 3",
                                desc: "Nội thất phòng khách hiện đại, tối giản, tiện nghi và ấm cúng.",
                            },
                            {
                                img: "/thumbnails/4.jpg",
                                alt: "Project 4",
                                desc: "Nhà cấp 4 mái Nhật, thiết kế tối ưu công năng cho gia đình trẻ.",
                            },
                            {
                                img: "/thumbnails/5.jpg",
                                alt: "Project 5",
                                desc: "Biệt thự phố 2 mặt tiền, phong cách hiện đại, sang trọng.",
                            },
                            {
                                img: "/thumbnails/6.jpg",
                                alt: "Project 6",
                                desc: "Nhà phố 4 tầng, thiết kế thông thoáng, tối ưu diện tích đất.",
                            },
                        ].map((project, i) => (
                            <div
                                key={i}
                                className="group aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer"
                            >
                                <Image
                                    src={project.img}
                                    alt={project.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute text-center flex flex-col justify-center items-center inset-0 bg-orange-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                    <div className="text-white text-xl font-semibold px-4">{project.alt}</div>
                                    <div className="text-black text-md font-normal px-4">
                                        {project.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*THI CÔNG THỰC TẾ section*/}
            <section className="py-12 px-4 md:px-10 bg-gray-50">
                <div className="max-w-370 grid grid-cols-1 md:grid-cols-4 gap-8 items-end mr-auto">
                    {/* Images Grid */}
                    <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 puff-in-center">
                        {[
                            {
                                img: "/thumbnails/7.jpg",
                                alt: "Project 1",
                                desc: "Nhà phố hiện đại 3 tầng, tối ưu ánh sáng tự nhiên và không gian xanh.",
                            },
                            {
                                img: "/thumbnails/8.jpg",
                                alt: "Project 2",
                                desc: "Biệt thự sân vườn sang trọng, không gian mở kết nối thiên nhiên.",
                            },
                            {
                                img: "/thumbnails/9.jpg",
                                alt: "Project 3",
                                desc: "Nội thất phòng khách hiện đại, tối giản, tiện nghi và ấm cúng.",
                            },
                            {
                                img: "/thumbnails/10.jpg",
                                alt: "Project 4",
                                desc: "Nhà cấp 4 mái Nhật, thiết kế tối ưu công năng cho gia đình trẻ.",
                            },
                            {
                                img: "/thumbnails/11.jpg",
                                alt: "Project 5",
                                desc: "Biệt thự phố 2 mặt tiền, phong cách hiện đại, sang trọng.",
                            },
                            {
                                img: "/thumbnails/12.jpg",
                                alt: "Project 6",
                                desc: "Nhà phố 4 tầng, thiết kế thông thoáng, tối ưu diện tích đất.",
                            },
                        ].map((project, i) => (
                            <div
                                key={i}
                                className="group aspect-[3/2] bg-gray-200 rounded-2xl overflow-hidden relative cursor-pointer"
                            >
                                <Image
                                    src={project.img}
                                    alt={project.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                                <div
                                    className="absolute text-center flex flex-col justify-center items-center inset-0 bg-orange-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                                    <div className="text-white text-xl font-semibold px-4">{project.alt}</div>
                                    <div className="text-black text-md font-normal px-4">
                                        {project.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Text Column */}
                    <div className="md:col-span-1 flex flex-col h-full">
                        <div>
                            <SectionHeading>
                                {content.thiCongHeading}
                            </SectionHeading>
                            <p className="text-base mb-8 leading-relaxed">
                                {content.thiCongText}
                            </p>
                        </div>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max"
                        >
                            Xem thêm
                            <ArrowUpRight/>
                        </a>
                    </div>
                </div>
            </section>

            {/*Partners*/}
            <PartnerCarousel/>

            {/* Testimonial Section */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeading>
                        {content.testimonialHeading}
                    </SectionHeading>
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                        {/* Left: Quote */}
                        <div className="col-span-1 flex flex-col items-center md:items-start puff-in-center">
                            <div className="text-orange-500 text-5xl mb-4">“</div>
                            <blockquote
                                className="text-2xl font-semibold italic text-gray-900 mb-6 text-justify md:text-left">
                                {content.testimonialQuote}
                            </blockquote>
                            <div className="text-orange-500 text-5xl self-end">”</div>
                            <div className="w-16 h-1 bg-orange-400 mt-8 mb-2"/>
                        </div>

                        {/* Center: Image */}
                        <div className="col-span-1 flex justify-center swing-in-top-fwd-2">
                            <div
                                className="relative w-72 h-80 overflow-hidden shadow-lg bg-white flex items-center justify-center">
                                <Image
                                    src={content.testimonialImageUrl}
                                    alt={content.testimonialAuthor}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-0 right-0 m-4 grid grid-cols-3 gap-1">
                                    {Array.from({length: 9}).map((_, i) => (
                                        <span
                                            key={i}
                                            className="w-2 h-2 rounded-full bg-orange-300 inline-block"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        {/* Right: Details */}
                        <div className="col-span-1 flex flex-col items-center md:items-start mb-16 slide-in-right">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-justify md:text-left">
                                {content.testimonialAuthor}
                            </h3>
                            <p className="text-base text-gray-700 mb-8 text-justify md:text-left">
                                {content.testimonialText}
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 bg-orange-400 hover:bg-orange-300 text-white font-semibold px-6 py-3 rounded transition-colors duration-200 w-max mb-4"
                            >
                                THAM QUAN NHÀ HOÀN THIỆN
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm/>
            <div className="pb-70 bg-white"/>
        </div>
    );
}
