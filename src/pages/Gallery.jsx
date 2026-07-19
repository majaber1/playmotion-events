import { useState } from 'react'
import SEO from '../components/SEO'
import GalleryGrid from '../components/GalleryGrid'
import { galleryHighlights } from '../data/products'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

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
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h2 className="text-3xl font-black text-white mb-8">Live At Our <span className="text-gradient">Events</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryHighlights.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-lg font-bold">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-black text-white mb-8">Browse By <span className="text-gradient">Category</span></h2>
        <GalleryGrid />
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-5xl w-full relative">
            <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-2xl" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 bg-black/60 rounded-xl px-4 py-2 backdrop-blur-sm">
              <p className="text-white font-medium">{lightbox.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
