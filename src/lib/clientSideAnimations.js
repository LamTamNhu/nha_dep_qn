// src/components/ClientSideAnimations.jsx
'use client'

import { useEffect } from 'react'
import animateOnObserve from '@/lib/animateOnObserve'

export default function ClientSideAnimations() {
    useEffect(() => {
        const swingObserver = animateOnObserve('.swing-in-top-fwd-2')
        const slideObserver = animateOnObserve('.slide-in-bottom')
        const slideInObserver = animateOnObserve('.slide-in-right')
        const puffInObserver = animateOnObserve('.puff-in-center')

        return () => {
            swingObserver.disconnect()
            slideObserver.disconnect()
            slideInObserver.disconnect()
            puffInObserver.disconnect()
        }
    }, [])

    return null
}
