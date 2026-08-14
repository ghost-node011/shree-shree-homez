import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

/* ─── Gold dust particles for the fallback panel ─── */
function FallbackParticles() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 26 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.1,
      vy: -(Math.random() * 0.2 + 0.05),
      a: Math.random() * 0.4 + 0.08,
    }))
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(201,168,76,${p.a})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
}

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

// Placeholder until a real Sri Sri Homz photo replaces /public/about.jpg
const STOCK_PHOTO = 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1600&q=80'

export default function About() {
  const [imgStage, setImgStage] = useState('local') // 'local' -> 'stock' -> 'abstract'
  const mediaRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <div style={{
      background: 'linear-gradient(160deg, #060D18 0%, #0A1628 60%, #060D18 100%)',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle radial bg glow */}
      <div style={{
        position: 'absolute', left: '50%', top: 0,
        transform: 'translateX(-50%)',
        width: 900, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto 72px', textAlign: 'center', position: 'relative' }}>
        <motion.div {...fade(0)} className="section-label" style={{ justifyContent: 'center', marginBottom: 24 }}>
          About Sri Sri Homz
        </motion.div>

        <motion.h2 {...fade(0.1)} style={{
          fontFamily: 'Caudex, serif',
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          fontWeight: 500, lineHeight: 1.1,
          color: '#F5F0E8', marginBottom: 4,
        }}>
          Built on Truth.
        </motion.h2>
        <motion.h2 {...fade(0.17)} style={{
          fontFamily: 'Caudex, serif',
          fontSize: 'clamp(36px, 4.5vw, 64px)',
          fontWeight: 300, fontStyle: 'italic',
          lineHeight: 1.1, color: '#C9A84C', marginBottom: 32,
        }}>
          Driven by Connection.
        </motion.h2>

        <motion.div {...fade(0.24)} style={{
          width: 56, height: 1, margin: '0 auto 32px',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }} />

        <motion.p {...fade(0.3)} style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 17, fontWeight: 300,
          lineHeight: 1.85, color: 'rgba(245,240,232,0.6)',
          maxWidth: 680, margin: '0 auto',
        }}>
          Welcome to Sri Sri Homz — where real estate, construction, trust, and long-term
          wealth creation come together. Founded by Yashank Arora with one clear vision:
          to help people build wealth, homes, and a stronger future through honest,
          transparent, relationship-driven solutions.
        </motion.p>
      </div>

      {/* ── Wide feature image banner ──
          Drop a signature property/office photo at /public/about.jpg and it takes over here.
          Until then, a stock placeholder renders; the abstract panel only shows if that also fails to load.
      ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1, ease: [0.22,1,0.36,1] }}
        style={{
          maxWidth: 1200, margin: '0 auto',
          position: 'relative',
        }}
      >
        <div
          ref={mediaRef}
          className="about-banner"
          style={{
            position: 'relative', overflow: 'hidden',
            aspectRatio: '21/9',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        >
          <motion.div style={{ y: imgY, position: 'absolute', inset: '-6% 0' }}>
            {imgStage !== 'abstract' ? (
              <img
                src={imgStage === 'local' ? '/about.jpg' : STOCK_PHOTO}
                alt="Sri Sri Homz"
                onError={() => setImgStage(s => s === 'local' ? 'stock' : 'abstract')}
                style={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
              />
            ) : (
              <div style={{
                position: 'relative', width: '100%', height: '100%',
                background: `
                  radial-gradient(circle at 25% 30%, rgba(201,168,76,0.1) 0%, transparent 45%),
                  linear-gradient(160deg, #0F2040 0%, #0A1628 55%, #060D18 100%)
                `,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {/* Faint architectural grid texture */}
                <div style={{
                  position: 'absolute', inset: 0,
                  backgroundImage: `
                    repeating-linear-gradient(0deg, rgba(201,168,76,0.05) 0px, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 64px),
                    repeating-linear-gradient(90deg, rgba(201,168,76,0.05) 0px, rgba(201,168,76,0.05) 1px, transparent 1px, transparent 64px)
                  `,
                }} />

                <FallbackParticles />

                {/* Corner brackets */}
                {[
                  { top: 24, left: 24 },
                  { top: 24, right: 24 },
                  { bottom: 24, left: 24 },
                  { bottom: 24, right: 24 },
                ].map((pos, i) => (
                  <div key={i} style={{ position: 'absolute', ...pos, width: 28, height: 28 }}>
                    <div style={{
                      position: 'absolute',
                      ...(pos.top !== undefined ? { top: 0 } : { bottom: 0 }),
                      ...(pos.left !== undefined ? { left: 0 } : { right: 0 }),
                      width: '100%', height: 1, background: 'rgba(201,168,76,0.45)',
                    }} />
                    <div style={{
                      position: 'absolute',
                      ...(pos.top !== undefined ? { top: 0 } : { bottom: 0 }),
                      ...(pos.left !== undefined ? { left: 0 } : { right: 0 }),
                      height: '100%', width: 1, background: 'rgba(201,168,76,0.45)',
                    }} />
                  </div>
                ))}

                {/* Wordmark lockup */}
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.4)', margin: '0 auto 20px' }} />
                  <span style={{
                    fontFamily: 'Caudex, serif',
                    fontSize: 34, fontStyle: 'italic',
                    color: 'rgba(201,168,76,0.4)',
                    letterSpacing: '0.02em',
                  }}>
                    Sri Sri Homz
                  </span>
                  <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.4)', margin: '20px auto 0' }} />
                </div>
              </div>
            )}
          </motion.div>

          {/* Bottom gradient for the caption */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(6,13,24,0.9) 0%, transparent 45%)',
            pointerEvents: 'none',
          }} />

          {/* ── Plain caption — sits directly on the image ── */}
          <div className="about-banner-caption" style={{
            position: 'absolute', left: 'clamp(20px,4vw,48px)', right: 'clamp(20px,4vw,48px)',
            bottom: 'clamp(20px,3.5vw,40px)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            gap: 24, flexWrap: 'wrap',
          }}>
            <p style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(17px, 1.6vw, 22px)', fontStyle: 'italic',
              color: 'rgba(245,240,232,0.85)',
              lineHeight: 1.5, maxWidth: 440, margin: 0,
            }}>
              "Every relationship is built to last — that's the standard we hold ourselves to."
            </p>

            <div style={{ display: 'flex', gap: 20 }}>
              {['RERA Approved', 'HRERA Approved'].map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#C9A84C',
                    boxShadow: '0 0 8px rgba(201,168,76,0.7)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10, fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(201,168,76,0.8)',
                    whiteSpace: 'nowrap',
                  }}>
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Trust bar — centered below the banner ── */}
        <div className="about-trust-row" style={{
          display: 'flex', justifyContent: 'center', flexWrap: 'wrap',
          gap: 0, marginTop: 56,
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
                borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.15)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'Caudex, serif',
                fontSize: 'clamp(30px, 3vw, 42px)',
                fontWeight: 400, color: '#C9A84C', lineHeight: 1,
              }}>
                {s.val}
              </div>
              <div style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 11, fontWeight: 500,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.4)', marginTop: 10,
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
      </motion.div>
    </div>
  )
}
