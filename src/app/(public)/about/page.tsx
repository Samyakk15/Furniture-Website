// About Page - DreamFurniture

import type { Metadata } from 'next'

// ----- PAGE METADATA -----
// Overrides global metadata for the About page
export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about DreamFurniture - 15+ years crafting premium furniture. Discover our story, values, and commitment to quality craftsmanship and customer satisfaction.',
    openGraph: {
        title: 'About Us | DreamFurniture',
        description: 'Learn about DreamFurniture - 15+ years crafting premium furniture with quality craftsmanship.',
        url: '/about',
    },
}
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-zinc-900">About Us</h1>
                <p className="mt-4 text-lg text-zinc-600">
                    Learn more about DreamFurniture and our story.
                </p>
            </div>
        </div>
    );
}
