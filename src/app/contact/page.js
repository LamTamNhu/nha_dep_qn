import * as React from "react";
import Navbar from "@/app/components/navbar";
import ContactForm from "@/app/components/contactForm";
import Footer from "@/app/components/footer";

export default function Contact() {
    return (
        <div className="min-h-screen relative bg-gray-100">
            <Navbar/>
            <div className="py-10 bg-gray-100"/>
            <ContactForm/>
            <Footer/>
        </div>
    )
}