import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Instagram, Youtube, Facebook } from 'lucide-react'

const NAV = [
  { label: 'Home',       to: '/' },
  { label: 'Services',   to: '/services' },
  { label: 'About Us',   to: '/about' },
  { label: 'Our Team',   to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

const SOCIALS = [
  { Icon: Instagram, href: 'https://instagram.com/srisrihomz', label: 'Instagram' },
  { Icon: Youtube,   href: 'https://youtube.com/@srisrihomz',  label: 'YouTube' },
  { Icon: Facebook,  href: 'https://facebook.com/srisrihomz',  label: 'Facebook' },
]

const isMobileDevice = () => window.innerWidth < 1024

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [mobile, setMobile]     = useState(isMobileDevice())
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    const onResize = () => setMobile(isMobileDevice())
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  /* On mobile always 60px; on desktop 90→68 */
  const navH = mobile ? 60 : (scrolled ? 68 : 90)

  const isHome = pathname === '/'
  const transparent = isHome && !scrolled

  const textColor = 'rgba(255,255,255,0.85)'
  const textColorHover = '#F9A819'
  const barColor = '#FFFFFF'

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
          background: transparent
            ? 'linear-gradient(180deg, rgba(0,20,32,0.55) 0%, rgba(0,20,32,0.1) 100%)'
            : '#002B42',
          boxShadow: !transparent && scrolled ? '0 2px 20px rgba(0,0,0,0.2)' : 'none',
          borderBottom: transparent ? 'none' : '1px solid rgba(249,168,25,0.12)',
          transition: 'height 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          data-cursor
          style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}
        >
          <img
            src="/logo-bg.png"
            alt="Sri Sri Homz"
            style={{
              height: mobile ? 48 : (scrolled ? 58 : 68),
              width: 'auto', display: 'block',
              transition: 'height 0.4s ease',
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div style={{ alignItems: 'center', gap: 28 }} className="nav-desktop">
          {NAV.map(n => (
            <Link key={n.to} to={n.to} data-cursor
              style={{
                background: 'none', border: 'none',
                fontFamily: 'Inter, sans-serif', fontSize: 11,
                fontWeight: 500, letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: textColor,
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = textColorHover}
              onMouseLeave={e => e.currentTarget.style.color = textColor}
            >
              {n.label}
            </Link>
          ))}

          {/* Social icons */}
          <div style={{
            display: 'flex', gap: 14,
            borderLeft: '1px solid rgba(255,255,255,0.25)',
            paddingLeft: 20,
          }}>
            {SOCIALS.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor
                aria-label={label}
                style={{ color: textColor, display: 'flex', transition: 'color 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.color = textColorHover}
                onMouseLeave={e => e.currentTarget.style.color = textColor}
              >
                <Icon size={16} strokeWidth={1.75} />
              </a>
            ))}
          </div>
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
            }} style={{ display:'block', width:22, height:1.5, background: barColor, transformOrigin:'center', borderRadius:1 }} />
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
              background: 'rgba(0,43,66,0.98)', backdropFilter: 'blur(20px)',
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
                  color: 'rgba(247,248,250,0.85)',
                  textAlign: 'left', textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = '#F9A819'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(247,248,250,0.85)'}
              >
                {n.label}
              </Link>
            ))}

            <div style={{ display: 'flex', gap: 20, marginTop: 12 }}>
              {SOCIALS.map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor
                  aria-label={label}
                  style={{ color: 'rgba(247,248,250,0.6)', display: 'flex' }}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
