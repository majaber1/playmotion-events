import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import ProductCard from '../components/ProductCard'
import GalleryGrid from '../components/GalleryGrid'
import { products, whyChooseUs, perfectFor, howItWorks } from '../data/products'

export default function Home() {
  return (
    <>
      <SEO
        title="Interactive Gaming Experiences for Events & Exhibitions"
        description="PlayMotion Events provides MultiBall, X-Wall, and Soccer Table interactive projector-based games for exhibitions, corporate events, malls, schools, and entertainment activations across Saudi Arabia and the GCC."
        path="/"
      />

      <Hero
        badge="🎮 Interactive Gaming Technology Partner"
        title={<>Make Your Booth <span className="text-gradient">the One People Stop At</span></>}
        description="Interactive projector-based games for exhibitions, corporate events, malls, schools, and entertainment activations."
        primaryCta={{ label: 'Reserve a Game', href: '/booking' }}
        secondaryCta={{ label: 'View Experiences', href: '/products' }}
      />

      {/* Intro strip + third CTA */}
      <section className="py-10 border-y border-white/5 bg-[#0d1221]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <p className="text-gray-300 text-lg">
            Transform Your Booth Into an Interactive Destination.
          </p>
          <Link to="/contact" className="btn-secondary whitespace-nowrap">Contact Us</Link>
        </div>
      </section>

      {/* 3 Main Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Our Experiences</div>
            <h2 className="section-title">Interactive Games for <span className="text-gradient">Every Event</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Event Organizers Choose Us */}
      <section className="py-20 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Why Us</div>
            <h2 className="section-title">Why Event Organizers <span className="text-gradient">Choose Us</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="card-glass rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Where We Fit</div>
            <h2 className="section-title">Perfect <span className="text-gradient">For</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {perfectFor.map((item) => (
              <div key={item.id} className="card-glass rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold text-sm">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Simple Process</div>
            <h2 className="section-title">How It <span className="text-gradient">Works</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="card-glass rounded-2xl p-6 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-[#00d4ff] text-[#0a0e1a] font-black flex items-center justify-center mb-4">
                  {step.step}
                </div>
                <h3 className="text-white font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Gallery</div>
            <h2 className="section-title">See Us <span className="text-gradient">In Action</span></h2>
          </div>
          <GalleryGrid limit={8} />
          <div className="text-center mt-10">
            <Link to="/gallery" className="btn-primary text-lg py-4 px-12">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-subtitle">Get Started</div>
          <h2 className="section-title mb-6">Make Your Next Event <span className="text-gradient">Unforgettable</span></h2>
          <p className="text-gray-300 text-lg mb-10">Contact us today to reserve MultiBall, X-Wall, Soccer Table, or a full interactive package.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking" className="btn-primary text-lg py-4 px-12">Reserve a Game</Link>
            <Link to="/contact" className="btn-secondary text-lg py-4 px-12">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
