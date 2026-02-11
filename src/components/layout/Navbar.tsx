'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    // Handle scroll effect for sticky navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false)
    }, [pathname])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Products', href: '/products' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' },
    ]

    const isActive = (path: string) => pathname === path

    return (
        <nav
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled
                ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
                : 'bg-white py-5'
                }`}
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900 border-2 border-gray-900 px-2 py-1 tracking-tighter">
                            DF
                        </span>
                        <span className="hidden text-xl font-bold tracking-tight text-gray-900 sm:block">
                            DreamFurniture
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-orange-600 ${isActive(link.href)
                                    ? 'text-orange-600'
                                    : 'text-gray-600'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden items-center gap-4 md:flex">
                        <a
                            href="tel:+919876543210"
                            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+91 98765 43210</span>
                        </a>
                        <Link
                            href="/contact"
                            className="rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 md:hidden hover:bg-gray-50"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full border-b border-gray-100 bg-white shadow-sm md:hidden">
                    <div className="flex flex-col p-4 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`block rounded-lg px-4 py-3 text-base font-medium ${isActive(link.href)
                                    ? 'bg-orange-50 text-orange-700'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4 mt-2 border-t border-gray-100">
                            <Link
                                href="/contact"
                                className="block w-full rounded-lg bg-orange-600 px-4 py-3 text-center font-semibold text-white hover:bg-orange-700"
                            >
                                Get Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
