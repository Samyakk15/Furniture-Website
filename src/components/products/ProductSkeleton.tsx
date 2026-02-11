export function ProductSkeleton() {
    return (
        <div className="overflow-hidden rounded-lg border border-gray-100 bg-white">
            {/* Image skeleton */}
            <div className="aspect-square w-full animate-pulse bg-gray-200" />

            {/* Content skeleton */}
            <div className="p-5 space-y-4">
                {/* Title & Description */}
                <div className="space-y-2">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-full animate-pulse rounded bg-gray-100" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-gray-100" />
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <div className="h-6 w-1/3 animate-pulse rounded bg-gray-200" />
                    <div className="h-4 w-1/4 animate-pulse rounded bg-gray-100" />
                </div>
            </div>
        </div>
    )
}

export function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
        </div>
    )
}
