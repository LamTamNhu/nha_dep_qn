import Image from "next/image";
import {fancyFont} from "@/app/fonts";

export default function Commitments({khongItems}) {
    return (
        <section>
            <div className="relative w-full">
                <div
                    className="brightness-65 filter blur-[1px] absolute inset-0 z-0 pointer-events-none bg-[url('/images/5khong-bg.png')] bg-cover bg-bottom"/>
                {/*Content*/}
                <div className="max-w-6xl flex py-30 mx-auto">
                    <div className="pt-18 w-40 swing-in-top-fwd-2">
                        <div className="text-orange-400 font-extrabold text-lg sm:text-xl md:text-2xl lg:text-4xl mb-2">
                            5 KHÔNG
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="text-white text-base sm:text-lg md:text-xl">Tại</div>
                            <div className={`${fancyFont.className} text-white text-lg sm:text-xl md:text-2xl lg:text-4xl`}>
                                Nhà đẹp Quảng Nam
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[1fr_auto_1fr] max-w-6xl gap-4">
                        {/* Left column */}
                        <div className="flex flex-col gap-4">
                            {khongItems
                                .filter((_, i) => i % 2 === 0) // take even indexes
                                .map((item, index) => (
                                    <div key={`left-${index}`} className="flex flex-col items-center text-center">
                                        <Image src={item.icon} alt={item.title} width={48} height={48} />
                                        <div className="text-orange-400 font-bold text-lg">{item.title}</div>
                                        <div className="text-white">{item.description}</div>
                                    </div>
                                ))}
                        </div>

                        {/* Spacer column */}
                        <div className="w-px bg-gray-300" />

                        {/* Right column */}
                        <div className="flex flex-col gap-4">
                            {khongItems
                                .filter((_, i) => i % 2 === 1) // take odd indexes
                                .map((item, index) => (
                                    <div key={`right-${index}`} className="flex flex-col items-center text-center">
                                        <Image src={item.icon} alt={item.title} width={48} height={48} />
                                        <div className="text-orange-400 font-bold text-lg">{item.title}</div>
                                        <div className="text-white">{item.description}</div>
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}