'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProcessTabs({ data }) {
  const [activeTab, setActiveTab] = useState('design');

  // ✅ Hardcoded fallback
  const fallbackTabs = [
    {
      id: 'design',
      label: 'QUY TRÌNH THIẾT KẾ',
      steps: [
        {
          iconSrc: '/images/Artboard-5.png',
          alt: 'icon1',
          title: 'TRAO ĐỔI TƯ VẤN',
          description:
            'Trao đổi yêu cầu, tư vấn định hướng ý tưởng, phong cách và mức đầu tư',
        },
        {
          iconSrc: '/images/Artboard-6.png',
          alt: 'icon2',
          title: 'BÁO GIÁ QUY TRÌNH',
          description:
            'Gửi khách hàng báo giá theo đúng gói thiết kế mà Khách Hàng đang đề cập, kèm quy trình làm việc cụ thể, chi tiết',
        },
        {
          iconSrc: '/images/Artboard-7.png',
          alt: 'icon3',
          title: 'KÝ HỢP ĐỒNG',
          description:
            'Thực hiện các thủ tục hành chính và bắt đầu triển khai các công việc theo tiến độ thống nhất',
        },
        {
          iconSrc: '/images/Artboard-8.png',
          alt: 'icon4',
          title: 'BÀN GIAO & QUYẾT TOÁN',
          description:
            'Sau khi thống nhất hồ sơ báo cáo tiến độ, khách hàng thanh toán lần cuối giá trị HĐ còn lại trước khi nhận hồ sơ hoàn chỉnh.',
        },
      ],
    },
    {
      id: 'construction',
      label: 'QUY TRÌNH THI CÔNG TRỌN GÓI',
      steps: [
        {
          iconSrc: '/images/Artboard-5.png',
          alt: 'icon1',
          title: 'TRAO ĐỔI TƯ VẤN',
          description:
            'Trao đổi và tư vấn khách hàng về nhu cầu, mong muốn, và định hướng mức đầu tư.',
        },
        {
          iconSrc: '/images/Artboard-6.png',
          alt: 'icon2',
          title: 'BÁO GIÁ QUY TRÌNH',
          description:
            'Gửi báo giá thi công, chủng loại vật tư và Quy trình thi công để khách hàng nắm được thông tin.',
        },
        {
          iconSrc: '/images/Artboard-9.png',
          alt: 'icon3',
          title: 'KÝ HỢP ĐỒNG',
          description:
            'Hai bên gặp gỡ trao đổi thống nhất các vấn đề liên quan tiến độ, chất lượng, ngày khởi công và các điều khoản hợp đồng.',
        },
        {
          iconSrc: '/images/Artboard-10.png',
          alt: 'icon4',
          title: 'BÀN GIAO & QUYẾT TOÁN',
          description:
            'Kiểm tra, nghiệm thu và thanh quyết toán hợp đồng. Tiến hành bảo hành bảo trì dài hạn theo cam kết hợp đồng.',
        },
      ],
    },
  ];

  // ✅ Merge Sanity data with fallback
  const tabs = fallbackTabs.map((fallbackTab) => {
    const sanityTab = data?.find((tab) => tab.id === fallbackTab.id);
    return {
      ...fallbackTab,
      label: sanityTab?.label || fallbackTab.label,
      steps:
        sanityTab?.steps?.length > 0
          ? sanityTab.steps.map((step, index) => ({
              iconSrc:
                step.icon?.asset?.url || fallbackTab.steps[index]?.iconSrc,
              alt: step.alt || fallbackTab.steps[index]?.alt,
              title: step.title || fallbackTab.steps[index]?.title,
              description:
                step.description || fallbackTab.steps[index]?.description,
            }))
          : fallbackTab.steps,
    };
  });

  return (
    <section>
      {/* ✅ Tabs Header */}
      <div className="container mx-auto flex flex-col items-center gap-2 bg-white px-4 sm:flex-row sm:justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-base sm:text-lg w-full sm:w-auto px-4 py-2 transition-colors ${
              activeTab === tab.id
                ? 'bg-orange-400 text-white'
                : 'bg-black text-white'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ✅ Tabs Content */}
      <div className="bg-black py-12 px-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="container mx-auto grid grid-cols-2 gap-6 sm:gap-8 md:flex md:justify-between md:items-start md:space-x-8 md:px-4">
            {tabs
              .find((tab) => tab.id === activeTab)
              ?.steps.map((step, index, arr) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3 md:flex md:flex-row md:items-start md:text-left md:w-1/4 md:gap-4"
                >
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto md:mx-0">
                    <Image
                      src={step.iconSrc}
                      alt={step.alt}
                      width={150}
                      height={150}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center gap-2 md:items-start md:text-left">
                    <h3 className="text-orange-400 text-sm sm:text-base md:text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="hidden md:flex w-16 justify-center self-center">
                      <ArrowRight className="text-gray-300" size={40} />
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
