import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, accent, subtitle }) {
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      minHeight: 'clamp(340px, 46vh, 480px)',
      display: 'flex', alignItems: 'center',
      padding: '110px clamp(24px,6vw,120px) 56px',
    }}>
      <img
        src="/laptop-hero.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
          display: 'block',
        }}
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(180deg, rgba(0,20,32,0.72) 0%, rgba(0,43,66,0.6) 55%, rgba(0,20,32,0.82) 100%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 85% 20%, rgba(249,168,25,0.14) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24, color: '#FFC670' }}
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.1 }}
          style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(34px, 4.5vw, 60px)',
            fontWeight: 400, lineHeight: 1.1,
            color: '#FFFFFF', marginBottom: subtitle ? 20 : 0,
          }}
        >
          {title} {accent && <span style={{ fontStyle: 'italic', color: '#F9A819' }}>{accent}</span>}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300,
              color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  )
}
