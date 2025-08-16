import Image from "next/image";

export default function AboutHeroSection({ data }) {
    return (
        <section className="w-full bg-white py-30 overflow-x-clip">
            <div className="mx-auto px-2 md:px-30">
                <div className="flex gap-8">
                    <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-12 pl-4">
                        {/* Text Column */}
                        <div className="relative min-w-0 px-10">
                            <p className="text-orange-400 text-2xl lg:text-4xl">
                                CÔNG TY TNHH
                            </p>
                            <p className="text-orange-400 text-2xl lg:text-4xl whitespace-nowrap mb-6">
                                NHÀ ĐẸP QUẢNG NAM
                            </p>
                            {data?.descriptions?.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 text-justify text-lg mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {/* Image Column */}
                        <div className="flex justify-center items-center">
                            <Image
                                src={data?.imageUrl || '/thumbnails/nguyen-tuong.jpg'}
                                alt={data?.imageAlt || 'founder image'}
                                width={900}
                                height={1600}
                                className="w-full max-w-md lg:max-w-2xl object-cover aspect-[3/5]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

