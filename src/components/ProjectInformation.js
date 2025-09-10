import Image from "next/image";

export default function ProjectInformation({data, shortDescription}) {
    if (!data) return null;

    // Define information items with their conditions
    const infoItems = [
        {
            condition: data.location,
            icon: "/images/Artboard-23.png",
            alt: "Location icon",
            label: "Địa điểm",
            value: data.location
        },
        {
            condition: data.function,
            icon: "/images/Artboard-24.png",
            alt: "Function icon",
            label: "Công năng",
            value: data.function
        },
        {
            condition: data.landArea,
            icon: "/images/Artboard-25.png",
            alt: "Area icon",
            label: "Diện tích đất",
            value: data.landArea
        },
        {
            condition: data.constructionArea,
            icon: "/images/Artboard-26.png",
            alt: "Built area icon",
            label: "Diện tích xây dựng",
            value: data.constructionArea
        }
    ];

    // Filter items that have data
    const availableItems = infoItems.filter(item => item.condition);

    // Don't render info cards section if no items have data
    const hasInfoCards = availableItems.length > 0;

    return (
        <div>
            <div className="bg-black text-white">
                {/* Header */}
                <div className="text-center py-6">
                    <h2 className="text-orange-400 text-lg mb-2">Giới thiệu chung về dự án</h2>
                    {shortDescription && (
                        <h1 className="text-white max-w-2xl mx-auto px-4">
                            {shortDescription}
                        </h1>
                    )}
                </div>

                {/* Information Cards - Only show if there's data */}
                {hasInfoCards && (
                    <div className="bg-orange-400 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-black justify-center">
                        {availableItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-3 p-4 ${
                                    index < availableItems.length - 1 ? 'border-r border-white' : ''
                                }`}
                            >
                                <Image
                                    src={item.icon}
                                    alt={item.alt}
                                    width={32}
                                    height={32}
                                    className="text-black"
                                />
                                <div>
                                    <div className="font-semibold text-sm">{item.label}</div>
                                    <div className="text-sm">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}