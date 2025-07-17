import LocalFont from 'next/font/local';

export const utmAvo = LocalFont({
    src: [
        {
            path: '../public/fonts/utm-avo.ttf', // Adjust path relative to this file
            weight: '400',
            style: 'normal',
        },
        {
            path: 'public/fonts/utm-avobold.ttf', // Adjust path
            weight: '700',
            style: 'bold',
        },
    ],
    variable: '--font-utm-avo', // Define a CSS variable for Tailwind
    display: 'swap', // Recommended for performance
});