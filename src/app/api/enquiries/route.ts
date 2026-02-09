// Enquiries API Route - DreamFurniture
// Handles POST requests to submit contact/enquiry forms to Supabase

import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { supabase } from '@/lib/supabase/client'

// ----- ZOD VALIDATION SCHEMA -----
// Server-side validation for enquiry data
const enquirySchema = z.object({
    name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
    phone: z.string().min(1, 'Phone is required').min(10, 'Phone must be at least 10 digits'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
    product_id: z.string().uuid().optional().nullable(), // Optional: links enquiry to a product
})

// TypeScript type inferred from Zod schema
type EnquiryData = z.infer<typeof enquirySchema>

// ----- POST HANDLER -----
export async function POST(request: NextRequest) {
    try {
        // ----- REQUEST PARSING -----
        // Parse JSON body from request
        const body = await request.json()

        // ----- VALIDATION -----
        // Validate request body against Zod schema
        const validationResult = enquirySchema.safeParse(body)

        if (!validationResult.success) {
            // Return 400 for invalid input with error details
            return NextResponse.json(
                {
                    success: false,
                    error: 'Validation failed',
                    details: validationResult.error.flatten().fieldErrors,
                },
                { status: 400 }
            )
        }

        const data: EnquiryData = validationResult.data

        // ----- DATABASE INSERTION -----
        // Insert validated data into Supabase 'enquiries' table
        const { error: dbError } = await supabase.from('enquiries').insert({
            name: data.name,
            phone: data.phone,
            email: data.email,
            message: data.message,
            product_id: data.product_id || null,
        })

        // ----- DATABASE ERROR HANDLING -----
        if (dbError) {
            console.error('Supabase insert error:', dbError)
            return NextResponse.json(
                {
                    success: false,
                    error: 'Failed to save enquiry. Please try again later.',
                },
                { status: 500 }
            )
        }

        // ----- SUCCESS RESPONSE -----
        return NextResponse.json(
            {
                success: true,
                message: 'Enquiry submitted successfully',
            },
            { status: 201 }
        )
    } catch (error) {
        // ----- CATCH-ALL ERROR HANDLING -----
        // Handle unexpected errors (JSON parse failure, etc.)
        console.error('API route error:', error)
        return NextResponse.json(
            {
                success: false,
                error: 'An unexpected error occurred',
            },
            { status: 500 }
        )
    }
}
