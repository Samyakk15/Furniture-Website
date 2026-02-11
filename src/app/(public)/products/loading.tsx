// Routes Loading State - Products
// Uses the refined ProductGridSkeleton for a polished loading experience

import { ProductGridSkeleton } from '@/components/products/ProductSkeleton'

export default function ProductsLoading() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="container-custom">
                {/* Page Header Skeleton */}
                <div className="mb-12 text-center">
                    <div className="mx-auto h-10 w-64 animate-pulse rounded-lg bg-zinc-200" />
                    <div className="mx-auto mt-4 h-6 w-96 animate-pulse rounded-lg bg-zinc-100" />
                </div>

                <ProductGridSkeleton />
            </div>
        </div>
    )
}
