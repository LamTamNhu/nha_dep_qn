"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {CreditCard, Lock, ShieldUser} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import animateOnObserve from "@/lib/animateOnObserve";

export default function AboutPage() {
    const [expanded, setExpanded] = useState(false);
    const aboutShort =
        <div className="text-white">
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
    const aboutFull =
        <div className="text-white">
            <p>
                `Mỗi ngày, đội ngũ Nhà Đẹp Quảng Nam bước ra công trường không chỉ với vai trò là những người thợ, những
                kỹ sư, những kiến trúc sư, mà còn là những người đồng hành cùng khách hàng trên hành trình hiện thực hóa
                giấc mơ an cư.`
            </p>
            <br/>
            <p>
                ` Chúng tôi hiểu rằng, phía sau mỗi bản thiết kế, mỗi viên gạch đặt xuống là biết bao tâm tư, kỳ vọng,
                bao năm tích góp của gia chủ.
                Nhiều năm qua, từ những ngày đầu chập chững vào nghề, chúng tôi đã trải qua biết bao công trình, chứng
                kiến niềm vui ngày nhận nhà của hàng trăm
                gia đình. Ngoài ra chúng tôi đã cùng khách hàng đi qua rất nhiều nỗi lo: Lo lắng về chất lượng –
                liệu ngôi nhà có thực sự bền vững? Băn khoăn về thẩm mỹ – làm sao để công trình vừa đẹp vừa đúng với
                mong muốn?`

            </p>
            <br/>
            <p>
                `Đau đầu vì tiến độ và chi phí – liệu công trình có đúng kế hoạch, không phát sinh chi phí bất ngờ?
                Chính những trăn trở ấy đã trở thành động lực
                để chúng tôi xây dựng một quy trình thi công CHẶT CHẼ - MINH BẠCH - CHẤT LƯỢNG, đảm bảo mỗi ngôi nhà khi
                bàn giao không chỉ đạt chuẩn kỹ thuật,
                mà còn mang đến sự an tâm tuyệt đối cho gia chủ.
                kinh nghiệm chuyên môn.`
            </p>
            <br/>
            <p>
                `Trên hành trình hơn 10 năm thực chiến, đội ngũ đã không ngừng nỗ lực, học hỏi và đúc kết kinh
                nghiệm để mang đến những giải pháp thiết kế và thi công chất lượng – tối ưu – bền vững. Chúng tôi hiểu
                rằng, mỗi công trình là cả một hành
                trình, và gia chủ luôn cần một đơn vị đồng hành có tâm – có tầm sẵn sàng cam kết đồng hành đến cùng. Tại
                NĐQN các công trình luôn được quản lý
                bởi kỹ sư có chuyên môn và năng lực. Quá trình thi công luôn có sự theo sát và phối hợp cùng bộ phận
                thiết kế kiến trúc, kết cấu, điện nước,
                để đảm bảo công trình luôn được diễn ra suôn sẻ, nếu có vướng mắc hoặc có những sự thay đổi sẽ có giải
                pháp hợp lý kịp thời dựa trên những kinh nghiệm chuyên môn.`
            </p>
        </div>;

    const khongItems = [
        {
            text: "KHÔNG sử dụng vật tư kém chất lượng."
        },
        {
            text: "KHÔNG sử dụng vật tư sai báo giá."
        },
        {
            text: "KHÔNG cắt giảm vật tư, thi công đủ và đúng tiêu chuẩn."
        },
        {
            text: "KHÔNG bán thầu – kiểm soát chất lượng từ A-Z."
        },
        {
            text: "KHÔNG giấu giếm – minh bạch trong từng khâu thi công."
        }
    ];

    const coreValues = [
        {
            title: "Chân thành",
            description: "Trong phong cách làm việc Nhà Đẹp Quảng Nam luôn ưu tiên tư vấn trung thực, không tô vẽ những điều xa vời mà tập trung vào giá trị thực tế cho khách hàng."
        },
        {
            title: "Chính trực",
            description: "Trong quá trình thi công xây dựng chúng tôi tuân thủ đạo đức nghề nghiệp, không gian dối hay làm trái nguyên tắc, không chạy theo lợi nhuận mà bỏ qua yếu tố an toàn."
        },
        {
            title: "Trách nhiệm",
            description: "Không phải cứ bàn giao xong là hết nghĩa vụ, mà là đảm bảo công trình ấy thực sự đáng sống, đáng tin cậy trong nhiều năm sau."
        },
        {
            title: "Hiểu và Thương",
            description: "Chúng tôi không đơn thuần là đơn vị thi công theo yêu cầu, mà còn là thấu hiểu mong muốn của họ, để tư vấn giải pháp phù hợp nhất."
        },
        {
            title: "Sáng tạo",
            description: "Với phương châm không ngừng phát triển Nhà Đẹp Quảng Nam luôn tập trung cải tiến toàn diện để mang đến dịch vụ tốt nhất đáp ứng mọi nhu cầu khách hàng."
        }
    ];
    useEffect(() => {
        // Set up animations after DOM is ready
        const puffObserver = animateOnObserve('.puff-in-center');
        const swingObserver = animateOnObserve('.swing-in-top-fwd')

        // Cleanup function to disconnect observers
        return () => {
            puffObserver.disconnect();
        };
    }, []);

    return (
        <div className="relative w-full h-[200vh] overflow-hidden">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-[url('/images/sus.jpg')] bg-cover bg-center bg-no-repeat"
            >
            </div>
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Fade to black overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
            </div>
            <div className="min-h-screen relative z-10">
                <h1 className="text-white text-center text-extrabold text-3xl mt-40">
                    GIỚI THIỆU
                </h1>
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl mx-auto px-4">
                        <div className="container mx-auto max-w-6xl mx-auto px-4">
                            <SectionHeading>
                                Câu Chuyện Thương Hiệu
                            </SectionHeading>
                            <div className="swing-in-top-fwd">
                                {aboutShort}
                                {!expanded && <span>... </span>}
                                {expanded && <span>{aboutFull}</span>}
                                <button
                                    className="ml-2 text-orange-400 underline hover:text-orange-300 transition-colors text-sm font-semibold"
                                    onClick={() => setExpanded((v) => !v)}
                                >
                                    {expanded ? "Thu gọn" : "Xem thêm"}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl mx-auto px-4">
                        <SectionHeading>
                            Đội Ngũ
                        </SectionHeading>
                        <div>
                            <Image
                                src="/images/wide_shot.jpg"
                                alt="team"
                                width={1920}
                                height={500}
                                className="h-auto object-cover shadow-lg puff-in-center"
                            />
                            <p className="bg-orange-400 text-white py-2 text-center text-xl">Toàn thể cán bộ nhân viên</p>
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <SectionHeading>
                                5 "KHÔNG"<span className="text-white"> tại Nhà Đẹp Quảng Nam</span>
                            </SectionHeading>

                        </div>

                        {/* Cards Grid - 5 Individual Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {khongItems.map((item, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group border-2 solid border-orange-400">
                                    {/* Image Section */}
                                    <div className="relative h-48">
                                        <Image
                                            src={index % 2 === 0 ? "/images/wide_shot.jpg" : "/images/aboutus.png"}
                                            alt={`Commitment ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="bg-black">
                                        {/* Large Title */}
                                        <h3 className="text-md items-center flex justify-center font-bold text-white mb-4 leading-tight bg-orange-400 h-12 px-6">
                                            {item.text}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-white mb-6 leading-relaxed px-6 text-justify">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                        </p>

                                        {/* Button */}
                                        <button
                                            className="bg-orange-400 text-white px-6 py-3 ml-6 mb-4 rounded-lg font-medium hover:bg-orange-300 transition-colors duration-200">
                                            XEM ĐẦY ĐỦ NỘI DUNG
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-12 px-4 bg-whtie">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12">
                            <SectionHeading>
                                Giá Trị Cốt Lõi
                            </SectionHeading>

                        </div>

                        {/* Cards Grid - 5 Individual Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {coreValues.map((item, index) => (
                                <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                                    {/* Image Section */}
                                    <div className="relative h-48">
                                        <Image
                                            src={index % 2 === 0 ? "/images/wide_shot.jpg" : "/images/aboutus.png"}
                                            alt={`Commitment ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Content Section */}
                                    <div className="bg-white">
                                        {/* Large Title */}
                                        <h3 className="text-md items-center flex justify-center font-bold text-white mb-4 leading-tight bg-orange-400 h-12 px-6">
                                            {item.title}
                                        </h3>

                                        {/* Subtitle */}
                                        <p className="text-black mb-6 leading-relaxed px-6 text-justify">
                                            {item.description}
                                        </p>

                                        {/* Button */}
                                        <button
                                            className="bg-orange-400 text-white px-6 py-3 ml-6 mb-4 rounded-lg font-medium hover:bg-orange-300 transition-colors duration-200">
                                            XEM ĐẦY ĐỦ NỘI DUNG
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12 px-4">
                    <div className="max-w-6xl mx-auto mt-20">
                        {/* Header */}
                        <div className="text-left mb-12">
                            <SectionHeading>
                                Giá trị cốt lõi
                            </SectionHeading>
                            <p className="text-lg text-gray-600 mb-6">
                                Chân thành - Chính trực - Trách nhiệm - Sáng Tạo - Hiểu và Thương
                            </p>
                        </div>

                        {/* Values Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coreValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-orange-400"
                                >
                                    <div className="mb-4">
                                        <h3 className="text-xl font-bold text-orange-400 mb-2">
                                            {value.title}
                                        </h3>
                                        <div className="w-12 h-0.5 bg-orange-400 rounded-full"></div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
                    {/* Policies and Commitments Section */}
                    <div className="max-w-6xl mx-auto mt-20">
                        {/* Header */}
                        <div className="text-left mb-12">
                            <SectionHeading>
                                Chính sách và cam kết của Nhà Đẹp Quảng Nam
                            </SectionHeading>
                        </div>
                        {/* Policies Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
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
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
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
                                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-400 group">
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
