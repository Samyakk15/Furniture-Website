'use client'

import { Product } from '@/types/product'
import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    // Fallback image for products without images
    const imageUrl = product.image_url || '/images/placeholder.jpg'

    return (
        <Link href={`/products/${product.id}`} className="group block h-full">
            <div className="relative h-full overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-gray-900/5 transition hover:shadow-md">
                {/* Product Image */}
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                    <Image
                        src={imageUrl}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Category Badge */}
                    {product.category && (
                        <div className="absolute top-3 left-3 rounded-lg bg-white/90 px-3 py-1 text-xs font-medium text-gray-900 shadow-sm backdrop-blur-sm z-10">
                            {product.category}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 line-clamp-1 group-hover:text-orange-600 transition-colors">
                                {product.name}
                            </h3>
                            {product.description && (
                                <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                                    {product.description}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                        {product.price !== null ? (
                            <p className="text-xl font-bold text-orange-600">
                                ₹ {product.price.toLocaleString('en-IN')}
                            </p>
                        ) : (
                            <span className="text-sm font-medium text-gray-500">Price on request</span>
                        )}
                        <span className="text-sm font-medium text-orange-600 opacity-0 transition-opacity group-hover:opacity-100">
                            View Details →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
