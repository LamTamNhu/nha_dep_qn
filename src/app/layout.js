import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nhà đẹp Quảng Nam",
  description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
