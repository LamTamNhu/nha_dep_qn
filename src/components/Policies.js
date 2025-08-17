import {CreditCard, Lock, ShieldUser} from "lucide-react";

export default function Policies(){
    return(
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
    )
}