// src/app/layout.js (minimal root)
import "./globals.css";
import {mulish} from "@/app/fonts";
import {Toaster} from "react-hot-toast";


export const metadata = {
    title: { default: "Nhà đẹp Quảng Nam", template: "%s | Nhà đẹp Quảng Nam" },
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế",
    openGraph: { siteName: "Nhà đẹp Quảng Nam" },
    twitter: { card: "summary_large_image" }
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${mulish.className} antialiased`}>
        <body suppressHydrationWarning>
        {children}
        <Toaster/>
        </body>
        </html>
    );
}
