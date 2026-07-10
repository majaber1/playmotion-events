import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { perfectFor } from '../data/products'

const solutions = [
  { icon: '📚', title: 'Classrooms & Interactive Lessons', desc: 'Turn lesson content into physical, game-based learning moments that keep students engaged.' },
  { icon: '🎓', title: 'School Sports Days & Assemblies', desc: 'A safe, high-energy interactive centerpiece for school events that gets every student involved.' },
  { icon: '🧠', title: 'STEM & Cognitive Skill Building', desc: 'Reaction, coordination, and problem-solving games designed to sharpen young minds.' },
  { icon: '🏫', title: 'Universities & Campus Activations', desc: 'Engage students at open days, orientation, and campus events with a memorable interactive experience.' },
  { icon: '🎨', title: 'After-School & Enrichment Programs', desc: 'Active, screen-based-but-physical play that makes the most of extracurricular time.' },
  { icon: '🤝', title: 'Parent & Community Days', desc: 'Bring families onto campus with a fun, inclusive activity for visitors of every age.' },
]

export default function EducationSolutions() {
  return (
    <>
      <SEO title="Education Solutions" description="Interactive gaming solutions for classrooms, school events, and universities across Saudi Arabia and the GCC." path="/education-solutions" />
      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Education Solutions</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Making Learning <span className="text-gradient">Active</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">We help schools and universities turn lessons, events, and campus activations into interactive, movement-based experiences students remember.</p>
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
          <h2 className="text-3xl font-black text-white mb-6">Let's Plan Your Education Activation</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Tell us about your school or campus, and we will recommend the right games and setup.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking" className="btn-primary text-lg py-4 px-10">Reserve a Game</Link>
            <Link to="/contact" className="btn-secondary text-lg py-4 px-10">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
