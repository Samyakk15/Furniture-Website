// Products Page - DreamFurniture
// Server Component that fetches products from Supabase

import type { Metadata } from 'next'
import { supabase } from '@/lib/supabase/client'
import { ProductGrid } from '@/components/products/ProductGrid'
import { Product } from '@/types/product'

// ----- PAGE METADATA -----
// Overrides global metadata for the Products page
export const metadata: Metadata = {
    title: 'Our Products',
    description: 'Browse our curated collection of premium furniture. Sofas, dining tables, beds, and more. Quality craftsmanship for every room in your home.',
    openGraph: {
        title: 'Our Products | DreamFurniture',
        description: 'Browse our curated collection of premium furniture for every room.',
        url: '/products',
    },
}

export default async function ProductsPage() {
    // Fetch all products from Supabase
    const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

    // Handle fetch error
    if (error) {
        return (
            <div className="min-h-screen bg-white py-24 px-6">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
                        <p className="mt-4 text-lg text-red-600">
                            Unable to load products. Please try again later.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-7xl">
                {/* Page Header */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore our curated collection of premium furniture.
                    </p>
                </div>

                {/* Products Grid */}
                <ProductGrid products={(products as Product[]) || []} />
            </div>
        </div>
    )
}
