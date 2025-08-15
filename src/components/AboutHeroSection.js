import Image from "next/image";

export default function AboutHeroSection({ data }) {
    return (
        <section className="w-full bg-orange-400 py-30 overflow-x-clip">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
                <div className="flex gap-8">
                    <h1 className="text-white text-xl font-bold [writing-mode:vertical-rl] text-nowrap shrink-0">
                        {data?.title || 'VỀ CHÚNG TÔI'}
                    </h1>

                    <div className="grid min-w-0 grid-cols-1 lg:grid-cols-2 gap-12 border-l border-white pl-4">
                        {/* Text Column */}
                        <div className="relative min-w-0 px-10">
                            <p className="text-white md:text-2xl lg:text-4xl">
                                CÔNG TY TNHH
                            </p>
                            <p className="text-white md:text-2xl text-4xl whitespace-nowrap">
                                NHÀ ĐẸP QUẢNG NAM
                            </p>
                            {data?.descriptions?.map((paragraph, index) => (
                                <p key={index} className="text-white text-justify text-lg mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                        {/* Image Column */}
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
        </section>
    );
}

