// Gallery Page - DreamFurniture
// Server Component that fetches gallery images from Supabase

import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase/client'
import { GalleryGrid } from '@/components/gallery/GalleryGrid'
import { GalleryItem } from '@/types/gallery'

// ----- PAGE METADATA -----
// Overrides global metadata for the Gallery page
export const metadata: Metadata = {
    title: 'Gallery',
    description: 'Browse beautiful room inspirations and furniture showcases. Get inspired for your next home project with our curated gallery.',
    openGraph: {
        title: 'Gallery | DreamFurniture',
        description: 'Browse beautiful room inspirations and furniture showcases.',
        url: '/gallery',
    },
}

export default async function GalleryPage() {
    // ----- DATA FETCHING -----
    // Fetch all gallery items from Supabase
    const { data: items, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })

    // ----- ERROR HANDLING -----
    if (error) {
        return (
            <div className="min-h-screen bg-white py-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-zinc-900">Gallery</h1>
                        <p className="mt-4 text-lg text-red-600">
                            Unable to load gallery. Please try again later.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    // Type assertion and ensure we have an array
    const galleryItems = (items as GalleryItem[]) || []

    // ----- EXTRACT UNIQUE CATEGORIES -----
    // Get unique non-null categories for filter buttons
    const categories = [...new Set(
        galleryItems
            .map((item) => item.category)
            .filter((cat): cat is string => cat !== null)
    )]

    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-zinc-900">Gallery</h1>
                    <p className="mt-4 text-lg text-zinc-600">
                        Browse beautiful room inspirations and furniture showcases.
                    </p>
                </div>

                {/* Gallery Grid with Filtering */}
                <GalleryGrid items={galleryItems} categories={categories} />
            </div>
        </div>
    )
}
