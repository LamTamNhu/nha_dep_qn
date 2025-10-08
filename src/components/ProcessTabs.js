'use client';
import {useState} from 'react';
import Image from 'next/image';
import {urlFor} from '@/sanity/lib/image';
import {EarthGlobeIcon} from "@sanity/icons";
import {FacebookIcon, PhoneIcon} from "lucide-react";

export default function ProcessTabs({data}) {
    const [activeTab, setActiveTab] = useState(data?.[0]?.id);

    if (!data || data.length === 0) {
        return null;
    }

    const activeTabData = data.find((tab) => tab.id === activeTab);

    // Reusable component for timeline step cards
    const TimelineStepCard = ({step, index, position}) => {
        const isTop = position === 'top';

        return (
            <div className="flex bg-orange-400 justify-center flex-col items-center gap-3 h-24 p-2 w-fit max-w-[200px] mx-auto">
                <div
                    className={`h-20 w-20 lg:h-24 lg:w-24 absolute ${isTop ? 'top-0 -translate-y-1/2' : 'bottom-2 translate-y-1/2'}`}>
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
                <div className="text-center font-semibold text-gray-200 text-sm line-clamp-3">
                    {step.title}
                </div>
            </div>
        );
    };

    // Reusable component for timeline row
    const TimelineRow = ({steps, showOdd}) => (
        <div className="flex">
            {steps.map((step, index) => (
                <div key={`${step._key}-${showOdd ? 'top' : 'bottom'}`}
                     className="flex-1 flex justify-center py-4 relative">
                    {(showOdd ? index % 2 !== 0 : index % 2 === 0) && (
                        <TimelineStepCard
                            step={step}
                            index={index}
                            position={showOdd ? 'top' : 'bottom'}
                        />
                    )}
                </div>
            ))}
        </div>
    );

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
            <div
                className="bg-black px-4 py-12 bg-[url('/images/process.jpg')] bg-cover bg-center bg-no-repeat relative">
                <div className="absolute inset-0 bg-black opacity-60"/>
                <div className="mx-auto">
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
                                        <div className="w-1/2 pr-4"
                                             style={index % 2 === 0 ? {} : {paddingRight: 0, paddingLeft: '1rem'}}>
                                            <div
                                                className={`flex flex-col gap-2 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
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
                                        <div
                                            className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                            <div
                                                className="flex h-8 w-8 items-center justify-center rounded-full border-4 border-orange-400 bg-black">
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
                    <div className="hidden relative px-8 lg:block">
                        <div className="z-10 flex flex-col mx-auto max-w-8xl">
                            {/* Row 1: Odd-indexed items (icon above title) */}
                            <TimelineRow steps={activeTabData?.steps || []} showOdd={true}/>

                            {/* Row 2: Timeline graphic (line and numbered dots) */}
                            <div className="relative flex items-center justify-between">
                                {activeTabData?.steps.map((step, index) => (
                                    <div
                                        key={`${step._key}-dot`}
                                        className="relative z-20 flex-1 flex items-center justify-center h-8"
                                    >
                                        {/* Horizontal Timeline Line */}
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
                                        <div
                                            className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-orange-400 bg-orange-400">
                                            <span className="text-sm font-bold text-white">{index + 1}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Row 3: Even-indexed items (title above icon) */}
                            <TimelineRow steps={activeTabData?.steps || []} showOdd={false}/>
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