import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function ContractorPage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Fetch contractor data from Supabase
  const { data: contractor, error } = await supabase
    .from('contractors')
    .select('*')
    .eq('slug', slug)
    .single()

  // Handle errors or missing contractors
  if (error || !contractor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contractor Not Found
          </h1>
          <p className="text-gray-600">
            The contractor page for "{slug}" doesn't exist yet.
          </p>
        </div>
      </div>
    )
  }

  // Render contractor demo page
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">
            {contractor.business_name || 'Professional Contractor'}
          </h1>
          <p className="text-2xl mb-2">
            {contractor.trade || 'Contractor Services'}
          </p>
          {contractor.city && contractor.state && (
            <p className="text-xl opacity-90">
              Serving {contractor.city}, {contractor.state}
            </p>
          )}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {contractor.services ? (
            contractor.services.split(',').map((service: string, idx: number) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{service.trim()}</h3>
                <p className="text-gray-600">Professional {service.trim().toLowerCase()} services</p>
              </div>
            ))
          ) : (
            <>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Installation</h3>
                <p className="text-gray-600">Professional installation services</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Repair</h3>
                <p className="text-gray-600">Expert repair and maintenance</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Consultation</h3>
                <p className="text-gray-600">Free estimates and planning</p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Experience You Can Trust</h3>
              <p className="text-gray-600 mb-4">
                With years of experience serving {contractor.city || 'the local area'}, 
                we've built a reputation for quality work and exceptional customer service.
              </p>
              {contractor.rating && (
                <p className="text-lg font-semibold text-blue-600">
                  ⭐ {contractor.rating} Stars
                  {contractor.review_count && ` • ${contractor.review_count} Reviews`}
                </p>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Licensed & Insured</h3>
              <p className="text-gray-600 mb-4">
                We're fully licensed and insured, giving you peace of mind for every project.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Licensed professionals</li>
                <li>✓ Fully insured</li>
                <li>✓ Satisfaction guaranteed</li>
                <li>✓ Free estimates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free estimate
          </p>
          {contractor.phone && (
            <a
              href={`tel:${contractor.phone}`}
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:bg-blue-700 transition"
            >
              Call {contractor.phone}
            </a>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2026 {contractor.business_name || 'Professional Contractor'}. All rights reserved.
          </p>
          {contractor.address && (
            <p className="text-gray-400 mt-2">{contractor.address}</p>
          )}
        </div>
      </div>
    </div>
  )
}
