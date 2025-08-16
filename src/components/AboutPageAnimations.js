'use client';

import {useEffect} from 'react';
import animateOnObserve from '@/lib/animateOnObserve';

export default function AboutPageAnimations() {
    useEffect(() => {
        const swingObserver = animateOnObserve('.swing-in-top-fwd-2');
        const borderObserver = animateOnObserve('.border-draw');
        const puffObserver = animateOnObserve('.puff-in-center');
        const slideObserver = animateOnObserve('.slide-in-bottom');

        return () => {
            swingObserver.disconnect();
            borderObserver.disconnect();
            puffObserver.disconnect();
            slideObserver.disconnect();
        };
    }, []);

    return null;
}

