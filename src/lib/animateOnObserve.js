export default function animateOnObserve(selector, options = {}) {
    const defaults = {
        threshold: 0.1,
        rootMargin: '0px',
        animationClass: 'animate',
        once: true,
        onEnter: null,
    };

    const config = { ...defaults, ...options };

    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add(config.animationClass);

                if (typeof config.onEnter === 'function') {
                    config.onEnter(entry.target);
                }

                if (config.once) {
                    observer.unobserve(entry.target);
                }
            } else if (!config.once) {
                entry.target.classList.remove(config.animationClass);
            }
        });
    }, {
        threshold: config.threshold,
        rootMargin: config.rootMargin
    });

    elements.forEach(el => observer.observe(el));

    return observer;
}
