import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { value: 500, suffix: '+', label: 'Happy Clients',    sub: 'Across Delhi NCR' },
  { value: 250, suffix: '+', label: 'Properties',       sub: 'Luxury & Premium' },
  { value: 5,   suffix: '+', label: 'Years of Trust',   sub: 'Founded by Yashank Arora' },
  { value: 15,  suffix: '+', label: 'Awards & Recognitions', sub: 'Top Developers' },
]

function Counter({ value, suffix, active }) {
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 1800
    const step = 16
    const increment = value / (duration / step)
    const id = setInterval(() => {
      start += increment
      if (start >= value) { setDisplay(value); clearInterval(id) }
      else setDisplay(Math.floor(start))
    }, step)
    return () => clearInterval(id)
  }, [active, value])

  return (
    <span style={{
      fontFamily: 'Source Serif 4, serif',
      fontSize: 'clamp(44px, 4.5vw, 72px)',
      fontWeight: 400,
      color: '#C47856',
      lineHeight: 1,
    }}>
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  const ref   = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} style={{
      background: '#F5EEE4',
      borderTop: '1px solid rgba(196,120,86,0.15)',
      borderBottom: '1px solid rgba(196,120,86,0.15)',
      padding: '80px clamp(24px,6vw,120px)',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '60px 40px',
        maxWidth: 1200, margin: '0 auto',
      }}>
        {STATS.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22,1,0.36,1] }}
            className="stat-item"
            style={{
              display: 'flex', flexDirection: 'column', gap: 8,
              padding: i < STATS.length - 1 ? '0 40px 0 0' : '0',
              borderRight: i < STATS.length - 1 ? '1px solid rgba(196,120,86,0.2)' : 'none',
            }}
          >
            <Counter value={s.value} suffix={s.suffix} active={inView} />
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 13, fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#14100D',
              marginTop: 6,
            }}>
              {s.label}
            </p>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12, color: '#8C7F72',
              letterSpacing: '0.04em',
            }}>
              {s.sub}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
