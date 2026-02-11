// Product Details Page - DreamFurniture
// Server Component that fetches a single product from Supabase by ID

import type { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase/client'
import { Product } from '@/types/product'
import { notFound } from 'next/navigation'
import Image from 'next/image'

// TypeScript interface for page props (Next.js App Router convention)
interface ProductPageProps {
    params: Promise<{ id: string }>
}

// ----- DYNAMIC METADATA -----
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
    const { id } = await params

    const { data: product } = await supabase
        .from('products')
        .select('name, description, image_url, price')
        .eq('id', id)
        .single()

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
    const { id } = await params

    const { data: product, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

    if (error || !product) {
        notFound()
    }

    const productData = product as Product
    const imageUrl = productData.image_url || '/placeholder-product.png'

    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

                    {/* Product Image */}
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <Image
                            src={imageUrl}
                            alt={productData.name}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        {/* Category Badge */}
                        {productData.category && (
                            <span className="mb-4 inline-block w-fit rounded-lg bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                                {productData.category}
                            </span>
                        )}

                        {/* Product Name */}
                        <h1 className="text-4xl font-bold text-gray-900">
                            {productData.name}
                        </h1>

                        {/* Price */}
                        {productData.price !== null && (
                            <p className="mt-4 text-3xl font-bold text-orange-600">
                                ${productData.price.toLocaleString()}
                            </p>
                        )}

                        {/* Description */}
                        {productData.description && (
                            <p className="mt-6 text-lg leading-relaxed text-gray-600">
                                {productData.description}
                            </p>
                        )}

                        {/* Get Quote Button */}
                        <div className="mt-8">
                            <Link
                                href="/contact"
                                className="inline-block rounded-lg bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
                            >
                                Get Quote
                            </Link>
                        </div>

                        {/* Back to Products */}
                        <div className="mt-6">
                            <Link
                                href="/products"
                                className="text-gray-500 hover:text-gray-700 transition-colors"
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
