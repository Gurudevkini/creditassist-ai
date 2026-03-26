"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Code, Handshake, Mail, User, GraduationCap } from "lucide-react"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const navItems = [
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Code },
    { name: "Achievements", href: "#achievements", icon: Handshake },
    { name: "Skills", href: "#skills", icon: GraduationCap },
    { name: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pb-4 bg-background border-b-[1px] border-foreground">
            <nav className="flex items-center gap-2 whitespace-nowrap">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector(item.href)?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                        className={cn(
                            "flex items-center justify-center transition-colors",
                            "px-3 py-3 md:px-2 md:py-2",
                            "text-foreground hover:underline decoration-2 underline-offset-4"
                        )}
                    >
                        <span className="hidden md:block text-xs font-bold uppercase tracking-wide">
                            {item.name}
                        </span>
                        <item.icon className="h-5 w-5 md:hidden" />

                    </Link>
                ))}
                <div className="h-6 w-[1px] bg-foreground/20 mx-2 hidden md:block" />
                <AnimatedThemeToggler className="flex items-center justify-center px-3 py-3 md:px-2 md:py-2 text-foreground hover:underline decoration-2 underline-offset-4" />
            </nav>
        </div >
    )
}
