import { Link } from 'react-router-dom'

// Business contact details for PlayMotion Events.
const CONTACT = {
  email: 'info@playmotionevents.sa',
  phone: '+966 50 123 4567',
  whatsapp: 'https://wa.me/966501234567',
}

const footerLinks = {
  quickLinks: [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products / Games', path: '/products' },
    { name: 'Event Solutions', path: '/event-solutions' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Videos', path: '/videos' },
    { name: 'Reserve a Game', path: '/booking' },
    { name: 'Contact Us', path: '/contact' },
  ],
  experiences: [
    { name: 'MultiBall Experience', path: '/multiball' },
    { name: 'X-Wall Experience', path: '/x-wall' },
    { name: 'Soccer Table / Foosball', path: '/soccer-table' },
  ],
  perfectFor: [
    { name: 'Exhibitions', path: '/event-solutions' },
    { name: 'Corporate Activations', path: '/event-solutions' },
    { name: 'Mall Activations', path: '/event-solutions' },
    { name: 'Schools & Entertainment Zones', path: '/event-solutions' },
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
              PlayMotion Events is an interactive gaming technology partner for exhibitions, corporate activations, malls, schools, and entertainment zones across Saudi Arabia and the GCC.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {['Instagram', 'LinkedIn', 'YouTube', 'X'].map((social) => (
                <a
                  key={social}
              href={{ Instagram: 'https://instagram.com/playmotionevents', LinkedIn: 'https://linkedin.com/company/playmotion-events', YouTube: 'https://youtube.com/@playmotionevents', X: 'https://x.com/playmotionsa' }[social]}
                                target="_blank"
                                rel="noopener noreferrer"
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
                <li key={link.name}>
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

          {/* Experiences + Perfect For */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Our Experiences</h4>
            <ul className="space-y-2 mb-8">
              {footerLinks.experiences.map((link) => (
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
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">Perfect For</h4>
            <ul className="space-y-2">
              {footerLinks.perfectFor.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#ff6b00] text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#ff6b00]/40 group-hover:bg-[#ff6b00] transition-colors" />
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
                <p className="text-gray-400 text-sm">Riyadh, Saudi Arabia<br />Available across the GCC</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00d4ff]">📞</span>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-gray-400 hover:text-white text-sm transition-colors">{CONTACT.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#00d4ff]">✉️</span>
                <a href={`mailto:${CONTACT.email}`} className="text-gray-400 hover:text-white text-sm transition-colors">{CONTACT.email}</a>
              </div>
            </div>
            {/* WhatsApp */}
            <a
              href={CONTACT.whatsapp}
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
            Interactive Gaming Experiences for Events &amp; Exhibitions
          </p>
        </div>
      </div>
    </footer>
  )
}
