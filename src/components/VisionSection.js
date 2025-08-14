import * as React from "react";
import Image from "next/image";

export default function VisionSection() {
    return (
        <section className="py-16 px-4">
            {/* First Section - Text Left, Images Right */}
            <div className="max-w-6xl mx-auto flex items-center gap-8 mb-16">
                {/* Left Side - Text Content */}
                <div className="flex-1 text-right">
                    <p className="text-orange-400 text-5xl font-bold mb-4">
                        Tầm nhìn
                    </p>
                    <div className="w-12 h-[2px] bg-gray-300 ml-auto my-4"/>
                    <p className="mb-4">
                        Trở thành công ty xây dựng hàng đầu tại Việt Nam, được công nhận về sự xuất sắc trong thiết kế,
                        thi công và quản lý dự án.
                    </p>
                    <p>
                        Chúng tôi hướng tới việc tạo ra những công trình mang tính biểu
                        tượng, đóng góp vào sự phát triển bền vững của đất nước.
                    </p>
                </div>

                {/* Right Side - Images */}
                <div className="flex-1 flex gap-4 overflow-hidden">
                    <Image src="/images/TUYEN-DUNG.jpg" alt="vision-1" width={300} height={400}
                           className="object-cover aspect-[3/4] flex-1"/>
                    <Image src="/images/vision2.jpg" alt="vision-2" width={300} height={400}
                           className="object-cover aspect-[3/4] flex-1"/>
                </div>
            </div>

            {/* Second Section - Images Left, Text Right */}
            <div className="max-w-6xl mx-auto flex items-center gap-8">
                {/* Left Side - Images */}
                <div className="flex-1 flex gap-4 overflow-hidden">
                    <Image src="/images/TUYEN-DUNG.jpg" alt="mission-1" width={300} height={400}
                           className="object-cover aspect-[3/4] flex-1"/>
                    <Image src="/images/vision2.jpg" alt="mission-2" width={300} height={400}
                           className="object-cover aspect-[3/4] flex-1"/>
                </div>

                {/* Right Side - Text Content */}
                <div className="flex-1 text-left ml-auto">
                    <p className="text-orange-400 text-5xl font-bold mb-4">
                        Sứ mệnh
                    </p>
                    <div className="w-12 h-[2px] bg-gray-300 my-4"/>
                    <p className="mb-4">
                        Xây dựng những công trình chất lượng cao, an toàn và thân thiện với môi trường, góp phần phát triển hạ tầng và nâng cao chất lượng cuộc sống cộng đồng
                    </p>
                    <p>
                        Chúng tôi luôn đồng hành cùng đối tác để hiện thực hóa mọi dự án.
                    </p>
                </div>
            </div>
        </section>
    )
}