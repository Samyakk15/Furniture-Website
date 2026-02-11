// Routes Loading State - Gallery
// Uses the refined GalleryGridSkeleton for a polished loading experience

import { GalleryGridSkeleton } from '@/components/gallery/GallerySkeleton'

export default function GalleryLoading() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="container-custom">
                {/* Page Header Skeleton */}
                <div className="mb-12 text-center">
                    <div className="mx-auto h-10 w-48 animate-pulse rounded-lg bg-zinc-200" />
                    <div className="mx-auto mt-4 h-6 w-80 animate-pulse rounded-lg bg-zinc-100" />
                </div>

                {/* Filter Buttons Skeleton */}
                <div className="mb-12 flex flex-wrap justify-center gap-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <div
                            key={i}
                            className="h-10 w-24 animate-pulse rounded-full bg-zinc-200"
                        />
                    ))}
                </div>

                <GalleryGridSkeleton />
            </div>
        </div>
    )
}
