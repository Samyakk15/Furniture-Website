import { Product } from '@/types/product'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
    products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
    // Handle empty state
    if (!products || products.length === 0) {
        return (
            <div className="py-12 text-center">
                <p className="text-lg text-zinc-500">No products found.</p>
                <p className="mt-2 text-sm text-zinc-400">
                    Check back later for new arrivals.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}
