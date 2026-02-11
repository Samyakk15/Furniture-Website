import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

                    {/* Brand Info */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <span className="border-2 border-gray-900 px-2 py-1 text-xl font-bold text-gray-900 tracking-tighter">
                                DF
                            </span>
                            <span className="text-lg font-bold text-gray-900">DreamFurniture</span>
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Crafting premium furniture for modern homes since 2010.
                            Quality, comfort, and style in every piece.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-orange-600 transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </a>
                        </div>
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
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">123 Furniture Lane, Design District, NY 10001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">(555) 123-4567</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-orange-600 shrink-0" />
                                <span className="text-sm">hello@dreamfurniture.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Newsletter</h3>
                        <p className="mt-4 text-sm text-gray-500">
                            Subscribe to get special offers, free giveaways, and design tips.
                        </p>
                        <form className="mt-4 sm:flex sm:max-w-md">
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                type="email"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                required
                                className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-lg bg-orange-600 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                                >
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} DreamFurniture. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
