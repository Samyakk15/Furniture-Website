// Gallery item type definition matching Supabase gallery table
export interface GalleryItem {
    id: string
    title: string | null
    image_url: string
    category: string | null
    created_at: string
}
