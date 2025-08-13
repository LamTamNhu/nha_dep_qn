import {ArrowUpRight, Eye, Goal, HeartHandshake, Quote,} from "lucide-react";
import * as React from "react";
import PartnerCarousel from "@/components/PartnerCarousel";
import SectionHeading from "@/components/SectionHeading";
import HeroCarousel from "@/components/HeroCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import ContactForm from "@/components/ContactForm";
import {client} from "@/sanity/lib/client";
import ProcessTabs from "@/components/ProcessTabs";
import ClientSideAnimations from "@/lib/clientSideAnimations";
import {contactFormQuery, homepageQuery} from "@/sanity/lib/queries";
import ConstructionVideo from "@/components/ConstructionVideo";
import DesignShowCases from "@/components/DesignShowCases";
import ConstructionShowCases from "@/components/ConstructionShowCases";
import Testimonial from "@/components/Testimonial";
import { projectId, dataset } from "@/sanity/env";

export const revalidate = 60

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

export default async function Home() {
    let data = null
    let contactData = null
    if (projectId && dataset) {
        try {
            data = await client.fetch(homepageQuery)
            contactData = await client.fetch(contactFormQuery)
        } catch {
            data = null
            contactData = null
        }
    }

    return (
        <div className="min-h-screen overflow-x-hidden relative bg-white">
            <ClientSideAnimations/>
            {/*<HeroCarousel/>*/}
            <HeroCarousel data={data}/>
            {/* Introduction section */}
            <div className="py-12 px-4 bg-black">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-xl md:text-4xl font-bold text-center text-orange-400 swing-in-top-fwd-2 mb-6 md:whitespace-nowrap">
                        {data?.introduction?.title || "Loading heading..."}
                    </h1>
                    <h3 className="text-md font-semibold mb-2 text-white text-justify swing-in-top-fwd-2">
                        {data?.introduction?.description || "Loading description..."}
                    </h3>
                </div>
            </div>

            {/* Core Values Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl flex gap-4 mx-auto">
                    {/* Cards Grid */}
                    {cardData.map((card, index) => (
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
                                <h3 className={`text-2xl text-center font-bold mb-4 ${card.titleColor}`}>
                                    {data?.coreValues?.[index].title || card.title}
                                </h3>

                                {/* Description */}
                                <p className={`leading-relaxed ${card.descriptionColor}`}>
                                    {data?.coreValues?.[index].description || card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Why Choose Us Section */
            }
            <section className="py-12 px-4 bg-white">
                <div className="container max-w-6xl mx-auto px-4">
                    <WhyChooseUs data={data}/>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <ProcessTabs data={data}/>
                </div>
            </section>

            {/* Construction Video */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <ConstructionVideo data={data?.constructionVideoSection}/>
                </div>
            </section>

            {/* Design Showcases */}
            <DesignShowCases data={data?.showcases}/>
            {/* Construction Showcases */}
            <ConstructionShowCases data={data?.showcases}/>

            {/* Partner Carousel */}
            <section className="py-16 px-4 bg-black">
                <div className="max-w-6xl mx-auto">
                    <PartnerCarousel data={data?.partners}/>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <Testimonial data={data?.testimonialSection}/>
                </div>
            </section>

            {/* Contact section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <SectionHeading>THIẾT KẾ VÀ THI CÔNG NHÀ</SectionHeading>
                    <ContactForm data={contactData}/>
                </div>
            </section>

            {/* Floating buttons */}
            <div className="fixed bottom-4 right-4 z-50"></div>
        </div>
    );
}
