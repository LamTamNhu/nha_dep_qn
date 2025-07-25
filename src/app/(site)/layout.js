// src/app/(site)/layout.js
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";

export default function SiteLayout({children}) {
    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons/>
            <Footer/>
        </>
    );
}