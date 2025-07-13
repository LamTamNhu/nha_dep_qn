"use client"

import {Facebook, Instagram, Menu} from "lucide-react"
import Link from "next/link"
import {useState} from "react"

import {Button} from "@/components/ui/button"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navigationItems = [
        {name: "TRANG CHỦ", href: "/"},
        {name: "GIỚI THIỆU", href: "/about"},
        {name: "DỊCH VỤ", href: "/"},
        {name: "DỰ ÁN", href: "/"},
        {name: "THỰC TẾ THI CÔNG", href: "/"},
        {name: "TIN TỨC", href: "/"},
        {name: "LIÊN HỆ", href: "/contact"},
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
            <div className="container-fluid mx-auto px-4 sm:px-2 lg:px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0">
                        <Image src="/images/logo_invert.png" alt="logo" width={200} height={150}/>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8 pr-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-white text-xs font-bold tracking-wide hover:text-gray-300 transition-colors duration-200"
                            >
                                {item.name}
                            </Link>
                        ))}
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
                                        className="text-white text-lg font-medium tracking-wide hover:text-gray-300 transition-colors duration-200"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    )
}
