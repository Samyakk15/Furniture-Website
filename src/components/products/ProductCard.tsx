'use client'

import { Product } from '@/types/product'

interface ProductCardProps {
    product: Product
}

export function ProductCard({ product }: ProductCardProps) {
    // Fallback image for products without images
    const imageUrl = product.image_url || '/placeholder-product.png'

    return (
        <div className="group overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
            {/* Product Image */}
            <div className="aspect-square overflow-hidden bg-zinc-100">
                <img
                    src={imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    onError={(e) => {
                        // Handle broken images
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-product.png'
                    }}
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-zinc-900 line-clamp-1">
                    {product.name}
                </h3>

                {/* Price */}
                {product.price !== null && (
                    <p className="mt-1 text-xl font-bold text-amber-600">
                        ${product.price.toLocaleString()}
                    </p>
                )}

                {/* Description */}
                {product.description && (
                    <p className="mt-2 text-sm text-zinc-600 line-clamp-2">
                        {product.description}
                    </p>
                )}
            </div>
        </div>
    )
}
