import * as React from "react";
import Image from "next/image";

export default function VisionSection({ data }) {
    const fallback = {
        vision: {
            title: "Tầm nhìn",
            description1: "Trở thành công ty xây dựng hàng đầu tại Việt Nam, được công nhận về sự xuất sắc trong thiết kế, thi công và quản lý dự án.",
            description2: "Chúng tôi hướng tới việc tạo ra những công trình mang tính biểu tượng, đóng góp vào sự phát triển bền vững của đất nước.",
            images: ["/images/TUYEN-DUNG.jpg", "/images/vision2.jpg"],
        },
        mission: {
            title: "Sứ mệnh",
            description1: "Xây dựng những công trình chất lượng cao, an toàn và thân thiện với môi trường, góp phần phát triển hạ tầng và nâng cao chất lượng cuộc sống cộng đồng",
            description2: "Chúng tôi luôn đồng hành cùng đối tác để hiện thực hóa mọi dự án.",
            images: ["/images/TUYEN-DUNG.jpg", "/images/vision2.jpg"],
        },
    };

    const vision = data?.vision || fallback.vision;
    const mission = data?.mission || fallback.mission;

    const renderImages = (images, altPrefix) => (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {images?.map((img, idx) => (
                <Image
                    key={idx}
                    src={img.url || img}
                    alt={`${altPrefix}-${idx + 1}`}
                    width={300}
                    height={400}
                    className="object-cover aspect-[3/4]"
                />
            ))}
        </div>
    );

    return (
        <section className="py-16 px-4">
            {/* First Section - Text Left, Images Right */}
            <div className="max-w-6xl mx-auto flex items-center gap-8 mb-16">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-right">
                    <p className="text-orange-400 text-5xl font-bold mb-4">{vision.title}</p>
                    <div className="w-12 h-[2px] bg-gray-300 ml-auto my-4"/>
                    <p className="mb-4">{vision.description1}</p>
                    <p>{vision.description2}</p>
                </div>

                {/* Right Side - Images */}
                {renderImages(vision.images, 'vision')}
            </div>

            {/* Second Section - Images Left, Text Right */}
            <div className="max-w-6xl mx-auto flex items-center gap-8">
                {/* Left Side - Images */}
                {renderImages(mission.images, 'mission')}

                {/* Right Side - Text Content */}
                <div className="flex-1 text-left ml-auto">
                    <p className="text-orange-400 text-5xl font-bold mb-4">{mission.title}</p>
                    <div className="w-12 h-[2px] bg-gray-300 my-4"/>
                    <p className="mb-4">{mission.description1}</p>
                    <p>{mission.description2}</p>
                </div>
            </div>
        </section>
    )
}