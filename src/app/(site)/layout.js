// src/app/(site)/layout.js
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import {client} from "@/sanity/lib/client";
import {footerQuery} from "@/sanity/lib/queries";
import ContactForm from "@/components/ContactForm";

export default async function SiteLayout({children}) {
    const footerData = await client.fetch(footerQuery);
    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons/>
            <div className="py-30">
                <ContactForm/>
            </div>
            <div className="mt-30">
                <Footer data={footerData}/>
            </div>
        </>
    );
}