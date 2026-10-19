import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroBg from '../assets/hero-bg.jpg'

export default function Hero() {
  return (
    <div className="hero-stage" style={{
      position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden',
    }}>
      {/* Full-bleed photo */}
      <picture>
        <source media="(max-width: 900px)" srcSet={heroBg} />
        <img
          src={heroBg}
          alt="Delhi NCR skyline at sunset"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />
      </picture>

      {/* Whisper-light gradient: zero fog, maximum clarity & crispness */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 18%, transparent 85%, rgba(0,0,0,0.2) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Content — shifted up into the empty sky space above the buildings */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 'clamp(110px, 14vh, 150px) clamp(24px, 6vw, 100px) clamp(160px, 22vh, 260px)',
        maxWidth: 960,
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'var(--heading-hero)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: 'var(--spacing-heading-hero)',
            textTransform: 'uppercase',
            color: '#FFFFFF', margin: 0,
            textShadow: '0 2px 18px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.85)',
          }}
        >
          Sri Sri Homzz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22,1,0.36,1] }}
          className="hero-tagline"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--tagline-hero)',
            fontWeight: 400,
            letterSpacing: 'var(--spacing-tagline)',
            color: 'rgba(255,255,255,0.95)',
            marginTop: 18, marginBottom: 36,
            textShadow: '0 2px 14px rgba(0,0,0,0.6), 0 1px 2px rgba(0,0,0,0.8)',
          }}
        >
          Divine Home, Divine People
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22,1,0.36,1] }}
          className="hero-ctas"
          style={{ display: 'flex', gap: 16 }}
        >
          <Link to="/contact" data-cursor className="hero-ctasbtn btn-gold">
            <span>Get In Touch</span>
          </Link>
          <Link to="/about" data-cursor className="hero-ctasbtn btn-outline-hero">
            Learn More
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stage { min-height: 100vh; }
          .hero-content {
            padding: 120px 24px 80px !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  )
}
