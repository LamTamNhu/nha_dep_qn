// src/app/layout.js (minimal root)
import "./globals.css";
import {mulish} from "@/app/fonts";
import {Toaster} from "react-hot-toast";
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity'
import {SanityLive} from '@/sanity/lib/live'


export const metadata = {
    title: { default: "Nhà đẹp Quảng Nam", template: "%s | Nhà đẹp Quảng Nam" },
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế",
    openGraph: { siteName: "Nhà đẹp Quảng Nam" },
    twitter: { card: "summary_large_image" },
    verification: {
        other: {
            'facebook-domain-verification': 'uqityjta44rdgmri0qdhiqjokoj1ij'
        }
    }
};

export default async function RootLayout({children}) {
    const {isEnabled} = await draftMode()
    return (
        <html lang="en" suppressHydrationWarning className={`${mulish.className} antialiased`}>
        <body suppressHydrationWarning>
        {children}
        <Toaster/>
        <SanityLive/>
        {isEnabled && <VisualEditing/>}
        </body>
        </html>
    );
}
