import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="border-2 border-gray-900 px-2 py-1 text-xl font-bold text-gray-900 tracking-tighter">
                                DF
                            </span>
                            <span className="text-lg font-bold text-gray-900">DreamFurniture</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
                            Crafting premium furniture for modern homes since 2021.
                            Quality, comfort, and style in every piece.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Quick Links</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link href="/" className="text-sm hover:text-orange-600 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-sm hover:text-orange-600 transition-colors">About Us</Link>
                            </li>
                            <li>
                                <Link href="/products" className="text-sm hover:text-orange-600 transition-colors">Collection</Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="text-sm hover:text-orange-600 transition-colors">Gallery</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm hover:text-orange-600 transition-colors">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Contact Us</h3>
                        <div className="mt-4 space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">
                                    6/16, Sarvashree Nagar,<br />
                                    Narsala, Dighori,<br />
                                    Nagpur, Maharashtra – 440034
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">+91 98765 43210</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">info@dreammodularfurnitures.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; 2026 Dream Modular & Furnitures | Established 2021
                    </p>
                </div>
            </div>
        </footer>
    )
}
