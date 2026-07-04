import SEO from '../components/SEO'
import ContactForm from '../components/ContactForm'

// TODO: Replace these placeholder contact details with your real business info.
const CONTACT = {
  address: 'Riyadh, Saudi Arabia',
  phone: '+966 50 000 0000',
  email: 'info@playmotion-events.com',
  whatsapp: 'https://wa.me/966500000000',
}

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with PlayMotion Events to plan interactive gaming experiences for your exhibition, corporate event, mall activation, or school event."
        path="/contact"
      />

      <div className="pt-32 pb-16 bg-gradient-to-br from-[#0d1221] to-[#0a0e1a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="section-subtitle">Contact Us</div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Let's Talk About <span className="text-gradient">Your Event</span></h1>
          <p className="text-gray-300 text-xl max-w-3xl">
            Questions about MultiBall, X-Wall, Soccer Table, or which setup fits your venue? Reach out and our team will respond quickly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="text-white font-bold mb-1">Location</h3>
              <p className="text-gray-400 text-sm">{CONTACT.address}<br />Available across the GCC</p>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="text-white font-bold mb-1">Phone</h3>
              <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="text-gray-400 text-sm hover:text-white">{CONTACT.phone}</a>
            </div>
            <div className="card-glass rounded-2xl p-6">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="text-white font-bold mb-1">Email</h3>
              <a href={`mailto:${CONTACT.email}`} className="text-gray-400 text-sm hover:text-white">{CONTACT.email}</a>
            </div>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold hover:bg-[#1da851] transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 card-glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-black text-white mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  )
}
