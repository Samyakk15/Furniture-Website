// Product Details Page - DreamFurniture
// Server Component that fetches a single product from Supabase by ID

import type { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { Product } from '@/types/product'
import { notFound } from 'next/navigation'

// TypeScript interface for page props (Next.js App Router convention)
interface ProductPageProps {
    params: Promise<{ id: string }>
}

// ----- DYNAMIC METADATA -----
// Generates page-specific metadata based on product data
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params

    // Fetch product for metadata
    const { data: product } = await supabase
        .from('products')
        .select('name, description, image_url, price')
        .eq('id', id)
        .single()

    // Fallback metadata if product not found
    if (!product) {
        return {
            title: 'Product Not Found',
            description: 'The requested product could not be found.',
        }
    }

    const productData = product as Product

    return {
        title: productData.name,
        description: productData.description || `Shop ${productData.name} at DreamFurniture. Premium quality furniture for your home.`,
        openGraph: {
            title: `${productData.name} | DreamFurniture`,
            description: productData.description || `Shop ${productData.name} at DreamFurniture.`,
            url: `/products/${id}`,
            type: 'website',
            images: productData.image_url ? [{ url: productData.image_url }] : undefined,
        },
    }
}

export default async function ProductPage({ params }: ProductPageProps) {
    // Await the params object (Next.js 15+ requirement)
    const { id } = await params

    // ----- DATA FETCHING -----
    // Fetch single product from Supabase using the dynamic route ID
    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

    // ----- ERROR HANDLING -----
    // If product not found or error occurred, show 404 page
    if (error || !product) {
        notFound()
    }

    // Type assertion for TypeScript
    const productData = product as Product

    // Fallback image for products without images
    const imageUrl = productData.image_url || '/placeholder-product.png'

    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-6xl">
                {/* ----- LAYOUT STRUCTURE ----- */}
                {/* Two-column layout: Image on left, Details on right */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Product Image */}
                    <div className="overflow-hidden rounded-xl bg-zinc-100">
                        <img
                            src={imageUrl}
                            alt={productData.name}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        {/* Category Badge (if available) */}
                        {productData.category && (
                            <span className="mb-4 inline-block w-fit rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800">
                                {productData.category}
                            </span>
                        )}

                        {/* Product Name */}
                        <h1 className="text-4xl font-bold text-zinc-900">
                            {productData.name}
                        </h1>

                        {/* Price */}
                        {productData.price !== null && (
                            <p className="mt-4 text-3xl font-bold text-amber-600">
                                ${productData.price.toLocaleString()}
                            </p>
                        )}

                        {/* Full Description */}
                        {productData.description && (
                            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
                                {productData.description}
                            </p>
                        )}

                        {/* Get Quote Button - Links to Contact Page */}
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-block rounded-lg bg-amber-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-amber-700"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Back to Products Link */}
                        <div className="mt-6">
                            <Link
                                href="/products"
                                className="text-zinc-500 hover:text-zinc-700 transition-colors"
                            >
                                ← Back to Products
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
