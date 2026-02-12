'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { GalleryItem } from '@/types/gallery'
import { X, ZoomIn } from 'lucide-react'

interface GalleryGridProps {
    items: GalleryItem[]
    categories: string[]
}

export function GalleryGrid({ items, categories }: GalleryGridProps) {
    const [activeCategory, setActiveCategory] = useState<string>('All')
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
    const [failedImages, setFailedImages] = useState<Set<string>>(new Set())

    const handleImageError = (id: string) => {
        setFailedImages((prev) => new Set(prev).add(id))
    }

    const filteredItems = activeCategory === 'All'
        ? items
        : items.filter((item) => item.category === activeCategory)

    if (!items || items.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">No images found</h3>
                <p className="mt-2 text-gray-500 max-w-sm">
                    We couldn&apos;t find any gallery images at the moment. Please check back later for inspiration.
                </p>
            </div>
        )
    }

    return (
        <div>
            {/* Category Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-4">
                <button
                    onClick={() => setActiveCategory('All')}
                    className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${activeCategory === 'All'
                        ? 'bg-orange-600 text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                >
                    All
                </button>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-lg px-6 py-2.5 text-sm font-medium transition-all ${activeCategory === category
                            ? 'bg-orange-600 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredItems.map((item) => (
                    <div
                        key={item.id}
                        className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-sm transition hover:shadow-md"
                        onClick={() => setSelectedImage(item)}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                            <Image
                                src={failedImages.has(item.id) ? '/placeholder-gallery.png' : (item.image_url || '/placeholder-gallery.png')}
                                alt={item.title || 'Gallery image'}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                onError={() => handleImageError(item.id)}
                            />
                            {/* Soft overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <ZoomIn className="h-8 w-8 text-white drop-shadow-md" />
                            </div>
                        </div>

                        {item.title && (
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                {item.category && (
                                    <p className="text-sm font-medium text-orange-600">{item.category}</p>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gray-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="h-10 w-10" />
                    </button>

                    <div
                        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={failedImages.has(selectedImage.id) ? '/placeholder-gallery.png' : (selectedImage.image_url || '/placeholder-gallery.png')}
                            alt={selectedImage.title || 'Gallery full view'}
                            className="max-h-[85vh] w-auto object-contain"
                        />
                        {selectedImage.title && (
                            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center text-white backdrop-blur-md">
                                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                                {selectedImage.category && <p className="text-orange-500">{selectedImage.category}</p>}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
