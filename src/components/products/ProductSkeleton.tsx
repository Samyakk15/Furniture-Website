// ProductSkeleton Component - DreamFurniture
// Skeleton placeholder that mimics ProductCard layout during loading

export function ProductSkeleton() {
    return (
        <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
            {/* Image skeleton */}
            <div className="aspect-square animate-pulse bg-zinc-200" />

            {/* Content skeleton */}
            <div className="p-4 space-y-3">
                {/* Title skeleton */}
                <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-200" />
                {/* Price skeleton */}
                <div className="h-6 w-1/3 animate-pulse rounded bg-zinc-200" />
                {/* Description skeleton */}
                <div className="space-y-2">
                    <div className="h-3 w-full animate-pulse rounded bg-zinc-200" />
                    <div className="h-3 w-2/3 animate-pulse rounded bg-zinc-200" />
                </div>
            </div>
        </div>
    )
}

// ProductGridSkeleton - Shows multiple skeleton cards
export function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Render 8 skeleton cards */}
            {Array.from({ length: 8 }).map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
        </div>
    )
}
