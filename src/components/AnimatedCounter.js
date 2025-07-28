"use client"

import {useState, useEffect, useRef} from "react"

export default function AnimatedCounter({
                                            end = 1000,
                                            duration = 2000,
                                            text = "khách hàng thân thiết",
                                            className = "",
                                        }) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const counterRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                }
            },
            {threshold: 0.1},
        )

        if (counterRef.current) {
            observer.observe(counterRef.current)
        }

        return () => observer.disconnect()
    }, [isVisible])

    useEffect(() => {
        if (!isVisible) return

        let startTime = null
        const startCount = 0

        const animate = (currentTime) => {
            if (startTime === null) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(easeOutQuart * (end - startCount) + startCount)

            setCount(currentCount)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }, [isVisible, end, duration])

    return (
        <div
            ref={counterRef}
            className={`text-center flex flex-col justify-center items-center h-full ${className}`}
        >
            <div className="text-4xl font-bold mb-2 text-black">
                {count.toLocaleString()}+
            </div>
            <div className="text-lg font-bold text-grey-400">{text}</div>
        </div>
    )
}
