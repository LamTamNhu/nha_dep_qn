import * as React from "react";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div className="min-h-screen relative py-20 bg-[#272727]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.066879055964!2d108.46746617655826!3d15.588075213549368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3169dd01ab243f49%3A0x4d0f0412ed7b3e37!2zMTc0IE5ndXnhu4VuIFbEg24gVHLhu5dpLCBQaMaw4budbmcgVMOibiBUaOG6oW5oLCBUYW0gS-G7sywgUXXhuqNuZyBOYW0sIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1752638036873!5m2!1sen!2s"
        width="100%"
        height="700px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="py-20 border-0"
      />
      <ContactForm />
    </div>
  );
}
