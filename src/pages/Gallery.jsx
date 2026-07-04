import SEO from '../components/SEO'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos of MultiBall, X-Wall, and Soccer Table setups in action at exhibitions, corporate events, and mall activations."
        path="/gallery"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Gallery</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">See Us <span className="text-gradient">In Action</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            A look at MultiBall, X-Wall, and Soccer Table setups across exhibitions, corporate events, and entertainment activations.
          </p>
          {/* TODO: Replace all placeholder photos below with real event photography. See README.md > "How to add images". */}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <GalleryGrid />
      </div>
    </>
  )
}
