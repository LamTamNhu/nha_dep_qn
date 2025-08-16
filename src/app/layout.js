// src/app/layout.js (minimal root)
import "./globals.css";
import {mulish} from "@/app/fonts";
import {DefaultSeo} from "next-seo";
import SEO from "@/seo.config";


export const metadata = {
    title: "Nhà đẹp Quảng Nam",
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế"
};

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${mulish.className} antialiased`}>
        <body suppressHydrationWarning>
        <DefaultSeo {...SEO} />
        {children}
        </body>
        </html>
    );
}