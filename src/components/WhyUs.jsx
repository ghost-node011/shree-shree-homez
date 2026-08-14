import { motion } from 'framer-motion'

const REASONS = [
  {
    num: '01',
    title: 'Trust First Approach',
    desc: 'We prioritize relationships over transactions. Long-term trust is the foundation of every project we undertake.',
  },
  {
    num: '02',
    title: 'Real Estate + Construction',
    desc: 'From finding the right investment to building the right structure — complete end-to-end solutions under one brand.',
  },
  {
    num: '03',
    title: 'Deep Delhi NCR Expertise',
    desc: 'We understand the pulse of Delhi NCR\'s luxury, residential, and investment-driven real estate markets.',
  },
  {
    num: '04',
    title: 'Investment-Focused Advisory',
    desc: 'We don\'t just show properties — we identify opportunities with real appreciation and long-term value.',
  },
  {
    num: '05',
    title: 'Personalized Consulting',
    desc: 'Every client has different goals, budgets, and visions. We provide customized solutions accordingly.',
  },
  {
    num: '06',
    title: 'Transparent Communication',
    desc: 'No false promises. No unnecessary pressure. Just honest advice and practical execution at every step.',
  },
]

export default function WhyUs() {
  return (
    <div style={{
      background: 'linear-gradient(180deg, #060D18 0%, #0A1628 100%)',
      padding: '120px clamp(24px,6vw,120px)',
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
                fontFamily: 'Caudex, serif',
                fontSize: 'clamp(36px, 4vw, 60px)',
                fontWeight: 400, lineHeight: 1.1,
                color: '#F5F0E8',
              }}
            >
              The Sri Sri Homz<br />
              <span style={{ fontStyle: 'italic', color: '#C9A84C' }}>Difference</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 16, fontWeight: 300,
              lineHeight: 1.8,
              color: 'rgba(245,240,232,0.5)',
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
          background: 'rgba(201,168,76,0.06)',
        }}>
          {REASONS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22,1,0.36,1] }}
              data-cursor
              className="whyus-card"
              style={{
                background: '#060D18',
                padding: '44px 40px',
                position: 'relative',
                transition: 'background 0.4s ease',
              }}
              whileHover={{ backgroundColor: '#0A1628' }}
            >
              {/* Number */}
              <div style={{
                fontFamily: 'Caudex, serif',
                fontSize: 13, fontWeight: 400,
                letterSpacing: '0.25em',
                color: 'rgba(201,168,76,0.4)',
                marginBottom: 20,
              }}>
                {r.num}
              </div>

              {/* Gold accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                style={{
                  width: 32, height: 1,
                  background: '#C9A84C',
                  transformOrigin: 'left',
                  marginBottom: 20,
                }}
              />

              <h3 style={{
                fontFamily: 'Caudex, serif',
                fontSize: 26, fontWeight: 500,
                color: '#F5F0E8', marginBottom: 14,
                lineHeight: 1.2,
              }}>
                {r.title}
              </h3>
              <p style={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: 14, fontWeight: 300,
                lineHeight: 1.75,
                color: 'rgba(245,240,232,0.48)',
              }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
