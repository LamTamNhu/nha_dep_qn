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

export default function RootLayout({children}) {
    return (
        <html lang="en" suppressHydrationWarning className={`${utmAvo.className} antialiased`}>
        <body suppressHydrationWarning>
        {children}
        <DisableVisualEditing />
        {draftMode().isEnabled && (
          <VisualEditing />
        )}
        </body>
        </html>
    );
}