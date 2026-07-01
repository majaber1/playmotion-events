import { Link } from 'react-router-dom'

export default function Hero({ 
  title, 
  subtitle, 
  description, 
  primaryCta, 
  secondaryCta,
  badge,
  image,
  overlay = true
}) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {image ? (
          <>
            <img src={image} alt="Hero background" className="w-full h-full object-cover" />
            {overlay && <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-[#0a0e1a]/50" />}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#0a0e1a] via-[#0d1221] to-[#0a0e1a]">
            {/* Animated grid */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)',
                backgroundSize: '60px 60px'
              }} 
            />
            {/* Glow orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#ff6b00]/5 rounded-full blur-2xl" />
          </div>
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 bg-[#00d4ff]/10 border border-[#00d4ff]/30 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="text-[#00d4ff] text-sm font-semibold tracking-wide">{badge}</span>
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
            {title}
          </h1>
          
          {subtitle && (
            <h2 className="text-xl md:text-2xl text-gradient font-bold mb-4">{subtitle}</h2>
          )}
          
          {description && (
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4">
            {primaryCta && (
              <Link to={primaryCta.href} className="btn-primary text-center text-lg py-4 px-10">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link to={secondaryCta.href} className="btn-secondary text-center text-lg py-4 px-10">
                {secondaryCta.label}
              </Link>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/10">
            {[
              { value: '500+', label: 'Events Served' },
              { value: '12+', label: 'Game Systems' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-black text-gradient">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-[#00d4ff] to-transparent animate-pulse" />
      </div>
    </section>
  )
}
