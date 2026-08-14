import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'About',        id: 'about' },
  { label: 'Services',     id: 'services' },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Reviews',      id: 'reviews' },
  { label: 'Founder',      id: 'founder' },
  { label: 'Contact',      id: 'contact' },
]

function goTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const isMobileDevice = () => window.innerWidth < 1024

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [mobile, setMobile]     = useState(isMobileDevice())

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setMobile(isMobileDevice())
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  /* On mobile always 60px; on desktop 90→68 */
  const navH = mobile ? 60 : (scrolled ? 68 : 90)

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: `0 clamp(16px, 5vw, 80px)`,
          height: navH,
          background: scrolled || open ? 'rgba(6,13,24,0.97)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : 'none',
          transition: 'height 0.4s ease, background 0.4s ease',
        }}
      >
        <img
          src="/logo-bg.png" alt="Sri Sri Homz"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor
          style={{ height: mobile ? 38 : (scrolled ? 44 : 56), transition: 'height 0.4s ease', objectFit: 'contain' }}
        />

        {/* Desktop nav */}
        <div style={{ alignItems: 'center', gap: 32 }} className="nav-desktop">
          {NAV.map(n => (
            <button key={n.id} onClick={() => goTo(n.id)} data-cursor
              style={{
                background: 'none', border: 'none',
                fontFamily: 'Outfit, sans-serif', fontSize: 11,
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.72)',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.72)'}
            >
              {n.label}
            </button>
          ))}
          <button onClick={() => goTo('contact')} data-cursor
            style={{
              background: 'transparent',
              border: '1px solid rgba(201,168,76,0.5)',
              color: '#C9A84C',
              fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '12px 26px', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#C9A84C'; e.currentTarget.style.color = '#060D18' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C9A84C' }}
          >
            Book Consultation
          </button>
        </div>

        {/* Hamburger — 44×44 touch target */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(v => !v)} data-cursor
          style={{
            background: 'none', border: 'none',
            width: 44, height: 44,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: 5, padding: 0, flexShrink: 0,
          }}
        >
          {[0,1,2].map(i => (
            <motion.span key={i} animate={{
              rotate:  open && i===0 ? 45  : open && i===2 ? -45 : 0,
              y:       open && i===0 ? 8   : open && i===2 ? -8 : 0,
              opacity: open && i===1 ? 0 : 1,
            }} style={{ display:'block', width:22, height:1.5, background:'#C9A84C', transformOrigin:'center', borderRadius:1 }} />
          ))}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: navH, left: 0, right: 0, zIndex: 899,
              background: 'rgba(6,13,24,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(201,168,76,0.12)',
              padding: '32px clamp(20px,5vw,80px) 40px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {NAV.map(n => (
              <button key={n.id} onClick={() => { goTo(n.id); setOpen(false) }} data-cursor
                style={{
                  background: 'none', border: 'none',
                  fontFamily: 'Caudex, serif',
                  fontSize: 30, fontWeight: 400,
                  color: 'rgba(245,240,232,0.85)',
                  textAlign: 'left', transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,240,232,0.85)'}
              >
                {n.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
