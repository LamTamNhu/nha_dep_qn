import Image from "next/image";

const fallbackValues = [
    {
        iconUrl: "/images/responsibility.png",
        title: "TRÁCH NHIỆM",
        description: "Không phải cứ bàn giao xong là hết nghĩa vụ, mà là đảm bảo công trình ấy thực sự đáng sống, đáng tin cậy trong nhiều năm sau."
    },
    {
        iconUrl: "/images/design-thinking.png",
        title: "ĐỔI MỚI, SÁNG TẠO",
        description: "Với phương châm không ngừng phát triển Nhà Đẹp Quảng Nam luôn tập trung cải tiến toàn diện để mang đến dịch vụ tốt nhất."
    },
    {
        iconUrl: "/images/trust.png",
        title: "TRUNG THỰC",
        description: "Trong quá trình thi công xây dựng chúng tôi tuân thủ đạo đức nghề nghiệp, không gian dối hay làm trái nguyên tắc."
    },
    {
        iconUrl: "/images/compass.png",
        title: "TÔN TRỌNG",
        description: "Chúng tôi không đơn thuần là đơn vị thi công theo yêu cầu, mà còn là thấu hiểu mong muốn của khách hàng."
    },
    {
        iconUrl: "/images/honest.png",
        title: "ĐOÀN KẾT",
        description: "Trong phong cách làm việc Nhà Đẹp Quảng Nam luôn ưu tiên tư vấn trung thực, tập trung vào giá trị thực tế cho khách hàng."
    }
];

export default function CoreValues({data}) {
    const values = data?.values?.length ? data.values : fallbackValues;
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-orange-400 font-bold text-3xl font-extrabold my-20  p-4 inline-block border-2 border-orange-400">
                        GIÁ TRỊ CỐT LÕI
                    </h2>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
                    {values.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group">
                            {/* Icon Container */}
                            <div className="relative mb-6">
                                {/* Background Circle */}
                                <div
                                    className="w-32 h-32 bg-orange-400 rounded-full flex items-center justify-center group-hover:bg-orange-300 transition-all duration-300">
                                    <Image
                                        src={item.iconUrl || item.img}
                                        alt={item.title}
                                        width={60}
                                        height={60}
                                        className="object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-orange-400 font-bold text-lg mb-4 min-h-[2.5rem] flex items-center justify-center">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}