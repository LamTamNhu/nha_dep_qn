import Image from "next/image";
import { fancyFont } from "@/app/fonts";

// Commitment data (no changes needed here)
const fallbackItems = [
    { id: 1, iconUrl: "/images/Artboard-5.png", title: "KHÔNG sử dụng vật tư kém chất lượng", description: "Chỉ sử dụng vật liệu chất lượng cao, đạt tiêu chuẩn nghiêm ngặt, đảm bảo độ bền và hiệu quả lâu dài" },
    { id: 2, iconUrl: "/images/Artboard-6.png", title: "KHÔNG sử dụng vật tư khác với báo giá", description: "Giá cả minh bạch theo đúng thông số thực tế, không có chi phí ẩn hay báo giá sai lệch" },
    { id: 3, iconUrl: "/images/Artboard-7.png", title: "KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn", description: "Mọi công trình được thực hiện với đủ khối lượng vật tư và phương pháp thi công đúng kỹ thuật, tuân thủ tiêu chuẩn không cắt giảm" },
    { id: 4, iconUrl: "/images/Artboard-8.png", title: "KHÔNG bán thầu, kiểm soát chất lượng từ A-Z", description: "Giám sát chất lượng toàn bộ quy trình từ đầu đến cuối, loại bỏ rủi ro bán thầu, đảm bảo chất lượng thống nhất" },
    { id: 5, iconUrl: "/images/Artboard-9.png", title: "KHÔNG giấu giếm, minh bạch trong từng khâu thi công", description: "Mọi giai đoạn thi công được thực hiện công khai, khách hàng có thể theo dõi tiến độ và phương pháp mọi lúc" }
];

// Reusable CommitmentItem component (no changes needed)
const CommitmentItem = ({ icon, title, description }) => (
    // The border is now applied here and removed from the parent on the last item
    <div className="flex flex-col items-center justify-center p-4 border-b border-orange-400">
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

// Main component - REVISED FOR RESPONSIVENESS
export default function Commitments({data}) {
    const items = data?.items?.length ? data.items : fallbackItems;
    const leftColumnItems = items.slice(0, 3);
    const rightColumnItems = items.slice(3, 5);

    return (
        <section className="py-12 md:py-16">
            <div className="relative w-full">
                {/* Background Image */}
                <div className="brightness-65 filter blur-[1px] absolute inset-0 z-0 pointer-events-none bg-[url('/images/5khong-bg.png')] bg-cover bg-bottom" />

                {/* Content Container: Stacks vertically on mobile, horizontally on large screens */}
                {/* Added padding and responsive gap */}
                <div className="relative flex flex-col lg:flex-row items-center justify-center mx-auto gap-8 lg:gap-12 px-4">

                    {/* Title Section: Centered on mobile, left-aligned on large screens */}
                    <div className="flex-shrink-0 swing-in-top-fwd-2 text-center lg:text-left">
                        <div className="text-orange-400 font-extrabold text-4xl lg:text-6xl mb-2 mt-4">
                            5 KHÔNG
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 items-center justify-center lg:justify-start">
                            <div className="text-white text-xl md:text-2xl">Tại</div>
                            <div className={`${fancyFont.className} text-white text-4xl lg:text-6xl`}>
                                Nhà đẹp Quảng Nam
                            </div>
                        </div>
                    </div>

                    {/* Flex Section: Stacks columns on mobile, side-by-side on medium screens */}
                    <div className="flex flex-col md:flex-row z-10 w-full max-w-4xl items-stretch md:items-start gap-0 md:gap-6 lg:gap-8 justify-center">

                        {/* Left Column: Full width on mobile, fixed width on medium+ */}
                        {/* The [&>*:last-child] selector removes the border from the last item */}
                        <div className="bg-[#373737] flex flex-col w-full md:w-80 puff-in-center [&>*:last-child]:border-none">
                            {leftColumnItems.map((item, index) => (
                                <CommitmentItem
                                    key={`left-${item.id || index}`}
                                    icon={item.iconUrl || item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                        </div>

                        {/* Right Column: Full width on mobile, fixed width on medium+ */}
                        {/* Added a top border on mobile for separation */}
                        <div className="bg-[#373737] flex flex-col w-full md:w-80 puff-in-center border-t-2 border-dashed border-gray-600 md:border-none [&>*:last-child]:border-none">
                            {rightColumnItems.map((item, index) => (
                                <CommitmentItem
                                    key={`right-${item.id || index}`}
                                    icon={item.iconUrl || item.icon}
                                    title={item.title}
                                    description={item.description}
                                />
                            ))}
                            {/* Empty spacer only needed for desktop to align columns */}
                            <div className="hidden md:flex flex-1"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}