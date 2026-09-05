import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com'
import { Clock, Phone, Mail, MapPin } from 'lucide-react'

const INFO = [
  { Icon: Clock,  value: 'Monday - Saturday, 10:00 AM - 07:30 PM' },
  { Icon: Phone,  value: '098100 12254', href: 'tel:+919810012254' },
  { Icon: Mail,   value: 'info@srisrihomz.com', href: 'mailto:info@srisrihomz.com' },
  { Icon: MapPin, value: 'B-24, Rampuri, Block B, Surya Nagar,\nGhaziabad, Uttar Pradesh 201011' },
]

const REQUIREMENTS = [
  'Buy a Property', 'Sell a Property', 'Investment Advisory',
  'Construction / House Building', 'Something Else',
]

export default function GetInTouchContact() {
  const [form, setForm]       = useState({ name: '', email: '', phone: '', requirement: '' })
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
      setForm({ name: '', email: '', phone: '', requirement: '' })
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid rgba(0,43,66,0.2)',
    padding: '10px 2px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14, fontWeight: 400,
    color: '#002B42',
    outline: 'none',
    transition: 'border-color 0.3s',
    appearance: 'none',
    borderRadius: 0,
  }

  const fieldLabel = {
    fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500,
    color: '#002B42', marginBottom: 6, display: 'block',
  }

  return (
    <div style={{
      background: '#FFFFFF',
      padding: '100px clamp(24px,6vw,120px)',
    }}>
      <div className="get-in-touch-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64,
      }}>
        {/* Left — Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="get-in-touch-col"
          style={{ borderRight: '1px solid rgba(0,43,66,0.12)', paddingRight: 56 }}
        >
          <h2 style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 500, color: '#002B42', marginBottom: 24,
          }}>
            Get in Touch
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(0,43,66,0.65)', marginBottom: 18,
          }}>
            At Sri Sri Homz, we are more than just a real estate company. We are
            rooted in honesty, guided by relationships, and committed to serving
            our clients with transparency at every step.
          </p>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300,
            lineHeight: 1.8, color: 'rgba(0,43,66,0.65)', marginBottom: 32,
          }}>
            Whether you're searching for a new home, building an independent
            house, or exploring investment opportunities in Delhi NCR, we're
            here to walk this journey with you — every step of the way.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {INFO.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <item.Icon size={18} color="#F9A819" strokeWidth={1.75} style={{ marginTop: 2, flexShrink: 0 }} />
                {item.href ? (
                  <a href={item.href} data-cursor style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 400,
                    color: 'rgba(0,43,66,0.75)', textDecoration: 'none', whiteSpace: 'pre-line',
                  }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 400,
                    color: 'rgba(0,43,66,0.75)', lineHeight: 1.6, whiteSpace: 'pre-line',
                  }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Contact Us form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h2 style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(28px, 3vw, 40px)',
            fontWeight: 500, color: '#002B42', marginBottom: 14,
          }}>
            Contact Us
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 300,
            lineHeight: 1.7, color: 'rgba(0,43,66,0.65)', marginBottom: 32,
          }}>
            Have a question or ready to get started? Fill out the form below
            and our team will be in touch shortly.
          </p>

          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div>
              <label style={fieldLabel}>Name *</label>
              <input
                name="name" value={form.name} onChange={onChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = '#F9A819'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,43,66,0.2)'}
              />
            </div>

            <div className="contact-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
              <div>
                <label style={fieldLabel}>Email *</label>
                <input
                  name="email" value={form.email} onChange={onChange} type="email" required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#F9A819'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,43,66,0.2)'}
                />
              </div>
              <div>
                <label style={fieldLabel}>Phone *</label>
                <input
                  name="phone" value={form.phone} onChange={onChange} required
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#F9A819'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0,43,66,0.2)'}
                />
              </div>
            </div>

            <div>
              <label style={fieldLabel}>What is your requirement? *</label>
              <select
                name="requirement" value={form.requirement} onChange={onChange} required
                style={{ ...inputStyle, color: form.requirement ? '#002B42' : 'rgba(0,43,66,0.4)' }}
                onFocus={e => e.target.style.borderColor = '#F9A819'}
                onBlur={e => e.target.style.borderColor = 'rgba(0,43,66,0.2)'}
              >
                <option value="">Select an option</option>
                {REQUIREMENTS.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            <button type="submit" data-cursor disabled={loading}
              className="btn-gold"
              style={{ alignSelf: 'flex-start', opacity: loading ? 0.7 : 1, marginTop: 8 }}
            >
              <span>{loading ? 'Sending...' : 'Submit'}</span>
            </button>

            {status === 'success' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#F9A819' }}>
                Thank you! We'll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(0,43,66,0.6)' }}>
                Something went wrong — call us at 098100 12254.
              </p>
            )}
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .get-in-touch-grid { grid-template-columns: 1fr !important; }
          .get-in-touch-col { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid rgba(0,43,66,0.12); padding-bottom: 48px !important; margin-bottom: 8px; }
        }
        @media (max-width: 480px) {
          .contact-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
