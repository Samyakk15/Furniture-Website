// GallerySkeleton Component - DreamFurniture
// Skeleton placeholder that mimics gallery card layout during loading

export function GallerySkeleton() {
    return (
        <div className="overflow-hidden rounded-xl bg-zinc-100">
            {/* Image skeleton */}
            <div className="aspect-[4/3] animate-pulse bg-zinc-200" />

            {/* Title skeleton */}
            <div className="p-4 space-y-2">
                <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-200" />
            </div>
        </div>
    )
}

// GalleryGridSkeleton - Shows multiple skeleton cards
export function GalleryGridSkeleton() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Render 6 skeleton cards */}
            {Array.from({ length: 6 }).map((_, i) => (
                <GallerySkeleton key={i} />
            ))}
        </div>
    )
}
