// src/app/layout.js (minimal root)
import "./globals.css";
import localFont from 'next/font/local'

const utmAvo = localFont({
    src: [
        { path: './fonts/UTMAvo.ttf', weight: '400', style: 'normal' },
        { path: './fonts/UTMAvoBold.ttf', weight: '700', style: 'normal' },
        { path: './fonts/UTMAvoItalic.ttf', weight: '400', style: 'italic' },
        { path: './fonts/UTMAvoBold_Italic.ttf', weight: '700', style: 'italic' },
    ],
})

export const metadata = {
    title: "Nhà đẹp Quảng Nam",
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế"
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${utmAvo.className} antialiased`}>
        <body suppressHydrationWarning>
        {children}
        </body>
        </html>
    );
}