import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import VideoThumb from './VideoLightbox'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, delay, ease: [0.22,1,0.36,1] },
})

const TRUST = [
  { val: '500+', label: 'Happy Clients' },
  { val: '250+', label: 'Properties' },
  { val: '5+',   label: 'Years of Trust' },
  { val: '15+',  label: 'Awards Won' },
]

export default function About() {
  return (
    <div style={{
      background: '#F5EEE4',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle radial bg glow */}
      <div style={{
        position: 'absolute', left: '50%', top: 0,
        transform: 'translateX(-50%)',
        width: 900, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(196,120,86,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto 72px', textAlign: 'center', position: 'relative' }}>
        <motion.div {...fade(0)} className="section-label" style={{ justifyContent: 'center', marginBottom: 24 }}>
          About Sri Sri Homz
        </motion.div>

        <motion.h2 {...fade(0.1)} style={{
          fontFamily: 'Source Serif 4, serif',
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          fontWeight: 500, lineHeight: 1.1,
          color: '#14100D', marginBottom: 4,
        }}>
          Built on Truth.
        </motion.h2>
        <motion.h2 {...fade(0.17)} style={{
          fontFamily: 'Source Serif 4, serif',
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          fontWeight: 300, fontStyle: 'italic',
          lineHeight: 1.1, color: '#C47856',
        }}>
          Driven by Connection.
        </motion.h2>
      </div>

      {/* ── Video + story ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
          >
            <VideoThumb aspectRatio="4/3" playSize={64} label="Watch Our Story" />
          </motion.div>

          <div>
            <motion.h3 {...fade(0.1)} style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(26px, 2.8vw, 38px)',
              fontWeight: 500, lineHeight: 1.2,
              color: '#14100D', marginBottom: 24,
            }}>
              Divine Home, <span style={{ fontStyle: 'italic', color: '#C47856' }}>Divine People.</span>
            </motion.h3>

            <motion.p {...fade(0.2)} style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16, fontWeight: 300,
              lineHeight: 1.85, color: 'rgba(20,16,13,0.68)',
              marginBottom: 28,
            }}>
              Welcome to Sri Sri Homz — where real estate, construction, trust, and long-term
              wealth creation come together. Founded by Yashank Arora with one clear vision:
              to help people build wealth, homes, and a stronger future through honest,
              transparent, relationship-driven solutions.
            </motion.p>

            <motion.div {...fade(0.28)} style={{ display: 'flex', gap: 24, marginBottom: 32 }}>
              {['RERA Approved', 'HRERA Approved'].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%',
                    background: '#C47856',
                    boxShadow: '0 0 8px rgba(196,120,86,0.7)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(20,16,13,0.6)',
                    whiteSpace: 'nowrap',
                  }}>
                    {b}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div {...fade(0.35)}>
              <Link to="/about" data-cursor className="btn-gold">
                <span>Know More</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Trust bar ── */}
        <div className="about-trust-row" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          gap: 0, marginTop: 88,
        }}>
          {TRUST.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              style={{
                textAlign: 'center',
                padding: '0 40px',
                borderLeft: i > 0 ? '1px solid rgba(196,120,86,0.15)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(30px, 3vw, 42px)',
                fontWeight: 400, color: '#C47856', lineHeight: 1,
              }}>
                {s.val}
              </div>
              <div style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#8C7F72', marginTop: 10,
              }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CTAs — centered ── */}
        <motion.div {...fade(0.2)} style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          justifyContent: 'center', marginTop: 56,
        }}>
          <Link to="/services" data-cursor className="btn-gold">
            <span>Our Services</span>
          </Link>
          <Link to="/contact" data-cursor className="btn-outline-gold">
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
