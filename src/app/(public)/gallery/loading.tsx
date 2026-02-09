// Gallery Page Loading State - DreamFurniture
// Route-level loading.tsx - shown automatically by Next.js while page loads

import { GalleryGridSkeleton } from '@/components/gallery/GallerySkeleton'

export default function GalleryLoading() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Page Header Skeleton */}
                <div className="mb-12 text-center">
                    <div className="mx-auto h-10 w-48 animate-pulse rounded bg-zinc-200" />
                    <div className="mx-auto mt-4 h-5 w-80 animate-pulse rounded bg-zinc-200" />
                </div>

                {/* Filter Buttons Skeleton */}
                <div className="mb-8 flex flex-wrap justify-center gap-3">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-10 w-24 animate-pulse rounded-full bg-zinc-200"
                        />
                    ))}
                </div>

                {/* Gallery Grid Skeleton */}
                <GalleryGridSkeleton />
            </div>
        </div>
    )
}
