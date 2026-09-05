import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div ref={ref} style={{
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Background architecture photo */}
      <motion.div style={{ position: 'absolute', inset: '-8% 0', y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </motion.div>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,20,32,0.92) 0%, rgba(0,20,32,0.88) 50%, rgba(0,20,32,0.95) 100%)',
      }} />
      {/* Background gold glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 350,
        background: 'radial-gradient(ellipse, rgba(249,168,25,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', padding: '150px clamp(24px,6vw,120px)' }}>
        {/* Thin horizontal lines */}
        <motion.div style={{ y }} className="hr-gold" />
        <div style={{ height: 48 }} />

        {/* Founder portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
          style={{ position: 'relative', width: 108, height: 108, margin: '0 auto 28px' }}
        >
          <div style={{
            position: 'absolute', inset: -8,
            borderRadius: '50%',
            border: '1px solid rgba(249,168,25,0.35)',
          }} />
          <img
            src="/yashank.png"
            alt="Yashank Arora"
            style={{
              width: '100%', height: '100%', borderRadius: '50%',
              objectFit: 'cover', objectPosition: '50% 22%',
              border: '2px solid #F9A819',
              boxShadow: '0 16px 40px rgba(0,0,0,0.5)',
              display: 'block',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="section-label"
          style={{ justifyContent: 'center', marginBottom: 40 }}
        >
          Our Philosophy
        </motion.div>

        {/* Large quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.22,1,0.36,1] }}
          style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(28px, 3.8vw, 58px)',
            fontWeight: 300,
            fontStyle: 'italic',
            lineHeight: 1.42,
            color: '#F7F8FA',
            maxWidth: 940, margin: '0 auto',
            position: 'relative',
          }}
        >
          <span style={{ color: 'rgba(249,168,25,0.5)', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em' }}>"</span>
          {' '}People don't just buy a property — they trust us with their biggest decision.<br />
          <span className="shimmer-gold">That trust is what we build first, homes come after.</span>
          <span style={{ color: 'rgba(249,168,25,0.5)', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em' }}>"</span>
        </motion.blockquote>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{
            width: 80, height: 1,
            background: 'linear-gradient(90deg, transparent, #F9A819, transparent)',
            margin: '48px auto 24px',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 12, fontWeight: 600,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'rgba(249,168,25,0.75)',
            margin: 0,
          }}
        >
          Yashank Arora — Founder, Sri Sri Homz
        </motion.p>

        <div style={{ height: 48 }} />
        <motion.div style={{ y }} className="hr-gold" />
      </div>
    </div>
  )
}
