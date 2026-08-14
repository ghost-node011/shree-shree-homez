import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Philosophy() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <div ref={ref} style={{
      background: '#030810',
      padding: '140px clamp(24px,6vw,120px)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Background gold glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Thin horizontal lines */}
      <motion.div style={{ y }} className="hr-gold" />
      <div style={{ height: 60 }} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="section-label"
        style={{ justifyContent: 'center', marginBottom: 48 }}
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
          fontFamily: 'Caudex, serif',
          fontSize: 'clamp(28px, 3.5vw, 54px)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.45,
          color: '#F5F0E8',
          maxWidth: 900, margin: '0 auto',
          position: 'relative',
        }}
      >
        <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em' }}>"</span>
        {' '}You can earn money without real estate…<br />
        <span className="shimmer-gold">but building serious wealth becomes difficult without it.</span>
        <span style={{ color: 'rgba(201,168,76,0.5)', fontSize: '1.4em', lineHeight: 0, verticalAlign: '-0.3em' }}>"</span>
      </motion.blockquote>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{
          width: 80, height: 1,
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          margin: '56px auto 32px',
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 12, fontWeight: 600,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.6)',
        }}
      >
        Sri Sri Homz — Yashank Arora
      </motion.p>

      <div style={{ height: 60 }} />
      <motion.div style={{ y }} className="hr-gold" />
    </div>
  )
}
