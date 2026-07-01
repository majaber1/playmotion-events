import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const { id, name, category, image, shortDescription, bestFor, indoor, outdoor, setupTime, recommendedAge, featured } = product

  return (
    <div className="card-glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
        {featured && (
          <div className="absolute top-3 right-3 bg-[#ff6b00] text-white text-xs font-bold px-3 py-1 rounded-full">Featured</div>
        )}
        <div className="absolute bottom-3 left-3">
          <span className="bg-[#00d4ff]/20 border border-[#00d4ff]/40 text-[#00d4ff] text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">{category}</span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00d4ff] transition-colors">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{shortDescription}</p>
        <div className="grid grid-cols-2 gap-2 mb-5 text-xs">
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-500 mb-0.5">Best For</div>
            <div className="text-gray-200 font-medium line-clamp-1">{bestFor}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-500 mb-0.5">Age</div>
            <div className="text-gray-200 font-medium">{recommendedAge}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-500 mb-0.5">Setup</div>
            <div className="text-gray-200 font-medium">{setupTime}</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2">
            <div className="text-gray-500 mb-0.5">Location</div>
            <div className="text-gray-200 font-medium">{indoor && outdoor ? 'In/Outdoor' : indoor ? 'Indoor' : 'Outdoor'}</div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link to={`/products/${id}`} className="flex-1 text-center bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/30 text-sm py-2.5 rounded-xl transition-all">
            View Details
          </Link>
          <Link to="/contact" className="flex-1 text-center bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0e1a] text-sm py-2.5 rounded-xl transition-all font-semibold">
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
