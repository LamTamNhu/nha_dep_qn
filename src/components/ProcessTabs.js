'use client';
import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import {EarthGlobeIcon} from "@sanity/icons";
import {FacebookIcon, PhoneIcon} from "lucide-react";

export default function ProcessTabs({ data }) {
    if (!data || data.length === 0) {
        return null;
    }

    const [activeTab, setActiveTab] = useState(data[0].id);
    const activeTabData = data.find((tab) => tab.id === activeTab);

    return (
        <section>
            {/* Tabs Header */}
            <div className="container mx-auto flex flex-col items-center bg-white px-4 sm:flex-row sm:justify-center">
                {data.map((tab) => (
                    <button
                        key={tab.id}
                        className={`w-full px-4 text-white py-2 text-base transition-colors sm:w-auto sm:text-lg ${
                            activeTab === tab.id
                                ? 'bg-orange-400'
                                : 'bg-black'
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Timeline Content */}
            <div className="bg-black px-4 py-12 bg-[url('/images/slide3.jpg')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black opacity-60"/>
                <div className="mx-auto max-w-6xl">
                    {/* Mobile: Vertical Timeline */}
                    <div className="block lg:hidden">
                        <div className="relative">
                            {/* Vertical Timeline Line */}
                            <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-orange-400"/>

                            {/* Timeline Items */}
                            <div>
                                {activeTabData?.steps.map((step, index) => (
                                    <div
                                        key={step._key}
                                        className={`relative flex items-center ${
                                            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                                        }`}
                                    >
                                        {/* Content Side */}
                                        <div className="w-1/2 pr-4" style={index % 2 === 0 ? {} : { paddingRight: 0, paddingLeft: '1rem' }}>
                                            <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
                                                <div className="h-16 w-16">
                                                    {step.icon && (
                                                        <Image
                                                            src={urlFor(step.icon).url()}
                                                            alt={step.alt || 'Step Icon'}
                                                            width={64}
                                                            height={64}
                                                            className="h-full w-full object-contain"
                                                        />
                                                    )}
                                                </div>
                                                <h3 className={`text-sm font-semibold text-orange-400 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                                    {step.title}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Timeline Dot with Number */}
                                        <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-orange-400 bg-black">
                                                <span className="text-sm font-bold text-orange-400">{index + 1}</span>
                                            </div>
                                        </div>

                                        {/* Empty Side */}
                                        <div className="w-1/2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Desktop: Horizontal Timeline */}
                    <div className="hidden lg:block">
                        <div className="relative px-8">
                            {/* This main container uses flex-col to stack the three rows vertically. */}
                            <div className="z-10 flex flex-col max-w-4xl mx-auto">
                                {/* Row 1: Odd-indexed items (icon above title) */}
                                {/* We map the data, but only render content for odd indexes. */}
                                {/* Each item wrapper takes up equal space (flex-1) to ensure alignment. */}
                                <div className="flex gap-6">
                                    {activeTabData?.steps.map((step, index) => (
                                        <div key={`${step._key}-top`} className="flex-1 flex justify-center py-4 relative">
                                            {index % 2 !== 0 && (
                                                <div className="flex bg-orange-400 justify-center flex-col items-center gap-3 h-26 p-6 max-w-xs">
                                                    <div className="h-20 w-20 lg:h-24 lg:w-24 absolute top-0 -translate-y-1/2">
                                                        {step.icon && (
                                                            <Image
                                                                src={urlFor(step.icon).url()}
                                                                alt={step.alt || 'Step Icon'}
                                                                width={96}
                                                                height={96}
                                                                className="h-full w-full object-contain"
                                                            />
                                                        )}
                                                    </div>
                                                    <h3 className="text-center text-sm font-semibold text-gray-200 lg:text-base">
                                                        {step.title}
                                                    </h3>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2: Timeline graphic (line and numbered dots) */}
                                <div className="relative flex items-center justify-between">
                                    {/* Timeline Dots with Numbers and Lines */}
                                    {activeTabData?.steps.map((step, index) => (
                                        <div
                                            key={`${step._key}-dot`}
                                            className="relative z-20 flex-1 flex items-center justify-center h-8"
                                        >
                                            {/* Horizontal Timeline Line - half width for first/last, full for middle */}
                                            <div
                                                className={`absolute top-1/2 h-1 bg-orange-400 -translate-y-1/2 ${
                                                    index === 0
                                                        ? 'w-1/2 left-1/2'
                                                        : index === activeTabData.steps.length - 1
                                                            ? 'w-1/2 right-1/2'
                                                            : 'w-full'
                                                }`}
                                            />

                                            {/* Dot */}
                                            <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-orange-400 bg-orange-400">
                                                <span className="text-sm font-bold text-white">{index + 1}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Row 3: Even-indexed items (title above icon) */}
                                {/* We map the data, but only render content for even indexes. */}
                                <div className="flex gap-6">
                                    {activeTabData?.steps.map((step, index) => (
                                        <div key={`${step._key}-bottom`} className="flex-1 py-4 relative">
                                            {index % 2 === 0 && (
                                                <div className="flex flex-col items-center gap-3 h-26 p-6 bg-orange-400 justify-center">
                                                    <h3 className="text-center text-sm font-semibold text-gray-200 lg:text-base">
                                                        {step.title}
                                                    </h3>
                                                    <div className="absolute bottom-2 translate-y-1/2 h-20 w-20 lg:h-24 lg:w-24">
                                                        {step.icon && (
                                                            <Image
                                                                src={urlFor(step.icon).url()}
                                                                alt={step.alt || 'Step Icon'}
                                                                width={96}
                                                                height={96}
                                                                className="h-full w-full object-contain"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Info*/}
            <div className="container py-2 bg-orange-400 mx-auto w-screen">
                <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2">
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <EarthGlobeIcon color="white" className="w-6 h-6"/>
                        <span className="text-white font-bold">nhadepquangnam.vn</span>
                    </div>
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <PhoneIcon color="white" className="w-4 h-4"/>
                        <span className="text-white font-bold">0914.353.808 - 0905.659.036</span>
                    </div>
                    <div className="flex flex-row justify-center gap-2 items-center">
                        <FacebookIcon color="white" className="w-4 h-4"/>
                        <span className="text-white font-bold">NHÀ ĐẸP QUẢNG NAM</span>
                    </div>
                </div>
            </div>
        </section>
    );
}