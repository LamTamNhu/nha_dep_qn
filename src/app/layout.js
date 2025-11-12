// src/app/layout.js (minimal root)
import "./globals.css";
import {mulish} from "@/app/fonts";
import {Toaster} from "react-hot-toast";
import Script from "next/script";
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity'
import {SanityLive} from '@/sanity/lib/live'


export const metadata = {
    title: { default: "Nhà đẹp Quảng Nam", template: "%s | Nhà đẹp Quảng Nam" },
    description: "Nhà đẹp Quảng Nam - Kiến tạo không gian sống hiện đại với phong cách tối giản và tinh tế",
    openGraph: { siteName: "Nhà đẹp Quảng Nam" },
    twitter: { card: "summary_large_image" },
    verification: {
        other: {
            'facebook-domain-verification': 'uqityjta44rdgmri0qdhiqjokoj1ij'
        }
    }
};

export default async function RootLayout({children}) {
    const {isEnabled} = await draftMode()
    return (
        <html lang="en" suppressHydrationWarning className={`${mulish.className} antialiased`}>
            <body suppressHydrationWarning>
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '1311803840464047');
                        fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{display: "none"}}
                        src="https://www.facebook.com/tr?id=1311803840464047&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {children}
                <Toaster/>
                <SanityLive/>
                {isEnabled && <VisualEditing/>}
            </body>
        </html>
    );
}
