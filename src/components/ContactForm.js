'use client';

import * as React from 'react';
import { Facebook, MapPin, Phone } from 'lucide-react';

// Fallback content
const fallback = {
    title: 'Liên hệ ngay',
    subtitle: 'Hãy để Nhà Đẹp Quảng Nam giúp bạn tạo nên không gian sống giá trị.',
    office: {
        label: 'Trụ sở văn phòng:',
        value: '174 Nguyễn Văn Trỗi - Tam Kỳ - Quảng Nam',
    },
    fanpage: {
        label: 'Fanpage: NHÀ ĐẸP QUẢNG NAM',
        link: 'https://facebook.com/nhadepquangnam',
    },
    hotline: {
        label: 'Hotline:',
        value: '0914.353.808 - 0905.659.036',
    },
    budgetOptions: ['1 tỷ - 1.5 tỷ', '1.6 tỷ - 2 tỷ', '2 tỷ - 2.5 tỷ', '3 tỷ trở lên'],
};

export default function ContactForm({ data, isPopover = false }) {
    // Use Sanity data with per-field fallbacks
    const title = data?.title || fallback.title;
    const subtitle = data?.subtitle || fallback.subtitle;

    const office = {
        label: data?.office?.label || fallback.office.label,
        value: data?.office?.value || fallback.office.value,
    };

    const fanpage = {
        label: data?.fanpage?.label || fallback.fanpage.label,
        link: data?.fanpage?.link || fallback.fanpage.link,
    };

    const hotline = {
        label: data?.hotline?.label || fallback.hotline.label,
        value: data?.hotline?.value || fallback.hotline.value,
    };

    const budgetOptions = Array.isArray(data?.budgetOptions) && data.budgetOptions.length > 0
        ? data.budgetOptions
        : fallback.budgetOptions;

    return (
        <div className={`
            max-w-6xl mx-auto 
            grid grid-cols-1 ${isPopover ? 'lg:grid-cols-2' : 'md:grid-cols-2'} 
            gap-6 md:gap-12 
            items-start 
            ${!isPopover ? 'rounded-xl shadow-lg bg-white p-8' : ''}
        `}>
            {/* Contact Info */}
            <div>
                <h2 className="text-lg md:text-xl mb-2 flex items-center gap-2 font-bold text-orange-400">
                    {title}
                    <span className="flex-1 h-0.5 bg-orange-300 ml-2" />
                </h2>
                <h3 className="text-sm md:text-md italic text-left mb-6 md:mb-8">{subtitle}</h3>

                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-4">MỌI THẮC MẮC XIN LIÊN HỆ:</h4>
                <ul className="space-y-4 md:space-y-6">
                    <li className="flex items-start gap-3 md:gap-4">
                        <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1 flex-shrink-0">
                            <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-orange-400 font-semibold text-sm md:text-base">{office.label}</div>
                            <div className="text-gray-900 font-medium text-sm md:text-base break-words">{office.value}</div>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                        <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1 flex-shrink-0">
                            <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-orange-400 font-semibold text-sm md:text-base">{fanpage.label}</div>
                            <a
                                href={fanpage.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 underline text-sm md:text-base break-all"
                            >
                                {fanpage.link.replace('https://', '')}
                            </a>
                        </div>
                    </li>
                    <li className="flex items-start gap-3 md:gap-4">
                        <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-orange-300 text-white mt-1 flex-shrink-0">
                            <Phone className="w-4 h-4 md:w-5 md:h-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-orange-400 font-semibold text-sm md:text-base">{hotline.label}</div>
                            <div className="text-gray-900 font-medium text-sm md:text-base break-words">{hotline.value}</div>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 md:space-y-6 contact" id="contact">
                <p className="text-sm md:text-base">
                    Xin để lại thông tin chi tiết để chúng tôi hiểu rõ nhu cầu và mong muốn của bạn
                </p>

                <div className="grid grid-cols-1 gap-4 md:gap-6">
                    {['Họ và tên*', 'Email*', 'Số điện thoại*', 'Diện tích đất và tầng muốn xây*', 'Địa phương muốn xây*'].map(
                        (placeholder, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={placeholder}
                                required
                                className="w-full border border-gray-300 rounded px-3 md:px-4 py-2 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
                            />
                        )
                    )}
                </div>

                <div>
                    <p className="font-medium mb-2 text-sm md:text-base">Ngân sách (*)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                        {budgetOptions.map((budget, idx) => (
                            <label key={idx} className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox text-yellow-400 flex-shrink-0" />
                                <span className="text-sm md:text-base">{budget}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div>
                    <textarea
                        className="w-full border border-gray-300 rounded px-3 md:px-4 py-2 min-h-[80px] md:min-h-[100px] text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-orange-300"
                        placeholder="Yêu cầu chi tiết nếu có!*"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-400 hover:bg-orange-300 text-white font-semibold py-2 md:py-3 rounded transition-colors duration-200 text-base md:text-lg mt-2"
                >
                    Gửi yêu cầu!
                </button>
            </form>
        </div>
    );
}