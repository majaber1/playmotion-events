import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="PlayMotion Events is an interactive gaming technology partner - not just an equipment rental company - providing MultiBall, X-Wall, and Soccer Table experiences for events across Saudi Arabia and the GCC."
        path="/about"
      />

      {/* Page Header */}
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Who We Are</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">About <span className="text-gradient">PlayMotion Events</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">A technology partner for interactive gaming experiences, not just an equipment rental company.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Interactive Entertainment <span className="text-gradient">Redefined</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              PlayMotion Events partners with exhibition companies, corporate marketing teams, malls, schools, and entertainment venues across Saudi Arabia and the GCC to deliver interactive gaming experiences that turn passive visitors into active, engaged guests.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Our current fleet includes two MultiBall interactive sports wall units, two X-Wall portable interactive wall units, and two professional soccer tables - giving us the flexibility to run multiple activations at once or combine all three into one large interactive zone.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              We don't just deliver equipment - we deliver a complete experience, including transport, setup, on-site operation, and takedown, so your team can focus entirely on your event and your guests.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="Corporate event activation" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80" alt="Exhibition booth" className="rounded-2xl w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&q=80" alt="Kids playing an interactive game" className="rounded-2xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80" alt="Corporate team challenge" className="rounded-2xl w-full h-48 object-cover mt-8" />
          </div>
        </div>

        {/* Fleet Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '2', label: 'MultiBall Units', color: 'text-[#00d4ff]' },
            { value: '2', label: 'X-Wall Units', color: 'text-[#00ff88]' },
            { value: '2', label: 'Soccer Tables', color: 'text-[#ff6b00]' },
            { value: 'GCC', label: 'Coverage Area', color: 'text-[#00d4ff]' },
          ].map((stat) => (
            <div key={stat.label} className="card-glass rounded-2xl p-6 text-center">
              <div className={`text-4xl font-black mb-2 ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="card-glass rounded-3xl p-10">
            <div className="inline-block bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-bold px-4 py-2 rounded-full mb-6">
              Our Mission
            </div>
            <p className="text-white text-xl font-bold leading-snug mb-4">
              To help event organizers, exhibitors, and venues turn every booth into an interactive destination that people stop at, engage with, and remember.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We combine proven interactive gaming technology with hands-on event expertise, so our partners get a reliable, professionally operated attraction every time.
            </p>
          </div>
          <div className="card-glass rounded-3xl p-10">
            <div className="inline-block bg-[#ff6b00]/10 border border-[#ff6b00]/30 text-[#ff6b00] text-sm font-bold px-4 py-2 rounded-full mb-6">
              Our Vision
            </div>
            <p className="text-white text-xl font-bold leading-snug mb-4">
              To become the leading interactive gaming technology partner for events and exhibitions across Saudi Arabia and the GCC.
            </p>
            <p className="text-gray-400 leading-relaxed">
              As we grow, we plan to expand our fleet and game library while maintaining the same standard of service and reliability our partners expect.
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-black text-white mb-10 text-center">What We <span className="text-gradient">Offer</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎮', title: 'Interactive Technology', desc: 'MultiBall, X-Wall, and Soccer Table experiences backed by proven, event-tested technology.' },
              { icon: '🚚', title: 'Full Event Service', desc: 'We handle transport, setup, operation, and takedown - completely hassle-free for you.' },
              { icon: '🎨', title: 'Brand Activation', desc: 'Add your logo, colors, and messaging directly into the game experience.' },
              { icon: '👥', title: 'Trained Staff', desc: 'Our team operates the games on-site and keeps guests engaged throughout your event.' },
              { icon: '🏢', title: 'Every Venue Type', desc: 'Indoor and outdoor setups for exhibition halls, malls, schools, and entertainment zones.' },
              { icon: '📍', title: 'GCC Coverage', desc: 'Based in Riyadh, Saudi Arabia, with availability across the wider GCC region.' },
            ].map((item) => (
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
          <p className="text-gray-300 mb-8">Contact our team today to plan your next event with PlayMotion Events.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary text-lg py-4 px-10">Get in Touch</Link>
            <Link to="/products" className="btn-secondary text-lg py-4 px-10">View Products</Link>
          </div>
        </div>
      </div>
    </>
  )
}
