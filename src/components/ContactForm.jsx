import { useState } from 'react'

const eventTypes = ['Corporate Event', 'Mall Activation', 'School Event', 'Festival', 'Private Party', 'Exhibition', 'Other']
const cities = ['Riyadh', 'Jeddah', 'Dammam', 'Makkah', 'Madinah', 'Khobar', 'Tabuk', 'Other']

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', eventDate: '',
    eventType: '', city: '', product: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all text-sm"
  const labelClass = "block text-gray-400 text-sm font-medium mb-2"

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">🎉</div>
        <h3 className="text-2xl font-bold text-white mb-4">Request Received!</h3>
        <p className="text-gray-400 mb-8">We'll get back to you within 24 hours to discuss your event needs.</p>
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold hover:bg-[#1da851] transition-colors"
        >
          Chat on WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+966 5X XXX XXXX" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Event Date</label>
          <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Event Type *</label>
          <select name="eventType" value={form.eventType} onChange={handleChange} required className={inputClass}>
            <option value="">Select event type</option>
            {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>City</label>
          <select name="city" value={form.city} onChange={handleChange} className={inputClass}>
            <option value="">Select city</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Selected Product/Package</label>
        <input type="text" name="product" value={form.product} onChange={handleChange} placeholder="e.g. MultiBall Mini, Corporate Package..." className={inputClass} />
      </div>
      <div>
        <label className={labelClass}>Additional Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your event, expected attendance, special requirements..." className={inputClass + " resize-none"} />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <button type="submit" className="flex-1 btn-primary py-4 text-lg">
          Submit Request
        </button>
        <a
          href="https://wa.me/966500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] py-4 rounded-full font-bold hover:bg-[#25D366]/20 transition-all"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
          </svg>
          WhatsApp Us
        </a>
      </div>
    </form>
  )
}
