'use client'
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProcessTabs({data}) {
    const [activeTab, setActiveTab] = useState("design");

    const tabs = [
        {
            id: "design",
            label: "QUY TRÌNH THIẾT KẾ",
            steps: [
                {
                    iconSrc: "/images/Artboard-5.png",
                    alt: "icon1",
                    title: "TRAO ĐỔI TƯ VẤN",
                    description: "Trao đổi yêu cầu, tư vấn định hướng ý tưởng, phong cách và mức đầu tư",
                },
                {
                    iconSrc: "/images/Artboard-6.png",
                    alt: "icon2",
                    title: "BÁO GIÁ QUY TRÌNH",
                    description: "Gửi khách hàng báo giá theo đúng gói thiết kế mà Khách Hàng đang đề cập, kèm quy trình làm việc cụ thể, chi tiết",
                },
                {
                    iconSrc: "/images/Artboard-7.png",
                    alt: "icon3",
                    title: "KÝ HỢP ĐỒNG",
                    description: "Thực hiện các thủ tục hành chính và bắt đầu triển khai các công việc theo tiến độ thống nhất",
                },
                {
                    iconSrc: "/images/Artboard-8.png",
                    alt: "icon4",
                    title: "BÀN GIAO & QUYẾT TOÁN",
                    description: "Sau khi thống nhất hồ sơ báo cáo tiến độ, khách hàng thanh toán lần cuối giá trị HĐ còn lại trước khi nhận hồ sơ hoàn chỉnh.",
                },
            ],
        },
        {
            id: "construction",
            label: "QUY TRÌNH THI CÔNG TRỌN GÓI",
            steps: [
                {
                    iconSrc: "/images/Artboard-5.png",
                    alt: "icon1",
                    title: "TRAO ĐỔI TƯ VẤN",
                    description: "Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.",
                },
                {
                    iconSrc: "/images/Artboard-6.png",
                    alt: "icon2",
                    title: "BÁO GIÁ QUY TRÌNH",
                    description: "Gửi báo giá thi công, chủng loại vật tư và Quy trình thi công để khách hàng nắm được thông tin.",
                },
                {
                    iconSrc: "/images/Artboard-9.png",
                    alt: "icon3",
                    title: "KÝ HỢP ĐỒNG",
                    description: "Hai bên gặp gỡ trao đổi thống nhất các vấn đề liên quan tiến độ, chất lượng, ngày khởi công và các điều khoản hợp đồng.",
                },
                {
                    iconSrc: "/images/Artboard-10.png",
                    alt: "icon4",
                    title: "BÀN GIAO & QUYẾT TOÁN",
                    description: "Kiểm tra, nghiệm thu và thanh quyết toán hợp đồng. Tiến hành bảo hành bảo trì dài hạn theo cam kết hợp đồng.",
                },
            ],
        },
    ];

    return (
        <section>
            {/* Tabs Header */}
            <div className="container mx-auto flex justify-center bg-white">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`text-xl w-sm px-4 py-2 ${activeTab === tab.id ? "bg-orange-400 text-white" : "bg-black text-white"}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="bg-black py-12 px-4">
                <div className="max-w-6xl mx-auto px-4">

                    {/* Process Steps */}
                    <div className="container mx-auto flex justify-between items-center px-4">
                        <div className="container mx-auto flex justify-between items-center px-4 space-x-8">
                            {tabs.find((tab) => tab.id === activeTab)?.steps.map((step, index) => (
                                <div key={index} className="flex items-start w-1/4 h-64 text-ellipsis">
                                    <div>
                                        <div className="w-32 h-32 mx-auto mb-2">
                                            <Image src={step.iconSrc} alt={step.alt} width={150} height={150} />
                                        </div>
                                        <h3 className="text-orange-400 text-lg text-center font-semibold mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-300 text-center">{step.description}</p>
                                    </div>
                                    {index < tabs.find((tab) => tab.id === activeTab)?.steps.length - 1 ? (
                                        <div className="w-16 flex justify-center self-center">
                                            <ArrowRight className="text-gray-300" size={40} />
                                        </div>
                                    ) : null}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}