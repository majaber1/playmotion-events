import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const aiSlugs = ['ar-vr-experience', 'hologram-display', 'ai-photo-booth', 'gamification-zone']

export default function AIExperiencePlatform() {
  const solutions = products.filter((p) => aiSlugs.includes(p.slug))

return (
  <>
  <SEO title="AI Experience Platform" description="Explore the PlayMotion Events AI Experience Platform: AR/VR interactive experiences, holographic displays, AI photo booths, and gamification zones for next-generation events and exhibitions." path="/ai-experience-platform" />
  
  <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
  <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
  <div className="section-subtitle">AI Experience Platform</div>
  <h1 className="text-5xl md:text-6xl font-black text-white mb-6">The Future of <span className="text-gradient">Event Technology</span></h1>
  <p className="text-gray-300 text-xl max-w-3xl">Beyond interactive games, PlayMotion Events brings next-generation AI-powered experiences to your activation: augmented and virtual reality, holographic displays, AI photo booths, and gamified engagement zones.</p>
  </div>
  </div>
  
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
    {solutions.map((p) => (
    <ProductCard key={p.id} product={p} />
    ))}
  </div>
  
  <div className="card-glass rounded-3xl p-12 text-center">
  <h2 className="text-3xl font-black text-white mb-4">Ready to Add AI-Powered Experiences to Your Event?</h2>
  <p className="text-gray-400 max-w-2xl mx-auto mb-8">Tell us about your event, audience, and goals - our team will design the right combination of AR/VR, hologram, AI photo booth, or gamification for maximum impact.</p>
  <div className="flex gap-4 justify-center flex-wrap">
  <Link to="/booking" className="btn-primary text-lg py-4 px-10">Reserve an Experience</Link>
  <Link to="/contact" className="btn-secondary text-lg py-4 px-10">Talk to Our Team</Link>
  </div>
  </div>
  </div>
  </>
)
    }
