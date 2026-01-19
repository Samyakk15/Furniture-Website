import Link from "next/link";

/**
 * Footer component - Static footer for the global layout
 * Contains brand info, navigation links, and copyright
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
                        >
                            DreamFurniture
                        </Link>
                        <p className="mt-4 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
                            Transform your living space with our curated collection of premium furniture.
                            Quality craftsmanship meets modern design.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/products"
                                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Contact
                        </h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                                    support@dreamfurniture.com
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright Bar */}
                <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
                    <p className="text-center text-sm text-neutral-500 dark:text-neutral-400">
                        © {currentYear} DreamFurniture. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
