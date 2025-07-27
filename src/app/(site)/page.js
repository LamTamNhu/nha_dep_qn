"use client";
import {ArrowUpRight, Eye, Goal, HandCoins, HeartHandshake, Paintbrush, Quote, ShieldCheck, Users,} from "lucide-react";
import * as React from "react";
import {useEffect, useState} from "react";
import Image from "next/image";
import AnimatedCounter from "@/components/AnimatedCounter";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProcessSection from "../../components/ProcessSection";
import SectionHeading from "@/components/SectionHeading";
import animateOnObserve from "@/lib/animateOnObserve";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import {client} from "@/sanity/lib/client";
import {introQuery} from "@/sanity/lib/queries";
import ProcessTabs from "@/components/ui/ProcessTabs";

const cardData = [
    {
        id: "core-values",
        icon: <HeartHandshake size={70}/>,
        title: "Giá trị cốt lõi",
        description:
            "Chúng tôi cam kết chất lượng xây dựng, an toàn lao động và đổi mới công nghệ để mang lại những công trình bền vững và hiệu quả nhất. Sự hài lòng của khách hàng là ưu tiên hàng đầu của chúng tôi.",
        cardBgColor: "bg-orange-400",
        titleColor: "text-white",
        descriptionColor: "text-white",
        iconWrapperBgColor: "bg-orange-50",
        iconColorClass: "text-orange-500",
        iconBorderColor: "border-orange-500",
    },
    {
        id: "mission",
        icon: <Goal/>,
        title: "Sứ mệnh",
        description:
            "Xây dựng những công trình chất lượng cao, an toàn và thân thiện với môi trường, góp phần phát triển hạ tầng và nâng cao chất lượng cuộc sống cộng đồng. Chúng tôi luôn đồng hành cùng đối tác để hiện thực hóa mọi dự án.",
        cardBgColor: "bg-gray-50",
        titleColor: "text-gray-800",
        descriptionColor: "text-gray-500",
        iconWrapperBgColor: "bg-gray-50",
        iconColorClass: "text-gray-800",
        iconBorderColor: "border-gray-800",
    },
    {
        id: "vision",
        icon: <Eye/>,
        title: "Tầm nhìn",
        description:
            "Trở thành công ty xây dựng hàng đầu tại Việt Nam, được công nhận về sự xuất sắc trong thiết kế, thi công và quản lý dự án. Chúng tôi hướng tới việc tạo ra những công trình mang tính biểu tượng, đóng góp vào sự phát triển bền vững của đất nước.",
        cardBgColor: "bg-gray-50",
        titleColor: "text-gray-800",
        descriptionColor: "text-gray-500",
        iconWrapperBgColor: "bg-gray-50",
        iconColorClass: "text-gray-800",
        iconBorderColor: "border-gray-800",
    },
];
// Partners data
const partners = [
    {
        logo: "/images/logo_kimdinh.png",
        alt: "Kim Đỉnh Partner Logo",
    },
    {
        logo: "/images/hoaphat.png",
        alt: "logo Hoa Phat",
    },
    {
        logo: "/images/songgianh.png",
        alt: "Songgianh logo",
    },
    {
        logo: "/images/vina.png",
        alt: "Vina logo",
    },
    {
        logo: "/images/dongtam.jpg",
        alt: "Dong Tam Logo",
    },
    {
        logo: "/images/vigla.png",
        alt: "Viglacera Logo",
    },
];


export default function Home() {
    const [intro, setIntro] = useState(null);
    useEffect(() => {
        client.fetch(introQuery).then((data) => {
            setIntro(data);
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
    return (
        <div className="min-h-screen relative bg-white">
            {/*<HeroCarousel/>*/}
            <HeroCarousel/>
            {/* Introduction section */}
            <div className="py-12 px-4 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <SectionHeading>
                        {intro ? intro.heading : "Loading heading..."}
                    </SectionHeading>

                    <h3 className="text-md font-semibold mb-2 text-white text-justify swing-in-top-fwd-2">
                        {intro ? intro.description : "Loading description..."}
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
                        Tại sao chọn chúng tôi
                    </SectionHeading>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
                        <div className="swing-in-top-fwd-2">
                            <WhyChooseUs/>
                        </div>
                        <div className="slide-in-bottom">
                            <p className="w-full text-md text-justify leading-relaxed">
                                <span className="font-semibold">Ưu tiên chất lượng hàng đầu:</span> Sử dụng vật liệu đạt
                                chuẩn, đảm bảo an toàn và bền vững lâu dài cam kết chất lượng 100% như báo giá
                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                <span className="font-semibold">Đầu tư chất lượng đội ngũ:</span> Hầu hết KTS, kỹ sư,
                                chuyên viên có kinh nghiệm 7-15 năm trong lĩnh vực nghiên cứu, thiết kế kiến trúc và thi
                                công xây dựng
                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                <span className="font-semibold">Đa dạng mẫu mã:</span> Sở hữu hơn 3000 mẫu thiết kế hiện
                                đại, liên tục cập nhật xu hướng sẵn sàng điều chỉnh đến khi khách hàng thật sự hài lòng.
                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                <span className="font-semibold">Giá cả cạnh tranh:</span> Báo đúng giá rõ ràng, minh
                                bạch đảm bảo cạnh tranh trên thị trường
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProcessTabs/>

            {/* Công trình thiết kế Section */}
            <section className="py-12 px-4 md:px-10 bg-black">
                <div className="max-w-370 grid grid-cols-1 md:grid-cols-4 gap-8 items-end ml-auto">
                    {/* Text Column */}
                    <div className="md:col-span-1 flex flex-col h-full ">
                        <div>
                            <SectionHeading>
                                Công trình thiết kế
                            </SectionHeading>

                            <p className="text-base mb-8 leading-relaxed text-white">
                                Mỗi năm, NHÀ ĐẸP QUẢNG NAM thực hiện hàng trăm công trình thiết
                                kế ở mọi miền đất nước. Phong cách thiết kế chính là hiện đại -
                                tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng và
                                sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một
                                công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.
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
                                Thi công thực tế
                            </SectionHeading>
                            <p className="text-base mb-8 leading-relaxed">
                                Mỗi năm, NHÀ ĐẸP QUẢNG NAM thực hiện hàng trăm công trình thiết
                                kế ở mọi miền đất nước. Phong cách thiết kế chính là hiện đại -
                                tối giản - tiện nghi - thông thoáng. Ngoài ra, những ý tưởng và
                                sở thích của gia chủ cũng được ưu tiên hàng đầu, để tạo nên một
                                công trình nhà ở độc bản, mang đậm dấu ấn cá nhân.
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
            <section className="py-12 px-4 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid gril-cols-1 swing-in-top-fwd-2 place-content-center">
                            <div className="bg-white grid grid-cols-1 p-6">
                                <Quote className="text-orange-500 text-5xl mb-2 text-center"/>
                                <blockquote
                                    className="text-md font-normal italic text-black mb-2 text-center md:text-left">
                                    Cảm ơn các anh đã thiết kế và thi công cho vợ chồng em căn nhà rất ưng ý.
                                    <br/>
                                    Chất lượng thì không cần phải đề cập vì đã tin tưởng làm công trình thứ 3 rồi!
                                </blockquote>
                                <Quote className="text-orange-500 text-5xl justify-self-end mb-6"/>
                                <a
                                    href="#"
                                    className="justify-self-end underline text-orange-400"
                                >
                                    Tham quan nhà hoàn thiện
                                </a>
                            </div>

                            <div className="text-orange-400 p-2 text-center flex items-center justify-center gap-4 mt-4">
                                <div className="w-12 h-12">
                                    <Image src="/images/quote.jpg" alt="Profile" className="rounded-full object-cover w-full h-full" width={50} height={50} />
                                </div>
                                <div>
                                    Chị Thảo Duyên | Nhà phố 2 tầng | Vĩnh Phú – Thuận An
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ContactForm/>
            <div className="pb-70 bg-white"/>
        </div>
    );
}
