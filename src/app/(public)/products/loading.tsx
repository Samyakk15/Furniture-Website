// Products Page Loading State - DreamFurniture
// Route-level loading.tsx - shown automatically by Next.js while page loads

import { ProductGridSkeleton } from '@/components/products/ProductSkeleton'

export default function ProductsLoading() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Page Header Skeleton */}
                <div className="mb-12 text-center">
                    <div className="mx-auto h-10 w-64 animate-pulse rounded bg-zinc-200" />
                    <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded bg-zinc-200" />
                </div>

                {/* Products Grid Skeleton */}
                <ProductGridSkeleton />
            </div>
        </div>
    )
}
