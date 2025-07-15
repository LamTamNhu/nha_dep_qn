import * as React from "react";
import {Facebook, MapPin, Phone} from "lucide-react";

export default function ContactForm() {
    return (
        <div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start rounded-xl shadow-lg bg-white p-8 z-50">
            {/* Left: Contact Info */}
            <div>
                <h2 className="text-xl mb-2 flex items-center gap-2 font-bold text-orange-400">
                    LIÊN HỆ NGAY
                    <span className="flex-1 h-0.5 bg-orange-300 ml-2"/>
                </h2>
                <h3 className="text-md font-semibold text-left mb-8">
                    Hãy để Nhà Đẹp Quảng Nam giúp bạn tạo nên không gian sống giá trị.
                </h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    MỌI THẮC MẮC XIN LIÊN HỆ:
                </h4>
                <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1">
                  <MapPin/>
                </span>
                        <div>
                            <div className="text-orange-400 font-semibold">
                                Trụ sở văn phòng:
                            </div>
                            <div className="text-gray-900 font-medium">
                                174 Nguyễn Văn Trỗi - Tam Kỳ- Quảng Nam
                            </div>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1">
                  <Facebook/>
                </span>
                        <div>
                            <div className="text-orange-400 font-semibold align-middle">
                                Fanpage: NHÀ ĐẸP QUẢNG NAM
                            </div>
                            <a href="#">facebook.com/nhadepquangnam</a>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1">
                  <Phone/>
                </span>
                        <div>
                            <div className="text-orange-400 font-semibold">Hotline:</div>
                            <div className="text-gray-900 font-medium">
                                0914.353.808 - 0905.659.036
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            {/* Right: Contact Form */}
            <form className="space-y-6 contact" id="contact">
                <p>
                    Hãy để lại thông tin chi tiết để chúng tôi hiểu rõ nhu cầu và mong
                    muốn của bạn
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Tên khách hàng
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Điền tên của bạn"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Email <span className="text-orange-400">*</span>
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Điền email của bạn"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Số điện thoại <span className="text-orange-400">*</span>
                        </label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Điền số điện thoại"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Dịch vụ quan tâm <span className="text-orange-400">*</span>
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                            placeholder="Nhập tên dịch vụ"
                            required
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                        Nhu cầu mong muốn:
                    </label>
                    <textarea
                        className="w-full border border-gray-300 rounded px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="Điền yêu cầu của bạn"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-400 hover:bg-orange-300 text-white font-semibold py-3 rounded transition-colors duration-200 text-lg mt-2"
                >
                    Gửi yêu cầu
                </button>
            </form>
        </div>
    )
}