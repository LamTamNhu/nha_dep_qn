import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FloatingButtons from "../components/floatingButtons";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nhà đẹp Quảng Nam",
  description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning
        className={`montserrat.variable} antialiased`}
      >
        <Navbar />
        {children}
        <FloatingButtons/>
        <Footer/>
      </body>
    </html>
  );
}
