import { motion } from 'framer-motion'

const AWARDS = [
  {
    brand:    'SOBHA Limited',
    award:    'SOBHA Aurum Recognition',
    desc:     'Honored for outstanding performance, unwavering commitment, and exceptional contribution towards the success of SOBHA Aurum.',
    year:     '2024',
    category: 'Performance Excellence',
  },
  {
    brand:    'Civitech Developers',
    award:    'Civitech Stadia Appreciation',
    desc:     'Recognized for exceptional performance and devoted partnership at Civitech Stadia, Noida.',
    year:     '2023',
    category: 'Devoted Partnership',
  },
  {
    brand:    'Prestige Group',
    award:    'Prestige Group Recognition',
    desc:     'Awarded as a symbol of strong partnership, trust, and contribution towards premium real estate growth.',
    year:     '2025',
    category: 'Strong Partnership',
  },
  {
    brand:    'Godrej Properties',
    award:    'Godrej Riverine Gold Award',
    desc:     'Recognized for phenomenal performance in FY 2024–25 for Godrej Riverine, Sector 44, Noida.',
    year:     '2025',
    category: 'Gold Performance',
  },
  {
    brand:    'Godrej Properties',
    award:    'Godrej Jardinia #SoldOutClub',
    desc:     'Honored for outstanding sales performance and contribution towards the success of Godrej Jardinia, Sector 146, Noida.',
    year:     '2024',
    category: '#SoldOutClub',
  },
]

export default function Achievements() {
  return (
    <div style={{
      background: '#060D18',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            Achievements & Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 62px)',
              fontWeight: 400, color: '#F5F0E8',
              marginBottom: 20,
            }}
          >
            Recognized by India's<br />
            <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Premier Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 16, fontWeight: 300,
              color: 'rgba(245,240,232,0.48)',
              maxWidth: 560, margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Our dedication towards delivering value in real estate and construction has earned
            recognition from some of India's most respected developers.
          </motion.p>
        </div>

        {/* Awards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 80,
        }}>
          {AWARDS.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              data-cursor
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(201,168,76,0.18)',
                padding: '40px 36px',
                position: 'relative',
                transition: 'all 0.4s ease',
              }}
              whileHover={{
                y: -6,
                backgroundColor: 'rgba(201,168,76,0.04)',
                borderColor: 'rgba(201,168,76,0.45)',
              }}
            >
              {/* Trophy icon */}
              <div style={{
                width: 48, height: 48,
                border: '1px solid rgba(201,168,76,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, marginBottom: 24,
              }}>
                🏆
              </div>

              {/* Category pill */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                padding: '4px 12px',
                fontFamily: 'Outfit, sans-serif',
                fontSize: 9, fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
                marginBottom: 16,
              }}>
                {a.category}
              </div>

              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 24, fontWeight: 500,
                color: '#F5F0E8', marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {a.award}
              </h3>

              <p style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 11, fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(201,168,76,0.7)',
                marginBottom: 14,
              }}>
                {a.brand} · {a.year}
              </p>

              <p style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 13.5, fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245,240,232,0.45)',
              }}>
                {a.desc}
              </p>

              {/* Bottom gold line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                style={{
                  position: 'absolute', bottom: 0, left: 0,
                  height: 2, width: '100%',
                  background: 'linear-gradient(90deg, #C9A84C, transparent)',
                  transformOrigin: 'left',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* RERA section */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex', gap: 24, flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {['RERA Approved', 'HRERA Approved'].map((badge, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              background: 'rgba(201,168,76,0.04)',
              border: '1px solid rgba(201,168,76,0.25)',
              padding: '16px 32px',
            }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: '#C9A84C',
                boxShadow: '0 0 10px rgba(201,168,76,0.6)',
              }} />
              <span style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 12, fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#C9A84C',
              }}>
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
