import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

const SERVICES = [
  'Residential Property', 'Luxury Apartment', 'Builder Floor',
  'Commercial Real Estate', 'Investment Advisory', 'Construction / House Building',
  'Distress Deal', 'Land Opportunity', 'Other',
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus]   = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        { ...form, to_name: 'Sri Sri Homz' },
        'YOUR_PUBLIC_KEY',
      )
      setStatus('success')
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(196,120,86,0.3)',
    padding: '12px 2px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14, fontWeight: 300,
    color: '#F5EEE4',
    outline: 'none',
    transition: 'border-color 0.3s',
    appearance: 'none',
    borderRadius: 0,
  }

  return (
    <div style={{
      background: '#F5EEE4',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gold glow */}
      <div style={{
        position: 'absolute', bottom: -100, right: -100,
        width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(196,120,86,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '80px',
        }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ marginBottom: 24 }}
            >
              Get In Touch
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 400, lineHeight: 1.1,
                color: '#14100D', marginBottom: 12,
              }}
            >
              Let's Build Your<br />
              <span style={{ fontStyle: 'italic', color: '#C47856' }}>Future Together</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                width: 60, height: 1,
                background: 'linear-gradient(90deg, #C47856, transparent)',
                transformOrigin: 'left',
                marginBottom: 36,
              }}
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 15, fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(20,16,13,0.65)',
                marginBottom: 52,
              }}
            >
              Whether you are buying a dream property, building your own home,
              investing for long-term wealth, or exploring premium opportunities
              in Delhi NCR — we are here to guide you at every step.
            </motion.p>

            {/* Contact details */}
            {[
              { Icon: Phone, label: 'Phone', value: '098100 12254 / 080627 57621', href: 'tel:+919810012254' },
              { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/919810012254' },
              { Icon: Mail, label: 'Email', value: 'info@srisrihomz.com', href: 'mailto:info@srisrihomz.com' },
              { Icon: MapPin, label: 'Address', value: 'B-24, Rampuri, Block B, Surya Nagar, Ghaziabad, Uttar Pradesh 201011', href: null },
              { Icon: Clock, label: 'Hours', value: '10:00 AM – 07:30 PM · All Days Open', href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}
              >
                <div style={{
                  width: 44, height: 44, flexShrink: 0,
                  borderRadius: '50%',
                  background: 'rgba(196,120,86,0.08)',
                  border: '1px solid rgba(196,120,86,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <item.Icon size={18} color="#C47856" strokeWidth={1.75} />
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(196,120,86,0.6)', marginBottom: 2,
                  }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" data-cursor style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 15, fontWeight: 400,
                      color: 'rgba(20,16,13,0.72)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,16,13,0.72)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 15, fontWeight: 400,
                      lineHeight: 1.5,
                      color: 'rgba(20,16,13,0.72)',
                    }}>
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={onSubmit}
              style={{
                background: '#14100D',
                border: '1px solid rgba(196,120,86,0.2)',
                padding: 'clamp(28px,4vw,52px)',
                display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              <p style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 24, fontWeight: 400,
                color: '#F5EEE4', marginBottom: 8,
              }}>
                Book a Free Consultation
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input
                  name="name" value={form.name} onChange={onChange} required
                  placeholder="Full Name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C47856'}
                  onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.2)'}
                />
                <input
                  name="phone" value={form.phone} onChange={onChange} required
                  placeholder="Phone Number"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C47856'}
                  onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.2)'}
                />
              </div>

              <input
                name="email" value={form.email} onChange={onChange} type="email"
                placeholder="Email Address"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#C47856'}
                onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.2)'}
              />

              <select
                name="service" value={form.service} onChange={onChange} required
                style={{ ...inputStyle, color: form.service ? '#F5EEE4' : 'rgba(245,238,228,0.4)' }}
                onFocus={e => e.target.style.borderColor = '#C47856'}
                onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.2)'}
              >
                <option value="" style={{ background: '#14100D' }}>Select Service</option>
                {SERVICES.map(s => (
                  <option key={s} value={s} style={{ background: '#14100D' }}>{s}</option>
                ))}
              </select>

              <textarea
                name="message" value={form.message} onChange={onChange}
                placeholder="Tell us about your requirements..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                onFocus={e => e.target.style.borderColor = '#C47856'}
                onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.2)'}
              />

              <button type="submit" data-cursor disabled={loading}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
              </button>

              {status === 'success' && (
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13,
                  color: '#C47856', textAlign: 'center',
                  padding: '12px', border: '1px solid rgba(196,120,86,0.3)',
                }}>
                  Thank you! We'll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: 13,
                  color: '#F5EEE4', textAlign: 'center',
                  padding: '12px', border: '1px solid rgba(245,238,228,0.2)',
                }}>
                  Something went wrong. Please call us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          style={{
            marginTop: 72,
            border: '1px solid rgba(196,120,86,0.2)',
            filter: 'grayscale(0.4) contrast(1.05)',
          }}
        >
          <iframe
            title="Sri Sri Homz office location"
            src="https://www.google.com/maps?q=B-24+Rampuri+Block+B+Surya+Nagar+Ghaziabad+Uttar+Pradesh+201011&output=embed"
            width="100%"
            height="380"
            style={{ display: 'block', border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

    </div>
  )
}
