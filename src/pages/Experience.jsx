import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ExperienceCard from '../components/ExperienceCard'
import { experienceCategories } from '../data/products'

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience"
        description="Explore every PlayMotion Events experience category - Education, Sports, Fitness, Events, Museums & Experience Centers, and Gaming Zones - all powered by the same interactive technology."
        path="/experience"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Experience</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">One Platform, <span className="text-gradient">Every Experience</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            PlayMotion's interactive technology adapts to every industry. Explore how the same immersive experience powers Education, Sports, Fitness, Events, Museums, and Gaming Zones.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {experienceCategories.map((category) => (
            <ExperienceCard key={category.id} category={category} />
          ))}
        </div>

        <div className="card-glass rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Bring PlayMotion to Your Space?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whichever experience fits your audience, our team will help you plan, install, and run it for your event or venue.
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
