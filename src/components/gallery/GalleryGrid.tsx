'use client'

// GalleryGrid Component - DreamFurniture
// Client Component because category filter requires useState for interactivity

import { useState } from 'react'
import { GalleryItem } from '@/types/gallery'

interface GalleryGridProps {
    items: GalleryItem[]
    categories: string[]  // Unique categories extracted from items
}

export function GalleryGrid({ items, categories }: GalleryGridProps) {
    // ----- CLIENT STATE FOR FILTERING -----
    // 'use client' is required because we use useState for category filtering
    const [activeCategory, setActiveCategory] = useState<string>('All')

    // ----- FILTERING LOGIC -----
    // Filter items based on selected category
    const filteredItems = activeCategory === 'All'
        ? items
        : items.filter((item) => item.category === activeCategory)

    // ----- EMPTY STATE -----
    if (!items || items.length === 0) {
        return (
            <div className="py-12 text-center">
                <p className="text-lg text-zinc-500">No gallery images found.</p>
                <p className="mt-2 text-sm text-zinc-400">
                    Check back later for new additions.
                </p>
            </div>
        )
    }

    return (
        <div>
            {/* ----- CATEGORY FILTER BUTTONS ----- */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
                {/* "All" button */}
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${activeCategory === 'All'
                            ? 'bg-amber-600 text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                >
                    All
                </button>

                {/* Category buttons */}
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${activeCategory === category
                                ? 'bg-amber-600 text-white'
                                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* ----- GRID LAYOUT ----- */}
            {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
            {filteredItems.length === 0 ? (
                <div className="py-12 text-center">
                    <p className="text-lg text-zinc-500">No images in this category.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item) => (
                        <GalleryCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

// ----- GALLERY CARD COMPONENT -----
// Individual gallery item display
function GalleryCard({ item }: { item: GalleryItem }) {
    // Fallback for missing images
    const imageUrl = item.image_url || '/placeholder-gallery.png'

    return (
        <div className="group overflow-hidden rounded-xl bg-zinc-100">
            {/* Image Container */}
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={imageUrl}
                    alt={item.title || 'Gallery image'}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.src = '/placeholder-gallery.png'
                    }}
                />
            </div>

            {/* Title Overlay */}
            {item.title && (
                <div className="p-4">
                    <h3 className="font-medium text-zinc-900">{item.title}</h3>
                    {item.category && (
                        <p className="mt-1 text-sm text-zinc-500">{item.category}</p>
                    )}
                </div>
            )}
        </div>
    )
}
