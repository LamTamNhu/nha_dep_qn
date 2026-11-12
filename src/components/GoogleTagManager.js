import Script from "next/script";

/**
 * Chèn Google Tag Manager theo mã container khách hàng nhập trong
 * Sanity Studio (/admin → Site Settings → Mã Google Tag Manager).
 * Không nhập mã thì không render gì cả.
 */
export default function GoogleTagManager({gtmId}) {
    const id = typeof gtmId === "string" ? gtmId.trim() : "";

    if (!id) return null;

    return (
        <>
            <Script id="gtm-base" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${id}');
                `}
            </Script>
            <noscript>
                <iframe
                    src={`https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(id)}`}
                    height="0"
                    width="0"
                    style={{display: "none", visibility: "hidden"}}
                    title="Google Tag Manager"
                />
            </noscript>
        </>
    );
}
