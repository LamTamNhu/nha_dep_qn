import Image from "next/image";
import { fancyFont } from "@/app/fonts";

// Commitment data
const fallbackItems = [
    {
        id: 1,
        iconUrl: "/images/Artboard-5.png",
        title: "KHÔNG sử dụng vật tư kém chất lượng",
        description: "Chỉ sử dụng vật liệu chất lượng cao, đạt tiêu chuẩn nghiêm ngặt, đảm bảo độ bền và hiệu quả lâu dài"
    },
    {
        id: 2,
        iconUrl: "/images/Artboard-6.png",
        title: "KHÔNG sử dụng vật tư khác với báo giá",
        description: "Giá cả minh bạch theo đúng thông số thực tế, không có chi phí ẩn hay báo giá sai lệch"
    },
    {
        id: 3,
        iconUrl: "/images/Artboard-7.png",
        title: "KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn",
        description: "Mọi công trình được thực hiện với đủ khối lượng vật tư và phương pháp thi công đúng kỹ thuật, tuân thủ tiêu chuẩn không cắt giảm"
    },
    {
        id: 4,
        iconUrl: "/images/Artboard-8.png",
        title: "KHÔNG bán thầu, kiểm soát chất lượng từ A-Z",
        description: "Giám sát chất lượng toàn bộ quy trình từ đầu đến cuối, loại bỏ rủi ro bán thầu, đảm bảo chất lượng thống nhất"
    },
    {
        id: 5,
        iconUrl: "/images/Artboard-9.png",
        title: "KHÔNG giấu giếm, minh bạch trong từng khâu thi công",
        description: "Mọi giai đoạn thi công được thực hiện công khai, khách hàng có thể theo dõi tiến độ và phương pháp mọi lúc"
    }
];

// Reusable CommitmentItem component
const CommitmentItem = ({ icon, title, description, isLastInColumn = false }) => (
    <div className={`flex flex-col items-center justify-center p-4 ${!isLastInColumn ? 'border-b border-orange-400' : ''}`}>
        <div className="w-20 h-20 flex items-center justify-center">
            <Image
                src={icon}
                alt={`${title} icon`}
                width={100}
                height={100}
                className="object-cover rounded-lg"
            />
        </div>
        <p className='text-orange-400 text-center mb-2 font-bold text-lg'>
            {title}
        </p>
        <p className="text-white text-justify">
            {description}
        </p>
    </div>
);

// Main component
export default function Commitments({data}) {
    const items = data?.items?.length ? data.items : fallbackItems;
    // Split items into two columns
    const leftColumnItems = items.slice(0, 3);
    const rightColumnItems = items.slice(3, 5);

    return (
        <section>
            <div className="relative w-full">
                {/* Background Image */}
                <div className="brightness-65 filter blur-[1px] absolute inset-0 z-0 pointer-events-none bg-[url('/images/5khong-bg.png')] bg-cover bg-bottom" />

                {/* Content */}
                <div className="flex items-center justify-center mx-auto gap-22 px-4">
                    {/* Title Section */}
                    <div className="flex-shrink-0 swing-in-top-fwd-2">
                        <div className="text-orange-400 font-extrabold text-lg sm:text-xl md:text-2xl lg:text-6xl mb-2">
                            5 KHÔNG
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-white text-base sm:text-lg md:text-2xl">Tại</div>
                            <div className={`${fancyFont.className} text-white text-lg sm:text-xl md:text-2xl lg:text-6xl`}>
                                Nhà đẹp Quảng Nam
                            </div>
                        </div>
                    </div>

                    {/* Flex Section */}
                    <div className="flex z-10 flex-1 max-w-4xl">
                        {/* Left Column */}
                        <div className="bg-[#373737] flex flex-col justify-center flex-1">
                            {leftColumnItems.map((item, index) => (
                                <CommitmentItem
                                    key={`left-${item.id || index}`}
                                    icon={item.iconUrl || item.icon}
                                    title={item.title}
                                    description={item.description}
                                    isLastInColumn={index === leftColumnItems.length - 1}
                                />
                            ))}
                        </div>

                        {/* Middle Spacer */}
                        <div className="w-40" />

                        {/* Right Column - Match left column height */}
                        <div className="bg-[#373737] flex flex-col flex-1 h-full">
                            {rightColumnItems.map((item, index) => (
                                <CommitmentItem
                                    key={`right-${item.id || index}`}
                                    icon={item.iconUrl || item.icon}
                                    title={item.title}
                                    description={item.description}
                                    isLastInColumn={index === rightColumnItems.length - 1}
                                />
                            ))}
                            {/* Empty spacer to fill remaining height */}
                            <div className="flex-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}