import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryCard from '../components/CategoryCard'
import ProductCard from '../components/ProductCard'
import GalleryGrid from '../components/GalleryGrid'
import { categories, products, eventTypes } from '../data/products'

const whyUs = [
  { icon: '⚡', title: 'Fast Setup', desc: 'We arrive and set up everything — you focus on your event.' },
  { icon: '🎯', title: 'All Ages', desc: 'Games designed for kids, teens, adults, and corporate professionals.' },
  { icon: '🛡️', title: 'Safe & Certified', desc: 'All equipment is safe, durable, and event-ready.' },
  { icon: '📍', title: 'Nationwide', desc: 'We serve events across all major cities in Saudi Arabia.' },
  { icon: '🎨', title: 'Custom Branding', desc: 'Add your logo and brand colors to our game setups.' },
  { icon: '🏆', title: 'Premium Experience', desc: '500+ successful events across KSA.' },
]

export default function Home() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <>
      <Helmet>
        <title>PlayMotion Events - Interactive Game Rentals in Saudi Arabia</title>
        <meta name="description" content="PlayMotion Events provides interactive game rentals for events, malls, corporate events, schools, and festivals across Saudi Arabia. MultiBall Mini, reaction walls, and more." />
      </Helmet>

      {/* Hero */}
      <Hero
        badge="🎮 Saudi Arabia's Premier Interactive Game Rental"
        title={<>Interactive Game Rentals for <span className="text-gradient">Unforgettable Events</span></>}
        description="We bring projector-based, sensor-based, and challenge games to malls, corporate events, schools, festivals, and private occasions."
        primaryCta={{ label: 'Explore Games', href: '/products' }}
        secondaryCta={{ label: 'Request a Quote', href: '/contact' }}
      />

      {/* Featured Product: MultiBall Mini */}
      <section className="py-20 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-subtitle">Featured Product</div>
              <h2 className="section-title mb-6">MultiBall Mini <span className="text-gradient">Interactive Wall</span></h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Our flagship system — MultiBall Mini is a compact projector-based interactive sports and game experience. Players interact with projection-mapped balls and targets on walls or floors. Zero installation needed. Perfect for malls, corporate events, and entertainment activations.
              </p>
              <ul className="space-y-3 mb-8">
                {['Multi-player sports & game modes', 'Projection on wall or floor', '30-minute setup time', 'Ages 5+ suitable'].map(f => (
                  <li key={f} className="flex items-center gap-3 text-gray-300">
                    <span className="text-[#00d4ff]">✓</span>{f}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <Link to="/products/1" className="btn-primary">Learn More</Link>
                <Link to="/contact" className="btn-secondary">Request Quote</Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&q=80"
                alt="MultiBall Mini Interactive Wall"
                className="rounded-2xl w-full object-cover h-96 glow-blue"
              />
              <div className="absolute -top-4 -right-4 bg-[#ff6b00] text-white px-4 py-2 rounded-xl font-bold text-sm">
                Most Popular
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Game Categories</div>
            <h2 className="section-title">Explore Our <span className="text-gradient">Interactive Experiences</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(cat => <CategoryCard key={cat.id} category={cat} />)}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Top Games</div>
            <h2 className="section-title">Featured <span className="text-gradient">Products</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredProducts.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="text-center">
            <Link to="/products" className="btn-primary text-lg py-4 px-12">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Why PlayMotion</div>
            <h2 className="section-title">Why <span className="text-gradient">Choose Us</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map(item => (
              <div key={item.title} className="card-glass rounded-2xl p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="section-subtitle">Events We Serve</div>
            <h2 className="section-title">Perfect For <span className="text-gradient">Every Event</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {eventTypes.map(event => (
              <Link key={event.id} to="/events" className="group relative rounded-2xl overflow-hidden h-48">
                <img src={event.image} alt={event.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/40 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="text-2xl mb-1">{event.icon}</div>
                  <h3 className="text-white font-bold">{event.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/events" className="btn-secondary text-lg py-4 px-12">All Event Types</Link>
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
          <h2 className="section-title mb-6">Ready to Make Your <span className="text-gradient">Event Unforgettable?</span></h2>
          <p className="text-gray-300 text-lg mb-10">Contact us today for a custom quote tailored to your event type and budget.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg py-4 px-12">Request a Quote</Link>
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] py-4 px-12 rounded-full font-bold hover:bg-[#25D366]/20 transition-all text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
