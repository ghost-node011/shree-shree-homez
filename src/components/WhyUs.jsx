import { motion } from 'framer-motion'
import { HeartHandshake, Building2, MapPin, TrendingUp, UserCheck, MessagesSquare } from 'lucide-react'

const REASONS = [
  {
    num: '01',
    icon: HeartHandshake,
    title: 'Trust First Approach',
    desc: 'We prioritize relationships over transactions. Long-term trust is the foundation of every project we undertake.',
  },
  {
    num: '02',
    icon: Building2,
    title: 'Real Estate + Construction',
    desc: 'From finding the right investment to building the right structure — complete end-to-end solutions under one brand.',
  },
  {
    num: '03',
    icon: MapPin,
    title: 'Deep Delhi NCR Expertise',
    desc: 'We understand the pulse of Delhi NCR\'s luxury, residential, and investment-driven real estate markets.',
  },
  {
    num: '04',
    icon: TrendingUp,
    title: 'Investment-Focused Advisory',
    desc: 'We don\'t just show properties — we identify opportunities with real appreciation and long-term value.',
  },
  {
    num: '05',
    icon: UserCheck,
    title: 'Personalized Consulting',
    desc: 'Every client has different goals, budgets, and visions. We provide customized solutions accordingly.',
  },
  {
    num: '06',
    icon: MessagesSquare,
    title: 'Transparent Communication',
    desc: 'No false promises. No unnecessary pressure. Just honest advice and practical execution at every step.',
  },
]

export default function WhyUs() {
  return (
    <div style={{
      background: '#F5EEE4',
      padding: '120px clamp(24px,6vw,120px) 150px',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px 80px',
          marginBottom: 80,
          alignItems: 'end',
        }}>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="section-label"
              style={{ marginBottom: 20 }}
            >
              Why Choose Us
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 'clamp(36px, 4vw, 60px)',
                fontWeight: 400, lineHeight: 1.1,
                color: '#14100D',
              }}
            >
              The Sri Sri Homz<br />
              <span style={{ fontStyle: 'italic', color: '#C47856' }}>Difference</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 16, fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(20,16,13,0.62)',
              alignSelf: 'end',
            }}
          >
            We combine market intelligence, deep local expertise, honest guidance,
            and quality execution to deliver solutions that are practical,
            transparent, and genuinely value-driven.
          </motion.p>
        </div>

        {/* Reason cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 1,
          background: 'rgba(196,120,86,0.06)',
        }}>
          {REASONS.map((r, i) => {
            const Icon = r.icon
            return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              data-cursor
              className="whyus-card"
              style={{
                background: '#F5EEE4',
                padding: '48px 40px',
                position: 'relative',
                overflow: 'hidden',
                borderTop: '1px solid transparent',
                transition: 'background 0.4s ease, border-color 0.4s ease',
              }}
              whileHover={{ backgroundColor: '#EDE1D1', borderColor: 'rgba(196,120,86,0.5)' }}
            >
              {/* Ghost numeral */}
              <div style={{
                position: 'absolute', top: -6, right: 12,
                fontFamily: 'Source Serif 4, serif',
                fontSize: 110, fontWeight: 600,
                color: 'rgba(196,120,86,0.06)',
                lineHeight: 1, pointerEvents: 'none',
                userSelect: 'none',
              }}>
                {r.num}
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.08, rotate: -4 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: 52, height: 52,
                  borderRadius: '50%',
                  background: 'rgba(196,120,86,0.08)',
                  border: '1px solid rgba(196,120,86,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 24,
                  position: 'relative',
                }}
              >
                <Icon size={22} color="#C47856" strokeWidth={1.6} />
              </motion.div>

              {/* Gold accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                style={{
                  width: 32, height: 1,
                  background: '#C47856',
                  transformOrigin: 'left',
                  marginBottom: 20,
                  position: 'relative',
                }}
              />

              <h3 style={{
                fontFamily: 'Source Serif 4, serif',
                fontSize: 26, fontWeight: 500,
                color: '#14100D', marginBottom: 14,
                lineHeight: 1.2,
                position: 'relative',
              }}>
                {r.title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: 14, fontWeight: 300,
                lineHeight: 1.75,
                color: '#8C7F72',
                position: 'relative',
              }}>
                {r.desc}
              </p>
            </motion.div>
          )})}
        </div>
      </div>
    </div>
  )
}
