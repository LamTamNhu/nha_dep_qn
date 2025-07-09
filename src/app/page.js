"use client"
import Navbar from "./navbar"
import * as React from "react"
import {useEffect, useState} from "react"
import Image from "next/image";
import AnimatedCounter from "@/components/animated-counter";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const slides = [
        {
            id: 1,
            image: "/wide_shot.jpg",
            alt: "wide shot"
        },
        {
            id: 2,
            image: "/wide_hands.jpg",
            alt: "wide hands"
        },
        {
            id: 3,
            image: "/group_walking.jpg",
            alt: "group shot"
        }
    ]

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])
    return (
        <div className="min-h-screen">
            <Navbar/>
            {/* Hero Section with Background Image */}
            <div className="h-screen w-full relative overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                            index === currentSlide ? "translate-x-0" : index < currentSlide ? "-translate-x-full" : "translate-x-full"
                        }`}
                    >
                        <div className="h-full w-full relative">
                            <Image
                                src={slide.image || "/globe.svg"}
                                alt={slide.alt}
                                fill
                                priority={index === 0} // Priority loading for first image
                                quality={90}
                                sizes="100vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 bg-black/10"/>
            {/* Introduction section */}
            <div className="py-20 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-left text-orange-400 mb-8">
                        CÔNG TY TNHH NHÀ ĐẸP QUẢNG NAM</h2>
                    <p className="text-base font-normal text-left mb-2 text-wrap: pretty lg:w-1/2">Công ty TNHH NHÀ ĐẸP
                        QUẢNG
                        NAM do KTS Nguyên
                        Tương thành lập là đơn vị hàng đầu trong lĩnh vực Thiết kế và Thi công Nội thất hiện nay với gần
                        10 năm kinh nghiệm thực chiến.
                    </p>
                    <p className="text-base font-normal text-left mb-2 lg:w-1/2">
                        Chúng tôi chuyên thiết kế thi công trọn gói cho Nhà Phố, Nhà
                        Vườn, Biệt Thực, Chung Cư, Văn Phòng, Nhà Hàng,...
                    </p>
                    <p className="text-base font-normal text-left mb-2 lg:w-1/2 text-wrap: pretty">
                        Với sự nhiệt huyết cùng đội ngũ nhân sự trẻ
                        trung và năng động, NĐQN với mong muốn và xứ mệnh kiến tạo không gian sống giá trị đa dạng phong
                        cách, mới lạ hiện đại, đáp ứng tốt nhất có thể mọi nhu cầu khách hàng đưa ra.
                    </p>
                </div>
            </div>
            {/* Stats Section with Animated Counter */}
            <div className="py-20 px-4 bg-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
                        <AnimatedCounter end={10} duration={2500} text="năm kinh nghiệm"/>
                        <AnimatedCounter end={100} duration={2000} text="chuyên viên, công nhân"/>
                        <AnimatedCounter end={1000} duration={1500} text="khách hàng thân thiết"/>
                        <AnimatedCounter end={3000} duration={1500} text="mẫu thiết kế hiện đại"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
