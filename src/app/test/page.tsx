import { supabase } from '@/lib/supabase/client'

export default async function TestPage() {
    const { data: products, error } = await supabase.from('products').select('*')

    if (error) {
        return (
            <div>
                <h1>Supabase Connection Test</h1>
                <p>Error: {error.message}</p>
            </div>
        )
    }

    if (!products || products.length === 0) {
        return (
            <div>
                <h1>Supabase Connection Test</h1>
                <p>No products found. Check your Supabase table or .env.local configuration.</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Supabase Connection Test</h1>
            <p>Found {products.length} products:</p>
            <pre>{JSON.stringify(products, null, 2)}</pre>
        </div>
    )
}
