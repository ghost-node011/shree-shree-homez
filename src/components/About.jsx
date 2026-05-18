import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, delay, ease: [0.22,1,0.36,1] },
})

export default function About() {
  return (
    <div style={{
      background: 'linear-gradient(160deg, #060D18 0%, #0A1628 60%, #060D18 100%)',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle radial bg glow */}
      <div style={{
        position: 'absolute', right: -120, top: '30%',
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: '80px', alignItems: 'center',
      }}>

        {/* ── LEFT: Text ── */}
        <div>
          <motion.div {...fade(0)} className="section-label" style={{ marginBottom: 24 }}>
            About Sri Sri Homz
          </motion.div>

          <motion.h2 {...fade(0.1)} style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 500, lineHeight: 1.08,
            color: '#F5F0E8', marginBottom: 4,
          }}>
            Built on Truth.
          </motion.h2>
          <motion.h2 {...fade(0.17)} style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(36px, 4.5vw, 64px)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.08, color: '#C9A84C', marginBottom: 32,
          }}>
            Driven by Connection.
          </motion.h2>

          <motion.div {...fade(0.24)} style={{
            width: 56, height: 1,
            background: 'linear-gradient(90deg, #C9A84C, transparent)',
            marginBottom: 32,
          }} />

          <motion.p {...fade(0.3)} style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 16, fontWeight: 300,
            lineHeight: 1.85, color: 'rgba(245,240,232,0.65)',
            marginBottom: 22,
          }}>
            Welcome to Sri Sri Homz — where real estate, construction, trust, and
            long-term wealth creation come together. Founded by Yashank Arora with
            one clear vision: to help people build wealth, homes, and a stronger
            future through honest real estate and construction solutions.
          </motion.p>

          <motion.p {...fade(0.36)} style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: 16, fontWeight: 300,
            lineHeight: 1.85, color: 'rgba(245,240,232,0.48)',
            marginBottom: 48,
          }}>
            In a market filled with confusion and pressure selling, we believe
            property decisions should be transparent, strategic, and
            relationship-driven.
          </motion.p>

          <motion.div {...fade(0.42)} style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              data-cursor className="btn-gold"
            >
              <span>Our Services</span>
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-cursor className="btn-outline-gold"
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* ── RIGHT: Logo frame — rectangular, elegant ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative', width: 'min(440px, 100%)' }}>

            {/* ── Outer decorative frame ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              style={{
                position: 'absolute',
                top: -20, left: -20, right: -20, bottom: -20,
                border: '1px solid rgba(201,168,76,0.12)',
                pointerEvents: 'none',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.35 }}
              style={{
                position: 'absolute',
                top: -8, left: -8, right: -8, bottom: -8,
                border: '1px solid rgba(201,168,76,0.06)',
                pointerEvents: 'none',
              }}
            />

            {/* ── Corner accent lines ── */}
            {[
              { top: -20, left: -20 },
              { top: -20, right: -20 },
              { bottom: -20, left: -20 },
              { bottom: -20, right: -20 },
            ].map((pos, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                style={{ position: 'absolute', ...pos, width: 48, height: 48, pointerEvents: 'none' }}
              >
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 1, background: '#C9A84C', opacity: 0.6,
                }} />
                <div style={{
                  position: 'absolute', top: 0, left: 0, bottom: 0,
                  width: 1, background: '#C9A84C', opacity: 0.6,
                }} />
              </motion.div>
            ))}

            {/* ── Logo image — rectangular display ── */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(6,13,24,0.4)',
                border: '1px solid rgba(201,168,76,0.2)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <img
                src="/logo-bg.png"
                alt="Sri Sri Homz"
                style={{
                  width: '100%',
                  display: 'block',
                  objectFit: 'contain',
                }}
                onError={e => { e.target.src = '/logo-bg.png' }}
              />
              {/* Subtle gold shimmer overlay on hover */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, rgba(201,168,76,0.04) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />
            </motion.div>

            {/* ── RERA / HRERA badges below ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              style={{
                display: 'flex', gap: 0, marginTop: 0,
              }}
            >
              {['RERA Approved', 'HRERA Approved'].map((b, i) => (
                <div key={i} style={{
                  flex: 1,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  background: 'rgba(6,13,24,0.8)',
                  border: '1px solid rgba(201,168,76,0.2)',
                  borderTop: 'none',
                  borderLeft: i > 0 ? 'none' : '1px solid rgba(201,168,76,0.2)',
                  padding: '14px 20px',
                }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#C9A84C',
                    boxShadow: '0 0 8px rgba(201,168,76,0.7)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 9.5, fontWeight: 600,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.75)',
                  }}>
                    {b}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* ── Tagline below badges ── */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{
                marginTop: 24,
                textAlign: 'center',
              }}
            >
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 15, fontStyle: 'italic',
                color: 'rgba(201,168,76,0.5)',
                letterSpacing: '0.04em',
              }}>
                "Built on Truth. Driven by Connection."
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
