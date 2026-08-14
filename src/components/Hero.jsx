import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Subtle gold dust particles ─── */
function Particles() {
  const ref = useRef(null)
  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize()
    window.addEventListener('resize', resize)
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -(Math.random() * 0.3 + 0.08),
      a: Math.random() * 0.45 + 0.1,
      gold: Math.random() > 0.45,
    }))
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.y < -4) { p.y = canvas.height + 4; p.x = Math.random() * canvas.width }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.gold ? `rgba(201,168,76,${p.a})` : `rgba(255,255,255,${p.a * 0.25})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    tick()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }} />
}

export default function Hero() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100vh',
      minHeight: 700, overflow: 'hidden',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    }}>

      {/* ── HERO BACKGROUND IMAGE ──
          Placeholder cinematic skyline (stand-in for a real Noida/Delhi NCR skyline shot).
          Replace /hero.jpg with an actual Noida skyline photo (1920×1080+) when available.
      ── */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        /* Fallback gradient while image loads */
        background: 'linear-gradient(180deg, #010509 0%, #050D1A 30%, #0A1628 65%, #060D18 100%)',
      }}>
        {/* Background image — replace URL with your own photo */}
        <img
          src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1920&q=85"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
          /* To use your own image instead:
             1. Place it at /public/hero.jpg
             2. Change src above to just: /hero.jpg
          */
        />
      </div>

      {/* ── Overlay layers for depth & readability ── */}
      {/* Base dark tint across entire image */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'rgba(4,10,20,0.55)',
      }} />
      {/* Bottom-heavy gradient — text zone stays readable */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: `linear-gradient(to top,
          rgba(6,13,24,0.97) 0%,
          rgba(6,13,24,0.82) 20%,
          rgba(6,13,24,0.5)  45%,
          rgba(6,13,24,0.2)  70%,
          rgba(6,13,24,0.05) 100%
        )`,
      }} />
      {/* Left-side gradient to make text legible */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(to right, rgba(6,13,24,0.65) 0%, rgba(6,13,24,0.2) 50%, transparent 80%)',
      }} />
      {/* Subtle gold warmth at the horizon */}
      <div style={{
        position: 'absolute', bottom: '22%', left: 0, right: 0,
        height: 160, zIndex: 2, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 100% at 35% 100%, rgba(201,168,76,0.07) 0%, transparent 70%)',
      }} />

      <Particles />

      {/* ── Cinematic bars open on load ── */}
      <AnimatePresence>
        {!ready && (
          <>
            <motion.div key="top"
              exit={{ scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.76,0,0.24,1] }}
              style={{ position:'absolute',top:0,left:0,right:0,height:'50%',background:'#030810',zIndex:20,transformOrigin:'top' }}
            />
            <motion.div key="bot"
              exit={{ scaleY: 0 }}
              transition={{ duration: 1.1, ease: [0.76,0,0.24,1] }}
              style={{ position:'absolute',bottom:0,left:0,right:0,height:'50%',background:'#030810',zIndex:20,transformOrigin:'bottom' }}
            />
          </>
        )}
      </AnimatePresence>

      {/* ── Gold thin top line ── */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={ready ? { scaleX: 1 } : {}}
        transition={{ duration: 2.2, delay: 0.6, ease: [0.22,1,0.36,1] }}
        style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 1, zIndex: 10,
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.6) 40%, rgba(201,168,76,0.6) 60%, transparent 100%)',
          transformOrigin: 'left',
        }}
      />

      {/* ── Decorative gold vertical line left ── */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={ready ? { scaleY: 1 } : {}}
        transition={{ duration: 1.6, delay: 1, ease: [0.22,1,0.36,1] }}
        style={{
          position: 'absolute', top: 0, bottom: 0,
          left: 'clamp(28px,6vw,100px)', width: 1, zIndex: 10,
          background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent)',
          transformOrigin: 'top',
        }}
      />

      {/* ── MAIN CONTENT (bottom-left layout) ── */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 10,
        padding: `0 clamp(28px,6vw,100px) clamp(52px,7vh,96px)`,
        paddingLeft: `calc(clamp(28px,6vw,100px) + 28px)`,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        maxWidth: 900,
      }}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={ready ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22,1,0.36,1] }}
          className="section-label"
          style={{ marginBottom: 24 }}
        >
          Real Estate · Construction · Investment
        </motion.div>

        {/* Heading line 1 */}
        <div style={{ overflow: 'hidden', marginBottom: 4 }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 1.05, delay: 0.65, ease: [0.22,1,0.36,1] }}
            className="hero-heading"
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(52px, 10vw, 152px)',
              fontWeight: 500, lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#F5F0E8', margin: 0,
            }}
          >
            Sri Sri
          </motion.h1>
        </div>

        {/* Heading line 2 - italic gold */}
        <div style={{ overflow: 'hidden', marginBottom: 28 }}>
          <motion.h1
            initial={{ y: '105%' }}
            animate={ready ? { y: '0%' } : {}}
            transition={{ duration: 1.05, delay: 0.82, ease: [0.22,1,0.36,1] }}
            className="hero-heading"
            style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(52px, 10vw, 152px)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              color: '#C9A84C', margin: 0,
            }}
          >
            Homz
          </motion.h1>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={ready ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.35, ease: [0.22,1,0.36,1] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor className="btn-gold"
          >
            <span>Book Consultation</span>
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            data-cursor className="btn-outline-gold"
          >
            Explore Services
          </button>
        </motion.div>
      </div>

      {/* ── Floating stats — bottom-right ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="hero-stats"
        style={{
          position: 'absolute',
          right: 'clamp(28px,6vw,100px)',
          bottom: 'clamp(52px,7vh,96px)',
          zIndex: 10,
          display: 'flex', gap: 0,
        }}
      >
        {[
          { val: '500+', label: 'Happy Clients' },
          { val: '250+', label: 'Properties' },
          { val: '5+',   label: 'Years of Trust' },
        ].map((s, i) => (
          <div key={i} style={{
            textAlign: 'center',
            padding: '0 28px',
            borderLeft: i > 0 ? '1px solid rgba(201,168,76,0.2)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Caudex, serif',
              fontSize: 'clamp(28px, 2.8vw, 42px)',
              fontWeight: 400, color: '#C9A84C', lineHeight: 1,
            }}>
              {s.val}
            </div>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 9, fontWeight: 500,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.38)', marginTop: 7,
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Vertical scroll indicator — right edge ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        className="hero-scroll-ind"
        style={{
          position: 'absolute', right: 28, top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
        }}
      >
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: 8,
          letterSpacing: '0.4em', textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.4)',
          writingMode: 'vertical-rl', transform: 'rotate(180deg)',
        }}>
          Scroll
        </p>
        <div style={{
          width: 1, height: 64,
          background: 'rgba(201,168,76,0.15)',
          position: 'relative', overflow: 'hidden',
        }}>
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', inset: 0, background: '#C9A84C' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
