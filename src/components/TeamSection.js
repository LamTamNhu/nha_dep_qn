"use client";

import Image from "next/image";

export default function TeamSection({ data }) {
    const members = data?.members || [];

    const Card = ({ person }) => (
        <div className="relative gallery-reveal">
            <div className="relative aspect-2/3 w-full mb-4 overflow-hidden group">
                <Image
                    src={person.thumbnailUrl}
                    alt={person.name}
                    fill
                    className="object-cover object-top mx-auto"
                />
                {person.aboutShort && (
                    <div
                        className="absolute bottom-0 w-full p-4 flex items-center justify-center
                        bg-orange-400/70 text-white
                        transform translate-y-full opacity-0
                        group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-500"
                    >
                        <p className="text-base text-white line-clamp-2 text-center">
                            {person.aboutShort}
                        </p>
                    </div>
                )}
            </div>
            <h3 className="text-white font-bold text-xl mb-2">{person.name}</h3>
            <p className="text-gray-300 text-sm">{person.title}</p>
        </div>
    );

    return (
        <section className="py-12">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
                        ĐỘI NGŨ
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {members.map((m) => (
                        <Card key={m.name} person={m} />
                    ))}
                </div>
            </div>
        </section>
    );
}
