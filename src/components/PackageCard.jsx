import { Link } from 'react-router-dom'

export default function PackageCard({ pkg, featured = false }) {
  const { name, price, description, features, badge, color = 'blue' } = pkg

  const colors = {
    blue: { accent: '#00d4ff', border: 'border-[#00d4ff]/30', bg: 'bg-[#00d4ff]/10', btn: 'bg-[#00d4ff] text-[#0a0e1a]' },
    green: { accent: '#00ff88', border: 'border-[#00ff88]/30', bg: 'bg-[#00ff88]/10', btn: 'bg-[#00ff88] text-[#0a0e1a]' },
    orange: { accent: '#ff6b00', border: 'border-[#ff6b00]/30', bg: 'bg-[#ff6b00]/10', btn: 'bg-[#ff6b00] text-white' },
  }
  const c = colors[color] || colors.blue

  return (
    <div className={`relative rounded-2xl border ${c.border} ${c.bg} p-8 flex flex-col ${featured ? 'scale-105 shadow-2xl' : ''} transition-all hover:scale-[1.02]`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#ff6b00] text-white text-xs font-bold px-4 py-1.5 rounded-full">
          Most Popular
        </div>
      )}
      {badge && (
        <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${c.bg} border ${c.border} mb-4`} style={{color: c.accent}}>
          {badge}
        </div>
      )}
      <h3 className="text-2xl font-black text-white mb-2">{name}</h3>
      {price && <div className="text-4xl font-black mb-1" style={{color: c.accent}}>{price}</div>}
      <p className="text-gray-400 text-sm mb-6">{description}</p>
      <ul className="space-y-3 flex-1 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="text-lg mt-0.5" style={{color: c.accent}}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`block text-center py-3 px-6 rounded-xl font-bold ${c.btn} hover:opacity-90 transition-all`}
      >
        Request This Package
      </Link>
    </div>
  )
}
