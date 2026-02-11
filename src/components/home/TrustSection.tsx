import { ShieldCheck, Truck, Ruler, Headphones } from 'lucide-react'

const features = [
    {
        name: 'Lifetime Warranty',
        description: 'We stand behind our quality with a lifetime structural warranty on all frames.',
        icon: ShieldCheck,
    },
    {
        name: 'Custom Design',
        description: 'Every piece can be customized to fit your specific dimensions and style.',
        icon: Ruler,
    },
    {
        name: 'White Glove Delivery',
        description: 'Professional delivery and installation team handles everything for you.',
        icon: Truck,
    },
    {
        name: 'Expert Support',
        description: 'Our design consultants are available 7 days a week to assist you.',
        icon: Headphones,
    },
]

export function TrustSection() {
    return (
        <section className="py-16 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-600">Why Choose DreamFurniture</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to build your dream home
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We combine traditional craftsmanship with modern technology to deliver
                        furniture that looks beautiful and lasts a lifetime.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col items-center text-center">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <dt className="text-xl font-semibold leading-7 text-gray-900">
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
