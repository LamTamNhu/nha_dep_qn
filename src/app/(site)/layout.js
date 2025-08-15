'use client';
import {usePathname} from 'next/navigation';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import {client} from "@/sanity/lib/client";
import {footerQuery} from "@/sanity/lib/queries";
import ContactForm from "@/components/ContactForm";
import {useEffect, useState} from 'react';

export default function SiteLayout({children}) {
    const pathname = usePathname();
    const [footerData, setFooterData] = useState(null);

    useEffect(() => {
        const fetchFooterData = async () => {
            const data = await client.fetch(footerQuery);
            setFooterData(data);
        };
        fetchFooterData();
    }, []);

    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons/>
            <div className="py-30">
                <ContactForm/>
            </div>
            <div>
                <Footer data={footerData}/>
            </div>
        </>
    );
}