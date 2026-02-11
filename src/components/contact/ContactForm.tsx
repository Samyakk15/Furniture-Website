'use client'

// ContactForm Component - DreamFurniture
// Client Component with React Hook Form + Zod validation
// Ready for future Supabase integration

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

// ----- ZOD VALIDATION SCHEMA -----
const contactSchema = z.object({
    name: z
        .string()
        .min(1, 'Name is required')
        .min(2, 'Name must be at least 2 characters'),
    phone: z
        .string()
        .min(1, 'Phone number is required')
        .min(10, 'Phone number must be at least 10 digits'),
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address'),
    message: z
        .string()
        .min(1, 'Message is required')
        .min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        await new Promise((resolve) => setTimeout(resolve, 500))
        setIsSubmitting(false)
        setIsSubmitted(true)
        reset()
        setTimeout(() => setIsSubmitted(false), 5000)
    }

    return (
        <div className="mx-auto max-w-xl">
            {/* Success Message */}
            {isSubmitted && (
                <div className="mb-6 rounded-lg bg-green-50 p-4 text-center">
                    <p className="font-medium text-green-800">
                        Thank you! Your message has been sent successfully.
                    </p>
                    <p className="mt-1 text-sm text-green-600">
                        We&apos;ll get back to you soon.
                    </p>
                </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
                        {...register('name')}
                        className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.name ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Your full name"
                    />
                    {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                </div>

                {/* Phone Field */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Your phone number"
                    />
                    {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                </div>

                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 ${errors.email ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="your@email.com"
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>

                {/* Message Field */}
                <div>
                    <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows={5}
                        {...register('message')}
                        className={`mt-1 block w-full rounded-lg border px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${errors.message ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Tell us about your furniture needs..."
                    />
                    {errors.message && (
                        <p className="mt-1 text-sm text-red-600">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-orange-600 px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    )
}
