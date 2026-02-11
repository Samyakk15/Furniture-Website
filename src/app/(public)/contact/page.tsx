'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

// Note: Ensure lucide-react is installed, if not, it's a standard dependency.
// If icons are missing, users can install them or replace with placeholders.

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormStatus('submitting')

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500))

        setFormStatus('success')
        // In a real app, you would reset the form here or redirect
    }

    return (
        <main className="flex min-h-screen flex-col">
            {/* Section 1 — Introduction */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="max-w-2xl mx-auto mb-10">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h1>
                        <p className="text-gray-600">
                            Have questions about our products or looking for a customized furniture solution? Our team is here to help you. Contact us for design consultation, pricing details, or any product inquiries.
                        </p>
                    </div>

                    {/* Section 2 — Two Column Layout */}
                    <div className="grid md:grid-cols-2 gap-10 text-left">
                        {/* Left Side — Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Phone</p>
                                            <p className="text-gray-600">+91 98765 43210</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                            <Mail className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Email</p>
                                            <p className="text-gray-600">info@dreammodularfurnitures.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white p-3 rounded-full shadow-sm text-orange-600">
                                            <MapPin className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <p className="font-medium text-gray-900">Address</p>
                                            <p className="text-gray-600">
                                                Dream Modular & Furnitures<br />
                                                6/16, Sarvashree Nagar<br />
                                                Narsala, Dighori<br />
                                                Nagpur, Maharashtra – 440034
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="rounded-lg overflow-hidden h-64 shadow-sm border border-gray-100">
                                <iframe
                                    src="https://maps.google.com/maps?q=Sarvashree%20Nagar%20Nagpur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                    className="w-full h-full border-0"
                                    loading="lazy"
                                    title="Google Map Location"
                                />
                            </div>
                        </div>

                        {/* Right Side — Contact Form */}
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Request a Consultation</h2>

                            {formStatus === 'success' ? (
                                <div className="text-center py-12">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-medium text-gray-900 mb-2">Message Sent!</h3>
                                    <p className="text-green-600">
                                        Thank you for contacting us! Our team will get back to you shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormStatus('idle')}
                                        className="mt-6 text-sm text-orange-600 hover:text-orange-700 font-medium underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number <span className="text-red-500">*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                                            Interested In
                                        </label>
                                        <div className="relative">
                                            <select
                                                id="service"
                                                name="service"
                                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow appearance-none"
                                            >
                                                <option value="Kitchen">Modular Kitchen</option>
                                                <option value="Wardrobe">Wardrobe Design</option>
                                                <option value="TV Unit">TV Unit</option>
                                                <option value="Living Room">Living Room Furniture</option>
                                                <option value="Office">Office Furniture</option>
                                                <option value="Other">Other</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
                                            placeholder="Tell us about your requirements..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={formStatus === 'submitting'}
                                        className={`w-full bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition font-medium text-lg shadow-sm ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {formStatus === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
