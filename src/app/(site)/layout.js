// src/app/(site)/layout.js
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import {client} from "@/sanity/lib/client";
import {footerQuery} from "@/sanity/lib/queries";

export default async function SiteLayout({children}) {
    const footerData = await client.fetch(footerQuery);
    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons/>
            <Footer data={footerData}/>
        </>
    );
}