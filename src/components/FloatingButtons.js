"use client";
import React, {useEffect, useState} from "react";
import * as lucide from "lucide-react";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import ContactPopover from "@/components/ContactPopover";
import Link from "next/link";

function FloatingButtons({settings}) {
    const [collapsed, setCollapsed] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const listRef = React.useRef(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            const mobile = window.innerWidth < 640;
            setIsMobile(mobile);

            if (mobile) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
            if (listRef.current) {
                const rect = listRef.current.getBoundingClientRect();
                setIsOverflow(rect.height > window.innerHeight - 32);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (!collapsed && listRef.current) {
            const rect = listRef.current.getBoundingClientRect();
            setIsOverflow(rect.height > window.innerHeight - 32);
        }
    }, [collapsed]);

    const socialLinks = [
        ...(settings?.facebook ? [{
            id: "messenger",
            href: settings.facebook,
            img: <Image src="/images/Messenger_Icon_Primary_Blue.png" alt="Messenger" width={24} height={24}/>,
            alt: "Nhắn tin với chúng tôi qua Messenger",
            external: true,
        }] : []),
        ...(settings?.zalo ? [{
            id: "zalo",
            href: settings.zalo,
            img: <Image src="/images/Icon_of_Zalo.svg" alt="Zalo" width={24} height={24}/>,
            alt: "Liên hệ với chúng tôi qua Zalo",
            external: true,
        }] : []),
        ...(settings?.phoneNumber ? [{
            id: "phone",
            href: `tel:${settings.phoneNumber}`,
            img: <lucide.Phone size={24} className="text-white"/>,
            alt: "Liên hệ với chúng tôi qua điện thoại",
            external: false,
        }] : []),
        {
            id: "contact",
            href: "/contact",
            img: <lucide.Send size={24} className="text-white"/>,
            alt: "Xin quý khách để lại thông tin, chúng tôi sẽ liên hệ lại",
            external: false,
        }
    ];

    return (
        <TooltipProvider delayDuration={0}>
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:gap-3">
                {/* Social/contact buttons */}
                {!collapsed && (
                    <div
                        ref={listRef}
                        className={`flex flex-col items-end gap-2 sm:gap-3 animate-fade-in max-h-screen overflow-visible ${isOverflow ? 'max-height: 100vh' : ''}`}
                    >
                        {socialLinks.map((item) =>
                            item.id === 'contact' && !isMobile ? (
                                <Tooltip.Root key={item.id}>
                                    <Tooltip.Trigger asChild>
                                        <ContactPopover
                                            trigger={
                                                <button
                                                    className={`rounded-full bg-orange-400 shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${
                                                        isOverflow ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
                                                    }`}
                                                >
                                                    {item.img}
                                                </button>
                                            }
                                        />
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            side="left"
                                            sideOffset={8}
                                            className="bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-md animate-fade-in z-50"
                                        >
                                            {item.alt}
                                            <Tooltip.Arrow className="fill-gray-800"/>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            ) : (
                                <Tooltip.Root key={item.id}>
                                    <Tooltip.Trigger asChild>
                                        <Link
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                            className={`rounded-full bg-orange-400 shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${
                                                isOverflow ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
                                            }`}
                                        >
                                            {item.img}
                                        </Link>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            side="left"
                                            sideOffset={8}
                                            className="bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-md animate-fade-in z-50"
                                        >
                                            {item.alt}
                                            <Tooltip.Arrow className="fill-gray-800"/>
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                            )
                        )}
                    </div>
                )}
                {/* Collapse/Expand Button */}
                <button
                    aria-label={collapsed ? "Mở liên hệ" : "Thu gọn liên hệ"}
                    onClick={() => setCollapsed((c) => !c)}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-300 shadow-lg flex items-center justify-center mb-2 hover:bg-orange-400 transition-colors"
                    style={{transition: "transform 0.2s"}}
                >
                    {collapsed ? <lucide.ChevronUp size={20} className="sm:size-6" color="#fff"/> :
                        <lucide.ChevronDown size={20} className="sm:size-6" color="#fff"/>}
                </button>
            </div>
        </TooltipProvider>
    );
}

export default FloatingButtons;