import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { PhoneCall, MapPinned, FileCheck2, KeyRound } from 'lucide-react'
import Services from '../components/Services'

const PROCESS = [
  {
    icon: PhoneCall,
    title: 'Consultation',
    desc: 'We start by understanding your budget, goals, and timeline — no forms, just a direct conversation.',
  },
  {
    icon: MapPinned,
    title: 'Site Selection',
    desc: 'Shortlisted properties or plots matched to your requirements, with site visits arranged around your schedule.',
  },
  {
    icon: FileCheck2,
    title: 'Documentation',
    desc: 'Transparent paperwork, legal verification, and negotiation — handled end-to-end so nothing catches you off guard.',
  },
  {
    icon: KeyRound,
    title: 'Handover & Support',
    desc: 'From registration to move-in (or construction completion), we stay involved until the job is actually done.',
  },
]

function OurProcess() {
  return (
    <div style={{
      background: '#F5EEE4',
      padding: '110px clamp(24px,6vw,120px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24 }}
          >
            How We Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'Source Serif 4, serif',
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              fontWeight: 400, color: '#14100D',
            }}
          >
            Our <span style={{ fontStyle: 'italic', color: '#C47856' }}>Process</span>
          </motion.h2>
        </div>

        <div className="process-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          background: 'rgba(196,120,86,0.06)',
        }}>
          {PROCESS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22,1,0.36,1] }}
                style={{
                  background: '#F5EEE4',
                  padding: '40px 28px',
                  position: 'relative',
                }}
              >
                <div style={{
                  position: 'absolute', top: 32, right: 28,
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: 48, fontWeight: 600,
                  color: 'rgba(196,120,86,0.08)',
                  lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(196,120,86,0.08)',
                  border: '1px solid rgba(196,120,86,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 22,
                }}>
                  <Icon size={20} color="#C47856" strokeWidth={1.75} />
                </div>
                <h3 style={{
                  fontFamily: 'Source Serif 4, serif',
                  fontSize: 21, fontWeight: 500,
                  color: '#14100D', marginBottom: 10,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 13.5, fontWeight: 300,
                  lineHeight: 1.7, color: '#8C7F72',
                }}>
                  {p.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <Link to="/contact" data-cursor className="btn-gold">
            <span>Start the Conversation</span>
          </Link>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) { .process-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px) { .process-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Services />
      <OurProcess />
    </>
  )
}
