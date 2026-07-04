import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'
import ReservationForm from '../components/ReservationForm'

// Maps product slugs (used in ?game= query params) to the labels used
// in the ReservationForm "Choose Game" dropdown.
const gameLabels = {
  multiball: 'MultiBall',
  'x-wall': 'X-Wall',
  'soccer-table': 'Soccer Table',
}

export default function Booking() {
  const [searchParams] = useSearchParams()
  const gameSlug = searchParams.get('game')
  const defaultGame = gameLabels[gameSlug] || ''

  return (
    <>
      <SEO
        title="Reserve a Game"
        description="Book MultiBall, X-Wall, Soccer Table, or a full package for your exhibition, corporate event, mall activation, or school event."
        path="/booking"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Reserve a Game</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Book Your <span className="text-gradient">Interactive Experience</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Fill out the form below and our team will confirm availability, pricing, and logistics for your event.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="card-glass rounded-3xl p-8 md:p-12">
          <ReservationForm defaultGame={defaultGame} />
        </div>
      </div>
    </>
  )
}
