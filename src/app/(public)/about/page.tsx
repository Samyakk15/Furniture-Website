import React from 'react'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
    title: 'About Us | Dream Modular & Furnitures',
    description: 'Learn more about Dream Modular & Furnitures - dedicated to creating modern, functional, and aesthetically pleasing furniture solutions.',
}

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Section 1 — About Dream Modular & Furnitures (Hero Intro) */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            About Dream Modular & Furnitures
                        </h1>
                        <div className="w-20 h-1 bg-orange-600 mx-auto rounded"></div>
                    </div>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg mb-6">
                        Dream Modular & Furnitures is dedicated to creating modern, functional, and aesthetically pleasing furniture solutions for homes and offices. We specialize in custom modular designs that combine quality craftsmanship, smart space utilization, and contemporary style.
                    </p>
                    <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-lg">
                        Our goal is to transform everyday spaces into comfortable, elegant, and highly functional environments that reflect our customers’ lifestyle and needs.
                    </p>
                </div>
            </section>

            {/* Section 2 — Our Story */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                Dream Modular & Furnitures started with a simple vision — to provide high-quality custom furniture that perfectly fits modern living spaces. Over the years, we have grown by focusing on customer satisfaction, attention to detail, and continuous innovation in design and materials.
                            </p>
                            <p>
                                From small residential projects to complete home solutions, our journey has been built on trust, quality, and long-term relationships with our clients.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 — Who We Are */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Who We Are</h2>
                        <div className="space-y-4 text-gray-600 leading-relaxed">
                            <p>
                                We are a team of experienced designers, craftsmen, and installation experts who work together to deliver customized furniture solutions. Our team understands the importance of both functionality and design, ensuring that every product we create meets the highest standards of quality and durability.
                            </p>
                            <p>
                                We believe that great furniture is not just about looks — it’s about comfort, usability, and long-term value.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 — Vision & Mission */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Vision */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-gray-600 leading-relaxed">
                                To become a trusted name in modular furniture by delivering innovative designs, superior quality, and exceptional customer service.
                            </p>
                        </div>

                        {/* Mission */}
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
                            <ul className="space-y-3 text-gray-600 leading-relaxed">
                                {[
                                    'Customized furniture solutions tailored to individual needs',
                                    'Premium materials and modern technology',
                                    'Timely delivery and professional installation',
                                    'Long-term customer satisfaction and trust',
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-orange-600 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 — What Makes Us Stand Out */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        What Makes Us Stand Out
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Customized designs for every space',
                            'High-quality materials and finishes',
                            'Professional design consultation',
                            'On-time delivery and installation',
                            'Affordable pricing with premium quality',
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 border border-gray-100 flex items-start gap-4"
                            >
                                <div className="mt-1 text-orange-600">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <span className="text-gray-700 font-medium text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 6 — Experience & Achievements (Stats) */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        {[
                            { number: '4+', label: 'Years of Experience' },
                            { number: '846+', label: 'Happy Customers' },
                            { number: '1500+', label: 'Custom Creations' },
                            { number: '260+', label: 'Premium Designs' },
                        ].map((stat, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                                <div className="text-3xl font-bold text-orange-600 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
