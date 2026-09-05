import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className="hero-stage" style={{
      position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden',
    }}>
      {/* Full-bleed photo */}
      <picture>
        <source media="(max-width: 900px)" srcSet="/mobile-hero.png" />
        <img
          src="/laptop-hero.png"
          alt="Delhi NCR skyline"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
            display: 'block',
          }}
        />
      </picture>

      {/* Dark navy gradient overlay for text legibility */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,20,32,0.65) 0%, rgba(0,20,32,0.15) 35%, rgba(0,20,32,0.1) 55%, rgba(0,20,32,0.55) 100%)',
      }} />

      {/* Content */}
      <div className="hero-content" style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        minHeight: '100vh',
        padding: '0 clamp(24px,6vw,100px) clamp(64px,10vh,120px)',
      }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22,1,0.36,1] }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 700, lineHeight: 1,
            letterSpacing: '0.01em',
            textTransform: 'uppercase',
            color: '#FFFFFF', margin: 0,
          }}
        >
          Sri Sri Homz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22,1,0.36,1] }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(16px, 1.6vw, 22px)',
            fontWeight: 400, letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.9)',
            marginTop: 14, marginBottom: 36,
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
        }
      `}</style>
    </div>
  )
}
