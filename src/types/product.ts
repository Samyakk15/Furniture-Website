// Product type definition matching Supabase products table
export interface Product {
    id: string
    name: string
    price: number | null
    description: string | null
    image_url: string | null
    category: string | null
    created_at: string
}
