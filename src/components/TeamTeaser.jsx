import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, FileCheck2, HardHat, HeadphonesIcon } from 'lucide-react'

const DEPARTMENTS = [
  { Icon: Users,       title: 'Sales & Advisory',        desc: 'Guiding buyers and investors to the right property.' },
  { Icon: FileCheck2,  title: 'Legal & Documentation',    desc: 'Transparent paperwork and RERA-compliant processes.' },
  { Icon: HardHat,     title: 'Construction & Projects',  desc: 'On-ground execution, quality control, and timelines.' },
  { Icon: HeadphonesIcon, title: 'Client Support',        desc: 'Staying with you well past the handover.' },
]

export default function TeamTeaser() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <div style={{
      background: '#002B42',
      padding: '120px clamp(24px,6vw,120px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle at 10% 15%, rgba(249,168,25,0.08) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-label"
            style={{ justifyContent: 'center', marginBottom: 24, color: '#FFC670' }}
          >
            Our Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'var(--heading-section)',
              fontWeight: 700,
              letterSpacing: 'var(--spacing-heading-section)',
              color: '#F7F8FA',
            }}
          >
            The People Behind <span style={{ fontStyle: 'italic', color: '#F9A819' }}>Sri Sri Homz</span>
          </motion.h2>
        </div>

        <div className="team-teaser-grid" style={{
          display: 'grid',
          gridTemplateColumns: '340px 1fr',
          gap: 56,
          alignItems: 'center',
          marginBottom: 56,
        }}>
          {/* Founder mini-card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{ position: 'relative', width: 180, margin: '0 auto 20px' }}>
              {!photoFailed ? (
                <img
                  src="/yashank.png"
                  alt="Yashank Arora — Founder, Sri Sri Homz"
                  onError={() => setPhotoFailed(true)}
                  style={{
                    width: 180, height: 180, borderRadius: '50%',
                    objectFit: 'cover', border: '2px solid rgba(249,168,25,0.4)',
                    display: 'block', margin: '0 auto',
                  }}
                />
              ) : (
                <div style={{
                  width: 180, height: 180, borderRadius: '50%',
                  background: 'rgba(249,168,25,0.08)',
                  border: '2px solid rgba(249,168,25,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)', fontSize: 34, fontWeight: 700, color: '#F9A819',
                  margin: '0 auto',
                }}>
                  YA
                </div>
              )}
            </div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--heading-card)', fontWeight: 700, letterSpacing: 'var(--spacing-heading-card)', color: '#F7F8FA', marginBottom: 4 }}>
              Yashank Arora
            </p>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F9A819',
            }}>
              Founder & CEO
            </p>
          </motion.div>

          {/* Department cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 20,
          }}>
            {DEPARTMENTS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(249,168,25,0.18)',
                  padding: '28px 24px',
                }}
              >
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'rgba(249,168,25,0.1)',
                  border: '1px solid rgba(249,168,25,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <d.Icon size={18} color="#F9A819" strokeWidth={1.75} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, letterSpacing: 'var(--spacing-heading-card)', color: '#F7F8FA', marginBottom: 8 }}>
                  {d.title}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, lineHeight: 1.6, color: 'rgba(247,248,250,0.65)' }}>
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/team" data-cursor className="btn-outline-gold">
            Meet the Full Team
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .team-teaser-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
