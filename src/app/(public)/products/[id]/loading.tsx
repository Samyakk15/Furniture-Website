// Product Details Loading State - DreamFurniture
// Route-level loading.tsx for dynamic [id] route

export default function ProductDetailLoading() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-6xl">
                {/* Two-column layout skeleton */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Image skeleton */}
                    <div className="aspect-square animate-pulse rounded-xl bg-zinc-200" />

                    {/* Details skeleton */}
                    <div className="flex flex-col justify-center space-y-4">
                        {/* Category badge */}
                        <div className="h-6 w-24 animate-pulse rounded-full bg-zinc-200" />
                        {/* Title */}
                        <div className="h-10 w-3/4 animate-pulse rounded bg-zinc-200" />
                        {/* Price */}
                        <div className="h-8 w-1/3 animate-pulse rounded bg-zinc-200" />
                        {/* Description */}
                        <div className="space-y-2 pt-4">
                            <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
                            <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
                            <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200" />
                        </div>
                        {/* Button */}
                        <div className="h-14 w-40 animate-pulse rounded-lg bg-zinc-200" />
                    </div>
                </div>
            </div>
        </div>
    )
}
