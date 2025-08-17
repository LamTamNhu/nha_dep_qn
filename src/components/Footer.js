'use client';

import Image from 'next/image';
import ContactPopover from '@/components/ContactPopover';

const fallback = {
    companyName: 'CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM',
    logo: '/images/logo_footer.png',
    ctaText: 'LIÊN HỆ NGAY VỚI CHÚNG TÔI',
    description:
        'Hãy để chúng tôi kiến tạo không gian sống tuyệt vời dành cho gia đình bạn với những kiến trúc sư hàng đầu trong ngành.',
    mainBranch: {
        address: '174 Nguyễn Văn Trỗi, P. Tân Thạnh, TP. Tam Kỳ, T. Quảng Nam',
        email: 'nhadepquangnam@gmail.com',
        phones: ['0914.353.808', '0905.659.036'],
    },
    footerQuotes: [
        'Với ước mơ tạo ra những ngôi nhà thật đẹp chàng kĩ sư trẻ Nguyên Tương Tổng Giám Đốc tại công ty Nhà Đẹp Quảng Nam chia sẻ.',
        '"Chúng tôi không chỉ đơn thuần xây dựng những công trình, mà còn kiến tạo nên những tổ ấm - nơi gia đình sum vầy, nơi nuôi dưỡng những khoảnh khắc hạnh phúc."'
    ],
};

export default function Footer({data}) {
    const content = data || fallback;
    const company = content.companyName || fallback.companyName;
    const logo = content.logo || fallback.logo;
    const ctaText = content.ctaText || fallback.ctaText;
    const description = content.description || fallback.description;
    const mainBranch = content.mainBranch || fallback.mainBranch;
    const footerQuotes =
        Array.isArray(content.footerQuotes) && content.footerQuotes.length > 0
            ? content.footerQuotes
            : fallback.footerQuotes;

    const circleSize = '400px';

    return (
        <div>
            <div className="bg-transparent h-32"/>
            <div className="bg-black">
                <footer className="relative overflow-visible">
                    {/* Decorative circle layers */}
                    <div
                        className="absolute ping border-8 border-orange-400 top-0 -translate-y-1/2 right-50 rounded-full pointer-events-none z-0 opacity-60 invisible lg:visible"
                        style={{width: circleSize, height: circleSize}}
                    />
                    <div
                        className="absolute top-0 border-8 border-orange-400 -translate-y-1/2 right-50 rounded-full z-0 opacity-60 invisible lg:visible"
                        style={{width: circleSize, height: circleSize}}
                    />
                    <div
                        className="absolute top-0 -translate-y-1/2 right-50 rounded-full z-20 invisible lg:visible overflow-visible"
                        style={{width: circleSize, height: circleSize}}
                    >
                        {/* CTA Circle Content */}
                        <div
                            className="absolute inset-6 bg-orange-400 rounded-full z-20 text-center flex flex-col items-center justify-center px-8 overflow-visible">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={800}
                                height={800}
                                className="w-70 h-16 object-cover top-0"
                            />
                            <h2 className="text-white font-bold text-lg mb-6">{ctaText}</h2>
                            <p className="text-gray-50 text-sm text-justify leading-relaxed mb-8">{description}</p>

                            {/* ContactPopover with fixed positioning */}
                            <div className="relative z-[9999]">
                                <ContactPopover
                                    trigger={
                                        <button
                                            className="heartbeat bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-black hover:text-orange-400 transition-colors relative z-[9999]">
                                            Liên hệ ngay
                                        </button>
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Main footer layout */}
                    <div className="relative z-10 w-full h-full flex bg-black text-white p-12">
                        <div className="max-w-6xl text-left flex flex-col gap-8">
                            {/* Column 1: Main Branch */}
                            <div>
                                <h3 className="text-2xl font-bold mb-3">{company}</h3>
                                <div className="mb-2">{mainBranch.address}</div>
                                {mainBranch.email && <div className="mb-2">Email: {mainBranch.email}</div>}
                                {mainBranch.phones?.length > 0 && (
                                    <div className="mb-2">Số điện thoại: {mainBranch.phones.join(' - ')}</div>
                                )}
                            </div>

                            {/* Quotes */}
                            <div className="w-full">
                                {footerQuotes.map((quote, index) => (
                                    <p key={index} className={index === 0 ? 'italic' : ''}>
                                        {quote}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}