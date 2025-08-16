import Image from "next/image";
import {CreditCard, Lock, ShieldUser} from "lucide-react";
import Commitments from "@/components/Commitments";
import CoreValues from "@/components/CoreValues";
import AboutHeroSection from "@/components/AboutHeroSection";
import TeamSection from "@/components/TeamSection";
import AboutPageAnimations from "@/components/AboutPageAnimations";
import {client} from "@/sanity/lib/client";
import {aboutPageQuery} from "@/sanity/lib/queries";

export default async function AboutPage() {
    const data = await client.fetch(aboutPageQuery);

    return (
        <div className="w-full bg-[#373737]">
            <AboutPageAnimations/>
            <AboutHeroSection data={data?.heroSection}/>
            <TeamSection data={data?.teamSection}/>
            <div>
                {/*Office pictures*/}
                <section className="pt-12">
                    <div className="w-full mx-auto text-center">
                        <h2 className="text-white text-3xl font-bold my-20 p-4 inline-block border-2 border-white">
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
                <Commitments/>
                <CoreValues/>
                <section className="py-12 px-4 sm:px-6 lg:px-8">
                    {/* Policies Section */}
                    <div className="max-w-6xl mx-auto mt-20">
                        {/* Header */}
                        <div className="mb-12 text-center">
                            <h2 className="text-white  text-3xl font-bold my-20  p-4 border-2 border-white inline-block">
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

