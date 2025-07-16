export default function animateOnObserve(selector, options = {}) {
    // Default options
    const defaults = {
        threshold: 0.1,
        rootMargin: '0px',
        animationClass: 'animate',
        once: true
    };

    const config = { ...defaults, ...options };

    // Get all elements matching the selector
    const elements = document.querySelectorAll(selector);

    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when element is visible
                entry.target.classList.add(config.animationClass);

                // If once is true, stop observing this element
                if (config.once) {
                    observer.unobserve(entry.target);
                }
            } else if (!config.once) {
                // Remove animation class when element is not visible (if once is false)
                entry.target.classList.remove(config.animationClass);
            }
        });
    }, {
        threshold: config.threshold,
        rootMargin: config.rootMargin
    });

    // Start observing all elements
    elements.forEach(el => observer.observe(el));

    // Return observer instance for manual control if needed
    return observer;
}