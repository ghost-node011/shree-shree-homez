import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com'

const HIGHLIGHTS = [
  { val: '500+', label: 'Happy Families' },
  { val: '5+',   label: 'Years of Trust' },
]

export default function Hero() {
  const formRef = useRef(null)
  const [form, setForm]       = useState({ name: '', phone: '' })
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
      setForm({ name: '', phone: '' })
    } catch {
      setStatus('error')
    }
    setLoading(false)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(196,120,86,0.3)',
    padding: '14px 16px',
    fontFamily: 'Inter, sans-serif',
    fontSize: 14, fontWeight: 300,
    color: '#F5EEE4',
    outline: 'none',
    transition: 'border-color 0.3s',
    appearance: 'none',
    borderRadius: 0,
  }

  return (
    <div className="hero-stage" style={{
      position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden',
    }}>
      {/* ── Shared full-bleed photo — visible through the glass panel on desktop ── */}
      <div className="hero-media" style={{ position: 'absolute', inset: 0 }}>
        <picture>
          <source media="(max-width: 900px)" srcSet="/mobile-hero.png" />
          <img
            src="/laptop-hero.png"
            alt="Delhi NCR skyline"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              display: 'block',
            }}
          />
        </picture>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,7,5,0.55) 0%, transparent 35%)',
        }} />
      </div>

      {/* ── Left — translucent glass registration panel ── */}
      <div className="hero-form-panel" style={{
        position: 'absolute', top: 0, left: 0, bottom: 0,
        width: 'clamp(400px, 40vw, 560px)',
        background: 'linear-gradient(160deg, rgba(28,21,18,0.5) 0%, rgba(20,16,13,0.58) 65%, rgba(10,7,5,0.68) 100%)',
        backdropFilter: 'blur(3px) saturate(120%)',
        WebkitBackdropFilter: 'blur(3px) saturate(120%)',
        padding: `clamp(110px,14vh,150px) clamp(32px,4vw,64px) 48px`,
        display: 'flex', flexDirection: 'column',
        zIndex: 2,
        clipPath: 'polygon(0 0, 100% 0, 88% 100%, 0% 100%)',
        overflowY: 'auto',
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22,1,0.36,1] }}
          className="section-label"
          style={{ marginBottom: 20, color: '#E2AB89' }}
        >
          Real Estate · Construction
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22,1,0.36,1] }}
          style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(38px, 4.2vw, 58px)',
            fontWeight: 500, lineHeight: 0.98,
            letterSpacing: '-0.01em',
            color: '#F5EEE4', margin: 0,
          }}
        >
          Sri Sri <span style={{ fontWeight: 300, fontStyle: 'italic', color: '#C47856' }}>Homz</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 15, fontWeight: 300,
            lineHeight: 1.7,
            color: 'rgba(245,238,228,0.6)',
            marginTop: 18, marginBottom: 28,
            maxWidth: 400,
          }}
        >
          Divine Home, Divine People. Honest guidance for buying, building
          and investing in Delhi NCR real estate.
        </motion.p>

        {/* Highlight badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: 12, marginBottom: 32 }}
        >
          {HIGHLIGHTS.map((h, i) => (
            <div key={i} style={{
              flex: 1,
              border: '1px solid rgba(196,120,86,0.35)',
              background: 'rgba(196,120,86,0.08)',
              padding: '14px 12px',
              textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 24, fontWeight: 500,
                color: '#E2AB89', lineHeight: 1,
              }}>
                {h.val}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 9, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(245,238,228,0.55)', marginTop: 6,
              }}>
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Lead form */}
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#E2AB89', marginBottom: 2,
          }}>
            Get a Free Consultation
          </p>
          <input
            name="name" value={form.name} onChange={onChange} required
            placeholder="Your Name"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#C47856'}
            onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.3)'}
          />
          <input
            name="phone" value={form.phone} onChange={onChange} required
            placeholder="Phone Number"
            style={inputStyle}
            onFocus={e => e.target.style.borderColor = '#C47856'}
            onBlur={e => e.target.style.borderColor = 'rgba(196,120,86,0.3)'}
          />
          <button type="submit" data-cursor disabled={loading}
            className="btn-gold"
            style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1, marginTop: 4 }}
          >
            <span>{loading ? 'Sending...' : 'Register Now'}</span>
          </button>

          {status === 'success' && (
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#C47856' }}>
              Thank you! We'll call you shortly.
            </p>
          )}
          {status === 'error' && (
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: 'rgba(245,238,228,0.6)' }}>
              Something went wrong — call us at 09810012254.
            </p>
          )}
        </motion.form>

        <Link to="/services" data-cursor style={{
          marginTop: 28,
          fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'rgba(245,238,228,0.55)',
          borderBottom: '1px solid rgba(196,120,86,0.35)',
          paddingBottom: 4, alignSelf: 'flex-start',
          textDecoration: 'none',
        }}>
          Explore Services →
        </Link>
      </div>

      {/* Floating trust strip — over the open photo area, clear of the form panel and chatbot */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="hero-stats"
        style={{
          position: 'absolute', zIndex: 1,
          left: 'clamp(420px,42vw,590px)', bottom: 'clamp(80px,12vh,130px)',
          display: 'flex', gap: 0,
        }}
      >
        {[
          { val: '250+', label: 'Properties' },
          { val: '15+',  label: 'Awards Won' },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: 'center', padding: '0 24px',
            borderLeft: i > 0 ? '1px solid rgba(196,120,86,0.3)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(26px, 2.6vw, 38px)',
              fontWeight: 400, color: '#F5EEE4', lineHeight: 1,
            }}>
              {s.val}
            </div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 9, fontWeight: 500,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'rgba(245,238,228,0.65)', marginTop: 6,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .hero-stage { min-height: auto !important; display: flex; flex-direction: column; }
          .hero-media { position: relative !important; inset: auto !important; width: 100%; height: 46vh; min-height: 320px; order: 1; }
          .hero-form-panel {
            position: relative !important; inset: auto !important;
            width: 100% !important; clip-path: none !important;
            background: linear-gradient(160deg, #1C1512 0%, #14100D 70%, #0A0705 100%) !important;
            backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
            padding: 48px clamp(24px,6vw,64px) !important;
            order: 2;
          }
          .hero-stats { display: none !important; }
        }
      `}</style>
    </div>
  )
}
