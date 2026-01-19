// Home Page - DreamFurniture
// Contains: Hero, Services, Why Choose Us, Featured Products, Testimonials, CTA

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="bg-zinc-900 py-24 px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Transform Your Living Space
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            Discover premium furniture crafted for comfort and style.
            Elevate every room with timeless designs.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-zinc-900 hover:bg-amber-400"
            >
              Shop Now
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg border border-zinc-600 px-6 py-3 font-semibold text-white hover:border-zinc-400"
            >
              View Collections
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
          SERVICES SECTION
          ============================================ */}
      <section className="bg-zinc-100 py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Our Services</h2>
          <p className="mt-2 text-zinc-600">
            Everything you need to furnish your dream home
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mx-auto">
                <span className="text-xl">🛋️</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Custom Furniture</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Bespoke pieces tailored to your exact specifications and style preferences.
              </p>
            </div>
            {/* Service Card 2 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mx-auto">
                <span className="text-xl">🚚</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Free Delivery</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Complimentary white-glove delivery and installation on all orders.
              </p>
            </div>
            {/* Service Card 3 */}
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 mx-auto">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900">Interior Design</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Expert consultation to help you create cohesive, stunning spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHY CHOOSE US SECTION
          ============================================ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-zinc-900">Why Choose Us</h2>
            <p className="mt-2 text-zinc-600">
              Quality and trust that speaks for itself
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Reason 1 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500">15+</div>
              <p className="mt-2 font-medium text-zinc-900">Years Experience</p>
              <p className="text-sm text-zinc-500">Trusted by thousands</p>
            </div>
            {/* Reason 2 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500">500+</div>
              <p className="mt-2 font-medium text-zinc-900">Products</p>
              <p className="text-sm text-zinc-500">Curated collection</p>
            </div>
            {/* Reason 3 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500">98%</div>
              <p className="mt-2 font-medium text-zinc-900">Satisfaction</p>
              <p className="text-sm text-zinc-500">Happy customers</p>
            </div>
            {/* Reason 4 */}
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500">24/7</div>
              <p className="mt-2 font-medium text-zinc-900">Support</p>
              <p className="text-sm text-zinc-500">Always here to help</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          FEATURED PRODUCTS SECTION
          ============================================ */}
      <section className="bg-zinc-50 py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Featured Products</h2>
          <p className="mt-2 text-zinc-600">
            Handpicked selections from our latest collection
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Product Card 1 */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="h-48 rounded-md bg-zinc-200"></div>
              <h3 className="mt-4 font-semibold text-zinc-900">Modern Sofa</h3>
              <p className="text-sm text-zinc-500">Living Room</p>
              <p className="mt-2 font-bold text-amber-600">$1,299</p>
            </div>
            {/* Product Card 2 */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="h-48 rounded-md bg-zinc-200"></div>
              <h3 className="mt-4 font-semibold text-zinc-900">Oak Dining Table</h3>
              <p className="text-sm text-zinc-500">Dining Room</p>
              <p className="mt-2 font-bold text-amber-600">$899</p>
            </div>
            {/* Product Card 3 */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="h-48 rounded-md bg-zinc-200"></div>
              <h3 className="mt-4 font-semibold text-zinc-900">King Bed Frame</h3>
              <p className="text-sm text-zinc-500">Bedroom</p>
              <p className="mt-2 font-bold text-amber-600">$1,499</p>
            </div>
            {/* Product Card 4 */}
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="h-48 rounded-md bg-zinc-200"></div>
              <h3 className="mt-4 font-semibold text-zinc-900">Accent Chair</h3>
              <p className="text-sm text-zinc-500">Living Room</p>
              <p className="mt-2 font-bold text-amber-600">$549</p>
            </div>
          </div>
          <Link
            href="/products"
            className="mt-8 inline-block rounded-lg border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 hover:bg-zinc-100"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ============================================
          TESTIMONIALS SECTION
          ============================================ */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-zinc-900">What Our Customers Say</h2>
          <p className="mt-2 text-zinc-600">
            Real reviews from satisfied homeowners
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-zinc-50 p-6 text-left">
              <p className="text-zinc-700">
                &ldquo;Absolutely love my new living room set! The quality exceeded my
                expectations and the delivery was seamless.&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-zinc-900">Sarah Johnson</p>
                <p className="text-sm text-zinc-500">Verified Buyer</p>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-lg bg-zinc-50 p-6 text-left">
              <p className="text-zinc-700">
                &ldquo;The custom dining table is a masterpiece. DreamFurniture truly
                understands craftsmanship.&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-zinc-900">Michael Chen</p>
                <p className="text-sm text-zinc-500">Verified Buyer</p>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="rounded-lg bg-zinc-50 p-6 text-left">
              <p className="text-zinc-700">
                &ldquo;Outstanding customer service and beautiful furniture. Highly
                recommend for anyone furnishing their home.&rdquo;
              </p>
              <div className="mt-4">
                <p className="font-semibold text-zinc-900">Emily Rodriguez</p>
                <p className="text-sm text-zinc-500">Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          CALL-TO-ACTION (CTA) SECTION
          ============================================ */}
      <section className="bg-amber-500 py-16 px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-zinc-900">
            Ready to Transform Your Home?
          </h2>
          <p className="mt-4 text-lg text-zinc-800">
            Browse our collection today and find the perfect pieces for your space.
            Free consultation available.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/products"
              className="rounded-lg bg-zinc-900 px-6 py-3 font-semibold text-white hover:bg-zinc-800"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-zinc-900 px-6 py-3 font-semibold text-zinc-900 hover:bg-amber-400"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
