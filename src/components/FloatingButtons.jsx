"use client";
import React, {useEffect, useState} from "react";
import * as lucide from "lucide-react";
import Image from "next/image";
import * as Tooltip from "@radix-ui/react-tooltip";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import ContactPopover from "@/components/ContactPopover";


const socialLinks = [
    {
        id: "youtube",
        href: "https://www.youtube.com/",
        img: <lucide.Youtube size={24} className="text-red-500"/>,
        alt: "Kênh YouTube",
        external: true,
    },
    {
        id: "messenger",
        href: "https://m.me/",
        img: <Image src="/images/messenger-color-svgrepo-com.svg" alt="Messenger" width={24} height={24}/>,
        alt: "Nhắn tin vơi chúng tôi qua Facebook",
        external: true,
    },
    {
        id: "zalo",
        href: "https://zalo.me/",
        img: <Image src="/images/Icon_of_Zalo.svg" alt="Messenger" width={24} height={24}/>,
        alt: "Liên hệ với chúng tôi qua Zalo",
        external: true,
    },
    {
        id: "phone",
        href: "tel:0123456789",
        img: <lucide.Phone size={24} className="text-orange-400"/>,
        alt: `Liên hệ với chúng tôi qua điện thoại`,
        external: false,
    },
    {
        id: "contact",
        href: "#",
        img: <lucide.Send size={24} className="text-orange-400"/>,
        alt: "Xin quý khách để lại thông tin, chúng tôi sẽ liên hệ lại",
        external: false,
    }
];


function FloatingButtons() {
    const [collapsed, setCollapsed] = useState(false);
    const [isOverflow, setIsOverflow] = useState(false);
    const listRef = React.useRef(null);

    // Collapse by default on small screens
    useEffect(() => {
        if (typeof window === "undefined") return;

        // Set initial state
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCollapsed(true);
            } else {
                setCollapsed(false);
            }
            // Check overflow
            if (listRef.current) {
                const rect = listRef.current.getBoundingClientRect();
                setIsOverflow(rect.height > window.innerHeight - 32); // 32px bottom margin
            }
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Re-check overflow when expanded/collapsed
    useEffect(() => {
        if (!collapsed && listRef.current) {
            const rect = listRef.current.getBoundingClientRect();
            setIsOverflow(rect.height > window.innerHeight - 32);
        }
    }, [collapsed]);

    return (
        <TooltipProvider delayDuration={0}>
            <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6 sm:gap-3">
                {/* Collapse/Expand Button */}
                <button
                    aria-label={collapsed ? "Mở liên hệ" : "Thu gọn liên hệ"}
                    onClick={() => setCollapsed((c) => !c)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-300 shadow-lg flex items-center justify-center mb-2 hover:bg-orange-400 transition-colors`}
                    style={{transition: "transform 0.2s"}}
                >
                    {collapsed ? <lucide.ChevronUp size={20} className="sm:size-6" color="#fff"/> :
                        <lucide.ChevronDown size={20} className="sm:size-6" color="#fff"/>}
                </button>
                {/* Social/contact buttons, hidden if collapsed */}
                {!collapsed && (
                    <div
                        ref={listRef}
                        className="flex flex-col items-end gap-2 sm:gap-3 animate-fade-in max-h-screen overflow-visible"
                        style={isOverflow ? { maxHeight: '100vh' } : undefined}
                    >
                        {socialLinks.map((item) =>
                            item.id === 'contact' ? (
                                <ContactPopover
                                    key={item.id}
                                    trigger={
                                        <button
                                            className={`rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${
                                                isOverflow ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
                                            }`}
                                        >
                                            {item.img}
                                        </button>
                                    }
                                />
                            ) : (
                                <Tooltip.Root key={item.id}>
                                    <Tooltip.Trigger asChild>
                                        <a
                                            href={item.href}
                                            target={item.external ? '_blank' : undefined}
                                            rel={item.external ? 'noopener noreferrer' : undefined}
                                            className={`rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform ${
                                                isOverflow ? 'w-8 h-8 sm:w-10 sm:h-10' : 'w-10 h-10 sm:w-12 sm:h-12'
                                            }`}
                                        >
                                            {item.img}
                                        </a>
                                    </Tooltip.Trigger>
                                    <Tooltip.Portal>
                                        <Tooltip.Content
                                            side="left"
                                            sideOffset={8}
                                            className="bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-md animate-fade-in z-50"
                                        >
                                            {item.alt}
                                            <Tooltip.Arrow className="fill-gray-800" />
                                        </Tooltip.Content>
                                    </Tooltip.Portal>
                                </Tooltip.Root>
                        ))}
                    </div>
                )}
            </div>
        </TooltipProvider>
    );
}

export default FloatingButtons;
