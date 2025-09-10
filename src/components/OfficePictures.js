import Image from "next/image";

const fallbackImages = [
    { imageUrl: "/images/office1.jpg" },
    { imageUrl: "/images/Thiet-ke-chua-co-ten-7.jpg" },
    { imageUrl: "/images/Thiet-ke-chua-co-ten-7.jpg" }
];

export default function OfficePictures({data}) {
    const images = data?.images?.length ? data.images : fallbackImages;
    return (
        <section className="pt-12">
            <div className="w-full mx-auto text-center">
                <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
                    HÌNH ẢNH VĂN PHÒNG
                </h2>
                <div className="flex flex-wrap lg:flex-nowrap justify-center ">
                    {images.map((img, idx) => (
                        <div key={idx} className="overflow-hidden gallery-reveal">
                            <Image
                                width={300}
                                height={500}
                                src={img.imageUrl || img}
                                alt="van phong"
                                className="object-cover w-full h-full transition-transform duration-300 ease-in-out hover:scale-110"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}