"use client"

import { Facebook, Menu, Search, Youtube } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image";
import * as Popover from "@radix-ui/react-popover";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false)

    // Main Nav Items
    const navigationItems = [
        { name: "GIỚI THIỆU", href: "/about" },
        { name: "DỊCH VỤ", href: "/services" },
        { name: "DỰ ÁN", href: "/projects", dropdown: true },
        { name: "THI CÔNG THỰC TẾ", href: "/completed-projects", dropdown: true },
        { name: "LIÊN HỆ", href: "/contact" },
    ]

    // Dropdown placeholder data
    const projectDropdown = [
        { name: "Biệt thự"},
        { name: "Nhà phố"},
        { name: "Nhà vườn"},
        { name: "Nhà tân cổ điển"},
        { name: "Công trình dịch vụ" },
    ]
    const realConstructionDropdown = [
        { name: "Biệt thự"},
        { name: "Nhà phố"},
        { name: "Nhà vườn"},
        { name: "Nhà tân cổ điển"},
        { name: "Công trình dịch vụ"},
    ]

    let animationTriggered = false;
    let navbarBgHidden = true;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY < 100 && !navbarBgHidden) {
                const navbar = document.getElementById("navbar")
                navbar.classList.remove("bg-black/60", "backdrop-blur-xs")
                navbar.classList.add("bg-transparent")
                navbarBgHidden = true
            }

            if (scrollY >= 100 && navbarBgHidden) {
                const navbar = document.getElementById("navbar")
                navbar.classList.add("bg-black/40", "backdrop-blur-xs")
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
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav id="navbar" className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xs pr-40">
            <div className="grid grid-cols-2 justify-items-center items-center justify-center h-20">
                {/* Logo */}
                <Link href="/" className="border-draw p-3">
                    <Image src="/images/logo_invert_crop.png" alt="logo" width={100} height={100}
                           style={{ width: '100px', height: 'auto' }} priority={true} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8 pr-8 h-full">
                    {navigationItems.map((item) => (
                        <div key={item.name} className="relative group h-full flex items-center">
                            <Link
                                href={item.href}
                                className={`flex items-center h-full whitespace-nowrap text-white text-md font-medium tracking-wide px-3 after-effect ${
                                    pathname.startsWith(item.href) ? 'active-link' : ''}`}>
                                {item.name}
                            </Link>

                            {/* Dropdown */}
                            {item.dropdown && (
                                <div
                                    className="
                        absolute left-0 top-full
                        opacity-0 group-hover:opacity-100
                        pointer-events-none group-hover:pointer-events-auto
                        transition duration-200
                        bg-black/60 text-white rounded-md shadow-lg w-56
                        backdrop-blur-xs
                    "
                                >
                                    <ul className="py-2">
                                        {(item.name === "DỰ ÁN" ? projectDropdown : realConstructionDropdown).map((subItem) => (
                                            <li key={subItem.name}>
                                                <Link
                                                    href={`/${item.name === "DỰ ÁN" ?"projects":"completed-projects"}?category=${encodeURIComponent(subItem.name)}#projects-section`}
                                                    className="block px-4 py-2 hover:bg-gray-100"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Icons */}
                    <Link key="youtube" href="https://www.youtube.com" target="_blank" className="flex items-center h-full">
                        <Youtube size={22} className="text-white" />
                    </Link>
                    <Link key="facebook" href="https://www.facebook.com" target="_blank" className="flex items-center h-full">
                        <Facebook size={22} className="text-white" />
                    </Link>

                    {/* Search Popover */}
                    <Popover.Root>
                        <Popover.Trigger asChild>
                            <button className="text-white focus:outline-none flex items-center h-full">
                                <Search size={22} />
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
                                    <Search size={16} />
                                </button>
                            </Popover.Content>
                        </Popover.Portal>
                    </Popover.Root>
                </div>


                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                            <Menu className="h-6 w-6" />
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
