"use client";
import React, {useState, useEffect} from 'react';
import Image from "next/image";
import animateOnObserve from "@/lib/animateOnObserve";

const WhyChooseUs = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const animateCounter = (setter, targetNumber, duration = 2000) => {
        const startNumber = 0;
        const increment = targetNumber / (duration / 16);
        let currentNumber = startNumber;

        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }

            const displayNumber = Math.floor(currentNumber);
            setter(displayNumber);
        }, 16);
    };

    const startAnimation = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setCounter1(0);
        setCounter2(0);
        setCounter3(0);

        setTimeout(() => animateCounter(setCounter1, 10, 1000), 300);
        setTimeout(() => animateCounter(setCounter2, 3000, 2000), 600);
        setTimeout(() => animateCounter(setCounter3, 1000, 1500), 900);

        setTimeout(() => setIsAnimating(false), 4500);
    };

    useEffect(() => {
        animateOnObserve('.counter-trigger', {
            animationClass: 'in-view',
            once: true,
            threshold: 0.3,
            onEnter: () => startAnimation()
        });
    }, []);

       return (
        <div className="relative w-[500px] h-[500px] cursor-pointer swing-in-top-fwd-2">
            {/* Main ring with white background and drop shadow */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full shadow-2xl flex items-center justify-center">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                    <Image src="/images/logo.png" alt="logo" width={250} height={200}/>
                </div>
                {/* Counter 1 - Top position */}
                <div className="absolute -top-6 -right-36 flex items-center space-x-6">
                    <div className="relative w-4 h-4 rounded-full bg-orange-400 ping"/>
                    <div className="text-3xl font-bold text-orange-500 counter-trigger">
                        {counter1.toLocaleString()}+
                        <div className="text-sm text-gray-600 uppercase tracking-wide">
                            NĂM KINH NGHIỆM
                        </div>
                    </div>
                </div>
                {/* Counter 2 - Middle position */}
                <div className="absolute -right-57 flex items-center space-x-5">
                    <div className="relative w-4 h-4 rounded-full bg-orange-400 ping"/>
                    <div className="text-3xl font-bold text-orange-500 counter-trigger">
                        <div className="mb-2">{counter2.toLocaleString()}+</div>
                        <div className="text-sm text-gray-600 uppercase tracking-wide">
                            MẪU THIẾT KẾ HIỆN ĐẠI
                        </div>
                    </div>
                </div>

                {/* Counter 3 - Bottom  position */}
                <div className="absolute -bottom-6 -right-48 flex items-center space-x-5">
                    <div className="relative w-4 h-4 rounded-full bg-orange-400 ping"/>
                    <div className="text-3xl font-bold text-orange-500 counter-trigger">
                        {counter3.toLocaleString()}+
                        <div className="text-sm text-gray-600 uppercase tracking-wide">
                            KHÁCH HÀNG THÂN THIẾT
                        </div>
                    </div>
                </div>
            </div>

            {/* Half ring on the right side */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-80 h-80 border-3 border-orange-400 rounded-full relative half-ring">
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;