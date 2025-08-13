// src/app/(site)/layout.js
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import {client} from "@/sanity/lib/client";
import {footerQuery} from "@/sanity/lib/queries";
import { projectId, dataset } from "@/sanity/env";

export default async function SiteLayout({children}) {
    const footerData = projectId && dataset ? await client.fetch(footerQuery) : null;
    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons/>
            <Footer data={footerData}/>
        </>
    );
}