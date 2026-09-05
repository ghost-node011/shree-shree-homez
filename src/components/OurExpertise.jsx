import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, TrendingUp, HardHat, ChevronRight } from 'lucide-react'

const EXPERTISE = [
  {
    Icon: Home,
    title: 'Buy & Sell Properties',
    desc: 'We assist with buying and selling both residential and commercial spaces, ensuring a smooth and transparent process from start to finish.',
  },
  {
    Icon: TrendingUp,
    title: 'Investment Advisory',
    desc: "Whether you're a first-time investor or growing your portfolio, we provide expert advice backed by market research and real-world insights.",
  },
  {
    Icon: HardHat,
    title: 'Construction & Project Management',
    desc: 'We offer full-service construction and project management, including quality control, timelines, and transparent cost reporting.',
  },
]

export default function OurExpertise() {
  return (
    <div style={{
      background: '#FFFAF0',
      padding: '110px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative sunburst accent */}
      <div style={{
        position: 'absolute', top: '10%', right: '-6%',
        width: 420, height: 420,
        background: 'radial-gradient(circle, rgba(249,168,25,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(30px, 3.5vw, 44px)',
              fontWeight: 500, color: '#002B42', marginBottom: 18,
            }}
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: 16, fontWeight: 300,
              color: 'rgba(0,43,66,0.6)', maxWidth: 540, margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            At Sri Sri Homz, we focus on what matters most — delivering real
            estate and construction solutions that work for you.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 28,
        }}>
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
              style={{
                background: '#FFFFFF',
                boxShadow: '0 8px 30px rgba(0,43,66,0.08)',
                padding: '40px 32px',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'rgba(249,168,25,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 22px',
              }}>
                <item.Icon size={22} color="#F9A819" strokeWidth={1.6} />
              </div>
              <h3 style={{
                fontFamily: 'Source Serif 4, serif', fontSize: 21, fontWeight: 500,
                color: '#F9A819', marginBottom: 14,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 300,
                lineHeight: 1.75, color: 'rgba(0,43,66,0.6)', marginBottom: 26,
              }}>
                {item.desc}
              </p>
              <Link to="/services" data-cursor style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: '#002B42', textDecoration: 'none',
              }}>
                Learn More <ChevronRight size={15} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
