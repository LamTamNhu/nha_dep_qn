"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {CreditCard, Lock, ShieldUser} from "lucide-react";
import animateOnObserve from "@/lib/animateOnObserve";
import {fancyFont} from "@/app/fonts";
import Commitments from "@/components/Commitments";

export default function AboutPage() {
    const [expanded, setExpanded] = useState(false);
    const aboutShort =
        <div className="text-white text-lg">
            <p>
                Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ sư trẻ Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp
                Quảng Nam chia sẻ.
            </p>
            <br/>
            <blockquote className="text-2xl italic mb-6 text-center md:text-left">
                "Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những tổ ấm
                - nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc."
            </blockquote>
            <br/>
        </div>
    const khongItems = [
        {
            text: "KHÔNG sử dụng vật tư kém chất lượng",
            description: "Chỉ sử dụng vật liệu chất lượng cao, đạt tiêu chuẩn nghiêm ngặt, đảm bảo độ bền và hiệu quả lâu dài"
        },
        {
            text: "KHÔNG sử dụng vật tư khác với báo giá",
            description: "Giá cả minh bạch theo đúng thông số thực tế, không có chi phí ẩn hay báo giá sai lệch"
        },
        {
            text: "KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn",
            description: "Mọi công trình được thực hiện với đủ khối lượng vật tư và phương pháp thi công đúng kỹ thuật, tuân thủ tiêu chuẩn không cắt giảm"
        },
        {
            text: "KHÔNG bán thầu, kiểm soát chất lượng từ A-Z",
            description: "Giám sát chất lượng toàn bộ quy trình từ đầu đến cuối, loại bỏ rủi ro bán thầu, đảm bảo chất lượng thống nhất"
        },
        {
            text: "KHÔNG giấu giếm, minh bạch trong từng khâu thi công",
            description: "Mọi giai đoạn thi công được thực hiện công khai, khách hàng có thể theo dõi tiến độ và phương pháp mọi lúc"
        }
    ];

    const coreValues = [
        {
            img: "/images/honest.png",
            title: "Chân thành",
            description: "Trong phong cách làm việc Nhà Đẹp Quảng Nam luôn ưu tiên tư vấn trung thực, không tô vẽ những điều xa vời mà tập trung vào giá trị thực tế cho khách hàng."
        },
        {
            img: "/images/trust.png",
            title: "Chính trực",
            description: "Trong quá trình thi công xây dựng chúng tôi tuân thủ đạo đức nghề nghiệp, không gian dối hay làm trái nguyên tắc, không chạy theo lợi nhuận mà bỏ qua yếu tố an toàn."
        },
        {
            img: "/images/responsibility.png",
            title: "Trách nhiệm",
            description: "Không phải cứ bàn giao xong là hết nghĩa vụ, mà là đảm bảo công trình ấy thực sự đáng sống, đáng tin cậy trong nhiều năm sau."
        }
    ];
    const coreValues2 = [
        {
            img: "/images/compass.png",
            title: "Hiểu và Thương",
            description: "Chúng tôi không đơn thuần là đơn vị thi công theo yêu cầu, mà còn là thấu hiểu mong muốn của họ, để tư vấn giải pháp phù hợp nhất."
        },
        {
            img: "/images/design-thinking.png",
            title: "Sáng tạo",
            description: "Với phương châm không ngừng phát triển Nhà Đẹp Quảng Nam luôn tập trung cải tiến toàn diện để mang đến dịch vụ tốt nhất đáp ứng mọi nhu cầu khách hàng."
        }
    ];

    const members = [
        {
            thumbnail: "/thumbnails/nhu-hien.jpg",
            name: "TRẦN NHƯ HIỀN",
            title: "PHÓ GIÁM ĐỐC"
        },
        {
            thumbnail: "/thumbnails/thanh-my.jpg",
            name: "KTS. ĐINH THANH MỸ",
            title: "CHỦ TRÌ THIẾT KẾ"
        },
        {
            thumbnail: "/thumbnails/thanh-tuan.jpg",
            name: "KTS. LÂM THANH TUẤN",
            title: "KIẾN TRÚC SƯ"
        },
        {
            thumbnail: "/thumbnails/thuy-duong.jpg",
            name: "KTS. LÊ THỊ THÙY DƯƠNG",
            title: "KIẾN TRÚC SƯ"
        },
        {
            thumbnail: "/thumbnails/hong-tham.jpg",
            name: "PHẠM HỒNG THẮM",
            title: "THIẾT KẾ NỘI THẤT"
        },
        {
            thumbnail: "/thumbnails/van-thong.jpg",
            name: "KS. NGUYỄN VĂN THỐNG",
            title: "KỸ SƯ KẾT CẤU "
        },

    ]
    useEffect(() => {
        // Set up animations after DOM is ready
        const swingObserver = animateOnObserve('.swing-in-top-fwd-2');
        const borderObserver = animateOnObserve('.border-draw')
        const puffObserver = animateOnObserve('.puff-in-center')
        const slideObserver = animateOnObserve('.slide-in-bottom')

        // Cleanup function to disconnect observers
        return () => {
            swingObserver.disconnect()
            puffObserver.disconnect();
            borderObserver.disconnect()
            slideObserver.disconnect();
        };
    }, []);

    return (
        <div className="w-full bg-[#373737]">
            {/* Hero section with background image */}
            <section className="w-full bg-orange-400 py-30 overflow-x-clip">
                <div className="mx-auto max-w-7xl px-6 md:px-12">
                    <div className="flex gap-8">
                        <h1 className="text-white text-xl font-bold [writing-mode:vertical-rl] text-nowrap shrink-0">
                            VỀ CHÚNG TÔI
                        </h1>

                        <div className="grid min-w-0 grid-cols-1 md:grid-cols-2 gap-12 border-l border-white pl-4">
                            {/* Cột text */}
                            <div className="relative min-w-0 px-10">
                                <h2 className="text-white text-5xl mb-8">
                                    CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM
                                </h2>
                                <br/>
                                <p className="text-white text-base">Công ty TNHH NHÀ ĐẸP QUẢNG NAM do KTS Nguyên Tương
                                    thành
                                    lập. Với sự nhiệt huyết cùng đội
                                    ngũ nhân sự trẻ trung và năng động, NĐQN mong muốn mang đến cho các bạn nhưng bản
                                    thiết
                                    kế đa dạng phong cách, mới lạ và tất nhiên sẽ phù hợp với từng đối tượng.
                                </p>
                                <br/>
                                <p className="text-white text-base">Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ
                                    sư
                                    trẻ
                                    Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp Quảng Nam chia sẻ.
                                    "Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những
                                    tổ
                                    ấm -
                                    nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc."
                                </p>
                                <br/>
                                <p className="text-white text-base">Công ty TNHH NHÀ ĐẸP QUẢNG NAM do KTS Nguyên Tương
                                    thành
                                    lập. Với sự nhiệt huyết cùng đội
                                    ngũ nhân sự trẻ trung và năng động, NĐQN mong muốn mang đến cho các bạn nhưng bản
                                    thiết
                                    kế đa dạng phong cách, mới lạ và tất nhiên sẽ phù hợp với từng đối tượng.
                                </p>
                                <br/>
                                <p className="text-white text-base">Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ
                                    sư
                                    trẻ
                                    Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp Quảng Nam chia sẻ.
                                    "Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những
                                    tổ
                                    ấm -
                                    nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc."
                                </p>
                            </div>
                            {/* Cột ảnh */}
                            <Image
                                src="/thumbnails/nguyen-tuong.jpg"
                                alt="founder image"
                                width={900}
                                height={1600}
                                className="w-full max-w-md object-cover aspect-[3/5]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12">
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        {/*Title*/}
                        <h2 className="text-white text-extrabold text-3xl font-bold my-20  p-4 inline-block border-2 border-white">
                            ĐỘI NGŨ
                        </h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center slide-in-bottom">
                            <Image width={300} height={300} src="/thumbnails/nguyen-tuong.jpg"
                                   alt="nguyen-tuong"
                                   className="size-70 object-cover mx-auto mb-4"/>
                            <h3 className="text-white font-bold text-xl mb-2">
                                KTS. TRẦN NGUYÊN TƯƠNG
                            </h3>
                            <p className="text-white font-base text-sm">GIÁM ĐỐC</p>
                        </div>
                        <div className="col-span-2 slide-in-bottom">{aboutShort}</div>
                        {members.map((member) => (
                            <div className="text-center slide-in-bottom" key={member.name}>
                                <Image width={300} height={300} src={member.thumbnail}
                                       alt={member.name}
                                       className="size-70 object-top object-cover mx-auto mb-4"/>
                                <h3 className="text-white font-bold text-xl mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-white font-base text-sm">
                                    {member.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div>
                {/*Office pictures*/}
                <section className="pt-12">
                    <div className="w-full mx-auto text-center">
                        <h2 className="text-white text-extrabold text-3xl font-bold my-20  p-4 inline-block border-2 border-white">
                            HÌNH ẢNH VĂN PHÒNG
                        </h2>
                        <div className="flex justify-center">
                            <div className="overflow-hidden">
                                <Image width={300} height={500} src="/images/office1.jpg" alt="van phong"
                                       className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"/>
                            </div>
                            <div className="overflow-hidden">
                                <Image width={300} height={500} src="/images/Thiet-ke-chua-co-ten-7.jpg" alt="van phong"
                                       className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
                            </div>
                            <div className="overflow-hidden">
                                <Image width={300} height={500} src="/images/Thiet-ke-chua-co-ten-7.jpg" alt="van phong"
                                       className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*5 qualities*/}
                <Commitments khongItems={khongItems}/>

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-white text-extrabold text-3xl font-bold my-20  p-4 border-2 border-white inline-block">
                                GIÁ TRỊ CỐT LÕI
                            </h2>
                        </div>
                        {/* Cards Grid - 5 Individual Cards */}
                        <div className="grid grid-cols-3 gap-4 justify-center">
                            {coreValues.map((item, index) => (
                                <div key={index}
                                     className="relative overflow-hidden rounded-lg shadow-lg group puff-in-center overflow-hidden">
                                    {/* Content Section */}
                                    <div className="bg-white h-full p-6 hover:scale-110 duration-300 ease-in-out">
                                        <div
                                            className="rounded-full bg-orange-400 w-24 h-24 flex items-center justify-center text-white mx-auto p-4 my-6">
                                            <Image src={item.img} alt="res" width={50} height={50}
                                                   className="object-cover fill-white"/>
                                        </div>
                                        {/* Large Title */}
                                        <h3 className="text-lg items-center flex justify-center font-bold text-black mb-4 leading-tight h-12 px-6">
                                            {item.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-black mb-6 leading-relaxed px-6 text-justify">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex justify-center mt-8 gap-4">
                            {coreValues2.map((item, index) => (
                                <div key={index}
                                     className="relative overflow-hidden rounded-lg shadow-lg group puff-in-center w-sm overflow-hidden">
                                    {/* Content Section */}
                                    <div className="bg-white h-full p-6 hover:scale-110 duration-300 ease-in-out">
                                        <div
                                            className="rounded-full bg-orange-400 w-24 h-24 flex items-center justify-center text-white mx-auto p-4 my-6">
                                            <Image src={item.img} alt="res" width={50} height={50}
                                                   className="object-cover"/>
                                        </div>
                                        {/* Large Title */}
                                        <h3 className="text-lg items-center flex justify-center font-bold text-black mb-4 leading-tight h-12 px-6">
                                            {item.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-black mb-6 leading-relaxed px-6 text-justify">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    {/* Policies and Commitments Section */}
                    <div className="max-w-6xl mx-auto mt-20">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <h2 className="text-white text-extrabold text-3xl font-bold my-20  p-4 border-2 border-white inline-block">
                                CHÍNH SÁCH TẠI NHÀ ĐẸP QUẢNG NAM
                            </h2>
                        </div>
                        {/* Policies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-60">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group puff-in-center">
                                <div className="text-center">
                                    <div
                                        className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <ShieldUser size={40} className="text-white"/>
                                    </div>
                                    <h3 className="text-lg text-gray-900 mb-2">
                                        Chính sách bảo hành
                                    </h3>
                                    <button
                                        className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>

                            <div
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group puff-in-center">
                                <div className="text-center">
                                    <div
                                        className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <CreditCard size={40} className="text-white"/>
                                    </div>
                                    <h3 className="text-lg text-gray-900 mb-2">
                                        Chính sách thanh toán
                                    </h3>
                                    <button
                                        className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>

                            <div
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group puff-in-center">
                                <div className="text-center">
                                    <div
                                        className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Lock size={40} className="text-white"/>
                                    </div>
                                    <h3 className="text-lg text-gray-900 mb-2">
                                        Chính sách bảo mật thông tin
                                    </h3>
                                    <button
                                        className="text-orange-400 hover:text-orange-600 font-medium text-sm underline transition-colors duration-200">
                                        Xem thêm
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}