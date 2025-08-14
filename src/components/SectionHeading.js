"use client";
import animateOnObserve from "@/lib/animateOnObserve";
import {useEffect} from "react";

function SectionHeading({ children, className = '' }) {
    useEffect(() => {
        // Set up animations after DOM is ready
        const swingObserver = animateOnObserve('.swing-in-top-fwd-2');

        // Cleanup function to disconnect observers
        return () => {
            swingObserver.disconnect();
        };
    }, []);

    return (
        <h2 className="text-4xl font-extrabold text-center text-orange-400 swing-in-top-fwd-2 mb-6">
            {children}
        </h2>
    );
}

export default SectionHeading;