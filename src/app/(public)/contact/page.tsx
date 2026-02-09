// Contact Page - DreamFurniture

import type { Metadata } from 'next'

// ----- PAGE METADATA -----
// Overrides global metadata for the Contact page
export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with DreamFurniture. Request a quote, schedule a consultation, or ask about our premium furniture collection. We\'re here to help.',
    openGraph: {
        title: 'Contact Us | DreamFurniture',
        description: 'Get in touch with DreamFurniture. Request a quote or schedule a consultation.',
        url: '/contact',
    },
}
export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white py-24 px-6">
            <div className="mx-auto max-w-4xl text-center">
                <h1 className="text-4xl font-bold text-zinc-900">Contact Us</h1>
                <p className="mt-4 text-lg text-zinc-600">
                    Get in touch with our team for inquiries and support.
                </p>
            </div>
        </div>
    );
}
