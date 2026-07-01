import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - PlayMotion Events</title>
        <meta name="description" content="Learn about PlayMotion Events - Saudi Arabia's interactive game rental company serving malls, corporate events, schools, and festivals with innovative game experiences." />
      </Helmet>

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage:'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize:'60px 60px'}} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Who We Are</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">About <span className="text-gradient">PlayMotion Events</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">Redefining event entertainment across Saudi Arabia with cutting-edge interactive game experiences.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Interactive Entertainment <span className="text-gradient">Redefined</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              PlayMotion Events is Saudi Arabia's premier provider of interactive game rental solutions for events of all sizes. We specialize in bringing innovative, technology-driven entertainment experiences to malls, corporate events, schools, festivals, exhibitions, and private occasions.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our portfolio includes an extensive range of interactive systems — from projector-based MultiBall Mini walls and sensor-activated reaction games to classic carnival favorites and corporate team-building setups. Every product in our inventory is carefully selected to deliver maximum engagement, fun, and wow-factor at your event.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Founded by a team of event professionals and technology enthusiasts, PlayMotion Events combines deep expertise in event operations with a passion for interactive technology. We don't just rent games — we deliver complete entertainment experiences, including full setup, operation, and takedown, ensuring you can focus entirely on your event.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=400&q=80" alt="Event" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Corporate" className="rounded-2xl w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" alt="Kids" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&q=80" alt="Festival" className="rounded-2xl w-full h-48 object-cover mt-8" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '500+', label: 'Events Completed', color: 'text-[#00d4ff]' },
            { value: '12+', label: 'Interactive Systems', color: 'text-[#00ff88]' },
            { value: '9', label: 'Game Categories', color: 'text-[#ff6b00]' },
            { value: '100%', label: 'Client Satisfaction', color: 'text-[#00d4ff]' },
          ].map(stat => (
            <div key={stat.label} className="card-glass rounded-2xl p-6 text-center">
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-black text-white mb-10 text-center">What We <span className="text-gradient">Offer</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎮', title: 'Interactive Systems', desc: 'Cutting-edge projector, sensor, and reaction-based game systems for every event type.' },
              { icon: '🚚', title: 'Full Event Service', desc: 'We handle transport, setup, operation, and takedown — completely hassle-free for you.' },
              { icon: '🎨', title: 'Custom Branding', desc: 'Brand our setups with your logo, colors, and messaging for corporate events.' },
              { icon: '👥', title: 'Trained Staff', desc: 'Our experienced event staff operate games and engage your audience throughout.' },
              { icon: '🏢', title: 'All Venues', desc: 'Indoor/outdoor setups for malls, hotels, open spaces, schools, and exhibition centers.' },
              { icon: '📍', title: 'Nationwide Coverage', desc: 'Serving Riyadh, Jeddah, Dammam, and all major cities across Saudi Arabia.' },
            ].map(item => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">Contact our team today to plan your next event with PlayMotion.</p>
          <div className="flex gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg py-4 px-10">Get in Touch</Link>
            <Link to="/products" className="btn-secondary text-lg py-4 px-10">View Products</Link>
          </div>
        </div>
      </div>
    </>
  )
}
