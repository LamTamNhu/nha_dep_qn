import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FloatingButtons from "../../components/FloatingButtons";
import {client} from "@/sanity/lib/client";
import {footerQuery, siteSettingsQuery} from "@/sanity/lib/queries";
import ContactForm from "@/components/ContactForm";

export default async function SiteLayout({children}) {
    const [footerData, siteSettings] = await Promise.all([
        client.fetch(footerQuery),
        client.fetch(siteSettingsQuery),
    ]);

    return (
        <>
            <Navbar/>
            {children}
            <FloatingButtons settings={siteSettings}/>
            <div className="py-30">
                <ContactForm/>
            </div>
            <div>
                <Footer data={footerData}/>
            </div>
        </>
    );
}
