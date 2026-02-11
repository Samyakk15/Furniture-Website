import Link from 'next/link'
import Image from 'next/image'

export function HeroSection() {
    return (
        <section className="relative py-16">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1920"
                    alt="Modern living room with elegant furniture"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover"
                />
                {/* Soft overlay — keeps text readable without hiding the image */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        Furniture That Feels Like Home
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-white/90">
                        Handcrafted pieces designed for comfort, built to last. Transform your
                        living space with our curated collection of premium furniture.
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                        <Link
                            href="/products"
                            className="rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-700"
                        >
                            Shop Collection
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
