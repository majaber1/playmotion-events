import { Link } from 'react-router-dom'

const footerLinks = {
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Mission & Vision', path: '/mission-vision' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ],
  categories: [
    { name: 'Interactive Sports Games', path: '/categories' },
    { name: 'Projection-Based Games', path: '/categories' },
    { name: 'Sensor-Based Games', path: '/categories' },
    { name: 'Kids Interactive Games', path: '/categories' },
    { name: 'Corporate Team-Building', path: '/categories' },
    { name: 'Carnival & Skill Games', path: '/categories' },
  ],
  events: [
    { name: 'Corporate Events', path: '/events' },
    { name: 'Malls & Retail', path: '/events' },
    { name: 'Schools & Universities', path: '/events' },
    { name: 'Festivals & Exhibitions', path: '/events' },
    { name: 'Private Celebrations', path: '/events' },
    { name: 'Packages', path: '/packages' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#060a12] border-t border-white/5 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d4ff] to-[#00ff88] flex items-center justify-center font-black text-[#0a0e1a] text-xl">
                PM
              </div>
              <div>
                <span className="text-white font-bold text-xl leading-tight">PlayMotion</span>
                <span className="block text-[#00d4ff] text-xs font-semibold tracking-wider">EVENTS</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Saudi Arabia's premier interactive game rental company for events, malls, festivals, schools, and corporate activations.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00d4ff] hover:border-[#00d4ff]/30 hover:bg-[#00d4ff]/10 transition-all text-xs font-bold"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#00d4ff] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00d4ff]/40 group-hover:bg-[#00d4ff] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#00ff88] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#00ff88]/40 group-hover:bg-[#00ff88] transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="text-[#00d4ff] mt-0.5">📍</span>
                <p className="text-gray-400 text-sm">Riyadh, Saudi Arabia<br />Available Nationwide</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00d4ff]">📞</span>
                <a href="tel:+966500000000" className="text-gray-400 hover:text-white text-sm transition-colors">+966 50 000 0000</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00d4ff]">✉️</span>
                <a href="mailto:info@playmotion.sa" className="text-gray-400 hover:text-white text-sm transition-colors">info@playmotion.sa</a>
              </div>
            </div>
            {/* WhatsApp */}
            <a
              href="https://wa.me/966500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#25D366]/20 transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.533 5.855L0 24l6.335-1.513A11.934 11.934 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.773 9.773 0 01-5.017-1.381l-.36-.214-3.76.897.936-3.639-.234-.374A9.768 9.768 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PlayMotion Events. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Interactive Game Rental Solutions — Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  )
}
