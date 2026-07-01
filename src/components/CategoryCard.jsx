import { Link } from 'react-router-dom'

const colorMap = {
  blue: { bg: 'bg-[#00d4ff]/10', border: 'border-[#00d4ff]/30', text: 'text-[#00d4ff]', glow: 'hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]' },
  green: { bg: 'bg-[#00ff88]/10', border: 'border-[#00ff88]/30', text: 'text-[#00ff88]', glow: 'hover:shadow-[0_0_20px_rgba(0,255,136,0.2)]' },
  orange: { bg: 'bg-[#ff6b00]/10', border: 'border-[#ff6b00]/30', text: 'text-[#ff6b00]', glow: 'hover:shadow-[0_0_20px_rgba(255,107,0,0.2)]' },
}

export default function CategoryCard({ category }) {
  const { name, icon, color = 'blue', description } = category
  const colors = colorMap[color] || colorMap.blue

  return (
    <Link
      to="/categories"
      className={`group block p-6 rounded-2xl border ${colors.bg} ${colors.border} ${colors.glow}
        hover:scale-[1.03] transition-all duration-300 cursor-pointer`}
    >
      <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform inline-block`}>{icon}</div>
      <h3 className={`font-bold text-lg mb-2 ${colors.text} group-hover:brightness-125 transition-all`}>{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      <div className={`mt-4 flex items-center gap-1 ${colors.text} text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity`}>
        <span>Explore</span>
        <span>→</span>
      </div>
    </Link>
  )
}
