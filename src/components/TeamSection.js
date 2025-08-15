import Image from "next/image";

export default function TeamSection({ data }) {
    const ceo = data?.ceo;
    const members = data?.members || [];
    return (
        <section className="py-12">
            <div className="container max-w-6xl mx-auto px-4">
                <div className="text-center">
                    {/*Title*/}
                    <h2 className="text-white  text-3xl font-bold my-20  p-4 inline-block border-2 border-white">
                        ĐỘI NGŨ
                    </h2>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {ceo && (
                        <div className="text-center slide-in-bottom">
                            <Image
                                width={300}
                                height={300}
                                src={ceo.thumbnailUrl || '/thumbnails/nguyen-tuong.jpg'}
                                alt={ceo.name || 'nguyen-tuong'}
                                className="size-70 object-cover mx-auto mb-4"
                            />
                            <h3 className="text-white font-bold text-xl mb-2">
                                {ceo.name || 'KTS. TRẦN NGUYÊN TƯƠNG'}
                            </h3>
                            <p className="text-white font-base text-sm">
                                {ceo.title || 'GIÁM ĐỐC'}
                            </p>
                        </div>
                    )}
                    <div className="col-span-2 slide-in-bottom">
                        <p className="text-white text-lg">
                            {data?.aboutShort || ''}
                        </p>
                    </div>
                    {members.map((member) => (
                        <div className="text-center slide-in-bottom" key={member.name}>
                            <Image
                                width={300}
                                height={300}
                                src={member.thumbnailUrl}
                                alt={member.name}
                                className="size-70 object-top object-cover mx-auto mb-4"
                            />
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
    );
}

