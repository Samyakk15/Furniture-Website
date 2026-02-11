export function GallerySkeleton() {
    return (
        <div className="overflow-hidden rounded-lg bg-gray-100">
            {/* Image skeleton */}
            <div className="aspect-[4/3] w-full animate-pulse bg-gray-200" />

            {/* Title skeleton */}
            <div className="p-4">
                <div className="h-5 w-1/2 animate-pulse rounded bg-gray-200" />
            </div>
        </div>
    )
}

export function GalleryGridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
                <GallerySkeleton key={i} />
            ))}
        </div>
    )
}
