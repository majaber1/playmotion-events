import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import VideoEmbed from '../components/VideoEmbed'
import { products, galleryImages } from '../data/products'

export default function XWall() {
  const product = products.find((p) => p.slug === 'x-wall')
  const images = galleryImages.filter((img) => img.category === 'X-Wall Setup')

  return (
    <>
      <SEO
        title="X-Wall Portable Interactive Wall"
        description="X-Wall is a portable interactive wall experience with multiple games designed for events, exhibitions, schools, and entertainment spaces."
        path="/x-wall"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,255,136,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">X-Wall Experience</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">{product.name}</h1>
          <p className="text-gray-300 text-xl max-w-3xl">{product.tagline}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{product.description}</p>
            <ul className="space-y-3 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-300">
                  <span className="text-[#00ff88] mt-0.5">✓</span>{f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <Link to={`/booking?game=${product.slug}`} className="btn-primary">Reserve This Game</Link>
              <a href={product.officialLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Visit {product.officialLabel}
              </a>
            </div>
          </div>
          <img src={product.image} alt={product.name} className="rounded-2xl w-full object-cover h-96" />
        </div>

        {/* Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
          <div className="card-glass rounded-2xl p-6 text-center">
            <div className="text-gray-500 text-sm mb-2">Best For</div>
            <div className="text-white font-semibold">{product.bestFor}</div>
          </div>
          <div className="card-glass rounded-2xl p-6 text-center">
            <div className="text-gray-500 text-sm mb-2">Space Required</div>
            <div className="text-white font-semibold">{product.spaceRequirement}</div>
          </div>
          <div className="card-glass rounded-2xl p-6 text-center">
            <div className="text-gray-500 text-sm mb-2">Setup Time</div>
            <div className="text-white font-semibold">{product.setupTime}</div>
          </div>
        </div>

        {/* Official references */}
        <div className="card-glass rounded-2xl p-8 mb-20 text-center">
          <p className="text-gray-300 mb-4">X-Wall is built on proven interactive event technology. Learn more from the official sources:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://xwall.io" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] font-semibold hover:underline">xwall.io →</a>
            <a href="https://xwall.io/en/xwall-event" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] font-semibold hover:underline">X-Wall Events →</a>
            <a href="https://interactivexwall.nl/en" target="_blank" rel="noopener noreferrer" className="text-[#00ff88] font-semibold hover:underline">Interactive X-Wall →</a>
          </div>
        </div>

        {/* Video */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="section-subtitle">See It In Action</div>
            <h2 className="section-title">X-Wall <span className="text-gradient">Demo</span></h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <VideoEmbed
              title="X-Wall Demo Video"
              description="See X-Wall events in action."
              officialUrl={product.eventsLink}
              officialLabel="View X-Wall event examples"
            />
          </div>
        </div>

        {/* Gallery */}
        {images.length > 0 && (
          <div className="mb-20">
            <div className="text-center mb-10">
              <div className="section-subtitle">Gallery</div>
              <h2 className="section-title">X-Wall <span className="text-gradient">Setups</span></h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {images.map((img) => (
                <img key={img.id} src={img.src} alt={img.alt} className="rounded-2xl w-full h-64 object-cover" />
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-6">Bring X-Wall to Your Event</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="btn-primary text-lg py-4 px-10">Reserve a Game</Link>
            <Link to="/products" className="btn-secondary text-lg py-4 px-10">View All Products</Link>
          </div>
        </div>
      </div>
    </>
  )
}
