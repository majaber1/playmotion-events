import { useState } from 'react'
import { galleryImages } from '../data/products'

const allCategories = ['All', ...new Set(galleryImages.map(img => img.category))]

export default function GalleryGrid({ limit }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = galleryImages
    .filter(img => activeCategory === 'All' || img.category === activeCategory)
    .slice(0, limit || undefined)

  return (
    <div>
      {/* Filter */}
      {!limit && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-[#00d4ff] text-[#0a0e1a]'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((img) => (
          <div
            key={img.id}
            className="group relative rounded-xl overflow-hidden cursor-pointer aspect-square"
            onClick={() => setLightbox(img)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-white text-sm font-medium">{img.alt}</p>
              <p className="text-[#00d4ff] text-xs">{img.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full relative">
            <img src={lightbox.src} alt={lightbox.alt} className="w-full rounded-2xl" />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 bg-black/60 rounded-xl px-4 py-2 backdrop-blur-sm">
              <p className="text-white font-medium">{lightbox.alt}</p>
              <p className="text-[#00d4ff] text-sm">{lightbox.category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
