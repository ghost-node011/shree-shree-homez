import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ServiceCard({ item, index, fullWidth = false }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22,1,0.36,1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor
      style={{
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '3/4',
        cursor: 'pointer',
        flexShrink: 0,
        width: fullWidth ? '100%' : 'clamp(240px, 22vw, 320px)',
      }}
    >
      {/* Photo */}
      <img
        src={item.img}
        alt={item.title}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      />

      {/* Base overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(20,16,13,0.96) 0%, rgba(20,16,13,0.5) 50%, rgba(20,16,13,0.15) 100%)',
        transition: 'opacity 0.4s',
      }} />

      {/* Hover overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(196,120,86,0.08)',
        opacity: hovered ? 1 : 0,
        transition: 'opacity 0.4s',
      }} />

      {/* Content */}
      <div style={{
        position: 'absolute', inset: 0,
        padding: '28px 24px',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        {/* Tag top */}
        <div style={{
          alignSelf: 'flex-start',
          background: 'rgba(196,120,86,0.15)',
          border: '1px solid rgba(196,120,86,0.35)',
          padding: '5px 12px',
          fontFamily: 'Inter, sans-serif',
          fontSize: 9, fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: '#C47856',
        }}>
          {item.tag}
        </div>

        {/* Bottom text */}
        <div>
          {/* Gold line */}
          <motion.div
            animate={{ scaleX: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.4 }}
            style={{
              width: 36, height: 1,
              background: '#C47856',
              transformOrigin: 'left',
              marginBottom: 14,
            }}
          />

          <h3 style={{
            fontFamily: 'Source Serif 4, serif',
            fontSize: 'clamp(20px, 1.8vw, 28px)',
            fontWeight: 500, lineHeight: 1.15,
            color: '#F5EEE4', marginBottom: 10,
          }}>
            {item.title}
          </h3>

          <motion.p
            animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
            transition={{ duration: 0.35 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13, fontWeight: 300,
              lineHeight: 1.65,
              color: 'rgba(245,238,228,0.65)',
            }}
          >
            {item.desc}
          </motion.p>

          {/* Arrow */}
          <motion.div
            animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            style={{
              marginTop: 16,
              width: 36, height: 36,
              border: '1px solid rgba(196,120,86,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#C47856', fontSize: 16,
            }}
          >
            ↗
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
