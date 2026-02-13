'use client'
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function HomeContent() {
  const searchParams = useSearchParams()
  const slug = searchParams.get('contractor')
  
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-4">Trade Ready Sites</h1>
      <p className="text-lg">
        This is the main landing page. Access contractor sites via subdomain:
      </p>
      <p className="mt-4 text-blue-600">
        Example: rod-test-hvac.app.tradereadysites.com
      </p>
      {slug && (
        <p className="mt-4">
          Contractor parameter: <strong>{slug}</strong>
        </p>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}
