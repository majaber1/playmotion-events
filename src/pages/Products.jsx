import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Products() {
  return (
    <>
      <SEO
        title="Products / Games"
        description="Explore MultiBall, X-Wall, and Soccer Table - our interactive projector-based games and event attractions for exhibitions, corporate activations, malls, schools, and entertainment zones."
        path="/products"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Products / Games</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Interactive Games for <span className="text-gradient">Every Event</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Three proven attractions, one technology partner. Choose a single game or combine all three into a full interactive activation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="card-glass rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Not Sure Which Game Fits Your Event?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Tell us about your event type, expected footfall, and available space - our team will recommend the right game or combination for maximum engagement.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="btn-primary text-lg py-4 px-10">Reserve a Game</Link>
            <Link to="/contact" className="btn-secondary text-lg py-4 px-10">Talk to Our Team</Link>
          </div>
        </div>
      </div>
    </>
  )
}
