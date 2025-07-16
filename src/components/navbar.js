"use client"

import {Facebook, Menu, Search, Youtube} from "lucide-react"
import Link from "next/link"
import {useEffect, useState} from "react"
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";


export default function Navbar() {
    const pathname = usePathname();
    console.log("Current path:", pathname);
    const [isOpen, setIsOpen] = useState(false)
    const navigationItems = [
        {name: "GIỚI THIỆU", href: "/about"},
        {name: "DỊCH VỤ", href: "/services"},
        {name: "DỰ ÁN", href: "/projects"},
        {name: "THỰC TẾ THI CÔNG", href: "/completed-projects"},
        {name: "TIN TỨC", href: "/news"},
        {name: "LIÊN HỆ", href: "/contact"},
    ]
    let animationTriggered = false;
    let navbarBgHidden = true;
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;

            if (scrollY < 100 && !navbarBgHidden) {
                const navbar = document.getElementById("navbar")
                navbar.classList.remove("bg-black/60")
                navbar.classList.remove("backdrop-blur-xs")
                navbar.classList.add("bg-transparent")
                navbarBgHidden = true
            }

            if (scrollY >= 100 && navbarBgHidden) {
                const navbar = document.getElementById("navbar")
                navbar.classList.add("bg-black/40")
                navbar.classList.add("backdrop-blur-xs")
                navbar.classList.remove("bg-transparent")
                navbarBgHidden = false

                if (!animationTriggered) {
                    const borderDrawElements = document.querySelectorAll('.border-draw');
                    borderDrawElements.forEach(el => {
                        el.classList.add('animate');
                    });
                    animationTriggered = true;
                }
            }
        });
    })

    return (
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-xs pr-40">
            <div className="grid grid-cols-2 justify-items-center items-center justify-center h-20">
                {/* Logo */}
                <Link href="/" className="border-draw p-3">
                    <Image src="/images/logo_invert_crop.png" alt="logo" width={100} height={30} priority={true}/>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8 pr-8">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`whitespace-nowrap group relative text-white text-md font-medium tracking-wide after-effect ${
                                pathname.startsWith(item.href) ? 'active-link' : ''}`}>
                            {item.name}
                        </Link>
                    ))}
                    <Youtube size={22} className="text-white"/>
                    <Facebook size={22} className="text-white"/>
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="text-white focus:outline-none">
                                <Search size={22}/>
                            </button>
                        </Popover.Trigger>
                        <Popover.Portal>
                            <Popover.Content
                                sideOffset={8}
                                className="z-50 rounded-md border border-white/20 bg-white text-black shadow-lg p-2 w-64 flex items-center space-x-2"
                            >
                                <input
                                    type="text"
                                    placeholder="Nhập từ khóa cần tìm ..."
                                    className="flex-grow text-sm bg-transparent focus:outline-none placeholder:text-gray-400"
                                />
                                <button className="text-gray-600 hover:text-black">
                                    <Search size={16}/>
                                </button>
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>

                {/* Mobile menu button */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                            <Menu className="h-6 w-6"/>
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-black/95 border-gray-800">
                        <div className="flex flex-col space-y-6 mt-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`group relative text-white text-lg font-medium tracking-wide after-effect ${
                                        pathname === item.href ? 'active-link' : ''
                                    }`}>
                                    {item.name}
                                </Link>
                            ))}

                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
