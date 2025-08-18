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
    contactHeader: 'MỌI THẮC MẮC XIN LIÊN HỆ:'
};

export default function ContactForm({ data, isPopover = false, sidebarMode = false }) {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        phone: '',
        area: '',
        location: '',
        budget: [],
        details: ''
    });

    // Use Sanity data with per-field fallbacks
    const title = data?.title || fallback.title;
    const subtitle = data?.subtitle || fallback.subtitle;
    const contactHeader = data?.contactHeader || fallback.contactHeader;

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

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleBudgetChange = (budget, checked) => {
        setFormData(prev => ({
            ...prev,
            budget: checked
                ? [...prev.budget, budget]
                : prev.budget.filter(b => b !== budget)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // If sidebar mode, render compact version
    if (sidebarMode) {
        return (
            <div className="bg-gray-50 rounded-lg p-4 space-y-4 max-w-xs">
                {/* Header */}
                <div>
                    <h3 className="text-orange-400 font-bold text-lg mb-1 flex items-center">
                        {title}
                        <div className="flex-1 h-0.5 bg-orange-300 ml-2"></div>
                    </h3>
                </div>
                {/* Contact Form */}
                <div className="space-y-3">
                    <div className="space-y-2">
                        <input
                            type="text"
                            placeholder="Họ và tên*"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <input
                            type="email"
                            placeholder="Email*"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <input
                            type="tel"
                            placeholder="Số điện thoại*"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <input
                            type="text"
                            placeholder="Diện tích đất và tầng muốn xây*"
                            value={formData.area}
                            onChange={(e) => handleInputChange('area', e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                        <input
                            type="text"
                            placeholder="Địa phương muốn xây*"
                            value={formData.location}
                            onChange={(e) => handleInputChange('location', e.target.value)}
                            className="w-full border border-gray-300 rounded px-2 py-1.5 text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                        />
                    </div>

                    {/* Budget Options */}
                    <div>
                        <p className="font-medium mb-2 text-md text-gray-900">Ngân sách (*)</p>
                        <div className="grid grid-cols-2 gap-1">
                            {budgetOptions.map((budget, idx) => (
                                <label key={idx} className="flex items-center space-x-1">
                                    <input
                                        type="checkbox"
                                        checked={formData.budget.includes(budget)}
                                        onChange={(e) => handleBudgetChange(budget, e.target.checked)}
                                        className="w-3 h-3 text-orange-400 bg-white border-gray-300 rounded focus:ring-orange-300 focus:ring-2"
                                    />
                                    <span className="text-md text-gray-900">{budget}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Text area */}
                    <textarea
                        placeholder="Yêu cầu chi tiết nếu có!*"
                        value={formData.details}
                        onChange={(e) => handleInputChange('details', e.target.value)}
                        className="w-full border border-gray-300 rounded px-2 py-1.5 min-h-[60px] text-sm text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 rounded transition-colors duration-200 text-lg"
                    >
                        Gửi yêu cầu!
                    </button>
                </div>
            </div>
        );
    }

    // Original layout for non-sidebar mode
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
                <h2 className={`text-lg md:text-xl flex items-center gap-2 font-bold text-orange-400 mb-2` }>
                    {title}
                    <span className="flex-1 h-0.5 bg-orange-300 ml-2" />
                </h2>
                <h3 className={`text-sm md:text-md italic text-left mb-6 md:mb-8`}>{subtitle}</h3>

                <h4 className={`text-base md:text-lg font-semibold text-gray-900 mb-4`}>{contactHeader}</h4>
                <ul className={`space-y-4 md:space-y-6`}>
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

            {/* Contact Form - Original */}
            <div className={`space-y-4 md:space-y-6 contact`}>
                <p className="text-sm md:text-base">
                    Xin để lại thông tin chi tiết để chúng tôi hiểu rõ nhu cầu và mong muốn của bạn
                </p>

                <div className={`grid grid-cols-1 gap-4 md:gap-6`}>
                    {['Họ và tên*', 'Email*', 'Số điện thoại*', 'Diện tích đất và tầng muốn xây*', 'Địa phương muốn xây*'].map(
                        (placeholder, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={placeholder}
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
                                <input type="checkbox" className="w-4 h-4 text-orange-400 bg-gray-100 border-gray-300 rounded focus:ring-orange-300 focus:ring-2 flex-shrink-0" />
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
                    onClick={handleSubmit}
                    className="w-full bg-orange-400 hover:bg-orange-300 text-white font-semibold py-2 md:py-3 rounded transition-colors duration-200 text-base md:text-lg mt-2"
                >
                    Gửi yêu cầu!
                </button>
            </div>
        </div>
    );
}