import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'

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
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(201,168,76,0.2)',
    padding: '16px 20px',
    fontFamily: 'Outfit, sans-serif',
    fontSize: 14, fontWeight: 300,
    color: '#F5F0E8',
    outline: 'none',
    transition: 'border-color 0.3s',
    appearance: 'none',
  }

  return (
    <div style={{
      background: '#030810',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gold glow */}
      <div style={{
        position: 'absolute', bottom: -100, right: -100,
        width: 500, height: 500,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
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
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(34px, 4vw, 56px)',
                fontWeight: 400, lineHeight: 1.1,
                color: '#F5F0E8', marginBottom: 12,
              }}
            >
              Let's Build Your<br />
              <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Future Together</span>
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              style={{
                width: 60, height: 1,
                background: 'linear-gradient(90deg, #C9A84C, transparent)',
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
                fontFamily: 'Outfit, sans-serif',
                fontSize: 15, fontWeight: 300,
                lineHeight: 1.8,
                color: 'rgba(245,240,232,0.55)',
                marginBottom: 52,
              }}
            >
              Whether you are buying a dream property, building your own home,
              investing for long-term wealth, or exploring premium opportunities
              in Delhi NCR — we are here to guide you at every step.
            </motion.p>

            {/* Contact details */}
            {[
              { icon: '📞', label: 'Phone', value: '+91 XXXXX XXXXX', href: 'tel:+91XXXXXXXXXX' },
              { icon: '💬', label: 'WhatsApp', value: 'Chat with us', href: 'https://wa.me/91XXXXXXXXXX' },
              { icon: '✉️', label: 'Email', value: 'info@srisrihomz.com', href: 'mailto:info@srisrihomz.com' },
              { icon: '📍', label: 'Location', value: 'Delhi NCR, India', href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}
              >
                <div style={{
                  width: 44, height: 44,
                  border: '1px solid rgba(201,168,76,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.6)', marginBottom: 2,
                  }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a href={item.href} data-cursor style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 15, fontWeight: 400,
                      color: 'rgba(245,240,232,0.75)',
                      textDecoration: 'none',
                      transition: 'color 0.3s',
                    }}
                      onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.75)'}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: 15, fontWeight: 400,
                      color: 'rgba(245,240,232,0.75)',
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
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.15)',
                padding: 'clamp(28px,4vw,52px)',
                display: 'flex', flexDirection: 'column', gap: 20,
              }}
            >
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 24, fontWeight: 400,
                color: '#F5F0E8', marginBottom: 8,
              }}>
                Book a Free Consultation
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input
                  name="name" value={form.name} onChange={onChange} required
                  placeholder="Full Name"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
                <input
                  name="phone" value={form.phone} onChange={onChange} required
                  placeholder="Phone Number"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#C9A84C'}
                  onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
                />
              </div>

              <input
                name="email" value={form.email} onChange={onChange} type="email"
                placeholder="Email Address"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#C9A84C'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />

              <select
                name="service" value={form.service} onChange={onChange} required
                style={{ ...inputStyle, color: form.service ? '#F5F0E8' : 'rgba(245,240,232,0.35)' }}
                onFocus={e => e.target.style.borderColor = '#C9A84C'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              >
                <option value="" style={{ background: '#060D18' }}>Select Service</option>
                {SERVICES.map(s => (
                  <option key={s} value={s} style={{ background: '#060D18' }}>{s}</option>
                ))}
              </select>

              <textarea
                name="message" value={form.message} onChange={onChange}
                placeholder="Tell us about your requirements..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }}
                onFocus={e => e.target.style.borderColor = '#C9A84C'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,168,76,0.2)'}
              />

              <button type="submit" data-cursor disabled={loading}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
              >
                <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
              </button>

              {status === 'success' && (
                <p style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: 13,
                  color: '#C9A84C', textAlign: 'center',
                  padding: '12px', border: '1px solid rgba(201,168,76,0.3)',
                }}>
                  Thank you! We'll be in touch shortly.
                </p>
              )}
              {status === 'error' && (
                <p style={{
                  fontFamily: 'Outfit, sans-serif', fontSize: 13,
                  color: '#F5F0E8', textAlign: 'center',
                  padding: '12px', border: '1px solid rgba(245,240,232,0.2)',
                }}>
                  Something went wrong. Please call us directly.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        data-cursor
        target="_blank" rel="noreferrer"
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 800,
          width: 56, height: 56,
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 26,
          boxShadow: '0 4px 24px rgba(37,211,102,0.4)',
          textDecoration: 'none',
          transition: 'transform 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(37,211,102,0.6)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(37,211,102,0.4)' }}
      >
        💬
      </a>
    </div>
  )
}
