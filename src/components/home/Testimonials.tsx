'use client'

import { Star } from 'lucide-react'

const testimonials = [
    {
        content: "Absolutely love my new living room set! The quality exceeded my expectations and the delivery was seamless.",
        author: "Sarah Johnson",
        role: "Verified Buyer",
        rating: 5
    },
    {
        content: "The custom dining table is a masterpiece. DreamFurniture truly understands craftsmanship and attention to detail.",
        author: "Michael Chen",
        role: "Interior Designer",
        rating: 5
    },
    {
        content: "Outstanding customer service and beautiful furniture. Highly recommend for anyone furnishing their home.",
        author: "Emily Rodriguez",
        role: "Homeowner",
        rating: 5
    }
]

export function Testimonials() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted by Homeowners
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Don&apos;t just take our word for it. Here&apos;s what our customers have to say about their experience.
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5 transition hover:shadow-md">
                                <div className="flex gap-x-1 text-orange-500">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="mt-6 text-lg leading-8 text-gray-900">
                                    <p>&ldquo;{testimonial.content}&rdquo;</p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4 border-t border-gray-900/5 pt-6">
                                    <div className="text-sm leading-6">
                                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                                        <p className="text-gray-500">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
