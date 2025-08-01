// src/app/layout.js (minimal root)
import "./globals.css";
import {utmAvo} from "@/app/fonts";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";
import DisableVisualEditing from "@/components/DisableVisualEditing";


export const metadata = {
    title: "Nhà đẹp Quảng Nam",
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế"
};

export default async function RootLayout({children}) {
    const { isEnabled } = await draftMode()
    
    return (
        <html lang="en" suppressHydrationWarning className={`${utmAvo.className} antialiased`}>
        <body suppressHydrationWarning>
        {children}
        <DisableVisualEditing />
        {isEnabled && (
          <VisualEditing />
        )}
        </body>
        </html>
    );
}