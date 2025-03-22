import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex-1">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl pb-24 pt-10 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
          <div className="px-6 lg:px-0 lg:pt-4">
            <div className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Interactive Learning for Andhra Pradesh
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Experience education like never before with our 3D interactive learning platform designed specifically for Andhra Pradesh schools.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/login"
                    className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Get started
                  </Link>
                  <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Learn Faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to excel in your studies
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform combines cutting-edge technology with expert teaching methods to provide an unmatched learning experience.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
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
      </div>
    </div>
  )
}

const features = [
  {
    name: '3D Interactive Learning',
    description: 'Engage with complex concepts through immersive 3D visualizations and interactive models.',
  },
  {
    name: 'Personalized Progress Tracking',
    description: 'Track your learning journey with detailed analytics and personalized recommendations.',
  },
  {
    name: 'Live Collaboration',
    description: 'Connect with teachers and fellow students in real-time through our integrated chat system.',
  },
] 
npx create-next-app@latest frontend --typescript --tailwind --app
cd frontend
npm install @react-three/fiber @react-three/drei three framer-motion