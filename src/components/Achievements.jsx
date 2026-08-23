import { motion } from 'framer-motion'
import { Award, ShieldCheck } from 'lucide-react'

const COMPLIANCE = [
  { title: 'RERA Approved', sub: 'Registered Real Estate Entity' },
  { title: 'HRERA Approved', sub: 'Haryana RERA Registered' },
]

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

const BRANDS = ['SOBHA Limited', 'Civitech Developers', 'Prestige Group', 'Godrej Properties', 'ATS Homekraft', 'M3M India']

export default function Achievements() {
  return (
    <div style={{
      background: '#14100D',
      padding: '150px clamp(24px,6vw,120px) 140px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow + concentric rings */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 15% 10%, rgba(196,120,86,0.09) 0%, transparent 55%), radial-gradient(circle at 90% 85%, rgba(196,120,86,0.06) 0%, transparent 50%)',
      }} />
      <div style={{
        position: 'absolute', top: '8%', right: '-10%',
        width: 560, height: 560, borderRadius: '50%',
        border: '1px solid rgba(196,120,86,0.08)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '8%', right: '-10%',
        width: 720, height: 720, borderRadius: '50%',
        border: '1px solid rgba(196,120,86,0.05)',
        transform: 'translate(80px, 80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24, color: '#E2AB89' }}
          >
            Achievements & Recognition
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(36px, 4vw, 62px)',
              fontWeight: 400, color: '#F5EEE4',
              marginBottom: 20,
            }}
          >
            Recognized by India's<br />
            <span style={{ fontStyle: 'italic', color: '#C47856' }}>Premier Developers</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16, fontWeight: 300,
              color: 'rgba(245,238,228,0.55)',
              maxWidth: 560, margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Our dedication towards delivering value in real estate and construction has earned
            recognition from some of India's most respected developers.
          </motion.p>
        </div>

        {/* Partner brand marquee */}
        <div style={{
          overflow: 'hidden',
          borderTop: '1px solid rgba(196,120,86,0.15)',
          borderBottom: '1px solid rgba(196,120,86,0.15)',
          padding: '22px 0',
          marginBottom: 72,
          maskImage: 'linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)',
        }}>
          <div className="brand-marquee-track">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <span key={i} style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13, fontWeight: 500,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(245,238,228,0.4)',
                display: 'flex', alignItems: 'center', gap: 40,
                whiteSpace: 'nowrap',
              }}>
                {b}
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#C47856', opacity: 0.6 }} />
              </span>
            ))}
          </div>
        </div>

        {/* Awards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20,
          marginBottom: 88,
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
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(196,120,86,0.16)',
                padding: '40px 36px',
                position: 'relative',
                transition: 'all 0.4s ease',
              }}
              whileHover={{
                y: -8,
                backgroundColor: 'rgba(196,120,86,0.06)',
                borderColor: 'rgba(196,120,86,0.5)',
                boxShadow: '0 24px 48px rgba(0,0,0,0.35)',
              }}
            >
              {/* Corner accents */}
              {[{ top: 0, left: 0 }, { top: 0, right: 0 }].map((pos, ci) => (
                <div key={ci} style={{ position: 'absolute', ...pos, width: 22, height: 22, opacity: 0.5 }}>
                  <div style={{ position: 'absolute', top: 0, [pos.left !== undefined ? 'left' : 'right']: 0, width: '100%', height: 1, background: '#C47856' }} />
                  <div style={{ position: 'absolute', top: 0, [pos.left !== undefined ? 'left' : 'right']: 0, height: '100%', width: 1, background: '#C47856' }} />
                </div>
              ))}

              {/* Award icon medallion */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: 'rgba(196,120,86,0.1)',
                  border: '1px solid rgba(196,120,86,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                }}
              >
                <Award size={22} color="#E2AB89" strokeWidth={1.6} />
              </motion.div>

              {/* Category pill */}
              <div style={{
                display: 'inline-block',
                background: 'rgba(196,120,86,0.1)',
                border: '1px solid rgba(196,120,86,0.28)',
                padding: '4px 12px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 9, fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#E2AB89',
                marginBottom: 18,
              }}>
                {a.category}
              </div>

              <h3 style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 24, fontWeight: 500,
                color: '#F5EEE4', marginBottom: 8,
                lineHeight: 1.2,
              }}>
                {a.award}
              </h3>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 11, fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(196,120,86,0.85)',
                marginBottom: 14,
              }}>
                {a.brand} · {a.year}
              </p>

              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 13.5, fontWeight: 300,
                lineHeight: 1.7,
                color: 'rgba(245,238,228,0.5)',
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
                  background: 'linear-gradient(90deg, #C47856, transparent)',
                  transformOrigin: 'left',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Regulatory compliance */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-label"
          style={{ justifyContent: 'center', marginBottom: 28, color: '#E2AB89' }}
        >
          Regulatory Compliance
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            display: 'flex', gap: 24, flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {COMPLIANCE.map((c, i) => (
            <motion.div
              key={i}
              data-cursor
              whileHover={{ y: -4, borderColor: 'rgba(196,120,86,0.6)', backgroundColor: 'rgba(196,120,86,0.06)' }}
              transition={{ duration: 0.3 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(196,120,86,0.28)',
                padding: '22px 34px',
                minWidth: 260,
              }}
            >
              <div style={{
                width: 46, height: 46, flexShrink: 0,
                borderRadius: '50%',
                background: 'rgba(196,120,86,0.1)',
                border: '1px solid rgba(196,120,86,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ShieldCheck size={20} color="#E2AB89" strokeWidth={1.75} />
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13, fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#F5EEE4',
                  marginBottom: 4,
                }}>
                  {c.title}
                </p>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 11.5, fontWeight: 400,
                  color: 'rgba(245,238,228,0.5)',
                }}>
                  {c.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
