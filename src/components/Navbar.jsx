import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'

const NAV = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery',  to: '/gallery' },
  { label: 'Reviews',  to: '/reviews' },
  { label: 'Contact',  to: '/contact' },
]

const isMobileDevice = () => window.innerWidth < 1024

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [mobile, setMobile]     = useState(isMobileDevice())
  const navigate = useNavigate()

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
          background: '#F5EEE4',
          boxShadow: scrolled ? '0 2px 20px rgba(20,16,13,0.08)' : 'none',
          borderBottom: '1px solid rgba(20,16,13,0.08)',
          transition: 'height 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        {/* Wordmark — no clean transparent logo asset yet, so a type-set lockup stands in */}
        <Link
          to="/"
          data-cursor
          style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}
        >
          <span style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: mobile ? 20 : (scrolled ? 24 : 28),
            fontWeight: 500, lineHeight: 1,
            color: '#14100D', transition: 'font-size 0.4s ease',
          }}>
            Sri Sri <span style={{ fontStyle: 'italic', color: '#C47856' }}>Homz</span>
          </span>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: 8, fontWeight: 500,
            letterSpacing: '0.3em', textTransform: 'uppercase',
            color: '#8C7F72', marginTop: 2,
          }}>
            Real Estate &amp; Construction
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ alignItems: 'center', gap: 32 }} className="nav-desktop">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} data-cursor
              style={{
                background: 'none', border: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: 11,
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(20,16,13,0.68)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(20,16,13,0.68)'}
            >
              {n.label}
            </Link>
          ))}
          <button onClick={() => navigate('/contact')} data-cursor
            style={{
              background: 'transparent',
              border: '1px solid rgba(20,16,13,0.25)',
              color: '#14100D',
              fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              padding: '12px 26px', transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#14100D'; e.currentTarget.style.color = '#F5EEE4' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#14100D' }}
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
            }} style={{ display:'block', width:22, height:1.5, background: '#14100D', transformOrigin:'center', borderRadius:1 }} />
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
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 899,
              background: 'rgba(20,16,13,0.98)', backdropFilter: 'blur(20px)',
              padding: `${navH + 32}px clamp(20px,5vw,80px) 40px`,
              display: 'flex', flexDirection: 'column', gap: 20,
            }}
          >
            {NAV.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} data-cursor
                style={{
                  background: 'none', border: 'none',
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: 30, fontWeight: 400,
                  color: 'rgba(245,238,228,0.85)',
                  textAlign: 'left', textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#C47856'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,238,228,0.85)'}
              >
                {n.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
