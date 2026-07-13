const colorMap = {
  blue: { text: 'text-[#00d4ff]', bg: 'bg-[#00d4ff]/20', border: 'border-[#00d4ff]/40' },
  green: { text: 'text-[#00ff88]', bg: 'bg-[#00ff88]/20', border: 'border-[#00ff88]/40' },
  orange: { text: 'text-[#ff6b00]', bg: 'bg-[#ff6b00]/20', border: 'border-[#ff6b00]/40' },
  purple: { text: 'text-[#a855f7]', bg: 'bg-[#a855f7]/20', border: 'border-[#a855f7]/40' },
  pink: { text: 'text-[#ec4899]', bg: 'bg-[#ec4899]/20', border: 'border-[#ec4899]/40' },
  cyan: { text: 'text-[#22d3ee]', bg: 'bg-[#22d3ee]/20', border: 'border-[#22d3ee]/40' },
  yellow: { text: 'text-[#eab308]', bg: 'bg-[#eab308]/20', border: 'border-[#eab308]/40' },
}

export default function ExperienceCard({ category }) {
  const { name, logo, image, description, color = 'blue' } = category
  const c = colorMap[color] || colorMap.blue

  return (
    <div className="card-glass rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col">
      <div className="relative h-52 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent" />
        <div className={`absolute top-3 left-3 w-12 h-12 rounded-xl ${c.bg} border ${c.border} ${c.text} flex items-center justify-center font-black text-lg backdrop-blur-sm`}>
          {logo}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00d4ff] transition-colors">{name}</h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
      </div>
    </div>
  )
}
