import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { perfectFor } from '../data/products'

const solutions = [
  {
    icon: '🏢',
    title: 'Exhibitions & Conferences',
    desc: 'Turn a static exhibition stand into an interactive destination that pulls foot traffic away from neighboring booths and keeps visitors engaged long enough for your team to start a conversation.',
  },
  {
    icon: '💼',
    title: 'Corporate Activations & Brand Launches',
    desc: 'Add a branded interactive centerpiece to product launches, roadshows, and company events - complete with your logo, colors, and messaging built into the game experience.',
  },
  {
    icon: '🛍️',
    title: 'Malls & Retail Activations',
    desc: 'Drive footfall to a specific zone or store with games that attract shoppers of all ages, extend dwell time, and create positive brand associations during promotions and campaigns.',
  },
  {
    icon: '🎓',
    title: 'Schools & Universities',
    desc: 'Bring safe, high-energy interactive games to sports days, open days, and student events - encouraging physical activity and healthy competition in a controlled environment.',
  },
  {
    icon: '🎡',
    title: 'Entertainment Zones & Family Venues',
    desc: 'Add a recurring interactive attraction to entertainment centers, family zones, and seasonal events that keeps visitors coming back for more.',
  },
  {
    icon: '🎉',
    title: 'Private Events & Celebrations',
    desc: 'From corporate parties to private celebrations, our games add a fun, competitive centerpiece that works for guests of every age.',
  },
]

export default function EventSolutions() {
  return (
    <>
      <SEO
        title="Event Solutions"
        description="Tailored interactive gaming solutions for exhibitions, corporate activations, malls, schools, and entertainment zones across Saudi Arabia and the GCC."
        path="/event-solutions"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Event Solutions</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Solutions for <span className="text-gradient">Every Venue</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            As a technology partner - not just an equipment rental company - we tailor game selection, branding, and staffing to the goals of your specific event.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {solutions.map((s) => (
            <div key={s.title} className="card-glass rounded-2xl p-6">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Perfect For strip */}
        <div className="mb-20">
          <div className="text-center mb-10">
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

        <div className="text-center">
          <h2 className="text-3xl font-black text-white mb-6">Let's Plan Your Activation</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Tell us about your venue and audience, and we will recommend the right games and setup.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="btn-primary text-lg py-4 px-10">Reserve a Game</Link>
            <Link to="/contact" className="btn-secondary text-lg py-4 px-10">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
