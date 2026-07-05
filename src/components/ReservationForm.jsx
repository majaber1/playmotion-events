import { useState } from 'react'

const eventTypes = [
  'Exhibition', 'Corporate Activation', 'Conference', 'Mall Activation',
  'School Event', 'Sports Day', 'Entertainment Zone', 'Private Event', 'Other',
]
const games = ['MultiBall', 'X-Wall', 'Soccer Table', 'AR/VR Experience', 'Hologram Display', 'AI Photo Booth', 'Gamification Zone', 'Full Package']

export default function ReservationForm({ defaultGame = '' }) {
  const [form, setForm] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    eventType: '',
    eventLocation: '',
    eventDate: '',
    eventDuration: '',
    expectedVisitors: '',
    game: defaultGame,
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')

    // =====================================================================
    // TODO: Connect this form to a real backend or email service.
    //
    // Option 1 - Formspree (no backend code needed):
    //   1. Create a form at https://formspree.io and copy your endpoint URL.
    //   2. Uncomment the fetch call below and replace YOUR_FORM_ID.
    //
    //   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //
    // Option 2 - EmailJS (sends email directly from the browser):
    //   npm install @emailjs/browser
    //   import emailjs from '@emailjs/browser'
    //   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //
    // Option 3 - Your own serverless function / API route (Vercel or
    //   Netlify functions) that emails the PlayMotion Events team, e.g.
    //   POST this form data to /api/booking.
    // =====================================================================

    await new Promise((resolve) => setTimeout(resolve, 500)) // simulated delay
    setStatus('success')
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#00d4ff]/50 focus:bg-white/8 transition-all text-sm'
  const labelClass = 'block text-gray-400 text-sm font-medium mb-2'

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6">✅</div>
        <h3 className="text-2xl font-bold text-white mb-4">Booking Request Sent</h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Thank you. Our team will contact you shortly to confirm availability and pricing.
        </p>
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
          <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Company Name</label>
          <input type="text" name="companyName" value={form.companyName} onChange={handleChange} placeholder="Your company or organization" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Phone / WhatsApp *</label>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+966 5X XXX XXXX" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Event Type *</label>
          <select name="eventType" value={form.eventType} onChange={handleChange} required className={inputClass}>
            <option value="">Select event type</option>
            {eventTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Event Location / City *</label>
          <input type="text" name="eventLocation" value={form.eventLocation} onChange={handleChange} required placeholder="e.g. Riyadh, Jeddah, Dubai..." className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Event Date *</label>
          <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} required className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Event Duration</label>
          <input type="text" name="eventDuration" value={form.eventDuration} onChange={handleChange} placeholder="e.g. 1 day, 3 days, 8 hours..." className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Expected Number of Visitors</label>
          <input type="text" name="expectedVisitors" value={form.expectedVisitors} onChange={handleChange} placeholder="e.g. 200-500" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Choose Game *</label>
          <select name="game" value={form.game} onChange={handleChange} required className={inputClass}>
            <option value="">Select a game</option>
            {games.map((g) => (
              <option key={g} value={g}>{g}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className={labelClass}>Message / Special Request</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us more about your event and any special requirements..."
          className={inputClass + ' resize-none'}
        />
      </div>
      <button type="submit" disabled={status === 'submitting'} className="w-full btn-primary py-4 text-lg disabled:opacity-60">
        {status === 'submitting' ? 'Sending...' : 'Request Booking'}
      </button>
    </form>
  )
}
