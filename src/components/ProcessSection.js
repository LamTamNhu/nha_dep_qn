import {RulerDimensionLine, NotebookPen, Gem, UserRoundPen, PencilLine, FilePen, HandCoins} from "lucide-react";
import React, {useState, useEffect, useRef} from "react";
import SectionHeading from "@/components/SectionHeading";

const ProcessSection = () => {
    const [visibleRows, setVisibleRows] = useState(new Set());
    const rowRefs = useRef([]);
    const iconSetting = "text-white size-15"
    const cardIcons = [
        {id: "ruler", Icon: RulerDimensionLine},
        {id: "notebook", Icon: NotebookPen},
        {id: "gem", Icon: Gem},
        {id: "user", Icon: UserRoundPen},
        {id: "file", Icon: FilePen},
        {id: "hand", Icon: HandCoins},
        {id: "pencil", Icon: PencilLine},
    ];

    useEffect(() => {
        const handleScroll = () => {
            const newVisible = new Set();

            rowRefs.current.forEach((ref, index) => {
                if (!ref) return;

                const rect = ref.getBoundingClientRect();
                const topBound = window.innerHeight * 0.325;
                const bottomBound = window.innerHeight * 0.675;

                if (rect.top < bottomBound && rect.bottom > topBound) {
                    newVisible.add(index);
                }
            });

            setVisibleRows(newVisible);
        };

        window.addEventListener("scroll", handleScroll, {passive: true});
        handleScroll(); // initial check

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const setRowRef = (index) => (el) => {
        rowRefs.current[index] = el;
    };

    const services = [
        [
            {
                number: "01",
                title: "Tiếp nhận thông tin khảo sát mặt bằng",
                description: `Khách hàng cung cấp thông tin cơ bản về nhu cầu xây dựng, vị trí công trình, diện tích và hiện trạng mặt bằng. Đội ngũ kỹ thuật sẽ hẹn lịch để khảo sát thực tế nhằm đánh giá hiện trạng và điều kiện thi công.`,
            },
            null
        ],
        [
            null,
            {
                number: "02",
                title: "Phân tích lập hồ sơ thiết kế sơ bộ",
                description:
                    "Dựa trên kết quả khảo sát, kiến trúc sư lên phương án thiết kế sơ bộ phù hợp với nhu cầu sử dụng, phong cách thẩm mỹ và ngân sách của khách hàng. Bản vẽ sơ bộ bao gồm mặt bằng, phối cảnh và một số chi tiết kỹ thuật.",
            },
        ],
        [
            {
                number: "03",
                title: "Báo giá thiết kế",
                description:
                    "Sau khi thống nhất với khách hàng về phương án sơ bộ, đơn vị thi công sẽ gửi báo giá dịch vụ thiết kế chi tiết, bao gồm chi phí, phạm vi công việc và thời gian thực hiện.",
            },
            null
        ],
        [
            null,
            {
                number: "04",
                title: "Ký hợp đồng thiết kế",
                description:
                    "Hai bên tiến hành ký hợp đồng thiết kế để chính thức bắt đầu triển khai các bản vẽ chi tiết. Hợp đồng quy định rõ trách nhiệm, tiến độ và cam kết của hai bên.",
            },
        ],
        [
            {
                number: "05",
                title: "Lập hồ sơ thiết kế thi công",
                description:
                    "Kiến trúc sư và kỹ sư triển khai bản vẽ kỹ thuật đầy đủ (kiến trúc, kết cấu, điện nước...) để phục vụ thi công. Hồ sơ này là cơ sở pháp lý và kỹ thuật trong toàn bộ quá trình xây dựng.",
            },
            null
        ],
        [
            null,
            {
                number: "06",
                title: "Báo giá thi công",
                description:
                    "Dựa trên hồ sơ thiết kế thi công đã hoàn tất, đơn vị thi công lập bảng báo giá chi tiết từng hạng mục, vật liệu sử dụng và tiến độ thi công để khách hàng xem xét.",
            },
        ],
        [
            {
                number: "07",
                title: "Ký hợp đồng thi công",
                description:
                    "Sau khi thống nhất về giá và các điều khoản, hai bên tiến hành ký hợp đồng thi công. Hợp đồng bao gồm điều khoản thanh toán, tiến độ, bảo hành và điều kiện nghiệm thu.",
            },
            null
        ]
    ];

    return (
        <div className="py-12 px-4">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading>Quy trình thi công trọn gói</SectionHeading>
                <div className="flex items-start justify-center">
                    <div className="flex-1 max-w-4xl">
                        {services.map((row, rowIndex) => {
                            const isVisible = visibleRows.has(rowIndex);
                            const highlightClass = isVisible ? "opacity-100" : "opacity-20";
                            const colorClass = isVisible ? "text-orange-500" : "text-orange-300";
                            const descClass = isVisible ? "text-gray-700" : "text-gray-600";

                            return (
                                <div
                                    key={rowIndex}
                                    ref={setRowRef(rowIndex)}
                                    className={`flex items-stretch transition-all duration-700 transform`}
                                >
                                    <div className="flex-1 mr-6">
                                        {row[0] ? (
                                            <div
                                                className="bg-white p-8 transition-all duration-300 flex flex-col h-full">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div
                                                        className={`text-6xl font-bold text-orange-400 transition-opacity duration-300 ${highlightClass}`}>
                                                        {row[0].number}
                                                    </div>
                                                </div>
                                                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${colorClass}`}>
                                                    {row[0].title}
                                                </h3>
                                                <p className={`text-sm text-justify leading-relaxed transition-colors duration-300 flex-1 ${descClass}`}>
                                                    {row[0].description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="p-8 h-full flex items-center justify-center">
                                                <div
                                                    className={`p-4 rounded-full transition-all duration-300 ${isVisible ? "bg-orange-500 scale-110 opacity-100" : "bg-orange-400 opacity-20 scale-100"}`}>
                                                    <div
                                                        className={`transition-transform duration-300 ${isVisible ? "scale-110" : "scale-100"}`}>
                                                        {(() => {
                                                            const {Icon, id} = cardIcons[rowIndex];
                                                            return (
                                                                <Icon key={id} className={iconSetting}/>
                                                            );
                                                        })()}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex flex-col items-center justify-center mx-4">
                                        <div className="w-2 bg-gray-200 relative overflow-hidden h-full">
                                            <div
                                                className={`absolute w-full bg-orange-400 transition-all duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
                                                style={{height: "100%"}}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="flex-1 ml-6">
                                        {row[1] ? (
                                            <div
                                                className="bg-white p-8 transition-all duration-300 flex flex-col h-full">
                                                <div className="flex items-center justify-between mb-6">
                                                    <div
                                                        className={`text-6xl font-bold text-orange-400 transition-opacity duration-300 ${highlightClass}`}>
                                                        {row[1].number}
                                                    </div>
                                                </div>
                                                <h3 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${colorClass}`}>
                                                    {row[1].title}
                                                </h3>
                                                <p className={`text-sm text-justify leading-relaxed transition-colors duration-300 flex-1 ${descClass}`}>
                                                    {row[1].description}
                                                </p>
                                            </div>
                                        ) : (
                                            <div className="p-8 h-full flex items-center justify-center">
                                                <div
                                                    className={`p-4 rounded-full transition-all duration-300 ${isVisible ? "bg-orange-500 scale-110 opacity-100" : "bg-orange-400 opacity-20 scale-100"}`}>
                                                    <div
                                                        className={`transition-transform duration-300 ${isVisible ? "scale-110" : "scale-100"}`}>
                                                        {(() => {
                                                            const {Icon, id} = cardIcons[rowIndex];
                                                            return (
                                                                <Icon key={id} className={iconSetting}/>
                                                            );
                                                        })()}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProcessSection;
