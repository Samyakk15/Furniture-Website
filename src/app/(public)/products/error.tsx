'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { AlertTriangle, RefreshCcw } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-24 text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600">
                <AlertTriangle className="h-8 w-8" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900">Something went wrong!</h2>
            <p className="mt-2 max-w-sm text-zinc-600">
                We encountered an error while loading the products. Please try again or contact support if the problem persists.
            </p>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
                className="mt-8 flex items-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:bg-zinc-800 hover:scale-105"
            >
                <RefreshCcw className="h-4 w-4" />
                Try again
            </button>
        </div>
    )
}
