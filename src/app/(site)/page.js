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
import VisionSection from "@/components/VisionSection";

export default async function Home() {
    const data = await client.fetch(homepageQuery);
    const contactData = await client.fetch(contactFormQuery);

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
            <VisionSection data={data?.visionSection}/>
            {/* Why Choose Us Section */
            }
            <section className="py-12 px-4 sm:px-6 md:px-10 bg-white">
                <div className="container mx-auto">
                    <SectionHeading>
                        {data?.whyChooseUs?.title || "Tại sao chọn chúng tôi"}
                    </SectionHeading>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-40 items-center">
                        <div className="swing-in-top-fwd-2">
                            <WhyChooseUs data={data}/>
                        </div>
                        <div className="slide-in-bottom">
                            <p className="w-full text-md text-justify leading-relaxed">
                                {data?.whyChooseUs?.text1 ||
                                    <><span className="font-semibold">Ưu tiên chất lượng hàng đầu:</span> Sử dụng vật
                                        liệu đạt
                                        chuẩn, đảm bảo an toàn và bền vững lâu dài cam kết chất lượng 100% như báo giá
                                    </>}

                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                {data?.whyChooseUs?.text2 ||
                                    <>
                                        <span className="font-semibold">Đầu tư chất lượng đội ngũ:</span> Hầu hết KTS,
                                        kỹ
                                        sư,
                                        chuyên viên có kinh nghiệm 7-15 năm trong lĩnh vực nghiên cứu, thiết kế kiến
                                        trúc và
                                        thi
                                        công xây dựng
                                    </>}

                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                {data?.whyChooseUs?.text3 ||
                                    <>
                                        <span className="font-semibold">Đa dạng mẫu mã:</span> Sở hữu hơn 3000 mẫu thiết
                                        kế hiện
                                        đại, liên tục cập nhật xu hướng sẵn sàng điều chỉnh đến khi khách hàng thật sự
                                        hài lòng
                                    </>}

                            </p>
                            <p className="w-full text-md text-justify leading-relaxed">
                                {data?.whyChooseUs?.text4 ||
                                    <>
                                        <span className="font-semibold">Giá cả cạnh tranh:</span> Báo đúng giá rõ ràng,
                                        minh
                                        bạch đảm bảo cạnh tranh trên thị trường
                                    </>}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProcessTabs data={data?.processesTabs}/>

            {/* Công trình thiết kế Section */}
            <DesignShowCases data={data?.showcases}/>

            {/*THI CÔNG THỰC TẾ section*/}
            <ConstructionShowCases data={data.showcases}/>
            {/* Video Công trình */}
            <ConstructionVideo data={data?.constructionVideoSection}/>
            {/*Partners*/
            }
            <PartnerCarousel data={data?.partners}/>

            {/* Testimonial Section */
            }
            <Testimonial data={data?.testimonialSection}/>
        </div>
    )
        ;
}
