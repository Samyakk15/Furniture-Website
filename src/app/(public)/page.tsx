// Home Page - DreamFurniture
// Contains: Hero, Trust Indicators, Featured Products, Testimonials, CTA

import { HeroSection } from '@/components/home/HeroSection'
import { TrustSection } from '@/components/home/TrustSection'
import { Testimonials } from '@/components/home/Testimonials'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* High-Impact Hero */}
      <HeroSection />

      {/* Trust & Features */}
      <TrustSection />

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Featured Collections</h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Explore our most popular pieces, curated for modern living spaces.
            </p>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Static Featured Product Cards */}
            {[
              { name: 'Modern Sofa', price: '₹ 1,20,000', category: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800' },
              { name: 'Oak Dining Table', price: '₹ 75,000', category: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800' },
              { name: 'King Bed Frame', price: '₹ 1,25,000', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800' },
              { name: 'Accent Chair', price: '₹ 45,000', category: 'Living Room', image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=800' },
            ].map((product) => (
              <div key={product.name} className="group relative overflow-hidden rounded-lg bg-white shadow-sm transition hover:shadow-md">
                <div className="relative aspect-square w-full overflow-hidden bg-gray-100 lg:aspect-none lg:h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4 flex justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">
                      <Link href="/products">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-block rounded-lg border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition"
            >
              View Full Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <Testimonials />

      {/* Final CTA — Light & Warm */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Ready to transform your home?
          </h2>
          <p className="text-gray-600 mb-6">
            Book a free design consultation today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
